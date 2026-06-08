'use client'

import { SearchIcon } from 'lucide-react'
import { debounce, parseAsString, useQueryState } from 'nuqs'
import { ChangeEvent, ComponentProps } from 'react'

import { Input } from '@/components/input'

interface SearchInputProps extends ComponentProps<'input'> {}

export function SearchInput({ ...props }: SearchInputProps) {
  const [search, setSearch] = useQueryState('q', parseAsString.withDefault(''))

  function handleSearchUpdate(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value, {
      limitUrlUpdates: event.target.value !== '' ? debounce(500) : undefined,
    })
  }

  return (
    <div className="relative">
      <SearchIcon className="text-navy-200 pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
      <Input
        type="text"
        placeholder="Search for features..."
        className="min-w-67.5 pl-8"
        value={search}
        onChange={handleSearchUpdate}
        {...props}
      />
    </div>
  )
}
