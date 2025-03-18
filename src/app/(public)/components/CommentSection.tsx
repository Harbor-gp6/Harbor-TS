import Image from 'next/image'
import tiagoImage from "@/../../assets/tiago.svg"
import { Container } from '../../../components/Container/Container'
import { Typography } from '@/components/Typography/Typography'
import { Heading } from '@/components/Heading/Heading'

export function CommentSection() {
  return (
    <div className="bg-blueEnd w-screen flex flex-col lg:flex-row justify-between lg:items-center h-full text-white pt-10">
      <Container
        className="flex h-full"
        maxWidth='2xl'
      >
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className='flex flex-col h-full items-center justify-center max-w-lg mb-5 mx-auto'>
            <div className="flex flex-col h-full w-full items-center text-center">
              <Heading
                size={3}
                color='white'
                className='text-left'
              >
                {'"Por muito tempo me senti perdido com o meu negócio. Sinto que a Harbor me permite trabalhar de maneira mais assertiva e inteligente"'}
              </Heading>
              <Typography
                color='white'
                textSize='lg'
              >
                -Tiago Romano do <b>Barbershop SanTiago</b>, parceiro há mais de 2 meses.
              </Typography>
            </div>
          </div>
          <Image
            src={tiagoImage}
            alt="Imagem Tiago"
            height={200}
            width={200}
            className='h-fit w-fit rounded-xl'
          />
        </div>
      </Container>
    </div>
  )
}
