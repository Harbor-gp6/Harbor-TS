import { ProdutoListagemDto } from '../produto/ProdutoListagemDto'

export type PedidoProdutoListagemDto = {
  id: number
  produto: ProdutoListagemDto
  quantidade: number
}
