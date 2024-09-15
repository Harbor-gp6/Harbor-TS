import { PrestadorListagemDto } from '../prestador/PrestadorListagemDto'
import { ServicoListagemDto } from '../servico/ServicoListagemDto'

export type PedidoPrestador = {
  prestador: PrestadorListagemDto
  servico: ServicoListagemDto
}
