import { ArchiveIcon, MessageCirclePlusIcon, MoveLeftIcon } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'

import { Input } from '@/components/input'
import { Skeleton } from '@/components/skeleton'
import { getIssue } from '@/http/get-issue'

import { IssueCommentsList, IssueCommentsListSkeleton } from './issue-comments-list'
import { IssueLikeButton } from './issue-like-button/issue-like-button'

interface IssuePageProps {
  params: Promise<{ id: string }>
}

const _generateMetadata = async ({ params }: IssuePageProps): Promise<Metadata> => {
  const { id } = await params

  const issue = await getIssue({ id })

  const metadataTitle = issue.title ? `Issue ${issue.title}` : 'Issue'

  return {
    title: metadataTitle,
  }
}

export default async function IssuePage({ params }: IssuePageProps) {
  const { id } = await params

  const issue = await getIssue({ id })

  const statusLabels = {
    backlog: 'Backlog',
    todo: 'To do',
    in_progress: 'In Progress',
    done: 'Done',
  } as const

  return (
    <main className="bg-navy-800 border-navy-500 mx-auto flex w-full max-w-225 flex-col gap-4 rounded-xl border-[0.5px] p-6">
      <Link
        href="/"
        className="text-navy-200 hover:text-navy-100 flex max-w-fit items-center gap-2"
      >
        <MoveLeftIcon className="size-4" />
        <span className="text-xs">Back to board</span>
      </Link>

      <div className="flex items-center gap-2">
        <span className="bg-navy-700 flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs">
          <ArchiveIcon className="size-3" />
          {statusLabels[issue.status]}
        </span>

        <Suspense fallback={<Skeleton className="h-7 w-16" />}>
          <IssueLikeButton issueId={id} />
        </Suspense>
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">{issue.title}</h1>
        <p className="text-navy-100 text-sm leading-relaxed">{issue.description}</p>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-semibold">Comments</span>

        <form className="relative w-full">
          <Input className="bg-navy-700 h-9 w-full pr-24" placeholder="Leave a comment..." />
          <button
            type="submit"
            className="absolute top-1/2 right-3 flex -translate-y-1/2 cursor-pointer items-center gap-2 text-xs text-indigo-400 hover:text-indigo-300 disabled:opacity-50"
          >
            Publish
            <MessageCirclePlusIcon className="size-3" />
          </button>
        </form>

        <div className="mt-3">
          <Suspense fallback={<IssueCommentsListSkeleton />}>
            <IssueCommentsList issueId={issue.id} />
          </Suspense>
        </div>
      </div>
    </main>
  )
}
