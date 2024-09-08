import { Container } from '@/components/Container/Container'
import { PedidoContent } from './components/PedidoContent'
import { GetEnterpriseById } from '@/lib/get-enterprise-by-id'
import { GetEmployeesByEnterpriseId } from '@/lib/get-employees-by-enterprise-id'
import { GetServicesByEnterpriseId } from '@/lib/get-services-by-enterprise-id'

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

  return (
    <Container className="w-screen flex flex-col justify-center text-center items-center pt-6 pb-4">
      <PedidoContent
        employees={employees}
        enterpriseId={enterpriseId}
        services={services}
        enterprise={enterprise}
      />
    </Container>

    /* {openFormModal && (
      <ModalFormCliente
        open={openFormModal}
        onClose={() => setOpenFormModal(false)}
        totalTime={''}
        totalValue={''}
        onBack={function (): void {
          throw new Error('Function not implemented.')
        }}
        nameValue={''}
        surnameValue={''}
        cpfValue={''}
        phoneValue={''}
        emailValue={''}
        onChange={function (): void {
          throw new Error('Function not implemented.')
        }}
        onSubmit={function (): void {
          throw new Error('Function not implemented.')
        }}
        paymentValue={''} />
    )} */
  )
}
