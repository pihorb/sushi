import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { Router } from 'react-router'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import NavBar from './nav-bar'

afterEach(cleanup)

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return <Router history={history}>{component}</Router>
}

it('home page', () => {
  const { container, getByTestId } = render(renderWithRouter(<NavBar />))
  const navbar = getByTestId('navbar')
  const link = getByTestId('home-link')

  expect(container.innerHTML).toMatch('Home')
  expect(navbar).toContainElement(link)
})

it('menu page', () => {
  const { container, getByTestId } = render(renderWithRouter(<NavBar />))
  const navbar = getByTestId('navbar')
  const link = getByTestId('menu-link')

  expect(navbar).toContainElement(link)

  fireEvent.click(link)
  expect(container.innerHTML).toMatch('Menu')
})

it('delivery page', () => {
  const { container, getByTestId } = render(renderWithRouter(<NavBar />))
  const navbar = getByTestId('navbar')
  const link = getByTestId('delivery-link')

  expect(navbar).toContainElement(link)

  fireEvent.click(link)
  expect(container.innerHTML).toMatch('Delivery')
})

it('contact page', () => {
  const { container, getByTestId } = render(renderWithRouter(<NavBar />))
  const navbar = getByTestId('navbar')
  const link = getByTestId('contacts-link')

  expect(navbar).toContainElement(link)

  fireEvent.click(link)
  expect(container.innerHTML).toMatch('Contacts')
})

it('check links amount', () => {
  const { getAllByRole } = render(renderWithRouter(<NavBar />))
  const navItems = getAllByRole('listitem').length

  expect(navItems).toBe(4)
})

it('toggle class properly', () => {
  const { getByTestId } = render(renderWithRouter(<NavBar />))
  const btn = getByTestId('toggle-img')
  const list = getByTestId('list')

  expect(list).not.toHaveClass('open')

  fireEvent.click(btn)
  expect(list).toHaveClass('open')
})

it('snapshot', () => {
  const tree = renderer.create(renderWithRouter(<NavBar />)).toJSON()
  expect(tree).toMatchSnapshot()
})
