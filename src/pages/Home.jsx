import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { Leaf, Wind, Utensils, Sparkles, Star, Check, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import './Home.css';

const services = [
    {
        id: 'naturopathie', label: 'Naturopathie', icon: <Leaf size={22} />, link: '/naturopathie',
        image: 'https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=800&auto=format&fit=crop',
        desc: 'Un bilan global pour comprendre ton corps, apaiser tes maux et adopter une hygiène de vie personnalisée. En naturopathie, nous explorons ensemble tes habitudes alimentaires, ton sommeil, ta gestion du stress et ta vitalité pour élaborer un plan d\'action concret et adapté à tes besoins.'
    },
    {
        id: 'sophrologie', label: 'Sophrologie', icon: <Wind size={22} />, link: '/sophrologie',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
        desc: 'Des techniques de respiration et de relaxation pour apprivoiser ton stress, libérer tes tensions et cultiver la sérénité au quotidien. La sophrologie t\'invite à te reconnecter à toi-même, pas à pas.'
    },
    {
        id: 'ateliers', label: 'Ateliers de crusine', icon: <Utensils size={22} />, link: '/ateliers-culinaires',
        image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=800&auto=format&fit=crop',
        desc: 'Apprends à préparer des recettes 100% végétales, crues et bio lors d\'ateliers conviviaux. Découvre comment nourrir ton corps avec simplicité, saveur et vitalité.'
    },
    {
        id: 'massage', label: 'Massage AromaTouch®', icon: <Sparkles size={22} />, link: '/massage',
        image: 'https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2025/11/blurred-green-palm-leaves-on-off-white-background-2025-02-09-23-48-36-utc-1024x1536.jpg',
        desc: 'Un massage aux huiles essentielles pour harmoniser corps, cœur et esprit. Un moment de profonde détente pour relâcher le stress et soutenir ton bien-être global.'
    },
];

const testimonials = [
    {
        text: "Grâce à Chloé, j'ai enfin compris comment prendre soin de moi de manière globale. La naturopathie a transformé mon quotidien, mes troubles digestifs ont disparu en quelques semaines.",
        name: "Marie L.",
        role: "Naturopathie",
        initials: "ML"
    },
    {
        text: "Les séances de sophrologie m'ont permis de retrouver un sommeil réparateur et une vraie sérénité intérieure. Chloé a une approche douce et bienveillante qui met immédiatement en confiance.",
        name: "Sophie D.",
        role: "Sophrologie",
        initials: "SD"
    },
    {
        text: "Les ateliers de crusine sont une vraie révélation ! J'ai découvert qu'on pouvait se régaler avec des recettes simples et saines. Un moment de partage et de bonheur à chaque fois.",
        name: "Thomas R.",
        role: "Ateliers culinaires",
        initials: "TR"
    }
];

const Home = () => {
    return (
        <>
            <Hero />

            {/* About Section */}
            <section className="about-section" id="about">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-img">
                            <img
                                src="https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2025/11/VirginieDumoulinChaphotographie-2025-Violettesaintes-561_2-1-scaled.jpg"
                                alt="Chloé Wisser"
                            />
                        </div>
                        <div className="about-content">
                            <span className="section-label">À propos de moi</span>
                            <h2 className="about-name">Chloé Wisser</h2>
                            <p className="about-text">
                                Je m'appelle Chloé, passionnée par l'équilibre entre le corps et l'esprit.
                                Dès ma licence de psychologie, j'ai été fascinée par les mystères de la psyché humaine :
                                comprendre comment chacun de nous peut accéder à plus de sérénité, de confiance et de
                                bonheur est devenu mon moteur.
                            </p>
                            <p className="about-text">
                                Grandir dans un environnement bienveillant m'a très tôt donné le goût du partage et de
                                l'aide à l'autre ; c'est ce même désir d'accompagner qui m'a menée à créer ce site et
                                à t'accueillir dans mon univers.
                            </p>
                            <Link to="/#about" className="btn-primary" style={{ marginTop: '1rem' }}>En savoir plus</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section" id="services">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span className="section-label">Mes accompagnements</span>
                        <h2 className="section-title">
                            Naturopathie, sophrologie et techniques naturelles holistiques
                        </h2>
                        <p className="section-subtitle" style={{ maxWidth: '650px', margin: '0 auto' }}>
                            En visio ou à mon cabinet, je t'aide à renouer avec tes propres ressources à travers
                            une écoute douce et une approche globale.
                        </p>
                    </div>

                    <div className="services-cards-grid">
                        {services.map((s) => (
                            <Link to={s.link} key={s.id} className="service-card-link">
                                <div className="service-card">
                                    <div className="service-card-img-wrapper">
                                        <img src={s.image} alt={s.label} className="service-card-img" />
                                        <div className="service-card-icon-badge">
                                            {s.icon}
                                        </div>
                                    </div>
                                    <div className="service-card-body">
                                        <h3 className="service-card-title">{s.label}</h3>
                                        <p className="service-card-desc">{s.desc}</p>
                                        <span className="service-card-cta">
                                            Découvrir <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center" style={{ marginTop: '3rem' }}>
                        <a href="#" className="btn-primary">Réserver une séance</a>
                    </div>
                </div>
            </section>

            {/* Service Comparison */}
            <section className="compare-section" id="comparer">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label">Comparer mes accompagnements</span>
                        <h2 className="section-title">Quel accompagnement est fait pour toi ?</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Chaque approche a ses spécificités. Voici un aperçu pour t'aider à choisir.
                        </p>
                    </div>

                    <div className="pricing-cards">
                        {[
                            {
                                name: 'Naturopathie',
                                icon: '🌿',
                                color: '#7BC67E',
                                objective: 'Rééquilibrer l\'hygiène de vie',
                                duration: '1h à 1h30',
                                features: [
                                    { text: 'Alimentaire & nutrition', ok: true },
                                    { text: 'Gestion du stress', ok: true },
                                    { text: 'Conseils personnalisés', ok: true },
                                    { text: 'En visio disponible', ok: true },
                                    { text: 'Suivi personnalisé', ok: true },
                                ],
                                price: '60',
                                link: '/naturopathie'
                            },
                            {
                                name: 'Sophrologie',
                                icon: '🧘',
                                color: '#5B5EAB',
                                objective: 'Gestion du stress et émotions',
                                duration: '1h à 1h30',
                                features: [
                                    { text: 'Alimentaire & nutrition', ok: false },
                                    { text: 'Gestion du stress', ok: true },
                                    { text: 'Respiration & relaxation', ok: true },
                                    { text: 'En visio disponible', ok: true },
                                    { text: 'Suivi personnalisé', ok: true },
                                ],
                                price: '60',
                                link: '/sophrologie'
                            },
                            {
                                name: 'Ateliers Crusine',
                                icon: '🥗',
                                color: '#E8A838',
                                objective: 'Apprendre à cuisiner sain',
                                duration: '2h',
                                features: [
                                    { text: 'Alimentaire & nutrition', ok: true },
                                    { text: 'Gestion du stress', ok: false },
                                    { text: 'Recettes à reproduire', ok: true },
                                    { text: 'En visio disponible', ok: false },
                                    { text: 'Parcours Gourmand', ok: true },
                                ],
                                price: '65',
                                link: '/ateliers-culinaires'
                            },
                            {
                                name: 'Massage AromaTouch®',
                                icon: '💆',
                                color: '#C17DB5',
                                objective: 'Détente profonde du corps',
                                duration: '1h',
                                features: [
                                    { text: 'Alimentaire & nutrition', ok: false },
                                    { text: 'Gestion du stress', ok: true },
                                    { text: 'Huiles essentielles', ok: true },
                                    { text: 'En visio disponible', ok: false },
                                    { text: 'Pack 4 Saisons', ok: true },
                                ],
                                price: '65',
                                link: '/massage'
                            }
                        ].map((s, i) => (
                            <div className="pricing-card" key={i}>
                                <div className="pricing-card-header" style={{ background: `linear-gradient(135deg, ${s.color}22, ${s.color}11)` }}>
                                    <span className="pricing-icon">{s.icon}</span>
                                    <h3 className="pricing-name">{s.name}</h3>
                                    <p className="pricing-objective">{s.objective}</p>
                                    <span className="pricing-duration">{s.duration}</span>
                                </div>
                                <ul className="pricing-features">
                                    {s.features.map((f, j) => (
                                        <li key={j} className={f.ok ? 'feature-yes' : 'feature-no'}>
                                            <span className="feature-icon">{f.ok ? '✓' : '—'}</span>
                                            {f.text}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pricing-footer">
                                    <div className="pricing-price">
                                        <span className="price-from">À partir de</span>
                                        <span className="price-amount">{s.price}€</span>
                                    </div>
                                    <Link to={s.link} className="pricing-cta" style={{ background: s.color }}>
                                        Découvrir <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="how-section">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label">Comment ça fonctionne</span>
                        <h2 className="section-title">Ton parcours en 4 étapes</h2>
                    </div>

                    <div className="steps-grid">
                        <div className="step-card">
                            <div className="step-number">1</div>
                            <h4>Prise de contact</h4>
                            <p>Un premier échange par téléphone ou par mail pour comprendre tes besoins et t'orienter vers l'accompagnement adapté.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">2</div>
                            <h4>Bilan personnalisé</h4>
                            <p>Lors de notre première rencontre, nous faisons ensemble un bilan complet de ta vitalité, tes habitudes et tes objectifs.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">3</div>
                            <h4>Plan d'action</h4>
                            <p>Je te propose un programme sur-mesure avec des conseils pratiques, des exercices et un suivi adapté à ton rythme.</p>
                        </div>
                        <div className="step-card">
                            <div className="step-number">4</div>
                            <h4>Suivi & évolution</h4>
                            <p>Des séances de suivi régulières pour ajuster ton programme et célébrer tes progrès vers un mieux-être durable.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-section">
                <div className="container">
                    <div className="text-center">
                        <span className="section-label">Témoignages</span>
                        <h2 className="section-title">Ce que disent mes clients</h2>
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((t, i) => (
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
            </section>

            {/* Workshops Preview */}
            <section className="workshops-section" id="ateliers">
                <div className="container">
                    <div className="services-header">
                        <div>
                            <span className="section-label">Prochains ateliers</span>
                            <h2 className="section-title">Ateliers de crusine</h2>
                        </div>
                        <div className="services-header-right">
                            <Link to="/ateliers-culinaires" className="btn-outline">Tous les ateliers <ArrowRight size={16} /></Link>
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
                                    <Link to="/ateliers-culinaires" className="workshop-link">S'inscrire <ArrowRight size={14} /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="workshop-card">
                            <img
                                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop"
                                alt="Atelier salades"
                                className="workshop-img"
                            />
                            <div className="workshop-body">
                                <span className="workshop-tag green">Crusine</span>
                                <h4>Salades gourmandes</h4>
                                <p>Redécouvre la salade comme un plat complet, coloré et nourrissant pour le corps et l'esprit.</p>
                                <div className="workshop-meta">
                                    <span className="workshop-price">65€</span>
                                    <Link to="/ateliers-culinaires" className="workshop-link">S'inscrire <ArrowRight size={14} /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="workshop-card">
                            <img
                                src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&auto=format&fit=crop"
                                alt="Atelier desserts"
                                className="workshop-img"
                            />
                            <div className="workshop-body">
                                <span className="workshop-tag green">Crusine</span>
                                <h4>Desserts crus & gourmands</h4>
                                <p>Se faire plaisir sainement avec des desserts sans cuisson, 100% végétaux et irrésistibles.</p>
                                <div className="workshop-meta">
                                    <span className="workshop-price">65€</span>
                                    <Link to="/ateliers-culinaires" className="workshop-link">S'inscrire <ArrowRight size={14} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote / CTA Section */}
            <section className="quote-section">
                <div className="quote-bg">
                    <img
                        src="https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2025/11/semons-la-vie.jpeg"
                        alt="Plumes violettes"
                    />
                </div>
                <div className="quote-overlay">
                    <div className="quote-card animate-in">
                        <p className="quote-text">
                            Je fais ma part, j'ouvre mon coeur et je laisse rayonner ma lumière
                        </p>
                        <p className="quote-author">– Chloé Wisser</p>
                        <div className="quote-buttons">
                            <Link to="/#about" className="btn-primary">À propos de moi</Link>
                            <a href="#" className="btn-outline">Réserver une séance</a>
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
                        <a href="#" className="btn-primary">Prendre rendez-vous</a>
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

export default Home;
