import axios from 'axios'

export async function GetEnterpriseBanner (enterpriseId: number | string) {
  const banner = await axios.get(`http://localhost:8080/empresas/obter-banner/${Number(enterpriseId)}`)

  if (banner.data) {
    return banner.data
  }

  return null
}
