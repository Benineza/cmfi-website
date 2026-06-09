import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <i className="fas fa-church"></i>
            <h4>Grace Cathedral</h4>
            <p>a church that loves, serves & uplifts.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <div className="social-links">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-whatsapp"></i>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Grace Cathedral. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer