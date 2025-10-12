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
      {/* Banner with 3 images and overlay headline */}
      <section className="relative w-full h-[340px] md:h-[400px] flex items-center justify-center bg-neutral-50 overflow-hidden">
        {/* Banner Images */}
        <div className="absolute inset-0 w-full h-full flex md:flex-row flex-col items-center justify-center z-0">
          {/* Desktop: 3 images side by side */}
          <img
            src="/images/scarlett-bio.jpeg"
            alt="Scarlett Rivera"
            className="w-1/3 h-full object-cover hidden md:block"
            style={{objectPosition: "center top"}}
          />
          <img
            src="/public/images/scarlett-center.jpg"
            alt="Scarlett Rivera in salon"
            className="w-1/3 h-full object-cover hidden md:block"
            style={{objectPosition: "center top"}}
          />
          <img
            src="/public/images/scarlett-right.jpg"
            alt="Scarlett Rivera with hair extensions"
            className="w-1/3 h-full object-cover hidden md:block"
            style={{objectPosition: "center top"}}
          />
          {/* Mobile: center image only */}
          <img
            src="/public/images/scarlett-bio.jpeg"
            alt="Scarlett Rivera"
            className="w-full h-full object-cover md:hidden"
            style={{objectPosition: "center top"}}
          />
        </div>
        {/* Glass overlay */}
        <div className="relative z-10 mx-auto px-4 py-8 rounded-3xl bg-white/80 backdrop-blur shadow-lg flex flex-col items-center border border-white w-[95%] max-w-2xl md:max-w-xl">
          <h1 className="text-4xl md:text-5xl text-center font-bold text-gray-900 mb-3 font-sans tracking-tight">
            Scarlett Rivera Hair
          </h1>
          <span className="block w-32 h-2 rounded-full bg-mustard mb-4"></span>
          <p className="text-lg md:text-xl font-semibold text-mustard text-center tracking-wide font-sans">
            Hair Stylist / Bridal Artist / Hair Extensionist
          </p>
          <Link to="/contact" className="mt-8 px-8 py-3 bg-mustard text-black rounded-full font-bold shadow hover:bg-yellow-300 transition font-sans">
            Book Your Appointment
          </Link>
        </div>
      </section>
      {/* Bio Section */}
      <section className="max-w-screen-lg mx-auto px-4 py-16 flex flex-col md:flex-row gap-12 items-center">
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