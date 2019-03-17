import React from 'react'

const Comment = ({c}) => {
  let comment = 'empty'

  if (c && c.comment)
  {
    comment = c.comment
  }

  return(
    <div>Comentário: { comment }</div>
  )
}

export default Comment