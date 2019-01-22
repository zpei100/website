import React, { Component } from 'react'
import Expertise from './expertise.jsx'

export default class ExpertiseSection extends Component {

 
  render() {
    return (
      <div id="expertise-section">
        <h1>My Expertise</h1>
        <div className="expertise-grid">
          {this.props.expertises.map(expertise => <Expertise {...expertise} />)}
        </div>
      </div>
    );
  }
}