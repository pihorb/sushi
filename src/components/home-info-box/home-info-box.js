import React, { useState } from 'react'
import './home-info-box.sass'
import Modal from '../modal/modal'
import Button from '../button/button'
import MenuPlateInfo from '../menu-plate-info/menu-plate-info'

export default function HomeInfoBox({ info }) {
  const [open, toggleOpen] = useState(false)

  const setBackground = () => {
    const name = info.name.replace(/\s/gi, '_')
    return name ? `sushi/${name}.jpg` : 'rgba(0, 0, 0, 0.5)'
  }

  const toggleModal = () => toggleOpen(!open)

  return (
    <div className='link-container' data-bg={setBackground()}>
      <div className='link-container__info'>
        {info.name} <br />
        {info.price} ГРН. <br />
        <Modal
          toggle={toggleModal}
          open={open}
          component={
            <MenuPlateInfo
              details={info}
              imgSrc={setBackground()}
              toggle={toggleModal}
            />
          }
        />
        <div className='link-container__btns'>
          <Button
            className='link-container__btn'
            name='shopping-cart'
            click={toggleModal}
          />
          <Button
            className='link-container__btn'
            name='link'
            click={toggleModal}
          />
        </div>
      </div>
    </div>
  )
}
