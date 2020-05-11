import React from 'react'
import './link-box.sass'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

function LinkBox(props) {
  const container = classNames({
    'link-container__info': true,
    'extra-height': props.subtitle,
  })

  return (
    <div
      className='link-container'
      data-testid='link-container'
      data-aos={props.aos}
      bg-img='true'
      data-bg={props.name ? `links/${props.name}.jpg` : 'rgba(0, 0, 0, 0.5)'}
    >
      <div className={container} data-testid='container-info'>
        <Link
          className='link-container__title'
          data-testid='link'
          to={props.link}
        >
          {props.title}
        </Link>
        {props.subtitle && (
          <p className='link-container__subtitle'>{props.subtitle}</p>
        )}
        {props.desc && <div className='link-container__desc'>{props.desc}</div>}
      </div>
    </div>
  )
}

export default LinkBox
