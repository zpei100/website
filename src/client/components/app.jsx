import React, { Component } from 'react'
import LazySkills from './skills/lazy-skills.jsx'
import Banner from './banner/banner.jsx'
import LazyExpertiseSection from './expertise-section/lazy-expertise-section.jsx'
import LazyProjectSection from './projects-section/lazy-projects-section.jsx'
import IntersectionObserver from 'intersection-observer-polyfill'
import $ from 'jquery'

window.IntersectionObserver = IntersectionObserver;

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
      this.setState({showModal: !this.state.showModal, active: idx}, () => {
        $('body').toggleClass('body-overflow');
        // $('body').css({overflowY: this.state.showModal ? 'hidden' : 'scroll', marginRight: this.state.showModal ? '10px' : 0})
        $('.links').css('visibility', this.state.showModal ? 'hidden' : 'visible')
      })
    })
  }

  render() {
    const { showModal, data: {skills, expertises, projects}} = this.state
    const Modal = this.modal

    return (
      <React.Fragment>
        <Banner />
        <LazySkills skillsData={skills} />
        <LazyExpertiseSection expertises={expertises} />
        <LazyProjectSection projects={projects} toggleModal={this.toggleModal}/>
        {Modal ? <Modal showModal={showModal} toggleModal={this.toggleModal} data={this.state.data.projects[this.state.active]}/> : ''}
      </React.Fragment>
    );
  }
}