import React from 'react';
import { Sparkles } from 'lucide-react';
import './ServicePage.css';

const Culinary = () => {
    return (
        <div className="service-page animate-in">
            <div className="container">
                <div className="service-page-header">
                    <div className="title-badge green">
                        <Sparkles size={20} /> Ateliers Culinaires
                    </div>
                    <p style={{ fontStyle: 'italic', color: 'var(--color-primary)', marginTop: '-1rem', marginBottom: '2rem' }}>
                        100% végétal, cru et bio
                    </p>
                </div>

                <div className="pricing-list">
                    <div className="pricing-item">
                        <div className="pricing-item-info">
                            <h3 className="pricing-item-title">Les Rendez-vous Crusine (2h)</h3>
                            <p className="pricing-item-desc">
                                Chaque mois, découvre une nouvelle thématique gourmande et vitalisante, pour
                                cuisiner autrement tout en partageant un moment convivial et inspirant.
                            </p>
                        </div>
                        <span className="price-tag">65€</span>
                    </div>

                    <div className="pricing-item">
                        <div className="pricing-item-info">
                            <h3 className="pricing-item-title">Crusine chez Toi !</h3>
                            <p className="pricing-item-desc">
                                Un atelier privé et sur-mesure à domicile, pensé selon tes goûts et tes objectifs.
                                Parfait pour un moment unique entre amis ou en famille.
                            </p>
                        </div>
                        <span className="price-tag">Tarif sur devis</span>
                    </div>
                </div>

                <div className="packs-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    <div className="pack-card" style={{ borderTopColor: '#7AA476' }}>
                        <h4 className="pack-card-title" style={{ color: '#7AA476' }}>Parcours Gourmand</h4>
                        <p className="pack-card-subtitle" style={{ color: '#7AA476' }}>(pack 3 ateliers)</p>
                    </div>
                    <div className="pack-card" style={{ borderTopColor: '#7AA476' }}>
                        <p className="pricing-item-desc" style={{ marginBottom: '1.5rem' }}>
                            Un vrai voyage culinaire ! Progresse pas à pas, explore trois thématiques différentes
                            et deviens autonome en crusine, dans la joie et la simplicité.
                        </p>
                        <div className="pack-card-price">
                            <span className="price-tag"><span className="old">195€</span> 180€</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Culinary;
