'use client'

import { Accordion } from "flowbite-react";

type FaqAccordionProps = {
    pergunta: string
    resposta: string
}

export function FaqAccordion({ pergunta, resposta }: FaqAccordionProps) {
    return (
        <>
            <Accordion collapseAll>
                <Accordion.Panel>
                    <Accordion.Title className="text-black">
                        <p>{pergunta}</p>
                    </Accordion.Title>
                    <Accordion.Content className="text-gray-600">
                        <p>{resposta}</p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </>
    )
}

