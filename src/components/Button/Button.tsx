import { ReactNode } from 'react'
import clsx, { ClassArray, ClassValue } from 'clsx'
import Link from 'next/link'

type ButtonProps = {
  children?: ReactNode
  onClick?: () => void
  href?: string
  disabled?: boolean
  className?: ClassArray | ClassValue
  startIcon?: ReactNode
  endIcon?: ReactNode
  variant?: 'outlined' | 'contained' | 'text'
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: 'noopener' | 'noreferrer' | 'noopener noreferrer'
  fullWidth?: boolean
  color?: 'white' | 'blue' | 'blueEnd' | 'body' | 'transparent'
  textColor?: 'white' | 'blue' | 'blueEnd' | 'body'
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | 'none'
}

export function Button(props: ButtonProps) {
  const {
    children,
    onClick,
    href,
    disabled,
    className,
    startIcon,
    endIcon,
    variant = 'contained',
    target,
    rel,
    color = 'white',
    textColor = 'white',
    rounded = 'full'
  } = props

  const isExternalLink = href?.startsWith('http') || href?.startsWith('https')

  const styles = clsx(
    'flex',
    'items-center',
    'px-4',
    'py-2',
    rounded && `rounded-${rounded}`,
    [variant === 'outlined' && color === 'white' && 'border border-2 bg-transparent border-white'],
    [variant === 'outlined' && color === 'blue' && 'border border-2 bg-transparent border-blue'],
    [variant === 'outlined' && color === 'blueEnd' && 'border border-2 bg-transparent border-blueEnd'],
    [variant === 'outlined' && color === 'body' && 'border border-2 bg-transparent border-body'],
    [variant === 'outlined' && color === 'transparent' && 'border border-2 bg-transparent border-transparent'],
    [variant === 'contained' && color === 'white' && 'bg-white'],
    [variant === 'contained' && color === 'blue' && 'bg-blue'],
    [variant === 'contained' && color === 'blueEnd' && 'bg-blueEnd'],
    [variant === 'contained' && color === 'body' && 'bg-body'],
    [variant === 'contained' && color === 'transparent' && 'bg-transparent'],
    [variant === 'text' && `border-none`],
    [textColor === 'blue' && 'text-blue'],
    [textColor === 'blueEnd' && 'text-blueEnd'],
    [textColor === 'white' && 'text-white'],
    [textColor === 'body' && 'text-body'],
    Array.isArray(className) ? className : [className]
  )

  return (
    <>
      {isExternalLink && (
        <a
          href={href}
          onClick={onClick}
          target={target}
          rel={rel}
          className={styles}
        >
          {startIcon}

          {children}

          {endIcon}
        </a>
      )}

      {!isExternalLink && (
        <Link
          href={{ pathname: href }}
          onClick={onClick}
          target={target}
          rel={rel}
          className={styles}
        >
          {startIcon}

          {children}

          {endIcon}
        </Link>
      )}
    </>
  )
}
