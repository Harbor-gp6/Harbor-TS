import { FormInput } from '@/components/FormInput/FormInput'
import { Heading } from '@/components/Heading/Heading'
import { Typography } from '@/components/Typography/Typography'
import { Progress } from 'flowbite-react'
import Link from 'next/link'
import { FormSubpages } from './RegisterInfosPage'

type PersonalDataFormInputsProps = {
  onChange: any
  onChangePage: (page: FormSubpages) => void
  nameValue: string
  surnameValue: string
  cpfValue: string
  phoneValue: string
  emailValue: string
  passwordValue: string
}

export function PersonalDataFormInputs(props: PersonalDataFormInputsProps) {
  const { cpfValue, emailValue, nameValue, onChange, passwordValue, phoneValue, surnameValue, onChangePage } = props

  return (
    <div className='flex flex-col gap-4 pt-10'>
      <div className='flex flex-col'>
        <Heading
          color='black'
          size={2}
        >
          Cadastre-se e organize seu negócio ainda hoje
        </Heading>

        <Heading
          color='black'
          size={5}
        >
          Preencha suas informações
        </Heading>

        <Typography
          color="body"
          textPosition="left"
        >
          Você usará este email para acessar o seu perfil do estabelecimento, onde poderá cadastrar suas filiais, funcionários e serviços.
        </Typography>
      </div>
      <div className='flex flex-col gap-2'>
        <Typography color="black" textPosition='left'>
          Nome:
        </Typography>
        <FormInput
          placeholder="Insira o seu nome"
          type='text'
          name='name'
          onChange={onChange}
          value={nameValue}
        />
        <Typography color="black" textPosition='left'>
          Sobrenome:
        </Typography>
        <FormInput
          placeholder="Insira o seu sobrenome"
          type='text'
          name='surname'
          onChange={onChange}
          value={surnameValue}
        />
        <Typography color="black" textPosition='left'>
          CPF:
        </Typography>
        <FormInput
          placeholder="Insira seu CPF"
          type='text'
          name='cpf'
          onChange={onChange}
          value={cpfValue}
        />
        <Typography color="black" textPosition='left'>
          Telefone:
        </Typography>
        <FormInput
          placeholder="Insira o seu número de telefone"
          type='text'
          name='phone'
          onChange={onChange}
          value={phoneValue}
        />
        <Typography color="black" textPosition='left'>
          Email:
        </Typography>
        <FormInput
          placeholder="Insira seu email"
          type='email'
          name='email'
          onChange={onChange}
          value={emailValue}
        />
        <Typography color="black" textPosition='left'>
          Senha:
        </Typography>
        <FormInput
          placeholder="Crie sua senha"
          type='password'
          name='password'
          onChange={onChange}
          value={passwordValue}
        />
      </div>
      <div className='flex flex-col w-full'>
        <Progress progress={33} color='indigo' />
        <div className='flex w-full justify-between items-center px-4'>
          <Link className='border-none py-2 bg-none text-black' href='/cadastrar'>
            Voltar
          </Link>
          <button className='border-none py-2 bg-none text-blueEnd' onClick={() => onChangePage('enterpriseForm')}>
            Avançar
          </button>
        </div>
      </div>
    </div>
  )
}
