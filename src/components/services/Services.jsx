import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import Service from '../../assets/Services.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'


AOS.init();

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer?</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service"data-aos="zoom-in" data-aos-mirror="true" data-aos-once="false" data-aos-duration="2000">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

        <ul className="service_list">
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </li>
        </ul>
        </article>
        {/*--End UI/UX--*/}
        <article className="service" data-aos="zoom-in" data-aos-mirror="true" data-aos-once="false" data-aos-duration="2000">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

        <ul className="service_list">
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </li>
        </ul>
        </article>
        {/*--End Web development--*/}
        <article className="service" data-aos="zoom-in" data-aos-mirror="true" data-aos-once="false" data-aos-duration="2000">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

        <ul className="service_list">
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </li>
          <li>
            <BiCheck className="service_list-icon"/>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </li>
         
        </ul>
        </article>
      <div className="service_me-image" data-aos="zoom-in" data-aos-once="false" data-aos-duration="2000"><img src={Service} alt ="service Images"/></div>
        {/*--End  of Content Creation--*/}
        </div>
    </section>
  )
}

export default Services