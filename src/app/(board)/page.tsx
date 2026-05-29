import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from 'lucide-react'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Section } from '@/components/sections'

export default function Home() {
  return (
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
        </Section.Content>
      </Section.Root>
    </main>
  )
}
