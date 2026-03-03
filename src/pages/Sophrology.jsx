import React from 'react';
import { Sparkles } from 'lucide-react';
import './ServicePage.css';

const Sophrology = () => {
    return (
        <div className="service-page animate-in">
            <div className="container">
                <div className="service-page-header" style={{ textAlign: 'right' }}>
                    <div className="title-badge pink">
                        <Sparkles size={20} /> Sophrologie
                    </div>
                </div>

                <div className="pricing-list">
                    <div className="pricing-item">
                        <div className="pricing-item-info">
                            <h3 className="pricing-item-title">Séance découverte et objectif (1h30)</h3>
                            <p className="pricing-item-desc">
                                Anamnèse, définition de ton objectif et séance de découverte pour amorcer ton accompagnement en douceur.
                            </p>
                        </div>
                        <span className="price-tag">80€</span>
                    </div>

                    <div className="pricing-item">
                        <div className="pricing-item-info">
                            <h3 className="pricing-item-title">Séances de suivi (1h)</h3>
                            <p className="pricing-item-desc">
                                Pratiques progressives pour t'aider à atteindre ton objectif et renforcer ton équilibre intérieur.
                            </p>
                        </div>
                        <span className="price-tag">60€</span>
                    </div>
                </div>

                <div className="packs-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                    <div className="pack-card" style={{ borderTopColor: '#E8C8D8' }}>
                        <h4 className="pack-card-title" style={{ color: '#C17898' }}>Pack Éveil</h4>
                        <p className="pack-card-subtitle" style={{ color: '#C17898' }}>
                            Un accompagnement complet et personnalisé pour retrouver sérénité, confiance et harmonie.
                        </p>
                        <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                            Un accompagnement de sophrologie comprend généralement entre 8 et 12 séances pour une évolution durable et profonde.
                        </p>
                    </div>
                    <div className="pack-card" style={{ borderTopColor: '#E8C8D8' }}>
                        <ul>
                            <li>• 1 Séance Découverte & Objectif</li>
                            <li>• 8 Séances de suivi</li>
                            <li>• Inclus à chaque séance :</li>
                            <li style={{ paddingLeft: '1rem' }}>◦ Audio de la pratique</li>
                            <li style={{ paddingLeft: '1rem' }}>◦ Fiches détaillées des exercices</li>
                            <li>• Bonus offert :</li>
                            <li style={{ paddingLeft: '1rem' }}>◦ Livret "Mon cahier des sensations et des émotions"</li>
                        </ul>
                        <div className="pack-card-price" style={{ marginTop: '1.5rem' }}>
                            <span className="price-tag">À partir de 500€</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sophrology;
