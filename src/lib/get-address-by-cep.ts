import axios from 'axios'

export async function GetAddressByCep (cep: string) {
  const formatedCep = cep.replace(/[^\d]/g, '')
    const getCEP = await axios.get(`https://viacep.com.br/ws/${formatedCep}/json/`).then((response) => {
      return response.data
    }).catch(() => {
      return null
    })

    if (getCEP) {
      return getCEP
    }

    return null
}
