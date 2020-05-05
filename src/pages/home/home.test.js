import React from 'react'
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import Main from './main'

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return <Router history={history}>{component}</Router>
}

it('snapshot', () => {
  const tree = renderer.create(renderWithRouter(<Main />)).toJSON()
  expect(tree).toMatchSnapshot()
})
