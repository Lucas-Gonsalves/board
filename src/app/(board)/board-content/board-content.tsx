'use client'

import { useQuery } from '@tanstack/react-query'
import { ArchiveIcon, MessageCircleIcon } from 'lucide-react'
import { useMemo } from 'react'
import z from 'zod'

import { IssuesListResponseSchema } from '@/api/routes/list-issues'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { LikeButton } from '@/components/like-button'
import { Section } from '@/components/section'
import { getIssueInteractions } from '@/http/get-issue-interaction'

interface BoardContentProps {
  issues: z.infer<typeof IssuesListResponseSchema>
}

export default function BoardContent({ issues }: BoardContentProps) {
  const allIssuesIds = [
    ...issues.backlog.map((issue) => issue.id),
    ...issues.todo.map((issue) => issue.id),
    ...issues.in_progress.map((issue) => issue.id),
    ...issues.done.map((issue) => issue.id),
  ]

  const { data: interactionsData, isLoading: isLoadingInteraction } = useQuery({
    queryKey: ['issue-likes', allIssuesIds.sort().join(',')],
    queryFn: () => getIssueInteractions({ issueIds: allIssuesIds }),
  })

  const interactions = useMemo(() => {
    if (!interactionsData) return new Map<string, { isLiked: boolean; likesCount: number }>()

    return new Map<string, { isLiked: boolean; likesCount: number }>(
      interactionsData.interactions.map((interaction) => [
        interaction.issueId,
        {
          isLiked: interaction.isLiked,
          likesCount: interaction.likesCount,
        },
      ]),
    )
  }, [interactionsData])

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
            issues.backlog.map((issue) => {
              const interaction = interactions.get(issue.id)

              return (
                <Card.Root href={`/issues/${issue.id}`} key={`key_of_issue_backlog_#${issue.id}`}>
                  <Card.Header>
                    <Card.Number>ECO-{issue.issueNumber}</Card.Number>
                    <Card.Title>{issue.title}</Card.Title>
                  </Card.Header>
                  <Card.Footer>
                    <LikeButton
                      initialLikes={interaction?.likesCount ?? 0}
                      issueId={issue.id}
                      initialLiked={interaction?.isLiked ?? false}
                    />

                    <Button type="button">
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">{issue.comments}</span>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              )
            })
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
            issues.todo.map((issue) => {
              const interaction = interactions.get(issue.id)

              return (
                <Card.Root href={`/issues/${issue.id}`} key={`key_of_issue_todo_#${issue.id}`}>
                  <Card.Header>
                    <Card.Number>ECO-{issue.issueNumber}</Card.Number>
                    <Card.Title>{issue.title}</Card.Title>
                  </Card.Header>
                  <Card.Footer>
                    <LikeButton
                      initialLikes={interaction?.likesCount ?? 0}
                      issueId={issue.id}
                      initialLiked={interaction?.isLiked ?? false}
                    />
                    <Button type="button">
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">{issue.comments}</span>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              )
            })
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
            issues.in_progress.map((issue) => {
              const interaction = interactions.get(issue.id)

              return (
                <Card.Root
                  href={`/issues/${issue.id}`}
                  key={`key_of_issue_in_progress_#${issue.id}`}
                >
                  <Card.Header>
                    <Card.Number>ECO-{issue.issueNumber}</Card.Number>
                    <Card.Title>{issue.title}</Card.Title>
                  </Card.Header>
                  <Card.Footer>
                    <LikeButton
                      initialLikes={interaction?.likesCount ?? 0}
                      issueId={issue.id}
                      initialLiked={interaction?.isLiked ?? false}
                    />
                    <Button type="button">
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">{issue.comments}</span>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              )
            })
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
            issues.done.map((issue) => {
              const interaction = interactions.get(issue.id)

              return (
                <Card.Root href={`/issues/${issue.id}`} key={`key_of_issue_done_#${issue.id}`}>
                  <Card.Header>
                    <Card.Number>ECO-{issue.issueNumber}</Card.Number>
                    <Card.Title>{issue.title}</Card.Title>
                  </Card.Header>
                  <Card.Footer>
                    <LikeButton
                      initialLikes={interaction?.likesCount ?? 0}
                      issueId={issue.id}
                      initialLiked={interaction?.isLiked ?? false}
                    />
                    <Button type="button">
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">{issue.comments}</span>
                    </Button>
                  </Card.Footer>
                </Card.Root>
              )
            })
          )}
        </Section.Content>
      </Section.Root>
    </main>
  )
}
