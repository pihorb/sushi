import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import './modal.sass'

export default function Modal(props) {
  useEffect(() => {
    const node = document.getElementById('modal-root')
    ReactDOM.render(<ModalBox {...props} />, node)
  }, [props])

  return <script />
}

function ModalBox({ component, open }) {
  const styles = classNames({
    'modal-wrap': true,
    'm-open': open,
  })

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
  }, [open])

  return (
    <div className={styles}>
      <div className='m-content'>
        {component}
      </div>
    </div>
  )
}
