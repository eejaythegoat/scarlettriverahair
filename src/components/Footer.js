import { FaInstagram, FaTiktok, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full pt-12 pb-6 bg-white text-center border-t border-neutral-200 mt-16">
      <div className="flex justify-center gap-6 mb-6">
        <a href="https://www.instagram.com/scarlettriverahair/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="w-7 h-7 text-gray-700 hover:text-mustard transition" />
        </a>
        <a href="https://www.tiktok.com/@scarlettscissorhands" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <FaTiktok className="w-7 h-7 text-gray-700 hover:text-mustard transition" />
        </a>
        <a href="https://www.facebook.com/p/Scarlett-Rivera-Hair-61577646897809/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook className="w-7 h-7 text-gray-700 hover:text-mustard transition" />
        </a>
        <a href="https://www.linkedin.com/in/scarlett-rivera-05a650101/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="w-7 h-7 text-gray-700 hover:text-mustard transition" />
        </a>
      </div>
      <a
        href="https://nurootssalonanddayspa.com/book-online/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-1 px-7 py-3 rounded-full font-bold bg-mustard text-black shadow hover:bg-yellow-300 transition"
      >
        Book an Appointment
      </a>
      <div className="text-xs text-gray-500 mt-2">
        &copy; {new Date().getFullYear()} Scarlett Rivera Hair. All rights reserved.
      </div>
    </footer>
  );
}