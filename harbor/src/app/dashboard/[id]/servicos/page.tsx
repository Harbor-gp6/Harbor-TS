import { Container } from '@/components/Container/Container'
import { InternServiceCard } from '@/components/InternServiceCard/InternServiceCard'
import { GetServicesByEnterpriseId } from '@/lib/get-services-by-enterprise-id'
import { CreateServiceForm } from './components/CreateServiceForm'
import { cookies } from 'next/headers'
import { SignInResult } from '@/types/SignInResult'

type DashboardServicesPageProps = {
  params: {
    id: string
  }
}

export default async function DashboardServicesPage(props: DashboardServicesPageProps) {
  const id = props.params.id
  const services = await GetServicesByEnterpriseId(id)
  const userCookies = cookies()
  const userInfos = userCookies.get('user')
  const user: SignInResult = JSON.parse(userInfos?.value || '')
  return (
    <Container
      className="flex flex-col items-center gap-6 py-10"
      maxWidth='md'
    >
      <CreateServiceForm />

      <div className='flex flex-col w-full gap-4'>
        {services.length > 0 && services.map((service, index) => (
          <InternServiceCard
            token={user.token}
            key={index}
            id={service.id}
            price={service.valorServico}
            title={service.descricaoServico}
            time={service.tempoMedioEmMinutos}
          />
        ))}
      </div>
    </Container>
  )
}
