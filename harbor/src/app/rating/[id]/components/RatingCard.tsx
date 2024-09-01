"use client";

import { useState } from "react";
import Star from "./Star";
import Image from "next/image";
import tiago from "../../../../../assets/tiago.svg";
import { Textarea } from "flowbite-react";
import { Typography } from "@/components/Typography/Typography";
import { AvaliacaoDto } from "@/types/avaliacao/avaliacaoCriacaoDto";

type CardProps = {
  prestadorId: number;
  foto?: any;
  nomePrestador: string;
  cnpj: string
  adicionarAvaliacao: (avaliacao: AvaliacaoDto) => void;
};

export function RatingCard(props: CardProps) {
  const { prestadorId, foto, nomePrestador } = props;
  const [nota, setNota] = useState<number>(0);
  const [notaAtual, setNotaAtual] = useState<number>(0);
  const [mensagem, setMensagem] = useState<string | undefined>();
  const resetarNota = () => setNotaAtual(0);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = event.target.value;
    setMensagem(newMessage);
    props.adicionarAvaliacao({
      idPrestador: prestadorId,
      estrelas: nota,
      comentario: newMessage,
      cnpjEmpresa: props.cnpj
    });
  };

  const handleStarClick = (newNota: number) => {
    setNota(newNota);
    props.adicionarAvaliacao({
      idPrestador: prestadorId,
      estrelas: nota,
      comentario: mensagem,
      cnpjEmpresa: props.cnpj
    });
  };

  // onsubmit(() => {
  //   const newAvaliacao: AvaliacaoDto = {
  //     idPrestador: 1,
  //     estrelas: nota,
  //     comentario: mensagem,
  //     cnpjEmpresa: props.cnpj
  //   }

  //   adicionarAvaliacao(newAvaliacao)
  // })

  return (
    <>
      <div className="bg-white h w-2/4 border-2 border-stone-700 rounded-xl">
        <div className="p-10 flex flex-col gap-7">
          <div className="flex flex-row justify-center">
            <Image
              className="rounded-full"
              width="200"
              height="200"
              src={foto || tiago}
              alt={nomePrestador}
            ></Image>
          </div>

          <Typography color="black">
            Avalie o serviço de {nomePrestador}
          </Typography>

          <div className="flex flex-row justify-center">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                avaliar={() => handleStarClick(i + 1)}
                preencher={notaAtual ? notaAtual >= i + 1 : nota >= i + 1}
                notaTemp={() => setNotaAtual(i + 1)}
                resetar={resetarNota}
              />
            ))}
          </div>

          <div className="relative">
            <Typography
              className="absolute left-3 top-2"
              textSize="xs"
              color="black"
            >
              Deixe seu comentário:
            </Typography>
          </div>

          <form className="flex flex-col justify-center gap-6">
            <Textarea
              onChange={handleChange}
              value={mensagem}
              disabled={nota === 0}
              className="border-stone-400 border-2 resize-none h-20"
            />
          </form>
        </div>
      </div>
    </>
  );
}
