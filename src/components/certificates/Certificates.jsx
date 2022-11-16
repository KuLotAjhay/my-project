import React from 'react'
import './certificates.css'
import Cert1 from '../../assets/Certificates/Cert1.png'
import Cert2 from '../../assets/Certificates/Cert1.png'
import Cert3 from '../../assets/Certificates/Cert1.png'

const Certificates = () => {
    return (
    <section id="certificates">
        <h5>Courses and Certificates</h5>
        <h2>certificates</h2>
        <div className="container certificates_container">
        <article className="certificates_item" data-aos="zoom-in" data-aos-mirror="true" data-aos-once="false" data-aos-duration="2000">
            <div className="certificates_item-image">
            <img src={Cert1} alt="#"/>
            </div>
            <a href={Cert1} download className="btn">Download</a>
            <h3>CCNAv7: Introduction to Networks</h3>
        </article>

        <article className="certificates_item" data-aos="zoom-in" data-aos-mirror="true" data-aos-once="false" data-aos-duration="2000">
            <div className="certificates_item-image">
            <img src={Cert2} alt="certificate"/>
            </div>
            <a href={Cert1} download className="btn">Download</a>
            <h3>CCNAv7: Switching, Routing, and Wireless Essentials</h3>
        </article>

        <article className="certificates_item" data-aos="zoom-in" data-aos-mirror="true" data-aos-once="false" data-aos-duration="2000">
            <div className="certificates_item-image">
            <img src={Cert3} alt="#"/>
            </div>
            <a href={Cert1} download className="btn">Download</a>
            <h3>PCAP: Programming Essentials in Python</h3>
        </article>
        </div>
    </section>
            
    )
  }
  export default Certificates