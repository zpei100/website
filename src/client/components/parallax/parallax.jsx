import React, { Component } from 'react';
import $ from 'jquery'

export default class Parallax extends Component {
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
      <div className="parallax">
        <img ref={image => this.image = image} src="assets/images/lightbulb.jpg" />
        <div ref={greeting => this.greeting = greeting} className="greeting">
          <p>Hi! I'm Zen,</p>
          <p>a full-stack developer</p>
          <button 
            onClick={e => document.getElementById('skills-section').scrollIntoView({behavior: 'smooth', block: 'end'})}
          >
            About Me
          </button>
        </div>
      </div>       
    );
  }
}