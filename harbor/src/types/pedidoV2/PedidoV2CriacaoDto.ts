import { ClienteCriacaoDto } from '../cliente/ClienteCriacaoDto'
import { PedidoPrestadorDto } from './PedidoPrestadorDto'
import { PedidoProdutoV2Dto } from './PedidoProdutoV2Dto'

export type PedidoV2CriacaoDto = {
  cliente: ClienteCriacaoDto
  cnpjEmpresa: string
  pedidoPrestador: PedidoPrestadorDto[]
  pedidoProdutos: PedidoProdutoV2Dto[]
  dataAgendamento: Date
  formaPagamento: string | number
}
