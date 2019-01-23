import React, { Component } from 'react'
import Expertise from './expertise.jsx'
import $ from 'jquery'

export default class ExpertiseSection extends Component {
  // componentDidMount() {
  //   let prevRatio = 0
  //   this.io = new IntersectionObserver(
  //     ([entry], it) => {
  //       if( entry.intersectionRatio > 0.5) {
  //         $('.links').addClass('sticky').animate({left: '0%'}, 500)
  //       }
  //     }
  //   , {threshold: [0.5, 0.6, 0.7, 1]})
  //   this.io.observe(this.container)
  // }
 
  render() {
    return (
      <div id="expertise-section" ref={container => this.container = container}>
        <h1>My Expertise</h1>
        <div className="expertise-grid">
          {this.props.expertises.map((expertise, idx) => <Expertise key={`expertise${idx}`} {...expertise} />)}
        </div>
      </div>
    );
  }
}