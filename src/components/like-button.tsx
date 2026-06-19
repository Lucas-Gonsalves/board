import { ThumbsUpIcon } from 'lucide-react'
import { ComponentProps } from 'react'

import { Button } from './button'

interface LikeButtonProps extends ComponentProps<'button'> {
  issueId: string
  initialLikes: number
  initialLiked?: boolean
}

export default function LikeButton({
  issueId,
  initialLikes,
  initialLiked = false,
}: LikeButtonProps) {
  const liked = initialLiked

  return (
    <Button
      data-liked={liked}
      className="data-[liked=true]:bg-indigo-600 data-[liked=true]:text-white data-[liked=true]:hover:bg-indigo-500"
      aria-label={liked ? 'Unlike' : 'Like'}
      type="button"
    >
      <ThumbsUpIcon className="size-3" />
      <span className="text-sm">{initialLikes}</span>
    </Button>
  )
}
