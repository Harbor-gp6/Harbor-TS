import { PedidoListagemDto } from '@/types/pedido/PedidoListagemDto'
import axios from 'axios'

export async function GetDoneOrders (token: string) {
  const response = await axios.get('http://localhost:8080/pedidos/pedidosFinalizados', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })


  if (response.status === 200) {
    const orders: PedidoListagemDto[] = response.data
    return orders

  }

  return null
}
