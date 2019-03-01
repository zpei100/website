import React, { Component } from 'react'
import Bar from './bar'
import MediaQuery from 'react-responsive'

export default class SkillsBars extends Component {
  render() {
    const { skillsData } = this.props

    return (
      <div id="skills-bars">
        {skillsData.map((skill, idx) => <Bar key={`bar-${idx}`} {...skill} delay={idx * 0.15} />)}
      </div>
    );
  }
}