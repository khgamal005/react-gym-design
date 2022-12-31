import React from 'react'
import './Footer.css'
import github from '../assets/github.png'
import insta from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import icon from '../assets/logo.png'

function Footer() {
  return (
    <div className="Footer-container"><hr/>
    <div className="footer">
        <div className="social-links">
            <img src={github} alt=''/>
            <img src={insta} alt=''/>
            <img src={linkedin} alt=''/>
    </div>
    <div className="logo-f"><img src={icon} alt=""/></div>
    <div className="blur blur-r"></div>
    <div className="blur blur-l"></div>
    </div>
    </div>
  )
}

export default Footer