import { ClienteCriacaoDto } from '../cliente/ClienteCriacaoDto'

export type PedidoCriacaoDto = {
  cliente: ClienteCriacaoDto
  dataAgendamento: Date
  servicos: number[]
  prestadorId: number
  formaPagamento: any
}
