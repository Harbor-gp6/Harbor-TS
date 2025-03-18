import { ReactNode } from 'react'
import clsx, { ClassArray, ClassValue } from 'clsx'

type TypographyColors = 'white' | 'body' | 'primary' | 'black' | 'blueEnd' | 'warning'
type TypographySize = 'xl' | 'lg' | 'base' | 'sm' | 'xs'
type TypographyPosition = 'center' | 'left' | 'right'

type TypographyProps = {
  children: ReactNode
  color?: TypographyColors
  textPosition?: TypographyPosition
  textSize?: TypographySize
  className?: ClassValue | ClassArray
  fullWidth?: boolean
}

const defaultColor: TypographyColors = 'white'
const defaultSize: TypographySize = 'xl'
const defaultPosition: TypographyPosition = 'center'


export function Typography({ children, color = defaultColor, textPosition = defaultPosition, textSize = defaultSize, className, fullWidth = false }:TypographyProps) {
  const style = clsx (
    `text-${textSize}`,
    textSize  === 'base' && 'text-base',
    textSize  === 'sm' && 'text-sm',
    textSize  === 'xl' && 'text-xl',
    textSize  === 'xs' && 'text-xs',
    color === 'white' && 'text-white',
    color === 'body' && 'text-body',
    color === 'primary' && 'text-primary',
    color === 'black' && 'text-black',
    color === 'blueEnd' && 'text-blueEnd',
    color === 'warning' && 'text-warning',
    textPosition === 'center' && 'text-center',
    textPosition === 'left' && 'text-left',
    textPosition === 'right' && 'text-right',
    fullWidth ? 'w-full' : 'max-w-screen-md',
    Array.isArray(className) ? className : [className]
  )
  return (
    <p className={style}>
      {children}
    </p>

  )
}
