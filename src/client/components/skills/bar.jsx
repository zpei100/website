import React, { Component } from 'react'
import $ from 'jquery'

export default class Bar extends Component {
  componentDidMount() {
    this.io = new IntersectionObserver(
      ([entry]) => {
        if(entry.intersectionRatio > 0.75) {
          this.io.unobserve(this.bar);
          const { delay = 0.2 } = this.props;
          setTimeout(() => {
            $(this.bar).animate({left: '0%'}, 2000, 'swing')
          }, 1000 * delay)
        }
      }, {threshold: [1]}
    )

    this.io.observe(this.barContainer)

    // const { delay = 0.2 } = this.props;
    // setTimeout(() => {
    //   $(this.bar).animate({left: '0%'}, 2000, 'swing')
    // }, 1000 * delay)
  }

  render() {
    const {value, color = 'lightblue', name:label, height = '40px', margin = '25px'} = this.props

    const containerStyle = {
      display: 'flex',
      height,
      margin: `0 0 ${margin} 0`
    }

    const barContainerStyles = {
      width: '75%',
      border: '3px solid black',
      overflow: 'hidden',
      position: 'relative',
      borderRadius: '14px',
    }

    const labelStyle = {
      textAlign: 'center',
      margin: 'auto 10px',
      width: '15%'
    }

    const barStyle = {
      width: value,
      background: color,
      height: '100%',
      position: 'absolute',
      left: `-${value}`,
    }

    return (
      <div style={containerStyle}>
        <div style={barContainerStyles} ref={barContainer => this.barContainer = barContainer}>
          <div ref={bar => this.bar = bar} style={barStyle} className="bar"></div>
        </div>
        <div style={labelStyle}>{label}</div>
      </div>
    );
  }
}