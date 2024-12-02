import axios, { AxiosError } from 'axios'

export async function FinishOrder(code: string, token: string) {
  await axios.post(
    `http://100.29.19.154/api/pedidos/finalizarPedido/${code}`,
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
