'use client'

import { Typography } from '@/components/Typography/Typography'
import { Accordion } from "flowbite-react"

type FaqAccordionProps = {
    pergunta: string
    resposta: string
}

export function FaqAccordion({ pergunta, resposta }: FaqAccordionProps) {
    return (
        <>
            <Accordion collapseAll>
                <Accordion.Panel>
                    <Accordion.Title>
                        <Typography
                            color='blueEnd'
                            textSize='lg'
                        >
                            {pergunta}
                        </Typography>
                    </Accordion.Title>
                    <Accordion.Content>
                        <Typography
                            color='body'
                            textSize='base'
                            textPosition='left'
                            fullWidth
                        >
                            {resposta}
                        </Typography>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </>
    )
}

