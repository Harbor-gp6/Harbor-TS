'use client'

import { useState } from 'react'
import { EmployeeSelect } from './EmployeeSelect'
import { PrestadorListagemDto } from '@/types/prestador/PrestadorListagemDto'
import { ServiceSelect } from './ServiceSelect'
import { ServicoListagemDto } from '@/types/servico/ServicoListagemDto'
import { EmpresaListagemDto } from '@/types/empresa/EmpresaListagemDto'
import { useAuthentication } from '@/hooks/useAuthentication'
import { useFormik } from 'formik'
import axios from 'axios'

type PedidoContentProps = {
  enterpriseId: string
  employees: PrestadorListagemDto[]
  services: ServicoListagemDto[]
  enterprise: EmpresaListagemDto
}

export function PedidoContent(props: PedidoContentProps) {
  const { employees, services, enterprise } = props
  const [page, setPage] = useState<'funcionariosPage' | 'servicosPage'>('funcionariosPage')
  const [employee, setEmployee] = useState<PrestadorListagemDto | null>(null)
  const [selectedSevices, setSelectedServices] = useState<ServicoListagemDto[]>([])
  const user = useAuthentication()

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      cpf: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      services: [],
      prestadorId: 0,
      formaPagamento: ''
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
            // servicos: selectedServicesId,
            prestadorId: employee?.id ?? '',
            formaPagamento: values.formaPagamento
          }
        }, {
          headers: {
            Authorization: user.token
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

  function calculatedValue () {
    let totalValue = 0
    if (selectedSevices.length > 0) {
      for (const service of selectedSevices) {
        totalValue += service.valorServico
      }
    }

    return totalValue
  }

  return (
    <div>
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
          selectedEmployee={employee}
          selectedServices={selectedSevices}
          valorTotalServico={calculatedValue()}
          cpfValue={formik.values.cpf}
          dateValue={formik.values.date}
          emailValue={formik.values.email}
          nameValue={formik.values.name}
          paymentValue={formik.values.formaPagamento}
          phoneValue={formik.values.phone}
          surnameValue={formik.values.surname}
          timeValue={formik.values.time}
          onChange={formik.handleChange}
          onSubmit={formik.handleSubmit}
          onChangePage={() => setPage('servicosPage')}
          onSelectService={(service) => setSelectedServices([{...service}, service])}
        />
      )}
    </div>
  )
}
