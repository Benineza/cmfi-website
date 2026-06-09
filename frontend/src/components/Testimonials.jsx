import React, { useState } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = [
    { text: "Grace Cathedral welcomed us like family. The sermons are life-changing and the community is authentic.", author: "— Emily & James" },
    { text: "I found healing and purpose here. The leadership truly cares, and the outreach programs are impactful.", author: "— Robert Mensah" },
    { text: "A church that walks the talk — modern worship, deep roots, and genuine love for the city.", author: "— Dr. Linda Park" }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Stories</span>
          <h2>What Our Family Says</h2>
          <div className="divider"></div>
        </div>
        <div className="testimonials-slider">
          <div className="testimonial-card active">
            <i className="fas fa-quote-left"></i>
            <p>{testimonials[currentIndex].text}</p>
            <h4>{testimonials[currentIndex].author}</h4>
          </div>
          <div className="testimonial-nav">
            <button onClick={prevTestimonial}><i className="fas fa-chevron-left"></i></button>
            <button onClick={nextTestimonial}><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials