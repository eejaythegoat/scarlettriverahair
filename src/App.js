import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Bridal from "./pages/Bridal";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery"; // <-- Add this import

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow bg-neutral-50 transition-colors duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/bridal" element={<Bridal />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} /> {/* <-- Add this route */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;