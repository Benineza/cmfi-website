import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToServices = () => {
    const services = document.getElementById('services')
    if (services) {
      services.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const contact = document.getElementById('contact')
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <h1>Find Hope & Belonging</h1>
        <p>A spiritual home where faith meets purpose. Join us to grow, serve, and worship.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToServices}>Join a Service</button>
          <button className="btn btn-outline" onClick={scrollToContact}>Get in Touch</button>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  )
}

export default Hero