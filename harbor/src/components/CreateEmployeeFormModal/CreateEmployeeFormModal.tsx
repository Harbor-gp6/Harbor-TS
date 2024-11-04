'use client'
import { useAuth } from '@/contexts/auth-context'
import { CreateEmployee } from '@/lib/create-employee'
import { CriarFuncionario } from '@/types/prestador/CriarFuncionario'
import { Button, Modal as FlowbiteModal, Label, TextInput } from "flowbite-react"
import { useFormik } from 'formik'
import Swal from 'sweetalert2'

type CreateEmployeeFormModalProps = {
  open: boolean
  onClose: () => void
}

export function CreateEmployeeFormModal(props: CreateEmployeeFormModalProps) {
  const { onClose, open } = props
  const { user } = useAuth()

  const formik = useFormik({
    initialValues: {
      employeeName: '',
      employeeSurname: '',
      employeeCpf: '',
      employeeRole: '',
      employeeEmail: '',
      employeePassword: '',
      employeePhone: ''
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const employeeToCreate: CriarFuncionario = {
          nome: values.employeeName,
          cargo: values.employeeRole,
          cpf: values.employeeCpf,
          email: values.employeeEmail,
          sobrenome: values.employeeSurname,
          telefone: values.employeePhone,
          senha: values.employeePassword
        }

        await CreateEmployee(employeeToCreate, user.token)
        Swal.fire({
          icon: 'success',
          title: 'Prestador cadastrado com sucesso',
          timer: 2000
        })
        resetForm()
        onClose()
        window.location.reload()
      } catch (error: any) {
        Swal.fire({
          icon: 'error',
          title: 'Erro ao criar prestador',
          text: error.message,
          timer: 1500
        })
      }
    }
  })

  return (
    <FlowbiteModal dismissible show={open} onClose={onClose}>
      <FlowbiteModal.Header>Adicionar Prestador</FlowbiteModal.Header>
      <FlowbiteModal.Body>
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6'>
          <div className='flex flex-col gap-4'>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="employeeName" value="Nome" />
              </div>
              <TextInput
                onChange={formik.handleChange}
                id="employeeName"
                name='employeeName'
                type="text"
                value={formik.values.employeeName}
                placeholder="Nome do Prestador"
                required
              />
            </div>

            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="employeeSurname" value="Sobrenome" />
              </div>
              <TextInput
                onChange={formik.handleChange}
                id="employeeSurname"
                name='employeeSurname'
                type="text"
                value={formik.values.employeeSurname}
                placeholder="Sobrenome do Prestador"
                required
              />
            </div>

            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="employeeEmail" value="Email" />
              </div>
              <TextInput
                onChange={formik.handleChange}
                id="employeeEmail"
                name='employeeEmail'
                type="text"
                value={formik.values.employeeEmail}
                helperText='Email do Prestador'
                required
              />
            </div>

            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="employeePassword" value="Senha" />
              </div>
              <TextInput
                onChange={formik.handleChange}
                id="employeePassword"
                name='employeePassword'
                type="password"
                value={formik.values.employeePassword}
                helperText='Senha do Prestador'
                required
              />
            </div>

            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="employeePhone" value="Telefone" />
              </div>
              <TextInput
                onChange={formik.handleChange}
                id="employeePhone"
                name='employeePhone'
                type="text"
                value={formik.values.employeePhone}
                helperText='(00) 00000-0000'
                required
              />
            </div>

            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="employeeCpf" value="CPF" />
              </div>
              <TextInput
                onChange={formik.handleChange}
                id="employeeCpf"
                name='employeeCpf'
                type="text"
                value={formik.values.employeeCpf}
                helperText='000.000.000-00'
                required
              />
            </div>

            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="employeeRole" value="Cargo" />
              </div>
              <select
                name="employeeRole"
                id="employeeRole"
                value={formik.values.employeeRole}
                onChange={(e) => formik.setFieldValue('employeeRole', e.target.value)}
                className='text-body'
              >
                <option value="" disabled>Selecione o Cargo</option>
                <option value='ADMIN' className='text-body'>
                  Admin
                </option>
                <option value='EMPREGADO' className='text-body'>
                  Empregado
                </option>
                <option value='ATENDENTE' className='text-body'>
                  Atendente
                </option>
              </select>
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
                Cadastrar
              </Button>
            </div>
          </div>
        </form>
      </FlowbiteModal.Body>
    </FlowbiteModal>
  )
}
