import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {HiOutlineUser} from 'react-icons/hi'
import {HiOutlineClipboardDocumentList} from 'react-icons/hi2'
import {FaRegHandshake} from 'react-icons/fa'
import {HiOutlineFolderOpen} from 'react-icons/hi'
import {HiOutlineMail} from 'react-icons/hi'
import { useState } from 'react'
const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
  <nav>
    <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><HiOutlineUser/></a>
    <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiOutlineClipboardDocumentList/></a>
    <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FaRegHandshake/></a>
    <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><HiOutlineFolderOpen/></a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><HiOutlineMail/></a>
  </nav>
  )
}

export default Navbar