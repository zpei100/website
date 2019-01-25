import React, { Component } from 'react'
import Bar from './bar.jsx'
import MediaQuery from 'react-responsive'

export default class SkillsBars extends Component {
  render() {
    const { skillsData } = this.props

    const verticalSkillsBarsStyles = {
      transform: 'rotate(-90deg) translateX(-50vh)',
      transformOrigin: '0 0',
      width: '50vh',
      height: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '15vw 0 15vw 50px',
    }

    return (
      <MediaQuery maxWidth={1500}>
        {matches => (
          <div id="skills-bars" style={matches ? verticalSkillsBarsStyles : {}}>
            {skillsData.map((skill, idx) => <Bar key={`bar-${idx}`} {...skill} delay={idx * 0.15} />)}
          </div>
        )}
      </MediaQuery>
    );
  }
}