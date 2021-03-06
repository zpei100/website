import React from 'react'
import Observer from '../observer.jsx'
import External from './external'
import MediaQuery from 'react-responsive'

export default () => (
  <MediaQuery query="(max-width: 1500px)">
      {match => (
        <ul className={`links ${match ? 'sticky' : ''}`}>
          <External text="LinkedIn" link="https://www.linkedin.com/in/zhengqp" icon="assets/icons/linkedin.svg" />
          <External text="Github" link="https://github.com/zpei100" icon="assets/icons/github.svg" />
          <External text="Gmail" link="mailto:zhengqing.pei@gmail.com" icon="assets/icons/gmail.svg" />
          <External text="Resume" link="/resume" icon="assets/icons/resume.svg" />
        </ul>
      )}
  </MediaQuery>
)



  

