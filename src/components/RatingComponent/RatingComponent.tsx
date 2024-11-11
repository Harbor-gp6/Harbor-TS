'use client'

import { RatingObject } from '@/app/avaliacao/[orderId]/components/RatingForm'
import { PedidoPrestador } from '@/types/pedido/PedidoPrestadorDto'
import Image from 'next/image'
import { useState } from 'react'
import ReactStars from 'react-stars'

type RatingComponentProps = {
  employee: PedidoPrestador
  onSetEmployee?: (value: RatingObject) => void
}

export function RatingComponent(props: RatingComponentProps) {
  const { employee, onSetEmployee } = props
  const [rating, setRating] = useState(0)

  const handleStarClick = (newRating: number) => {
    setRating(newRating)
    if (onSetEmployee) {
      onSetEmployee({
        idPrestador: employee.id,
        estrelas: newRating,
        cnpjEmpresa: employee.empresa.cnpj,
        comentario: ''
      })
    }
  }

  return (
    <div className="flex flex-col items-center p-6 max-w-72 bg-white rounded-lg shadow-md">
      <Image
        src={employee.foto ? JSON.parse(employee.foto)?.novaFoto : 'https://fakeimg.pl/100x100/cccccc/909090'}
        alt={`Foto de ${employee.nomePrestador}`}
        width={112}
        height={112}
        className="rounded-full border-4 border-gray-300 h-28 w-28 object-contain"
      />

      <h3 className="mt-4 text-lg font-semibold text-gray-700">{employee.nomePrestador}</h3>

      <div className="mt-4">
        <ReactStars
          count={5}
          value={rating}
          onChange={handleStarClick}
          size={30}
          color2={'#fbbf24'}
          color1={'#d1d5db'}
        />
      </div>
    </div>
  )
}
