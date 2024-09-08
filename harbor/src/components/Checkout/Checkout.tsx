import { Banner, Button } from "flowbite-react"
import { Typography } from "../Typography/Typography"
import { Container } from "../Container/Container"

type CheckoutProps = {
  onClick?: (value: boolean) => void
  onAdd?: () => void
  totalValue: number
  avgTime?: number
}

export function Checkout(props: CheckoutProps) {
  const { onClick, avgTime, totalValue, onAdd } = props

  return (
    <Banner>
      <Container className="flex justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div>
          <Typography className="w-full" color='black' textPosition="left" textSize="base">
            Total: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalValue)}
          </Typography>

          <Typography className="w-full" color='black' textPosition="left" textSize="base">
            Tempo médio: {avgTime || 0} min
          </Typography>
        </div>


        {/* <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton> */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-6'>
        {onAdd && (
          <Button onClick={onAdd}>
          Adicionar
        </Button>
        )}
        {onClick && (
          <Button onClick={() => onClick(true)}>
          Finalizar
        </Button>
        )}
        </div>
      </Container>
    </Banner >
  )
}
