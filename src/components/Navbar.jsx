import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                <Link to="/" className="nav-logo">
                    <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Semons la Vie" />
                </Link>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
                    <Link to="/naturopathie" onClick={() => setMenuOpen(false)}>Mes Services</Link>
                    <Link to="/#about" onClick={() => setMenuOpen(false)}>Qui suis-je ?</Link>
                    <Link to="/ateliers-culinaires" onClick={() => setMenuOpen(false)}>Ateliers</Link>
                    <a href="mailto:contact@semons-la-vie.fr" onClick={() => setMenuOpen(false)}>Me contacter</a>
                    <a href="#" className="nav-cta" onClick={() => setMenuOpen(false)}>Prendre RDV</a>
                </div>

                <div className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
