'use client'

import axios from "axios";
import { RatingCard } from "./components/RatingCard";
import { Heading } from "@/components/Heading/Heading";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { AvaliacaoDto } from "@/types/avaliacao/avaliacaoCriacaoDto";
import { PrestadorListagemDto } from "@/types/prestador/PrestadorListagemDto";
import Swal from "sweetalert2"
import { PedidoListagemDto } from "@/types/pedido/PedidoListagemDto";

type RatingProps = {
    params: {
        id: string
    }
}


export default function Rating(props: RatingProps) {
    const [pedido, setPedido] = useState<PedidoListagemDto>()
    useEffect(() => {
        const fetchPedido = async () => {
          try {
            const response = await axios.get<PedidoListagemDto>(`http://localhost:8080/pedidos/${props.params.id}`);
            setPedido(response.data); // Acessa a propriedade 'data' que contém os dados do tipo 'PedidoListagemDto'
          } catch (error) {
            Swal.fire({
                text: 'Sua solicitação não pode ser carregada',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
            console.error('Erro ao buscar o pedido:', error);
          }
        };
    
        fetchPedido();
      }, [props.params.id]); 
    const [avaliacoes, setAvaliacoes] = useState<AvaliacaoDto[]>([])
    const [isLoading, setLoading] = useState<boolean>(false)
    const loadingAnimation = (
        <div className="flex items-center justify-center h-7 w-7 border-gray-200 rounded-lg bg-blue dark:bg-gray-800 dark:border-gray-700">
            <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="blue"/></svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
    const adicionarAvaliacao = (avaliacao: AvaliacaoDto) => {
        setAvaliacoes(prevAvaliacoes => {
            const index = prevAvaliacoes.findIndex(a => a.idPrestador === avaliacao.idPrestador);
            if (index !== -1) {
                const updatedAvaliacoes = [...prevAvaliacoes];
                updatedAvaliacoes[index] = avaliacao;
                return updatedAvaliacoes;
            } else {
                return [...prevAvaliacoes, avaliacao];
            }
        });
    };
    const handleClick = async () => {
        setLoading(true)

        try {
            await axios.post("http://localhost:8080/avaliacoes/avaliar", {
                codigoPedido: pedido?.codigoPedido,
                idCliente: pedido?.cliente.id,
                avaliacoes
            })
            Swal.fire({
                text: 'Avaliação enviada. Obrigado pelo feedback!',
                icon: 'success',
            })
        } catch(error) {
            console.log(error)
            Swal.fire({
                text: 'Houve um problema na sua solicitação',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        } finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <div className="flex justify-center items-center h-auto">
                <Heading color="black" size={1}>Avaliação</Heading>
            </div>
            
            <div className="flex flex-row justify-center gap-20">
                {
                    Array.from(
                    {length: pedido?.prestadores.length}, (_, i) => 
                    <RatingCard
                        key={i} 
                        prestadorId={1}
                        nomePrestador={"Jarbas"}
                        adicionarAvaliacao={adicionarAvaliacao}
                        cnpj={"111222333"}
                    />)
                }
            </div>

            <div className="flex justify-center mt-7">
                <Button
                    pill
                    color="light"
                    className='w-64 text-white bg-blue flex items-center justify-center text-center text-base enabled:hover:bg-white enabled:hover:text-blue'
                    type='submit'
                    onClick={handleClick}
                    disabled={avaliacoes.length === 0 || isLoading}
                >
                    {isLoading ? loadingAnimation : "Avaliar"}
                </Button>
            </div>
        </div>
    )
}