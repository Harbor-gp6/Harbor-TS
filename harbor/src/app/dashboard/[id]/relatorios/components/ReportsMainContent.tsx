'use client'

import { Container } from '@/components/Container/Container'
import { useAuth } from '@/contexts/auth-context'
import { DownloadReportEmployee } from '@/lib/download-employee-report'
import { DownloadReport } from '@/lib/download-report'
import { useState } from 'react'

export function ReportMainContent() {
  const { user } = useAuth()
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  return (
    <Container
      maxWidth='lg'
      className="flex flex-col gap-6 items-center"
    >
      <div className="space-y-6 mb-3">
        <p className="text-lg font-semibold text-gray-700">
          Selecione o período:
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
            Início
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 block w-fit text-black border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
            Fim
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 block w-fit text-black border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {/* <p className="text-gray-800">Faturamento Bruto</p>
            <p className="text-gray-800">Ticket Médio</p> */}
        <button onClick={async () => await DownloadReport(startDate, endDate, user.token)}>
          <p className="text-gray-800">Produtos mais consumidos</p>
        </button>
        <button onClick={async () => await DownloadReportEmployee(startDate, endDate, user.token)}>
          <p className="text-gray-800">Pedidos por prestador</p>
        </button>
        <button onClick={async () => await DownloadReport(startDate, endDate, user.token)}>
          <p className="text-gray-800">Avaliação por prestador</p>
        </button>
        {/* <p className="text-gray-800">Receita por Tipo de Serviço</p>
            <p className="text-gray-800">Receita por Produto Consumido</p>
            <p className="text-gray-800">Crescimento da Receita</p>
            <p className="text-gray-800">Receita por Cliente</p>
            <p className="text-gray-800">Receita por Data de Agendamento</p>
            <p className="text-gray-800">Receita por Horário Ocupado</p> */}
      </div>
    </Container>
  )
}
