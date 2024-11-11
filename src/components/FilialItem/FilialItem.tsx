import Image from 'next/image'
import { Typography } from "../Typography/Typography";

type FilialItemProps = {
    image: string
    title: string
    address: string
    state: string
    onClick: () => void
}

export function FilialItem({ image, title, address, state, onClick }: FilialItemProps) {
    return (
        <button onClick={onClick}>
            <div className="filial-item bg-gray-300 h-auto flex p-3 ">
                <Image
                    className="pr-3"
                    src={image}
                    alt=""
                    height={500}
                    width={500}
                />
                <div className="flex flex-col justify-between text-start w-full">
                    <Typography color='black' className='font-medium' textPosition="left"> {title} </Typography>
                    <div>
                        <Typography color='black' textSize='base' textPosition="left">  {address} </Typography>
                        <Typography color='black' textSize='base' textPosition="left"> {state} </Typography>
                    </div>
                </div>
            </div>
        </button>
    );
}
