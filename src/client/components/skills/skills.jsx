import React, { Component } from 'react'
import SkillsBars from './skillsBars.jsx'
import AboutMe from './aboutMe.jsx'
export default class Skills extends Component {
  render() {
    const { skillsData } = this.props
    return (
      <div id="skills-section">
        <AboutMe />
        <SkillsBars skillsData={skillsData}/>
      </div>
    );
  }
}