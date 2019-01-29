import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import $ from 'jquery'

if(!IntersectionObserver) const IntersectionObserver = import('intersection-observer-polyfill')

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
    const {value, color = 'black', name:label, height = '40px', margin = '20px'} = this.props

    const containerStyle = {
      display: 'flex',
      height,
      margin: `0 0 ${margin} 0`
    }

    const VerticalContainerStyle = {
      display: 'flex',
      height,
      margin: `${margin} 0`
    }

    const verticalBarContainerStyles = {
      width: '100%',
      border: '3px solid black',
      overflow: 'hidden',
      position: 'relative',
      borderRadius: '14px',
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

    const verticalLabelStyles = {
      textAlign: 'center',
      margin: 'auto 10px',
      width: '15%',
      transform: 'translateY(10px) rotate(50deg)',
      verticalAlign: 'text-top',
      margin: 0
    }

    return (
      <MediaQuery maxWidth={1500}>
      {matches => (
        <div className="bar-container" style={matches ? VerticalContainerStyle : containerStyle}>
          <div className="bar" style={matches ? verticalBarContainerStyles : barContainerStyles} ref={barContainer => this.barContainer = barContainer}>
            <div ref={bar => this.bar = bar} style={barStyle} className="bar-fill"></div>
          </div>
          <div className="skill-label" style={matches ? verticalLabelStyles : labelStyle}>{label}</div>
        </div>
      )}
      </MediaQuery>
    );
  }
}