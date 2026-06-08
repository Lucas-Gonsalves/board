'use client'

import { Loader2Icon, LogInIcon, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import { debounce, parseAsString, useQueryState } from 'nuqs'
import { ChangeEvent } from 'react'

import { Input } from '@/components/input'
import { authClient } from '@/lib/auth-client'

export function Header() {
  const { data: session, isPending } = authClient.useSession()

  const [search, setSearch] = useQueryState('q', parseAsString.withDefault(''))

  function handleSearchUpdate(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value, {
      limitUrlUpdates: event.target.value !== '' ? debounce(500) : undefined,
    })
  }

  async function handleSignIn() {
    await authClient.signIn.social({ provider: 'github', callbackURL: '/' })
  }

  async function handleSignOut() {
    await authClient.signOut()
  }

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
          <Input
            type="text"
            placeholder="Search for features..."
            className="min-w-67.5 pl-8"
            value={search}
            onChange={handleSearchUpdate}
          />
        </div>

        {isPending ? (
          <div
            title="Cancel"
            className="bg-navy-700 border-navy-500 flex size-8 items-center justify-center rounded-full border"
          >
            <Loader2Icon className="text-navy-200 size-3.5 animate-spin" />
          </div>
        ) : session?.user ? (
          <button
            type="button"
            title="Sign Out"
            onClick={handleSignOut}
            className="size-8 cursor-pointer overflow-hidden rounded-full"
          >
            <Image
              src={session.user.image ?? ''}
              width={32}
              height={32}
              alt={`${session.user.name} profile image`}
              className="size-8 rounded-full"
            />
          </button>
        ) : (
          <button
            type="button"
            title="Sign In"
            onClick={handleSignIn}
            className="bg-navy-700 border-navy-500 hover:bg-navy-600 flex size-8 cursor-pointer items-center justify-center rounded-full border transition-colors duration-150"
          >
            <LogInIcon className="text-navy-200 size-3.5" />
          </button>
        )}
      </div>
    </header>
  )
}
