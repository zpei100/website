import React, { Component } from 'react';
import Project from './project.jsx'

export default class ProjectsSection extends Component {
  render() {
    const { toggleModal } = this.props
    return (
      <div id="projects-section">
        {/* <div className="small-stars"></div> */}
        <h1 className="title">Projects</h1>
        <div className="gallery-wrapper">
          <div className="gallery">
            {this.props.projects.map((project, idx) => 
              <Project 
                key={`project-${idx}`} 
                iden={`project-${idx}`} {...project} 
                idx={idx} 
                toggleModal={toggleModal} 
              />)}
          </div>
        </div>
      </div>
    );
  }
}