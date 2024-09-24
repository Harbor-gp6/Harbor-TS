import { FormInput } from '@/components/FormInput/FormInput'
import { Typography } from '@/components/Typography/Typography'
import { Button } from 'flowbite-react'
import { useFormik } from 'formik'
import * as yup from 'yup'

export function FirstForm() {
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
      const url = `/cadastrar/infos?nome=${values.name}&sobrenome=${values.surname}&email=${values.email}&tel=${values.phone}`
      window.location.href = url
      resetForm()
    }
  })

  return (
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
  )
}
