import React, { useRef, useState } from 'react';
import { Helmet } from "react-helmet";

function Contact() {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  // Handles actual form submission via Netlify Forms (no redirect!)
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  if (submitted) {
    return (
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2>Thank you for reaching out!</h2>
        <p>
          Your message has been sent and Scarlett will get back to you as soon as possible.<br />
          For urgent inquiries, email <a href="mailto:scarlettriverahair@gmail.com">scarlettriverahair@gmail.com</a> or book your appointment online.
        </p>
        <a href="/" className="btn btn-primary mt-3">Back to Home</a>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: '600px' }}>
      <Helmet>
        <title>Scarlett Rivera Hair | Contact</title>
        <meta name="description" content="Get in touch with Scarlett Rivera Hair for inquiries about bridal and styling services." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://scarlettriverahair.com/contact" />
      </Helmet>
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
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
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