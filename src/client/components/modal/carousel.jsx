import React, { Component } from 'react'
import $ from 'jquery'

const getThree = (arr, center) => {
  return [arr[(center + arr.length - 1) % arr.length], arr[center], arr[(center + 1) % arr.length]]
}

export default class Carousel extends Component {
  constructor({images}) {
    super()
    this.state = {
      images: getThree(images, 0), 
      animating: false,
      active: 0,
      animationDuration: 450,
      carouselWidth: '100%',
      carouselHeight: '65%'
    }
  }

  getRenderedImageSize = () => this.slider.find('img').first().width()

  componentDidMount() {
    this.slider
      .find('img')
      .first()
      .css({marginLeft: `-${this.getRenderedImageSize()}px`})
  }

  updateActive = operation => {
    const len = this.props.images.length - 1
    const { active } = this.state

    if (operation === '-') return active === len ? 0 : active + 1
    else return active === 0 ? len : active - 1;
  }

  slide = operation => {
     if (!this.state.animating) {
      const marginChange = this.getRenderedImageSize() + 'px'
      this.setState({animating: true}, () => {
        this.slider
          .find('img')
          .first()
          .animate({marginLeft: `${operation}=${marginChange}`}, this.animationDuration, () => {
            const newActive = this.updateActive(operation)
            this.setState({active: newActive, images: getThree(this.props.images, newActive), animating: false}, () => {
              this.slider.find('img').first().css({marginLeft: `-${marginChange}`})
          })
        })
      })
    }
  }

  render() {
    const sliderStyles = {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      padding: 0,
      whiteSpace: 'nowrap',
      background: 'white'
    }

    const carouselStyles = {
      // width: this.state.carouselWidth,
      // minWidth: this.state.carouselWidth,
      // height: '50vh'
    }

    const sliderImageStyles = {
      width: '100%',
      height: '100%',
      
    }

    const buttonStyles = {
      cursor: 'pointer',
      outline: 0,
      width: '50%',
      padding: '10px 0',
      border: 0,
      borderTop: '3px pink solid'

    }

    const { images } = this.state
    return (
      <React.Fragment>
        <div className="carousel" style={carouselStyles}>
          <div style={sliderStyles} ref={slider => this.slider = $(slider)} className="slider">
            {images.map((image, idx) => <img key={`image-${idx}`} style={sliderImageStyles} src={image} />)}
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <button id="left-button" style={buttonStyles} onClick={() => this.slide('-')}><img src="assets/icons/left-arrow.svg"></img></button>
          <button id="right-button" style={buttonStyles} onClick={() => this.slide('+')}><img src="assets/icons/right-arrow.svg"></img></button>
        </div>
      </React.Fragment>
    );
  }
}