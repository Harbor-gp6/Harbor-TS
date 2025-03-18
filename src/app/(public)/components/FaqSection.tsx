import { Heading } from '@/components/Heading/Heading'
import { Container } from '../../../components/Container/Container'
import { FaqAccordion } from './FaqAccordion'

const perguntas = ["Quais os planos e preços da solução? Existe versão de teste?",
    "Existe suporte técnico caso precise de ajuda durante o uso?",
    "Posso cadastrar vários usuários na solução ou é limitado a um?",
    "Consigo verificar o fluxo financeiro e fazer relatórios em tempo real?",
    "Consigo visualizar o cronograma e a agenda de todos os profissionais?"]

const respostas = ["O Harbor oferece diferentes planos de assinatura para atender às necessidades dos usuários. Os detalhes específicos sobre os planos e preços podem ser encontrados no nosso site oficial ou entrando em contato com nossa equipe de vendas. Além disso, oferecemos uma versão de teste gratuita que permite aos usuários explorar as funcionalidades do Harbor antes de tomar uma decisão de assinatura.",
    "Sim, o Harbor oferece suporte técnico para ajudar os usuários durante o uso da solução. Nossa equipe de suporte está disponível para responder a perguntas, solucionar problemas técnicos e fornecer orientações relacionadas ao sistema. Os usuários podem entrar em contato conosco por meio do nosso canal de suporte, que pode ser encontrado no nosso site oficial.",
    "O Harbor permite o cadastro de vários usuários na solução. Os proprietários e gestores de empresas podem adicionar membros da equipe e fornecer a cada um deles acesso apropriado às funcionalidades do sistema. Isso permite uma colaboração eficiente e o compartilhamento de informações relevantes dentro da organização.",
    "Sim, o Harbor permite que os usuários verifiquem o fluxo financeiro em tempo real. A solução oferece recursos para registrar receitas e despesas, acompanhar pagamentos pendentes e monitorar o desempenho financeiro geral. Além disso, é possível gerar relatórios personalizados que fornecem insights detalhados sobre a situação financeira da empresa.",
    "Sim, o Harbor oferece uma função de cronograma e agenda que permite visualizar as atividades de todos os profissionais da empresa. Os usuários podem agendar compromissos, atribuir tarefas e acompanhar as programações de cada membro da equipe. Isso facilita o planejamento e a coordenação das atividades, garantindo uma melhor organização e eficiência operacional"]

export function FaqSection() {
    return (
        <Container className="h-full flex flex-col justify-center mx-auto py-10 gap-5">
            <div className="flex flex-col">
                <Heading
                    color='blueEnd'
                    size={2}
                >
                    Dúvidas Frequentes:
                </Heading>
            </div>
            <div className='flex flex-col gap-4'>
                {perguntas.map((pergunta, index) => (
                    <FaqAccordion key={index} pergunta={pergunta} resposta={respostas[index]} />
                ))}
            </div>
        </Container>
    )
}
