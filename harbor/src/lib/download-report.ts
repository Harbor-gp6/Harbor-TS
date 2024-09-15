import axios from 'axios'

export async function DownloadReport (startDate: string, endDate: string, token: string) {
  await axios.get(`http://localhost:8080/relatorios/download/relatorio?dataInicio=${startDate}&dataFim=${endDate}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(pdfContent => {
    // Cria um Blob a partir do conteúdo do CSV
    var blob = new Blob([pdfContent.data], { type: 'application/pdf' })

    // Cria um URL temporário para o Blob
    var url = URL.createObjectURL(blob)

    // Cria um elemento de âncora temporário
    var tempLink = document.createElement('a')
    tempLink.href = url
    tempLink.download = 'FaturamentoEPedidosPorPrestador.pdf'  // Nome do arquivo que será baixado

    // Adiciona o link ao documento
    document.body.appendChild(tempLink)

    // Simula um clique no link
    tempLink.click()

    // Remove o link do documento e libera o URL do Blob
    document.body.removeChild(tempLink)
    URL.revokeObjectURL(url)
  }).catch(() => alert('Erro ao obter o conteúdo do PDF'))
}
