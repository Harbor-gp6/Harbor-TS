import { Container } from '@/components/Container/Container'
import { ServiceCard } from '@/components/ServiceCard/ServiceCard'
import { Typography } from '@/components/Typography/Typography'
import { GetOrdersByEmployeeId } from '@/lib/get-orders-by-employee-id'
import { PedidoListagemDto } from '@/types/pedido/PedidoListagemDto'
import { PedidoPrestador } from '@/types/pedido/PedidoPrestadorDto'
import { PedidoServicoListagemDto } from '@/types/pedido/PedidoServicoListagemDto'
import { PedidoPrestadorDto } from '@/types/pedidoV2/PedidoPrestadorDto'
import { SignInResult } from '@/types/SignInResult'
import { format } from 'date-fns'
import { cookies } from 'next/headers'

export default async function DashboardOrdersPage() {
  const userCookies = cookies()
  const userInfos = userCookies.get('user')
  const user: SignInResult = JSON.parse(userInfos?.value || '')
  const pedidosPendentes = await GetOrdersByEmployeeId(user.token)

  return (
    <Container
      maxWidth='lg'
      className='flex flex-col gap-6 w-full items-center py-10'
    >
      {!pedidosPendentes && (
        <div className='flex items-center justify-center w-full h-full'>
          <Typography
            color='black'
          >
            Nenhum pedido pendente
          </Typography>
        </div>
      )}
      {pedidosPendentes && pedidosPendentes.length > 0 && pedidosPendentes.map((pedido: PedidoListagemDto, index: any) => (
        <ServiceCard
          key={index}
          id={pedido.idPedido}
          service={pedido.pedidoPrestador?.map((prestador: PedidoPrestador) => prestador?.descricaoServico || '')}
          provider={pedido.pedidoPrestador?.map((prestador: PedidoPrestador) => `${prestador?.nomePrestador || ''}`)}
          time={format(new Date(pedido.dataAgendamento).toISOString(), 'PP')}
          client={`${pedido.nomeCliente}`}
          price={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pedido.totalPedido)}
          payment={pedido.formaPagamentoEnum}
          orderCode={pedido.codigoPedido}
        />
      ))}
    </Container>
  )
}
