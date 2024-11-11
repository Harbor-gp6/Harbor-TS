'use client'

import { FormInput } from "@/components/FormInput/FormInput"
import { Typography } from "@/components/Typography/Typography"
import { Button } from "flowbite-react"
import { useFormik } from "formik"
import * as yup from 'yup'
import { useAuth } from '@/contexts/auth-context'
import { useRouter } from 'next/navigation'
import { SignInResult } from '@/types/SignInResult'
import Swal from 'sweetalert2'

export function LoginForm() {
  const { login } = useAuth()
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object().shape({
      email: yup.string().email('Insira um E-mail válido').required('Insira um E-mail'),
      password: yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres').required('Insira sua senha')
    }),
    onSubmit: async (values: { email: string, password: string }, { resetForm }) => {
      const { email, password } = values

      try {
        const user = await login(email, password)

        if (user) {
          const userInfos = user as SignInResult
          Swal.fire({
            icon: 'success',
            title: 'Login realizado com sucesso',
            showConfirmButton: false
          })
          router.push(`/dashboard/${userInfos.userId}`)
          resetForm()
        } else {
          Swal.fire({
            icon: 'error',
            title: 'E-mail e/ou Senha incorretos'
          })
          resetForm()
        }
      } catch (error: any) {
        throw new Error('Erro durante o Login', error)
      }
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4'>
          <FormInput
            placeholder="Insira seu email"
            type='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            className="text-black"
          />
          {formik.touched.email && formik.errors.email && (
            <Typography color="primary">
              {formik.errors.email}
            </Typography>
          )}

          <FormInput
            placeholder="Insira sua senha"
            type='password'
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            className="text-black"
          />
          {formik.touched.password && formik.errors.password && (
            <Typography color="primary">
              {formik.errors.password}
            </Typography>
          )}
        </div>
        <Button
          pill
          color="light"
          className='text-white bg-blue flex items-center justify-center text-center text-base enabled:hover:bg-white enabled:hover:text-blue'
          type='submit'
          disabled={formik.isSubmitting}
        >
          Continuar
        </Button>
      </div>
    </form>
  )
}
