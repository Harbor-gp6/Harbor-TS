'use client'

import { Sidebar } from "flowbite-react"
import { HiChartPie, HiInbox, HiUser, HiViewBoards } from "react-icons/hi"
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

type ProviderCardProps = {
  name: string
  lastName: string
  role: string
  imgSrc: string
}

type InternSideNavProps = {
  id: string | number
}

export function InternSideNav(props: InternSideNavProps) {
  const { id } = props
  const pathname = usePathname()
  console.log(pathname)

  return (
    <>
      <Sidebar aria-label="Sidebar with call to action button example" color='black' className="hidden md:block text-white">
        <div className='flex flex-col h-full'>
          <Sidebar.Items className='h-full'>
            <Sidebar.ItemGroup className='h-full'>
              <Sidebar.Item href={`/dashboard/${id}`} icon={HiChartPie} className={clsx(
                'hover:bg-blueEnd',
                'hover:text-white',
                pathname === `/dashboard/${id}` && ['bg-blue text-white']
              )}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href={`/dashboard/${id}/pedidos`} icon={HiViewBoards} className={clsx(
                'hover:bg-blueEnd',
                'hover:text-white',
                pathname === `/dashboard/${id}/pedidos` && ['bg-blue text-white']
              )}>
                Agenda
              </Sidebar.Item>
              <Sidebar.Item href={`/dashboard/${id}/relatorios`} icon={HiInbox} className={clsx(
                'hover:bg-blueEnd',
                'hover:text-white',
                pathname === `/dashboard/${id}/relatorios` && ['bg-blue text-white']
              )}>
                Relatórios
              </Sidebar.Item>
              <Sidebar.Item href={`/dashboard/${id}/prestadores`} icon={HiUser} className={clsx(
                'hover:bg-blueEnd',
                'hover:text-white',
                pathname === `/dashboard/${id}/prestadores` && ['bg-blue text-white']
              )}>
                Prestadores
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </Sidebar>
    </>
  )
}
