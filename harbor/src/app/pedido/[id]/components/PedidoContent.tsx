'use client'

import { useState } from 'react'
import { EmployeeSelect } from './EmployeeSelect'
import { PrestadorListagemDto } from '@/types/prestador/PrestadorListagemDto'

type PedidoContentProps = {
  enterpriseId: string
  employees: PrestadorListagemDto[]
}

export function PedidoContent(props: PedidoContentProps) {
  const { employees } = props
  const [page, setPage] = useState('funcionariosPage')
  const [employee, setEmployee] = useState<PrestadorListagemDto | null>(null)

  return (
    <div>
      {page === 'funcionariosPage' && (
        <EmployeeSelect
          employees={employees}
          onSelectEmployee={setEmployee}
        />
      )}
    </div>
  )
}
