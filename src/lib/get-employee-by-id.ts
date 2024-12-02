import { PrestadorListagemDto } from '@/types/prestador/PrestadorListagemDto'
import axios from 'axios'

export async function GetEmployeeById (employeeId: string | number) {
  const res = await axios.get(`http://100.29.19.154/api/usuarios/${employeeId}`)
  const employee: PrestadorListagemDto = res.data

  return employee
}
