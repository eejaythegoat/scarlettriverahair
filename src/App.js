import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Bridal from "./pages/Bridal";
import Contact from "./pages/Contact";

function App() {
  const [dark, setDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <HelmetProvider>
      <Router>
        <div className={`${dark ? "dark" : ""} min-h-screen flex flex-col`}>
          <Navbar dark={dark} setDark={setDark} />
          <main className="flex-grow bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/bridal" element={<Bridal />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
export default App;