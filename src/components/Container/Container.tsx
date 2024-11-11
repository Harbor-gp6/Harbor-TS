import clsx, { ClassArray, ClassValue } from 'clsx'
import { ReactNode } from 'react'

type ContainerWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

type ContainerProps = {
  children: ReactNode
  maxWidth?: ContainerWidth
  padding?: string
  className?: ClassValue | ClassArray
}

const defaultPadding = 'px-4'
const defaultWidth: ContainerWidth = 'xl'

export function Container ({children, className, maxWidth = defaultWidth, padding = defaultPadding}: ContainerProps) {
  return (
    <div
      className={clsx(
        'container',
        'mx-auto',
        padding,
        // https://tailwindcss.com/docs/max-width#constraining-to-your-breakpoints
        {
          'max-w-screen-sm': maxWidth === 'sm',
          'max-w-screen-md': maxWidth === 'md',
          'max-w-screen-lg': maxWidth === 'lg',
          'max-w-screen-xl': maxWidth === 'xl',
          'max-w-screen-2xl': maxWidth === '2xl'
        },
        ...(Array.isArray(className) ? className : [className])
      )}
    >
      {children}
    </div>
  )
}

