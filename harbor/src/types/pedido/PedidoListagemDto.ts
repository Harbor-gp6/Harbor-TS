import { PrestadorListagemDto } from '../prestador/PrestadorListagemDto'
import { PedidoProdutoListagemDto } from './PedidoProdutoListagemDto'
import { PedidoServicoListagemDto } from './PedidoServicoListagemDto'

export type PedidoListagemDto = {
  id: number
  cliente: string
  listaProduto: PedidoProdutoListagemDto[]
  listaServico: PedidoServicoListagemDto[]
  dataAgendamento: Date
  prestador: PrestadorListagemDto
  finalizado: boolean
  total: number
  formaPagamentoEnum: string
}
