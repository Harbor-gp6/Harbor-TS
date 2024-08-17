import { ClassArray, ClassValue, clsx } from 'clsx'

type InputType = 'email' | 'text' | 'number' | 'password'

type InputProps = {
  value?: string
  onChange?: () => void
  name?: string
  className?: ClassValue | ClassArray
  type?: InputType
}

const defaultType: InputType = 'text'

export function Input ({value, onChange, name, className, type = defaultType}: InputProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      name={name}
      className={clsx(
        'rounded-full',
        'border',
        'border-black',
        ...(Array.isArray(className) ? className : [className])
      )}
      type={type}
    />
  )
}
