import { AddressInfos } from '@/types/AddressInfos'
import axios from 'axios'

export async function GetAddressByCep (cep: number) {
  const response = await axios.get('http://localhost:8080/enderecos/busca', {
    params: {
      cep
    }
  })

  if (response.status === 200) {
    return response.data as AddressInfos
  }

  return null
}
