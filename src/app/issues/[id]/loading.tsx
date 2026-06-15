import { MoveLeftIcon } from 'lucide-react'
import Link from 'next/link'

import { Skeleton } from '@/components/skeleton'

export default function IssueLoading() {
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
        <Skeleton className="h-7 w-24" />
        <Skeleton className="h-7 w-16" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-8 w-2/3" />

        <div className="space-y-1.5">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/5" />
        </div>
      </div>
    </main>
  )
}
