import React from 'react'
import { shallow } from 'enzyme'
import NewComment from './NewComment'

describe('<NewComment />', () => {
  //vamos testar se o handle change esta funcionando corretamente
  it('should handle changes in textarea', () => {
    const wrapper = shallow(<NewComment />)

    //verificar se o componente esta funcionando corretamente
    const event = {
      target: { value: 'test' }
    }

    //verificar o que acontece quando dispara o change, checar a mudança do valor de um novo comentario
    wrapper.find('textarea').simulate('change', event)
    //console.log(wrapper.state())
    expect(wrapper.state().newComment).toBe('test')
  })

  //vamos testar se o botao enviar esta funcionando corretamente, com mock, sem de fato precisar testar o firebase
  it('should call sendComment on button click', () => {
    //cria uma funçao falsa/mock
    const sendCommentMock = jest.fn()
    const wrapper = shallow(<NewComment sendComment={sendCommentMock} />)

    //verificar se o componente esta funcionando corretamente
    const event = {
      target: { value: 'test' }
    }

    //verificar o que acontece quando dispara o onClick, checar a mudança do valor de um novo comentario
    wrapper.find('textarea').simulate('change', event)
    wrapper.find('button').simulate('click')
    //console.log(sendCommentMock.mock.calls)
    expect(sendCommentMock).toBeCalledWith('test')

    //verifica se houve a alteracao de estado apos o click
    expect(wrapper.state().newComment).toBe('')
  })
})