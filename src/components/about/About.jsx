import React from 'react'
import './about.css'
import Me from '../../assets/about_me.png'
import {BsAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFolderOpen} from 'react-icons/ai'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
        <div className="about_me-image"><img src={Me} alt ="About Images"/>
        </div>
      </div>

        <div className="about_content">
        <div className="about_cards">
            <article className="about_card">
            <BsAwardFill className="about_icon"/>
              <h5>Experiences</h5>
              <small>1+ yrs</small>
            </article>

            <article className="about_card">
            <FiUsers className="about_icon"/>
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about_card">
            <AiOutlineFolderOpen className="about_icon"/>
              <h5>Projects</h5>
              <small>30+ projects</small>
            </article>
          </div>

          <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci soluta consectetur, dolores sit at quibusdam ducimus iure! Explicabo, blanditiis possimus 
              dolorum ipsum quas delectus quam atque illum dicta ullam autem.
          </p>

          <a href="#contact" class="btn btn-primary">Get in Touch</a>

            


        </div>
      </div>
    </section>
  )
}

export default About