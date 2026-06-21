import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import Telemedicine from './pages/Telemedicine';
import EHealth from './pages/eHealth';
import ELearning from './pages/ELearning';
import CaseStudies from './pages/CaseStudies';
import MediaPages from './pages/MediaPages';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Support from './pages/Support';

// Scroll to Top helper component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Header Navigation */}
      <Navbar />

      {/* Main Pages Switchboard */}
      <main class="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/telemedicine" element={<Telemedicine />} />
          <Route path="/home-care" element={<EHealth />} />
          <Route path="/home_care" element={<EHealth />} />
          
          {/* eLearning Routing */}
          <Route path="/elearning" element={<ELearning />} />
          <Route path="/elearning/overview" element={<ELearning />} />
          <Route path="/elearning/rural-education" element={<ELearning />} />
          <Route path="/elearning/technical-education" element={<ELearning />} />
          <Route path="/elearning/medical-education" element={<ELearning />} />

          {/* Case Studies Routing */}
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/meditac-nasa" element={<CaseStudies />} />
          <Route path="/case-studies/isro-telemedicine-network" element={<CaseStudies />} />
          <Route path="/case-studies/pan-africa-initiative" element={<CaseStudies />} />
          <Route path="/case-studies/rural-education-kscst-iisc" element={<CaseStudies />} />
          <Route path="/case-studies/arizona-telemedicine-project" element={<CaseStudies />} />
          <Route path="/case-studies/real-time-ambulance-monitoring-in-japan" element={<CaseStudies />} />
          <Route path="/case-studies/homecare-on-cable-set-top-boxes-in-texas" element={<CaseStudies />} />

          {/* Media Routing */}
          <Route path="/media/video" element={<MediaPages />} />
          <Route path="/media/in-news" element={<MediaPages />} />
          <Route path="/media/testimonial" element={<MediaPages />} />
          <Route path="/media/image-gallery" element={<MediaPages />} />

          {/* Informational Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />

          {/* Redirect / Fallback Route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer Navigation */}
      <Footer />
    </Router>
  );
}
