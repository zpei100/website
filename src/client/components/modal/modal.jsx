import React, { Component } from 'react'
import Carousel from './carousel.jsx'
import $ from 'jquery'

export default class Modal extends Component {
  componentDidUpdate = prevProps => {
    if (!prevProps.showModal && this.props.showModal) this.addUnmountListener()
  }
  
  componentDidMount = () => this.addUnmountListener()
  
  addUnmountListener() {
    $(this.modal).on('click', () => {
      this.props.toggleModal(0)
    })
  }

  render() {
    const { data: {images, description, name}, showModal, toggleModal} = this.props
    return (
      showModal ? <div id="modal" ref={modal => this.modal = modal}>
      <div id="modal-content">
        <Carousel images={images} />
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div> : ''
    );
  }
}