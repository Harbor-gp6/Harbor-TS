'use client'

// import { FilialItem } from "../../components/FilialItem/FilialItem"
import { useState, useEffect } from "react"
import { Carousel } from "flowbite-react"
// import { Checkout } from "../../components/CheckoutPedido/CheckoutPedido"
// import { useEnterprise } from '../../hooks/use-enterprise'
// import { getEmployeesByEnterprise } from '../../hooks/get-employees-by-enterprise'
// import { getServicesByEnterprise } from '../../hooks/get-services-by-enterprise'
import axios from 'axios'
import { useFormik } from 'formik'
import { Container } from '@/components/Container/Container'
import { Heading } from '@/components/Heading/Heading'
import { Typography } from '@/components/Typography/Typography'
import { PrestadorItem } from '@/components/PrestadorItem/PrestadorItem'
import { CustomModal } from '@/components/Modal/Modal'
import { ServicoItem } from '@/components/ServicoItem/ServicoItem'
import { ModalFormCliente } from '@/components/ModalFormCliente/ModalFormCliente'
import { CustomCarousel } from '@/components/CustomCarousel/CustomCarousel'
import { ServicoListagemDto } from '@/types/servico/ServicoListagemDto'
import { PrestadorListagemDto } from '@/types/prestador/PrestadorListagemDto'
import { EmpresaListagemDto } from '@/types/empresa/EmpresaListagemDto'

type PedidoProps = {
  params: {
    id: string
  }
}

export default function Pedido(props: PedidoProps) {
  const [page, setPage] = useState('funcionariosPage')
  const [openFormModal, setOpenFormModal] = useState(false)
  const [enterprise, setEnterprise] = useState<EmpresaListagemDto | null>(null)
  const [employees, setEmployees] = useState<PrestadorListagemDto[]>([])
  const [selectedEmployee, setSelectedEmployee] = useState<PrestadorListagemDto | null>(null)
  const [services, setServices] = useState<ServicoListagemDto[]>([])
  const [selectedServices, setSelectedServices] = useState<ServicoListagemDto[]>([])
  const [selectedServicesId, setSelectedServicesId] = useState<number[]>([])
  const [valorTotalServico, setValorTotalServico] = useState(0)
  const [tempoTotalServico, setTempoTotalServico] = useState(0)
  const enterpriseId = props.params.id



  useEffect(() => {
    async function fetchEnterprise() {
      // const getEnterprise = await useEnterprise(enterpriseId)
      setEnterprise(null)
    }

    async function fetchEmployees() {
      // const getEmployees = await getEmployeesByEnterprise(enterpriseId)
      setEmployees([])
    }

    async function fetchServices() {
      // const getServices = await getServicesByEnterprise(enterpriseId)
      setServices([])
    }

    fetchEnterprise()
    fetchEmployees()
    fetchServices()
  }, [enterpriseId])

  const addService = (service: ServicoListagemDto) => {
    const newService = service
    setSelectedServices([...selectedServices, newService])
    setSelectedServicesId([...selectedServicesId, newService.id])
  }


  useEffect(() => {
    const total = selectedServices.reduce((total, service) => {
      if (service) {
        return total += service.valorServico
      }
      return total
    }, 0)

    const totalTempo = selectedServices.reduce((total, service) => {
      if (service) {
        return total += service.tempoMedioEmMinutos
      }
      return total
    }, 0)
    setValorTotalServico(total)
    setTempoTotalServico(totalTempo)
  }, [selectedServices])

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      cpf: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      payment: '1',
      services: [],
      prestadorId: 0,
      formaPagamento: 0
    },
    onSubmit: ((values, { resetForm }) => {
      try {
        axios.post('http://localhost:8080/pedidos', {
          cliente: {
            nome: values.name,
            sobrenome: values.surname,
            telefone: values.phone,
            cpf: values.cpf,
            email: values.email,
            Agendamento: new Date(`${values.date}T${values.time}:00`),
            servicos: selectedServicesId,
            prestadorId: selectedEmployee?.id ?? '',
            formaPagamento: values.payment
          }
        }, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MjM1ODk3ODUsImV4cCI6MTcyNzE4OTc4NX0.aCQKUjA0MAIuBawFGxwyU40AycZhTnk6UUrEkQOIVusvh0ykH24HOPr_CAA-7LIB-CX7TxA13Ks3wSAfxLz7Pg'
          }
        })
        alert("Pedido realizado com sucesso")
        setSelectedServices([])
        window.location.href = "/"
        resetForm()
      } catch (error) {
        alert(error)
      }
    })
  })

  return (
    <>
      <Container className="w-screen flex flex-col justify-center text-center items-center pt-6 pb-4">
        {page === 'funcionariosPage' && (
          <div className="h-screen flex flex-col justify-center text-center items-center">
            <Heading color='black' size={4}> Selecione o funcionário </Heading>
            <Typography color='black' className="max-w-screen-lg"> Escolha um dos funcionários disponíveis </Typography>
            <div className="flex flex-wrap max-w-screen-lg justify-center">
              {employees && employees.map((employee, index) => (
                <div key={index} className="filial-container gap-5 flex flex-col mt-6">
                  <PrestadorItem
                    image='https://fakeimg.pl/100x100/cccccc/909090'
                    nome={employee.nome}
                    onClick={() => {
                      setPage('servicosPage')
                      setSelectedEmployee(employee)
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {page === 'servicosPage' && (
          <div className="max-w-3xl w-full min-h-full">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
              <CustomCarousel />
            </div>

            <div className="flex justify-around pt-6">
              <div className="flex justify-center flex-col items-center w-24">
                <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z" />
                </svg>
                <p>Ligar</p>
              </div>

              <div className="flex justify-center flex-col items-center w-24">
                <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z" />
                </svg>
                <p>Direção</p>
              </div>

              <div className="flex justify-center flex-col items-center w-24">
                <svg className="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                </svg>
                <p>Compartilhar</p>
              </div>
            </div>

            <div>
              <Heading color='black' size={4} className="text-left pt-6 pb-1" > {enterprise?.razaoSocial || 'Nome do estabelecimento'} </Heading>
              <Typography color='black' className="max-w-screen-lg tp-1" textSize="base" textPosition="left">
                {enterprise && `${enterprise.endereco.logradouro}, nº ${enterprise.endereco.numero}, ${enterprise.endereco.complemento || ''}, ${enterprise.endereco.cep}, ${enterprise.endereco.cidade}-${enterprise.endereco.estado}`}
              </Typography>
              <div className="text-left pt-3">
                <CustomModal />
              </div>
            </div>

            <div>
              <Heading color='black' size={4} className="text-left pt-8 pb-6" > Serviços </Heading>
              {services.length > 0 && services.map((service, index) => (
                <ServicoItem
                  title={service.descricaoServico}
                  key={index}
                  description=''
                  price={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(service.valorServico)}
                  selectedEmployee={selectedEmployee?.nome || ''}
                  serviceList={selectedServices}
                  onSelectService={() => addService(service)}
                  totalValue={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorTotalServico)}
                  totalTime={''}
                  cpfValue={formik.values.cpf}
                  nameValue={formik.values.name}
                  phoneValue={formik.values.phone}
                  surnameValue={formik.values.surname}
                  emailValue={formik.values.email}
                  onChange={formik.handleChange}
                  onSubmit={formik.handleSubmit}
                  dateValue={formik.values.date}
                  timeValue={formik.values.time}
                  paymentValue={formik.values.payment}
                  onChangePage={''}
                />
              ))}
            </div>
            {/* <div className="">
                            <Checkout />
                        </div> */}
          </div>
        )}
      </Container>

      {openFormModal && (
        <ModalFormCliente
          open={openFormModal}
          onClose={() => setOpenFormModal(false)}
          totalTime={''}
          totalValue={''}
          onBack={function (): void {
            throw new Error('Function not implemented.')
          }}
          nameValue={''}
          surnameValue={''}
          cpfValue={''}
          phoneValue={''}
          emailValue={''}
          onChange={function (): void {
            throw new Error('Function not implemented.')
          }}
          onSubmit={function (): void {
            throw new Error('Function not implemented.')
          }}
          paymentValue={''} />
      )}
    </>
  )
}
