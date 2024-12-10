import axios from 'axios'

export async function GetMonthlyGrossRevenue(token: string) {

  const ano = new Date().getFullYear()
  const mes = String(new Date().getMonth() + 1).padStart(2, '0')
  let mesFuturo = String(new Date().getMonth() + 2).padStart(2, '0')


  const dataAtualFormatada = `${ano}-${mes}-01`
  let dataFuturaFormatada = `${ano}-${mesFuturo}-01`
  if (mesFuturo === '13') {
    mesFuturo = '01'
    const novoAno = ano + 1
    dataFuturaFormatada = `${novoAno}-${mesFuturo}-01`
  }

  const response = await axios.get(`http://100.28.169.213/api/relatorios/faturamento-empresa?dataInicio=${dataAtualFormatada}&dataFim=${dataFuturaFormatada}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const monthlyGrossRevenue: number = response.data

  if (response.status === 400) {
    return 0
  }

  return monthlyGrossRevenue
}
