import React from 'react'
import './MissionVision.css'

const MissionVision = () => {
  return (
    <section id="mission-vision" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Purpose</span>
          <h2>Mission & Vision</h2>
          <div className="divider"></div>
        </div>
        <div className="mv-grid">
          <div className="card mission-card">
            <i className="fas fa-hands-helping"></i>
            <h3>Our Mission</h3>
            <p>To glorify God by making disciples of Jesus Christ through evangelism, worship, fellowship, and compassionate service, transforming lives and communities.</p>
          </div>
          <div className="card vision-card">
            <i className="fas fa-eye"></i>
            <h3>Our Vision</h3>
            <p>To be a thriving, diverse church raising generations of leaders, planting churches, and bringing hope to every corner of our city.</p>
          </div>
          <div className="card values-card">
            <i className="fas fa-heart"></i>
            <h3>Core Values</h3>
            <p>Love, integrity, excellence, unity, faith, and generosity. These values shape everything we do.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionVision