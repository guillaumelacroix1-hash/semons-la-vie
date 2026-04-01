import React from 'react';
import ServiceSidebar from '../components/ServiceSidebar';
import './ServicePage.css';

const Sophrology = () => {
    return (
        <div className="service-page animate-in">
            {/* Hero Banner */}
            <div className="service-hero-banner">
                <div className="service-hero-banner-bg">
                    <img
                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
                        alt="Sophrologie"
                    />
                </div>
                <div className="service-hero-banner-content">
                    <h1>Sophrologie</h1>
                    <p className="hero-subtitle">
                        Retrouver calme et stabilité grâce à la respiration, la relaxation et la visualisation positive.
                    </p>
                    <p className="hero-desc">
                        La sophrologie t'invite à te reconnecter à toi-même, pas à pas.
                        Des techniques de respiration et de relaxation pour apprivoiser ton stress,
                        libérer tes tensions et cultiver la sérénité au quotidien.
                    </p>
                    <div className="service-hero-meta-row">
                        <span className="service-meta-tag">Visio ou présentiel</span>
                    </div>
                    <a href="#" className="btn-primary">Prendre RDV</a>
                </div>
            </div>

            {/* Two-column layout */}
            <div className="service-layout">
                <ServiceSidebar active="Sophrologie" />

                <div className="service-content">
                    <div className="service-content-section">
                        <h2>Un espace pour retrouver tes ressources</h2>
                        <p>
                            La sophrologie t'invite à te reconnecter à toi-même, pas à pas.
                            Des techniques de respiration et de relaxation pour apprivoiser ton stress,
                            libérer tes tensions et cultiver la sérénité au quotidien.
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

export default Sophrology;
