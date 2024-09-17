import { Checkout } from '@/components/Checkout/Checkout'
import { CustomCarousel } from "@/components/CustomCarousel/CustomCarousel"
import { Heading } from "@/components/Heading/Heading"
import { CustomModal } from "@/components/Modal/Modal"
import { ModalCheckout } from '@/components/ModalCheckout/ModalCheckout'
import { ModalFormCliente } from '@/components/ModalFormCliente/ModalFormCliente'
import { ServicoItem } from "@/components/ServicoItem/ServicoItem"
import { Typography } from "@/components/Typography/Typography"
import { EmpresaListagemDto } from "@/types/empresa/EmpresaListagemDto"
import { PrestadorListagemDto } from "@/types/prestador/PrestadorListagemDto"
import { ProdutoListagemDto } from '@/types/produto/ProdutoListagemDto'
import { ServicoListagemDto } from "@/types/servico/ServicoListagemDto"
import { useState } from 'react'

type ServiceSelectProps = {
  enterprise: EmpresaListagemDto
  services: ServicoListagemDto[]
  products: ProdutoListagemDto[]
  selectedEmployee: PrestadorListagemDto | null
  selectedServices: ServicoListagemDto[]
  valorTotalServico: number
  onSelectService: (service: ServicoListagemDto) => void
  cpfValue: string
  nameValue: string
  phoneValue: string
  surnameValue: string
  emailValue: string
  onChange: any
  onSubmit: any
  paymentValue: string
  totalTime: number
  onChangePage: () => void
  employees: PrestadorListagemDto[]
  onSelectEmployee: (value: any) => void
  onDateTimeSelect: (formattedDateTime: string) => void
}

export function ServiceSelect(props: ServiceSelectProps) {
  const {
    enterprise,
    services,
    selectedEmployee,
    selectedServices,
    valorTotalServico,
    cpfValue,
    emailValue,
    nameValue,
    onChange,
    onChangePage,
    onSelectService,
    onSubmit,
    paymentValue,
    phoneValue,
    surnameValue,
    onDateTimeSelect,
    totalTime,
    onSelectEmployee,
    employees
  } = props

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="max-w-3xl w-full min-h-full">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <CustomCarousel />
      </div>

      <div className="flex justify-around pt-6">
        <div className="flex justify-center flex-col items-center w-24">
          <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
          </svg>
          <Typography
            color='body'
            textSize='base'
          >
            Ligar
          </Typography>
        </div>

        <div className="flex justify-center flex-col items-center w-24">
          <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
          </svg>
          <Typography
            color='body'
            textSize='base'
          >
            Direção
          </Typography>
        </div>

        <div className="flex justify-center flex-col items-center w-24">
          <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
          </svg>
          <Typography
            color='body'
            textSize='base'
          >
            Compartilhar
          </Typography>
        </div>
      </div>

      <div>
        <Heading
          color='black'
          size={4}
          className="text-left pt-6 pb-1"
        >
          {enterprise?.nomeFantasia || 'Nome do estabelecimento'}
        </Heading>

        <Typography
          color='black'
          className="max-w-screen-lg tp-1"
          textSize="base"
          textPosition="left"
        >
          {enterprise && `${enterprise.endereco.logradouro}, nº ${enterprise.endereco.numero}, ${enterprise.endereco.complemento || ''}, ${enterprise.endereco.cep}, ${enterprise.endereco.cidade}-${enterprise.endereco.estado}`}
        </Typography>

        <div className="text-left pt-3">
          <CustomModal />
        </div>
      </div>

      <div>
        <Heading color='black' size={4} className="text-left pt-8 pb-6" > Serviços </Heading>
        {services.length === 0 && (
          <div className='w-full flex justify-center items-center'>
            <Typography
              color='body'
            >
              Nenhum serviço cadastrado
            </Typography>
          </div>
        )}
        {services.length > 0 && services.map((service, index) => (
          <ServicoItem
            title={service.descricaoServico}
            key={index}
            description=''
            price={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(service.valorServico)}
            selectedEmployee={selectedEmployee?.nome || ''}
            serviceList={selectedServices}
            onSelectService={() => onSelectService(service)}
            totalValue={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorTotalServico)}
            totalTime={totalTime}
            cpfValue={cpfValue}
            nameValue={nameValue}
            phoneValue={phoneValue}
            surnameValue={surnameValue}
            emailValue={emailValue}
            onChange={onChange}
            onSubmit={onSubmit}
            onDateTimeSelect={onDateTimeSelect}
            paymentValue={paymentValue}
            onChangePage={onChangePage}
            employees={employees}
            onSelectEmployee={onSelectEmployee}
          />
        ))}
        <ModalFormCliente
          cpfValue={cpfValue}
          nameValue={nameValue}
          phoneValue={phoneValue}
          surnameValue={surnameValue}
          emailValue={emailValue}
          onChange={onChange}
          onSubmit={onSubmit}
          paymentValue={paymentValue}
          onClose={() => setOpenModal(false)}
          open={openModal}
          totalTime={''}
          totalValue={valorTotalServico}
        />

        {/* <ModalCheckout
          serviceList={selectedServices}

        /> */}
      </div>
      <div className="w-full">
        <Checkout
          totalValue={valorTotalServico}
          onClick={() => setOpenModal(true)}
        />
      </div>
    </div>
  )

}
