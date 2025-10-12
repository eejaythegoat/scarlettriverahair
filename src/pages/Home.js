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
      {/* Banner with images and glass headline */}
      <section className="w-full py-10 bg-neutral-50 border-b border-neutral-200 flex justify-center items-center relative">
        <div className="flex flex-row justify-center gap-6 w-full max-w-4xl">
          <img
            src="/images/scarlett-bio.jpeg"
            alt="Scarlett Rivera"
            className="w-56 h-72 object-cover rounded-2xl shadow-lg border-4 border-white bg-white"
            style={{ objectPosition: "center top" }}
          />
          <img
            src="/images/scarlett-center.jpg"
            alt="Scarlett Rivera in salon (seated)"
            className="w-56 h-72 object-cover rounded-2xl shadow-lg border-4 border-white bg-white"
            style={{ objectPosition: "center top" }}
          />
          <img
            src="/images/scarlett-right.jpg"
            alt="Scarlett Rivera with hair extensions"
            className="w-56 h-72 object-cover rounded-2xl shadow-lg border-4 border-white bg-white"
            style={{ objectPosition: "center top" }}
          />
        </div>
        {/* Glass headline over images */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[65%] px-8 py-8 rounded-3xl bg-white/80 backdrop-blur shadow-lg flex flex-col items-center z-10 border border-white">
          <h1 className="text-5xl md:text-6xl text-center font-serif font-bold text-gray-900 mb-3 tracking-tight">
            Scarlett Rivera Hair
          </h1>
          <span className="block w-32 h-2 rounded-full bg-mustard mb-4"></span>
          <p className="text-xl md:text-2xl font-semibold text-mustard text-center tracking-wide font-serif">
            Hair Stylist / Bridal Artist / Hair Extensionist
          </p>
          <Link to="https://nurootssalonanddayspa.com/book-online/" className="mt-8 px-8 py-3 bg-mustard text-black rounded-full font-bold shadow hover:bg-yellow-300 transition font-serif">
            Book Your Appointment
          </Link>
        </div>
      </section>
      {/* Bio Section */}
      <section className="max-w-screen-lg mx-auto px-4 py-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 flex-1">
          <h2 className="text-3xl font-serif font-bold mb-3">Meet Scarlett</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-serif">
            From styling Barbies to transforming real-life hair, Scarlett’s passion for beauty has always run deep. With over 12 years in the industry, she specializes in precision cuts, extensions, smoothing treatments, and beautiful bridal hair—whether it's soft, romantic waves or an elegant updo. Scarlett’s goal is to make you look and feel your absolute best—while sharing stories and laughter along the way. When she’s not behind the chair, you’ll find her exploring new restaurants, perfecting her Pilates practice, enjoying a long scenic walk, or sippin’ a nice espresso martini. Life’s too short not to savor the moments!
          </p>
        </div>
      </section>
    </>
  );
}