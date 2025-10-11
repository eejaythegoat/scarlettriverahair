import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Bridal from './pages/Bridal';
import Gallery from './pages/Gallery';
import SocialBlog from './pages/SocialBlog';
import Contact from './pages/Contact';

// Initialize Google Analytics once (outside component)
ReactGA.initialize('G-QFQYGV9ZYJ');

// Create a wrapper to track route changes
function GAListener({ children }) {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return children;
}

function App() {
  return (
    <HashRouter>
      <GAListener>
        <CustomNavbar />
        <div className="container my-4" style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/bridal" element={<Bridal />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/social-blog" element={<SocialBlog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </GAListener>
    </HashRouter>
  );
}

export default App;