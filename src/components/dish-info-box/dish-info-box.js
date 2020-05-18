import React from 'react'
import './dish-info-box.sass'

export default function DishInfoBox({ info }) {
  const setBackground = () => {
    const name = info.name.replace(/\s/gi, '_')
    return name ? `sushi/${name}.jpg` : 'rgba(0, 0, 0, 0.5)'
  }

  console.log(info)
  return (
    <div
      className='link-container'
      data-bg={setBackground()}
    >
      
      <div className='link-container__info'>
        {info.name}  <br />
        {info.price} ГРН.
      </div>
    </div>
  )
}
