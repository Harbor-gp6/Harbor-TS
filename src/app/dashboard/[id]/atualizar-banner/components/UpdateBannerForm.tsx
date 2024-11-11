'use client'

import { Input } from '@/components/Input/Input'
import { AddEnterpriseBanner } from '@/lib/add-enterprise-banner'
import { Button } from 'flowbite-react'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'

type UpdateBannerFormProps = {
  token: string
}

export function UpdateBannerForm(props: UpdateBannerFormProps) {
  const { token } = props

  const formik = useFormik({
    initialValues: {
      file: null
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        if (values.file) {
          const uploadImage = await AddEnterpriseBanner(values.file, token)

          if (uploadImage) {
            Swal.fire({
              icon: 'success',
              title: 'Imagem atualizada com sucesso',
              showConfirmButton: false,
              timer: 2500
            })

            resetForm()
            window.location.reload()
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Houve um erro ao atualizar a imagem'
            })
          }
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Houve um erro inexperado'
        })
        console.error('Erro:', error)
      }
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className='flex flex-col w-full items-center justify-center gap-6'>
      <Input
        type='file'
        name='file'
        onChange={(event) => {
          const file = event.currentTarget.files ? event.currentTarget.files[0] : null
          formik.setFieldValue("file", file)
        }}
        className="text-black"
      />

      <Button type='submit'>
        Alterar
      </Button>
    </form>
  )
}
