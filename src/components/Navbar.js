import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="cursive text-2xl font-bold text-gray-900 tracking-tight">
          Scarlett Rivera Hair
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/services" className={`hover:text-mustard font-medium transition ${location.pathname === "/services" ? "text-mustard" : "text-neutral-700"}`}>Services</Link>
          <Link to="/bridal" className={`hover:text-mustard font-medium transition ${location.pathname === "/bridal" ? "text-mustard" : "text-neutral-700"}`}>Bridal</Link>
          <Link to="/contact" className={`hover:text-mustard font-medium transition ${location.pathname === "/contact" ? "text-mustard" : "text-neutral-700"}`}>Contact</Link>
        </div>
      </nav>
    </header>
  );
}