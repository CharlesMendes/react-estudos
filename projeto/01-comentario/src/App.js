import React, { Component } from 'react';
import Comments from './components/Comments';
import NewComment from './components/NewComment';

class App extends Component {
  state = {
    comments: [
      'Comment 1',
      'Comment 2',
      'Comment 3',
      'Comment 4'
    ]
  };
  
  sendComment = comment => {
    this.setState({
      //spreadOperator para manter os dados que ja existiam (adicionar item no vetor)
      comments: [...this.state.comments, comment] //o comentario é injetado pelo NewComment
    })
  };

  render() {
    return (
      <div>
        <NewComment sendComment={this.sendComment} />  
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
