import { EnderecoCriacaoDto } from '../endereco/EnderecoCriacaoDto'

export type EmpresaCriacaoDto = {
  id: number
  razaoSocial: string
  nomeFantasia: string
  cnpj: string
  endereco: EnderecoCriacaoDto
  dataCriacao: string
  horarioAbertura: Date
  horarioFechamento: Date
}
