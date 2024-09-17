import axios, { AxiosError } from 'axios'

export async function FinishOrder(id: number, token: string) {
  await axios.post(
    `http://localhost:8080/pedidos/finalizarPedido/${id}`,
    {}, // o corpo vazio da requisição POST
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  ).then(() => {
    alert("Atendimento realizado com sucesso");
    window.location.reload();
  }).catch((err: AxiosError) => {
    const errorData: any = err.response?.data;
    alert(err);
    console.error(errorData.message);
  });
}
