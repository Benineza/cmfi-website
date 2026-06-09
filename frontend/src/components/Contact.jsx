import React, { useState } from 'react'
import { submitContactForm } from '../utils/api'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '', loading: false })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending message...', loading: true })

    try {
      const response = await submitContactForm(formData)
      if (response.success) {
        setStatus({ type: 'success', message: response.message, loading: false })
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus({ type: '', message: '', loading: false }), 5000)
      } else {
        setStatus({ type: 'error', message: response.message, loading: false })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.', loading: false })
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Reach out</span>
          <h2>Contact Us</h2>
          <div className="divider"></div>
        </div>
        <div className="contact-wrapper">
          <div className="contact-info">
            <div><i className="fas fa-map-marker-alt"></i><span>123 Grace Ave, Springfield, USA</span></div>
            <div><i className="fas fa-phone-alt"></i><span>+1 (555) 789-3421</span></div>
            <div><i className="fas fa-envelope"></i><span>cmci.rwanda@gmail.com</span></div>
            <div className="social-footer-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <textarea name="message" rows="4" placeholder="Your message..." value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={status.loading}>
              {status.loading ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-paper-plane"></i>}
              {status.loading ? ' Sending...' : ' Send Message'}
            </button>
            {status.message && (
              <div className={`form-feedback ${status.type}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact