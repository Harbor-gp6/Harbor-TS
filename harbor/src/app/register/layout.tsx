import { ReactNode } from "react"

type RegisterPageLayoutProps = {
    children: ReactNode
}

export default function RegisterPageLayout(props: RegisterPageLayoutProps) {
    return (
        <div className="flex flex-col bg-white w-full">
            {props.children}
        </div>
    )
}