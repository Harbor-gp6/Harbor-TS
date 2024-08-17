/* eslint-disable react/prop-types */
import { Accordion } from "flowbite-react";

export function FaqAccordion({ pergunta, reposta }) {
    return (
        <>
            <Accordion collapseAll>
                <Accordion.Panel>
                    <Accordion.Title className="text-black">
                        <p>{pergunta}</p>
                    </Accordion.Title>
                    <Accordion.Content className="text-gray-600">
                        <p>{reposta}</p>
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </>
    )
}

