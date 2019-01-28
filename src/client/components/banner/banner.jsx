import React, { Component } from 'react'
import $ from 'jquery'
import MediaQuery from 'react-responsive'

export default class Banner extends Component {
  showImage = image => {
    if (image) 
    image.onload = () => {
      $(image).animate({opacity: 0.75}, 1000)
      setTimeout(() => {
        $(this.greeting).animate({opacity: 1}, 1000)
      })
    }
  }
  
  render() {
    return (
      <MediaQuery query="(max-device-width: 1024px)">
        {match => (
          match ? 

          <div id="banner">
            <img ref={image => this.showImage(image)} style={{width: '100vw', height: '100vh', transform: 'scale(1.4)', transformOrigin: '50% 20%'}} src="assets/images/banner-1.jpg" />
            <div ref={greeting => this.greeting = greeting} id="greeting">
              <p id="greet-name">Hi! I'm Zen,</p>
              <p id="greet-developer" className="honey">a full-stack developer...</p>
              <div>
              <button 
                onClick={e => document.getElementById('skills-section').scrollIntoView({behavior: 'smooth', block: 'center'})}
              >
                About Me
              </button>
              </div>
            </div>
          </div>   

          : 
          <MediaQuery query="(min-width: 1500px)">
            {match => (
              <div id="banner">
                <img ref={image => this.showImage(image)} src="assets/images/lightbulb-50-1920x1280.jpg" />
                <div ref={greeting => this.greeting = greeting} id="greeting">
                  <p id="greet-name">Hi! I'm Zen,</p>
                  <p id="greet-developer" className="honey">a full-stack developer...</p>
                  <div>
                  <button 
                    onClick={e => document.getElementById('skills-section').scrollIntoView({behavior: 'smooth', block: match ? 'end' : 'start'})}
                  >
                    About Me
                  </button>
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