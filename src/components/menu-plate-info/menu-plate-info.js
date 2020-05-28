import React from 'react'
import './menu-plate-info.sass'

export default function MenuPlateInfo({ details, imgSrc, toggle }) {
  const imgBG = require(`../../images/${imgSrc}`)
  const containerBG = `url( ${require('../../images/landing/container.jpg')} )`

  return (
    <div className='plate-info' style={{ backgroundImage: containerBG }}>
      <div className='plate-info__header'>
        <span>Детальніше про товар</span>
        <span className='plate-info__close' onClick={toggle}>
          Close
        </span>
      </div>
      <div className='plate-info__body'>
        <img src={imgBG} alt={details.name} />
        <div className='plate-info__content'>
          <div className='plate-info__main'>
            <div className='plate-info__title'>{details.name}</div>
          </div>
          <div className='plate-info__extra'>
            <div className='plate-info__title title-price'>
              {details.price} ГРН
            </div>
            <div className='plate-info__weight'>
              <span>{details.weight} грам / </span>
              <span>{details.pieces} шт.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
