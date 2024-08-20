import { ReactNode } from 'react'

type LoginPageLayoutProps = {
  children: ReactNode
}

export default function LoginPageLayout ({ children }: LoginPageLayoutProps) {
  return (
    <div className='flex flex-col w-full bg-white'>
      {children}
    </div>
  )
}
