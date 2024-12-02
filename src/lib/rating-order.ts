import axios from 'axios'

export async function RatingOrder (ratingObject: any) {

  const res = await axios.post(`http://100.29.19.154/api/avaliacoes/avaliar`, ratingObject)

  return res
}
