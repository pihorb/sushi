import React, { useState, useEffect } from 'react'
import './nav-bar.sass'
import { Link } from 'react-router-dom'
import logo from '../../images/icons/logo-min.png'
import menu_logo from '../../images/icons/hamburger.png'
import classNames from 'classnames'
import MenuNav from '../menu-nav/menu-nav'

function NavBar() {
  const [menuOpened, setMenu] = useState(false)
  const [subMenuOpened, setSubMenu] = useState(false)

  const closeMenuAndSubMenu = () => {
    setMenu(!menuOpened)
    setSubMenu(false)
  }

  const trackScroll = () => {
    const scrollPos = window.scrollY
    const nav = document.querySelector('.nav')
    const addClassPos = 700
    return scrollPos > addClassPos
      ? nav.classList.add('not-on-top')
      : nav.classList.remove('not-on-top')
  }

  const addEventListeners = (link, openMenu) => {
    window.addEventListener('scroll', trackScroll, true)
    link.addEventListener('mouseenter', () => setSubMenu(true))

    if (openMenu) openMenu.addEventListener('mouseleave', () => setMenu(false))
    if (window.orientation === undefined) {
      link.addEventListener('mouseleave', () => setSubMenu(false))
    }
  }

  const removeEventListeners = (link) => {
    link.removeEventListener('mouseleave', setSubMenu, true)
    link.removeEventListener('mouseenter', setSubMenu, true)
    window.removeEventListener('scroll', trackScroll, true)
  }

  useEffect(() => {
    const link = document.querySelector('.menu-link')
    const openMenu = document.querySelector('.open')

    addEventListeners(link, openMenu)
    return () => removeEventListeners(link)
  })

  const menuList = classNames({
    nav__list: true,
    open: menuOpened,
  })

  return (
    <div className='nav' data-testid='navbar'>
      <div className='nav__container'>
        <img className='nav__img' src={logo} alt='logo' />
        <ul className={menuList} data-testid='list'>
          <li
            className='nav__item'
            data-testid='home-link'
            onClick={() => closeMenuAndSubMenu()}
          >
            <Link className='nav__link' to='/'>
              Home
            </Link>
          </li>
          <li className='nav__item menu-link' data-testid='menu-link'>
            <Link className='nav__link' to='#'>
              Menu
            </Link>
            {subMenuOpened && <MenuNav closeMenu={closeMenuAndSubMenu} />}
          </li>
          <li
            className='nav__item'
            data-testid='delivery-link'
            onClick={() => closeMenuAndSubMenu()}
          >
            <Link className='nav__link' to='/delivery'>
              Delivery
            </Link>
          </li>
          <li
            className='nav__item'
            data-testid='contacts-link'
            onClick={() => closeMenuAndSubMenu()}
          >
            <Link className='nav__link' to='/contacts'>
              Contacts
            </Link>
          </li>
        </ul>
        <img
          data-testid='toggle-img'
          onClick={() => closeMenuAndSubMenu()}
          className='nav__img menu-img'
          src={menu_logo}
          alt='logo'
        />
      </div>
    </div>
  )
}

export default NavBar
