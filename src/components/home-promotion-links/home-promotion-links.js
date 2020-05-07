import React, { Fragment } from 'react'
import { promotions } from '../../consts'
import LinkBox from '../link-box/link-box'

export default function HomePromotionLinks() {
  return (
    <Fragment>
      {promotions.map((pr, index) => {
        return (
          <LinkBox
            key={index}
            name={pr.name}
            aos={pr.aos}
            link={pr.link}
            title={pr.title}
            subtitle={pr.title}
            desc={pr.dec}
          />
        )
      })}
    </Fragment>
  )
}
