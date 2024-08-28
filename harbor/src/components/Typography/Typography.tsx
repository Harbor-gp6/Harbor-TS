import { ReactNode } from 'react'
import clsx, { ClassArray, ClassValue } from 'clsx'

type TypographyColors = 'white' | 'body' | 'primary' | 'black' | 'warning'
type TypographySize = 'xl' | 'lg' | 'base' | 'sm' | 'xs'
type TypographyPosition = 'center' | 'left' | 'right'

type TypographyProps = {
  children: ReactNode
  color?: TypographyColors
  textPosition?: TypographyPosition
  textSize?: TypographySize
  className?: ClassValue | ClassArray
}

const defaultColor: TypographyColors = 'white'
const defaultSize: TypographySize = 'xl'
const defaultPosition: TypographyPosition = 'center'


export function Typography({ children, color = defaultColor, textPosition = defaultPosition, textSize = defaultSize, className }:TypographyProps) {
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
    color === 'black' && 'text-black',
    textPosition === 'center' && 'text-center',
    textPosition === 'left' && 'text-left',
    textPosition === 'right' && 'text-right',
    `text-body`,
    'max-w-screen-md',
    Array.isArray(className) ? className : [className]
  )
  return (
    <p className={style}>
      {children}
    </p>

  )
}
