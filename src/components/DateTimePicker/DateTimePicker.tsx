"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import { useGetBusyTimes } from "@/hooks/use-get-busy-times";

// Tipagem para as datas e horários
interface BusyTime {
  id: number;
  dataInicio: string;
  dataFim: string;
}

// Tipagem para as props
interface DateTimePickerProps {
  onDateTimeSelect: (formattedDateTime: string) => void;
  employeeId: number;
}

// Função para gerar horários de 30 em 30 minutos
const generateTimeSlots = (openingTime: string, closingTime: string) => {
  const slots: string[] = [];
  let [hours, minutes] = openingTime.split(":").map(Number);
  const [closeHours, closeMinutes] = closingTime.split(":").map(Number);

  while (hours < closeHours || (hours === closeHours && minutes < closeMinutes)) {
    slots.push(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`);
    minutes += 30;
    if (minutes >= 60) {
      minutes = 0;
      hours += 1;
    }
  }

  return slots;
};

// Função para gerar dias do mês a partir da data atual
const generateAvailableDates = () => {
  const today = new Date();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const availableDates = [];

  for (let day = today.getDate(); day <= daysInMonth; day++) {
    const currentDay = new Date(today.getFullYear(), today.getMonth(), day);
    availableDates.push(currentDay);
  }

  return availableDates;
};

export function DateTimePicker({ onDateTimeSelect, employeeId }: DateTimePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const swiperRef = useRef<SwiperType>();
  const { busyDates, loading, error } = useGetBusyTimes(employeeId);

  // Horário de abertura e fechamento da empresa
  const openingTime = "09:00";
  const closingTime = "18:00";

  // Geração das datas disponíveis
  const availableDates = generateAvailableDates();

  // Funções de seleção de data e hora
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Resetar o horário quando trocar de data
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  // Efeito para chamar a função onDateTimeSelect quando uma data e horário forem selecionados
  useEffect(() => {
    if (selectedDate && selectedTime) {
      const formattedDateTime = `${selectedDate.toLocaleDateString("pt-BR")} ${selectedTime}`;
      onDateTimeSelect(formattedDateTime);
    }
  }, [selectedDate, selectedTime]); // Removi onDateTimeSelect das dependências

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Seção de Datas */}
      <div className="flex w-full">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={false}
          spaceBetween={30}
          slidesPerView={5.5}
          className="mySwiper rounded overflow-hidden"
        >
          {availableDates
            .filter((date) =>
              !busyDates.some((busyDate) => {
                const dataInicio = new Date(busyDate.dataInicio);
                const dataFim = new Date(busyDate.dataFim);

                // Verifica se a data está no intervalo de dataInicio e dataFim
                return date >= dataInicio && date <= dataFim;
              })
            )
            .map((date) => (
              <SwiperSlide key={date.toString()}>
                <button
                  onClick={() => handleDateSelect(date)}
                  className={`p-2 w-16 h-16 rounded-md flex flex-col items-center justify-center
                    ${selectedDate?.toString() === date.toString() ? "bg-gray-700 text-white" : "bg-gray-200 text-black"}`}
                >
                  <span>{date.toLocaleString("default", { month: "short" })}</span> {/* Nome do mês */}
                  <span>{date.getDate()}</span> {/* Dia */}
                </button>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Seção de Horários */}
      {selectedDate && (
        <div className="flex mt-4 w-full">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            navigation={false}
            spaceBetween={30}
            slidesPerView={5.5}
            className="mySwiper"
          >
            {generateTimeSlots(openingTime, closingTime)
              .filter((time) => {
                const timeDate = new Date(`${selectedDate.toISOString().split('T')[0]}T${time}`);

                return !busyDates.some((busyDate) => {
                  const dataInicio = new Date(busyDate.dataInicio);
                  const dataFim = new Date(busyDate.dataFim);

                  // Verifica se o horário está dentro do intervalo de dataInicio e dataFim
                  return timeDate >= dataInicio && timeDate <= dataFim;
                });
              })
              .map((time) => (
                <SwiperSlide key={time}>
                  <button
                    onClick={() => handleTimeSelect(time)}
                    className={`p-2 w-16 rounded-md flex items-center justify-center
                      ${selectedTime === time ? "bg-gray-700 text-white" : "bg-gray-200 text-black"}`}
                  >
                    {time}
                  </button>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
