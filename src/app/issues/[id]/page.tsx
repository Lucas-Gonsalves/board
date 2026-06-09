import { ArchiveIcon, MoveLeftIcon, ThumbsUpIcon } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/button'
import { getIssue } from '@/http/get-issue'

interface IssuePageProps {
  params: Promise<{ id: string }>
}

const generateMetadata = async ({ params }: IssuePageProps): Promise<Metadata> => {
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

        <Button type="button">
          <ThumbsUpIcon className="size-3" />
          <span className="text-sm">12</span>
        </Button>
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">{issue.title}</h1>
        <p className="text-navy-100 text-sm leading-relaxed">{issue.description}</p>
      </div>
    </main>
  )
}
