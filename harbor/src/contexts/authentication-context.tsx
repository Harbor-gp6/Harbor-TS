import { createContext } from 'react'

export type AuthenticationContextValue = {
  loading: boolean
  authenticatedUser: any | null
  setAuthenticateduser: (user: any | null) => void
  refetch: () => void
}

export const AuthenticationContext = createContext<AuthenticationContextValue>(null!)
