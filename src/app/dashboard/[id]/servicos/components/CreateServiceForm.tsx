'use client'

import { CreateServiceFormModal } from '@/components/CreateServiceFormModal/CreateServiceFormModal'
import { Button } from 'flowbite-react'
import { Plus } from 'lucide-react'
import { useState } from 'react'

export function CreateServiceForm() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='flex w-full items-center justify-end'>
        <Button
          onClick={() => setOpen(true)}
          className='rounded-full flex items-center justify-center bg-blueEnd'
        >
          <Plus className='h-5 w-5 text-white' />
        </Button>
      </div>

      <CreateServiceFormModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}
