import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
   <div className="header_Socials"  data-aos="zoom-in-up" data-aos-duration="1800">
    <a href="https://linkedin.com"><BsLinkedin/></a>
    <a href="https://github.com" ><BsGithub/></a>
    <a href="https://facebook.com"><BsFacebook/></a>
   </div>
  )
}

export default HeaderSocials