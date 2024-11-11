import { EmpresaCriacaoDto } from '../empresa/EmpresaCriacaoDto'

export type PrestadorCriacaoDto = {
  nome:	string
  sobrenome:	string
  telefone:	string
  cpf:	string
  email:	string
  senha:	string
  cargo:	string
  empresa:	EmpresaCriacaoDto
  empresaId:	number
}
