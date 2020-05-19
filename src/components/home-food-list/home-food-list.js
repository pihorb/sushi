import React, { useEffect, useState, Fragment } from 'react'
import HomeInfoBox from '../home-info-box/home-info-box'
import { Lazy } from '../../helpers'

export default function HomeFoodList() {
  const [menuList, setMenuList] = useState([])

  const lazyImages = () => {
    new Lazy().init()
  }

  useEffect(() => {
    fetch('http://localhost:3066/menu')
      .then((res) => res.json())
      .then(({ rolls }) => {
        setMenuList([...rolls])
        lazyImages()
      })
  }, [])

  return (
    <Fragment>
      {menuList &&
        menuList.map((item, index) => {
          return (
            <div className='m-food__item' key={index}>
              <HomeInfoBox info={item} />
            </div>
          )
        })}
    </Fragment>
  )
}
