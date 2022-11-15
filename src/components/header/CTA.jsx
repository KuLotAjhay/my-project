import React from 'react';
import CV from '../../assets/Resume.pdf';

const CTA = () => {
  return (
    <div className="cta" data-aos="zoom-in-down" data-aos-duration="1800">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#about" className="btn btn-primary">Get To Know Me</a>
    </div>
  )
}

export default CTA