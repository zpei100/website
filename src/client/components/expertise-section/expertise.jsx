import React, { Component } from 'react'
import $ from 'jquery'
import MediaQuery from 'react-responsive'

export default class Expertise extends Component {
  constructor() {
    super()
    this.state = {
      shown: false
    }
  }

  componentDidMount() {
    this.io = new IntersectionObserver(
      ([entry]) => {
        if(entry.intersectionRatio > 0.25) {
          $(this.container).animate({opacity: 1}, 1000)
          this.setState({shown: true})
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
      padding: '30px 30px',
      opacity: this.state.shown ? 1 : 0
    }

    const titleStyles = {
      margin: 0
    }

    const detailsStyles = {
      margin: '0 0 0 30px'
    }

    return (
      <React.Fragment>
        <MediaQuery maxWidth={1000}>
        {match => (
          match ? 
          <div style={{padding: '50px 0'}} ref={container => this.container = container}>
            <div className="expertise-header" style={{display: 'flex', justifyContent: 'flex-start', paddingLeft: '40px'}}>
              <div><img src={icon}/></div>
              <h2 style={{...titleStyles, marginLeft: '25px', display: 'flex', alignItems: 'center'}}>{title}</h2>
            </div>
              {/* <p>{description}</p> */}
            <div style={{...detailsStyles, margin: 0}}>
              <ul style={{listStyle: 'circle'}}>{bulletpoints.map((bulletpoint, idx) => 
                <li style={{fontSize: '26px', lineHeight: '34px', marginBottom: '15px'}} key={`bulletpoint-${idx}`}>{bulletpoint}</li>)}
              </ul>
            </div>
          </div>
          
          : ''
        )} 
      </MediaQuery>

      <MediaQuery minWidth={1000}>
        {match => match ? <div ref={container => this.container = container} style={expertiseStyles}>
          <div><img src={icon}/></div>
          <div style={detailsStyles}>
            <h2 style={titleStyles}>{title}</h2>
            {/* <p>{description}</p> */}
            <ul>{bulletpoints.map((bulletpoint, idx) => <li key={`bulletpoint-${idx}`}>{bulletpoint}</li>)}</ul>
          </div>
        </div> : ''}
      </MediaQuery>
      </React.Fragment>
    );
  }
}