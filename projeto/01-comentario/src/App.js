import React, { Component } from 'react';

class App extends Component {
  state = {
    comments: [
      'Comment 1',
      'Comment 2',
      'Comment 3',
      'Comment 4'
    ]
  }
  
  sendComment = () => {
    this.setState({
      //spreadOperator para manter os dados que ja existiam (adicionar item no vetor)
      comments: [...this.state.comments, 'Comentario novo']
    })
  }

  render() {
    return (
      <div>
        { /* NewComment */ }
        <div>
          <textarea></textarea>
          <button onClick={ this.sendComment }>Enviar</button>
        </div>
        { /* Comments */ }
        <div>
          { /* Comment */ }
          { this.state.comments.map( c => {
            return <div>{c}</div>
          })}
        </div>
      </div>
    );
  }
}

export default App;
