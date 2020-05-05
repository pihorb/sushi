import React, { Fragment } from 'react'
import './menu.sass'
import { useParams } from 'react-router-dom'
import Icon from '../../components/icon/icon'

const menu = {
  rolls: 'Роли',
  sets: 'Сети',
  'oberayte-5-roliv-platit-za-4': 'Обирайте 5 ролів плтатіть за 4',
  hunkans: 'Нігірі та гункани',
  drinks: 'Напої',
  other: 'Додатки',
}

function Menu() {
  const { id: order } = useParams()
  const title = menu[order]
  const img = require(`../../images/menu/${order}.jpg`)
  const bg = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className='menu'>
      <div className='m-header' style={bg}>
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
            {menu &&
              Object.values(menu).map((value, i) => {
                return (
                  <Fragment key={i}>
                    <li className='m-divider__item'>{value}</li>
                    <Icon name='star' />
                  </Fragment>
                )
              })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu
