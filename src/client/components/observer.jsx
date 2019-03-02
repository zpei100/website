import React from 'react'

export default class Observer extends React.Component {
  constructor({threshold, ratio}) {
    super()
    this.state = {
      component: null,
      threshold: threshold || [0],
      ratio: ratio || 0
    }
    this.container = null
  }

  componentDidMount() {
    this.io = new IntersectionObserver(
      ([entry]) => {
        if(entry.intersectionRatio > this.state.ratio) {
          this.io.unobserve(this.container)
          this.props.load().then(module => this.setState({component: module.default}))
        }        
      }
    , {threshold: this.state.threshold})
    this.io.observe(this.container)
  }

  componentWillUnmount() {
    this.io.unobserve(this.container)
  }

  render() {
    return this.state.component ? <React.Fragment>{this.props.children(this.state.component)}</React.Fragment>
    : <div ref={div => this.container = div}></div>
  }
}