import React from 'react'
import './WhatsAppButton.css'

const WhatsAppButton = () => {
  const phoneNumber = '+250788894514'
  const message = 'Hello Grace Cathedral, I\'d like to know more'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a href={whatsappUrl} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-whatsapp"></i>
    </a>
  )
}

export default WhatsAppButton