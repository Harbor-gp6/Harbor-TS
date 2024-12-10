import axios from 'axios'

export async function DeleteService (serviceId: number, token: string) {

  const res = await axios.delete(`http://100.28.169.213/api/servicos/${Number(serviceId)}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return res
}
