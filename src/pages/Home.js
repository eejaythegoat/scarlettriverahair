import React from "react";

const bioImg = process.env.PUBLIC_URL + "/images/scarlett-bio.jpeg"; // Make sure this image exists!

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={bioImg}
          alt="Scarlett Rivera in salon"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-80"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">
            Scarlett Rivera Hair
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white font-medium drop-shadow">
            Bridal · Color · Extensions · Treatments
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-3xl mx-auto mt-[-80px] mb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
          <img
            src={bioImg}
            alt="Scarlett Rivera"
            className="w-40 h-40 rounded-full object-cover border-4 border-gray-100 shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold mb-2">About Scarlett</h2>
            <p className="text-gray-700 text-lg">
              From styling Barbies to transforming real-life hair, Scarlett’s passion for beauty has always run deep. With over 12 years in the industry, Scarlett specializes in precision cuts and styles tailored to enhance your features and fit your lifestyle. As a Bellami-certified extensionist and smoothing treatment expert, she also has a love for creating beautiful bridal hair—whether it's soft, romantic waves or an elegant updo, she will work with you to bring your dream wedding look to life. Scarlett’s goal is to make you look and feel your absolute best—while sharing stories and laughter along the way. When she’s not behind the chair, you’ll find her exploring new restaurants, perfecting her Pilates practice, enjoying a long scenic walk or sippin a nice espresso martini. Life’s too short not to savor the moments!
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-6">Behind the Chair</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Haircuts */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Haircuts</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Signature Cut & Style <span className="float-right font-medium">$75</span></li>
              <li>Signature Cut & Style (the longer version) <span className="float-right font-medium">$90</span></li>
              <li>The Revival Signature Cut & Style <span className="float-right font-medium">$100</span></li>
              <li>Clipper Cut <span className="float-right font-medium">$55</span></li>
              <li>Bang or neck trim <span className="float-right font-medium">$10</span></li>
            </ul>
          </div>
          {/* Styling */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Styling</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Classic Blowout <span className="float-right font-medium">$60</span></li>
              <li>Luxe Blowout (includes a hot tool) <span className="float-right font-medium">$75</span></li>
              <li>Color Finish <span className="float-right font-medium">$50</span></li>
              <li>Wash & Diffuse Style <span className="float-right font-medium">$50</span></li>
              <li>Special Occasion Style <span className="float-right font-medium">$100</span></li>
            </ul>
          </div>
          {/* Extensions */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Hair Extensions</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Prices vary upon consultation</li>
            </ul>
          </div>
          {/* Treatments */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Treatments</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Keratin Express <span className="float-right font-medium">$200+</span></li>
              <li>Full Keratin <span className="float-right font-medium">$350+</span></li>
              <li className="text-xs italic mt-1">*Prices subject to change depending on length and density of hair*</li>
              <li>Vitalshot <span className="float-right font-medium">$30</span></li>
              <li>Epres <span className="float-right font-medium">$30</span></li>
              <li>K18 <span className="float-right font-medium">$30</span></li>
              <li>Conditioning <span className="float-right font-medium">$20</span></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bridal Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-6">Bridal Services</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Bridal Hair (Wedding Day)</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Bridal Consultation <span className="float-right font-medium">Complimentary</span></li>
              <li>Bridal Preview <span className="float-right font-medium">$140</span></li>
              <li>Bridal Hair (Wedding Day) <span className="float-right font-medium">$180</span></li>
              <li>Second Look <span className="float-right font-medium">$120</span></li>
              <li>Rehearsal Dinner: Blowout w/ Curls <span className="float-right font-medium">$90</span></li>
              <li>Rehearsal Dinner: Updo <span className="float-right font-medium">$120</span></li>
              <li className="text-xs italic mt-1">*Hourly rate may apply for style changes*</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="font-semibold text-xl mb-2">Bridal Party & Details</h3>
            <ul className="text-gray-700 space-y-1">
              <li>Bridal Concierge Service <span className="float-right font-medium">Hourly</span></li>
              <li>Bridal Party Hair <span className="float-right font-medium">$110</span></li>
              <li>Flower Girl (age 10 & under) <span className="float-right font-medium">$80</span></li>
              <li>Extensions (add-on) <span className="float-right font-medium">$40</span></li>
              <li>Hair Accessories <span className="float-right font-medium">$20</span></li>
            </ul>
          </div>
        </div>

        {/* Bridal Policy Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
          <h3 className="font-semibold text-xl mb-2">Bridal Booking & Policies</h3>
          <ul className="text-gray-700 space-y-1">
            <li><strong>Save the Date Fee & Contract:</strong> $150 non-refundable fee & signed contract required to secure your date. Bookings are first-come, first-served.</li>
            <li><strong>Minimum Service Requirement:</strong> $500 minimum for on-location bookings (may be accommodated if under $500).</li>
            <li><strong>Travel:</strong> Priced depending on location.</li>
            <li><strong>Payment:</strong> Final balance due on the wedding day (or before). Cash, Zelle, Venmo accepted. Gratuity not included.</li>
            <li><strong>Cancellations:</strong> Save the date fee is non-refundable. Changes to service numbers must be finalized 14 days prior to wedding.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}