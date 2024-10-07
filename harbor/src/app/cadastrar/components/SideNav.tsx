import { ReactNode } from 'react'
import { Heading } from '../../../components/Heading/Heading'

type SideNavProps = {
  children: ReactNode
}

export function SideNav(props: SideNavProps) {
  const { children } = props

  return (
    <div className='flex flex-col bg-white py-10 px-4 items-start border-r border-black h-full max-w-96 gap-6'>
      <Heading
        size={5}
        color='black'
      >
        Cadastro de estabelecimento
      </Heading>


      <div className='flex flex-col gap-4 w-full justify-center'>
        {children}
      </div>
    </div>
  )
}
