import { Container } from '@/components/Container/Container'
import { Input } from '@/components/Input/Input'
import { UpdateImageForm } from './components/UpdateImageForm'
import { cookies } from 'next/headers'
import { SignInResult } from '@/types/SignInResult'

type UpdateEmployeeImageProps = {
  params: {
    id: string
  }
}

export default async function UpdateEmployeeImage (props: UpdateEmployeeImageProps) {
  const employeeId = props.params.id
  const userCookies = cookies()
  const userInfos = userCookies.get('user')
  const user: SignInResult = JSON.parse(userInfos?.value || '')

  return (
    <Container
      className="flex flex-col items-center justify-center"
    >
      <UpdateImageForm
        employeeId={employeeId}
        token={user.token}
      />
    </Container>
  )
}
