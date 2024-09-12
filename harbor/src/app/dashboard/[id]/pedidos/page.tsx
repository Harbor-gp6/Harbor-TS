import { ServiceCard } from '@/components/ServiceCard/ServiceCard'
import { Typography } from '@/components/Typography/Typography'
import { GetOrdersByEmployeeId } from '@/lib/get-orders-by-employee-id'
import { PedidoListagemDto } from '@/types/pedido/PedidoListagemDto'
import { PedidoServicoListagemDto } from '@/types/pedido/PedidoServicoListagemDto'
import { SignInResult } from '@/types/SignInResult'
import { format } from 'date-fns'
import { cookies } from 'next/headers'

export default async function DashboardOrdersPage() {
  const userCookies = cookies()
  const userInfos = userCookies.get('user')
  const user: SignInResult = JSON.parse(userInfos?.value || '')
  const pedidosPendentes = await GetOrdersByEmployeeId(user.token)

  return (
    <div className='flex flex-col gap-6 w-full items-center'>
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
          id={pedido.id}
          service={pedido.listaServico.map((servico: PedidoServicoListagemDto) => (
            servico.servico.descricaoServico
          ))}
          provider={`${pedido.prestador.nome} ${pedido.prestador.sobrenome}`}
          time={format(new Date(pedido.dataAgendamento).toISOString(), 'PP')}
          client={pedido.cliente}
          price={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pedido.total)}
          payment={pedido.formaPagamentoEnum}
          onClose={() => ''}
        />
      ))}
    </div>
  )
}
