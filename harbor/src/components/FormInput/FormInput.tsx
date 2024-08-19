import clsx, { ClassArray, ClassValue } from 'clsx'
type InputType = 'email' | 'text' | 'number' | 'password'

type FormInputProps = {
  value?: string
  onChange?: (value: any) => void
  name?: string
  className?: ClassValue | ClassArray
  type?: InputType
  placeholder?: string
  disabled?: boolean
  onKeyDown?: () => void
  onInput?: () => void
  onBlur?: () => void
}

const defaultType: InputType = 'text'


export function FormInput ({
  className,
  name,
  value,
  placeholder,
  disabled,
  onChange,
  onKeyDown,
  onInput,
  type = defaultType,
  onBlur
}:FormInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onInput={onInput}
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      className={clsx(
        'rounded-xl',
        'p-3',
        ...(Array.isArray(className) ? className : [className])
      )}
    />
  )
}
