import React from "react";
import { Helmet } from "react-helmet-async";

export default function Bridal() {
  return (
    <>
      <Helmet>
        <title>Scarlett Rivera | Bridal</title>
      </Helmet>
      <section className="max-w-screen-lg mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">Bridal Hair (Wedding Day)</h2>
          <div className="space-y-2 text-lg">
            <div className="flex justify-between font-medium">
              <span>Bridal Consultation</span>
              <span>Complimentary</span>
            </div>
            <div className="flex justify-between">
              <span>Bridal Preview</span>
              <span>$140</span>
            </div>
            <div className="flex justify-between">
              <span>Bridal Hair (Wedding Day)</span>
              <span>$180</span>
            </div>
            <div className="flex justify-between">
              <span>Second Look</span>
              <span>$120</span>
            </div>
            <div className="flex justify-between">
              <span>Rehearsal Dinner: Blowout + Curls</span>
              <span>$90</span>
            </div>
            <div className="flex justify-between">
              <span>Rehearsal Dinner: Updo</span>
              <span>$120</span>
            </div>
          </div>
          <p className="text-xs italic mt-4 text-gray-600">
            *Hourly rate may apply for style changes
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Bridal Party & Details</h2>
          <div className="space-y-2 text-lg">
            <div className="flex justify-between">
              <span>Bridal Concierge Service</span>
              <span>Hourly</span>
            </div>
            <div className="flex justify-between">
              <span>Bridal Party Hair</span>
              <span>$110</span>
            </div>
            <div className="flex justify-between">
              <span>Flower Girl (age 10 & under)</span>
              <span>$80</span>
            </div>
            <div className="flex justify-between">
              <span>Extensions (add-on)</span>
              <span>$40</span>
            </div>
            <div className="flex justify-between">
              <span>Hair Accessories</span>
              <span>$20</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Bridal Booking & Policies</h2>
          <ul className="text-gray-700 space-y-2 list-disc list-inside">
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
      </section>
    </>
  );
}