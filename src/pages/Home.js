import React from "react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Scarlett Rivera Hair</title>
        <meta name="description" content="Hair Stylist / Bridal Artist / Hair Extensionist in Wheaton, IL" />
      </Helmet>
      {/* Hero */}
      <section className="w-full py-20 bg-gradient-to-b from-mustard/40 via-white to-white">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center">
          <h1 className="cursive text-6xl md:text-7xl text-center font-bold text-gray-900 mb-4 drop-shadow">
            Scarlett Rivera Hair
          </h1>
          <p className="text-2xl font-semibold text-mustard text-center">
            Hair Stylist / Bridal Artist / Hair Extensionist
          </p>
        </div>
      </section>
      {/* Bio Card */}
      <section className="max-w-screen-lg mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 items-center">
        <img
          src={process.env.PUBLIC_URL + "/images/scarlett-bio.jpeg"}
          alt="Scarlett Rivera"
          className="w-40 h-40 rounded-full object-cover border-4 border-mustard shadow-lg"
        />
        <div className="bg-white rounded-2xl shadow-xl p-8 flex-1">
          <h2 className="text-3xl font-bold mb-3">Meet Scarlett</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            From styling Barbies to transforming real-life hair, Scarlett’s passion for beauty has always run deep. With over 12 years in the industry, she specializes in precision cuts, extensions, smoothing treatments, and beautiful bridal hair—whether it's soft, romantic waves or an elegant updo. Scarlett’s goal is to make you look and feel your absolute best—while sharing stories and laughter along the way. When she’s not behind the chair, you’ll find her exploring new restaurants, perfecting her Pilates practice, enjoying a long scenic walk, or sippin’ a nice espresso martini. Life’s too short not to savor the moments!
          </p>
        </div>
      </section>
    </>
  );
}