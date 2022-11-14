import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/Me.png'
import HeaderSocials from './HeaderSocials'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

const Header = () => {
  return (
   <header id='home'>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Ajhay</h1>
      <h5 className="text-light">Fullstack Developer</h5>

      <CTA/>

      <HeaderSocials/>

      <div className="me">
        <img src={Me} alt="me" />
      </div>

      <div className="scroll_Down">
         <h5 id="scroll_Name">Scroll Down</h5>
           <a href="#contact" id="scroll_Arrow"><BsFillArrowDownCircleFill/></a>
      </div>

    </div>
   </header>
  )
}

export default Header