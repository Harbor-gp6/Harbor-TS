import { PrestadorListagemDto } from '@/types/prestador/PrestadorListagemDto'
import axios from 'axios'

export async function GetEmployeeById (employeeId: string | number) {
  const res = await axios.get(`http://localhost:8080/usuarios/${employeeId}`)
  const employee: PrestadorListagemDto = res.data

  return employee
}
