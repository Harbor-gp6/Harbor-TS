import { ReactNode } from 'react'
import { InternSideNav } from '../InternSideNav/InternSideNav'
import { NavBarMainContent } from '../InternNavbar/components/NavBarMainContent'
import { GetEmployeeById } from '@/lib/get-employee-by-id'
import { useAuthentication } from '@/hooks/use-authentication'
import { cookies } from 'next/headers'
import { SignInResult } from '@/types/SignInResult'

type DashboardLayoutProps = {
  children: ReactNode
}

export async function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props

  const userCookies = cookies()
  const userInfos = userCookies.get('user')
  const user: SignInResult = JSON.parse(userInfos?.value || '')
  const employee = await GetEmployeeById(user.userId)

  return (
    <div className='flex flex-col w-screen bg-white'>
      <NavBarMainContent
        enterpriseName={employee.empresa.nomeFantasia}
        userName={employee.nome}
        userSurname={employee.sobrenome}
        userEmail={employee.email}
        userRole={employee.cargo}
      />
      <div className='w-screen min-h-screen flex overflow-x-hidden justify-between'>
        <InternSideNav />

        {children}
      </div>
    </div>
  )
}