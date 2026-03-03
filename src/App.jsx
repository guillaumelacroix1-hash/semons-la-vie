import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Naturopathy from './pages/Naturopathy';
import Sophrology from './pages/Sophrology';
import Culinary from './pages/Culinary';
import Massage from './pages/Massage';

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
