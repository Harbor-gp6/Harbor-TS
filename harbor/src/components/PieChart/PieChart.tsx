'use client'

import { Chart } from "react-google-charts";
import { ComboChart } from '../ComboChart/ComboChart'

export const dataPagamento = [
  { mesAno: "01/2024", debito: 1200, credito: 800, dinheiro: 500, pix: 700, totalVendas: 3200 },
  { mesAno: "02/2024", debito: 1100, credito: 750, dinheiro: 450, pix: 680, totalVendas: 2980 },
  { mesAno: "03/2024", debito: 1250, credito: 820, dinheiro: 520, pix: 730, totalVendas: 3320 },
  { mesAno: "04/2024", debito: 1300, credito: 790, dinheiro: 480, pix: 710, totalVendas: 3280 },
  { mesAno: "05/2024", debito: 1400, credito: 860, dinheiro: 530, pix: 760, totalVendas: 3550 },
  { mesAno: "06/2024", debito: 1350, credito: 830, dinheiro: 500, pix: 740, totalVendas: 3420 },
  { mesAno: "07/2024", debito: 1450, credito: 870, dinheiro: 550, pix: 780, totalVendas: 3650 },
  { mesAno: "08/2024", debito: 1500, credito: 900, dinheiro: 580, pix: 800, totalVendas: 3780 },
  { mesAno: "09/2024", debito: 1550, credito: 920, dinheiro: 600, pix: 820, totalVendas: 3890 },
  { mesAno: "10/2024", debito: 1600, credito: 950, dinheiro: 620, pix: 840, totalVendas: 4010 },
  { mesAno: "11/2024", debito: 1650, credito: 980, dinheiro: 640, pix: 860, totalVendas: 4130 },
  { mesAno: "12/2024", debito: 1700, credito: 1000, dinheiro: 660, pix: 880, totalVendas: 4240 }
]


export const optionsPagamento = {
  title: "Receita por Forma de Pagamento (2024)",
  vAxis: { title: "Receita (R$)" },
  hAxis: { title: "Mês/Ano" },
  seriesType: "bars",
  series: { 4: { type: "line" } },
  legend: { position: 'bottom' },
};

export function PieChartCustom() {
  return (
    <div className="w-full h-full flex flex-col sm:flex justify-start items-start">
      <div className="w-full">
        <ComboChart
        data={dataPagamento}
        className='h-[400px] w-full'
        index="mesAno"
        enableBiaxial={true}
        barSeries={{
          categories: ["debito", "credito", "dinheiro", "pix"],
          yAxisLabel: "Formas de pagamento",
          colors: ['blue', 'lime', 'pink', 'emerald']
        }}
        lineSeries={{
          categories: ["totalVendas"],
          showYAxis: true,
          yAxisLabel: "Total de vendas",
          colors: ["gray"],
        }}
      />

      </div>
    </div>
  );
}
