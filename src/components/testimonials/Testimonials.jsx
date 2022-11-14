import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Person1.jpg'
import AVTR2 from '../../assets/Person2.jpg'
import AVTR3 from '../../assets/Person3.jpg'
import AVTR4 from '../../assets/Person4.jpg'
import AVTR5 from '../../assets/Person5.jpg'
import AVTR6 from '../../assets/Person6.jpg'
/*-Swiper JS-*/
import { Autoplay, Pagination } from 'swiper';
import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[{
  avatar: AVTR1,
  name: "Jha Khol",
  review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa et dolores ratione ex consectetur molestiae consequatur veliteveniet, autem, sint omnis amet hic placeat obcaecati, similique quae est. Voluptates, placeat.",
},
{
  avatar: AVTR2,
  name: "Toe bhol",
  review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa et dolores ratione ex consectetur molestiae consequatur veliteveniet, autem, sint omnis amet hic placeat obcaecati, similique quae est. Voluptates, placeat.",
},
{
  avatar: AVTR3,
  name: "Kha Thol",
  review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa et dolores ratione ex consectetur molestiae consequatur veliteveniet, autem, sint omnis amet hic placeat obcaecati, similique quae est. Voluptates, placeat.",
},
{
  avatar: AVTR4,
  name: "Bhak Thol",
  review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa et dolores ratione ex consectetur molestiae consequatur veliteveniet, autem, sint omnis amet hic placeat obcaecati, similique quae est. Voluptates, placeat.",
},
{
  avatar: AVTR5,
  name: "Han Ngol",
  review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa et dolores ratione ex consectetur molestiae consequatur veliteveniet, autem, sint omnis amet hic placeat obcaecati, similique quae est. Voluptates, placeat.",
},
{
  avatar: AVTR6,
  name: "Love You",
  review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa et dolores ratione ex consectetur molestiae consequatur veliteveniet, autem, sint omnis amet hic placeat obcaecati, similique quae est. Voluptates, placeat.",
},
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Client Reviews</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{clickable: true}}
        modules={[Autoplay,Pagination]}
      spaceBetween={50}>
       {
        data.map(({avatar,name,review}, index) => {
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} alt=''/>
            </div>
            <h5 className="client_name">{name}</h5>
              <small className="client_review">
               {review}
              </small>
          </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials