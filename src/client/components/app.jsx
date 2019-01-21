import React, { Component } from 'react'
import Skills from './skills.jsx'
import Parallax from './parallax.jsx'
import '../eventHandlers/parallaxEffect'


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Parallax />
        <Skills />
      </React.Fragment>
    );
  }
}