'use client'
import { useState, useEffect } from 'react'
import { AddressInfos } from '@/types/AddressInfos'
import { GetAddressByCep } from '@/lib/get-address-by-cep'

export function useGetAddressByCep(cep: number) {
  const [corpAddress, setCorpAddress] = useState<AddressInfos | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCorpAddress = async () => {
      try {
        setLoading(true)
        const infos = await GetAddressByCep(cep)
        setCorpAddress(infos)
      } catch (err) {
        setError('Erro ao carregar informações')
      } finally {
        setLoading(false)
      }
    }

    if (cep) {
      fetchCorpAddress()
    }
  }, [cep])

  return { corpAddress, loading, error }
}
