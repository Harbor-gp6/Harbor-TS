import axios from 'axios'

export async function FinishOrder (id: number, token: string) {
  await axios.post(`http://localhost:8080/pedidos/finalizarPedido/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(() => {
    alert("Atendimento realizado com sucesso")
  }).catch((err) => {
    alert(err)
  })
}
