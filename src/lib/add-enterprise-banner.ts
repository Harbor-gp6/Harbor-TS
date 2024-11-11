import axios from 'axios'
import { cosmic } from './cosmic-client'

export async function AddEnterpriseBanner (image: File, token: string) {
  const data = await cosmic.media.insertOne({
    media: image,
    folder: "banners"
  })

  if (data) {
    const updatedImage =  await axios.patch(`http://localhost:8080/empresas/banner`, {
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
