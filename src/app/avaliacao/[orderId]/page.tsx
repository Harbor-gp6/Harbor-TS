import { Container } from '@/components/Container/Container'
import { Heading } from '@/components/Heading/Heading'
import { RatingForm } from './components/RatingForm'
import { GetOrderByCode } from '@/lib/get-order-by-code'
import Image from 'next/image'

type RatingPageProps = {
  params: {
    orderId: string
  }
}

export default async function RatingPage(props: RatingPageProps) {
  const orderId = props.params.orderId
  const getOrderInfos = await GetOrderByCode(orderId)
  const orderEmployees = getOrderInfos?.pedidoPrestador

  return (
    <div className='flex flex-col w-screen min-h-screen bg-white justify-center'>
      <Container
        maxWidth='md'
        className="flex flex-col items-center justify-center gap-6"
      >
        <Image
          src='/images/logos/harborLogoAzul.svg'
          alt='Logo Harbor'
          height={200}
          width={200}
          className='w-40 h-40'
        />

        <Heading
          noGutters
          size={4}
          color='blue'
          className='text-center'
        >
          Olá {getOrderInfos?.nomeCliente}, gostariamos de saber como foi seu atendimento:
        </Heading>

        {getOrderInfos && (
          <RatingForm
            employeesList={orderEmployees || []}
            orderId={orderId}
            clientId={getOrderInfos.idCliente }
          />
        )}
      </Container>
    </div>
  )
}
