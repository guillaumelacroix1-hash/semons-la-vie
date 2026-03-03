import React from 'react';
import { Sparkles } from 'lucide-react';
import './ServicePage.css';

const Naturopathy = () => {
    return (
        <div className="service-page animate-in">
            <div className="container">
                <div className="service-page-header">
                    <div className="title-badge yellow">
                        <Sparkles size={20} /> Naturopathie
                    </div>
                </div>

                <div className="pricing-list">
                    <div className="pricing-item">
                        <div className="pricing-item-info">
                            <h3 className="pricing-item-title">Parcours de base</h3>
                            <p className="pricing-item-desc">
                                Comprend deux rendez-vous pour poser les bases de ton accompagnement personnalisé :
                                un bilan global de vitalité (1h30) pour analyser tes habitudes de vie et évaluer ta vitalité,
                                puis une séance de restitution & de conseils personnalisés (1h) pour découvrir ton plan d'action naturopathique.
                            </p>
                        </div>
                        <span className="price-tag">140€</span>
                    </div>

                    <div className="pricing-item">
                        <div className="pricing-item-info">
                            <h3 className="pricing-item-title">Séances de suivi (1h)</h3>
                            <p className="pricing-item-desc">
                                Point d'étape pour ajuster ton programme et renforcer tes nouvelles habitudes.
                            </p>
                        </div>
                        <span className="price-tag">60€</span>
                    </div>
                </div>

                <div className="packs-grid">
                    <div className="pack-card">
                        <h4 className="pack-card-title">Pack Harmonie</h4>
                        <p className="pack-card-subtitle">Pour amorcer le changement et retrouver ton équilibre intérieur.</p>
                        <ul>
                            <li>• Parcours de base</li>
                            <li>• 1 séance de suivi</li>
                        </ul>
                        <div className="pack-card-price">
                            <span className="price-tag"><span className="old">200€</span> 180€</span>
                        </div>
                    </div>

                    <div className="pack-card">
                        <h4 className="pack-card-title">Pack Renaissance</h4>
                        <p className="pack-card-subtitle">Pour consolider tes nouvelles habitudes et régénérer ton énergie.</p>
                        <ul>
                            <li>• Parcours de base</li>
                            <li>• 2 séances de suivi</li>
                        </ul>
                        <div className="pack-card-price">
                            <span className="price-tag"><span className="old">260€</span> 230€</span>
                        </div>
                    </div>

                    <div className="pack-card">
                        <h4 className="pack-card-title">Pack Éclat</h4>
                        <p className="pack-card-subtitle">Pour aller plus loin et révéler ton plein potentiel de bien-être.</p>
                        <ul>
                            <li>• Parcours de base</li>
                            <li>• 3 séances de suivi</li>
                            <li>• Bonus : 1 Massage Aromatouch des mains (15mn)</li>
                            <li>• 1 échantillon d'huile essentielle dōTerra au choix</li>
                        </ul>
                        <div className="pack-card-price">
                            <span className="price-tag"><span className="old">320€</span> 290€</span>
                        </div>
                    </div>
                </div>

                <div className="pricing-list">
                    <div className="pricing-item">
                        <div className="pricing-item-info">
                            <h3 className="pricing-item-title">Rééquilibrage alimentaire (1h)</h3>
                            <p className="pricing-item-desc">
                                Un accompagnement personnalisé pour repenser ton alimentation et adopter de
                                nouvelles habitudes favorisant vitalité, légèreté et bien-être au quotidien.
                            </p>
                        </div>
                        <span className="price-tag">60€</span>
                    </div>

                    <div className="pricing-item">
                        <div className="pricing-item-info">
                            <h3 className="pricing-item-title">Phytothérapie (1h)</h3>
                            <p className="pricing-item-desc">
                                Un protocole sur-mesure à base d'huiles essentielles, bourgeons et fleurs de Bach,
                                pour apaiser les émotions, soutenir le corps et rétablir l'équilibre intérieur.
                            </p>
                        </div>
                        <span className="price-tag">60€</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Naturopathy;
