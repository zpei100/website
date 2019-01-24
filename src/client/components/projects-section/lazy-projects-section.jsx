import React, { Component } from 'react'
import Observer from '../observer.jsx'

export default class LazyProjectsSection extends Component {
  render() {
    return (
      <Observer load={() => import(/*webpackChunkName: "projects-section" */ './projects-section.jsx')}>
        {Component => Component ? <Component {...this.props} /> : <div style={{height: '100vh'}}></div>} 
      </Observer>
    );
  }
}