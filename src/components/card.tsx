import Link from 'next/link'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type CardRootProps = ComponentProps<typeof Link>
interface CardHeaderProps extends ComponentProps<'div'> {}
interface CardTitleProps extends ComponentProps<'span'> {}
interface CardNumberProps extends ComponentProps<'div'> {}
interface CardFooterProps extends ComponentProps<'div'> {}

function CardRoot({ className, ...props }: CardRootProps) {
  return (
    <Link
      className={twMerge(
        'bg-navy-700 border-navy-600 block space-y-4 rounded-lg border-[0.5px] p-3',
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={twMerge('flex flex-col gap-2', className)} {...props} />
}

function CardTitle({ className, ...props }: CardTitleProps) {
  return <span className={twMerge('text-sm font-medium', className)} {...props} />
}

function CardNumber({ className, ...props }: CardNumberProps) {
  return <span className={twMerge('text-navy-200 text-xs', className)} {...props} />
}

function CardFooter({ className, ...props }: CardFooterProps) {
  return <div className={twMerge('flex items-center gap-2', className)} {...props} />
}

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Number: CardNumber,
  Footer: CardFooter,
}
