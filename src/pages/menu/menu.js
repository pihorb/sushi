import React from 'react'
import { useParams } from 'react-router-dom'
import './menu.sass'
import { menu } from '../../consts'
import MenuSubList from '../../components/menu-sub-list/menu-sub-list'
import HomeFoodList from '../../components/home-food-list/home-food-list'

function Menu() {
  const { id: order } = useParams()
  const title = menu[order]

  const setBackground = () => {
    const img = require(`../../images/menu/${order}.jpg`)
    return `url(${img})`
  }

  return (
    <div className='menu'>
      <div className='m-header' style={{ backgroundImage: setBackground() }}>
        <div className='m-header__title'>{title}</div>
        <ul className='m-header__list'>
          <li className='m-header__item'>Головна</li>
          <li className='m-header__item'>Меню</li>
          <li className='m-header__item'>{title}</li>
        </ul>
      </div>

      <div className='m-divider'>
        <div className='m-divider__content'>
          <ul className='m-divider__list'>
            <MenuSubList />
          </ul>
        </div>
      </div>

      <div className='m-food'>
        <div className='m-food__content'>
          <HomeFoodList />
        </div>
      </div>
    </div>
  )
}

export default Menu
