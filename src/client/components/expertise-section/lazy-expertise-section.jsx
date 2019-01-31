import React, { Component } from 'react'
import Observer from '../observer.jsx'

export default class LazyExpertise extends Component {
  render() {
    return (
      <Observer threshold={[0, 0.5, 1]} load={() => import(/*webpackChunkName: "expertise-section" */ './expertise-section.jsx')} >
        {Component => Component ? <Component {...this.props} /> : <div style={{height: '100vh'}}></div>} 
      </Observer>
    );
  }
}