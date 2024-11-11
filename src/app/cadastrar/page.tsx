import Link from 'next/link'
import { Container } from '../../components/Container/Container'
import { Heading } from '../../components/Heading/Heading'
import { Typography } from '../../components/Typography/Typography'
import Image from 'next/image'
import { FirstForm } from './components/FirstForm'

export default function Register() {

  return (
    <div className='w-screen min-h-screen bg-gradient-to-b from-transparent to-white flex items-center justify-center relative'>

      <Image
        src="/images/graphs/grafismos.svg"
        alt="Grafismos"
        className='absolute top-0 z-0'
        height={400}
        width={1920}
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
            Já possui conta? <Link href={'/login'}><span className='text-blueEnd'> Comece por aqui</span></Link>
          </Typography>
        </div>

        <FirstForm />
      </Container>
    </div>
  )
}
