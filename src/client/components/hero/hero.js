import React, { Component } from 'react'
import $ from 'jquery'
import MediaQuery from 'react-responsive'
import { scrollToById } from '../../utility/scroll'

export default class Banner extends Component {
  showImage = image => {
    if (image) 
    image.onload = () => {
      $(image).animate({opacity: 0.75}, 1000)
      // image.src = '/images/lightbulb.jpg'
      setTimeout(() => {
        $(this.greeting).animate({opacity: 1}, 1000)
      })
    }
  }
  
  render() {
    return (
      <MediaQuery query="(max-device-width: 1024px)">
        {match => (

          //smaller than ipad: serve different background image
          match ? 

          <div id="hero">
            <img ref={image => this.showImage(image)} src="assets/images/banner-50.jpg" />
            <div ref={greeting => this.greeting = greeting} id="greeting">
              <p id="greet-name">Hi! I'm Zen,</p>
              <p id="greet-developer" className="honey">a full-stack developer...</p>
              <div>
              {/* <button onClick={e => scrollToById('skills-section', 'smooth', 'start')}>
                About Me
              </button> */}
              </div>
            </div>
          </div>   

          //larger than ipad;
          : 
          <MediaQuery query="(min-width: 1500px)">
            {match => (
              <div id="hero">
                <img 
                  ref={image => this.showImage(image)} 
                  src="/images/lightbulb-LQ.jpg" 
                  truesrc="/images/lightbulb.jpg" 
                />
                <div ref={greeting => this.greeting = greeting} id="greeting">
                  <p id="greet-name">Hi! I'm Zen,</p>
                  <p id="greet-developer" className="honey">a full-stack developer...</p>
                  <div>
                  {/* <button onClick={e => scrollToById('skills-section', 'smooth', match ? 'end' : 'start')}>
                    About Me
                  </button> */}
                  </div>
                </div>
              </div>   
             )} 
          </MediaQuery>
        )}
      </MediaQuery>
    );
  }
}