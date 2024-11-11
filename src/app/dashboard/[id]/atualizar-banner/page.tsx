import { Container } from '@/components/Container/Container'
import { cookies } from 'next/headers'
import { SignInResult } from '@/types/SignInResult'
import { Heading } from '@/components/Heading/Heading'
import { UpdateBannerForm } from './components/UpdateBannerForm'

export default async function UpdateBannerPage () {
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
        Atualizar Banner
      </Heading>

      <UpdateBannerForm
        token={user.token}
      />

    </Container>
  )
}
