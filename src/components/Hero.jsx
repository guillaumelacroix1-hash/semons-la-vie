import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const bgRef = useRef(null);

    useEffect(() => {
        const video = bgRef.current;
        if (video) {
            video.play().catch(() => {});
        }

        const handleScroll = () => {
            if (!bgRef.current) return;
            const scrollY = window.scrollY;
            const scale = 1 + scrollY * 0.0003;
            bgRef.current.style.transform = `scale(${Math.min(scale, 1.15)})`;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero">
            <div className="hero-bg">
                <video ref={bgRef} autoPlay muted loop playsInline poster={`${import.meta.env.BASE_URL}hero2-poster.jpg`}>
                    <source src={`${import.meta.env.BASE_URL}hero2.mp4`} type="video/mp4" />
                </video>
            </div>

            <div className="hero-overlay">
                <div className="hero-card animate-in">
                    <img
                        src={`${import.meta.env.BASE_URL}icon-hero.svg`}
                        alt=""
                        className="hero-icon"
                    />
                    <h1 className="hero-title">
                        Naturopathe &<br />Sophrologue
                    </h1>
                    <p className="hero-text">
                        J'accompagne les femmes qui se sentent perdues face à leur santé à retrouver
                        clarté, confiance et autonomie.
                    </p>
                    <p className="hero-text">
                        À travers la respiration, l'écoute du corps et des pratiques concrètes,
                        je t'aide à te reconnecter à toi et à mieux comprendre ce dont tu as besoin.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/qui-suis-je" className="btn-primary">Mon histoire</Link>
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
