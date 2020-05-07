import React, { Fragment } from 'react'
import { links } from '../../consts'
import LinkBox from '../link-box/link-box'

export default function HomeMenuLinks() {
  return (
    <Fragment>
      {links.map((link, index) => {
        return (
          <LinkBox
            key={index}
            name={link.name}
            aos={link.aos}
            link={link.link}
            title={link.title}
          />
        )
      })}
    </Fragment>
  )
}
