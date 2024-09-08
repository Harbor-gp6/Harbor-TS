import { ReactNode } from 'react'

type OrderPageLayoutProps = {
  children: ReactNode
}

export default function OrderPageLayout (props: OrderPageLayoutProps) {
  const { children } = props

  return (
    <div className='bg-white'>
      {children}
    </div>
  )
}
