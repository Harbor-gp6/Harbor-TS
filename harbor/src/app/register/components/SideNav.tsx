/* eslint-disable react/prop-types */
import { Heading } from '../../../components/Heading/Heading'

export function SideNav({ children }: any) {
  return (
    <div className='flex flex-col bg-white p-4 items-start border-r border-black h-full max-w-96 gap-6'>
      <Heading
        size={5}
        color='black'
      >
        Cadastro de estabelecimento
      </Heading>


      <div className='flex flex-col gap-4 w-full justify-center'>
        {children}
      </div>
    </div>
  )
}
