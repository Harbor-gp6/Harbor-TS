"use client"

import { Modal as FlowbiteModal } from "flowbite-react"
import { useState } from "react"
import { Typography } from "../Typography/Typography"
import { ServicoCard } from "../ServicoCard/ServicoCard"


type ModalCheckoutProps = {
  serviceEmployee: any
  serviceList: any[]
}

export function ModalCheckout({
  serviceEmployee,
  serviceList,
}: ModalCheckoutProps) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <FlowbiteModal
      dismissible
      show={openModal}
      onClose={() => setOpenModal(false)}
      className="fixed inset-0 w-full h-full flex items-center justify-center"
    >
      <div className="bg-white dark:bg-gray-800 w-full h-full p-6 overflow-auto">
        <FlowbiteModal.Header className="w-full">Checkout</FlowbiteModal.Header>
        <FlowbiteModal.Body className="w-full h-full">
          <div className="space-y-6">
            {serviceList.length === 0 && (
              <div className='w-full flex items-center justify-center text-center'>
                <Typography
                  color='black'
                >
                  Lista de serviços vazia
                </Typography>
              </div>
            )}
            {/* {serviceList.length > 0 && serviceList.map((service, index) => (
              <ServicoCard
              key={index}
              servico={service.descricaoServico}
              preco={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(service.valorServico)}
              horario="08:00" barbeiro={serviceEmployee.nome}
              data="01/01/2022"
              onChangeEmployee={onChangePage} />
            ))} */}
            {/* <button
                onClick={() => {
                  onSelectService()
                  setOpenModal(false)
                }}
              >
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Adicionar mais serviços +
                </p>
              </button> */}
          </div>
        </FlowbiteModal.Body>
      </div>
    </FlowbiteModal>
  )
}
