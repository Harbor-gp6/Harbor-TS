import { Button } from '@/components/Button'
import { Heading } from '../../../components/Heading/Heading'
import { Typography } from '../../../components/Typography/Typography'
import { ArrowRight } from 'lucide-react'
import Wave from 'react-wavify'

export default function FirstSection() {
  return (
    <div className='flex w-screen bg-gradient-to-b from-blue to-blueEnd pt-10 lg:pt-24'>
      <div className='flex flex-col gap-10 items-center w-full justify-center z-10'>
        <Heading className="hidden lg:block text-center">
          Em um oceano de desafios financeiros, navegue com segurança: <br /> Harbor, a sua rota para o sucesso.
        </Heading>

        <Heading size={3} className="block lg:hidden text-center px-5">
          Em um oceano de desafios financeiros, navegue com segurança: <br /> Harbor, a sua rota para o sucesso.
        </Heading>

        <Typography>
          Potencialize sua gestão financeira. Simplifique e otimize seu negócio com nossos painéis inteligentes.
        </Typography>

        <Button
          color='white'
          textColor='blueEnd'
          href='/cadastrar'
          endIcon={<ArrowRight className='rounded-full bg-blueEnd ml-4 text-white' />}
          className='hover:shadow-sm hover:shadow-white transition'
        >
          Comece a faturar agora
        </Button>

        <Wave
          amplitude={40}
          className='h-20'
        />
      </div>
    </div>
  )
}
