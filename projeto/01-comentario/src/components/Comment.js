import React, { Component } from 'react';

class Comment extends Component {
    render(){
        return(
          <div>Comentário: { this.props.comment.comment }</div>
        )
    }
}

export default Comment;