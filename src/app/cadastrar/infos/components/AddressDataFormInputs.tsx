import { FormInput } from '@/components/FormInput/FormInput'
import { Heading } from '@/components/Heading/Heading'
import { Typography } from '@/components/Typography/Typography'
import { GetAddressByCep } from '@/lib/get-address-by-cep'
import { AddressInfos } from '@/types/AddressInfos'
import { Button, Progress } from 'flowbite-react'
import { useState } from 'react'
import { FormSubpages } from './RegisterInfosPage'

type AddressDataFormInputsProps = {
  onChange: any
  onFieldChange: any
  onChangePage: (page: FormSubpages) => void
  corpCepValue: string
  stateValue: string
  streetValue: string
  numberValue: string
  neighborhoodValue: string
  cityValue: string
  complementValue: string
}

export default function AddressDataFormInputs(props: AddressDataFormInputsProps) {
  const { onChange, onChangePage, cityValue, complementValue, corpCepValue, onFieldChange, neighborhoodValue, numberValue, stateValue, streetValue } = props
  const [addressInfos, setAddressInfos] = useState<AddressInfos | null>(null)

  async function GetAddressInfos (cep: string) {
    const infos = await GetAddressByCep(cep)
    if (infos) {
      setAddressInfos(infos)
    }
  }


  return (
    <div className='flex flex-col gap-4 h-full'>
      <div className='flex flex-col h-full'>
        <Heading
          color='black'
          size={5}
        >
          Endereço comercial
        </Heading>

        <Typography
          color="body"
          textPosition="left"
          className="whitespace-nowrap"
        >
          Preencha todos os campos com os dados da sua empresa
        </Typography>
      </div>
      <div className='flex flex-col gap-2'>
        <Typography color='black' textPosition='left'>
          CEP:
        </Typography>
        <FormInput
          placeholder="Insira o CEP da empresa"
          type='text'
          name='corpCep'
          onChange={onChange}
          value={corpCepValue}
          onBlur={() => GetAddressInfos(corpCepValue)}
        />
        <Typography color='black' textPosition='left'>
          Estado:
        </Typography>
        <FormInput
          placeholder="Insira o estado da empresa"
          type='text'
          name='corpState'
          onChange={(e) => onFieldChange('corpState', e)}
          value={addressInfos?.uf || stateValue}
        />
        <Typography color='black' textPosition='left'>
          Endereço:
        </Typography>
        <FormInput
          placeholder="Insira o endereço da empresa"
          type='text'
          name='corpAddress'
          onChange={(e) => onFieldChange('corpAddress', e)}
          value={addressInfos?.logradouro || streetValue}
        />
        <Typography color='black' textPosition='left'>
          Número:
        </Typography>
        <FormInput
          placeholder="Insira o número da empresa"
          type='text'
          name='corpNumber'
          onChange={onChange}
          value={numberValue}
        />
        <Typography color='black' textPosition='left'>
          Bairro:
        </Typography>
        <FormInput
          placeholder="Insira o bairro da empresa"
          type='text'
          name='neighborhood'
          onChange={(e) => onFieldChange('neighborhood', e)}
          value={addressInfos?.bairro || neighborhoodValue}
        />
        <Typography color='black' textPosition='left'>
          Cidade:
        </Typography>
        <FormInput
          placeholder="Insira a cidade da empresa"
          type='text'
          name='corpCity'
          onChange={(e) => onFieldChange('corpCity', e)}
          value={addressInfos?.localidade || cityValue}
        />
        <Typography color='black' textPosition='left'>
          Complemento:
        </Typography>
        <FormInput
          placeholder="Insira o complemento da empresa"
          type='text'
          name='corpComplement'
          onChange={onChange}
          value={complementValue}
        />
      </div>
      <div className='flex flex-col w-full'>
        <Progress progress={100} color='indigo' />
        <div className='flex w-full justify-between items-center px-4'>
          <button className='border-none py-2 bg-none text-black' onClick={() => onChangePage('enterpriseForm')}>
            Voltar
          </button>
          <Button
            pill
            color="light"
            className='text-white bg-blue flex items-center justify-center text-center text-base enabled:hover:bg-white enabled:hover:text-blue'
            type='submit'
          >
            Cadastrar
          </Button>
        </div>
      </div>
    </div>
  )
}
