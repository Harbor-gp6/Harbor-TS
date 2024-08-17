import { format } from 'date-fns'
import { Button, Timeline } from "flowbite-react"
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi"

type TimelineCustomProps = {
  pedidosList: any[]
}

export function TimelineCustom({ pedidosList }: TimelineCustomProps) {
  return (
    <Timeline>
      <h1 className="text-xl pb-5 flex justify-center">
        Atendimentos
      </h1>
      {pedidosList.length === 0 && (
        <div className='flex w-full items-center justify-center'>
          Nenhum atendimento realizado
        </div>
      )}
      {pedidosList.length > 0 && pedidosList.map((pedido, index) => (
        <Timeline.Item key={index}>
          <Timeline.Point icon={HiCalendar} />
          {format(new Date(pedido.dataAgendamento).toISOString(), 'p')}
          <Timeline.Content>
            <Timeline.Time>{format(new Date(pedido.dataAgendamento).toISOString(), 'PP')}</Timeline.Time>
            <Timeline.Title>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pedido.total)}</Timeline.Title>
            <Timeline.Body>
              {pedido.listaServico.map((servico: any) => (
                <>
                  {servico.servico.descricaoServico}
                </>
              ))}
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  )
}
