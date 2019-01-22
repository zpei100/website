import React, { Component } from 'react';

export default class Expertise extends Component {
  render() {
    const { icon, title, description } = this.props

    const expertiseStyles = {
      display: 'flex',
      padding: '30px 30px',
    }

    const titleStyles = {
      margin: 0
    }

    const detailsStyles = {
      margin: '0 30px'
    }

    return (
      <div style={expertiseStyles}>
        <div><img src={icon}/></div>
        <div style={detailsStyles}>
          <h2 style={titleStyles}>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}