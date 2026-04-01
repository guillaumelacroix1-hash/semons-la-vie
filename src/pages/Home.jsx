import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import DrawSvgIcon from '../components/DrawSvgIcon';
import Wave from '../components/Wave';
import PracticesCarousel from '../components/PracticesCarousel';
import '../components/DrawSvgIcon.css';
import { Leaf, Wind, Utensils, Sparkles, Star, Check, ArrowRight, Phone, Mail, MapPin, Flower2, Apple } from 'lucide-react';
import './Home.css';

const services = [
    {
        id: 'naturopathie', label: 'Naturopathie', icon: <img src={`${import.meta.env.BASE_URL}icons/service/naturopathie.svg`} alt="" className="service-svg-icon" />, link: '/naturopathie',
        color: '#FFCF00',
        image: `${import.meta.env.BASE_URL}services/Naturopathie.jpg`,
        desc: 'Un bilan global pour comprendre ton corps, apaiser tes maux et adopter une hygiène de vie personnalisée.'
    },
    {
        id: 'phytotherapie', label: 'Phytothérapie', icon: <img src={`${import.meta.env.BASE_URL}icons/service/phytotherapie.svg`} alt="" className="service-svg-icon" />, link: '/phytotherapie',
        color: '#7AA476',
        image: `${import.meta.env.BASE_URL}services/Phytothérapie.jpg`,
        desc: 'L\'art d\'utiliser les plantes et leurs extraits pour soutenir les fonctions physiologiques et accompagner le terrain en douceur.'
    },
    {
        id: 'reequilibrage', label: 'Rééquilibrage alimentaire', icon: <img src={`${import.meta.env.BASE_URL}icons/service/reequilibrage.svg`} alt="" className="service-svg-icon" />, link: '/reequilibrage-alimentaire',
        color: '#A8C5A0',
        image: `${import.meta.env.BASE_URL}services/reequilibrage alimentaire.jpg`,
        desc: 'Apprendre à manger en conscience pour retrouver vitalité, légèreté et plaisir au quotidien.'
    },
    {
        id: 'sophrologie', label: 'Sophrologie', icon: <img src={`${import.meta.env.BASE_URL}icons/service/sophrologie.svg`} alt="" className="service-svg-icon" />, link: '/sophrologie',
        color: '#E8C8D8',
        image: `${import.meta.env.BASE_URL}services/Sophrologie.jpg`,
        desc: 'Des techniques de respiration et de relaxation pour apprivoiser ton stress, libérer tes tensions et cultiver la sérénité au quotidien.'
    },
    {
        id: 'ateliers', label: 'Ateliers de crusine', icon: <img src={`${import.meta.env.BASE_URL}icons/service/crusine.svg`} alt="" className="service-svg-icon" />, link: '/ateliers-culinaires',
        color: '#7AA476',
        image: `${import.meta.env.BASE_URL}services/crusine.jpeg`,
        desc: 'Apprends à préparer des recettes 100% végétales, crues et bio lors d\'ateliers conviviaux.'
    },
    {
        id: 'massage', label: 'Massage AromaTouch®', icon: <img src={`${import.meta.env.BASE_URL}icons/service/massage.svg`} alt="" className="service-svg-icon" />, link: '/massage',
        color: '#5B5EAB',
        image: `${import.meta.env.BASE_URL}services/massage.jpg`,
        desc: 'Un massage aux huiles essentielles pour harmoniser corps, cœur et esprit. Un moment de profonde détente.'
    },
];

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Semons+la+Vie+-+Naturopathie+%26+Sophrologie/data=!4m2!3m1!1s0x0:0xe1ad6ebf2d9f6588';

const testimonials = [
    {
        text: "Un moment de pur bien-être ! Chloé a su créer une ambiance apaisante dès les premières minutes, avec des gestes doux et précis. Le massage m'a profondément détendu et m'a permis de me recentrer. J'ai passé une excellente nuit, calme et reposante.",
        name: "Amélie L.",
        role: "Massage AromaTouch®",
        initials: "AL"
    },
    {
        text: "Mon mari et moi avons participé à un atelier de crusine. Chloé nous a fait découvrir une autre manière de cuisiner, nous avons découvert plein de nouvelles saveurs pour cuisiner sainement et tout ça dans une ambiance bienveillante et chaleureuse. À refaire !",
        name: "Titi C.",
        role: "Ateliers culinaires",
        initials: "TC"
    },
    {
        text: "Très agréable, le massage AromaTouch, il a dénoué tous les nœuds de mon dos et l'odeur des huiles est juste incroyable. Je recommande sans hésiter ce pur moment de détente.",
        name: "Élodie N.",
        role: "Massage AromaTouch®",
        initials: "EN"
    },
    {
        text: "Une professionnelle très à l'écoute et attentionnée. J'ai bénéficié du massage détente aux huiles essentielles, pratiqué avec soin par Chloé, les odeurs des huiles participant à une détente profonde du corps et de l'esprit. Je recommande à 100% !!",
        name: "Clémence R.",
        role: "Massage AromaTouch®",
        initials: "CR"
    },
    {
        text: "J'ai adoré cet atelier de cuisine crue ! Un heureux moment de partage et de découverte pour une cuisine facile, saine, savoureuse et différente à refaire et à réinventer en toute simplicité à la maison.",
        name: "Christine G.",
        role: "Ateliers culinaires",
        initials: "CG"
    },
    {
        text: "Suivie depuis 2 mois par Chloé en naturopathie, je vois déjà les résultats : beaucoup moins de fatigue. Chloé m'accompagne en toute bienveillance et respecte mon rythme, mes conditions de travail et mes envies. Je conseille vivement.",
        name: "Maryline A.",
        role: "Naturopathie",
        initials: "MA"
    },
    {
        text: "Ce moment pour un soin avec Chloé a été très agréable, relaxant, vraiment je recommande, elle est très à l'écoute...",
        name: "Béatrice H.",
        role: "Massage AromaTouch®",
        initials: "BH"
    },
    {
        text: "Chloé est douce et professionnelle. Elle met à l'aise. Elle a toute ma confiance. Je vous la recommande sans hésiter.",
        name: "Céline P.",
        role: "Sophrologie",
        initials: "CP"
    },
    {
        text: "Hier j'ai eu la chance de recevoir le massage AromaTouch, une belle expérience. Ce massage m'a détendu, je suis ressortie apaisée, sereine et je ressens encore les bienfaits. Si tu as envie de prendre un moment pour toi, de lâcher prise, je te conseille ce massage.",
        name: "Aurélie R.",
        role: "Massage AromaTouch®",
        initials: "AR"
    },
    {
        text: "J'ai participé à un atelier de crusine sur la lacto-fermentation avec ma maman pour son anniversaire et nous avons passé un super moment.",
        name: "Laetitia",
        role: "Ateliers culinaires",
        initials: "LM"
    }
];

const Home = () => {
    const [activeService, setActiveService] = useState(0);
    const mandalaRef = useRef(null);
    const practicesRef = useRef(null);
    const servicesScrollRef = useRef(null);
    const servicesTrackRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!mandalaRef.current) return;
            const rotation = window.scrollY * 0.08;
            mandalaRef.current.style.transform = `rotate(${rotation}deg)`;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Horizontal scroll driven by vertical scroll
    useEffect(() => {
        const section = servicesScrollRef.current;
        const track = servicesTrackRef.current;
        if (!section || !track) return;

        const handleHScroll = () => {
            const rect = section.getBoundingClientRect();
            const sectionHeight = section.offsetHeight;
            const viewportH = window.innerHeight;
            const scrollable = sectionHeight - viewportH;
            if (scrollable <= 0) return;
            const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
            const maxTranslate = track.scrollWidth - track.clientWidth;
            track.style.transform = `translateX(${-progress * maxTranslate}px)`;
        };

        window.addEventListener('scroll', handleHScroll, { passive: true });
        handleHScroll();
        return () => window.removeEventListener('scroll', handleHScroll);
    }, []);

    // Draw borders on scroll for practice cards
    useEffect(() => {
        if (!practicesRef.current) return;
        const cards = practicesRef.current.querySelectorAll('.practice-card');

        const handleBorderScroll = () => {
            const firstCard = cards[0];
            if (!firstCard) return;
            const rect = firstCard.getBoundingClientRect();
            const windowH = window.innerHeight;
            const start = windowH * 0.8;
            const end = windowH * 0.4;
            const raw = Math.max(0, Math.min(3, ((start - rect.top) / (start - end)) * 3));
            cards.forEach((card, i) => {
                const cardProgress = Math.max(0, Math.min(1, raw - i));
                card.style.setProperty('--border-progress', cardProgress);
                card.classList.toggle('border-done', cardProgress >= 0.95);
            });
        };

        window.addEventListener('scroll', handleBorderScroll, { passive: true });
        handleBorderScroll();
        return () => window.removeEventListener('scroll', handleBorderScroll);
    }, []);

    return (
        <>
            <Hero />

            {/* About Section */}
            <section className="about-section" id="about">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content reveal-left">
                            <img
                                ref={mandalaRef}
                                src={`${import.meta.env.BASE_URL}mandala.svg`}
                                alt=""
                                className="about-mandala"
                            />
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
                            <Link to="/qui-suis-je" className="btn-primary" style={{ marginTop: '1rem' }}>En savoir plus</Link>
                        </div>
                        <div className="about-img reveal-right">
                            <img
                                src={`${import.meta.env.BASE_URL}chloe-home.jpeg`}
                                alt="Chloé Wisser"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Showcase — Horizontal scroll on vertical scroll */}
            <section className="services-hscroll" id="services-showcase" ref={servicesScrollRef}>
                <div className="services-hscroll-sticky">
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: '3rem' }}>
                            <span className="section-label">Mes services</span>
                            <h2 className="section-title">
                                Des accompagnements sur-mesure<br />pour ton bien-être
                            </h2>
                        </div>
                    </div>
                    <div className="services-hscroll-track" ref={servicesTrackRef}>
                        {services.map((s) => (
                            <ServiceCard
                                key={s.id}
                                title={s.label}
                                description={s.desc}
                                link={s.link}
                                icon={s.icon}
                                image={s.image}
                                color={s.color}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Packs Tabs Section */}
            <section className="services-tabs-section" id="packs">
                <div className="container">
                    <div className="services-tabs-header reveal">
                        <div className="services-tabs-header-left">
                            <span className="section-label">Mes formules</span>
                            <h2 className="section-title" style={{ whiteSpace: 'nowrap' }}>
                                Des packs adaptés à tes besoins et à ton rythme
                            </h2>
                        </div>
                        <div className="services-tabs-header-right">
                        </div>
                    </div>

                    <div className="services-tabs-layout reveal-stagger">
                        <div className="services-tabs-list">
                            {[
                                { id: 'naturo', label: 'Naturopathie', icon: <img src={`${import.meta.env.BASE_URL}icons/service/naturopathie.svg`} alt="" className="service-svg-icon" />, color: '#ffcf00', textColor: '#7A6200' },
                                { id: 'sophro', label: 'Sophrologie', icon: <img src={`${import.meta.env.BASE_URL}icons/service/sophrologie.svg`} alt="" className="service-svg-icon" />, color: '#ffcfe7', textColor: '#8B3A60' },
                                { id: 'crusine', label: 'Ateliers culinaires', icon: <img src={`${import.meta.env.BASE_URL}icons/service/crusine.svg`} alt="" className="service-svg-icon" />, color: '#bdd7ba', textColor: '#2D5A28' },
                                { id: 'massage', label: 'Massage AromaTouch®', icon: <img src={`${import.meta.env.BASE_URL}icons/service/massage.svg`} alt="" className="service-svg-icon" />, color: '#6e70cc', textColor: '#1E1B4B' },
                            ].map((tab, i) => (
                                <button
                                    key={tab.id}
                                    className={`services-tab-btn ${activeService === i ? 'active' : ''}`}
                                    style={activeService === i ? { background: tab.color, color: tab.textColor } : {}}
                                    onClick={() => setActiveService(i)}
                                >
                                    <span className="services-tab-icon">{tab.icon}</span>
                                    <span className="services-tab-label">{tab.label}</span>
                                </button>
                            ))}
                            <div className="services-tabs-note">
                                <h4>À savoir</h4>
                                <p>
                                    Chaque pack est pensé pour t'offrir un accompagnement complet et progressif.
                                    Choisis la formule qui te correspond et avance à ton rythme vers le mieux-être.
                                </p>
                            </div>
                        </div>

                        <div className="services-tab-content">
                            {/* Naturopathie packs */}
                            <div className={`services-tab-panel service-naturo ${activeService === 0 ? 'active' : ''}`}>
                                <div className="services-tab-image">
                                    <img src={`${import.meta.env.BASE_URL}services/Naturopathie.jpg`} alt="Naturopathie" />
                                </div>
                                <div className="services-tab-info">
                                    <h3>Packs Naturopathie</h3>
                                    <div className="packs-list">
                                        <div className="pack-item">
                                            <div className="pack-header">
                                                <span className="pack-name">Parcours de base</span>
                                                <span className="pack-price">140€</span>
                                            </div>
                                            <p>Deux rendez-vous : un bilan global de vitalité (1h30) + une séance de restitution et conseils personnalisés (1h).</p>
                                        </div>
                                        <div className="pack-item highlight">
                                            <div className="pack-header">
                                                <span className="pack-name">Pack Harmonie</span>
                                                <span className="pack-price"><s>200€</s> 180€</span>
                                            </div>
                                            <p>Parcours de base + 1 séance de suivi. Pour amorcer le changement et retrouver ton équilibre intérieur.</p>
                                        </div>
                                        <div className="pack-item highlight">
                                            <div className="pack-header">
                                                <span className="pack-name">Pack Renaissance</span>
                                                <span className="pack-price"><s>260€</s> 230€</span>
                                            </div>
                                            <p>Parcours de base + 2 séances de suivi. Pour consolider tes nouvelles habitudes et régénérer ton énergie.</p>
                                        </div>
                                        <div className="pack-item highlight">
                                            <div className="pack-header">
                                                <span className="pack-name">Pack Éclat</span>
                                                <span className="pack-price"><s>320€</s> 290€</span>
                                            </div>
                                            <p>Parcours de base + 3 séances de suivi + bonus : massage AromaTouch des mains (15 mn) et échantillon d'huile essentielle dōTerra.</p>
                                        </div>
                                        <div className="pack-item">
                                            <div className="pack-header">
                                                <span className="pack-name">Séance de suivi</span>
                                                <span className="pack-price">60€</span>
                                            </div>
                                            <p>Point d'étape (1h) pour ajuster ton programme et renforcer tes nouvelles habitudes.</p>
                                        </div>
                                    </div>
                                    <Link to="/naturopathie" className="btn-primary" style={{ marginTop: '1rem' }}>
                                        Découvrir la naturopathie <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            {/* Sophrologie packs */}
                            <div className={`services-tab-panel service-sophro ${activeService === 1 ? 'active' : ''}`}>
                                <div className="services-tab-image">
                                    <img src={`${import.meta.env.BASE_URL}services/Sophrologie.jpg`} alt="Sophrologie" />
                                </div>
                                <div className="services-tab-info">
                                    <h3>Packs Sophrologie</h3>
                                    <div className="packs-list">
                                        <div className="pack-item">
                                            <div className="pack-header">
                                                <span className="pack-name">Séance découverte & objectif</span>
                                                <span className="pack-price">80€</span>
                                            </div>
                                            <p>Anamnèse, définition de ton objectif et séance de découverte (1h30) pour amorcer ton accompagnement en douceur.</p>
                                        </div>
                                        <div className="pack-item">
                                            <div className="pack-header">
                                                <span className="pack-name">Séance de suivi</span>
                                                <span className="pack-price">60€</span>
                                            </div>
                                            <p>Pratiques progressives (1h) pour t'aider à atteindre ton objectif et renforcer ton équilibre intérieur.</p>
                                        </div>
                                        <div className="pack-item highlight">
                                            <div className="pack-header">
                                                <span className="pack-name">Pack Éveil</span>
                                                <span className="pack-price">À partir de 500€</span>
                                            </div>
                                            <p>Un accompagnement complet : 1 séance découverte & objectif + 8 séances de suivi. Inclus à chaque séance : audio de la pratique, fiches détaillées. Bonus : livret "Mon cahier des sensations et des émotions".</p>
                                        </div>
                                    </div>
                                    <p className="packs-note">Un accompagnement de sophrologie comprend généralement entre 8 et 12 séances pour une évolution durable et profonde.</p>
                                    <Link to="/sophrologie" className="btn-primary" style={{ marginTop: '1rem' }}>
                                        Découvrir la sophrologie <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            {/* Ateliers culinaires packs */}
                            <div className={`services-tab-panel service-crusine ${activeService === 2 ? 'active' : ''}`}>
                                <div className="services-tab-image">
                                    <img src={`${import.meta.env.BASE_URL}services/crusine.jpeg`} alt="Ateliers culinaires" />
                                </div>
                                <div className="services-tab-info">
                                    <h3>Ateliers Culinaires</h3>
                                    <p className="packs-tagline">100% végétal, cru et bio</p>
                                    <div className="packs-list">
                                        <div className="pack-item">
                                            <div className="pack-header">
                                                <span className="pack-name">Les Rendez-vous Crusine</span>
                                                <span className="pack-price">65€</span>
                                            </div>
                                            <p>Chaque mois, découvre une nouvelle thématique gourmande et vitalisante (2h), pour cuisiner autrement en partageant un moment convivial.</p>
                                        </div>
                                        <div className="pack-item">
                                            <div className="pack-header">
                                                <span className="pack-name">Crusine chez Toi !</span>
                                                <span className="pack-price">Sur devis</span>
                                            </div>
                                            <p>Un atelier privé et sur-mesure à domicile, pensé selon tes goûts et tes objectifs. Parfait entre amis ou en famille.</p>
                                        </div>
                                        <div className="pack-item highlight">
                                            <div className="pack-header">
                                                <span className="pack-name">Parcours Gourmand</span>
                                                <span className="pack-price"><s>195€</s> 180€</span>
                                            </div>
                                            <p>Pack 3 ateliers : un vrai voyage culinaire ! Progresse pas à pas, explore trois thématiques différentes et deviens autonome en crusine.</p>
                                        </div>
                                    </div>
                                    <Link to="/ateliers-culinaires" className="btn-primary" style={{ marginTop: '1rem' }}>
                                        Découvrir les ateliers <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            {/* Massage packs */}
                            <div className={`services-tab-panel service-massage ${activeService === 3 ? 'active' : ''}`}>
                                <div className="services-tab-image">
                                    <img src={`${import.meta.env.BASE_URL}services/massage.jpg`} alt="Massage AromaTouch" />
                                </div>
                                <div className="services-tab-info">
                                    <h3>Massage AromaTouch®</h3>
                                    <div className="packs-list">
                                        <div className="pack-item">
                                            <div className="pack-header">
                                                <span className="pack-name">AromaTouch® Équilibre</span>
                                                <span className="pack-price">65€</span>
                                            </div>
                                            <p>Un massage aux huiles essentielles (1h) pour harmoniser corps, cœur & esprit. Un moment de profonde détente pour relâcher le stress.</p>
                                        </div>
                                        <div className="pack-item highlight">
                                            <div className="pack-header">
                                                <span className="pack-name">AromaTouch® Saisons</span>
                                                <span className="pack-price"><s>260€</s> 220€</span>
                                            </div>
                                            <p>Pack 4 massages à programmer au fil des saisons, pour accompagner ton corps dans ses transitions naturelles. Renforce ton immunité et maintiens ton équilibre toute l'année.</p>
                                        </div>
                                    </div>
                                    <Link to="/massage" className="btn-primary" style={{ marginTop: '1rem' }}>
                                        Découvrir le massage <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </div>
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
                                color: '#FFCF00',
                                textColor: '#7A6200',
                                objective: 'Rééquilibrer l\'hygiène de vie',
                                duration: '1h à 1h30',
                                features: [
                                    'Alimentaire & nutrition',
                                    'Gestion du stress',
                                    'Conseils personnalisés',
                                    'En visio disponible',
                                    'Suivi personnalisé',
                                ],
                                price: '60',
                                link: '/naturopathie'
                            },
                            {
                                name: 'Sophrologie',
                                color: '#ffcfe7',
                                textColor: '#8B3A60',
                                objective: 'Gestion du stress et émotions',
                                duration: '1h à 1h30',
                                features: [
                                    'Gestion du stress',
                                    'Respiration & relaxation',
                                    'En visio disponible',
                                    'Suivi personnalisé',
                                ],
                                price: '60',
                                link: '/sophrologie'
                            },
                            {
                                name: 'Ateliers Crusine',
                                color: '#bdd7ba',
                                textColor: '#2D5A28',
                                objective: 'Apprendre à cuisiner sain',
                                duration: '2h',
                                features: [
                                    'Alimentaire & nutrition',
                                    'Recettes à reproduire',
                                    'Parcours Gourmand',
                                ],
                                price: '65',
                                link: '/ateliers-culinaires'
                            },
                            {
                                name: 'Massage AromaTouch®',
                                color: '#6e70cc',
                                textColor: '#1E1B4B',
                                objective: 'Détente profonde du corps',
                                duration: '1h',
                                features: [
                                    'Gestion du stress',
                                    'Huiles essentielles',
                                    'Pack 4 Saisons',
                                ],
                                price: '65',
                                link: '/massage'
                            }
                        ].map((s, i) => (
                            <div className="pricing-card" key={i}>
                                <div className="pricing-card-header" style={{ background: `linear-gradient(135deg, ${s.color}, ${s.color}DD)`, '--header-text': s.textColor }}>
                                    <h3 className="pricing-name">{s.name}</h3>
                                    <p className="pricing-objective">{s.objective}</p>
                                    <span className="pricing-duration">{s.duration}</span>
                                </div>
                                <ul className="pricing-features">
                                    {s.features.map((f, j) => (
                                        <li key={j} className="feature-yes">
                                            <span className="feature-dot" style={{ background: s.color }} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pricing-footer">
                                    <div className="pricing-price">
                                        <span className="price-from">À partir de</span>
                                        <span className="price-amount">{s.price}€</span>
                                    </div>
                                    <Link to={s.link} className="pricing-cta" style={{ background: s.color, color: s.textColor }}>
                                        Découvrir <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works — texte sticky gauche, cartes empilées droite */}
            <section className="how-section">
                <div className="container">
                    <div className="how-split">
                        <div className="how-left">
                            <span className="section-label">Comment ça fonctionne</span>
                            <h2 className="section-title">Ton parcours en 4 étapes</h2>
                            <p className="how-desc">
                                De la prise de contact au suivi régulier, chaque étape est pensée pour t'accompagner
                                avec douceur et bienveillance vers un mieux-être durable. Pas de recette toute faite,
                                juste un chemin qui te ressemble.
                            </p>
                            <Link to="/contact" className="btn-primary" style={{ marginTop: '1.5rem' }}>Prendre contact</Link>
                        </div>
                        <div className="how-right">
                            {[
                                { num: 1, title: 'Prise de contact', desc: 'Un premier échange par téléphone ou par mail pour comprendre tes besoins et t\'orienter vers l\'accompagnement adapté.' },
                                { num: 2, title: 'Bilan personnalisé', desc: 'Lors de notre première rencontre, nous faisons ensemble un bilan complet de ta vitalité, tes habitudes et tes objectifs.' },
                                { num: 3, title: 'Plan d\'action', desc: 'Je te propose un programme sur-mesure avec des conseils pratiques, des exercices et un suivi adapté à ton rythme.' },
                                { num: 4, title: 'Suivi & évolution', desc: 'Des séances de suivi régulières pour ajuster ton programme et célébrer tes progrès vers un mieux-être durable.' },
                            ].map((step, i) => (
                                <div className="how-stack-card" key={i} style={{ top: `${100 + i * 30}px` }}>
                                    <div className="step-number">{step.num}</div>
                                    <div className="how-step-text">
                                        <h4>{step.title}</h4>
                                        <p>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Événements */}
            <section className="workshops-section" id="ateliers">
                <div className="container">
                    <div className="services-header reveal">
                        <div>
                            <span className="section-label">Prochains événements</span>
                            <h2 className="section-title">Ateliers & événements</h2>
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

            {/* Testimonials */}
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
                <div className="container reveal">
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

export default Home;
