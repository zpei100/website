import React, { Component } from 'react'
import Skills from './skills/skills.jsx'
import Parallax from './parallax/parallax.jsx'
import data from './data'
import ExpertiseSection from './expertise-section/expertise-section.jsx'
import ProjectsSection from './projects-section/projects-section.jsx'
import '../eventHandlers/parallaxEffect'


export default class App extends Component {
  constructor() {
    super()
    this.state = data
  }

  render() {
    const { skills, expertises, projects } = this.state

    return (
      <React.Fragment>
        <Parallax />
        <Skills skillsData={skills} />
        <ExpertiseSection expertises={expertises} />
        <ProjectsSection projects={projects}/>
      </React.Fragment>
    );
  }
}