import { ServicoCriacaoDto } from '@/types/servico/ServicoCriacaoDto'
import axios from 'axios'

export async function UpdateService (enterpriseId: number | string, serviceId: number, serviceData: ServicoCriacaoDto, token: string) {

  const res = await axios.put(`http://localhost:8080/servicos/${Number(enterpriseId)}/${serviceId}`, serviceData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return res
}
