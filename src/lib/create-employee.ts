import { CriarFuncionario } from '@/types/prestador/CriarFuncionario'

import axios from 'axios'

export async function CreateEmployee (employeeData: CriarFuncionario, token: string) {

  const res = await axios.post(`http://100.29.19.154/api/usuarios/criar-funcionario`, employeeData, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return res
}
