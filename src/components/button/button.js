import React from 'react'
import Icon from '../icon/icon'

export default function Button(props) {
  const view = props.name ? <Icon name={props.name} /> : props.value

  const submit = (e) => {
    return props.click ? props.click(e) : false
  }

  return (
    <button type='button' onClick={(e) => submit(e)}>
      {view}
    </button>
  )
}
