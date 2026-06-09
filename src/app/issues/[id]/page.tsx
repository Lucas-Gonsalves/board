import { Metadata } from 'next'

import { getIssue } from '@/http/get-issue'

interface IssuePageProps {
  params: Promise<{ id: string }>
}

const generateMetadata = async ({ params }: IssuePageProps): Promise<Metadata> => {
  const { id } = await params

  const issue = await getIssue({ id })

  const metadataTitle = issue.title ? `Issue ${issue.title}` : 'Issue'

  return {
    title: metadataTitle,
  }
}

export default async function IssuePage({ params }: IssuePageProps) {
  const { id } = await params

  return <div>Issues</div>
}
