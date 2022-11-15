import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio7.png'
import IMG2 from '../../assets/Portfolio8.png'
import IMG3 from '../../assets/Portfolio9.png'
import IMG4 from '../../assets/Portfolio4.png'
import IMG5 from '../../assets/Portfolio5.png'
import IMG6 from '../../assets/Portfolio3.png'

const data =[
  {
    id:1,
    image: IMG1,
    title: "EXIDIMY",
    github: "https://github.com",//add github account
    demo: "https://cdn.dribbble.com/users/1030568/screenshots/17200491/media/2588ebd66fe0eda2ab2813329da5375a.jpg"
  },
  {
    id:2,
    image: IMG2,
    title: "Notes",
    github: "https://github.com",//add github account
    demo: "https://cdn.dribbble.com/users/1030568/screenshots/17200491/media/2588ebd66fe0eda2ab2813329da5375a.jpg"
  },
  {
    id:3,
    image: IMG3,
    title: "Monao",
    github: "https://github.com",//add github account
    demo: "https://cdn.dribbble.com/users/1030568/screenshots/17200491/media/2588ebd66fe0eda2ab2813329da5375a.jpg"
  },
  {
    id:4,
    image: IMG4,
    title: "Animate Easy",
    github: "https://github.com",//add github account
    demo: "https://cdn.dribbble.com/users/1030568/screenshots/17200491/media/2588ebd66fe0eda2ab2813329da5375a.jpg"
  },
  {
    id:5,
    image: IMG5,
    title: "larahost",
    github: "https://github.com",//add github account
    demo: "https://cdn.dribbble.com/users/1030568/screenshots/17200491/media/2588ebd66fe0eda2ab2813329da5375a.jpg"
  },
  {
    id:6,
    image: IMG6,
    title: "Websample",
    github: "https://github.com",//add github accoun
    demo: "https://cdn.dribbble.com/users/1030568/screenshots/17200491/media/2588ebd66fe0eda2ab2813329da5375a.jpg"
  },
  
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

  <div className="container portfolio_container">
    {
      data.map(({id, image, title, github, demo}) => {
        return(
        <article key={id} className="portfolio_item" data-aos="zoom-in" data-aos-mirror="true" data-aos-once="false" data-aos-duration="2000">
        <div className="portfolio_item-image">
          <img src={image} alt={title}/>
        </div>
        <h3>{title}</h3>
       <div className="portfolio_item-cta">
         <a href={github} className="btn">Github</a>
        <a href={demo} className="btn btn-primary" target="">Demo</a>
       </div>
      </article>
        )
      })
    }
  
    </div>
    </section>
  )
}

export default Portfolio