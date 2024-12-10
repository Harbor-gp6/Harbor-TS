import { ServicoCriacaoDto } from '@/types/servico/ServicoCriacaoDto'
import axios from 'axios'

export async function CreateService (serviceData: ServicoCriacaoDto, token: string) {

  const res = await axios.post(`http://100.28.169.213/api/servicos`, serviceData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return res
}
