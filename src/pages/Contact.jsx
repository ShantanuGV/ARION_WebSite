import React from 'react'

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Reach out for collaboration or inquiries.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}
export default Contact
