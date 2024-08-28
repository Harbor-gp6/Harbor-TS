import { AuthenticationContext } from '@/contexts/authentication-context'
import { SignInResult } from '@/types/SignInResult'
import { useContext } from 'react'

export function useAuthentication () {
  const authentication = useContext(AuthenticationContext)

  const autheticatedUser: SignInResult = JSON.parse(authentication.authenticatedUser)

  return autheticatedUser
}
