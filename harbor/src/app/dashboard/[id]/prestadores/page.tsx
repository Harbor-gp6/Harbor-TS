import { Container } from '@/components/Container/Container'
import { EmployeeCard } from '@/components/EmployeeCard/EmployeeCard'
import { Typography } from '@/components/Typography/Typography'
import { GetEmployeesByEnterpriseId } from '@/lib/get-employees-by-enterprise-id'
import { PrestadorListagemDto } from '@/types/prestador/PrestadorListagemDto'
import { SignInResult } from '@/types/SignInResult'
import { cookies } from 'next/headers'

export default async function DashboardEmployeesPage() {
  const userCookies = cookies()
  const userInfos = userCookies.get('user')
  const user: SignInResult = JSON.parse(userInfos?.value || '')
  const employees = await GetEmployeesByEnterpriseId(user.idEmpresa.toString())

  return (
    <Container
      className="flex flex-col gap-6 w-full items-center"
      maxWidth='md'
    >
      {employees.length === 0 && (
        <div className='flex items-center justify-center w-full h-full'>
          <Typography
            color='black'
          >
            Nenhum Prestador Cadastrado
          </Typography>
        </div>
      )}
      <div
        className='flex flex-col w-full items-center py-10 gap-6'
      >
        {employees.length > 0 && employees.map((prestador: PrestadorListagemDto, index: any) => (
          <EmployeeCard
            key={index}
            name={prestador.nome}
            lastName={prestador.sobrenome}
            role={prestador.cargo}
            imgSrc={JSON.parse(prestador.foto).novaFoto || "https://via.placeholder.com/50"}
          />
        ))}
      </div>
    </Container>
  )
}
