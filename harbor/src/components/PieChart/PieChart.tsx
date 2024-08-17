import { Chart } from "react-google-charts";


export const dataPagamento = [
  ["Mês/Ano", "Débito", "Crédito", "Dinheiro", "Pix", "Total de Vendas"],
  ["01/2024", 1200, 800, 500, 700, 3200],
  ["02/2024", 1100, 750, 450, 680, 2980],
  ["03/2024", 1250, 820, 520, 730, 3320],
  ["04/2024", 1300, 790, 480, 710, 3280],
  ["05/2024", 1400, 860, 530, 760, 3550],
  ["06/2024", 1350, 830, 500, 740, 3420],
  ["07/2024", 1450, 870, 550, 780, 3650],
  ["08/2024", 1500, 900, 580, 800, 3780],
  ["09/2024", 1550, 920, 600, 820, 3890],
  ["10/2024", 1600, 950, 620, 840, 4010],
  ["11/2024", 1650, 980, 640, 860, 4130],
  ["12/2024", 1700, 1000, 660, 880, 4240],
];

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
        <Chart
          chartType="ComboChart"
          width="100%"
          height="400px"
          data={dataPagamento}
          options={optionsPagamento}
        />
      </div>
    </div>
  );
}
