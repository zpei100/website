import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

export default class External extends Component {
  render() {
    const { text , link = '#', icon } = this.props
    return (
      <div className="link" onClick={() => location.href = link}>
        <img  src={icon}></img>
        <div><a href={link} target="_blank" >{text}</a></div>
      </div>
    );
  }
}