import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServiceSidebar from '../components/ServiceSidebar';
import './ServicePage.css';

const Naturopathy = () => {
    return (
        <div className="service-page animate-in">
            {/* Hero Banner */}
            <div className="service-hero-banner">
                <div className="service-hero-banner-bg">
                    <img
                        src="https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2022/03/AdobeStock_285278270-scaled.jpeg"
                        alt="Naturopathie"
                    />
                </div>
                <div className="service-hero-banner-content">
                    <h1>Naturopathie</h1>
                    <p className="hero-subtitle">
                        Comprendre le langage du corps et lui offrir les conditions pour retrouver son équilibre naturel.
                    </p>
                    <p className="hero-desc">
                        La naturopathie soutient les fonctions vitales et aide à identifier les causes profondes
                        des déséquilibres (digestion, fatigue, stress, sommeil…). Chaque séance est personnalisée
                        pour t'accompagner vers plus d'énergie, de clarté et de vitalité.
                    </p>
                    <div className="service-hero-meta-row">
                        <span className="service-meta-tag">Visio ou présentiel</span>
                    </div>
                    <a href="#" className="btn-primary">Prendre RDV</a>
                </div>
            </div>

            {/* Two-column layout */}
            <div className="service-layout">
                <ServiceSidebar active="Naturopathie" />

                <div className="service-content">
                    <div className="service-content-section">
                        <h2>Un accompagnement global et personnalisé</h2>
                        <p>
                            La naturopathie soutient les fonctions vitales et aide à identifier les causes profondes
                            des déséquilibres (digestion, fatigue, stress, sommeil…). Chaque séance est personnalisée
                            pour t'accompagner vers plus d'énergie, de clarté et de vitalité.
                        </p>
                        <p>
                            En naturopathie, nous explorons ensemble tes habitudes alimentaires, ton sommeil,
                            ta gestion du stress et ta vitalité pour élaborer un plan d'action concret et adapté
                            à tes besoins.
                        </p>
                    </div>

                    <div className="service-reserve">
                        <h2>Réserver une séance</h2>
                        <a href="#" className="btn-primary">Prendre RDV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Naturopathy;
