import React from 'react'
import "./footer.css"

const Footer = () => {

  const date = new Date()
  const currentYear = date.getFullYear()


  return (
    <div>
      <section id = "footer">
    
      </section>
      <p id = "copyright">Copyright © {currentYear}. Designed & Developed by Buju.</p>
    </div>
  )
}

export default Footer