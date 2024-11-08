import axios from 'axios'
import { cosmic } from './cosmic-client'

export async function AddImage (image: File, employeeId: number | string, token: string) {
  const data = await cosmic.media.insertOne({
    media: image,
    folder: "profiles"
  })

  if (data) {
    const updatedImage =  await axios.patch(`http://localhost:8080/usuarios/foto/${employeeId}`, {
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
