import React from 'react';
import ServiceSidebar from '../components/ServiceSidebar';
import './ServicePage.css';

const Culinary = () => {
    return (
        <div className="service-page animate-in">
            {/* Hero Banner */}
            <div className="service-hero-banner">
                <div className="service-hero-banner-bg">
                    <img
                        src="https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2022/08/semons-la-vie-cuisine-vivante-2.jpg"
                        alt="Ateliers culinaires"
                    />
                </div>
                <div className="service-hero-banner-content">
                    <h1>Ateliers culinaires</h1>
                    <p className="hero-subtitle">
                        Cuisiner vivant, coloré et conscient.
                    </p>
                    <p className="hero-desc">
                        Les ateliers de crusine sont des moments de partage et d'apprentissage autour de la
                        cuisine végétale et crue. Tu y découvres comment allier plaisir, vitalité et respect
                        de ton corps à travers des recettes simples, gourmandes et digestes. Un temps joyeux
                        pour nourrir le corps… et la joie de vivre !
                    </p>
                    <div className="service-hero-meta-row">
                        <span className="service-meta-tag">Visio ou présentiel</span>
                    </div>
                    <a href="#" className="btn-primary">Prendre RDV</a>
                </div>
            </div>

            {/* Two-column layout */}
            <div className="service-layout">
                <ServiceSidebar active="Ateliers culinaires" />

                <div className="service-content">
                    <div className="service-content-section">
                        <h2>La crusine, c'est quoi ?</h2>
                        <p>
                            Les ateliers de crusine sont des moments de partage et d'apprentissage autour de la
                            cuisine végétale et crue. Tu y découvres comment allier plaisir, vitalité et respect
                            de ton corps à travers des recettes simples, gourmandes et digestes.
                        </p>
                        <p>
                            Un temps joyeux pour nourrir le corps… et la joie de vivre !
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

export default Culinary;
