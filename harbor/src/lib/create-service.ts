import { ServicoCriacaoDto } from '@/types/servico/ServicoCriacaoDto'
import axios from 'axios'

export async function CreateService (serviceData: ServicoCriacaoDto, token: string) {

  const res = await axios.post(`http://localhost:8080/servicos`, serviceData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return res
}
