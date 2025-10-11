import React from "react";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center pt-24 pb-16 bg-gradient-to-b from-neutral-50 to-white">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-4 text-center drop-shadow-sm">
          Scarlett Rivera Hair
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 font-medium text-center mb-8">
          Bridal · Extensions · Treatments · Precision Cuts
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href="/services"
            className="px-6 py-3 rounded-full bg-black text-white font-semibold shadow-lg hover:bg-gray-900 transition"
          >
            Services
          </a>
          <a
            href="/bridal"
            className="px-6 py-3 rounded-full bg-white text-black border border-black font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Bridal
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-white text-black border border-black font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Book
          </a>
        </div>
      </section>

      {/* About */}
      <section className="max-w-4xl mx-auto px-4 md:px-0 py-12 flex flex-col md:flex-row items-center gap-10">
        <img
          src={process.env.PUBLIC_URL + "/images/scarlett-bio.jpeg"}
          alt="Scarlett Rivera"
          className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">Meet Scarlett</h2>
          <p className="text-lg text-gray-700">
            From styling Barbies to transforming real-life hair, Scarlett’s passion for beauty has always run deep. With over 12 years in the industry, she specializes in precision cuts, extensions, smoothing treatments, and beautiful bridal hair—whether it's soft, romantic waves or an elegant updo. Scarlett’s goal is to make you look and feel your absolute best—while sharing stories and laughter along the way. When she’s not behind the chair, you’ll find her exploring new restaurants, perfecting her Pilates practice, enjoying a long scenic walk, or sippin’ a nice espresso martini. Life’s too short not to savor the moments!
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex flex-col items-center py-16 mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-center">Ready for your transformation?</h3>
        <a
          href="/contact"
          className="px-8 py-3 rounded-full bg-black text-white font-semibold shadow-lg hover:bg-gray-900 transition"
        >
          Book an Appointment
        </a>
      </section>
    </div>
  );
}