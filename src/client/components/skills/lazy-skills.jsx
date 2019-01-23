import React, { Component } from 'react'
import Observer from '../observer.jsx'

export default class LazySkills extends Component {
  render() {
    return (
      <Observer load={() => import(/*webpackChunkName: "Skills" */ './skills.jsx')}>
        {Component => Component ? <Component {...this.props}/> : ''}
      </Observer>
    );
  }
}