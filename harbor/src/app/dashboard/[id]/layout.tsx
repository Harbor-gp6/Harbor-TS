import { DashboardLayout } from '@/components/DashboardLayout/DashboardLayout'
import { ReactNode } from 'react'

type DashboardPageLayoutProps = {
  children: ReactNode
}

export default function DashboardPageLayout (props: DashboardPageLayoutProps) {
  const { children } = props

  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  )
}
