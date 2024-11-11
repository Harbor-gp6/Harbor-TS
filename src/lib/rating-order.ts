import axios from 'axios'

export async function RatingOrder (ratingObject: any) {

  const res = await axios.post(`http://localhost:8080/avaliacoes/avaliar`, ratingObject)

  return res
}
