import { ArchiveIcon } from 'lucide-react'

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
            <div>card 1</div>
            <div>card 2</div>
            <div>card 3</div>
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  )
}
