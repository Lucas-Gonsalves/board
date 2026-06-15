import { formatDistanceToNow } from 'date-fns'

import { Comment } from '@/components/comment'
import { listIssuesComments } from '@/http/list-issue-comments'

interface IssueCommentsListProps {
  issueId: string
}

export async function IssueCommentsList({ issueId }: IssueCommentsListProps) {
  const { comments } = await listIssuesComments({ issueId })

  const commentsExists = comments.length > 0

  if (!commentsExists)
    return <p className="text-navy-400 p-2 text-center text-sm">No comments yet</p>

  return (
    <div className="space-y-3">
      {comments.map((comment) => (
        <Comment.Root key={`key_of_comment_#${comment.id}`}>
          <Comment.Avatar
            src={comment.author.avatar}
            alt={`${comment.author.name} profile image`}
          />

          <Comment.Content>
            <Comment.Header>
              <Comment.Author>{comment.author.name}</Comment.Author>
              <Comment.Time>
                {formatDistanceToNow(comment.createdAt, { addSuffix: true })}
              </Comment.Time>
            </Comment.Header>

            <Comment.Text>{comment.text}</Comment.Text>
          </Comment.Content>
        </Comment.Root>
      ))}
    </div>
  )
}
