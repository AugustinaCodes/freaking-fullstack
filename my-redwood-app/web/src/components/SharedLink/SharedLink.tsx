interface LinkProps {
  title: string
  points: number
  username: string
  commentCount: number
  link: string
}

const SharedLink = ({ title, points, username, commentCount, link }: LinkProps) => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col">
        <button>VOTE UP</button>
        <button>VOTE DOWN</button>
      </div>
      <div className="flex-1">
        <h2>{title}</h2>
        <p>
          <span data-testid="point">{points}</span>
          points by submitted by {username} {commentCount} comments
        </p>
      </div>
    </div>
  )
}

export default SharedLink
