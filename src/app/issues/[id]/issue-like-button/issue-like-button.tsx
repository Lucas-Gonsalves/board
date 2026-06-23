'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { LikeButton } from '@/components/like-button'
import { Skeleton } from '@/components/skeleton'
import { getIssueInteractions } from '@/http/get-issue-interaction'

interface IssueLikeButtonProps {
  issueId: string
}

export function IssueLikeButton({ issueId }: IssueLikeButtonProps) {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ['issue-likes', issueId],
    queryFn: () => getIssueInteractions({ issueIds: [issueId] }),
  })

  const interaction = data?.interactions[0]

  if (isLoading) {
    return <Skeleton className="h7 w-16" />
  }

  return (
    <LikeButton
      issueId={issueId}
      initialLikes={interaction?.likesCount ?? 0}
      initialLiked={interaction?.isLiked ?? false}
    />
  )
}
