'use client'

import { useState } from 'react'
import { Building2, CircleUserRound, MapPin } from 'lucide-react'
import { useFormik } from 'formik'
import axios from 'axios'
import Image from 'next/image'
import { Container } from '@/components/Container/Container'
import { PersonalDataFormInputs } from './PersonalDataFormInputs'
import { SideNav } from '../../components/SideNav'
import { Typography } from '@/components/Typography/Typography'
import { EnterpriseDataFormInputs } from './EnterpriseDataFormInputs'
import AddressDataFormInputs from './AddressDataFormInputs'
import { useSearchParams } from 'next/navigation'
import Swal from 'sweetalert2'

export type FormSubpages = 'personalData' | 'enterpriseForm' | 'corpAddressForm'

type RegisterInfosPageProps = {
  name: string
  surname: string
  email: string
  phone: string
}

export function RegisterInfosPage(props: RegisterInfosPageProps) {
  const { email, name, phone, surname } = props
  const [formInputs, setFormInputs] = useState<FormSubpages>('personalData')


  const formik = useFormik({
    initialValues: {
      name: name,
      surname: surname,
      cpf: '',
      role: '',
      email: email,
      phone: phone,
      password: '',
      corpName: '',
      fantasyName: '',
      cnpj: '',
      corpPhone: '',
      corpCep: '',
      corpState: '',
      corpAddress: '',
      neighborhood: '',
      corpCity: '',
      corpNumber: '',
      corpComplement: '',
      openingTime: '',
      endingTime: ''
    },
    onSubmit: async (values, { resetForm }) => {
      const convertTimeToDate = (time: string) => {
        const [hours, minutes] = time.split(":").map(Number)
        const currentDate = new Date()
        currentDate.setHours(hours, minutes)
        const formattedTime = `${currentDate.getHours().toString().padStart(2, "0")}:${currentDate.getMinutes().toString().padStart(2, "0")}`
        return formattedTime
      }

      const createAccount = {
        nome: values.name,
        sobrenome: values.surname,
        telefone: values.phone,
        cpf: values.cpf,
        email: values.email,
        senha: values.password,
        empresa: {
          razaoSocial: values.corpName,
          nomeFantasia: values.fantasyName,
          cnpj: values.cnpj,
          endereco: {
            bairro: values.neighborhood,
            logradouro: values.corpAddress,
            cidade: values.corpCity,
            estado: values.corpState,
            numero: values.corpNumber,
            cep: values.corpCep,
            complemento: values.corpComplement
          },
          horarioAbertura: convertTimeToDate(values.openingTime),
          horarioFechamento: convertTimeToDate(values.endingTime)
        }
      }

      await axios.post('http://100.29.19.154/api/usuarios', createAccount)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Cadastro realizado com sucesso',
            showConfirmButton: false
          })
          window.location.href = '/login'
          resetForm()
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Houve um erro ao cadastrar'
          })
        })
    }
  })


  return (
    <div className='w-full flex min-h-screen'>
      <div className='hidden lg:block h-full'>
        <SideNav>
          <button
            onClick={() => setFormInputs('personalData')}
            className={`flex p-4 rounded-l-xl gap-4  items-center w-full ml-4 ${formInputs === 'personalData' ? 'bg-blueEnd' : 'bg-white'}`}
          >
            <CircleUserRound className={`h-5 w-5 ${formInputs === 'personalData' ? 'text-white' : 'text-body'}`} />
            <Typography color={formInputs === 'personalData' ? 'white' : 'body'}>
              Dados Pessoais
            </Typography>
          </button>

          <button
            onClick={() => setFormInputs('enterpriseForm')}
            className={`flex p-4 rounded-l-xl gap-4 items-center w-full ml-4 ${formInputs === 'enterpriseForm' ? 'bg-blueEnd' : 'bg-white'}`}
          >
            <Building2 className={`h-5 w-5 ${formInputs === 'enterpriseForm' ? 'text-white' : 'text-body'}`} />
            <Typography color={formInputs === 'enterpriseForm' ? 'white' : 'body'}>
              Dados da Empresa
            </Typography>
          </button>

          <button
            onClick={() => setFormInputs('corpAddressForm')}
            className={`flex p-4 rounded-l-xl gap-4 items-center w-full ml-4 ${formInputs === 'corpAddressForm' ? 'bg-blueEnd' : 'bg-white'}`}
          >
            <MapPin className={`h-5 w-5 ${formInputs === 'corpAddressForm' ? 'text-white' : 'text-body'}`} />
            <Typography color={formInputs === 'corpAddressForm' ? 'white' : 'body'} className="lg:whitespace-nowrap">
              Endereço Comercial
            </Typography>
          </button>
        </SideNav>
      </div>

      <div className='flex flex-col h-full w-full'>
        <div className='w-full bg-gradient-to-b from-transparent to-white flex items-center justify-center relative'>
          <Image
            src="/images/graphs/grafismos.svg"
            alt="Grafismos"
            className='absolute top-0 z-0 bg-gradient-to-b from-transparent to-white w-full'
            height={1000}
            width={1000}
          />

          <Container className="flex flex-col h-full gap-4 z-10">
            <form onSubmit={formik.handleSubmit}>
              {formInputs === 'personalData' && (
                <PersonalDataFormInputs
                  onChangePage={setFormInputs}
                  onChange={formik.handleChange}
                  cpfValue={formik.values.cpf}
                  emailValue={formik.values.email || ''}
                  nameValue={formik.values.name || ''}
                  passwordValue={formik.values.password}
                  phoneValue={formik.values.phone || ''}
                  surnameValue={formik.values.surname || ''}
                />
              )}
              {formInputs === 'enterpriseForm' && (
                <EnterpriseDataFormInputs
                  cnpjValue={formik.values.cnpj}
                  corpNameValue={formik.values.corpName}
                  fantasyNameValue={formik.values.fantasyName}
                  phoneValue={formik.values.corpPhone}
                  openingValue={formik.values.openingTime}
                  endingValue={formik.values.endingTime}
                  onChange={formik.handleChange}
                  onChangePage={setFormInputs}
                />
              )}
              {formInputs === 'corpAddressForm' && (
                <AddressDataFormInputs
                  cityValue={formik.values.corpCity}
                  complementValue={formik.values.corpComplement}
                  corpCepValue={formik.values.corpCep}
                  neighborhoodValue={formik.values.neighborhood}
                  numberValue={formik.values.corpNumber}
                  stateValue={formik.values.corpState}
                  streetValue={formik.values.corpAddress}
                  onChange={formik.handleChange}
                  onChangePage={setFormInputs}
                  onFieldChange={formik.setFieldValue}
                />
              )}
            </form>
          </Container>
        </div>
      </div>
    </div>
  )
}
