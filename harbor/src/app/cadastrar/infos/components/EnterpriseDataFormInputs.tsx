import { FormInput } from '@/components/FormInput/FormInput'
import { Heading } from '@/components/Heading/Heading'
import { Typography } from '@/components/Typography/Typography'
import { Progress } from 'flowbite-react'
import { FormSubpages } from './RegisterInfosPage'

type EnterpriseDataFormInputsProps = {
  onChange: any
  onChangePage: (page: FormSubpages) => void
  corpNameValue: string
  fantasyNameValue: string
  cnpjValue: string
  phoneValue: string
}

export function EnterpriseDataFormInputs(props: EnterpriseDataFormInputsProps) {
  const { onChange, onChangePage, cnpjValue, corpNameValue, fantasyNameValue, phoneValue } = props

  return (
    <div className='flex flex-col gap-4 h-full max-w-4xl mx-auto p-6'>
      <div className='flex flex-col h-full'>
        <Heading
          color='black'
          size={5}
        >
          Informações do estabelecimento
        </Heading>

        <Typography
          color="body"
          textPosition="left"
          className="whitespace-nowrap"
        >
          Preencha todos os campos com os dados da sua empresa
        </Typography>
      </div>
      <div className='flex flex-col gap-2 h-full'>
        <Typography color="black" textPosition='left'>
          Razão Social:
        </Typography>
        <FormInput
          placeholder="Insira o nome da empresa"
          type='text'
          name='corpName'
          onChange={onChange}
          value={corpNameValue}
        />
        <Typography color="black" textPosition='left'>
          Nome Fantasia:
        </Typography>
        <FormInput
          placeholder="Insira o nome fantasia da empresa"
          type='text'
          name='fantasyName'
          onChange={onChange}
          value={fantasyNameValue}
        />
        <Typography color="black" textPosition='left'>
          CNPJ:
        </Typography>
        <FormInput
          placeholder="Insira o CNPJ da empresa"
          type='text'
          name='cnpj'
          onChange={onChange}
          value={cnpjValue}
        />
        <Typography color="black" textPosition='left'>
          Telefone comercial:
        </Typography>
        <FormInput
          placeholder="Insira o número de telefone comercial"
          type='text'
          name='corpPhone'
          onChange={onChange}
          value={phoneValue}
        />
      </div>
      <div className='flex flex-col w-full'>
        <Progress progress={66} color='indigo' />
        <div className='flex w-full justify-between items-center px-4'>
          <button className='border-none py-2 bg-transparent text-black text-left' onClick={() => onChangePage('personalData')}>
            Voltar
          </button>
          <button className='border-none py-2 bg-transparent text-blueEnd text-right' onClick={() => onChangePage('corpAddressForm')}>
            Avançar
          </button>
        </div>
      </div>
    </div>
  )
}

