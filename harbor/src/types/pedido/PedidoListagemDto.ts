import { ClienteListagemDto } from '../cliente/ClienteListagemDto'
import { PedidoPrestador } from './PedidoPrestadorDto'
import { PedidoProdutoListagemDto } from './PedidoProdutoListagemDto'

export type PedidoListagemDto = {
  id: number
  cliente: ClienteListagemDto
  idCliente: number
  nomeCliente: string
  pedidoProdutos: PedidoProdutoListagemDto[]
  dataAgendamento: Date
  pedidoPrestador: PedidoPrestador[]
  finalizado: boolean
  totalPedido: number
  formaPagamentoEnum: string
}
