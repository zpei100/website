import React, { Component } from 'react'
import Carousel from './carousel.jsx'
import $ from 'jquery'

export default class Modal extends Component {
  render() {
    const { data: {images, description, name, website = ''}, showModal, toggleModal} = this.props
    return (
      showModal ? <div id="modal" ref={modal => this.modal = modal} onClick={e => this.props.toggleModal(0)}>
      <div id="modal-content" onClick={e => e.stopPropagation()}>
        <Carousel images={images} />
        <h1>{name}</h1>
        <p>{description}</p>
        {website ? <a href={website}>Website</a> : ''}
      </div>
    </div> : ''
    );
  }
}