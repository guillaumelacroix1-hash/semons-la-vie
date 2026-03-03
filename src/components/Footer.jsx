import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-logo">
                        <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Semons la Vie" />
                    </div>
                    <div className="footer-col">
                        <h4>Adresse</h4>
                        <p>Espace Honnebee<br />35, rue des Vauzelles<br />16100 Châteaubernard</p>
                    </div>
                    <div className="footer-col">
                        <h4>Horaires</h4>
                        <p>Lundi – Vendredi: 9h – 18h<br />Samedi: 9h – 12h</p>
                    </div>
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <p>
                            <a href="tel:0661493586"><Phone size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />06.61.49.35.86</a><br />
                            <a href="mailto:contact@semons-la-vie.fr"><Mail size={14} style={{ marginRight: 6, verticalAlign: 'middle' }} />contact@semons-la-vie.fr</a>
                        </p>
                        <div className="footer-socials">
                            <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    © {new Date().getFullYear()} Semons la Vie — Chloé Wisser. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
