import React, { Fragment } from 'react'
import { menu } from '../../consts'
import Icon from '../../components/icon/icon'

export default function HomeMenuLinks() {
  return (
    <Fragment>
      {Object.values(menu).map((value, i) => {
        return (
          <Fragment key={i}>
            <li className='m-divider__item'>{value}</li>
            <Icon name='star' />
          </Fragment>
        )
      })}
    </Fragment>
  )
}
