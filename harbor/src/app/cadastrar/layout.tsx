import { ReactNode } from 'react'

type RegisterPageLayoutProps = {
  children: ReactNode
}

export default function RegisterPageLayout (props: RegisterPageLayoutProps) {
  const { children } = props

  return (
    <div className='flex flex-col w-screen min-h-screen bg-white'>
      {children}
    </div>
  )
}
