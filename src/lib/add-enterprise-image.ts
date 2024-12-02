import axios from 'axios'
import { cosmic } from './cosmic-client'

export async function AddEnterpriseImage (image: File, token: string) {
  const data = await cosmic.media.insertOne({
    media: image,
    folder: "enterprises"
  })

  if (data) {
    const updatedImage =  await axios.patch(`http://100.29.19.154/api/empresas/foto`, {
      novaFoto: data.media.url
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })


    return updatedImage
  } else {
    return null
  }
}
