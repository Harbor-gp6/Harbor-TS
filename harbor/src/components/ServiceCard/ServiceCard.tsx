'use client'
import { useAuth } from '@/contexts/auth-context'
import { FinishOrder } from '@/lib/finish-order'

type ServiceCardProps = {
  id: number
  service: string[]
  provider: string[]
  time: string
  client: string
  price: string
  payment: string
}

export function ServiceCard({ id, service, provider, time, client, price, payment }: ServiceCardProps) {

  const { user } = useAuth()

  return (
    <div className="space-y-4 p-6 bg-gray-800 rounded-lg shadow-lg text-white transition-transform transform hover:scale-105 w-full">
      <div className="flex justify-between items-center">
        <p className="text-sm font-bold">Pedido ID: {id}</p>
        <button onClick={async () => await FinishOrder(id, user.token)} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
      <div className="flex justify-between items-start">
        <p className="font-semibold">Serviços:</p>
        <div className='flex flex-col gap-2'>
          {service.map((service) => (
            <p key={service} className='text-right'>
              {service}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-start">
        <p className="font-semibold">Nome dos Prestadores:</p>
        <div className='flex flex-col gap-2'>
          {provider.map((provider) => (
            <p key={provider}>
              {provider}
            </p>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">Horário:</p>
        <p>{time}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">Nome do Cliente:</p>
        <p>{client}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">Valor do Serviço:</p>
        <p>{price}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">Forma de Pagamento:</p>
        <p>{payment}</p>
      </div>
    </div>
  )
}
