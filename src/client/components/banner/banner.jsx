import React, { Component } from 'react';
import $ from 'jquery'

export default class Banner extends Component {
  componentDidMount() {
    this.image.onload = () => {
      $(this.image).animate({opacity: 0.75}, 1000)
      setTimeout(() => {
        $(this.greeting).animate({opacity: 1}, 1000)
      }, 300)
    }
  }
  
  render() {
    return (
      <div id="banner">
        <img ref={image => this.image = image} src="assets/images/lightbulb-50-1920x1280.jpg" />
        <div ref={greeting => this.greeting = greeting} className="greeting">
          <p style={{fontSize: '100px'}}>Hi! I'm Zen,</p>
          <p style={{fontSize: '58px', fontWeight: '500' }} className="honey">a full-stack developer...</p>
          <div>
          <button 
            onClick={e => document.getElementById('skills-section').scrollIntoView({behavior: 'smooth', block: 'end'})}
          >
            About Me
          </button>
          </div>
        </div>
      </div>       
    );
  }
}