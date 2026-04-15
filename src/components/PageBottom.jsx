import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import './PageBottom.css';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Semons+la+Vie+-+Naturopathie+%26+Sophrologie/data=!4m2!3m1!1s0x0:0xe1ad6ebf2d9f6588';

const testimonials = [
    {
        text: "Un moment de pur bien-être ! Chloé a su créer une ambiance apaisante dès les premières minutes, avec des gestes doux et précis. Le massage m'a profondément détendu et m'a permis de me recentrer. J'ai passé une excellente nuit, calme et reposante.",
        name: "Amélie L.", role: "Rituel AromaTouch", initials: "AL"
    },
    {
        text: "Mon mari et moi avons participé à un atelier de crusine. Chloé nous a fait découvrir une autre manière de cuisiner, nous avons découvert plein de nouvelles saveurs pour cuisiner sainement et tout ça dans une ambiance bienveillante et chaleureuse. À refaire !",
        name: "Titi C.", role: "Ateliers culinaires", initials: "TC"
    },
    {
        text: "Très agréable, le massage AromaTouch, il a dénoué tous les nœuds de mon dos et l'odeur des huiles est juste incroyable. Je recommande sans hésiter ce pur moment de détente.",
        name: "Élodie N.", role: "Rituel AromaTouch", initials: "EN"
    },
    {
        text: "Une professionnelle très à l'écoute et attentionnée. J'ai bénéficié du massage détente aux huiles essentielles, pratiqué avec soin par Chloé, les odeurs des huiles participant à une détente profonde du corps et de l'esprit. Je recommande à 100% !!",
        name: "Clémence R.", role: "Rituel AromaTouch", initials: "CR"
    },
    {
        text: "J'ai adoré cet atelier de cuisine crue ! Un heureux moment de partage et de découverte pour une cuisine facile, saine, savoureuse et différente à refaire et à réinventer en toute simplicité à la maison.",
        name: "Christine G.", role: "Ateliers culinaires", initials: "CG"
    },
    {
        text: "Suivie depuis 2 mois par Chloé en naturopathie, je vois déjà les résultats : beaucoup moins de fatigue. Chloé m'accompagne en toute bienveillance et respecte mon rythme, mes conditions de travail et mes envies. Je conseille vivement.",
        name: "Maryline A.", role: "Naturopathie", initials: "MA"
    },
    {
        text: "Ce moment pour un soin avec Chloé a été très agréable, relaxant, vraiment je recommande, elle est très à l'écoute...",
        name: "Béatrice H.", role: "Rituel AromaTouch", initials: "BH"
    },
    {
        text: "Chloé est douce et professionnelle. Elle met à l'aise. Elle a toute ma confiance. Je vous la recommande sans hésiter.",
        name: "Céline P.", role: "Sophrologie", initials: "CP"
    },
    {
        text: "Hier j'ai eu la chance de recevoir le massage AromaTouch, une belle expérience. Ce massage m'a détendu, je suis ressortie apaisée, sereine et je ressens encore les bienfaits. Si tu as envie de prendre un moment pour toi, de lâcher prise, je te conseille ce massage.",
        name: "Aurélie R.", role: "Rituel AromaTouch", initials: "AR"
    },
    {
        text: "J'ai participé à un atelier de crusine sur la lacto-fermentation avec ma maman pour son anniversaire et nous avons passé un super moment.",
        name: "Laetitia", role: "Ateliers culinaires", initials: "LM"
    }
];

const PageBottom = () => {
    return (
        <>
            {/* Ateliers & événements */}
            <section
                className="workshops-section"
                id="ateliers"
                style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-feuille-ombre.jpg)` }}
                ref={el => {
                    if (!el) return;
                    const onScroll = () => {
                        const rect = el.getBoundingClientRect();
                        const viewH = window.innerHeight;
                        const progress = (viewH - rect.top) / (viewH + rect.height);
                        const posY = 30 + (progress - 0.5) * 120;
                        el.style.backgroundPosition = `center ${posY}%`;
                    };
                    window.addEventListener('scroll', onScroll, { passive: true });
                    onScroll();
                }}
            >
                <div className="container">
                    <div className="services-header reveal">
                        <div>
                            <span className="section-label">Prochains événements</span>
                            <h2 className="section-title">Ateliers & événements</h2>
                            <p className="section-subtitle">Explore différentes façons de prendre soin de toi, selon tes besoins du moment.</p>
                        </div>
                        <div className="services-header-right">
                            <Link to="/evenements" className="btn-outline">Tous les événements <ArrowRight size={16} /></Link>
                        </div>
                    </div>

                    <div className="workshops-grid reveal-stagger">
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
                                    <Link to="/ateliers-culinaires" className="workshop-link">S'inscrire <ArrowRight size={14} /></Link>
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
                                    <Link to="/contact" className="workshop-link">S'inscrire <ArrowRight size={14} /></Link>
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
                                    <Link to="/contact" className="workshop-link">S'inscrire <ArrowRight size={14} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Témoignages */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="text-center reveal">
                        <span className="section-label">Témoignages</span>
                        <h2 className="section-title">Ce que disent mes clients</h2>
                    </div>
                </div>

                <div className="testimonials-carousel">
                    <div className="testimonials-track">
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div key={i} className="testimonial-card">
                                <div className="testimonial-stars">
                                    {[...Array(5)].map((_, j) => (
                                        <Star key={j} size={16} fill="#FFCF00" color="#FFCF00" />
                                    ))}
                                </div>
                                <p className="testimonial-text">"{t.text}"</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar">{t.initials}</div>
                                    <div>
                                        <div className="testimonial-name">{t.name}</div>
                                        <div className="testimonial-role">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container">
                    <div className="text-center" style={{ marginTop: '2.5rem' }}>
                        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                            Voir tous les avis sur Google <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Quote / CTA Section */}
            <section className="quote-section">
                <div className="quote-bg">
                    <video autoPlay muted loop playsInline poster={`${import.meta.env.BASE_URL}footer-poster.jpg`}>
                        <source src={`${import.meta.env.BASE_URL}footer.mp4`} type="video/mp4" />
                    </video>
                </div>
                <div className="quote-overlay">
                    <div className="quote-card reveal-scale">
                        <p className="quote-text">
                            Je fais ma part, j'ouvre mon coeur et je laisse rayonner ma lumière
                        </p>
                        <p className="quote-author">– Chloé Wisser</p>
                        <div className="quote-bottom-row">
                            <img
                                src={`${import.meta.env.BASE_URL}logo-footer.svg`}
                                alt="Colibri Semons la Vie"
                                className="quote-colibri-img"
                            />
                            <div className="quote-buttons">
                                <Link to="/qui-suis-je" className="btn-primary">À propos de moi</Link>
                                <a href="https://www.sumupbookings.com/semons-la-vie" target="_blank" rel="noopener noreferrer" className="btn-outline">Réserver une séance</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cta-section">
                <div className="container reveal">
                    <span className="section-label">Et si c'était le bon moment pour prendre soin de toi ?</span>
                    <h2>Je t'accompagne vers un équilibre durable, à ton rythme.</h2>
                    <p>
                        Retrouve un corps plus apaisé, un esprit plus clair, et un espace pour te reconnecter à toi.
                    </p>
                    <div className="cta-buttons">
                        <a href="https://www.sumupbookings.com/semons-la-vie" target="_blank" rel="noopener noreferrer" className="btn-primary">Prendre rendez-vous</a>
                        <a href="mailto:contact@semons-la-vie.fr" className="btn-outline">M'envoyer un message</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PageBottom;
