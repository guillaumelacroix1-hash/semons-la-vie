import React from 'react';
import ServiceSidebar from '../components/ServiceSidebar';
import './ServicePage.css';

const NutritionalBalance = () => {
    return (
        <div className="service-page animate-in">
            {/* Hero Banner */}
            <div className="service-hero-banner">
                <div className="service-hero-banner-bg">
                    <img
                        src="https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2022/08/semons-la-vie-cuisine-vivante.jpg"
                        alt="Rééquilibrage alimentaire"
                    />
                </div>
                <div className="service-hero-banner-content">
                    <h1>Rééquilibrage alimentaire</h1>
                    <p className="hero-subtitle">
                        Retrouver une alimentation vivante, adaptée à ton corps et à ton rythme.
                    </p>
                    <p className="hero-desc">
                        Nous explorons ensemble une hygiène alimentaire simple, naturelle et consciente,
                        fondée sur les principes de dissociation alimentaire, de saisonnalité et de respect
                        de la digestion. L'objectif : soulager ton système digestif, relancer ton énergie
                        et retrouver le plaisir de manger en conscience.
                    </p>
                    <div className="service-hero-meta-row">
                        <span className="service-meta-tag">Visio ou présentiel</span>
                    </div>
                    <a href="#" className="btn-primary">Prendre RDV</a>
                </div>
            </div>

            {/* Two-column layout */}
            <div className="service-layout">
                <ServiceSidebar active="Rééquilibrage alimentaire" />

                <div className="service-content">
                    <div className="service-content-section">
                        <h2>Une alimentation consciente et adaptée</h2>
                        <p>
                            Nous explorons ensemble une hygiène alimentaire simple, naturelle et consciente,
                            fondée sur les principes de dissociation alimentaire, de saisonnalité et de respect
                            de la digestion.
                        </p>
                        <p>
                            L'objectif : soulager ton système digestif, relancer ton énergie
                            et retrouver le plaisir de manger en conscience.
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

export default NutritionalBalance;
