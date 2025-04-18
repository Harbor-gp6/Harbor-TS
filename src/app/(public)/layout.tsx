import { Footer } from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { ReactNode } from 'react'

type PublicPageLayoutProps = {
  children: ReactNode
}

export default function PublicPageLayout ({ children }: PublicPageLayoutProps) {
  return (
    <div className='flex flex-col overflow-y-hidden bg-white'>
      <Header />
        {children}
      <Footer />
    </div>
  )
}
