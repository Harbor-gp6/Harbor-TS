import axios from 'axios'

export async function GetEmployeeBusyTime (employeeId: number) {
  const response = await axios.get(`http://100.28.169.213/api/usuarios/horariosOcupados/${employeeId}`)


  if (response.status === 200) {
    const orders: any[] = response.data
    return orders

  }

  return []
}
