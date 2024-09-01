export type AvaliacaoDto = {
        idPrestador: number
        estrelas: number
        cnpjEmpresa: string
        comentario?: string
}

export type AvaliacaoCriacaoDto = {
    codigoPedido: string
    idCliente: number
    avaliacoes: AvaliacaoDto[]
}