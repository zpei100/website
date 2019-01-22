import React, { Component } from 'react';

export default class External extends Component {
  render() {
    const { text , link = '#', icon } = this.props
    return (
      <div className="link">
        <img src={icon}></img>
        <div><a href={link} target="_blank" >{text}</a></div>
      </div>
    );
  }
}