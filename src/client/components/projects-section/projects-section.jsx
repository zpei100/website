import React, { Component } from 'react';
import Project from './project.jsx'

export default class ProjectsSection extends Component {
  render() {
    const { toggleModal } = this.props
    return (
      <div id="projects-section">
        <h1>Projects</h1>
        <div className="gallery">
          {this.props.projects.map((project, idx) => <Project {...project} idx={idx} toggleModal={toggleModal} />)}
        </div>
      </div>
    );
  }
}