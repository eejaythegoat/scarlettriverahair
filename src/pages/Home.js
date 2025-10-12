import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Scarlett Rivera Hair</title>
        <meta name="description" content="Hair Stylist / Bridal Artist / Hair Extensionist in Wheaton, IL" />
      </Helmet>
      <section className="w-full py-20 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl text-center font-bold text-gray-900 mb-3 font-sans tracking-tight">
            Scarlett Rivera Hair
          </h1>
          <span className="block w-32 h-2 rounded-full bg-mustard mb-4"></span>
          <p className="text-2xl font-semibold text-mustard text-center tracking-wide font-sans">
            Hair Stylist / Bridal Artist / Hair Extensionist
          </p>
          <Link to="/contact" className="mt-8 px-8 py-3 bg-mustard text-black rounded-full font-bold shadow hover:bg-yellow-300 transition font-sans">
            Book Your Appointment
          </Link>
        </div>
      </section>
      <section className="max-w-screen-lg mx-auto px-4 py-16 flex flex-col md:flex-row gap-12 items-center">
        <img
          src="/images/scarlett-bio.jpeg"
          alt="Scarlett Rivera"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-mustard shadow-xl bg-white"
          onError={e => { e.target.style.display = "none"; }}
        />
        <div className="bg-white rounded-2xl shadow-xl p-8 flex-1">
          <h2 className="text-3xl font-bold mb-3 font-sans tracking-tight">Meet Scarlett</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-sans">
            From styling Barbies to transforming real-life hair, Scarlett’s passion for beauty has always run deep. With over 12 years in the industry, she specializes in precision cuts, extensions, smoothing treatments, and beautiful bridal hair—whether it's soft, romantic waves or an elegant updo. Scarlett’s goal is to make you look and feel your absolute best—while sharing stories and laughter along the way. When she’s not behind the chair, you’ll find her exploring new restaurants, perfecting her Pilates practice, enjoying a long scenic walk, or sippin’ a nice espresso martini. Life’s too short not to savor the moments!
          </p>
        </div>
      </section>
    </>
  );
}