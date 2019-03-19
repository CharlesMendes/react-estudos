import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import Comments from './components/Comments'
import NewComment from './components/NewComment'
import { EventEmitter } from 'events'

describe('<App />', () => {
  //verifica a estrutura quando carrega a pagina default
  it('renders without crashing', () => {
    const database = {
      ref: jest.fn()
    }

    database.ref.mockReturnValue({
      on: jest.fn()
    })

    const wrapper = shallow(<App database={database} />)
    //console.log(wrapper.text())
    expect(wrapper.find(Comments).length).toBe(1)
    expect(wrapper.find(NewComment).length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)
  })

  //verifica a estrutura a adicionar um comentario novo
  it('adds a new comment', () => {
    const database = {
      ref: jest.fn()
    }

    const child = jest.fn()
    const update = jest.fn()

    database.ref.mockReturnValue({
      on: jest.fn(),
      child,
      update
    })

    const push = jest.fn()
    child.mockReturnValue({
      push
    })

    push.mockReturnValue({
      key: '1'
    })

    const wrapper = shallow(<App database={database} />)
    wrapper.instance().sendComment('new comment')

    //console.log(child.mock.calls)
    expect(child).toBeCalledWith('comments')
    
    //console.log(update.mock.calls)
    expect(update).toBeCalledWith({
      'comments/1': { 
        comment: 'new comment' 
      }
    })
  })

  //teste do componentDidMount com o retorno dos comentarios do firebase
  it('renders comments from firebase', () => {
    const database = {
      ref: jest.fn()
    }

    const eventEmitter = new EventEmitter()
    database.ref.mockReturnValue(eventEmitter)

    const wrapper = shallow(<App database={database} />)

    //nao recebeu comments, nao chegou 'value'
    //console.log(wrapper.text())
    expect(wrapper.find(Comments).length).toBe(1)
    expect(wrapper.find(NewComment).length).toBe(1)
    expect(wrapper.find('p').length).toBe(1)

    //recebendo comments, 'value' preenchido
    const comments = {
      a: { comment: 'comentario 1'},
      b: { comment: 'comentario 2'},
      c: { comment: 'comentario 3'}
    }

    const val = jest.fn()
    val.mockReturnValue(comments)
    eventEmitter.emit('value', {
      val
    })

    //atualiza o estado do wrapper
    wrapper.update()

    // realiza o teste novamente
    //console.log(wrapper.state())
    expect(wrapper.state().isLoading).toBeFalsy()
    expect(wrapper.state().comments).toBe(comments)

    //console.log(wrapper.find(Comments).text())
    expect(wrapper.find(Comments).get(0).props.comments).toBe(comments)
    
    expect(wrapper.find(NewComment).get(0).props.sendComment).toBe(wrapper.instance().sendComment)

    //nao localiza o 'p'
    expect(wrapper.find('p').length).toBe(0)
  })
})
