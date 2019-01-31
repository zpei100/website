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

  //finds the three images, left of active, active and right of active currently
  getRenderedImageSize = () => this.slider.find('img').first().width()

  componentDidMount() {
    //carousel swipe
    $('.carousel').on('touchstart', (event) => {
      var xClick = event.originalEvent.touches[0].pageX;
      $('.carousel').one('touchmove', (event) => {
      var xMove = event.originalEvent.touches[0].pageX;

      if( Math.floor(xClick - xMove) > 5 ){
          this.slide('-');
      }
      else if( Math.floor(xClick - xMove) < -5 ){
          this.slide('+');
      }
    });

      $(".carousel").on("touchend", function(){
        $(".carousel").off("touchmove");
      });
    });
  }

  updateActive = operation => {
    const len = this.props.images.length - 1
    const { active } = this.state

    if (operation === '-') return active === len ? 0 : active + 1
    else return active === 0 ? len : active - 1;
  }

  slide = operation => {
     if (!this.state.animating) {
      const $images = this.slider.find('img')
      const marginChange = this.getRenderedImageSize() + 'px'
      const newActive = this.updateActive(operation);
      const images = getThree(this.props.images, newActive);

      //left button, slide is moving right
      if (operation === '+') {
        this.slider.prepend(`<img style="width: 100%; height: 100%; overflow: hidden; padding: 0; whiteSpace: nowrap; margin-left: -${marginChange}" src="${images[0]}"/>`);
      }

      //right button, slide is moving left
      if (operation === '-') {
        this.slider.append(`<img style="width: 100%; height: 100%; overflow: hidden; padding: 0; whiteSpace: nowrap" src="${images[2]}"/>`);
      }

      this.setState({animating: true}, () => {
        //bug if not declare $images a second time
        const $images = this.slider.find('img')
        $images
        .first()
        .animate({marginLeft: `${operation}=${marginChange}`}, this.animationDuration, () => {
          if(operation === '-') $images.first().remove();
          if(operation === '+') $images.last().remove();
          this.setState({active: newActive, images, animating: false})
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
        <div className="carousel">
          <div style={sliderStyles} ref={slider => this.slider = $(slider)} className="slider">
            <img style={sliderImageStyles} src={images[0]} />
          </div>
        </div>
        <div id="carousel-buttons-container">
          <button id="left-button" style={buttonStyles} onClick={() => this.slide('+')}><img src="assets/icons/left-arrow.svg"></img></button>
          <button id="right-button" style={buttonStyles} onClick={() => this.slide('-')}><img src="assets/icons/right-arrow.svg"></img></button>
        </div>
      </React.Fragment>
    );
  }
}