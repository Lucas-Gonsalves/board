'use client'

import { Loader2Icon, LogInIcon } from 'lucide-react'
import Image from 'next/image'

import { authClient } from '@/lib/auth-client'

type User = typeof authClient.$Infer.Session.user

interface SignInButtonProps {
  handleSignIn: () => void
}

interface SignOutButtonProps {
  handleSignOut: () => void
  user: User
}

const LoadButton = () => {
  return (
    <div
      title="Cancel"
      className="bg-navy-700 border-navy-500 flex size-8 items-center justify-center rounded-full border"
    >
      <Loader2Icon className="text-navy-200 size-3.5 animate-spin" />
    </div>
  )
}

const SignInButton = ({ handleSignIn }: SignInButtonProps) => {
  return (
    <button
      type="button"
      title="Sign In"
      onClick={handleSignIn}
      className="bg-navy-700 border-navy-500 hover:bg-navy-600 flex size-8 cursor-pointer items-center justify-center rounded-full border transition-colors duration-150"
    >
      <LogInIcon className="text-navy-200 size-3.5" />
    </button>
  )
}

const SignOutButton = ({ handleSignOut, user }: SignOutButtonProps) => {
  return (
    <button
      type="button"
      title="Sign Out"
      onClick={handleSignOut}
      className="size-8 cursor-pointer overflow-hidden rounded-full"
    >
      <Image
        src={user.image ?? ''}
        width={32}
        height={32}
        alt={`${user.name} profile image`}
        className="size-8 rounded-full"
      />
    </button>
  )
}

export function AuthButton() {
  const { data: session, isPending } = authClient.useSession()

  async function handleSignIn() {
    await authClient.signIn.social({ provider: 'github', callbackURL: '/' })
  }

  async function handleSignOut() {
    await authClient.signOut()
  }

  if (isPending) return <LoadButton />

  if (session?.user) return <SignOutButton handleSignOut={handleSignOut} user={session.user} />

  return <SignInButton handleSignIn={handleSignIn} />
}
