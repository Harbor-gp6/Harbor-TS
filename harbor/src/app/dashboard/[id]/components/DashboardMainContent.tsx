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

type DashboardMainContentProps = {
  id: number | string
}

export async function DashboardMainContent (props: DashboardMainContentProps) {
  const { id } = props
  const employeeId = id
  const userCookies = cookies()
  const userInfos = userCookies.get('user')
  const user: SignInResult = JSON.parse(userInfos?.value || '')
  const orders = await GetOrdersByEmployeeId(user.token)
  const monthRendings = await GetMonthlyGrossRevenue(employeeId, user.token)
  const dailyRendings = await GetDailyGrossRevenue(employeeId, user.token)
  const pedidosAtendidos = orders?.filter((pedido) => pedido.finalizado === true) ?? []
  const ultimos = pedidosAtendidos.sort((a, b) => b.dataAgendamento.getUTCDate() - a.dataAgendamento.getUTCDate()).slice(0, 3)
  const pedidosPendentes = orders?.filter((pedido) => (pedido.finalizado === false )) ?? []
  const pedidosHoje = pedidosAtendidos.filter((pedido) => format(new Date(pedido.dataAgendamento), 'PP') === format(new Date().toISOString(), 'PP'))

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
            <TimelineCustom pedidosList={ultimos} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
            <PieChartCustom />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center">
            <ChartCustom pedidosList={orders || []} />
          </div>
        </div>
      </div>
    </div>
  )
}
