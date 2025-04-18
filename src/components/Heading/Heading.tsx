import clsx, { ClassArray, ClassValue } from 'clsx'
import React, { ReactNode } from 'react'

type HeadingSizes = 1 | 2 | 3 | 4 | 5 | 6


type HeadingProps = {
  size?: HeadingSizes
  color?: 'primary' | 'secondary' | 'white' | 'blue' | 'blueEnd'
  noGutters?: boolean
  children?: ReactNode
  className?: ClassValue | ClassArray
}

export function Heading({
  size = 1,
  color = 'white',
  noGutters,
  children,
  className
}: HeadingProps) {

  const styles = clsx(
    'font-semibold',
    'font-sans',
    'max-w-screen-lg',
    [color === 'primary' && 'text-primary'],
    [color === 'secondary' && 'text-secondary'],
    [color === 'white' && 'text-white'],
    [color === 'blue' && 'text-blue'],
    [color === 'blueEnd' && 'text-blueEnd'],
    !noGutters && 'pb-4',
    {
      'text-6xl': size === 1,
      'text-5xl': size === 2,
      'text-4xl': size === 3,
      'text-3xl': size === 4,
      'text-2xl': size === 5,
      'text-xl': size === 6
    },
    ...(Array.isArray(className) ? className : [className])
  )


  return (
    <p className={styles}>
      {children}
    </p>
  )
}
