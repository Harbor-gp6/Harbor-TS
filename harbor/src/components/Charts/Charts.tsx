'use client'

import { format } from 'date-fns'
import React from "react"
import { BarChart } from '../BarChart/BarChart'

// Dados mockados para diferentes componentes do dashboard
const totalAtendimentos = 30
const receitaTotal = 4500 // em R$
const novosClientes = 5
const clientesRecorrentes = 25

const atendimentosPorHorarioDataMock = [
  { horario: "08:00", atendimentos: 2 },
  { horario: "09:00", atendimentos: 3 },
  { horario: "10:00", atendimentos: 4 },
  { horario: "11:00", atendimentos: 3 },
  { horario: "12:00", atendimentos: 2 },
  { horario: "13:00", atendimentos: 3 },
  { horario: "14:00", atendimentos: 5 },
  { horario: "15:00", atendimentos: 4 },
  { horario: "16:00", atendimentos: 2 },
  { horario: "17:00", atendimentos: 2 }
]

export const atendimentosPorHorarioOptions = {
  title: "Atendimentos por Horário",
  hAxis: { title: "Horário" },
  vAxis: { title: "Atendimentos" },
  legend: { position: "bottom" },
}

const servicosPopularesDataMock = [
  { servico: "Corte de Cabelo", quantidade: 15 },
  { servico: "Barba", quantidade: 10 },
  { servico: "Corte + Barba", quantidade: 5 }
]

export const servicosPopularesOptions = {
  title: "Serviços Mais Populares",
  legend: { position: "bottom" },
}

type ChartCustomProps = {
  pedidosList: any[]
}

export function ChartCustom({ pedidosList }: ChartCustomProps) {
  const pedidosPorHora: any = {}

  for (const pedido of pedidosList) {
    const hora = pedido.dataAgendamento
    // Se a hora já existe no objeto, incrementar a contagem, caso contrário, iniciar com 1
    if (pedidosPorHora[hora]) {
      pedidosPorHora[hora]++
    } else {
      pedidosPorHora[hora] = 1
    }
  }

  const servicosObj: any = {}

  // Iterar sobre o array de serviços
  for (const servico of pedidosList) {
    const nomeServico = servico.pedidoPrestador ? servico.pedidoPrestador[0]?.servico.descricaoServico : ''
    // Se a hora já existe no objeto, incrementar a contagem, caso contrário, iniciar com 1
    if (servicosObj[nomeServico]) {
      servicosObj[nomeServico]++
    } else {
      servicosObj[nomeServico] = 1
    }
  }

  // Converter o objeto em um array de arrays
  const servicosPopularesData = Object.keys(servicosObj).map(servico => ({
    servico,
    quantidade: servicosObj[servico]
  }))


  const atendimentosPorHorarioData = Object.keys(pedidosPorHora).map(hora => ({
    horario: format(new Date(hora).toISOString(), 'p'),
    pedidos: pedidosPorHora[hora]
}));

  return (
    <div className="w-full h-full flex flex-col sm:flex gap-4 justify-between items-center">
      <div className="w-full">
        <BarChart
          className="h-72 w-full"
          data={atendimentosPorHorarioData}
          index="horario"
          categories={["pedidos"]}
          yAxisWidth={80}
          layout="vertical"
        />
      </div>
      <div className="w-full">
        <BarChart
          className="h-72 w-full"
          data={servicosPopularesData}
          index="servico"
          categories={["quantidade"]}
          yAxisWidth={80}
          layout="horizontal"
        />
      </div>
    </div>
  )
}
