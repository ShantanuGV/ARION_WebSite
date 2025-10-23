<<<<<<< HEAD
import React from "react";

function Contact() {
  return (
    <section className="text-box contact" style={{ maxWidth: "600px", width: "90%", marginBottom: "5rem" }}>
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Reach out for collaboration or inquiries.</p>

      <ul className="contact-details">
        <li>
          📧 Email:{" "}
          <a href="mailto:shantnuvispute@gmail.com">shantnuvispute@gmail.com</a>
        </li>
        <li>
          📞 Phone: <span>+91 7743878102</span>
        </li>
        <li>
          🌐 Website:{" "}
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            www.example.com
          </a>
        </li>
        <li>
          💼 LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/shantanu-vispute-0b3b3332b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer">
            llinkedin.com/in/shantanu-vispute
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
=======
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
>>>>>>> ab220416f93e8a52522b31372d7f1b6b619269b0
