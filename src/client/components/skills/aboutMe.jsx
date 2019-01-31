import React, { Component } from 'react'
import Observer from '../observer.jsx'
import $ from 'jquery'

export default class AboutMe extends Component {
  componentDidMount() {
    console.log('mounted')
    this.io = new IntersectionObserver(([entry]) => {
      if(entry.intersectionRatio <= 0.50) {
        $('.links').animate({opacity: 0}, 500, () => {
          $('.links').addClass('sticky')
        })
        
      }
    }, {threshold: [0, 0.2, 0.5, 0.8, 1]})

    this.io.observe(this.readMe)
  }

  render() {
    return (
      <div id="aboutMe" ref={ele => this.readMe = ele}>
        <div style={{display: 'flex', height: '100%'}}>
          <div style={{height: '100%'}}>
            <div className="picture-container"></div>
            <Observer load={() => import(/*webpackChunkName: "links" */ "./links.jsx")}>
              {Component => Component ? <Component /> : ''} 
            </Observer>
          </div>
          <div className="text">
            <h1>About Me</h1>
            <p>
              I'm passionate about mathematics and problem solving. I've been doing a deep dive on full-stack web developer using JavaScript and Node.js. 
            </p>
            <p>
              I've built numerous full stack applications from the ground up, using technologies ranging from raw JavaScript (pre-ES5) to the most buzz-wordy frameworks and libraries today.
            </p>
            <p>
              I enjoy solving toy problems with time and space complexity constraints. My hobbies include playing social board-games like One Night Werewolf, and watching gamers break world records at the highest levels.
            </p>
          </div>
        </div>
      </div>
    );
  }
}