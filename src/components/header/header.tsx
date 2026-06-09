import { AuthButton } from './auth-button'
import { SearchInput } from './search-input'

interface HeaderProps {
  children?: React.ReactNode
}

function Root({ children }: HeaderProps) {
  return (
    <header className="mx-auto flex w-full max-w-225 items-center justify-between">
      <div className="space-y-1">
        <h1 className="text-xl font-semibold">Product Roadmap</h1>
        <p className="text-navy-100 text-sm">
          Follow the development progress of our entire platform.
        </p>
      </div>

      <div className="flex items-center gap-4">{children}</div>
    </header>
  )
}

export const Header = {
  Root,
  AuthButton,
  SearchInput,
}
