import { ServicoListagemDto } from '@/types/servico/ServicoListagemDto'
import axios from 'axios'

export async function GetServicesByEnterpriseId (enterpriseId: string) {
  const id = Number(enterpriseId)

  const res = await axios.get(`http://100.29.19.154/api/servicos/empresa/${id}`)
  const services: ServicoListagemDto[] = res.data

  return services
}
