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

      {/* Hero */}
      <section className="w-full py-20 bg-neutral-50 border-b border-neutral-200 relative overflow-hidden">
        {/* Decorative SVG pattern */}
        <svg className="absolute top-0 left-0 w-full h-32 text-mustard/10 pointer-events-none" viewBox="0 0 1440 320" fill="none">
          <path fill="currentColor" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,170.7C672,171,768,117,864,128C960,139,1056,213,1152,245.3C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        <div className="relative max-w-screen-lg mx-auto flex flex-col items-center z-10">
          <h1 className="cursive text-6xl md:text-7xl text-center font-bold text-gray-900 mb-3">
            Scarlett Rivera Hair
          </h1>
          <span className="block w-32 h-2 rounded-full bg-mustard mb-4"></span>
          <p className="text-2xl font-semibold text-mustard text-center tracking-wide">
            Hair Stylist / Bridal Artist / Hair Extensionist
          </p>
          <Link to="/contact" className="mt-8 px-8 py-3 bg-mustard text-black rounded-full font-bold shadow hover:bg-yellow-300 transition">
            Book Your Appointment
          </Link>
        </div>
      </section>

      {/* Bio Section */}
      <section className="max-w-screen-lg mx-auto px-4 py-16 flex flex-col md:flex-row gap-12 items-center">
        <img
          src="/images/scarlett-bio.jpeg"
          alt="Scarlett Rivera"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-mustard shadow-xl bg-white"
        />
        <div className="bg-white rounded-2xl shadow-xl p-8 flex-1">
          <h2 className="text-3xl font-bold mb-3">Meet Scarlett</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            From styling Barbies to transforming real-life hair, Scarlett’s passion for beauty has always run deep. With over 12 years in the industry, she specializes in precision cuts, extensions, smoothing treatments, and beautiful bridal hair—whether it's soft, romantic waves or an elegant updo. Scarlett’s goal is to make you look and feel your absolute best—while sharing stories and laughter along the way. When she’s not behind the chair, you’ll find her exploring new restaurants, perfecting her Pilates practice, enjoying a long scenic walk, or sippin’ a nice espresso martini. Life’s too short not to savor the moments!
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-white py-14 border-t border-b border-neutral-200">
        <div className="max-w-screen-lg mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Scarlett?</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex-1">
              <div className="text-mustard text-5xl mb-2">💇‍♀️</div>
              <h4 className="font-semibold mb-1">Expertise</h4>
              <p className="text-gray-600">12+ years of passion and precision in hair artistry.</p>
            </div>
            <div className="flex-1">
              <div className="text-mustard text-5xl mb-2">🌻</div>
              <h4 className="font-semibold mb-1">Personal Touch</h4>
              <p className="text-gray-600">Every appointment is a personalized, uplifting experience.</p>
            </div>
            <div className="flex-1">
              <div className="text-mustard text-5xl mb-2">💍</div>
              <h4 className="font-semibold mb-1">Bridal Specialist</h4>
              <p className="text-gray-600">From soft waves to elegant updos, your dream look awaits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-neutral-50 py-12">
        <div className="max-w-screen-md mx-auto flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4 text-mustard text-center">What Clients Are Saying</h3>
          <blockquote className="italic text-lg text-gray-700 mb-4 text-center">
            “Scarlett is a true artist! My hair has never looked better and I felt so beautiful on my wedding day.”
          </blockquote>
          <span className="text-sm text-gray-500">— Maddy S.</span>
        </div>
      </section>
    </>
  );
}