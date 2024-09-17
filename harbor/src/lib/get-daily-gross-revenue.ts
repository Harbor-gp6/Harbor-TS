import axios from 'axios'

export async function GetDailyGrossRevenue(token: string) {

  const ano = new Date().getFullYear()
  const mes = String(new Date().getMonth() + 1).padStart(2, '0')
  const dia = String(new Date().getDate()).padStart(2, '0')

  const dataAtualFormatada = `${ano}-${mes}-${dia}`

    const response = await axios.get(`http://localhost:8080/relatorios/faturamento-empresa?dataInicio=${dataAtualFormatada}&dataFim=${dataAtualFormatada}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

  const dailyGrossRevenue: number = response.data

  return dailyGrossRevenue
}
