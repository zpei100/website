import React, { Component } from 'react'
// import Skills from './skills/skills.jsx'
import LazySkills from './skills/lazy-skills.jsx'
import Parallax from './parallax/parallax.jsx'
// import Modal from './modal/modal.jsx'

// import ExpertiseSection from './expertise-section/expertise-section.jsx'
import LazyExpertiseSection from './expertise-section/lazy-expertise-section.jsx'

// import ProjectsSection from './projects-section/projects-section.jsx'
import LazyProjectSection from './projects-section/lazy-projects-section.jsx'

import data from './data'
import '../eventHandlers/parallaxEffect'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      data, showModal: false, active: 0
    }

    this.modal = null;
  }

  toggleModal = idx => {
    import(/*webpackChunkName: "Modal" */ './modal/modal.jsx').then(module => {
      this.modal = module.default
    }).then(() => {
      this.setState({showModal: !this.state.showModal, active: idx})
    })
  }

  render() {
    const { showModal, data: {skills, expertises, projects}} = this.state
    const Modal = this.modal

    return (
      <React.Fragment>
        <Parallax />
        <LazySkills skillsData={skills} />
        <LazyExpertiseSection expertises={expertises} />
        <LazyProjectSection projects={projects} toggleModal={this.toggleModal}/>
        {Modal ? <Modal showModal={this.state.showModal} toggleModal={this.toggleModal} data={this.state.data.projects[this.state.active]}/> : ''}
      </React.Fragment>
    );
  }
}