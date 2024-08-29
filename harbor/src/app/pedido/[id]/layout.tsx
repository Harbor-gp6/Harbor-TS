import { ReactNode } from "react"

type PedidoLayoutProps = {
    children: ReactNode
}

export default function PedidoLayout(props: PedidoLayoutProps) {
    return (
        <div className="h-screen w-screen bg-white">
            { props.children }
        </div>
    )
}