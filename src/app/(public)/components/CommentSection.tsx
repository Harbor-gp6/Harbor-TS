import Image from 'next/image'
import tiagoImage from "@/../../assets/tiago.svg"
import { Container } from '../../../components/Container/Container'

export function CommentSection() {
  return (
    <div className="bg-[#6D6FFA] w-screen flex flex-col lg:flex-row justify-center lg:items-center h-screen lg:h-fit text-white">
      <Container
        className="mx-auto flex"
      >
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-evenly">
          <div className="flex flex-col h-full w-full items-center lg:max-w-[600px] text-center lg:pl-40">
            <p className="text-3xl lg:text-5xl">Quem conhece e confia na Harbor</p>
            <p className="text-3xl lg:text-3xl mt-12">
              {"Por muito tempo me senti perdido com o meu negócio. Sinto que a Harbor me permite trabalhar de maneira mais assertiva e inteligente"}
            </p>
            <p className="text-xl mt-8">
              -Tiago Romano do @barberSantiago, parceiro há mais de 2 meses.
            </p>
          </div>
          <div className="hidden md:flex h-full w-full justify-end">
            <Image
              src={tiagoImage}
              alt="Imagem Tiago"
              height={500}
              width={500}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
