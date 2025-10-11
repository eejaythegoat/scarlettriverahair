import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-white text-center border-t mt-16">
      <div className="flex justify-center gap-6 mb-2">
        <a href="https://www.instagram.com/scarlettriverahair/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg className="w-6 h-6 text-gray-700 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm8.25 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7.25A4.75 4.75 0 1 0 12 16.75a4.75 4.75 0 0 0 0-9.5zm0 1.5a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5z"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/p/Scarlett-Rivera-Hair-61577646897809/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg className="w-6 h-6 text-gray-700 hover:text-black transition" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5V12h3.642l.358-4H14V5c0-1.084.916-2 2-2h2V0h-2c-2.757 0-5 2.243-5 5v3H9z"/>
          </svg>
        </a>
        {/* Add more socials as needed */}
      </div>
      <div className="text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Scarlett Rivera Hair. All rights reserved.
      </div>
    </footer>
  );
}