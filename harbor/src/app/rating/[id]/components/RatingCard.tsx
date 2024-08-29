'use client'

import { useState } from "react";
import Star from "./Star";
import Image from "next/image";
import tiago from "../../../../../assets/tiago.svg"
import { Button, Textarea } from "flowbite-react";
import { Typography } from "@/components/Typography/Typography";

type CardProps = {
    prestadorId: number
    foto?: any
    nomePrestador: string
}

export function RatingCard(props: CardProps) {
    const { prestadorId, foto, nomePrestador } = props
    const [nota, setNota] = useState<number>(0)
    const [notaAtual, setNotaAtual] = useState<number>(0)
    const [mensagem, setMensagem] = useState<string | null>(null)
    const resetarNota = () => setNotaAtual(0)

    return (
        <>
            <div className="h-3/4 w-2/4 border-2 border-stone-400 rounded-xl">
                <div className="p-10 flex flex-col gap-7">
                    <div className="flex flex-row justify-center">
                        <Image className="rounded-full" width="200" height="200" src={tiago} alt={tiago}></Image>
                    </div>

                    <Typography color="black">
                        Avalie o serviço de {nomePrestador}
                    </Typography>

                    <div className="flex flex-row justify-center">
                        {Array.from({length: 5}, (_, i) => 
                        <Star 
                            key={i} 
                            avaliar={() => setNota(i + 1)} 
                            preencher={notaAtual ? notaAtual >= i + 1 : nota >= i + 1}
                            notaTemp={() => setNotaAtual(i + 1)} 
                            resetar={resetarNota} />)}
                    </div>

                    <form className="flex flex-col justify-center gap-6">
                        <Textarea disabled={nota === 0} className="resize-none h-40"/>

                        <Button
                        pill
                        color="light"
                        className='text-white bg-blue flex items-center justify-center text-center text-base enabled:hover:bg-white enabled:hover:text-blue'
                        type='submit'
                        >
                            Avaliar
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}