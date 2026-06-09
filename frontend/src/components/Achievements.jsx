import React from 'react'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    { icon: 'fas fa-user-graduate', number: '500+', text: 'Students graduated' },
    { icon: 'fas fa-utensils', number: '120k+', text: 'Meals donated' },
    { icon: 'fas fa-church', number: '8', text: 'Church plants' },
    { icon: 'fas fa-globe', number: '15', text: 'Global missions' }
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