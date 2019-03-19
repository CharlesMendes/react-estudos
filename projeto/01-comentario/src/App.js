import React, { Component } from 'react'
import Comments from './components/Comments'
import NewComment from './components/NewComment'

class App extends Component {
  state = {
    comments: {},
    isLoading: false
  }
  
  sendComment = comment => {
    const { database } = this.props //usando o item database do this.props que veio do index.js
    
    const id = database.ref().child('comments').push().key
    //console.log(id)
    const comments = {}

    comments['comments/'+id] = { 
      comment 
    } //cria um novo objeto com um novo id no firebase
    
    database.ref().update(comments)
  }

  componentDidMount(){
    const { database } = this.props //usando o item database do this.props que veio do index.js

    this.setState({ isLoading: true })
    this.comments = database.ref('comments')
    this.comments.on('value', snapshot => {
      //console.log(snapshot.val())
      //console.log('passou aqui o teste')
      this.setState({ 
        comments: snapshot.val(),
        isLoading: false
      })
    })
  }

  render() {
    return (
      <div>
        <NewComment sendComment={this.sendComment} />  
        <Comments comments={this.state.comments} />
        {
          this.state.isLoading && <p>Carregando...</p>
        }
      </div>
    )
  }
}

export default App
