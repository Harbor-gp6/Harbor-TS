import axios from 'axios'

export async function RatingOrder (ratingObject: any) {

  const res = await axios.post(`http://100.28.169.213/api/avaliacoes/avaliar`, ratingObject)

  return res
}
