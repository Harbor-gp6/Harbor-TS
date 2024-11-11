import { Container } from '@/components/Container/Container'
import { cookies } from 'next/headers'
import { SignInResult } from '@/types/SignInResult'
import { UpdateLogoForm } from './components/UpdateLogoForm'
import { Heading } from '@/components/Heading/Heading'

export default async function UpdateLogoPage () {
  const userCookies = cookies()
  const userInfos = userCookies.get('user')
  const user: SignInResult = JSON.parse(userInfos?.value || '')

  return (
    <Container
      className="flex flex-col items-center justify-center gap-6"
    >
      <Heading
        color='blue'
        size={4}
      >
        Atualizar Logo
      </Heading>

      <UpdateLogoForm
        token={user.token}
      />
    </Container>
  )
}
