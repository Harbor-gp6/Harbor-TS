"use client"

import { Button, Modal as FlowbiteModal } from "flowbite-react"
import { useState } from "react"
import { ServicoCard } from "../ServicoCard/ServicoCard"
import { DateTimePicker } from '../DateTimePicker/DateTimePicker'
import { PrestadorListagemDto } from '@/types/prestador/PrestadorListagemDto'

type ModalHorariosProps = {
  serviceEmployee: any
  onChangePage: () => void
  onSelectService: () => void
  serviceList: any[]
  totalValue: string
  totalTime: number
  nameValue: string
  surnameValue: string
  cpfValue: string
  phoneValue: string
  onChange: () => void
  emailValue: string
  onSubmit: () => void
  onDateTimeSelect: (formattedDateTime: string) => void
  paymentValue: string
  employees: PrestadorListagemDto[]
  onSelectEmployee: (value: any) => void
}

export function ModalHorarios({
  serviceEmployee,
  onChangePage,
  onSelectService,
  serviceList,
  totalValue,
  totalTime,
  nameValue,
  surnameValue,
  cpfValue,
  phoneValue,
  onChange,
  emailValue,
  onSubmit,
  onDateTimeSelect,
  paymentValue,
  onSelectEmployee,
  employees
}: ModalHorariosProps) {
  const [openModal, setOpenModal] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState('')

  return (
    <>
      <Button className="h-fit w-full" onClick={() => setOpenModal(true)}>Ver horários</Button>
      <FlowbiteModal
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="fixed inset-0 w-full h-full flex items-center justify-center"
      >
        <div className="bg-white dark:bg-gray-800 w-full h-full p-6 overflow-auto">
          <FlowbiteModal.Header className="w-full">Horários</FlowbiteModal.Header>
          <FlowbiteModal.Body className="w-full h-full">
            <div className='flex flex-col gap-4'>
              <div className="flex gap-2 overflow-auto">
                <label className='text-body' htmlFor="employees">Selecione o Funcionário:</label>
                <select
                  name="employees"
                  id="employees"
                  value={selectedEmployee} // Atribuir o valor corretamente
                  onChange={(e) => setSelectedEmployee(e.target.value)} // Atualizar o estado corretamente
                  className='text-body'
                >
                  <option value="" disabled>Selecione o funcionário</option>
                  {employees.map((employee, index) => (
                    <option value={employee.id} key={index} className='text-body'>
                      {employee.nome}
                    </option>
                  ))}
                </select>
              </div>
              {selectedEmployee && (
                <DateTimePicker onDateTimeSelect={onDateTimeSelect} employeeId={Number(selectedEmployee)} />
              )}
            </div>
            <div className="space-y-6">
              {serviceList.length === 0 && (
                <div className='w-full flex items-center justify-center text-center'>
                  Lista de serviços vazia
                </div>
              )}
              {serviceList.length > 0 && serviceList.map((service, index) => (
                <ServicoCard
                  key={index}
                  servico={service.descricaoServico}
                  preco={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(service.valorServico)}
                  horario="08:00"
                  barbeiro={serviceEmployee.nome}
                  data="01/01/2022"
                  onChangeEmployee={onChangePage}
                />
              ))}
              <div className='flex w-full items-center justify-center'>
                <Button
                  onClick={() => {
                    onSelectService()
                    onSelectEmployee(selectedEmployee)
                    setOpenModal(false)
                  }}
                >
                  Adicionar Serviço
                </Button>
              </div>
            </div>
          </FlowbiteModal.Body>
        </div>
      </FlowbiteModal>
    </>
  )
}
