import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const PreFooter = () => {
    return (
        <>
            {/* Événements */}
            <section className="workshops-section" id="ateliers">
                <div className="container">
                    <div className="services-header">
                        <div>
                            <span className="section-label">Prochains événements</span>
                            <h2 className="section-title">Ateliers & événements</h2>
                        </div>
                        <div className="services-header-right">
                            <Link to="/evenements" className="btn-outline">Tous les événements <ArrowRight size={16} /></Link>
                        </div>
                    </div>

                    <div className="workshops-grid">
                        <div className="workshop-card">
                            <img
                                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop"
                                alt="Atelier petit-déjeuner"
                                className="workshop-img"
                            />
                            <div className="workshop-body">
                                <span className="workshop-tag green">Crusine</span>
                                <h4>Petit-déjeuner vitalité</h4>
                                <p>Démarre ta journée avec énergie grâce à des recettes crues, simples et délicieuses.</p>
                                <div className="workshop-meta">
                                    <span className="workshop-price">65€</span>
                                    <Link to="/evenements/petit-dejeuner-vitalite" className="workshop-link">S'inscrire <ArrowRight size={14} /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="workshop-card">
                            <img
                                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop"
                                alt="Week-end jeûne"
                                className="workshop-img"
                            />
                            <div className="workshop-body">
                                <span className="workshop-tag purple">Bien-être</span>
                                <h4>Week-end de jeûne</h4>
                                <p>Un week-end pour se ressourcer, ralentir et offrir à ton corps une pause régénérante en pleine nature.</p>
                                <div className="workshop-meta">
                                    <span className="workshop-price">190€</span>
                                    <Link to="/evenements/weekend-jeune" className="workshop-link">S'inscrire <ArrowRight size={14} /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="workshop-card">
                            <img
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop"
                                alt="Journée bien-être"
                                className="workshop-img"
                            />
                            <div className="workshop-body">
                                <span className="workshop-tag sage">Santé</span>
                                <h4>Journée santé & vitalité</h4>
                                <p>Une journée complète pour explorer la naturopathie, la sophrologie et repartir avec des outils concrets.</p>
                                <div className="workshop-meta">
                                    <span className="workshop-price">95€</span>
                                    <Link to="/evenements/journee-sante-vitalite" className="workshop-link">S'inscrire <ArrowRight size={14} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote / CTA Section */}
            <section className="quote-section">
                <div className="quote-bg">
                    <video autoPlay muted loop playsInline>
                        <source src={`${import.meta.env.BASE_URL}footer.mp4`} type="video/mp4" />
                    </video>
                </div>
                <div className="quote-overlay">
                    <div className="quote-card">
                        <img
                            src="https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2025/10/icon-semons-la-vie.svg"
                            alt=""
                            className="quote-icon"
                        />
                        <p className="quote-text">
                            Je fais ma part, j'ouvre mon coeur et je laisse rayonner ma lumière
                        </p>
                        <p className="quote-author">– Chloé Wisser</p>
                        <div className="quote-buttons">
                            <Link to="/qui-suis-je" className="btn-primary">À propos de moi</Link>
                            <a href="https://www.sumupbookings.com/semons-la-vie" target="_blank" rel="noopener noreferrer" className="btn-outline">Réserver une séance</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-section">
                <div className="container">
                    <span className="section-label">Prête à commencer ?</span>
                    <h2>Prends soin de toi, dès aujourd'hui</h2>
                    <p>
                        Que tu souhaites retrouver ton énergie, apaiser ton stress ou simplement
                        prendre un moment pour toi, je suis là pour t'accompagner avec douceur.
                    </p>
                    <div className="cta-buttons">
                        <a href="https://www.sumupbookings.com/semons-la-vie" target="_blank" rel="noopener noreferrer" className="btn-primary">Prendre rendez-vous</a>
                        <a href="mailto:contact@semons-la-vie.fr" className="btn-outline">M'envoyer un message</a>
                    </div>
                    <div className="cta-contact-row">
                        <div className="cta-contact-item">
                            <Phone size={18} />
                            <span>06.61.49.35.86</span>
                        </div>
                        <div className="cta-contact-item">
                            <Mail size={18} />
                            <span>contact@semons-la-vie.fr</span>
                        </div>
                        <div className="cta-contact-item">
                            <MapPin size={18} />
                            <span>Châteaubernard (16100)</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PreFooter;
