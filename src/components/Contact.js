import React from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Get In <span className="highlight">Touch</span>
          </h2>
          <p className="contact-description">
            I'm available for full-time roles & freelance projects.
          </p>
          <p className="contact-subdescription">
            I thrive on crafting dynamic web applications, and<br/>
            delivering seamless user experiences.
          </p>
        </div>

        <div className="contact-button-container">
          <a href="mailto:hammadiotmane21@gmail.com" className="contact-button">
            <span className="button-text">Get In Touch</span>
            <span className="button-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
