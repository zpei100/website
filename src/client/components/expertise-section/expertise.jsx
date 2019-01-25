import React, { Component } from 'react'
import $ from 'jquery'

export default class Expertise extends Component {
  componentDidMount() {
    this.io = new IntersectionObserver(
      ([entry]) => {
        if(entry.intersectionRatio > 0.25) {
          $(this.container).animate({opacity: 1}, 1000)
          this.io.unobserve(this.container)
        }
      }, {threshold: [0, 0.25, 0.5]}
    )
    this.io.observe(this.container)
  }

  render() {
    const { icon, title, description, bulletpoints = [] } = this.props
    const expertiseStyles = {
      display: 'flex',
      // justifyContent: 'start',
      padding: '30px 30px',
      opacity: 0
    }

    const titleStyles = {
      margin: 0
    }

    const detailsStyles = {
      margin: '0 0 0 30px'
    }

    return (
      <div ref={container => this.container = container} style={expertiseStyles}>
        <div><img src={icon}/></div>
        <div style={detailsStyles}>
          <h2 style={titleStyles}>{title}</h2>
          {/* <p>{description}</p> */}
          <ul>{bulletpoints.map((bulletpoint, idx) => <li key={`bulletpoint-${idx}`}>{bulletpoint}</li>)}</ul>
        </div>
      </div>
    );
  }
}