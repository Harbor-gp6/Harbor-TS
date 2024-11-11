import Image from 'next/image'

type CustomCarouselProps = {
  banner?: string
  logo?: string
}

export function CustomCarousel(props: CustomCarouselProps) {
  const { banner, logo } = props

  return (
    <div className="flex h-80 max-w-screen-lg relative">
      <Image
        height={1000}
        width={1000}
        src={banner || "https://flowbite.com/docs/images/carousel/carousel-1.svg"}
        alt="..."
        className='object-fill'
      />

      {logo && (
        <Image
          height={200}
          width={200}
          src={logo}
          alt='Logo'
          className='absolute bottom-0 left-0 h-24 w-24'
        />
      )}
    </div>
  )
}
