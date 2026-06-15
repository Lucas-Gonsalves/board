import Image from 'next/image'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type CommentRootProps = ComponentProps<'div'>

interface CommentHeaderProps extends ComponentProps<'div'> {}
interface CommentAvatarProps extends ComponentProps<typeof Image> {}
interface CommentContentProps extends ComponentProps<'div'> {}
interface CommentAuthorProps extends ComponentProps<'span'> {}
interface CommentTimeProps extends ComponentProps<'span'> {}
interface CommentTextProps extends ComponentProps<'span'> {}

function CommentRoot({ className, ...props }: CommentRootProps) {
  return <div className={twMerge('flex items-start gap-2', className)} {...props} />
}

function CommentHeader({ className, ...props }: CommentHeaderProps) {
  return <div className={twMerge('flex items-baseline gap-1', className)} {...props} />
}

function CommentAvatar({ src, alt, className, ...props }: CommentAvatarProps) {
  return (
    <Image
      width={32}
      height={32}
      src={src}
      alt={alt}
      className={twMerge('size-8 rounded-full', className)}
      {...props}
    />
  )
}

function CommentContent({ className, ...props }: CommentContentProps) {
  return (
    <div
      className={twMerge(
        'bg-navy-700 border-navy-600 flex flex-1 flex-col gap-1 rounded-lg border-[0.5] px-3 py-2.5',
        className,
      )}
      {...props}
    />
  )
}

function CommentAuthor({ className, ...props }: CommentAuthorProps) {
  return <span className={twMerge('text-sm font-medium', className)} {...props} />
}

function CommentTime({ className, ...props }: CommentTimeProps) {
  return <span className={twMerge('text-navy-200 text-xs', className)} {...props} />
}

function CommentText({ className, ...props }: CommentTextProps) {
  return <span className={twMerge('text-navy-100 text-sm leading-relaxed', className)} {...props} />
}

export const Comment = {
  Root: CommentRoot,
  Header: CommentHeader,
  Avatar: CommentAvatar,
  Content: CommentContent,
  Author: CommentAuthor,
  Time: CommentTime,
  Text: CommentText,
}
