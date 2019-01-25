import React, { Component } from 'react'
import Observer from '../observer.jsx'

export default class LazySkills extends Component {
  render() {
    return (
      <Observer threshold={0.01} load={() => import(/*webpackChunkName: "Skills" */ './skills.jsx')}>
        {Component => Component ? <Component {...this.props}/> : <div id="skills-section" style={{height: '70vh'}}></div>}
      </Observer>
    );
  }
}