import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! (Form will email Scarlett later)');
    // TODO: Add email integration when you get her email
    setForm({ name: '', email: '', inquiry: '', message: '' });
  };

  return (
    <div className="container" style={{maxWidth: '600px'}}>
      <h2>Contact Scarlett Rivera</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input className="form-control" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Inquiry Type</label>
          <select className="form-select" name="inquiry" value={form.inquiry} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="Bridal">Bridal</option>
            <option value="Color">Color</option>
            <option value="Style">Style</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea className="form-control" name="message" rows={4} value={form.message} onChange={handleChange} required />
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