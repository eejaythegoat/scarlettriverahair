import React from "react";

export default function Bridal() {
  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      <section className="pt-24 pb-10 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Bridal Services</h1>
        <p className="text-lg text-gray-600">
          Elegant, modern, and timeless — let’s make your dream bridal hair a reality.
        </p>
      </section>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Bridal Hair (Wedding Day)</h2>
          <ul className="text-gray-700 space-y-2">
            <li>Bridal Consultation <span className="float-right font-medium">Complimentary</span></li>
            <li>Bridal Preview <span className="float-right font-medium">$140</span></li>
            <li>Bridal Hair (Wedding Day) <span className="float-right font-medium">$180</span></li>
            <li>Second Look <span className="float-right font-medium">$120</span></li>
            <li>Rehearsal Dinner: Blowout + Curls <span className="float-right font-medium">$90</span></li>
            <li>Rehearsal Dinner: Updo <span className="float-right font-medium">$120</span></li>
          </ul>
          <p className="text-xs italic mt-2">*Hourly rate may apply for style changes</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Bridal Party & Details</h2>
          <ul className="text-gray-700 space-y-2">
            <li>Bridal Concierge Service <span className="float-right font-medium">Hourly</span></li>
            <li>Bridal Party Hair <span className="float-right font-medium">$110</span></li>
            <li>Flower Girl (age 10 & under) <span className="float-right font-medium">$80</span></li>
            <li>Extensions (add-on) <span className="float-right font-medium">$40</span></li>
            <li>Hair Accessories <span className="float-right font-medium">$20</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-12 bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Bridal Booking & Policies</h2>
        <ul className="text-gray-700 space-y-2">
          <li>
            <strong>Save the Date Fee & Contract:</strong> $150 non-refundable fee & signed contract required to secure your date. Bookings are first-come, first-served.
          </li>
          <li>
            <strong>Minimum Service Requirement:</strong> $500 minimum for on-location bookings (may be accommodated if under $500).
          </li>
          <li>
            <strong>Travel:</strong> Priced depending on location.
          </li>
          <li>
            <strong>Payment:</strong> Final balance due on the wedding day (or before). Cash, Zelle, Venmo accepted. Gratuity not included.
          </li>
          <li>
            <strong>Cancellations:</strong> Save the date fee is non-refundable. Changes to service numbers must be finalized 14 days prior to wedding.
          </li>
        </ul>
      </div>
    </div>
  );
}