import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faLink, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faLink, faShoppingCart)

function Icon({name}) {
  return <FontAwesomeIcon icon={name} />
}

export default Icon
