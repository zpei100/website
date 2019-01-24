import React, { Component } from 'react'
import Expertise from './expertise.jsx'
import $ from 'jquery'

export default class ExpertiseSection extends Component {
  render() {
    return (
      <div id="expertise-section" ref={container => this.container = container}>
        <h1>My Expertise</h1>
        <div className="expertise-grid">
          {this.props.expertises.map((expertise, idx) => <Expertise key={`expertise-${idx}`} {...expertise} />)}
        </div>
      </div>
    );
  }
}