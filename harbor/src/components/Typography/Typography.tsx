import { ReactNode } from 'react'
import clsx, { ClassArray, ClassValue } from 'clsx'

type TypographyProps = {
  children: ReactNode
  color?: string
  textPosition?: string
  textSize?: string
  className?: ClassValue | ClassArray
}

const defaultColor = 'white'
const defaultSize = 'xl'
const defaultPosition = 'center'


export function Typography({ children, color = defaultColor, textPosition = defaultPosition, textSize = defaultSize, className }:TypographyProps) {
  const style = clsx (
    `text-${textSize}`,
    `text-${color}`,
    'max-w-screen-md',
    `text-${textPosition}`,
    Array.isArray(className) ? className : [className]
  )
  return (
    <p className={style}>
      {children}
    </p>

  )
}
