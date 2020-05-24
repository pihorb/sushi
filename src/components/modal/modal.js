import React, { useState, useImperativeHandle, useEffect, useRef } from 'react'
import './modal.sass'

const Modal = React.forwardRef((props, ref) => {
  const [ open, setOpen ] = useState(false)
  const modal = useRef()

  useImperativeHandle(ref, () => ({
    toggleModal: () => setOpen(!open),
  }))

  const toggle = () => ref.current.toggleModal()

  useEffect(() => {
    const { current } = modal
    if(open) {
      current.classList.add('m-open')
      document.body.classList.add('overflow')
    } else {
      current.classList.remove('m-open')
      document.body.classList.remove('overflow')
    }
  }, [open])

  return (
    <div className='modal-wrap' ref={modal}>
      <h1 onClick={toggle}> Close</h1>
      {props.children}
    </div>
  )
})

export default Modal
