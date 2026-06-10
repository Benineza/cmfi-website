import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Who we are</span>
          <h2>About CMFI Rwanda</h2>
          <div className="divider"></div>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>For over three decades, CMFI Rwanda has been a beacon of faith, love, and community transformation. We are a multi-generational church dedicated to making disciples and extending God's grace to all.</p>
            <p>Our doors are open to everyone — regardless of background or belief. With vibrant worship, deep biblical teaching, and life-changing outreach, we exist to lead people into a growing relationship with Jesus Christ.</p>
            <div className="stats-row">
              <div className="stat"><span>29</span> Years</div>
              <div className="stat"><span>2.5k+</span> Members</div>
              <div className="stat"><span>12</span> Outreach Programs</div>
            </div>
          </div>
          <div className="about-image">
            <img src="https://placehold.co/600x500/dfe9f3/ffffff?text=CMFI+Rwanda" alt="Church interior" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About