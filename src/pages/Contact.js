import React, { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2>Thank you for your message!</h2>
        <p>Scarlett will get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: '600px' }}>
      <h2>Contact Scarlett Rivera</h2>
      <p>
        Prefer email? <a href="mailto:scarlettriverahair@gmail.com">scarlettriverahair@gmail.com</a>
      </p>
      <hr />

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={() => setSubmitted(true)}
      >
        {/* Netlify form required hidden input */}
        <input type="hidden" name="form-name" value="contact" />
        {/* Honeypot field for bots */}
        <input type="hidden" name="bot-field" />

        <div className="mb-3">
          <label>Name</label>
          <input className="form-control" name="name" required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" name="email" type="email" required />
        </div>
        <div className="mb-3">
          <label>Inquiry Type</label>
          <select className="form-select" name="inquiry" required>
            <option value="">Select...</option>
            <option value="Bridal">Bridal</option>
            <option value="Color">Color</option>
            <option value="Style">Style</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea className="form-control" name="message" rows={4} required />
        </div>
        <button className="btn btn-primary" type="submit">Send Inquiry</button>
      </form>
      <hr />
      <div className="mt-3">
        <strong>Salon Booking:</strong>
        <br />
        <a href="https://nurootssalonanddayspa.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success mt-2">
          Book with Scarlett at Nu Roots Salon
        </a>
      </div>
    </div>
  );
}

export default Contact;