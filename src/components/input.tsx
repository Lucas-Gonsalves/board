import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends ComponentProps<'input'> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge(
        'bg-navy-900 border-navy-500 placeholder-navy-200 flex h-8 items-center rounded-lg border-[0.5px] px-4 text-sm',
        'focus-visible:ring-navy-400 focus-visible:ring-offset-navy-950 outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    />
  )
}
