import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
          <HiOutlineMail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>example123@example.com</h5>
            <a href="mailto:dchaos1006@gmail.com">Send a Message</a>
          </article>

          <article className="contact_option">
          <RiMessengerLine className="contact_option-icon"/>
            <h4>Messenger</h4>
            <h5>example123@example.com</h5>
            <a href="https://facebook.com/ArvenKulot">Send a Message</a>
          </article>

          <article className="contact_option">
          <AiOutlineWhatsApp className="contact_option-icon"/>
            <h4>WhatsApp</h4>
            <h5>example123@example.com</h5>
            <a href="https://api.=whatsapp.com/send?phone=+1234567890">Send a Message</a>
          </article>
        </div>

        {/*Contact Option*/}
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="12"  placeholder="Your Message" required></textarea>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact