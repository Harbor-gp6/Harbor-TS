'use client'

import { Pencil, X } from 'lucide-react'
import { Heading } from '../Heading/Heading'
import { Typography } from '../Typography/Typography'
import Swal from 'sweetalert2'
import { DeleteService } from '@/lib/delete-service'
import { useState } from 'react'
import { UpdateServiceFormModal } from '../UpdateServiceFormModal/UpdateServiceFormModal'

type InternServiceCardProps = {
  id: number
  title: string
  time?: string | number
  price: string | number
  token: string
}

export function InternServiceCard (props: InternServiceCardProps) {
  const { id, price, title, time, token } = props
  const [openUpdate, setOpenUpdate] = useState(false)

  const handleDelete =  () => {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá desfazer esta ação!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await DeleteService(id, token)
        Swal.fire(
          'Excluído!',
          'O serviço foi excluído com sucesso.',
          'success'
        )
        window.location.reload()
      }
    })
  }

  return (
    <div className='bg-white rounded-2xl w-full flex justify-between py-4 px-6 border border-blue'>
      <div className='flex flex-col gap-2'>
        <Heading
          size={4}
          color='black'
          className="text-left p-0"
          noGutters
        >
          {title}
        </Heading>


        <div className='flex flex-col gap-2'>
          <Heading
            size={5}
            color='black'
            noGutters
          >
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(price))}
          </Heading>

          {time && (
            <Typography
              color='body'
              textSize='sm'
              textPosition='left'
            >
              Tempo médio: {Number(time)} minutos
            </Typography>
          )}
        </div>
      </div>

      <div className='flex items-center justify-center gap-4'>
        <button onClick={() => setOpenUpdate(true)} className='border rounded-2xl p-4 border-blueEnd text-blueEnd hover:text-lightGray hover:bg-blueEnd'>
          <Pencil className='h-5 w-5' />
        </button>
        <button onClick={() => handleDelete()} className='border rounded-2xl p-4 text-red-600 hover:text-white border-red-600 hover:bg-red-600'>
          <X className='h-5 w-5' />
        </button>
      </div>

      <UpdateServiceFormModal
        open={openUpdate}
        onClose={() => setOpenUpdate(false)}
        serviceId={id}
        serviceName={title}
        servicePrice={Number(price)}
        serviceTime={Number(time)}
      />
    </div>
  )
}
