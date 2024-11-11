import Image from 'next/image'
import { Typography } from "../Typography/Typography"

type PrestadorItemProps = {
    image: string
    nome: string
    onClick: () => void
}

export function PrestadorItem({ image, nome, onClick }: PrestadorItemProps) {
    return (
        <button onClick={onClick} className="flex justify-center ">
            <div className="filial-item hover:bg-gray-300 h-auto w-fit flex justify-center flex-col p-7 rounded-xl ">
                <Image
                    className="rounded-full"
                    src={image}
                    alt=""
                    width={64}
                    height={64}
                />
                <div className="text-start">
                </div>
                <Typography color='black' className='font-medium max-w-fit pt-3' >{nome}</Typography>
            </div>
        </button>
    )
}
