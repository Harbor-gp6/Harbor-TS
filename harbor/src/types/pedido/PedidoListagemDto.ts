import { ClienteListagemDto } from '../cliente/ClienteListagemDto'
import { PedidoPrestador } from './PedidoPrestadorDto'
import { PedidoProdutoListagemDto } from './PedidoProdutoListagemDto'

export type PedidoListagemDto = {
  idPedido: number
  cliente: ClienteListagemDto
  idCliente: number
  nomeCliente: string
  pedidoProdutos: PedidoProdutoListagemDto[]
  dataAgendamento: Date
  pedidoPrestador: PedidoPrestador[]
  codigoPedido: string
  finalizado: boolean
  totalPedido: number
  formaPagamentoEnum: string
}
