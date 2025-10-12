import React from "react";
import { Helmet } from "react-helmet-async";

export default function Bridal() {
  return (
    <>
      <Helmet>
        <title>Scarlett Rivera | Bridal</title>
      </Helmet>
      <div className="bg-neutral-50 min-h-screen py-12">
        <div className="max-w-screen-lg mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold mb-10 text-center text-gray-900">Bridal Services</h1>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Bridal Pricing */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-serif font-bold mb-4 text-mustard">Bridal Pricing</h2>
              <div className="mb-3 text-lg">
                <div className="flex justify-between">
                  <span>All Bridal Consultations</span>
                  <span className="font-semibold">Complimentary</span>
                </div>
                <div className="flex justify-between">
                  <span>Bridal Preview</span>
                  <span className="font-semibold">$140</span>
                </div>
                <div className="text-sm text-gray-600 mb-2 ml-2">
                  60-minute preview appointment to create and perfect your chosen style.
                </div>
                <div className="flex justify-between">
                  <span>Bridal Hair (Wedding Day)</span>
                  <span className="font-semibold">$180</span>
                </div>
                <div className="text-sm text-gray-600 mb-2 ml-2">
                  Custom wedding day hairstyle of your choice (updo, half-up, glam waves, etc.)<br/>
                  Placement of veil and/or hair accessories.<br/>
                  Mini touch-up kit.
                </div>
                <div className="flex justify-between">
                  <span>Bridal Second Look</span>
                  <span className="font-semibold">$120</span>
                </div>
                <div className="text-sm text-gray-600 mb-2 ml-2">
                  A style change between ceremony and reception for a fresh, new bridal look.<br/>
                  <span className="italic">*hourly rate may apply*</span>
                </div>
                <div className="flex justify-between">
                  <span>Bridal Rehearsal Dinner Look</span>
                  <span className="font-semibold">$90</span>
                </div>
                <div className="text-sm text-gray-600 mb-2 ml-2">
                  Blowout with soft curls. Perfect for prepping your hair for the big day.
                </div>
                <div className="flex justify-between">
                  <span>Bridal Rehearsal Dinner Updo</span>
                  <span className="font-semibold">$120</span>
                </div>
                <div className="flex justify-between">
                  <span>Bridal Concierge Service</span>
                  <span className="font-semibold">Hourly</span>
                </div>
                <div className="text-sm text-gray-600 mb-2 ml-2">
                  On site personalized care for bride & bridal party after initial hair services are completed.<br/>
                  <span className="italic">*Hourly rate varies based on the length of time*</span>
                </div>
              </div>
            </div>
            {/* Bridal Party */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-serif font-bold mb-4 text-mustard">Bridal Party & Extras</h2>
              <div className="mb-3 text-lg">
                <div className="flex justify-between">
                  <span>Bridal Party Hair</span>
                  <span className="font-semibold">$110</span>
                </div>
                <div className="text-sm text-gray-600 mb-2 ml-2">
                  Bridesmaids, mothers, or special guests (choice of updo, half-up, or down styles)
                </div>
                <div className="flex justify-between">
                  <span>Flower Girl (10 & under)</span>
                  <span className="font-semibold">$80</span>
                </div>
                <div className="flex justify-between">
                  <span>Extensions (add-on)</span>
                  <span className="font-semibold">$40</span>
                </div>
                <div className="text-sm text-gray-600 mb-2 ml-2">
                  Add-on for hair extensions that are already installed or clip-ins.<br/>
                  Clip-in placement included if provided by client.<br/>
                  <span className="italic">*Purchase available upon request*</span>
                </div>
                <div className="flex justify-between">
                  <span>Hair Accessories</span>
                  <span className="font-semibold">$20</span>
                </div>
                <div className="text-sm text-gray-600 mb-2 ml-2">
                  Beautifully curated bridal hair accessories. From dainty pins to statement pieces.<br />
                  <span className="italic">*No charge if you provide your own*</span>
                </div>
              </div>
            </div>
          </div>
          {/* Policies & Booking */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mt-10">
            <h2 className="text-2xl font-serif font-bold mb-4 text-mustard">Policies & Booking Details</h2>
            <ul className="list-disc pl-6 text-lg text-gray-800 space-y-3">
              <li>
                <strong>Save The Date Fee & Contract:</strong> $150 non-refundable fee and signed contract required to secure your date. Dates are booked first-come, first-served.
              </li>
              <li>
                <strong>Minimum Service Requirement:</strong> $500 minimum for on-location bookings. <span className="italic text-sm">(may be accommodated if under $500)</span>
              </li>
              <li>
                <strong>Travel:</strong> Priced depending on location.
              </li>
              <li>
                <strong>Payment:</strong> Final balance due on the wedding day (or before). Cash, Zelle, Venmo accepted. <span className="italic text-sm">Gratuity not included.</span>
              </li>
              <li>
                <strong>Cancellations:</strong> Save the date fee is non-refundable. Changes to service numbers must be finalized 14 days prior to the wedding.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}