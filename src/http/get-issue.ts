import { IssueSchema } from '@/api/routes/get-issue'
import { clientEnv } from '@/env'

interface getIssueParams {
  id: string
}

export async function getIssue({ id }: getIssueParams) {
  const url = new URL(`api/issues${id}`, clientEnv.NEXT_PUBLIC_API_URL)

  const response = await fetch(url)
  const data = await response.json()

  return IssueSchema.parse(data)
}
