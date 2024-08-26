import DashboardMainContent from './components/DashboardMainContent'

type DashboardPageProps = {
  params: {
    id: number
  }
}

export default async function DashboardPage (props: DashboardPageProps) {
  const id = props.params.id

  return (
    <DashboardMainContent id={id} />
  )
}
