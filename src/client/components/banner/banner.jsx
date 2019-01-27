import React, { Component } from 'react';
import $ from 'jquery'
import MediaQuery from 'react-responsive'

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


        {/* <MediaQuery query="(max-width: 1920px)">
          <img ref={image => this.image = image} src="assets/images/lightbulb-50-1920x1280.jpg" />
        </MediaQuery>
        <MediaQuery query="(max-width: 1366px)">
          <img ref={image => this.image = image} src="assets/images/lightbulb-50-1366x911.jpg" />
        </MediaQuery> */}

        {/* {<picture ref={image => this.image = image}>
          <source srcSet="assets/images/lightbulb-50-1920x1280.jpg" media="(min-width: 1920px)"/>
          <source srcSet="assets/images/lightbulb-50-1366x911.jpg" media="(min-width: 1366px)"/>
          <source srcSet="assets/images/lightbulb-50-1280x853.jpg" media="(min-width: 1280px)"/>
          <source srcSet="assets/images/lightbulb-50-1024x683.jpg" media="(min-width: 1024px)"/>
          <source srcSet="assets/images/lightbulb-50-768x512.jpg" media="(min-width: 768px)"/>
          <img src="assets/images/lightbulb-50-1920x1280.jpg"></img>
        </picture>} */}

        <div ref={greeting => this.greeting = greeting} id="greeting">
          <p id="greet-name">Hi! I'm Zen,</p>
          <p id="greet-developer" className="honey">a full-stack developer...</p>
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