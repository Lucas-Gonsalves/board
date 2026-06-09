import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from 'lucide-react'
import { Metadata } from 'next'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Section } from '@/components/section'
import { listIssues } from '@/http/list-issues'

interface BoardProps {
  searchParams: Promise<{ q?: string }>
}

export const metadata: Metadata = {
  title: 'Board',
}

export default async function Board({ searchParams }: BoardProps) {
  const { q } = await searchParams

  const issues = await listIssues({
    search: q,
  })

  const issueBacklogLenght = issues.backlog.length
  const issueTodoLenght = issues.todo.length
  const issueInProgressLenght = issues.in_progress.length
  const issueDoneLenght = issues.done.length

  return (
    <main className="grid flex-1 grid-cols-4 items-stretch gap-5">
      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Backlog
          </Section.Title>

          <Section.IssueCount>{issueBacklogLenght}</Section.IssueCount>
        </Section.Header>

        <Section.Content>
          {issueBacklogLenght === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="text-navy-300 text-sm">No issues matching your filters</p>
            </div>
          ) : (
            issues.backlog.map((issue) => (
              <Card.Root href={`/issues/${issue.id}`} key={`key_of_issue_backlog_#${issue.id}`}>
                <Card.Header>
                  <Card.Number>ECO-{issue.issueNumber}</Card.Number>
                  <Card.Title>{issue.title}</Card.Title>
                </Card.Header>
                <Card.Footer>
                  <Button type="button">
                    <ThumbsUpIcon className="size-3" />
                    <span className="text-sm">12</span>
                  </Button>

                  <Button type="button">
                    <MessageCircleIcon className="size-3" />
                    <span className="text-sm">12</span>
                  </Button>
                </Card.Footer>
              </Card.Root>
            ))
          )}
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            To-do
          </Section.Title>

          <Section.IssueCount>{issueTodoLenght}</Section.IssueCount>
        </Section.Header>

        <Section.Content>
          {issueTodoLenght === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="text-navy-300 text-sm">No issues matching your filters</p>
            </div>
          ) : (
            issues.todo.map((issue) => (
              <Card.Root href={`/issues/${issue.id}`} key={`key_of_issue_todo_#${issue.id}`}>
                <Card.Header>
                  <Card.Number>ECO-{issue.issueNumber}</Card.Number>
                  <Card.Title>{issue.title}</Card.Title>
                </Card.Header>
                <Card.Footer>
                  <Button type="button">
                    <ThumbsUpIcon className="size-3" />
                    <span className="text-sm">12</span>
                  </Button>

                  <Button type="button">
                    <MessageCircleIcon className="size-3" />
                    <span className="text-sm">12</span>
                  </Button>
                </Card.Footer>
              </Card.Root>
            ))
          )}
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            In Progress
          </Section.Title>

          <Section.IssueCount>{issueInProgressLenght}</Section.IssueCount>
        </Section.Header>

        <Section.Content>
          {issueInProgressLenght === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="text-navy-300 text-sm">No issues matching your filters</p>
            </div>
          ) : (
            issues.in_progress.map((issue) => (
              <Card.Root href={`/issues/${issue.id}`} key={`key_of_issue_in_progress_#${issue.id}`}>
                <Card.Header>
                  <Card.Number>ECO-{issue.issueNumber}</Card.Number>
                  <Card.Title>{issue.title}</Card.Title>
                </Card.Header>
                <Card.Footer>
                  <Button type="button">
                    <ThumbsUpIcon className="size-3" />
                    <span className="text-sm">12</span>
                  </Button>

                  <Button type="button">
                    <MessageCircleIcon className="size-3" />
                    <span className="text-sm">12</span>
                  </Button>
                </Card.Footer>
              </Card.Root>
            ))
          )}
        </Section.Content>
      </Section.Root>

      <Section.Root>
        <Section.Header>
          <Section.Title>
            <ArchiveIcon className="size-3" />
            Done
          </Section.Title>

          <Section.IssueCount>{issueDoneLenght}</Section.IssueCount>
        </Section.Header>

        <Section.Content>
          {issueDoneLenght === 0 ? (
            <div className="flex items-center justify-center py-8 text-center">
              <p className="text-navy-300 text-sm">No issues matching your filters</p>
            </div>
          ) : (
            issues.done.map((issue) => (
              <Card.Root href={`/issues/${issue.id}`} key={`key_of_issue_done_#${issue.id}`}>
                <Card.Header>
                  <Card.Number>ECO-{issue.issueNumber}</Card.Number>
                  <Card.Title>{issue.title}</Card.Title>
                </Card.Header>
                <Card.Footer>
                  <Button type="button">
                    <ThumbsUpIcon className="size-3" />
                    <span className="text-sm">12</span>
                  </Button>

                  <Button type="button">
                    <MessageCircleIcon className="size-3" />
                    <span className="text-sm">12</span>
                  </Button>
                </Card.Footer>
              </Card.Root>
            ))
          )}
        </Section.Content>
      </Section.Root>
    </main>
  )
}
