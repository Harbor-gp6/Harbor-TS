import { PedidoListagemDto } from '@/types/pedido/PedidoListagemDto'
import axios from 'axios'

export async function GetOrderByCode (orderCode: string) {
  const response = await axios.get(`http://100.28.169.213/api/pedidos/${orderCode}`)


  if (response.status === 200) {
    const orders: PedidoListagemDto = response.data
    return orders
  }

  return null
}
