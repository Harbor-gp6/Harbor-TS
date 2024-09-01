import { PrestadorListagemDto } from '../prestador/PrestadorListagemDto'
import { PedidoProdutoListagemDto } from './PedidoProdutoListagemDto'
import { PedidoServicoListagemDto } from './PedidoServicoListagemDto'

export type PedidoListagemDto = {
  id: number
  cliente: {
    id: number
  }
  listaProduto: PedidoProdutoListagemDto[]
  listaServico: PedidoServicoListagemDto[]
  dataAgendamento: Date
  prestadores: PrestadorListagemDto[]
  codigoPedido: string
  finalizado: boolean
  total: number
  formaPagamentoEnum: string
}
