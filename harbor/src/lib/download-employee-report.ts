import axios from 'axios'

export async function DownloadReportEmployee (startDate: string, endDate: string, token: string) {
  await axios.get(`http://localhost:8080/relatorios/PDF/pedidos-atendidos-por-prestador?dataInicio=${startDate}&dataFim=${endDate}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    responseType: 'blob'  // Adicionado para garantir que o conteúdo seja tratado como um blob
  }).then(response => {
    // Cria um Blob a partir do conteúdo do PDF
    var blob = new Blob([response.data], { type: 'application/pdf' })

    // Cria um URL temporário para o Blob
    var url = URL.createObjectURL(blob)

    // Cria um elemento de âncora temporário
    var tempLink = document.createElement('a')
    tempLink.href = url
    tempLink.download = 'PedidosPorPrestador.pdf'  // Nome do arquivo que será baixado

    // Adiciona o link ao documento
    document.body.appendChild(tempLink)

    // Simula um clique no link
    tempLink.click()

    // Remove o link do documento e libera o URL do Blob
    document.body.removeChild(tempLink)
    URL.revokeObjectURL(url)
  }).catch(() => alert('Erro ao obter o conteúdo do PDF'))
}
