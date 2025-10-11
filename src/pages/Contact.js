import React, { useRef, useState } from 'react';
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";

function Contact() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Track "Book Now" button clicks
  const handleBookNowClick = () => {
    ReactGA.event("book_now_button_clicked", {
      page_location: window.location.pathname,
      page_title: document.title
    });
  };

  // Track email link clicks
  const handleEmailClick = () => {
    ReactGA.event("email_link_clicked", {
      page_location: window.location.pathname,
      page_title: document.title
    });
  };

  // Handle form submission using mailto
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = formRef.current;
    const name = form.elements.name.value;
    const contact = form.elements.contact.value;
    const inquiryType = form.elements.inquiryType.value;
    const message = form.elements.message.value;

    // Compose email
    const email = "scarlettriverahair@gmail.com";
    const subject = encodeURIComponent(`Inquiry from ${name} (${inquiryType})`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Best Way to Contact: ${contact}\n` +
      `Inquiry Type: ${inquiryType}\n\n` +
      `Message:\n${message}`
    );

    // Track form submission
    ReactGA.event("contact_form_submitted", {
      page_location: window.location.pathname,
      page_title: document.title
    });

    // Open mail client
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
  };

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
        Prefer email? <a href="mailto:scarlettriverahair@gmail.com" onClick={handleEmailClick}>scarlettriverahair@gmail.com</a>
      </p>
      <hr />

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">
            Best Way to Contact You
            <span style={{ fontWeight: "normal", fontSize: "0.9em" }}>
              {" "} (Email, phone, Instagram, Facebook, LinkedIn, etc.)
            </span>
          </label>
          <input type="text" className="form-control" id="contact" name="contact" required />
        </div>
        <div className="mb-3">
          <label htmlFor="inquiryType" className="form-label">Inquiry Type</label>
          <select className="form-select" id="inquiryType" name="inquiryType" required>
            <option value="">Select...</option>
            <option value="Bridal">Bridal</option>
            <option value="Color">Color</option>
            <option value="Styling">Styling</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
      </form>
      <hr />
      <div>
        <strong>Salon Booking:</strong>
        <div>
          <a
            href="https://www.vagaro.com/nurootssalonanddayspa/book-now"
            className="btn btn-outline-success mt-2"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleBookNowClick}
          >
            Book with Scarlett at Nu Roots Salon
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;