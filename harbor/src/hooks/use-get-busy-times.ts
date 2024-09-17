'use client'
import { useState, useEffect } from 'react';
import { GetEmployeeBusyTime } from '@/lib/get-employee-busy-time';
import { HorariosOcupados } from '@/types/servico/HorariosOcupados'

export function useGetBusyTimes(employeeId: number) {
  const [busyDates, setBusyDates] = useState<HorariosOcupados[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusyDates = async () => {
      try {
        setLoading(true);
        const dates = await GetEmployeeBusyTime(employeeId);
        setBusyDates(dates);
      } catch (err) {
        setError('Erro ao carregar horários ocupados');
      } finally {
        setLoading(false);
      }
    };

    if (employeeId) {
      fetchBusyDates(); // Somente chama a API se houver um employeeId
    }
  }, [employeeId]); // A dependência é só employeeId

  return { busyDates, loading, error };
}
