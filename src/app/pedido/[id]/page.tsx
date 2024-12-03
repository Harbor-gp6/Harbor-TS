import { Container } from '@/components/Container/Container'
import { PedidoContent } from './components/PedidoContent'
import { GetEnterpriseById } from '@/lib/get-enterprise-by-id'
import { GetEmployeesByEnterpriseId } from '@/lib/get-employees-by-enterprise-id'
import { GetServicesByEnterpriseId } from '@/lib/get-services-by-enterprise-id'
import { cookies } from 'next/headers'
import { SignInResult } from '@/types/SignInResult'
import { GetEnterpriseBanner } from '@/lib/get-enterprise-banner'
import { GetEnterpriseLogo } from '@/lib/get-enterprise-logo'

type PedidoProps = {
  params: {
    id: string
  }
}

export default async function Pedido(props: PedidoProps) {
  const enterpriseId = props.params.id
  const enterprise = await GetEnterpriseById(enterpriseId)
  const employees = await GetEmployeesByEnterpriseId(enterpriseId)
  const services = await GetServicesByEnterpriseId(enterpriseId)
  const enterpriseBanner = await GetEnterpriseBanner(enterpriseId)
  const enterpriseLogo = await GetEnterpriseLogo(enterpriseId)

  console.log('Empresa:', enterprise)

  return (
    <Container className="w-screen flex flex-col justify-center text-center items-center pt-6 pb-4">
      <PedidoContent
        employees={employees}
        enterpriseId={enterpriseId}
        services={services}
        enterprise={enterprise}
        products={[]}
        enterpriseBanner={enterpriseBanner?.novaFoto || ''}
        enterpriseLogo={enterpriseLogo?.novaFoto || ''}
      />
    </Container>
  )
}
