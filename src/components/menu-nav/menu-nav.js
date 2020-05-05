import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './menu-nav.sass'

function MenuNav({ closeMenu }) {
  const mobile = 420
  const smallTbalet = 800
  const bigTablet = 835

  const [interval, updateInterval] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)
  const [componentWidth, changeComponentWidth] = useState(0)
  const [resetComponentWidth, changeResetComponentWidth] = useState(0)

  const carousel = () => {
    const container = document.querySelector('.menu-nav__list')
    if (screenWidth <= bigTablet) {
      interval === resetComponentWidth
        ? updateInterval(0)
        : updateInterval(interval + componentWidth)
      container.style.transform = `translate3d(${-interval}rem, 0, 0)`
    }
  }

  useEffect(() => {
    setScreenWidth(window.screen.width)
    const setSliderSettings = () => {
      if (screenWidth <= mobile) {
        changeResetComponentWidth(205)
        changeComponentWidth(41)
      } else if (screenWidth <= smallTbalet) {
        changeResetComponentWidth(78)
        changeComponentWidth(26)
      } else if (screenWidth <= bigTablet) {
        changeResetComponentWidth(84)
        changeComponentWidth(28)
      }
    }

    const onResize = () => {
      setScreenWidth(window.screen.width)
      updateInterval(0)
    }

    setSliderSettings()
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [screenWidth, componentWidth])

  useEffect(() => {
    const int = setTimeout(() => carousel(), 2000)
    return () => clearTimeout(int)
  })

  return (
    <div className='menu-nav'>
      <ul className='menu-nav__list'>
        <Link
          className='menu-nav__link item-1'
          onClick={() => closeMenu()}
          to='/menu/rolls'
        >
          <li className='menu-nav__item'>Роли</li>
        </Link>
        <Link
          className='menu-nav__link item-2'
          onClick={() => closeMenu()}
          to='/menu/sets'
        >
          <li className='menu-nav__item'>Сети</li>
        </Link>
        <Link
          className='menu-nav__link item-3'
          onClick={() => closeMenu()}
          to='/menu/oberayte-5-roliv-platit-za-4'
        >
          <li className='menu-nav__item'>Обирайте 5 ролів платіть за 4</li>
        </Link>
        <Link
          className='menu-nav__link item-4'
          onClick={() => closeMenu()}
          to='/menu/hunkans'
        >
          <li className='menu-nav__item'>Нігірі та гункани</li>
        </Link>
        <Link
          className='menu-nav__link item-5'
          onClick={() => closeMenu()}
          to='/menu/drinks'
        >
          <li className='menu-nav__item'>Напої</li>
        </Link>
        <Link
          className='menu-nav__link item-6'
          onClick={() => closeMenu()}
          to='/menu/other'
        >
          <li className='menu-nav__item'>Додатки</li>
        </Link>
      </ul>
    </div>
  )
}

export default MenuNav
