import { AuthButton } from './auth-button'
import { SearchInput } from './search-input'

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
        <SearchInput />
        <AuthButton />
      </div>
    </header>
  )
}
