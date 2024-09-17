import axios from 'axios'

export async function GetMonthlyGrossRevenue(token: string) {

  const ano = new Date().getFullYear()
  const mes = String(new Date().getMonth() + 1).padStart(2, '0')
  const mesFuturo = String(new Date().getMonth() + 2).padStart(2, '0')

  const dataAtualFormatada = `${ano}-${mes}-01`
  const dataFuturaFormatada = `${ano}-${mesFuturo}-01`
  const response = await axios.get(`http://localhost:8080/relatorios/faturamento-empresa?dataInicio=${dataAtualFormatada}&dataFim=${dataFuturaFormatada}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const monthlyGrossRevenue: number = response.data

  return monthlyGrossRevenue
}
