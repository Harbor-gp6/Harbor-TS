import footerLinks from '@/../../assets/footer/footerLinks.json'
import { Container } from '../Container/Container'
import { FormInput } from '../FormInput/FormInput'
import { Typography } from '../Typography/Typography'
import { FooterLinks } from './components/FooterLinks'
import Image from 'next/image'

export function Footer() {
  return (
    <div className='h-fit bg-white justify-center flex flex-col border-t border-blue lg:flex-row p-6 mt-10 lg:mt-0'>
      <Container className="flex flex-col lg:flex-row mx-auto" maxWidth="xl">
        <div className='flex flex-col lg:flex-row w-full justify-between items-center'>
          <div className='h-full flex'>
            <a href="/" className='w-fit'>
              <Image
                width={1000}
                height={1000}
                src="/images/logos/harborLogoAzul.svg"
                alt="Logo Harbor Caravela"
                className='h-full w-fit object-cover'
              />
            </a>
          </div>

          <div className='flex flex-col gap-10 mt-6 lg:flex-row w-full justify-evenly'>
            {footerLinks.map((link, index) => (
              <FooterLinks
                key={index}
                linkTitle={link.title}
                linkPaths={link.paths}
              />
            ))}
          </div>

          <div className='hidden lg:flex flex-col w-full gap-4'>
            <Typography
              textSize='base'
              textPosition='left'
              color='black'
            >
              Estamos sempre disponíveis para atender às suas perguntas e necessidades. Entre em contato conosco, sua opinião é importante para nós.
            </Typography>

            <div className='flex w-full gap-4'>
              <FormInput
                placeholder="Nome"
              />
              <FormInput
                className='w-full'
                placeholder="E-mail"
              />
            </div>
            <FormInput
              placeholder="Assunto"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
