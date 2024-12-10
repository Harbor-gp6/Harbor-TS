'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { NavBarMainContent } from './components/NavBarMainContent'
import { usePathname } from 'next/navigation'

export function InterNav() {
  const [employee, setEmployee] = useState({
    empresa: { razaoSocial: '' },
    nome: '',
    sobrenome: '',
    email: '',
    cargo: ''
  })
  const pathname = usePathname()
  const splitedPathname = pathname.split("/")
  const employeeId = Number(splitedPathname[2])

  useEffect(() => {
    let isMounted = true

    async function fetchEmployee() {
      try {
        const response = await axios.get(`http://100.28.169.213/api/usuarios/${employeeId}`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MjM1ODk3ODUsImV4cCI6MTcyNzE4OTc4NX0.aCQKUjA0MAIuBawFGxwyU40AycZhTnk6UUrEkQOIVusvh0ykH24HOPr_CAA-7LIB-CX7TxA13Ks3wSAfxLz7Pg'
          }
        })

        if (isMounted) {
          setEmployee(response.data)
        }
      } catch (err) {
      }
    }

    fetchEmployee()

    return () => {
      isMounted = false
    }
  }, [employeeId])

  useEffect(() => {
  })

  return (
    <>
      <NavBarMainContent
        enterpriseName={employee.empresa.razaoSocial}
        userName={employee.nome}
        userSurname={employee.sobrenome}
        userEmail={employee.email}
        userRole={employee.cargo}
        userId={employeeId}
      />
    </>
  )
}
