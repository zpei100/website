import React, { Component } from 'react'
import Observer from '../observer.jsx'
import $ from 'jquery'

export default class AboutMe extends Component {
  componentDidMount() {
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
            <Observer load={() => import(/*webpackChunkName: "links" */ "./links.js")}>
              {Component => Component ? <Component /> : ''} 
            </Observer>
          </div>
          <div className="text roboto">
            <h1>About Me</h1>
            <p>
              My main passions include mathematics and problem solving. I am motivated by interesting challenges, learning opportunities and professional growth.
            </p>
            <p>
              JavaScript is my main language. Although my skills center around building full stack applications that leverage modern technologies like React & Redux, Node.js, MongoDB and MySQL, I am excited about extending these skills to Angular, Python, Java, Go environments and etc... 
            </p>
            <p>
              In the work place, I am the quiet introvert, who is self-sufficient, independent and always at work. I am horrible at small talk, but communicative in real conversations.
            </p>
          </div>
        </div>
      </div>
    );
  }
}