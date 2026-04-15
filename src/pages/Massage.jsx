import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ServiceSidebar from '../components/ServiceSidebar';
import ServiceHeroZoom from '../components/ServiceHeroZoom';
import PageBottom from '../components/PageBottom';
import './ServicePage.css';

const faqData = [
    {
        q: 'Faut-il aimer les huiles essentielles ?',
        a: 'Les huiles sont appliquées en quantité modérée et choisies pour leur douceur et leur synergie. Si tu as des sensibilités particulières, nous en échangeons en amont.',
    },
    {
        q: 'Est-ce un massage thérapeutique ?',
        a: 'L\'AromaTouch® est un soin de bien-être. Il ne remplace pas un suivi médical ou paramédical.',
    },
    {
        q: 'Est-ce adapté en période de fatigue ou de stress ?',
        a: 'Oui, c\'est même l\'un des contextes les plus propices à ce soin.',
    },
    {
        q: 'Peut-il s\'intégrer dans un accompagnement global ?',
        a: 'Oui. Il peut compléter un suivi en naturopathie ou en sophrologie pour soutenir le système nerveux et favoriser l\'intégration des changements.',
    },
];

const FaqItem = ({ question, answer }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="faq-item">
            <button className="faq-question" onClick={() => setOpen(!open)}>
                {question}
                <ChevronDown size={18} className={`faq-chevron ${open ? 'open' : ''}`} />
            </button>
            {open && <p className="faq-answer">{answer}</p>}
        </div>
    );
};

const Massage = () => {
    return (
        <>
        <div className="service-page animate-in" style={{ '--service-color': '#5B5EAB' }}>
            {/* Hero Banner */}
            <div className="service-hero-banner">
                <ServiceHeroZoom src={`${import.meta.env.BASE_URL}services/massage.jpg`} alt="Massage AromaTouch" />
                <div className="service-hero-banner-content">
                    <h1>Massage AromaTouch®</h1>
                    <p className="hero-subtitle">
                        Un rituel profond pour harmoniser corps, cœur & esprit
                    </p>
                    <p className="hero-desc">
                        L'AromaTouch® est un soin aux huiles essentielles qui invite à un relâchement profond du corps
                        et du système nerveux. À travers des gestes lents, répétitifs et enveloppants, il favorise une
                        détente globale et un retour à l'équilibre intérieur. C'est un moment pour revenir au corps,
                        aux sensations… et laisser le mental s'apaiser au fil du massage.
                    </p>
                    <div className="service-hero-meta-row">
                        <span className="service-meta-tag">1h</span>
                        <span className="service-meta-tag service-meta-price">65€</span>
                        <span className="service-meta-tag">Présentiel</span>
                    </div>
                </div>
            </div>

            {/* Two-column layout */}
            <div className="service-layout">
                <ServiceSidebar active="Massage AromaTouch®" />

                <div className="service-content">
                    {/* Qu'est-ce que l'AromaTouch® ? */}
                    <div className="service-content-section">
                        <h2>Qu'est-ce que l'AromaTouch® ?</h2>
                        <p>
                            Développée pour maximiser les bienfaits des huiles essentielles sur l'organisme, la
                            technique AromaTouch® repose sur l'application séquentielle de 8 huiles et synergies
                            spécifiques.
                        </p>
                        <p>Elle poursuit trois objectifs principaux :</p>
                        <ul>
                            <li>Apaiser le stress et soutenir le système nerveux</li>
                            <li>Soutenir l'immunité et les défenses naturelles</li>
                            <li>Favoriser l'homéostasie, c'est-à-dire l'équilibre global du corps</li>
                        </ul>
                        <p>
                            L'association du toucher et de l'odorat agit à la fois sur le plan physique, émotionnel
                            et énergétique. Les gestes sont doux, rythmés, profondément enveloppants.
                        </p>
                        <p>
                            Ce soin ne se substitue pas à un suivi médical, mais il constitue un soutien précieux
                            dans une démarche globale de bien-être.
                        </p>
                    </div>

                    {/* Les bienfaits du soin */}
                    <div className="service-content-section">
                        <h2>Les bienfaits du soin</h2>
                        <p>L'AromaTouch® peut contribuer à :</p>
                        <ul>
                            <li>procurer une sensation de détente profonde,</li>
                            <li>calmer le système nerveux,</li>
                            <li>apaiser les tensions physiques,</li>
                            <li>soutenir les mécanismes naturels d'équilibre du corps,</li>
                            <li>favoriser un lâcher-prise émotionnel,</li>
                            <li>accompagner les transitions saisonnières.</li>
                        </ul>
                        <p>
                            Il agit comme un "reset" doux, permettant au corps de retrouver sa capacité naturelle
                            d'autorégulation.
                        </p>
                    </div>

                    {/* Le déroulement de la séance */}
                    <div className="service-content-section">
                        <h2>Le déroulement de la séance (1h)</h2>
                        <p>Le soin commence par un temps d'accueil et d'installation.</p>

                        <h3>Bain de pieds d'ancrage</h3>
                        <p>
                            Tu débutes par un bain de pieds au sel d'Epsom enrichi de l'huile essentielle Balance®,
                            pour favoriser l'ancrage et la détente.
                        </p>

                        <h3>Installation & relaxation guidée</h3>
                        <p>
                            Tu t'installes sur une table chauffée, confortablement couvert(e). Je t'accompagne dans
                            une courte relaxation inspirée de la sophrologie (5 à 10 minutes), pour préparer le corps
                            et l'esprit à recevoir le soin.
                        </p>

                        <h3>Application du protocole AromaTouch® (45 min)</h3>
                        <p>Les huiles sont appliquées sur :</p>
                        <ul>
                            <li>le dos,</li>
                            <li>la colonne vertébrale,</li>
                            <li>la nuque,</li>
                            <li>la tête,</li>
                            <li>les pieds.</li>
                        </ul>
                        <p>
                            La personne peut rester en sous-vêtements ou porter un pantalon confortable.
                            Une musique douce accompagne la séance.
                        </p>

                        <h3>Temps d'intégration</h3>
                        <p>
                            Un moment est laissé à la fin pour émerger en douceur, suivi d'un temps d'échange si
                            tu le souhaites.
                        </p>
                    </div>

                    {/* Les formats proposés / Tarifs */}
                    <div className="service-content-section">
                        <h2>Les formats proposés</h2>
                        <div className="service-packs">
                            <div className="service-pack-card">
                                <div className="service-pack-header">
                                    <h4>AromaTouch® Équilibre</h4>
                                    <span className="service-pack-price">65€</span>
                                </div>
                                <p>
                                    Un soin ponctuel (1h) pour harmoniser corps, cœur et esprit. Idéal en période de stress,
                                    de fatigue nerveuse ou simplement pour s'offrir un moment de profonde détente.
                                </p>
                            </div>
                            <div className="service-pack-card featured">
                                <span className="service-pack-badge">Pack 4 saisons</span>
                                <div className="service-pack-header">
                                    <h4>AromaTouch® Saisons</h4>
                                    <span className="service-pack-price"><s>260€</s> 220€</span>
                                </div>
                                <p>
                                    Un rituel de 4 massages à programmer au fil des saisons pour accompagner ton corps dans
                                    ses transitions naturelles.
                                </p>
                                <ul className="service-pack-features">
                                    <li>Soutenir l'immunité tout au long de l'année</li>
                                    <li>Accompagner les changements énergétiques saisonniers</li>
                                    <li>Installer un rendez-vous régulier avec ton bien-être</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Mon intention */}
                    <div className="service-content-section">
                        <h3>Mon intention</h3>
                        <p>
                            À travers le soin AromaTouch®, ce que je souhaite avant tout offrir, c'est un moment de
                            détente profonde et de relâchement. Revenir au corps, aux sensations, et laisser le mental
                            s'apaiser au fur et à mesure du massage. C'est un espace de pause, d'intégration et de
                            reconnexion.
                        </p>
                        <p>
                            L'AromaTouch® peut s'intégrer dans une démarche globale d'équilibre du terrain ou de
                            gestion émotionnelle.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                            <Link to="/naturopathie" className="service-inline-link">
                                Découvrir la naturopathie <ArrowRight size={16} />
                            </Link>
                            <Link to="/sophrologie" className="service-inline-link">
                                Découvrir la sophrologie <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* FAQ */}
                    <section className="faq-section">
                        <h2>Questions fréquentes</h2>
                        {faqData.map((item, i) => (
                            <FaqItem key={i} question={item.q} answer={item.a} />
                        ))}
                    </section>

                </div>
            </div>
        </div>
        <PageBottom />
        </>
    );
};

export default Massage;
