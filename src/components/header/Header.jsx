import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/Me.png'
import HeaderSocials from './HeaderSocials'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'


AOS.init();


const Header = () => {
  return (
   <header id='home'>
    <div className="container header_container">
      <h5 className="text-light">Hi There! I'm</h5>
      <h1 className="myname animate__animated animate__pulse animate__slow	2s animate__infinite	infinite ">Ajhay</h1>
      <h5 className="s_e"> Software Engineer</h5>
      
      <CTA/>
      <HeaderSocials/>

      <div className="me" data-aos="zoom-in" data-aos-mirror="true" data-aos-once="false" data-aos-duration="2000">
        <img src={Me} alt="me" />
        <h5 className="s_e">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt dolorem ex ipsam aliquid dolores ratione amet. Esse molestiae magnam hic expedita harum aliquid, ipsum tenetur nulla? Beatae, inventore voluptas.</h5>
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