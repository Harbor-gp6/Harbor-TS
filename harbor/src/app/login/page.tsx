import Link from 'next/link'
import { Container } from '@/components/Container/Container'
import { Heading } from '@/components/Heading/Heading'
import { Typography } from '@/components/Typography/Typography'
import { LoginForm } from './components/LoginForm'
import Image from 'next/image'


export default function Login() {
  return (
    <div className='w-screen min-h-screen bg-gradient-to-b from-transparent to-white flex items-center justify-center relative'>
      <Image
        src="/images/graphs/grafismos.svg"
        alt="Grafismos"
        className='absolute top-0 z-0 w-full'
        height={1000}
        width={1000}
      />

      <Container maxWidth="md" className="flex flex-col gap-4 z-10">
        <div className='flex flex-col gap-2'>
          <Heading
            color='black'
            size={3}
          >
            Comece a faturar com a solução Harbor
          </Heading>

          <Typography
            color="body"
            textPosition="left"
            className="whitespace-nowrap"
          >
            Não possui conta? <Link href={'/cadastrar'}><span className='text-blueEnd'> Comece por aqui</span></Link>
          </Typography>
        </div>
        <LoginForm />

      </Container>
    </div>
  )
}
