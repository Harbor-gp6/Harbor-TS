import { EmpresaListagemDto } from '@/types/empresa/EmpresaListagemDto'
import axios from 'axios'

export async function GetEnterpriseById (enterpriseId: string) {
 const id = Number(enterpriseId)
 const res =  await axios.get(`http://localhost:8080/empresas/${id}`)
 const enterprise: EmpresaListagemDto = res.data

 return enterprise
}
