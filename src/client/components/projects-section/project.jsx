import React, { Component } from 'react'
import $ from 'jquery'

export default class Project extends Component {
  componentDidMount() {
    const overlay = $(this.overlay)
    const overlayTop = $(this.overlayTop)
    const overlayBot = $(this.overlayBot)
    const details = $(this.details)
    const thumbnail = $(this.thumbnail)
    const duration = 0.3
    const delay = duration /2

    $(this.container).hover(
      () => {
        overlay.stop()
        overlay.css({opacity: 1, transition: `ease-in, ${duration}s`})
        overlayTop.css({top: '15%', transition: `linear, ${duration}s ${delay}s`})
        overlayBot.css({bottom: '15%', transition: `linear, ${duration}s ${delay}s`})
        thumbnail.css({opacity: 0, transition: `linear ${delay}s`})
      },

      () => {
        overlay.stop()
        overlay.css({opacity: 0, transition: `ease-in, ${duration}s`})
        overlayTop.css({top: '-15%', transition: `ease-out, ${duration}s`})
        overlayBot.css({bottom: '-15%', transition: `ease-out, ${duration}s`})
        thumbnail.css({opacity: 1, transition: `ease-out ${delay}s`})
      }
    )
    
    details.hover(
      () => {
        details.stop()
        details.css({background: 'red', transition: '0.5s'})
      },
      () => {
        details.stop()
        details.css({background: 'white', transition: '0.5s'})
      }
    )
  }
  
  render() {
    const { technologies, name, thumbnail, toggleModal, idx } = this.props
    console.log('toggle modal: ', toggleModal)
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
      width: '100%',
      height: '100%'
    }

    const overlayTopStyles = {
      position: 'absolute',
      top: '-15%',
      height: '100%',
      width: '100%',
    }
    
    const overlayBotStyles = {
      position: 'absolute',
      width: '100%',
      bottom: '-15%',
      display: 'flex',
      justifyContent: 'center'
    }

    const overlayNameStyles = {
      fontSize: '24px', 
      fontWeight: 600, 
      width: '100%', 
      textAlign: 'center',
    }

    const overlayDescriptionStyles = {
      fontSize: '18px', 
      // margin: '8px 0 0 0',
      padding: '0 25px',
      boxSizing: 'border-box',
      fontWeight: 300, 
      color: 'red', 
      width: '100%', 
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-around',
      listStyleType: 'none',
      
    }

    const detailsStyle = {
      width: '150px',
      border: '4px solid',
      borderColor: 'red',
      padding: '10px',
      textAlign: 'center',
      cursor: 'pointer'
    }

    return (
      <div ref={container => this.container = container} style={containerStyles} className="project">
        <img ref={thumbnail => this.thumbnail = thumbnail} style={thumbnailStyles} src={thumbnail} />
        <div style={overlayStyles} ref={overlay => this.overlay = overlay}>

          <div style={{position: 'relative', height: '100%'}}>

            <div style={overlayTopStyles} ref={overlayTop => this.overlayTop = overlayTop}>
              <div style={overlayNameStyles}>{name}</div>
              <ul style={overlayDescriptionStyles}>{technologies.map(technology => <li>{technology}</li>)}</ul>
            </div>

            <div style={overlayBotStyles} ref={overlayBot => this.overlayBot = overlayBot}>
              <div onClick={() => toggleModal(idx)} style={detailsStyle} ref={details => this.details = details}>Details</div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}