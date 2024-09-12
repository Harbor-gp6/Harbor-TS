import { DashboardLayout } from '@/components/DashboardLayout/DashboardLayout'
import { ReactNode } from 'react'

type DashboardPageLayoutProps = {
  children: ReactNode
  params: {
    id: string
  }
}

export default function DashboardPageLayout (props: DashboardPageLayoutProps) {
  const { children } = props
  const id = props.params.id

  return (
    <DashboardLayout id={id}>
      {children}
    </DashboardLayout>
  )
}
