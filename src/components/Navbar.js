import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ dark, setDark }) {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-neutral-950/90 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="cursive text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
          Scarlett Rivera Hair
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/services" className={`hover:text-mustard font-medium transition ${location.pathname === "/services" ? "text-mustard" : "text-neutral-700 dark:text-neutral-200"}`}>Services</Link>
          <Link to="/bridal" className={`hover:text-mustard font-medium transition ${location.pathname === "/bridal" ? "text-mustard" : "text-neutral-700 dark:text-neutral-200"}`}>Bridal</Link>
          <Link to="/contact" className={`hover:text-mustard font-medium transition ${location.pathname === "/contact" ? "text-mustard" : "text-neutral-700 dark:text-neutral-200"}`}>Contact</Link>
          {/* Light/Dark Toggle */}
          <button
            aria-label="Toggle color mode"
            onClick={() => setDark((d) => !d)}
            className="ml-4 text-xl focus:outline-none"
          >
            {dark ? (
              <span role="img" aria-label="Sun" className="text-mustard">🌞</span>
            ) : (
              <span role="img" aria-label="Moon">🌜</span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}