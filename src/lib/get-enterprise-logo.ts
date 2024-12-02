import axios from 'axios'

export async function GetEnterpriseLogo (enterpriseId: number | string) {
  const logo = await axios.get(`http://100.29.19.154/api/empresas/obter-foto/${Number(enterpriseId)}`)

  if (logo.data) {
    return logo.data
  }

  return null
}
