import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Naturopathy from './pages/Naturopathy';
import Sophrology from './pages/Sophrology';
import Culinary from './pages/Culinary';
import Massage from './pages/Massage';
import About from './pages/About';
import Phytotherapy from './pages/Phytotherapy';
import NutritionalBalance from './pages/NutritionalBalance';
import Contact from './pages/Contact';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function ScrollRevealInit() {
  const location = useLocation();
  useEffect(() => {
    // Simple reveals
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    // Stagger containers — children animate one after another
    const staggerContainers = document.querySelectorAll('.reveal-stagger');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((child, i) => {
              child.style.transitionDelay = `${i * 0.12}s`;
              child.classList.add('revealed');
            });
            staggerObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    staggerContainers.forEach((el) => staggerObserver.observe(el));

    return () => {
      observer.disconnect();
      staggerObserver.disconnect();
    };
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <ScrollRevealInit />
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/naturopathie" element={<Naturopathy />} />
            <Route path="/sophrologie" element={<Sophrology />} />
            <Route path="/ateliers-culinaires" element={<Culinary />} />
            <Route path="/massage" element={<Massage />} />
            <Route path="/qui-suis-je" element={<About />} />
            <Route path="/phytotherapie" element={<Phytotherapy />} />
            <Route path="/reequilibrage-alimentaire" element={<NutritionalBalance />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/evenements" element={<Events />} />
            <Route path="/evenements/:id" element={<EventDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
