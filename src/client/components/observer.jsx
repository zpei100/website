import React from 'react'

export default class Observer extends React.Component {
  constructor({threshold}) {
    super()
    this.state = {
      component: null,
      threshold: threshold || 0
    }
    this.container = null
  }

  componentDidMount() {
    this.io = new IntersectionObserver(
      ([entry]) => {
        if(entry.intersectionRatio > this.state.threshold) {
          this.io.unobserve(this.container)
          this.props.load().then(module => this.setState({component: module.default}))
        }        
      }
    , {threshold: [this.state.threshold]})
    this.io.observe(this.container)
  }

  componentWillUnmount() {
    this.io.unobserve(this.container)
  }

  render() {
    return <div ref={div => this.container = div}>{this.props.children(this.state.component)}</div>
  }
}