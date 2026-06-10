import React from 'react'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    { icon: 'fas fa-users', number: '2500+', text: 'Members' },
    { icon: 'fas fa-users', number: '15+', text: 'Missionaries' },
    { icon: 'fas fa-child', number: '10+', text: 'Youth Programs & Activities' },
    { icon: 'fas fa-church', number: '8', text: 'Church plants in Rwanda' },
    // { icon: 'fas fa-globe', number: '15', text: 'Global missions' }
  ]

  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Milestones</span>
          <h2>Our Achievements</h2>
          <div className="divider"></div>
        </div>
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card">
              <i className={item.icon}></i>
              <h3>{item.number}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements