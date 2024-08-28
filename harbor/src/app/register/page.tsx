'use client'

import Link from 'next/link'
import { Container } from '../../components/Container/Container'
import { FormInput } from '../../components/FormInput/FormInput'
import { Heading } from '../../components/Heading/Heading'
import { Typography } from '../../components/Typography/Typography'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Button } from 'flowbite-react'

export default function Register() {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Insira um nome"),
      surname: yup.string().required("Insira um sobrenome"),
      email: yup.string().email("Insira um e-mail válido").required("Insira um e-mail"),
      phone: yup.string().min(10, 'Insira no mínimo 10 digitos').max(11, 'Insira no máximo 11 Digitos'),
    }),
    onSubmit: (values, { resetForm }) => {
      const url = `/cadastro?nome=${values.name}&sobrenome=${values.surname}&email=${values.email}&tel=${values.phone}`
      window.location.href = url
      resetForm()
    }
  })

  return (
    <div className='w-screen min-h-screen bg-gradient-to-b from-transparent to-white flex items-center justify-center relative'>
      <img src="/images/graphs/grafismos.svg" alt="Grafismos" className='absolute top-0 z-0' />

      <Container maxWidth="md" className="flex flex-col gap-4 z-10">
        <div className='flex flex-col gap-2'>
          <Heading
            color='black'
            size={3}
          >
            Comece a faturar com a solução Harbor
          </Heading>

          <Typography
            color="body"
            textPosition="left"
            className="whitespace-nowrap"
          >
            Já possui conta? <Link href={'/login'}><span className='text-blueEnd'> Comece por aqui</span></Link>
          </Typography>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <Typography>
                Nome:
              </Typography>
              <FormInput
                placeholder="Insira seu nome"
                type='text'
                name='name'
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <Typography color="warning">
                  {formik.errors.name}
                </Typography>
              )}
              <Typography>
                Sobrenome:
              </Typography>
              <FormInput
                placeholder="Insira seu sobrenome"
                type='text'
                name='surname'
                onChange={formik.handleChange}
                value={formik.values.surname}
              />
              {formik.touched.surname && formik.errors.surname && (
                <Typography color="warning">
                  {formik.errors.surname}
                </Typography>
              )}
              <Typography>
                Email:
              </Typography>
              <FormInput
                placeholder="Insira seu email"
                type='email'
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <Typography color="warning">
                  {formik.errors.email}
                </Typography>
              )}
              <Typography>
                Telefone:
              </Typography>
              <FormInput
                placeholder="Insira o número de telefone"
                type='text'
                name='phone'
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone && (
                <Typography color="warning">
                  {formik.errors.phone}
                </Typography>
              )}
            </div>
            <Button
              pill
              color="light"
              type='submit'
              className='text-white bg-blue flex items-center justify-center text-center text-base enabled:hover:bg-white enabled:hover:text-blue'
            >
              Continuar
            </Button>
          </div>
        </form>
      </Container>
    </div>
  )
}
