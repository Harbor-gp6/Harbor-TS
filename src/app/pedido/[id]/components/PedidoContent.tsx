'use client'

import { useState } from 'react'
import { EmployeeSelect } from './EmployeeSelect'
import { PrestadorListagemDto } from '@/types/prestador/PrestadorListagemDto'
import { ServiceSelect } from './ServiceSelect'
import { ServicoListagemDto } from '@/types/servico/ServicoListagemDto'
import { EmpresaListagemDto } from '@/types/empresa/EmpresaListagemDto'
import { useFormik } from 'formik'
import axios, { AxiosError } from 'axios'
import { ClienteCriacaoDto } from '@/types/cliente/ClienteCriacaoDto'
import { PedidoV2CriacaoDto } from '@/types/pedidoV2/PedidoV2CriacaoDto'
import { PedidoProdutoV2Dto } from '@/types/pedidoV2/PedidoProdutoV2Dto'
import { PedidoPrestadorDto } from '@/types/pedidoV2/PedidoPrestadorDto'
import { useRouter } from 'next/navigation'
import { ProdutoListagemDto } from '@/types/produto/ProdutoListagemDto'
import Swal from 'sweetalert2'

type PedidoContentProps = {
  enterpriseId: string
  employees: PrestadorListagemDto[]
  services: ServicoListagemDto[]
  products: ProdutoListagemDto[]
  enterprise: EmpresaListagemDto
  enterpriseBanner: string
  enterpriseLogo: string
}

export function PedidoContent(props: PedidoContentProps) {
  const { employees, services, enterprise, products, enterpriseBanner, enterpriseLogo } = props
  const [page, setPage] = useState<'funcionariosPage' | 'servicosPage'>('servicosPage')
  const [employee, setEmployee] = useState<PrestadorListagemDto | null>(null)
  const [employeeId, setEmployeeId] = useState<number | null>(null)
  const [selectedSevices, setSelectedServices] = useState<ServicoListagemDto[]>([])
  const [selectedProducts, setSelectedProducts] = useState<ProdutoListagemDto[]>([])
  const route = useRouter()

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      cpf: '',
      phone: '',
      email: '',
      orderDate: '',
      formaPagamento: ''
    },
    onSubmit: (async (values, { resetForm }) => {
      const client: ClienteCriacaoDto = {
        nome: values.name,
        cpf: values.cpf,
        email: values.email,
        sobrenome: values.surname,
        telefone: values.phone
      }

      const data = values.orderDate
      const [dia, mes, anoHora] = data.split('/')
      const [ano, hora] = anoHora.split(' ')

      // Converte para o formato ISO 8601: YYYY-MM-DDTHH:MM
      const dataFormatada = `${ano}-${mes}-${dia}T${hora}`
      const dateObj = new Date(dataFormatada)

      const createOrderData: PedidoV2CriacaoDto = {
        cliente: client,
        cnpjEmpresa: enterprise.cnpj,
        pedidoPrestador: createOrder(),
        dataAgendamento: dateObj,
        formaPagamentoEnum: values.formaPagamento,
        pedidoProdutos: []
      }

      try {
       await axios.post('http://100.29.19.154/api/pedidos/criarPedidoV2', createOrderData).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Pedido realizado com sucesso',
          showConfirmButton: false
        })
          setSelectedServices([])
          route.push('/')
          resetForm()
        }).catch((error: AxiosError) => {
          const errorData: any = error.response?.data
          if (errorData.status === 500) {
            Swal.fire({
              icon: 'error',
              title: 'Não foi possível cadastrar seu pedido, tente novamente mais tarde.'
            })
            console.error(errorData)
          } else if (errorData.status === 401) {
            Swal.fire({
              icon: 'warning',
              title: 'Você não está autorizado a fazer essa ação'
            })
          } else if (errorData.status === 400) {
            Swal.fire({
              icon: 'error',
              title: 'Há alguma informação incorreta'
            })
          } else {
            console.error('Erro:', errorData.message)
          }
        })
      } catch (error: any) {
        throw new Error(error)
      }
    })
  })

  function calculatedValue() {
    let totalValue = 0
    if (selectedSevices.length > 0) {
      for (const service of selectedSevices) {
        totalValue += service.valorServico
      }
    }

    return totalValue
  }

  function calculatedTime() {
    let totalTime = 0
    if (selectedSevices.length > 0) {
      for (const service of selectedSevices) {
        totalTime += service.tempoMedioEmMinutos
      }
    }

    return totalTime
  }

  function createOrder() {
    const newOrder: PedidoPrestadorDto[] = []
    if (selectedSevices.length > 0) {
      for (const service of selectedSevices) {
        const order: PedidoPrestadorDto = {
          servicoId: service.id,
          prestadorId: Number(employeeId!)
        }
        newOrder.push(order)
      }
    }
    return newOrder
  }

  const selectedEmployee = employees.find((employee) => employee.id === employeeId)!

  return (
    <div className='min-h-screen'>
      {page === 'funcionariosPage' && (
        <EmployeeSelect
          employees={employees}
          onSelectEmployee={setEmployee}
        />
      )}

      {page === 'servicosPage' && (
        <ServiceSelect
          enterprise={enterprise}
          services={services}
          selectedEmployee={selectedEmployee}
          selectedServices={selectedSevices}
          valorTotalServico={calculatedValue()}
          cpfValue={formik.values.cpf}
          emailValue={formik.values.email}
          nameValue={formik.values.name}
          paymentValue={formik.values.formaPagamento}
          phoneValue={formik.values.phone}
          surnameValue={formik.values.surname}
          onDateTimeSelect={(e) => formik.setFieldValue('orderDate', e)}
          onSelectPayment={(value) => formik.setFieldValue('formaPagamento', value)}
          onChange={formik.handleChange}
          onSubmit={formik.handleSubmit}
          onChangePage={() => setPage('servicosPage')}
          onSelectService={(service) => setSelectedServices(prev => [...prev, service])}
          onSelectEmployee={setEmployeeId}
          employees={employees}
          products={products}
          totalTime={calculatedTime()}
          enterpriseBanner={enterpriseBanner}
          enterpriseLogo={enterpriseLogo}
        />
      )}
    </div>
  )
}
