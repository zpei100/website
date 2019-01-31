import React, { Component } from 'react'
import Carousel from './carousel.jsx'

export default class Modal extends Component {
  render() {
    const { data: {images, description, name, website = '', github = ''}, showModal, toggleModal} = this.props
    return (
      showModal ? <div id="modal" ref={modal => this.modal = modal} onClick={e => this.props.toggleModal(0)}>
      <div id="modal-content" onClick={e => e.stopPropagation()}>
        <button id="exit-modal" onClick={() => toggleModal(0)}><img src="assets/icons/exit-red.svg"></img></button>
        <Carousel images={images} />
        <div id="modal-content-description">
          <h1>{name}</h1>
          <p>{description}</p>
          <div id="website-buttons">
            {website ? <a href={website}>Website</a> : ''}
            {github ? <a href={github}>Github</a> : ''}
          </div> 
        </div> 
      </div>
    </div> : ''
    );
  }
}