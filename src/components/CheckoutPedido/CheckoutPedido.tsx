/* eslint-disable react/prop-types */
import { Banner, Button } from "flowbite-react";
import { Typography } from "../Typography/Typography";
import { Container } from "../Container/Container";

type CheckoutProps = {
    onClick: (value: boolean) => void
}

export function Checkout({onClick}:CheckoutProps) {
    return (
        <Banner>
            <Container className="flex justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
                <div>
                    <Typography className="w-full" color='black' textPosition="left" textSize="base"> Total: R$40,00</Typography>
                    <Typography className="w-full" color='black' textPosition="left" textSize="base"> Tempo médio: 120 min</Typography>
                </div>


                {/* <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
          <HiX className="h-4 w-4" />
        </Banner.CollapseButton> */}
                <Button onClick={() => onClick(true)}>
                    Finalizar
                </Button>
            </Container>
        </Banner >
    );
}
