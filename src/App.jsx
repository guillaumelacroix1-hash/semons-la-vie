import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
