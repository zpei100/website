import React, { Component } from 'react'
import External from './external.jsx'
import $ from 'jquery'

export default class AboutMe extends Component {
  // componentDidMount() {
  //   this.io = new IntersectionObserver(([entry]) => {
  //     if(entry.intersectionRatio >= 0.5) {
  //       $('.links').animate({left: '-100%'}, 500, () => {
  //         $('.links').animate({opacity: 1}, 500)
  //       })
  //     } 
  //   }, {threshold: [0.5, 0.6, 0.7, 1]})

  //   this.io.observe(this.links)
  // }

  render() {
    return (
      <div  id="aboutMe" ref={links => this.links = links}>
        <div style={{display: 'flex'}}>
          <div className="circle"></div>
          <div className="introduction">
            <p>
              My journey of software engineering began in July of 2018. Since then, I've built numerous full stack applications from the ground up. And I can do so using either raw HTML/CSS/JavaScript or by leveraging modern libraries and frameworks. 
            </p>
          </div>
        </div>

        <ul className="links">
          <External text="LinkedIn" link="https://www.linkedin.com/in/zhengqp" icon="assets/icons/linkedin.png" />
          <External text="Github" link="https://github.com/zpei100" icon="assets/icons/github.png" />
          <External text="Gmail" link="mailto:zhengqing.pei@gmail.com" icon="assets/icons/gmail.png" />
          <External text="Resume" link="/resume" icon="assets/icons/resume.png" />
        </ul>
      </div>
    );
  }
}