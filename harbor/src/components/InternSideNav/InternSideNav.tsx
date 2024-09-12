'use client'

import { useEffect, useState } from 'react'
import { Sidebar, Modal } from "flowbite-react"
import { HiChartPie, HiInbox, HiUser, HiViewBoards } from "react-icons/hi"
import { format } from 'date-fns'
import axios from 'axios'
import { ServiceCard } from '../ServiceCard/ServiceCard'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

type ProviderCardProps = {
  name: string
  lastName: string
  role: string
  imgSrc: string
}

type InternSideNavProps = {
  id: string | number
}

const ProviderCard = ({ name, lastName, role, imgSrc }: ProviderCardProps) => (
  <div className="p-4 bg-gray-800 rounded-lg shadow-lg text-white transition-transform transform hover:scale-105">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src={imgSrc}
          alt={`${name} ${lastName}`}
          className="w-8 h-8 rounded-full mr-2"
          width={64}
          height={64}
        />
        <div>
          <p className="font-semibold">{`${name} ${lastName}`}</p>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400 transition">
        Inativar
      </button>
    </div>
  </div>
)

export function InternSideNav(props: InternSideNavProps) {
  const { id } = props
  const pathname = usePathname()
  const splitedPathname = pathname.split("/")
  const employeeId = Number(splitedPathname[2])
  const [data, setData] = useState([])
  const [empoloyee, setEmployee] = useState<any>([])
  const [empoloyees, setEmployees] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpen2, setIsModalOpen2] = useState(false)
  const [isModalOpen3, setIsModalOpen3] = useState(false)

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleModalOpen2 = () => {
    setIsModalOpen2(true)
  }

  const handleModalClose2 = () => {
    setIsModalOpen2(false)
  }

  const handleModalOpen3 = () => {
    setIsModalOpen3(true)
  }

  const handleModalClose3 = () => {
    setIsModalOpen3(false)
  }

  const handleStartDateChange = (event: any) => {
    setStartDate(event.target.value)
  }

  const handleEndDateChange = (event: any) => {
    setEndDate(event.target.value)
  }


  useEffect(() => {
    let isMounted = true
    async function fetchEmployee() {
      try {
        const response = await axios.get(`http://localhost:8080/usuarios/${employeeId}`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MjM1ODk3ODUsImV4cCI6MTcyNzE4OTc4NX0.aCQKUjA0MAIuBawFGxwyU40AycZhTnk6UUrEkQOIVusvh0ykH24HOPr_CAA-7LIB-CX7TxA13Ks3wSAfxLz7Pg'
          }
        })

        if (isMounted) {
          setEmployee(response.data)
          console.log('Employee data set:', response.data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    async function fetchEmployeeOrders() {
      try {
        const response = await axios.get(`http://localhost:8080/pedidos/prestador/${employeeId}`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MjM1ODk3ODUsImV4cCI6MTcyNzE4OTc4NX0.aCQKUjA0MAIuBawFGxwyU40AycZhTnk6UUrEkQOIVusvh0ykH24HOPr_CAA-7LIB-CX7TxA13Ks3wSAfxLz7Pg'
          }
        })

        if (isMounted) {
          setData(response.data)
          console.log('Employee data set:', response.data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetchEmployee()
    fetchEmployeeOrders()

    return () => {
      isMounted = false
    }
  }, [data, employeeId,])

  console.log(empoloyee)

  useEffect(() => {
    console.log('Component rendered or employee state changed:', data)
  })

  useEffect(() => {
    async function fetchEmployees() {
        try {
            const response = await axios.get(`http://localhost:8080/usuarios/empresa/${empoloyee.empresa.id}`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MjM1ODk3ODUsImV4cCI6MTcyNzE4OTc4NX0.aCQKUjA0MAIuBawFGxwyU40AycZhTnk6UUrEkQOIVusvh0ykH24HOPr_CAA-7LIB-CX7TxA13Ks3wSAfxLz7Pg'
                }
            });

            setEmployees(response.data);
            console.log('Employee data set:', response.data);
        } catch (err) {
            console.log(err);
        }
    }

    if (empoloyee.length > 0) {
        fetchEmployees();
    }
}, [empoloyee]);


  async function handleDownloadRelatory() {
    await axios.get(`http://localhost:8080/relatorios/servicos-por-prestador/csv/${empoloyee.empresa.id}?dtInicio=${startDate}&dtFim=${endDate}`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MjM1ODk3ODUsImV4cCI6MTcyNzE4OTc4NX0.aCQKUjA0MAIuBawFGxwyU40AycZhTnk6UUrEkQOIVusvh0ykH24HOPr_CAA-7LIB-CX7TxA13Ks3wSAfxLz7Pg'
      }
    }).then(csvContent => {
      // Cria um Blob a partir do conteúdo do CSV
      var blob = new Blob([csvContent.data], { type: 'text/csv' })

      // Cria um URL temporário para o Blob
      var url = URL.createObjectURL(blob)

      // Cria um elemento de âncora temporário
      var tempLink = document.createElement('a')
      tempLink.href = url
      tempLink.download = 'arquivo.csv'  // Nome do arquivo que será baixado

      // Adiciona o link ao documento
      document.body.appendChild(tempLink)

      // Simula um clique no link
      tempLink.click()

      // Remove o link do documento e libera o URL do Blob
      document.body.removeChild(tempLink)
      URL.revokeObjectURL(url)
    })
      .catch(error => console.error('Erro ao obter o conteúdo do CSV:', error))
  }

  const pedidosPendentes = data.filter((pedido: any) => (pedido.finalizado === false))

  console.log(pedidosPendentes)


  return (
    <>
      <Sidebar aria-label="Sidebar with call to action button example" color='black' className="hidden md:block text-white">
        <div className='flex flex-col h-full'>
          <Sidebar.Items className='h-full'>
            <Sidebar.ItemGroup className='h-full'>
              <Sidebar.Item href={`/dashboard/${id}`} icon={HiChartPie} className="hover:bg-gray-700 hover:text-white">
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href={`/dashboard/${id}/pedidos`} icon={HiViewBoards} className="hover:bg-gray-700 hover:text-white">
                Agenda
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox} onClick={handleModalOpen} className="hover:bg-gray-700 hover:text-white">
                Relatórios
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser} onClick={handleModalOpen3} className="hover:bg-gray-700 hover:text-white">
                Prestadores
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </Sidebar>

      <Modal show={isModalOpen} onClose={handleModalClose}>
        <Modal.Header>
          <div className="space-y-6 mb-3">
            <p className="text-lg font-semibold text-gray-700">
              Selecione o período:
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                Início
              </label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={handleStartDateChange}
                className="mt-1 block w-fit border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                Fim
              </label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={handleEndDateChange}
                className="mt-1 block w-fit border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-2">
            {/* <p className="text-gray-800">Faturamento Bruto</p>
            <p className="text-gray-800">Ticket Médio</p> */}
            <button onClick={handleDownloadRelatory}>
              <p onClick={handleDownloadRelatory} className="text-gray-800">Receita por Prestador de Serviço</p>
            </button>
            {/* <p className="text-gray-800">Receita por Tipo de Serviço</p>
            <p className="text-gray-800">Receita por Produto Consumido</p>
            <p className="text-gray-800">Crescimento da Receita</p>
            <p className="text-gray-800">Receita por Cliente</p>
            <p className="text-gray-800">Receita por Data de Agendamento</p>
            <p className="text-gray-800">Receita por Horário Ocupado</p> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            onClick={handleModalClose}
          >
            Fechar
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={isModalOpen2} onClose={handleModalClose2}>
        <Modal.Header>
          <div className="space-y-6 mb-3">
            <p className="text-lg font-semibold text-gray-700">
              Próximos horários:
            </p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className='flex flex-col gap-6'>
            {pedidosPendentes.length === 0 && (
              <div className='flex items-center justify-center w-full'>
                Nenhum pedido pendente
              </div>
            )}
            {pedidosPendentes.length > 0 && pedidosPendentes.map((pedido: any, index) => (
              <ServiceCard
                key={index}
                id={pedido.id}
                service={pedido.listaServico.map((servico: any) => (
                  servico.servico.descricaoServico
                ))}
                provider={`${pedido.prestador.nome} ${pedido.prestador.sobrenome}`}
                time={format(new Date(pedido.dataAgendamento).toISOString(), 'PP')}
                client={pedido.cliente}
                price={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pedido.total)}
                payment={pedido.formaPagamentoEnum}
                onClose={() => setIsModalOpen2(false)}
              />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            onClick={handleModalClose2}
          >
            Fechar
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={isModalOpen3} onClose={handleModalClose3}>
        <Modal.Header>
          <div className="space-y-6 mb-3">
            <p className="text-lg font-semibold text-gray-700">
              Prestadores de Serviço
            </p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-6">
            {/* Aqui você pode adicionar quantos cards de prestadores de serviço quiser */}
            {empoloyees.length > 0 && empoloyees.map((prestador: any, index) => (
              <ProviderCard key={index} name={prestador.nome} lastName={prestador.sobrenome} role={prestador.cargo} imgSrc="https://via.placeholder.com/50" />
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            onClick={handleModalClose3}
          >
            Fechar
          </button>
        </Modal.Footer>
      </Modal>

    </>
  )
}
