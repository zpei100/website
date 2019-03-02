import React, { Component } from 'react'
import $ from 'jquery'

export default class Project extends Component {
  componentDidMount() {
    const overlay = $(this.overlay)
    const overlayTop = $(this.overlayTop)
    const overlayBot = $(this.overlayBot)
    const details = $(this.details)
    const thumbnail = $(this.thumbnail)
    const duration = 0.5
    const delay = 0 /2
    const container = $(this.container)

    $(this.container).hover(
      () => {
        overlay.stop()
        thumbnail.css({opacity: 0, transition: `ease-out ${delay}s`})
        overlay.css({opacity: 1, transition: `ease-in, ${duration}s`})
        overlayTop.css({top: '15%', transition: `linear, ${duration}s ${delay}s`})
        overlayBot.css({bottom: '15%', transition: `linear, ${duration}s ${delay}s`})
      },

      () => {
        overlay.stop()
        thumbnail.css({opacity: 1, transition: `ease-out ${delay}s`})
        overlay.css({opacity: 0, transition: `ease-in, ${duration}s`})
        overlayTop.css({top: '-30%', transition: `ease-out, ${duration}s`})
        overlayBot.css({bottom: '-15%', transition: `ease-out, ${duration}s`})
      }
    )
  }
  
  render() {
    const { technologies, name, thumbnail, toggleModal, idx } = this.props

    //styles
    const fullSize = {
      width: '100%',
      height: '100%'
    }

    const containerStyles = {
      overflow: 'hidden',
      position: 'relative',
    } 

    const overlayStyles = {
      width: '100%',
      height: '100%',
      background: 'white',
      position: 'absolute',
      top: 0,
      opacity: 0
    }

    const thumbnailStyles = {
      ...fullSize,
    }

    const overlayTopStyles = {
      position: 'absolute',
      top: '-30%',
      ...fullSize
    }
    
    const overlayBotStyles = {
      position: 'absolute',
      width: '100%',
      bottom: '-15%',
      display: 'flex',
      justifyContent: 'center'
    }

    const overlayNameStyles = {
      fontSize: '50px', 
      fontWeight: 600, 
      width: '100%', 
      textAlign: 'center',
    }

    const overlayTechnologiesStyles = {
      fontSize: '28px', 
      boxSizing: 'border-box',
      padding: 0,
      fontWeight: 300, 
      color: 'red', 
      width: '100%', 
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      listStyleType: 'none',
    }

    const detailsStyle = {
      width: '150px',
      border: '4px solid',
      borderRadius: '12px',
      borderColor: 'red',
      padding: '10px',
      textAlign: 'center',
      cursor: 'pointer',
      fontSize: '20px',
      fontWeight: 600,
    }

    return (
      <div 
        ref={container => this.container = container} 
        style={containerStyles} 
        className="project"
        id={this.props.iden}
      >
        {/* thumbnail for project. Hover over for overlay */}
        <img 
          ref={thumbnail => this.thumbnail = thumbnail} 
          style={thumbnailStyles} 
          src={thumbnail} 
        />
        
        {/* Overlay: name, technologies used, and button to show more */}
        <div style={overlayStyles} ref={overlay => this.overlay = overlay}>
          <div style={{position: 'relative', height: '100%'}}>

            <div style={overlayTopStyles} ref={overlayTop => this.overlayTop = overlayTop}>

              <div className="project-name">{name}</div>

              {/* done */}
              <ul className="technologies p-2 size-2">
                {technologies.map((technology, idx) => 
                  <li key={`technology-${idx}`}>{technology}</li>)}
              </ul>


            </div>

            <div className="details" ref={overlayBot => this.overlayBot = overlayBot}>
              <div onClick={() => toggleModal(idx)} ref={details => this.details = details}>DETAILS</div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}