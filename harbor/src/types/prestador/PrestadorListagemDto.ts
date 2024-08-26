import { EmpresaListagemDto } from '../empresa/EmpresaListagemDto'

export type PrestadorListagemDto = {
  id: number
  empresa: EmpresaListagemDto
  foto: string
  nome: string
  sobrenome: string
  telefone: string
  cpf: string
  email: string
  cargo: string
}
