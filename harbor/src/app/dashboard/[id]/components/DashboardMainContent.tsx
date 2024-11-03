import { Typography } from '@mui/material'
import { TimelineCustom } from '@/components/Timeline/Timeline'
import { PieChartCustom } from '@/components/PieChart/PieChart'
import { ChartCustom } from '@/components/Charts/Charts'
import { GetOrdersByEmployeeId } from '@/lib/get-orders-by-employee-id'
import { GetMonthlyGrossRevenue } from '@/lib/get-monthly-gross-revenue'
import { GetDailyGrossRevenue } from '@/lib/get-daily-gross-revenue'
import { useAuthentication } from '@/hooks/use-authentication'
import { cookies } from 'next/headers'
import { SignInResult } from '@/types/SignInResult'
import { format } from 'date-fns'
import { GetOpenOrders } from '@/lib/get-open-orders'
import { GetDoneOrders } from '@/lib/get-done-orders'
import { BarChart } from '@/components/BarChart/BarChart'

type DashboardMainContentProps = {
  id: number | string
}

export async function DashboardMainContent(props: DashboardMainContentProps) {
  const { id } = props
  const employeeId = id
  const userCookies = cookies()
  const userInfos = userCookies.get('user')
  const user: SignInResult = JSON.parse(userInfos?.value || '')
  const openOrders = await GetOpenOrders(user.token)
  const doneOrders = await GetDoneOrders(user.token)
  const monthRendings = await GetMonthlyGrossRevenue(user.token)
  const dailyRendings = await GetDailyGrossRevenue(user.token)
  const pedidosAtendidos = doneOrders ?? []
  // const ultimos = pedidosAtendidos.sort((a, b) => b.dataAgendamento.getUTCDate() - a.dataAgendamento.getUTCDate()).slice(0, 3)
  const pedidosPendentes = openOrders ?? []
  const pedidosHoje = pedidosPendentes.filter((pedido) => format(new Date(pedido.dataAgendamento), 'PP') === format(new Date().toISOString(), 'PP'))

  const prestadorObj: any = {}

  // Iterar sobre o array de serviços
  for (const pedido of pedidosAtendidos) {
    const nomePrestador = pedido.pedidoPrestador ? pedido.pedidoPrestador[0]?.prestador?.nome : ''
    // Se a hora já existe no objeto, incrementar a contagem, caso contrário, iniciar com 1
    if (prestadorObj[nomePrestador]) {
      prestadorObj[nomePrestador]++
    } else {
      prestadorObj[nomePrestador] = 1
    }
  }

  const prestadoresPedidosQtd = Object.keys(prestadorObj).map(prestador => ({
    prestador,
    quantidade: prestadorObj[prestador]
  }))

  return (
    <div className="w-full h-full mb-20 p-0 bg-gray-200 pt-10 rounded-xl">
      <div className="container mx-auto p-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-3xl font-semibold text-gray-800">{pedidosAtendidos.length}</span>
            <span className="text-gray-600 text-sm mt-2">Clientes atendidos</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-3xl font-semibold text-gray-800">{pedidosPendentes.length}</span>
            <span className="text-gray-600 text-sm mt-2">Clientes para atender</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-3xl font-semibold text-gray-800">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dailyRendings)}</span>
            <span className="text-gray-600 text-sm mt-2">Faturado hoje</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-3xl font-semibold text-gray-800">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(monthRendings)}</span>
            <span className="text-gray-600 text-sm mt-2">Faturado neste mês</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md overflow-y-auto">
            <Typography variant="h5" className="text-gray-800 font-semibold mb-4">Timeline</Typography>
            <TimelineCustom pedidosList={pedidosAtendidos} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
            {/* <PieChartCustom /> */}
            <div className="w-full h-full flex flex-col sm:flex justify-start items-start">
              <div className="w-full">
                <BarChart
                  className="h-[400px] w-full"
                  data={prestadoresPedidosQtd}
                  index="prestador"
                  categories={["quantidade"]}
                  yAxisWidth={80}
                  layout="horizontal"
                  yAxisLabel='Quantidade de Pedidos por Prestadores'
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
            <ChartCustom pedidosList={pedidosAtendidos || []} />
          </div>
        </div>
      </div>
    </div>
  )
}
