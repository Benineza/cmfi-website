import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    { icon: 'fas fa-sun', title: 'Sunday Worship', time: '8:30 AM & 10:30 AM', location: 'In-person & Livestream' },
    { icon: 'fas fa-users', title: 'Wednesday Bible Study', time: '7:00 PM', location: 'Fellowship Hall' },
    { icon: 'fas fa-child', title: 'Youth & Young Adults', time: 'Friday 6:30 PM', location: 'Grace Youth Center' },
    { icon: 'fas fa-praying-hands', title: 'Prayer Meeting', time: 'Saturday 8:00 AM', location: 'Online & Chapel' }
  ]

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Join us</span>
          <h2>Weekly Services</h2>
          <div className="divider"></div>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <i className={service.icon}></i>
              <h3>{service.title}</h3>
              <p>{service.time}</p>
              <span>{service.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services