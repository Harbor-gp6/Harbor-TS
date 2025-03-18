import AdvantageCard from '../../../components/AdvantageCard/AdvantageCard'
import { Container } from '../../../components/Container/Container'
import eyeIcon from '../../../../public/images/clientSection/eyeIcon.svg';
import coinIcon from '../../../../public/images/clientSection/coinIcon.svg'
import handsIcon from '../../../../public/images/clientSection/handsIcon.svg'
import rocketIcon from '../../../../public/images/clientSection/rocketIcon.svg'
import calendarIcon from '../../../../public/images/clientSection/calendarIcon.svg'
import { Heading } from '../../../components/Heading/Heading'

export function OrbitalSection() {
    return (
        <Container
            className="flex flex-col gap-4 items-center justify-center mx-auto"
            maxWidth="sm"
        >
            <Heading
                color="blueEnd"
                size={4}
            >
                O que você terá sendo nosso cliente:
            </Heading>

            <div className='flex flex-col gap-4 items-center justify-center'>
                <AdvantageCard
                    leftImageSrc={eyeIcon}
                    title="Visão"
                    description="Acompanhe desempenho, metas e histórico em uma interface integrada."
                />
                <AdvantageCard
                    rightImageSrc={rocketIcon}
                    title="Impulso"
                    description="Potencialize suas vendas com insights sobre o comportamento dos clientes."
                />
                <AdvantageCard
                    leftImageSrc={coinIcon}
                    title="Finanças"
                    description="Tenha visibilidade total sobre entradas e saídas com emissão de notas e informações de faturas."
                />
                <AdvantageCard
                    rightImageSrc={handsIcon}
                    title="Parcerias"
                    description="Crie parcerias vantajosas e programe descontos especiais para clientes e fornecedores."
                />
                <AdvantageCard
                    leftImageSrc={calendarIcon}
                    title="Agenda"
                    description="Manntenha o controle do tempo com a agenda inteligente que sicroniza compromissos entre colaboradores e clientes."
                />
            </div>
        </Container>
    )
}
