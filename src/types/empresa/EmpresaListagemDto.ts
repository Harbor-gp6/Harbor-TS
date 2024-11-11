import { EnderecoListagemDto } from '../endereco/EnderecoListagemDto'

export type EmpresaListagemDto = {
  id: number
  razaoSocial: string
  nomeFantasia: string
  cnpj: string
  endereco: EnderecoListagemDto
}
