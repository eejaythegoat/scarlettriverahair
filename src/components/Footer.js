import React from "react";

export default function Footer() {
  return (
    <footer className="w-full pt-8 pb-6 bg-white text-center border-t mt-16">
      <div className="flex justify-center gap-6 mb-2">
        <a href="https://www.instagram.com/scarlettriverahair/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          {/* IG SVG */}
          <svg className="w-7 h-7 text-gray-700 hover:text-mustard transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.25 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7.25A4.75 4.75 0 1 0 12 16.75a4.75 4.75 0 0 0 0-9.5zm0 1.5a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5z"/>
          </svg>
        </a>
        <a href="https://www.tiktok.com/@scarlettscissorhands" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          {/* TikTok SVG */}
          <svg className="w-7 h-7 text-gray-700 hover:text-mustard transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.5 2h3a1 1 0 0 1 1 1v10.28a3.72 3.72 0 1 1-1.5-2.98V6.5h-2V2zM9.5 12a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/p/Scarlett-Rivera-Hair-61577646897809/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          {/* Facebook SVG */}
          <svg className="w-7 h-7 text-gray-700 hover:text-mustard transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5V12h3.642l.358-4H14V5c0-1.084.916-2 2-2h2V0h-2c-2.757 0-5 2.243-5 5v3H9z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/scarlett-rivera-05a650101/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          {/* LinkedIn SVG */}
          <svg className="w-7 h-7 text-gray-700 hover:text-mustard transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452H17.21V14.8c0-1.345-.027-3.077-1.877-3.077-1.877 0-2.164 1.463-2.164 2.976v5.753H9.128V9h3.104v1.561h.045c.432-.817 1.488-1.677 3.063-1.677 3.278 0 3.882 2.158 3.882 4.967v6.601zM5.337 7.433a1.81 1.81 0 1 1 0-3.62 1.81 1.81 0 0 1 0 3.62zM7.119 20.452H3.554V9h3.565v11.452z"/>
          </svg>
        </a>
      </div>
      <a
        href="https://nurootssalonanddayspa.com/book-online/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 px-7 py-3 rounded-full font-bold bg-mustard text-black shadow hover:bg-yellow-300 transition"
      >
        Book an Appointment
      </a>
      <div className="text-xs text-gray-500 mt-2">
        &copy; {new Date().getFullYear()} Scarlett Rivera Hair. All rights reserved.
      </div>
    </footer>
  );
}