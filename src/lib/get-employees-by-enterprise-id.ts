import { PrestadorListagemDto } from '@/types/prestador/PrestadorListagemDto'
import axios from 'axios'

export async function GetEmployeesByEnterpriseId (enterpriseId: string) {
  const id = Number(enterpriseId)

  const res = await axios.get(`http://100.29.19.154/api/usuarios/empresa/${id}`)
  const employees: PrestadorListagemDto[] = res.data

  return employees
}
