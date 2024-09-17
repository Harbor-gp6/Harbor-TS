import { Typography } from "../Typography/Typography"
import { ModalHorarios } from "../ModalHorarios/ModalHorarios"
import { PrestadorListagemDto } from '@/types/prestador/PrestadorListagemDto'

type ServicoItemProps = {
    title: string
    description: string
    price: string
    selectedEmployee: string
    onChangePage: any
    onSelectService: () => void
    onSelectEmployee: (value: any) => void
    serviceList: any[]
    totalValue: string
    totalTime: number
    nameValue: string
    surnameValue: string
    cpfValue: string
    phoneValue: string
    onChange: any
    emailValue: string
    onSubmit: () => void
    onDateTimeSelect: (formattedDateTime: string) => void
    paymentValue: string
    employees: PrestadorListagemDto[]
}

export function ServicoItem({
    title,
    description,
    price,
    selectedEmployee,
    onChangePage,
    onSelectService,
    onSelectEmployee,
    serviceList,
    totalValue,
    totalTime,
    nameValue,
    surnameValue,
    cpfValue,
    phoneValue,
    onChange,
    emailValue,
    onSubmit,
    onDateTimeSelect,
    paymentValue,
    employees
}: ServicoItemProps) {
    return (
        <div className="filial-item bg-gray-300 h-auto block p-3 w-full sm:flex mb-3">
            <div className="flex flex-col justify-between text-start w-full ">
                <Typography color='black' className='font-medium' textPosition="left"> {title} </Typography>
                <div>
                    <Typography color='black' textSize='base' textPosition="left">  {description} </Typography>
                    <Typography color='black' textSize='base' textPosition="left"> {price} </Typography>
                </div>

            </div>

            <div className="w-full max-w-32 flex items-center pt-5 sm:pt-0">
                <ModalHorarios
                    serviceEmployee={selectedEmployee}
                    onSelectService={onSelectService}
                    onChangePage={onChangePage}
                    serviceList={serviceList}
                    totalTime={totalTime}
                    totalValue={totalValue}
                    cpfValue={cpfValue}
                    nameValue={nameValue}
                    phoneValue={phoneValue}
                    surnameValue={surnameValue}
                    onChange={onChange}
                    emailValue={emailValue}
                    paymentValue={paymentValue}
                    onSubmit={onSubmit}
                    onDateTimeSelect={onDateTimeSelect}
                    employees={employees}
                    onSelectEmployee={onSelectEmployee}

                />
            </div>


        </div>
    )
}
