import React, { Component } from 'react'
import SkillsBars from './skillsBars'
import AboutMe from './aboutMe'

export default class Skills extends Component {
  render() {
    const { skillsData } = this.props
    return (
      <div id="skills-section" className="">
        {/* <div className="small"></div> */}
        <AboutMe /> 
        <SkillsBars skillsData={skillsData}/>
      </div>
    );
  }
}