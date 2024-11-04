'use client'

import { CreateEmployeeFormModal } from '@/components/CreateEmployeeFormModal/CreateEmployeeFormModal'
import { Button } from 'flowbite-react'
import { Plus } from 'lucide-react'
import { useState } from 'react'

export function CreateEmployeeForm() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='flex w-full items-center justify-end pt-10'>
        <Button
          onClick={() => setOpen(true)}
          className='rounded-full flex items-center justify-center bg-blueEnd'
        >
          <Plus className='h-5 w-5 text-white' />
        </Button>
      </div>

      <CreateEmployeeFormModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}
