import axios from 'axios'

export async function GetEnterpriseBanner (enterpriseId: number | string) {
  const banner = await axios.get(`http://100.29.19.154/api/empresas/obter-banner/${Number(enterpriseId)}`)

  if (banner.data) {
    return banner.data
  }

  return null
}
