'use client'

import { Heading } from '@/components/Heading/Heading'
import { RatingComponent } from '@/components/RatingComponent/RatingComponent'
import { RatingOrder } from '@/lib/rating-order'
import { PedidoPrestador } from '@/types/pedido/PedidoPrestadorDto'
import { Button } from 'flowbite-react'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Swal from 'sweetalert2'

type RatingFormProps = {
  employeesList: PedidoPrestador[]
  orderId: string
  clientId: string | number
}

export type RatingObject = {
  idPrestador: number
  estrelas: number
  cnpjEmpresa: string
  comentario: string
}

export function RatingForm(props: RatingFormProps) {
  const { employeesList, clientId, orderId } = props
  const [rating, setRating] = useState<RatingObject[]>([])
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      codigoPedido: orderId,
      idCliente: Number(clientId)
    },
    onSubmit: async (values, { resetForm }) => {
      const { codigoPedido, idCliente } = values

      const objectToSend = {
        codigoPedido,
        idCliente,
        avaliacoes: rating
      }
      try {
        await RatingOrder(objectToSend)
        Swal.fire({
          icon: 'success',
          title: 'Avaliação enviada com sucesso',
          text: 'Você será redirecionado para Harbor',
          showConfirmButton: false
        })

        resetForm()
        router.replace('/')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao avaliar'
        })
      }
    }
  })

  const handleSetEmployeeRating = (newRating: RatingObject) => {
    setRating((prevRatings) => {
      const existingRatingIndex = prevRatings.findIndex(
        (r) => r.idPrestador === newRating.idPrestador
      )

      if (existingRatingIndex !== -1) {
        const updatedRatings = [...prevRatings]
        updatedRatings[existingRatingIndex] = newRating
        return updatedRatings
      }

      return [...prevRatings, newRating]
    })
  }

  return (
    <div className='flex flex-col lg:flex-row w-full items-center justify-center gap-6'>
      {employeesList.length > 0 && (
        <form onSubmit={formik.handleSubmit} className='lex flex-col lg:flex-row w-full items-center justify-between'>
          {employeesList.map((employee, index) => (
            <RatingComponent
              key={index}
              employee={employee}
              onSetEmployee={handleSetEmployeeRating}
            />
          ))}

          <div className='flex w-full items-center justify-center'>
            <Button type='submit'>Enviar</Button>
          </div>
        </form>
      )}
      {employeesList.length === 0 && <Heading>Não foi possível obter os prestadores</Heading>}
    </div>
  )
}
