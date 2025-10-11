import React from "react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Scarlett Rivera Hair</title>
        <meta name="description" content="Hair Stylist / Bridal Artist / Hair Extensionist in Wheaton, IL" />
      </Helmet>
      <section className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-mustard via-white to-white dark:from-yellow-700 dark:via-neutral-900 dark:to-neutral-950 py-16">
        <h1 className="cursive text-6xl md:text-7xl text-center font-bold text-gray-900 dark:text-white drop-shadow mb-4">
          Scarlett Rivera Hair
        </h1>
        <p className="text-xl md:text-2xl font-medium text-center text-gray-700 dark:text-mustard">
          Hair Stylist / Bridal Artist / Hair Extensionist
        </p>
      </section>
      {/* About, etc... */}
    </>
  );
}