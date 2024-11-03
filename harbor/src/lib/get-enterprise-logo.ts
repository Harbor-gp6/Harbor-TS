import axios from 'axios'

export async function GetEnterpriseLogo (token: string) {
  const logo = await axios.get('http://localhost:8080/empresas/obter-foto', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (logo.data) {
    return logo.data
  }

  return null
}
