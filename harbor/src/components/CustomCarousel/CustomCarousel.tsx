import Image from 'next/image'

type CustomCarouselProps = {
  banner?: string
  logo?: string
}

export function CustomCarousel(props: CustomCarouselProps) {
  const { banner, logo } = props

  return (
    <div className="h-56 max-w-screen-lg relative">
      <Image
        height={1000}
        width={1000}
        src={banner || "https://flowbite.com/docs/images/carousel/carousel-1.svg"}
        alt="..."
        className='object-contain'
      />

      {logo && (
        <Image
          height={64}
          width={64}
          src={logo}
          alt='Logo'
          className='absolute bottom-0 left-0 h-16 w-h-16'
        />
      )}
    </div>
  )
}
