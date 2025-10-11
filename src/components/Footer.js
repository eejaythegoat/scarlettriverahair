import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-white dark:bg-neutral-950 text-center border-t border-neutral-200 dark:border-neutral-800 mt-16">
      <div className="flex justify-center gap-6 mb-2">
        <a href="https://www.instagram.com/scarlettriverahair/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          {/* Instagram SVG */}
        </a>
        <a href="https://www.tiktok.com/@scarlettscissorhands" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          {/* TikTok SVG */}
        </a>
        <a href="https://www.facebook.com/p/Scarlett-Rivera-Hair-61577646897809/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          {/* Facebook SVG */}
        </a>
        <a href="https://www.linkedin.com/in/scarlett-rivera-05a650101/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          {/* LinkedIn SVG */}
        </a>
      </div>
      <a
        href="https://nurootssalonanddayspa.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 px-6 py-2 rounded-full font-semibold bg-mustard text-black shadow hover:bg-yellow-300 transition"
      >
        Book an Appointment
      </a>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        &copy; {new Date().getFullYear()} Scarlett Rivera Hair. All rights reserved.
      </div>
    </footer>
  );
}