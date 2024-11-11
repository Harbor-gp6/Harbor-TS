'use client'
import { useAuth } from '@/contexts/auth-context'
import { UpdateService } from '@/lib/update-service'
import { ServicoCriacaoDto } from '@/types/servico/ServicoCriacaoDto'
import { Button, Modal as FlowbiteModal, Label, TextInput } from "flowbite-react"
import { useFormik } from 'formik'
import Swal from 'sweetalert2'

type UpdateServiceFormModalProps = {
  open: boolean
  onClose: () => void
  serviceId: number
  serviceName: string
  serviceTime: number
  servicePrice: number
}

export function UpdateServiceFormModal(props: UpdateServiceFormModalProps) {
  const { onClose, open, serviceId, serviceName, servicePrice, serviceTime } = props
  const { user } = useAuth()

  const formik = useFormik({
    initialValues: {
      serviceName: serviceName,
      isSpecial: false,
      serviceTime: serviceTime,
      servicePrice: servicePrice,
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const serviceToUpdate: ServicoCriacaoDto = {
          descricaoServico: values.serviceName,
          servicoEspecial: values.isSpecial,
          tempoMedioEmMinutos: values.serviceTime,
          valorServico: values.servicePrice
        }

        await UpdateService(user.idEmpresa, serviceId, serviceToUpdate, user.token)
        Swal.fire({
          icon: 'success',
          title: 'Serviço atualizado com sucesso',
          timer: 2000
        })
        resetForm()
        onClose()
        window.location.reload()
      } catch (error: any) {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao atualizar serviço',
          text: error.message,
          timer: 1500
        })
      }
    }
  })

  return (
    <FlowbiteModal dismissible show={open} onClose={onClose}>
      <FlowbiteModal.Header>Atualizar Serviço</FlowbiteModal.Header>
      <FlowbiteModal.Body>
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6'>
          <div className='flex flex-col gap-4'>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="serviceName" value="Nome do Serviço" />
              </div>
              <TextInput
                onChange={formik.handleChange}
                id="serviceName"
                name='serviceName'
                type="text"
                value={formik.values.serviceName}
                placeholder="Nome do Serviço"
                required
              />
            </div>

            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="servicePrice" value="Valor do Serviço" />
              </div>
              <TextInput
                onChange={formik.handleChange}
                id="servicePrice"
                name='servicePrice'
                type="number"
                value={formik.values.servicePrice}
                placeholder="R$ 0,00"
                required
              />
            </div>

            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="serviceTime" value="Tempo do Serviço" />
              </div>
              <TextInput
                onChange={formik.handleChange}
                id="serviceTime"
                name='serviceTime'
                type="number"
                value={formik.values.serviceTime}
                required
              />
            </div>
          </div>

          <div className='flex w-full justify-between items-center'>
            <Button
              onClick={onClose}
              outline
              className='text-blueEnd'
            >
              Voltar
            </Button>

            <Button
              type='submit'
              className='text-white bg-blue hover:bg-blueEnd'
            >
              Atualizar
            </Button>
          </div>
        </form>
      </FlowbiteModal.Body>
    </FlowbiteModal>
  )
}
