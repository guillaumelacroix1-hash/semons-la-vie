import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [naturoSubOpen, setNaturoSubOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setServicesOpen(false);
                setNaturoSubOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const closeAll = () => {
        setMenuOpen(false);
        setServicesOpen(false);
        setNaturoSubOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                <Link to="/" className="nav-logo">
                    <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Semons la Vie" />
                </Link>

                <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={closeAll}>Accueil</Link>

                    <div
                        className={`nav-dropdown ${servicesOpen ? 'open' : ''}`}
                        ref={dropdownRef}
                        onMouseEnter={() => !menuOpen && setServicesOpen(true)}
                        onMouseLeave={() => !menuOpen && (setServicesOpen(false), setNaturoSubOpen(false))}
                    >
                        <button
                            className="nav-dropdown-trigger"
                            onClick={() => setServicesOpen(!servicesOpen)}
                        >
                            Mes Services <span className="dropdown-arrow">›</span>
                        </button>
                        <div className="nav-dropdown-menu">
                            <div
                                className={`nav-dropdown-item has-sub ${naturoSubOpen ? 'open' : ''}`}
                                onMouseEnter={() => !menuOpen && setNaturoSubOpen(true)}
                                onMouseLeave={() => !menuOpen && setNaturoSubOpen(false)}
                            >
                                <Link to="/naturopathie" onClick={closeAll}>
                                    Naturopathie <span className="dropdown-arrow">›</span>
                                </Link>
                                <div className="nav-sub-menu">
                                    <Link to="/phytotherapie" onClick={closeAll}>Phytothérapie</Link>
                                    <Link to="/reequilibrage-alimentaire" onClick={closeAll}>Rééquilibrage alimentaire</Link>
                                </div>
                            </div>
                            <Link to="/sophrologie" onClick={closeAll}>Sophrologie</Link>
                            <Link to="/massage" onClick={closeAll}>Massage AromaTouch®</Link>
                            <Link to="/ateliers-culinaires" onClick={closeAll}>Ateliers culinaires</Link>
                        </div>
                    </div>

                    <Link to="/qui-suis-je" onClick={closeAll}>Qui suis-je ?</Link>
                    <Link to="/ateliers-culinaires" onClick={closeAll}>Ateliers</Link>
                    <Link to="/contact" onClick={closeAll}>Me contacter</Link>
                    <a href="#" className="nav-cta" onClick={closeAll}>Prendre RDV</a>
                </div>

                <div className={`mobile-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
