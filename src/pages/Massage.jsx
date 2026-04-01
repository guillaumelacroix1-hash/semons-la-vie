import React from 'react';
import ServiceSidebar from '../components/ServiceSidebar';
import './ServicePage.css';

const Massage = () => {
    return (
        <div className="service-page animate-in">
            {/* Hero Banner */}
            <div className="service-hero-banner">
                <div className="service-hero-banner-bg">
                    <img
                        src="https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2025/11/blurred-green-palm-leaves-on-off-white-background-2025-02-09-23-48-36-utc-1024x1536.jpg"
                        alt="Massage AromaTouch"
                    />
                </div>
                <div className="service-hero-banner-content">
                    <h1>Massage AromaTouch®</h1>
                    <p className="hero-subtitle">
                        Une véritable parenthèse de détente pour harmoniser les énergies et revenir à soi.
                    </p>
                    <p className="hero-desc">
                        Un soin doux et enveloppant réalisé avec des huiles essentielles. Ce massage rééquilibre
                        le système nerveux, soutient l'immunité et favorise un profond relâchement du corps et du mental.
                    </p>
                    <div className="service-hero-meta-row">
                        <span className="service-meta-tag">Visio ou présentiel</span>
                    </div>
                    <a href="#" className="btn-primary">Prendre RDV</a>
                </div>
            </div>

            {/* Two-column layout */}
            <div className="service-layout">
                <ServiceSidebar active="Massage AromaTouch®" />

                <div className="service-content">
                    <div className="service-content-section">
                        <h2>Un massage aux huiles essentielles</h2>
                        <p>
                            Un soin doux et enveloppant réalisé avec des huiles essentielles. Ce massage rééquilibre
                            le système nerveux, soutient l'immunité et favorise un profond relâchement du corps et du mental.
                            Une véritable parenthèse de détente pour harmoniser les énergies et revenir à soi.
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

export default Massage;
