import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { Router } from 'react-router'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import { createMemoryHistory } from 'history'
import LinkBox from './link-box'

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return <Router history={history}>{component}</Router>
}

beforeEach(cleanup)

it('check if link exist', () => {
  const { getByTestId } = render(
    renderWithRouter(<LinkBox name='rolls' link='sushi' />)
  )
  const box = getByTestId('link-container')
  const link = getByTestId('link')

  expect(box).toContainElement(link)
})

it('check props rendering', () => {
  const { queryByTestId, getByText, debug } = render(
    renderWithRouter(
      <LinkBox
        name='rolls'
        link='sushi'
        title='rolls'
        subtitle='very good'
        desc='you can eat it every day'
      />
    )
  )

  const title = queryByTestId('link')
  const subtitle = queryByTestId('link-container')
  const description = getByText('you can eat it every day')
  const info = queryByTestId('container-info')

  expect(title).toHaveTextContent('rolls')
  expect(subtitle).toHaveTextContent('very good')
  expect(description).toBeTruthy()
  expect(info).toHaveClass('extra-height')
})

it('snapshot', () => {
  const tree = renderer
    .create(renderWithRouter(<LinkBox link='sushi' />))
    .toJSON()
  expect(tree).toMatchSnapshot()
})
