import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Scarlett Rivera | Contact</title>
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center py-24 bg-neutral-50 dark:bg-neutral-900">
        <div className="bg-white dark:bg-neutral-950 rounded-2xl shadow-xl p-10 max-w-lg w-full">
          <h1 className="text-3xl font-bold mb-4 text-center">Send an Inquiry</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
            Have a question about services, bridal hair, or anything else? Fill out the form below or email{" "}
            <a className="text-mustard underline" href="mailto:scarlettriverahair@gmail.com">
              scarlettriverahair@gmail.com
            </a>
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-neutral-100 dark:bg-neutral-800 rounded-lg px-4 py-3 border border-neutral-200 dark:border-neutral-700 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-neutral-100 dark:bg-neutral-800 rounded-lg px-4 py-3 border border-neutral-200 dark:border-neutral-700 focus:outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              className="bg-neutral-100 dark:bg-neutral-800 rounded-lg px-4 py-3 border border-neutral-200 dark:border-neutral-700 focus:outline-none min-h-[100px]"
              required
            />
            <button
              type="submit"
              className="bg-mustard text-black rounded-full px-6 py-3 font-semibold hover:bg-yellow-300 transition"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </>
  );
}