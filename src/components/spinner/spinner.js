import React from 'react'
import './spinner.sass'

export default function Spinner() {
  return (
    <div className='spinner'>
      <div className='lds-ripple'>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
