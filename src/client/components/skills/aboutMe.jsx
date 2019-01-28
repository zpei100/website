import React, { Component } from 'react'
import Observer from '../observer.jsx'

export default class AboutMe extends Component {
  render() {
    return (
      <div  id="aboutMe" ref={links => this.links = links}>
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
              I'm passionate about mathematics and problem solving. I began my software engineering journey in July 2018.
            </p>
            <p>
              Since then, I've built numerous full stack applications from the ground up, using technologies ranging from raw JavaScript (pre-ES5) to the most buzz-wordy frameworks and libraries today.
            </p>
            <p>
              I enjoy solving toy problems with time and space complexity constraints. My hobbies include playing social board-games like one night werewolf, and watching gamers beating the hardest contents while breaking world records.
            </p>
          </div>
        </div>
      </div>
    );
  }
}