import React, { Component, createRef } from 'react'
import './modal.sass'

export default function modal(WrappedComponent, open) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.modal = createRef()
    }

    toggleModal() {
      const { current } = this.modal
      current.classList.toggle('m-open')
      document.body.classList.toggle('overflow')
    }

    componentDidMount() {
      this.toggleModal()
    }

    render() {
      return (
        <div className='modal-wrap' ref={this.modal}>
          <div className='modal-overlay'>
            <div onClick={this.toggleModal.bind(this)}>Close</div>
            <WrappedComponent />
          </div>
        </div>
      )
    }
  }
}
