'use client'

import { SignInResult } from '@/types/SignInResult'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'
import axios, { AxiosError } from 'axios'


interface AuthContextProps {
  user: any
  login: (email: string, password: string) => Promise<SignInResult | AxiosError | null>
  logout: () => void
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export function AuthProvider (props: AuthProviderProps) {
  const { children } = props

  const [user, setUser] = useState<SignInResult | null>(null)

  useEffect(() => {
    const userCookie = getCookie('user')

    if (userCookie) {
      const userData = JSON.parse(userCookie)
      setUser(userData)
    }
  }, [])

  const login = async (email: string, password: string): Promise<SignInResult | AxiosError | null> => {
    try {
      const loginCommandData = {
        email,
        senha: password
      }

      const response = await axios.post('http://localhost:8080/usuarios/login', loginCommandData).then((response) => {
        const result = response.data

        const userInfos: SignInResult = {
          userId: result.userId,
          nome: result.nome,
          email: result.email,
          token: result.token,
          idEmpresa: result.idEmpresa
        }

        setUser(userInfos)
        setCookie('user', JSON.stringify(userInfos))
        return response.data
      }).catch((err: AxiosError) => {
        const errorData: any = err.response
        return errorData
      })

      return response
    } catch (error: any) {
      throw new Error('Ocorreu um erro:', error)
    }
  }

  const logout = () => {
    setUser(null)
    deleteCookie('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )

}

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
