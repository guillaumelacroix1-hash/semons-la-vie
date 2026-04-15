import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import DrawSvgIcon from '../components/DrawSvgIcon';
import Wave from '../components/Wave';
import PracticesCarousel from '../components/PracticesCarousel';
import PageBottom from '../components/PageBottom';
import '../components/DrawSvgIcon.css';
import { Leaf, Wind, Utensils, Sparkles, Check, ArrowRight, Phone, Mail, MapPin, Flower2, Apple } from 'lucide-react';
import './Home.css';

const services = [
    {
        id: 'naturopathie', label: 'Naturopathie', icon: <img src={`${import.meta.env.BASE_URL}icons/service/naturopathie.svg`} alt="" className="service-svg-icon" />, link: '/naturopathie',
        color: '#FFCF00',
        image: `${import.meta.env.BASE_URL}services/Naturopathie2.jpg`,
        desc: 'Un bilan global pour mieux comprendre ton corps, apaiser tes déséquilibres et retrouver un équilibre qui te correspond.'
    },
    {
        id: 'phytotherapie', label: 'Phytothérapie', icon: <img src={`${import.meta.env.BASE_URL}icons/service/phytotherapie.svg`} alt="" className="service-svg-icon" />, link: '/phytotherapie',
        color: '#7AA476',
        image: `${import.meta.env.BASE_URL}services/aromatherapie.webp`,
        desc: 'Utiliser les plantes et leurs extraits pour soutenir ton corps en douceur et accompagner ton équilibre au naturel.'
    },
    {
        id: 'reequilibrage', label: 'Rééquilibrage alimentaire', icon: <img src={`${import.meta.env.BASE_URL}icons/service/reequilibrage.svg`} alt="" className="service-svg-icon" />, link: '/reequilibrage-alimentaire',
        color: '#A8C5A0',
        image: `${import.meta.env.BASE_URL}services/reequilibrage alimentaire.jpg`,
        desc: 'Apprendre à manger en conscience pour retrouver énergie, légèreté et plaisir au quotidien.'
    },
    {
        id: 'sophrologie', label: 'Sophrologie', icon: <img src={`${import.meta.env.BASE_URL}icons/service/sophrologie.svg`} alt="" className="service-svg-icon" />, link: '/sophrologie',
        color: '#E8C8D8',
        image: `${import.meta.env.BASE_URL}services/Sophrologie.jpg`,
        desc: 'Des pratiques de respiration et de visualisation pour mieux gérer ton stress, relâcher les tensions et retrouver un apaisement durable.'
    },
    {
        id: 'ateliers', label: 'Ateliers de crusine', icon: <img src={`${import.meta.env.BASE_URL}icons/service/crusine.svg`} alt="" className="service-svg-icon" />, link: '/ateliers-culinaires',
        color: '#7AA476',
        image: `${import.meta.env.BASE_URL}crusine/WhatsApp%20Image%202026-04-01%20at%2015.16.23%20(5).jpeg`,
        desc: 'Apprends à préparer des recettes végétales, crues et gourmandes lors d\'ateliers conviviaux.'
    },
    {
        id: 'massage', label: 'Rituel AromaTouch', icon: <img src={`${import.meta.env.BASE_URL}icons/service/aromatouch.svg`} alt="" className="service-svg-icon" />, link: '/massage',
        color: '#5B5EAB',
        image: `${import.meta.env.BASE_URL}services/massage.jpg`,
        desc: 'Une expérience aux huiles essentielles pour favoriser la détente, relâcher les tensions et harmoniser le corps et l\'esprit.'
    },
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
                                Depuis toujours, je suis passionnée par l'équilibre entre le corps et l'esprit.
                                Très tôt, j'ai ressenti ce besoin de comprendre ce qui se joue en nous : pourquoi
                                parfois tout se bloque, pourquoi on se sent perdue, et comment retrouver plus de
                                sérénité et de confiance au quotidien.
                            </p>
                            <p className="about-text">
                                C'est ce chemin, à la fois personnel et professionnel, qui m'a naturellement menée
                                vers l'accompagnement. Aujourd'hui, je t'accueille dans un espace bienveillant pour
                                t'aider à mieux te comprendre, à écouter ton corps et à avancer avec plus de justesse.
                            </p>
                            <Link to="/qui-suis-je" className="btn-primary" style={{ marginTop: '1rem' }}>Découvrir mon parcours</Link>
                        </div>
                        <div className="about-img reveal-right">
                            <img
                                src={`${import.meta.env.BASE_URL}chloe-2.jpeg`}
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

            {/* Déroulement des accompagnements — 3 piliers */}
            <section className="practices-section" id="pratiques">
                <div className="container">
                    <div className="text-center reveal">
                        <span className="section-label">Ma philosophie</span>
                        <h2 className="section-title">Prendre soin de toi dans ta globalité</h2>
                        <p className="section-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
                            Parce que ton équilibre ne se joue pas à un seul niveau, mais dans l'harmonie de l'ensemble.
                        </p>
                    </div>
                    <div className="practices-grid" ref={practicesRef}>
                        <div className="practice-card" style={{ '--card-color': '#F4C6D0' }}>
                            <div className="practice-icon">
                                <DrawSvgIcon color="#F4C6D0" size={60} delay={0}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none"><path d="M31.1412 26.07C30.4828 26.6282 29.5173 26.6282 28.8589 26.07C22.6199 20.7811 19.4119 15.6483 19.4119 10.6063C19.4118 4.75853 24.1523 0.0180664 30 0.0180664C35.8477 0.0180664 40.5882 4.75853 40.5882 10.6063C40.5882 15.6483 37.3802 20.7811 31.1412 26.07ZM31.1412 33.9661C37.3802 39.255 40.5882 44.3878 40.5882 49.4298C40.5882 55.2776 35.8478 60.0181 30 60.0181C24.1522 60.0181 19.4118 55.2776 19.4118 49.4298C19.4118 44.3878 22.6198 39.255 28.8588 33.9661C29.5173 33.4079 30.4827 33.4079 31.1412 33.9661ZM33.948 31.1592C33.3899 30.5009 33.3899 29.5354 33.948 28.877C39.2371 22.638 44.3699 19.4299 49.4118 19.4299C55.2595 19.4298 60 24.1703 60 30.0181C60 35.8658 55.2595 40.6063 49.4118 40.6063C44.3698 40.6063 39.2369 37.3983 33.948 31.1592ZM26.052 31.1592C20.7629 37.3983 15.6301 40.6063 10.5882 40.6063C4.74047 40.6063 0 35.8658 0 30.0181C0 24.1703 4.74047 19.4298 10.5882 19.4298C15.6302 19.4298 20.763 22.6378 26.052 28.8769C26.6101 29.5354 26.6101 30.5008 26.052 31.1592Z" /></svg>
                                </DrawSvgIcon>
                            </div>
                            <h3>Le corps</h3>
                            <p>
                                Ton corps est le premier messager de ton équilibre.
                                Il exprime ses besoins à travers la digestion, le sommeil, les tensions ou la fatigue.
                                Au fil des séances, tu apprends à écouter ses signaux et à lui redonner son pouvoir d'autorégulation grâce à la naturopathie, à l'alimentation vivante et à des outils naturels.
                            </p>
                        </div>
                        <div className="practice-card" style={{ '--card-color': '#A8C5A0' }}>
                            <div className="practice-icon">
                                <DrawSvgIcon color="#A8C5A0" size={60} delay={200}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none"><path d="M59.0195 26.0341C57.9528 24.9674 56.5513 24.3845 55.0505 24.3845C49.3699 24.3845 43.7637 25.3023 38.3807 27.1256L35.8753 27.969C35.7265 28.0186 35.6397 27.8078 35.7761 27.7457L38.1575 26.5674C43.2552 24.0496 47.8691 20.738 51.8877 16.7194C52.942 15.6651 53.5249 14.2884 53.5373 12.8248C53.5745 9.74884 51.0691 7.1814 47.9931 7.13178C46.4676 7.10698 45.0288 7.70233 43.9497 8.7814C39.9311 12.8 36.6195 17.414 34.1017 22.5116L32.9234 24.893C32.849 25.0295 32.6505 24.9426 32.7001 24.7938L33.5435 22.2884C35.3668 16.9054 36.2846 11.2992 36.2846 5.61861C36.2846 4.11783 35.7017 2.70388 34.635 1.64961C33.5683 0.582946 32.1668 0 30.666 0C29.1652 0 27.7513 0.582946 26.697 1.64961C25.6304 2.71628 25.0474 4.11783 25.0474 5.61861C25.0474 11.2992 25.9652 16.9054 27.7885 22.2884L28.6319 24.7938C28.6815 24.9426 28.4707 25.0295 28.4086 24.893L27.2304 22.5116C24.7125 17.414 21.4009 12.8 17.3823 8.7814C16.328 7.72713 14.9513 7.14419 13.4877 7.13178C10.3993 7.09457 7.83191 9.6 7.7947 12.676C7.76989 14.2016 8.36524 15.6403 9.44431 16.7194C13.4629 20.738 18.0769 24.0496 23.1745 26.5674L25.5559 27.7457C25.6924 27.8202 25.6056 28.0186 25.4567 27.969L22.9513 27.1256C17.5683 25.3023 11.9621 24.3845 6.28152 24.3845C4.78074 24.3845 3.36679 24.9674 2.31253 26.0341C0.117178 28.2295 0.117178 31.7891 2.31253 33.9845C3.37919 35.0512 4.78074 35.6341 6.28152 35.6341C11.9621 35.6341 17.5683 34.7163 22.9513 32.893L25.4567 32.0496C25.6056 32 25.6924 32.2109 25.5559 32.2729L23.1745 33.4512C18.0769 35.969 13.4629 39.2806 9.44431 43.2992C8.39005 44.3535 7.8071 45.7302 7.7947 47.1938C7.75749 50.2698 10.2629 52.8372 13.3389 52.8868C14.8645 52.9116 16.3032 52.3163 17.3823 51.2372C21.4009 47.2186 24.7125 42.6047 27.2304 37.507L28.4086 35.1256C28.4831 34.9891 28.6815 35.076 28.6319 35.2248L27.7885 37.7302C25.9652 43.1132 25.0474 48.7194 25.0474 54.4C25.0474 55.9008 25.6304 57.3147 26.697 58.369C27.7637 59.4357 29.1652 60.0186 30.666 60.0186C32.1668 60.0186 33.5807 59.4357 34.635 58.369C35.7017 57.3023 36.2846 55.9008 36.2846 54.4C36.2846 48.7194 35.3668 43.1132 33.5435 37.7302L32.7001 35.2248C32.6505 35.076 32.8614 34.9891 32.9234 35.1256L34.1017 37.507C36.6195 42.6047 39.9311 47.2186 43.9497 51.2372C45.004 52.2915 46.3807 52.8744 47.8443 52.8868C50.9203 52.924 53.4877 50.4186 53.5373 47.3426C53.5621 45.8171 52.9668 44.3783 51.8877 43.2992C47.8691 39.2806 43.2552 35.969 38.1575 33.4512L35.7761 32.2729C35.6397 32.1984 35.7265 32 35.8753 32.0496L38.3807 32.893C43.7637 34.7163 49.3699 35.6341 55.0505 35.6341C56.5513 35.6341 57.9652 35.0512 59.0195 33.9845C61.2149 31.7891 61.2149 28.2171 59.0195 26.0341Z" /></svg>
                                </DrawSvgIcon>
                            </div>
                            <h3>L'esprit</h3>
                            <p>
                                Le mental influence directement ton équilibre.
                                Lorsque le stress ou les pensées répétitives s'installent, la sophrologie t'aide à retrouver du calme et de la stabilité.
                                Grâce à la respiration, à la détente et à la visualisation, tu apprends à relâcher la pression et à te recentrer.
                            </p>
                        </div>
                        <div className="practice-card" style={{ '--card-color': '#FFCF00' }}>
                            <div className="practice-icon">
                                <DrawSvgIcon color="#FFCF00" size={60} delay={400}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none"><path d="M10.9196 36.2319C11.2457 37.3188 11.6443 38.3333 12.1153 39.3116C10.4124 40.5072 9.32543 42.5 9.32543 44.7101C9.32543 48.3696 12.2965 51.3406 15.9559 51.3406C18.166 51.3406 20.1588 50.2536 21.3544 48.5507C22.3327 49.0217 23.3834 49.4203 24.4341 49.7464C23.7457 50.7971 23.3472 52.0652 23.3472 53.4058C23.3472 57.0652 26.3182 60.0362 29.9776 60.0362V42.5725C23.637 42.0652 18.6008 37.029 18.0935 30.6884H0.666016C0.666016 34.3478 3.63703 37.3188 7.29645 37.3188C8.63703 37.3551 9.90515 36.9203 10.9196 36.2319Z" /><path d="M50.3762 36.2319C50.0501 37.3188 49.6515 38.3333 49.1805 39.3116C50.8834 40.5072 51.9704 42.5 51.9704 44.7101C51.9704 48.3696 48.9993 51.3406 45.3399 51.3406C43.1298 51.3406 41.137 50.2536 39.9414 48.5507C38.9631 49.0217 37.9124 49.4203 36.8617 49.7464C37.5501 50.7971 37.9486 52.0652 37.9486 53.4058C37.9486 57.0652 34.9776 60.0362 31.3182 60.0362V42.5725C37.6588 42.0652 42.695 37.029 43.2022 30.6884H60.666C60.666 34.3478 57.695 37.3188 54.0356 37.3188C52.695 37.3551 51.4269 36.9203 50.3762 36.2319Z" /><path d="M10.9196 23.8043C11.2457 22.7174 11.6443 21.7029 12.1153 20.7246C10.4124 19.529 9.32543 17.5362 9.32543 15.3261C9.32543 11.6667 12.2965 8.69565 15.9559 8.69565C18.166 8.69565 20.1588 9.78261 21.3544 11.4855C22.3327 11.0145 23.3834 10.6159 24.4341 10.2899C23.7457 9.23913 23.3472 7.97101 23.3472 6.63043C23.3472 2.97101 26.3182 0 29.9776 0V17.4275C23.637 17.971 18.6008 23.0072 18.0935 29.3478H0.666016C0.666016 25.6884 3.63703 22.7174 7.29645 22.7174C8.63703 22.7174 9.90515 23.1159 10.9196 23.8043Z" /><path d="M50.3762 23.8043C50.0501 22.7174 49.6515 21.7029 49.1805 20.7246C50.8834 19.529 51.9704 17.5362 51.9704 15.3261C51.9704 11.6667 48.9993 8.69565 45.3399 8.69565C43.1298 8.69565 41.137 9.78261 39.9414 11.4855C38.9631 11.0145 37.9124 10.6159 36.8617 10.2899C37.5501 9.23913 37.9486 7.97101 37.9486 6.63043C37.9486 2.97101 34.9776 0 31.3182 0V17.4275C37.6588 17.9348 42.695 22.971 43.2022 29.3116H60.666C60.666 25.6522 57.695 22.6812 54.0356 22.6812C52.695 22.7174 51.4269 23.1159 50.3762 23.8043Z" /><path d="M30.666 40.942C35.1588 40.942 38.8182 37.2826 38.8182 32.7899C38.8182 28.2971 35.1588 24.6377 30.666 24.6377C26.1733 24.6377 22.5138 28.2971 22.5138 32.7899C22.4776 37.2826 26.1733 40.942 30.666 40.942Z" /></svg>
                                </DrawSvgIcon>
                            </div>
                            <h3>Les émotions</h3>
                            <p>
                                Les émotions sont des messagères précieuses.
                                Lorsqu'elles s'accumulent, elles peuvent bloquer ton énergie.
                                En séance, nous les explorons avec douceur pour les reconnaître, les libérer et les transformer.
                                Tu apprends à les accueillir sans les craindre et à retrouver une paix intérieure durable.
                            </p>
                        </div>
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
                                { id: 'massage', label: 'Rituel AromaTouch', icon: <img src={`${import.meta.env.BASE_URL}icons/service/aromatouch.svg`} alt="" className="service-svg-icon" />, color: '#6e70cc', textColor: '#1E1B4B' },
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
                                    <img src={`${import.meta.env.BASE_URL}services/Naturopathie2.jpg`} alt="Naturopathie" />
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
                                            <p>Parcours de base + 1 séance de suivi. Pour amorcer des changements concrets et retrouver un équilibre qui te correspond.</p>
                                        </div>
                                        <div className="pack-item highlight">
                                            <div className="pack-header">
                                                <span className="pack-name">Pack Renaissance</span>
                                                <span className="pack-price"><s>260€</s> 230€</span>
                                            </div>
                                            <p>Parcours de base + 2 séances de suivi. Pour ancrer durablement tes nouvelles habitudes et retrouver une énergie stable au quotidien.</p>
                                        </div>
                                        <div className="pack-item highlight">
                                            <div className="pack-header">
                                                <span className="pack-name">Pack Éclat</span>
                                                <span className="pack-price"><s>320€</s> 290€</span>
                                            </div>
                                            <p>Parcours de base + 3 séances de suivi + bonus : rituel AromaTouch des mains et échantillon d'une huile essentielle de ton choix. Pour aller plus loin, ancrer les changements en profondeur et t'installer durablement dans un nouvel équilibre.</p>
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
                                            <p>Anamnèse, définition de ton objectif et séance de découverte (1h30) pour poser les bases de ton accompagnement en douceur.</p>
                                        </div>
                                        <div className="pack-item">
                                            <div className="pack-header">
                                                <span className="pack-name">Séance de suivi</span>
                                                <span className="pack-price">60€</span>
                                            </div>
                                            <p>Pratiques progressives (1h) pour t'aider à avancer pas à pas et renforcer ton équilibre intérieur.</p>
                                        </div>
                                        <div className="pack-item highlight">
                                            <div className="pack-header">
                                                <span className="pack-name">Pack Éveil</span>
                                                <span className="pack-price">À partir de 500€</span>
                                            </div>
                                            <p>Un accompagnement complet pour transformer en profondeur ton rapport à toi-même.</p>
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
                                    <img src={`${import.meta.env.BASE_URL}crusine/WhatsApp%20Image%202026-04-01%20at%2015.16.23%20(5).jpeg`} alt="Ateliers culinaires" />
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
                                            <p>Chaque mois, explore une nouvelle thématique gourmande, vivante et pleine d'énergie (2h), pour cuisiner autrement en partageant un moment convivial.</p>
                                        </div>
                                        <div className="pack-item">
                                            <div className="pack-header">
                                                <span className="pack-name">Crusine chez Toi !</span>
                                                <span className="pack-price">Sur devis</span>
                                            </div>
                                            <p>Un atelier privé et sur-mesure à domicile, pour allier plaisir, santé et convivialité. Parfait entre amis ou en famille.</p>
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
                                    <img src={`${import.meta.env.BASE_URL}services/massage.jpg`} alt="Rituel AromaTouch" />
                                </div>
                                <div className="services-tab-info">
                                    <h3>Rituel AromaTouch</h3>
                                    <div className="packs-list">
                                        <div className="pack-item">
                                            <div className="pack-header">
                                                <span className="pack-name">AromaTouch® Équilibre</span>
                                                <span className="pack-price">65€</span>
                                            </div>
                                            <p>Un rituel aux huiles essentielles pour relâcher les tensions, apaiser le système nerveux et retrouver un état de calme profond.</p>
                                        </div>
                                        <div className="pack-item highlight">
                                            <div className="pack-header">
                                                <span className="pack-name">AromaTouch® Saisons</span>
                                                <span className="pack-price"><s>260€</s> 220€</span>
                                            </div>
                                            <p>Un pack de 4 séances à programmer au fil des saisons, pour accompagner ton corps en douceur dans ses transitions naturelles et soutenir ton équilibre tout au long de l'année.</p>
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
                        <h2 className="section-title">Quel accompagnement est le plus juste pour toi ?</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Chaque approche répond à des besoins différents. Voici un aperçu pour t'aider à trouver celle qui te correspond.
                        </p>
                    </div>

                    <div className="pricing-cards reveal-stagger">
                        {[
                            {
                                name: 'Naturopathie',
                                color: '#FFCF00',
                                textColor: '#7A6200',
                                objective: 'Mieux comprendre ton corps et retrouver ton équilibre',
                                duration: '1h à 1h30',
                                features: [
                                    'Retrouver ton énergie',
                                    'Comprendre ton corps',
                                    'Adapter ton hygiène de vie',
                                    'Avancer à ton rythme',
                                    'Être accompagnée durablement',
                                ],
                                price: '60',
                                link: '/naturopathie'
                            },
                            {
                                name: 'Sophrologie',
                                color: '#ffcfe7',
                                textColor: '#8B3A60',
                                objective: 'Apaiser ton mental et tes émotions',
                                duration: '1h à 1h30',
                                features: [
                                    'Apaiser le stress',
                                    'Équilibrer tes émotions',
                                    'Te reconnecter à ta respiration',
                                    'T\'ancrer dans le présent',
                                    'Pratiquer en autonomie',
                                ],
                                price: '60',
                                link: '/sophrologie'
                            },
                            {
                                name: 'Ateliers Crusine',
                                color: '#bdd7ba',
                                textColor: '#2D5A28',
                                objective: 'Apprendre à cuisiner vivant, simplement',
                                duration: '2h',
                                features: [
                                    'Cuisiner simplement et sainement',
                                    'Retrouver plaisir et vitalité',
                                    'Repartir avec des recettes concrètes',
                                    'Partager un moment convivial',
                                    'Gagner en autonomie',
                                ],
                                price: '65',
                                link: '/ateliers-culinaires'
                            },
                            {
                                name: 'Rituel AromaTouch',
                                color: '#6e70cc',
                                textColor: '#1E1B4B',
                                objective: 'Apaiser le corps et le système nerveux',
                                duration: '1h',
                                features: [
                                    'Relâcher les tensions',
                                    'Apaiser le système nerveux',
                                    'Profiter d\'un moment pour toi',
                                    'Retrouver un calme profond',
                                    'Soutenir ton équilibre',
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
                            <Link to="/contact" className="btn-primary" style={{ marginTop: '1.5rem' }}>Échanger ensemble</Link>
                        </div>
                        <div className="how-right">
                            {[
                                { num: 1, title: 'Prise de contact', desc: 'Un premier échange (téléphone ou mail) pour comprendre tes besoins et t\'orienter vers l\'accompagnement le plus juste pour toi.' },
                                { num: 2, title: 'Bilan personnalisé', desc: 'Lors de notre première rencontre, nous faisons ensemble un bilan complet de ta vitalité, de tes habitudes et de tes objectifs.' },
                                { num: 3, title: 'Plan d\'action', desc: 'Je te propose un accompagnement sur-mesure, avec des conseils pratiques et des outils concrets, adaptés à ton rythme.' },
                                { num: 4, title: 'Suivi & évolution', desc: 'Des séances de suivi régulières pour ajuster l\'accompagnement et soutenir tes évolutions dans le temps.' },
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

            <PageBottom />
        </>
    );
};

export default Home;
