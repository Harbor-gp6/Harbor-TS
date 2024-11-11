import axios from 'axios'

export async function GetEnterpriseLogo (enterpriseId: number | string) {
  const logo = await axios.get(`http://localhost:8080/empresas/obter-foto/${Number(enterpriseId)}`)

  if (logo.data) {
    return logo.data
  }

  return null
}
