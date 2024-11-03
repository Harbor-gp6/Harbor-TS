import axios from 'axios'

export async function GetEnterpriseBanner (token: string) {
  const banner = await axios.get('http://localhost:8080/empresas/obter-banner', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (banner.data) {
    return banner.data
  }

  return null
}
