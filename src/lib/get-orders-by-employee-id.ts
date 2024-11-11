import { PedidoListagemDto } from '@/types/pedido/PedidoListagemDto'
import axios from 'axios'

export async function GetOrdersByEmployeeId (token: string) {
  const response = await axios.get('http://localhost:8080/pedidos/pedidosAbertos', {
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
