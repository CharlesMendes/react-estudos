import React, { Component } from 'react';

class NewComment extends Component {
  state = {
    newComment: ''
  };

  handleChange = event => {
    this.setState({
      newComment: event.target.value
    })
  };

  sendComment = (comment) => {
    this.props.sendComment(this.state.newComment); //retorna para o "pai App.js"
    this.setState({
      newComment: ''
    })
  }

  render(){
      return(
        <div>
          <textarea value={this.state.newComment} onChange={this.handleChange}></textarea>
          <button onClick={this.sendComment}>Enviar</button>
          {
            //JSON.stringify(this.state)
            //this.state.newComment
          }
        </div>
      )
  }
}

export default NewComment;