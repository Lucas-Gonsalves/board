import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from 'lucide-react'

import { Card } from '@/components/card'
import { Section } from '@/components/sections'

export default function Home() {
  return (
    <div className="mx-auto flex h-dvh w-full max-w-405 flex-col gap-8 p-10">
      <div></div>

      <main className="grid flex-1 grid-cols-4 items-stretch gap-5">
        <Section.Root>
          <Section.Header>
            <Section.Title>
              <ArchiveIcon className="size-3" />
              Backlog
            </Section.Title>

            <Section.IssueCount>16</Section.IssueCount>
          </Section.Header>

          <Section.Content>
            <Card.Root href="/">
              <Card.Header>
                <Card.Number>ECO-001</Card.Number>
                <Card.Title>Add credit card</Card.Title>
              </Card.Header>
              <Card.Footer>
                <button
                  type="button"
                  className="text-navy-100 bg-navy-600 flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1"
                >
                  <ThumbsUpIcon className="size-3" />
                  <span className="text-sm">12</span>
                </button>

                <button
                  type="button"
                  className="text-navy-100 bg-navy-600 flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1"
                >
                  <MessageCircleIcon className="size-3" />
                  <span className="text-sm">12</span>
                </button>
              </Card.Footer>
            </Card.Root>
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  )
}
