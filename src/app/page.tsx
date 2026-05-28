import { ArchiveIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="mx-auto flex h-dvh w-full max-w-405 flex-col gap-8 p-10">
      <header></header>

      <main className="grid flex-1 grid-cols-4 items-stretch gap-5">
        <div className="bg-navy-800 border-navy-500 flex flex-col gap-1 rounded-xl border-[0.5] pt-3">
          <div className="flex items-center justify-between px-3">
            <span className="bg-navy-700 flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs">
              <ArchiveIcon className="size-3" />
              Backlog
            </span>

            <span className="text-navy-200 text-xs">16</span>
          </div>

          <div className="flex flex-col gap-2.5 overflow-y-scroll p-3">
            <div>Card 1</div>
            <div>Card 2</div>
            <div>Card 3</div>
          </div>
        </div>
      </main>
    </div>
  )
}
