import { Container } from '../Container/Container'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../Button'

export default function Header() {
  return (
    <div className="flex lg:justify-between h-24 bg-blue lg:px-20">
      <Container
        maxWidth="xl"
        className='mx-auto'
      >
        <div className='w-full h-full flex lg:items-center justify-between gap-6'>
          <div className='flex gap-6 items-center'>
            <Link href='/'>
              <Image
                src="/images/logos/harborLogo.svg"
                alt="Logo da harbor"
                className='h-10'
                height={150}
                width={150}
              />
            </Link>
          </div>

          <div className='flex gap-4 items-center'>
            <Button
              href='/login'
              variant='outlined'
              color='white'
              textColor='white'
              className='hover:bg-white hover:text-blue transition duration-75 ease-in-out text-sm md:text-base'
            >
              Login
            </Button>

            <Button
              color='white'
              href='/cadastrar'
              textColor='blue'
              className='hover:shadow-md hover:shadow-white transition delay-100 duration-75 ease-in-out text-sm md:text-base whitespace-nowrap'
            >
              Cadastre-se
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
