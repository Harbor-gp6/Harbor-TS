import axios from 'axios'

export async function DeleteService (serviceId: number, token: string) {

  const res = await axios.delete(`http://localhost:8080/servicos/${Number(serviceId)}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return res
}
