import { ReactNode } from "react"

type AvaliacaoLayout = {
    children: ReactNode
}

export default function AvaliacaoLayout(props: AvaliacaoLayout) {
    return (
        <div className="flex flex-row justify-center items-center w-screen h-screen bg-white">
            { props.children }
        </div>
    )
}