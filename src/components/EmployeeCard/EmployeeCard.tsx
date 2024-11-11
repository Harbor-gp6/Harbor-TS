import Image from 'next/image'

type EmployeeCardProps = {
  name: string
  lastName: string
  role: string
  imgSrc: string
  onInactivate?: () => void
}

export function EmployeeCard(props: EmployeeCardProps) {
  const { imgSrc, lastName, name, role, onInactivate } = props

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg text-white w-full transition-transform transform hover:scale-105">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={imgSrc}
            alt={`${name} ${lastName}`}
            className="w-8 h-8 rounded-full mr-2"
            width={64}
            height={64}
          />
          <div>
            <p className="font-semibold">{`${name} ${lastName}`}</p>
            <p className="text-gray-400 text-sm">{role}</p>
          </div>
        </div>

        {/* <div className='flex flex-col lg:flex-row gap-4'>
          <button
          onClick={onInactivate}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400 transition"
        >
          Inativar
        </button>
        </div> */}
      </div>
    </div>
  )
}
