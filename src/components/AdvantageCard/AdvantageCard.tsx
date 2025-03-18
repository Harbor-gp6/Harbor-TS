import Image from 'next/image'
import { Typography } from '../Typography/Typography'

type AdvantageCardProps = {
  leftImageSrc?: string
  rightImageSrc?: string
  title: string
  description?: string
}

export default function AdvantageCard({ leftImageSrc, rightImageSrc, title, description }: AdvantageCardProps) {
  return (
    <div className='flex gap-2 h-full items-center'>
      {leftImageSrc && (
        <Image
          alt=''
          src={leftImageSrc}
          height={200}
          width={200}
          className='lg:h-36 max-h-36'
        />
      )}

      <div className='flex flex-col gap-2'>
        <div className={`w-full flex items-center ${rightImageSrc ? 'justify-end' : 'justify-start'}`}>
          <div className='flex items-center justify-center max-w-20 p-2 border-2 border-gray-300 rounded-xl'>
            <Typography
              color="blueEnd"
              textSize="base"
            >
              {title}
            </Typography>
          </div>
        </div>

        <div className='flex items-center w-full justify-center p-2 border-2 border-gray-300 rounded-xl'>
          <Typography
            color="body"
            textPosition="left"
            textSize="base"
          >
            {description}
          </Typography>
        </div>
      </div>

      {rightImageSrc && (
        <Image
          alt=''
          src={rightImageSrc}
          height={200}
          width={200}
          className='lg:h-36 max-h-36'
        />
      )}
    </div>
  )
}
