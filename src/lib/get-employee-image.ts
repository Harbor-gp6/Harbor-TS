import { GetEmployeeById } from './get-employee-by-id'

export async function GetEmployeeImage(employeeId: string | number) {
  const employee = await GetEmployeeById(Number(employeeId))

  if (employee && employee.foto) {
    return employee.foto
  }

  return null
}
