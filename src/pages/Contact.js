import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center py-24">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Book an Appointment</h1>
        <p className="text-gray-600 mb-8 text-center">
          Ready to look and feel your best? Fill out the form below or email <a className="text-blue-600 underline" href="mailto:scarlettriverahair@gmail.com">scarlettriverahair@gmail.com</a>
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-neutral-100 rounded-lg px-4 py-3 border border-neutral-200 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-neutral-100 rounded-lg px-4 py-3 border border-neutral-200 focus:outline-none"
            required
          />
          <textarea
            placeholder="How can Scarlett help you?"
            className="bg-neutral-100 rounded-lg px-4 py-3 border border-neutral-200 focus:outline-none min-h-[100px]"
            required
          />
          <button
            type="submit"
            className="bg-black text-white rounded-full px-6 py-3 font-semibold hover:bg-gray-900 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}