import axios from 'axios'
import Swal from 'sweetalert2'

export async function DownloadReportEmployee (startDate: string, endDate: string, token: string) {
  Swal.fire({
    title: 'Aguarde...',
    text: 'Gerando o relatório, por favor aguarde.',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()  // Inicia o estado de loading
    }
  })

  await axios.get(`http://100.29.19.154/api/relatorios/PDF/pedidos-atendidos-por-prestador?dataInicio=${startDate}&dataFim=${endDate}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    responseType: 'blob'
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

    // Fecha o SweetAlert de carregamento e exibe sucesso
    Swal.fire({
      icon: 'success',
      title: 'Relatório gerado com sucesso!',
      showConfirmButton: true
    })
  }).catch(() => {
    // Fecha o SweetAlert de carregamento e exibe erro
    Swal.fire({
      icon: 'error',
      title: 'Erro',
      text: 'Erro ao obter o conteúdo do PDF'
    })
  })
}
