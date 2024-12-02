'use client'

import { useAuth } from '@/contexts/auth-context'
import { format } from 'date-fns'
import { Avatar, Dropdown, Modal, Navbar } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type NavBarMainContentProps = {
  enterpriseName: string
  userId: string | number
  userName: string
  userSurname: string
  userEmail: string
  userRole: string
  userImageUrl?: string // Recebe a URL da imagem
}

export function NavBarMainContent({
  enterpriseName,
  userName,
  userSurname,
  userEmail,
  userRole,
  userImageUrl,
  userId
}: NavBarMainContentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { logout } = useAuth()
  const router = useRouter()


  return (
    <>
      <Navbar fluid rounded className="bg-white shadow-md p-4">
        <Navbar.Brand href="#">
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-gray-800">{enterpriseName}</span>
        </Navbar.Brand>
        <div className="flex items-center gap-4 md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={userImageUrl || 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm font-medium text-gray-800">{userName} {userSurname}</span>
              <span className="block truncate text-sm text-gray-600">{userEmail}</span>
            </Dropdown.Header>
            <Dropdown.Item
              onClick={() => {
                router.push(`/dashboard/${userId}/atualizar-banner`)
              }}>
              Atualizar Banner
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                router.push(`/dashboard/${userId}/atualizar-logo`)
              }}>
              Atualizar Logo
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                router.push(`/dashboard/${userId}/atualizar-imagem`)
              }}
            >
              Atualizar Foto
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item
              onClick={() => {
                logout()
                router.push('/')
              }}
            >
              Sair
            </Dropdown.Item>
          </Dropdown>
          <div className="hidden md:flex flex-col">
            <span className="block text-sm font-medium text-gray-800">{userName} {userSurname}</span>
            <span className="block text-sm text-gray-600">{userRole}</span>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:order-1">
          <span className="text-gray-600 text-sm">{format(new Date().toISOString(), 'PP')}</span>
        </div>
      </Navbar>

      <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header className="flex flex-col items-center">
          <h3 className="text-lg font-medium text-gray-900">Selecione o período</h3>
        </Modal.Header>
        <Modal.Body>
          {/* Conteúdo do Modal */}
        </Modal.Body>
        <Modal.Footer>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition duration-300" onClick={() => setIsModalOpen(false)}>
            Fechar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
