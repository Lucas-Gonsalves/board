import { Header } from './header'

export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto flex h-dvh w-full max-w-405 flex-col gap-8 p-10">
      <Header />
      {children}
    </div>
  )
}
