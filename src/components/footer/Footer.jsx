import React from 'react'
import './footer.css'
import {IoLogoFacebook} from 'react-icons/io'
import {IoLogoInstagram} from 'react-icons/io'
import {IoLogoTwitter} from 'react-icons/io'
import {IoLogoGithub} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
      <a href="#home" class="footer_logo">AJhay</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><IoLogoFacebook/></a>
        <a href="https://instagram.com"><IoLogoInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
        <a href="https://github.com"><IoLogoGithub/></a>
      </div>

      <footer className="footer footer_copyright">
          <small>&copy; AJhay. All rights reserved.</small>
      </footer>
    </footer>
  )
}

export default Footer