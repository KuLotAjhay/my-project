import React from 'react'
import './experience.css'
import {IoLogoHtml5} from 'react-icons/io'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoSass} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io'
import {IoLogoReact} from 'react-icons/io5'
import {FaBootstrap} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {IoLogoNodejs} from 'react-icons/io5'
import {SiMongodb} from 'react-icons/si'
import {SiPhp} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'


import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init();

const Experience = () => {
  return (
    <section id="experience">
      <h5>
        What Skills Do I Have?
      </h5>
      <h2>My Experience</h2>
      
      <div className="container experience_container">
        <div className="experience_frontend" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in">
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
              <IoLogoHtml5 className="experience_details-icon"/>
           <div>   <h4>HTML</h4>
              <small className="text-light">Experienced</small></div>
              </article>

              <article className="experience_details">
              <IoLogoCss3 className="experience_details-icon"/>
             <div> <h4>CSS</h4>
              <small className="text-light">Experienced</small></div>
              </article>

              <article className="experience_details">
              <IoLogoSass className="experience_details-icon"/>
             <div> <h4>SASS</h4>
              <small className="text-light">Experienced</small></div>
              </article>

              <article className="experience_details">
              <IoLogoJavascript className="experience_details-icon"/>
             <div> <h4>JAVASCRIPT</h4>
              <small className="text-light">Experienced</small></div>
              </article>

              <article className="experience_details">
              <IoLogoReact className="experience_details-icon"/>
           <div>   <h4>REACT JS</h4>
              <small className="text-light">Experienced</small></div>
              </article>

              <article className="experience_details">
              <FaBootstrap className="experience_details-icon"/>
           <div>   <h4>BOOTSTRAP</h4>
              <small className="text-light">Experienced</small></div>
              </article>

              <article className="experience_details">
              <SiTailwindcss className="experience_details-icon"/>
           <div>   <h4>TAILWIND</h4>
              <small className="text-light">Experienced</small></div>
              </article>

            </div>
        </div>

        {/*---BACKEND---*/}

        <div className="experience_backend" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in">
        <h3>Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
              <IoLogoNodejs className="experience_details-icon"/>
             <div> <h4>Node JS</h4>
              <small className="text-light">Experienced</small></div>
              </article>

              <article className="experience_details">
              <SiMongodb className="experience_details-icon"/>
             <div> <h4>MongoDB</h4>
              <small className="text-light">Experienced</small></div>
              </article>

              <article className="experience_details">
              <SiPhp className="experience_details-icon"/>
           <div> <h4>PHP</h4>
              <small className="text-light">Basic</small></div>
              </article>
              <article className="experience_details">
              <GrMysql className="experience_details-icon"/>
             <div> <h4>MYSQL</h4>
              <small className="text-light">Basic</small></div>
              </article>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Experience