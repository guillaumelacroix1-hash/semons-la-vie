import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80&fit=crop">
                    <source src="https://videos.pexels.com/video-files/4829553/4829553-hd_1920_1080_25fps.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="hero-overlay">
                <div className="hero-card animate-in">
                    <img
                        src="https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2025/10/icon-semons-la-vie.svg"
                        alt=""
                        className="hero-icon"
                    />
                    <h1 className="hero-title">
                        Naturopathe &<br />Sophrologue
                    </h1>
                    <p className="hero-text">
                        À travers la respiration, la détente et une hygiène de vie consciente,
                        je t'aide à retrouver l'harmonie entre ton corps et ton esprit. Mon approche,
                        à la fois douce et profonde, sème les graines d'un équilibre durable, pour que
                        tu cultives jour après jour sérénité, confiance et vitalité.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/#about" className="btn-primary">À propos de moi</Link>
                        <a href="#" className="btn-outline">Réserver une séance</a>
                    </div>
                </div>
            </div>

            <div className="hero-trust">
                <div className="hero-stars">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="white" color="white" />
                    ))}
                </div>
                <span className="hero-trust-text">Praticienne certifiée en naturopathie et sophrologie</span>
            </div>
        </section>
    );
};

export default Hero;
