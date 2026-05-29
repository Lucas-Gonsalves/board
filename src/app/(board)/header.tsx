import { LogInIcon, SearchIcon } from 'lucide-react'

import { Input } from '@/components/input'

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-225 items-center justify-between">
      <div className="space-y-1">
        <h1 className="text-xl font-semibold">Product Roadmap</h1>
        <p className="text-navy-100 text-sm">
          Follow the development progress of our entire platform.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <SearchIcon className="text-navy-200 pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
          <Input type="text" placeholder="Seach for features..." className="min-w-67.5 pl-8" />
        </div>

        <button
          type="button"
          className="bg-navy-700 border-navy-500 hover:bg-navy-600 flex size-8 cursor-pointer items-center justify-center rounded-full border transition-colors duration-150"
        >
          <LogInIcon className="text-navy-200 size-3.5" />
        </button>
      </div>
    </header>
  )
}
