'use client'

import { format } from 'date-fns'
import React from "react"
import { Chart } from "react-google-charts"

// Dados mockados para diferentes componentes do dashboard
const totalAtendimentos = 30
const receitaTotal = 4500 // em R$
const novosClientes = 5
const clientesRecorrentes = 25

export const atendimentosPorHorarioData = [
  ["Horário", "Atendimentos"],
  ["08:00", 2],
  ["09:00", 3],
  ["10:00", 4],
  ["11:00", 3],
  ["12:00", 2],
  ["13:00", 3],
  ["14:00", 5],
  ["15:00", 4],
  ["16:00", 2],
  ["17:00", 2],
]

export const atendimentosPorHorarioOptions = {
  title: "Atendimentos por Horário",
  hAxis: { title: "Horário" },
  vAxis: { title: "Atendimentos" },
  legend: { position: "bottom" },
}

export const servicosPopularesData = [
  ["Serviço", "Quantidade"],
  ["Corte de Cabelo", 15],
  ["Barba", 10],
  ["Corte + Barba", 5],
]

export const servicosPopularesOptions = {
  title: "Serviços Mais Populares",
  legend: { position: "bottom" },
}

type ChartCustomProps = {
  pedidosList: any[]
}

export function ChartCustom({ pedidosList }:ChartCustomProps) {
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

  const servicosObj: any = {};

// Iterar sobre o array de serviços
for (const servico of pedidosList) {
    const nomeServico = servico.listaServico[0].servico.descricaoServico
    // Se a hora já existe no objeto, incrementar a contagem, caso contrário, iniciar com 1
    if (servicosObj[nomeServico]) {
        servicosObj[nomeServico]++;
    } else {
        servicosObj[nomeServico] = 1;
    }
}

// Converter o objeto em um array de arrays
const servicosPopularesData = [
  ["Serviço", "Quantidade"],
    ...Object.keys(servicosObj).map(servico => [
        servico,
        servicosObj[servico]
    ])
]

  const atendimentosPorHorarioData = [
    ["Horário", "Atendimentos"],
    ...Object.keys(pedidosPorHora).map(hora => [
      format(new Date(hora).toISOString(), 'p'),
      pedidosPorHora[hora]
    ])
  ]


  return (
    <div className="w-full h-full flex flex-col sm:flex gap-4 justify-between items-center">
      <div className="w-full">
        <Chart
          chartType="BarChart"
          width="100%"
          height="300px"
          data={atendimentosPorHorarioData}
          options={atendimentosPorHorarioOptions}
        />
      </div>
      <div className="w-full">
        <Chart
          chartType="BarChart"
          width="100%"
          height="300px"
          data={servicosPopularesData}
          options={servicosPopularesOptions}
        />
      </div>
    </div>
  )
}
