import { ReactNode } from 'react'
import clsx, { ClassArray, ClassValue } from 'clsx'
import Link from 'next/link'
import { blue } from 'tailwindcss/colors'

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
  color?: string
  textColor?: string
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
    textColor,
    rounded = 'full'
  } = props

  const isExternalLink = href?.startsWith('http') || href?.startsWith('https')

  const styles = clsx(
    'flex',
    'items-center',
    'px-4',
    'py-2',
    rounded && `rounded-${rounded}`,
    [variant === 'outlined' && `border border-2 bg-transparent border-${color} text-${textColor ? textColor : color}`],
    [variant === 'contained' && `bg-${color} text-${textColor ? textColor : 'white'}`],
    [variant === 'text' && `text-${color ? color : textColor} border-none`],
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
