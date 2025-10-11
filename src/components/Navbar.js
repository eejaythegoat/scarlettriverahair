import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur border-b border-neutral-100 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="font-extrabold text-xl tracking-tight text-black">Scarlett Rivera Hair</Link>
        <div className="flex gap-6 text-base font-medium">
          <Link to="/services" className="hover:text-black text-neutral-600 transition">Services</Link>
          <Link to="/bridal" className="hover:text-black text-neutral-600 transition">Bridal</Link>
          <Link to="/contact" className="hover:text-black text-neutral-600 transition">Contact</Link>
        </div>
      </nav>
    </header>
  );
}