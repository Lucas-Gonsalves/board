import { Suspense } from 'react'

import { Header } from './header/header'

export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto flex h-dvh w-full max-w-405 flex-col gap-8 p-10">
      <Suspense fallback={<HeaderFallback />}>
        <Header />
      </Suspense>
      {children}
    </div>
  )
}

function HeaderFallback() {
  return (
    <header className="mx-auto flex w-full max-w-225 items-center justify-between">
      <div className="space-y-1">
        <div className="bg-navy-500 h-6 w-43 rounded" />
        <div className="bg-navy-600 h-5 w-79 rounded" />
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-navy-700 border-navy-500 h-10 w-67.5 rounded-md border" />
        <div className="bg-navy-700 border-navy-500 size-8 rounded-full border" />
      </div>
    </header>
  )
}
