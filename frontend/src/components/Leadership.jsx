import React from 'react'
import './Leadership.css'

const Leadership = () => {
  const leaders = [
    { name: 'Rev. Michael Carter', title: 'Senior Pastor', img: 'https://placehold.co/300x300/eef2f7/2c3e50?text=Pastor+Michael' },
    { name: 'Sarah Thompson', title: 'Worship & Arts Pastor', img: 'https://placehold.co/300x300/eef2f7/2c3e50?text=Pastor+Sarah' },
    { name: 'David Kim', title: 'Outreach & Missions Dir.', img: 'https://placehold.co/300x300/eef2f7/2c3e50?text=Director+David' },
    { name: 'Elder Grace Okafor', title: 'Prayer Ministry', img: 'https://placehold.co/300x300/eef2f7/2c3e50?text=Elder+Grace' }
  ]

  return (
    <section id="leadership" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Shepherds</span>
          <h2>Leadership Team</h2>
          <div className="divider"></div>
        </div>
        <div className="leadership-grid">
          {leaders.map((leader, index) => (
            <div key={index} className="leader-card">
              <img src={leader.img} alt={leader.name} />
              <h3>{leader.name}</h3>
              <p>{leader.title}</p>
              <div className="social-leader">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership