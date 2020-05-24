import React, { createRef, useState, useEffect } from 'react'
import './home-info-box.sass'
import Modal from '../modal/modal'
import Button from '../button/button'
import MenuPlateInfo from '../menu-plate-info/menu-plate-info'

export default function HomeInfoBox({ info }) {
  const modal = createRef()

  const setBackground = () => {
    const name = info.name.replace(/\s/gi, '_')
    return name ? `sushi/${name}.jpg` : 'rgba(0, 0, 0, 0.5)'
  }

  const openModal = () => {
    const { current } = modal
    current.toggleModal()
  }

  return (
    <div className='link-container' data-bg={setBackground()}>
      <div className='link-container__info'>
        {info.name} <br />
        {info.price} ГРН. <br />
        <Modal ref={modal}>
          <MenuPlateInfo />
        </Modal>
        <div className='link-container__btns'>
          <Button
            className='link-container__btn'
            value='1'
            name='shopping-cart'
            click={openModal}
          />
          <Button
            className='link-container__btn'
            value='2'
            name='link'
            click={openModal}
          />
        </div>
      </div>
    </div>
  )
}
