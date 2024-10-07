import { RegisterInfosPage } from './components/RegisterInfosPage'

type RegisterInfosProps = {
  searchParams: {
    nome: string
    sobrenome: string
    email: string
    tel: string
  }
}

export default function RegisterInfos(props: RegisterInfosProps) {
  const searchParams = props.searchParams

  return (
    <RegisterInfosPage
      email={searchParams.email}
      name={searchParams.nome}
      phone={searchParams.tel}
      surname={searchParams.sobrenome}
    />
  )
}
