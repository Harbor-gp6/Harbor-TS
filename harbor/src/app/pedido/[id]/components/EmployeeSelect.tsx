import { Heading } from '@/components/Heading/Heading'
import { PrestadorItem } from '@/components/PrestadorItem/PrestadorItem'
import { Typography } from '@/components/Typography/Typography'
import { PrestadorListagemDto } from '@/types/prestador/PrestadorListagemDto'

type EmployeeSelectProps = {
  employees: PrestadorListagemDto[]
  onSelectEmployee: (value: PrestadorListagemDto) => void
}

export function EmployeeSelect(props: EmployeeSelectProps) {
  const { employees, onSelectEmployee } = props

  return (
    <div className="h-screen flex flex-col justify-center text-center items-center">
      <Heading
        color='black'
        size={4}
      >
        Selecione o funcionário
      </Heading>

      <Typography
        color='black'
        className="max-w-screen-lg"
      >
      Escolha um dos funcionários disponíveis
      </Typography>

      <div className="flex flex-wrap max-w-screen-lg justify-center">
        {employees && employees.map((employee, index) => (
          <div key={index} className="filial-container gap-5 flex flex-col mt-6">
            <PrestadorItem
              image='https://fakeimg.pl/100x100/cccccc/909090'
              nome={employee.nome}
              onClick={() => {
                onSelectEmployee(employee)
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
