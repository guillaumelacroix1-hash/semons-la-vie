import React from 'react';
import { Sparkles } from 'lucide-react';
import './ServicePage.css';

const Massage = () => {
    return (
        <div className="service-page animate-in">
            <div className="container">
                <div className="service-page-header" style={{ textAlign: 'right' }}>
                    <div className="title-badge purple">
                        <Sparkles size={20} /> Massage AromaTouch®
                    </div>
                </div>

                <div className="pricing-list">
                    <div className="pricing-item">
                        <div className="pricing-item-info">
                            <h3 className="pricing-item-title">AromaTouch® Équilibre (1h)</h3>
                            <p className="pricing-item-desc">
                                Un massage aux huiles essentielles pour harmoniser corps, cœur & esprit.
                                Un moment de profonde détente pour relâcher le stress et soutenir ton bien-être global.
                            </p>
                        </div>
                        <span className="price-tag">65€</span>
                    </div>
                </div>

                <div className="packs-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    <div className="pack-card" style={{ borderTopColor: 'var(--color-primary)' }}>
                        <h4 className="pack-card-title">AromaTouch® Saisons</h4>
                        <p className="pack-card-subtitle">(pack 4 massages)</p>
                    </div>
                    <div className="pack-card" style={{ borderTopColor: 'var(--color-primary)' }}>
                        <p className="pricing-item-desc" style={{ marginBottom: '1.5rem' }}>
                            Un rituel de 4 massages, à programmer au fil des saisons, pour accompagner
                            ton corps dans ses transitions naturelles. Un rendez-vous bien-être pour
                            renforcer ton immunité et maintenir ton équilibre toute l'année.
                        </p>
                        <div className="pack-card-price">
                            <span className="price-tag"><span className="old">260€</span> 220€</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Massage;
