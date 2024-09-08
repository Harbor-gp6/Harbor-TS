"use client";

import { Button, Modal as FlowbiteModal } from "flowbite-react";
import { useState } from "react";
import { Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Typography } from "../Typography/Typography";

type ModalFormClienteProps = {
  open: boolean
  onClose: () => void
  totalTime: string | number
  totalValue: number
  // onBack: () => void
  nameValue: string
  surnameValue: string
  cpfValue: string
  phoneValue: string
  emailValue: string
  onChange: () => void
  onSubmit: () => void
  paymentValue: string
}

export function ModalFormCliente({ open, onClose, totalTime, totalValue, nameValue, surnameValue, cpfValue, phoneValue, emailValue, onChange, onSubmit, paymentValue} : ModalFormClienteProps) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <p onClick={() => setOpenModal(true)}></p>
      <FlowbiteModal dismissible show={open} onClose={onClose}>
        <FlowbiteModal.Header>Agora as informações do cliente</FlowbiteModal.Header>
        <FlowbiteModal.Body>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Seu nome" />
            </div>
            <TextInput onChange={onChange} id="name" name='name' type="text" value={nameValue} icon={HiMail} placeholder="Nome" required />
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="surname" value="Seu sobrenome" />
            </div>
            <TextInput onChange={onChange} id="surname" name='surname' type="text" value={surnameValue} icon={HiMail} placeholder="Sobrenome" required />
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="email" value="Seu Email" />
            </div>
            <TextInput onChange={onChange} id="email" name='email' type="text" value={emailValue} icon={HiMail} placeholder="Email" required />
          </div>

          <div className="max-w-md mt-4">
            <div className="mb-2 block">
              <Label htmlFor="CPF" value="CPF" />
            </div>
            <TextInput onChange={onChange} id="CPF" name='cpf' type="text" value={cpfValue} icon={HiMail} placeholder="000.000.000-00" required />
          </div>

          <div className="max-w-md mt-4">
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Telefone" />
            </div>
            <TextInput onChange={onChange} id="phone" name='phone' value={phoneValue} type="text" icon={HiMail} placeholder="11 90000-" required />
          </div>

        </FlowbiteModal.Body>
        <FlowbiteModal.Footer className="w-full flex flex-col text-left">
            <Typography className="w-full ml-2" color='black' textPosition="left" textSize= "base"> Total: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValue)}</Typography>
            <Typography className="w-full ml-8" color='black' textPosition="left" textSize= "base"> Tempo médio: {totalTime || 0} min</Typography>
            <div className="flex justify-between gap-2 w-full">
              <Typography className="w-full" color='black' textPosition="left" textSize= "base"> Forma de pagamento:</Typography>
              <div className="w-full flex flex-col justify-center">
                <select id="payment" name='payment' value={paymentValue} onChange={onChange} className="bg-gray-50 border p-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value={1} selected>Cartão de crédito</option>
                  <option value={2}>Cartão de débito</option>
                  <option value={3}>Dinheiro</option>
                  <option value={4}>Pix</option>
                </select>
                <Typography className="w-full font-thin " color='black' textPosition="left" textSize= "sm"> (pagar no estabelecimento)</Typography>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-4'>
              <Button className="w-full mt-4" onClick={onClose}>
                Voltar
              </Button>
              <Button className="w-full mt-4" onClick={() => {
                onSubmit()
              }}>
                Agendar
              </Button>
            </div>
          </FlowbiteModal.Footer>
      </FlowbiteModal>
    </>
  );
}
