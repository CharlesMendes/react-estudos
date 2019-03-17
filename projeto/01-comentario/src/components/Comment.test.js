import React from 'react'
import Comment from './Comment'
import { render } from 'enzyme'

it('should render', () => {
  const commentTest ={
    comment: 'teste'
  }

  const wrapper = render(<Comment c={commentTest} />)
  expect(wrapper.text()).toBe('Comentário: teste')

  //console.log(wrapper.text())
})

it('should render other text', () => {
  const commentTest ={
    comment: 'outro teste'
  }

  const wrapper = render(<Comment c={commentTest} />)
  expect(wrapper.text()).toBe('Comentário: outro teste')
})

it('should render empty text', () => {
  const commentTest ={
    comment: ''
  }

  const wrapper = render(<Comment c={commentTest} />)
  expect(wrapper.text()).toBe('Comentário: empty')
})