'use client'

import { FormInput } from "@/components/FormInput/FormInput";
import { Typography } from "@/components/Typography/Typography";
import { Button } from "flowbite-react";
import { useFormik } from "formik";
import * as yup from 'yup'
import axios from 'axios'

export function LoginForm() {
    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema: yup.object().shape({
          email: yup.string().email('Insira um E-mail válido').required('Insira um E-mail'),
          password: yup.string().min(8,'A senha deve ter no mínimo 8 caracteres').required('Insira sua senha')
        }),
        onSubmit: (values: { email: string, password: string}, { resetForm }) => {
          axios.post('http://localhost:8080/usuarios/login', {
            email: values.email,
            senha: values.password
          }).then(() => {
            alert("Login realizado com sucesso")
            window.location.href = "/dashboard/4"
          }).catch((err) => {
            alert(`Houve um erro: ${err}`)
          })
          resetForm()
        }
      })
      
    return (
        <form onSubmit={formik.handleSubmit}>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
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
                <Typography color="red-500">
                  {formik.errors.email}
                </Typography>
              )}
              <Typography>
                Senha:
              </Typography>
              <FormInput
                placeholder="Insira sua senha"
                type='password'
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <Typography color="red-500">
                  {formik.errors.password}
                </Typography>
              )}
            </div>
            <Button
              pill
              color="light"
              className='text-white bg-blue flex items-center justify-center text-center text-base enabled:hover:bg-white enabled:hover:text-blue'
              type='submit'
            >
              Continuar
            </Button>
          </div>
        </form>
    )
}