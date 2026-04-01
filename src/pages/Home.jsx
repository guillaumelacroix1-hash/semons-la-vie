import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import DrawSvgIcon from '../components/DrawSvgIcon';
import '../components/DrawSvgIcon.css';
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
    const [activeService, setActiveService] = useState(0);
    const mandalaRef = useRef(null);
    const practicesRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!mandalaRef.current) return;
            const rotation = window.scrollY * 0.08;
            mandalaRef.current.style.transform = `rotate(${rotation}deg)`;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                    </div>
                </div>
            </section>

            {/* Services Showcase — Image cards with purple hover */}
            <section className="services-showcase" id="services-showcase">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span className="section-label">Mes services</span>
                        <h2 className="section-title">
                            Des accompagnements sur-mesure pour ton bien-être
                        </h2>
                    </div>
                    <div className="services-showcase-grid">
                        {services.map((s) => (
                            <ServiceCard
                                key={s.id}
                                title={s.label}
                                description={s.desc}
                                link={s.link}
                                icon={s.icon}
                                image={s.image}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Déroulement des accompagnements */}
            <section className="practices-section" id="pratiques">
                <div className="container">
                    <div className="text-center">
                        <Link to="/qui-suis-je" className="section-pill">Découvrir mes accompagnements</Link>
                        <span className="section-label">Comment cela fonctionne ?</span>
                        <h2 className="section-title">
                            Déroulement des accompagnements
                        </h2>
                        <p className="section-subtitle" style={{ maxWidth: '750px', margin: '0 auto' }}>
                            Explore ton corps, ton souffle et tes émotions pour une transformation en douceur : de la
                            compréhension à l'harmonisation physique, émotionnelle et énergétique.
                        </p>
                    </div>
                    <div className="practices-grid" ref={practicesRef}>
                        <div className="practice-card">
                            <div className="practice-icon">
                                <DrawSvgIcon color="#F4C6D0" size={60} delay={0}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none"><path d="M31.1412 26.07C30.4828 26.6282 29.5173 26.6282 28.8589 26.07C22.6199 20.7811 19.4119 15.6483 19.4119 10.6063C19.4118 4.75853 24.1523 0.0180664 30 0.0180664C35.8477 0.0180664 40.5882 4.75853 40.5882 10.6063C40.5882 15.6483 37.3802 20.7811 31.1412 26.07ZM31.1412 33.9661C37.3802 39.255 40.5882 44.3878 40.5882 49.4298C40.5882 55.2776 35.8478 60.0181 30 60.0181C24.1522 60.0181 19.4118 55.2776 19.4118 49.4298C19.4118 44.3878 22.6198 39.255 28.8588 33.9661C29.5173 33.4079 30.4827 33.4079 31.1412 33.9661ZM33.948 31.1592C33.3899 30.5009 33.3899 29.5354 33.948 28.877C39.2371 22.638 44.3699 19.4299 49.4118 19.4299C55.2595 19.4298 60 24.1703 60 30.0181C60 35.8658 55.2595 40.6063 49.4118 40.6063C44.3698 40.6063 39.2369 37.3983 33.948 31.1592ZM26.052 31.1592C20.7629 37.3983 15.6301 40.6063 10.5882 40.6063C4.74047 40.6063 0 35.8658 0 30.0181C0 24.1703 4.74047 19.4298 10.5882 19.4298C15.6302 19.4298 20.763 22.6378 26.052 28.8769C26.6101 29.5354 26.6101 30.5008 26.052 31.1592Z" /></svg>
                                </DrawSvgIcon>
                            </div>
                            <h3>Le corps</h3>
                            <p>
                                Ton corps est le premier messager de ton équilibre. Il exprime ce qui a besoin
                                d'être entendu à travers la digestion, le sommeil, les tensions ou la fatigue. Au
                                fil des séances, nous apprenons à écouter ses signaux et à lui redonner
                                son pouvoir d'autorégulation grâce à la naturopathie, à l'alimentation
                                vivante, à la respiration et aux remèdes naturels. Ce travail favorise la vitalité,
                                la légèreté et la clarté intérieure.
                            </p>
                        </div>
                        <div className="practice-card">
                            <div className="practice-icon">
                                <DrawSvgIcon color="#A8C5A0" size={60} delay={200}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none"><path d="M59.0195 26.0341C57.9528 24.9674 56.5513 24.3845 55.0505 24.3845C49.3699 24.3845 43.7637 25.3023 38.3807 27.1256L35.8753 27.969C35.7265 28.0186 35.6397 27.8078 35.7761 27.7457L38.1575 26.5674C43.2552 24.0496 47.8691 20.738 51.8877 16.7194C52.942 15.6651 53.5249 14.2884 53.5373 12.8248C53.5745 9.74884 51.0691 7.1814 47.9931 7.13178C46.4676 7.10698 45.0288 7.70233 43.9497 8.7814C39.9311 12.8 36.6195 17.414 34.1017 22.5116L32.9234 24.893C32.849 25.0295 32.6505 24.9426 32.7001 24.7938L33.5435 22.2884C35.3668 16.9054 36.2846 11.2992 36.2846 5.61861C36.2846 4.11783 35.7017 2.70388 34.635 1.64961C33.5683 0.582946 32.1668 0 30.666 0C29.1652 0 27.7513 0.582946 26.697 1.64961C25.6304 2.71628 25.0474 4.11783 25.0474 5.61861C25.0474 11.2992 25.9652 16.9054 27.7885 22.2884L28.6319 24.7938C28.6815 24.9426 28.4707 25.0295 28.4086 24.893L27.2304 22.5116C24.7125 17.414 21.4009 12.8 17.3823 8.7814C16.328 7.72713 14.9513 7.14419 13.4877 7.13178C10.3993 7.09457 7.83191 9.6 7.7947 12.676C7.76989 14.2016 8.36524 15.6403 9.44431 16.7194C13.4629 20.738 18.0769 24.0496 23.1745 26.5674L25.5559 27.7457C25.6924 27.8202 25.6056 28.0186 25.4567 27.969L22.9513 27.1256C17.5683 25.3023 11.9621 24.3845 6.28152 24.3845C4.78074 24.3845 3.36679 24.9674 2.31253 26.0341C0.117178 28.2295 0.117178 31.7891 2.31253 33.9845C3.37919 35.0512 4.78074 35.6341 6.28152 35.6341C11.9621 35.6341 17.5683 34.7163 22.9513 32.893L25.4567 32.0496C25.6056 32 25.6924 32.2109 25.5559 32.2729L23.1745 33.4512C18.0769 35.969 13.4629 39.2806 9.44431 43.2992C8.39005 44.3535 7.8071 45.7302 7.7947 47.1938C7.75749 50.2698 10.2629 52.8372 13.3389 52.8868C14.8645 52.9116 16.3032 52.3163 17.3823 51.2372C21.4009 47.2186 24.7125 42.6047 27.2304 37.507L28.4086 35.1256C28.4831 34.9891 28.6815 35.076 28.6319 35.2248L27.7885 37.7302C25.9652 43.1132 25.0474 48.7194 25.0474 54.4C25.0474 55.9008 25.6304 57.3147 26.697 58.369C27.7637 59.4357 29.1652 60.0186 30.666 60.0186C32.1668 60.0186 33.5807 59.4357 34.635 58.369C35.7017 57.3023 36.2846 55.9008 36.2846 54.4C36.2846 48.7194 35.3668 43.1132 33.5435 37.7302L32.7001 35.2248C32.6505 35.076 32.8614 34.9891 32.9234 35.1256L34.1017 37.507C36.6195 42.6047 39.9311 47.2186 43.9497 51.2372C45.004 52.2915 46.3807 52.8744 47.8443 52.8868C50.9203 52.924 53.4877 50.4186 53.5373 47.3426C53.5621 45.8171 52.9668 44.3783 51.8877 43.2992C47.8691 39.2806 43.2552 35.969 38.1575 33.4512L35.7761 32.2729C35.6397 32.1984 35.7265 32 35.8753 32.0496L38.3807 32.893C43.7637 34.7163 49.3699 35.6341 55.0505 35.6341C56.5513 35.6341 57.9652 35.0512 59.0195 33.9845C61.2149 31.7891 61.2149 28.2171 59.0195 26.0341Z" /></svg>
                                </DrawSvgIcon>
                            </div>
                            <h3>L'esprit</h3>
                            <p>
                                Le mental influence directement l'équilibre du corps. Lorsque le stress,
                                les pensées répétitives ou la fatigue émotionnelle s'installent, la
                                sophrologie permet de retrouver calme et stabilité. Par des exercices de
                                respiration, de détente et de visualisation, tu réapprends à relâcher
                                la pression, à te recentrer et à accueillir la vie avec plus de clarté et
                                de confiance.
                            </p>
                        </div>
                        <div className="practice-card">
                            <div className="practice-icon">
                                <DrawSvgIcon color="#FFCF00" size={60} delay={400}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none"><path d="M10.9196 36.2319C11.2457 37.3188 11.6443 38.3333 12.1153 39.3116C10.4124 40.5072 9.32543 42.5 9.32543 44.7101C9.32543 48.3696 12.2965 51.3406 15.9559 51.3406C18.166 51.3406 20.1588 50.2536 21.3544 48.5507C22.3327 49.0217 23.3834 49.4203 24.4341 49.7464C23.7457 50.7971 23.3472 52.0652 23.3472 53.4058C23.3472 57.0652 26.3182 60.0362 29.9776 60.0362V42.5725C23.637 42.0652 18.6008 37.029 18.0935 30.6884H0.666016C0.666016 34.3478 3.63703 37.3188 7.29645 37.3188C8.63703 37.3551 9.90515 36.9203 10.9196 36.2319Z" /><path d="M50.3762 36.2319C50.0501 37.3188 49.6515 38.3333 49.1805 39.3116C50.8834 40.5072 51.9704 42.5 51.9704 44.7101C51.9704 48.3696 48.9993 51.3406 45.3399 51.3406C43.1298 51.3406 41.137 50.2536 39.9414 48.5507C38.9631 49.0217 37.9124 49.4203 36.8617 49.7464C37.5501 50.7971 37.9486 52.0652 37.9486 53.4058C37.9486 57.0652 34.9776 60.0362 31.3182 60.0362V42.5725C37.6588 42.0652 42.695 37.029 43.2022 30.6884H60.666C60.666 34.3478 57.695 37.3188 54.0356 37.3188C52.695 37.3551 51.4269 36.9203 50.3762 36.2319Z" /><path d="M10.9196 23.8043C11.2457 22.7174 11.6443 21.7029 12.1153 20.7246C10.4124 19.529 9.32543 17.5362 9.32543 15.3261C9.32543 11.6667 12.2965 8.69565 15.9559 8.69565C18.166 8.69565 20.1588 9.78261 21.3544 11.4855C22.3327 11.0145 23.3834 10.6159 24.4341 10.2899C23.7457 9.23913 23.3472 7.97101 23.3472 6.63043C23.3472 2.97101 26.3182 0 29.9776 0V17.4275C23.637 17.971 18.6008 23.0072 18.0935 29.3478H0.666016C0.666016 25.6884 3.63703 22.7174 7.29645 22.7174C8.63703 22.7174 9.90515 23.1159 10.9196 23.8043Z" /><path d="M50.3762 23.8043C50.0501 22.7174 49.6515 21.7029 49.1805 20.7246C50.8834 19.529 51.9704 17.5362 51.9704 15.3261C51.9704 11.6667 48.9993 8.69565 45.3399 8.69565C43.1298 8.69565 41.137 9.78261 39.9414 11.4855C38.9631 11.0145 37.9124 10.6159 36.8617 10.2899C37.5501 9.23913 37.9486 7.97101 37.9486 6.63043C37.9486 2.97101 34.9776 0 31.3182 0V17.4275C37.6588 17.9348 42.695 22.971 43.2022 29.3116H60.666C60.666 25.6522 57.695 22.6812 54.0356 22.6812C52.695 22.7174 51.4269 23.1159 50.3762 23.8043Z" /><path d="M30.666 40.942C35.1588 40.942 38.8182 37.2826 38.8182 32.7899C38.8182 28.2971 35.1588 24.6377 30.666 24.6377C26.1733 24.6377 22.5138 28.2971 22.5138 32.7899C22.4776 37.2826 26.1733 40.942 30.666 40.942Z" /></svg>
                                </DrawSvgIcon>
                            </div>
                            <h3>Les émotions</h3>
                            <p>
                                Les émotions sont des messagères précieuses, mais lorsqu'elles
                                s'accumulent, elles peuvent bloquer la circulation de l'énergie. En séance,
                                nous les explorons avec douceur pour les reconnaître, les libérer et les
                                transformer. Grâce à l'écoute, au mouvement, à la respiration
                                consciente — et au soutien des huiles essentielles et des fleurs de Bach — tu
                                apprends à accueillir tes émotions sans les craindre et à retrouver une
                                paix intérieure durable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Tabs Section */}
            <section className="services-tabs-section" id="services">
                <div className="container">
                    <div className="services-tabs-header">
                        <div className="services-tabs-header-left">
                            <span className="section-label">Mes accompagnements</span>
                            <h2 className="section-title">
                                Naturopathie, sophrologie et techniques naturelles holistiques
                            </h2>
                        </div>
                        <div className="services-tabs-header-right">
                            <p>
                                En visio ou à mon cabinet, je t'aide à renouer avec tes propres ressources à travers
                                une écoute douce et une approche globale. Mon accompagnement est une invitation à te
                                reconnecter à ton corps, à apaiser ton mental et à soutenir les
                                forces naturelles de ton organisme.
                            </p>
                            <a href="#" className="btn-outline" style={{ marginTop: '1.5rem' }}>Réserver une séance</a>
                        </div>
                    </div>

                    <div className="services-tabs-layout">
                        <div className="services-tabs-list">
                            {services.map((s, i) => (
                                <button
                                    key={s.id}
                                    className={`services-tab-btn ${activeService === i ? 'active' : ''}`}
                                    onClick={() => setActiveService(i)}
                                >
                                    <span className="services-tab-icon">{s.icon}</span>
                                    <span className="services-tab-label">{s.label}</span>
                                </button>
                            ))}
                        </div>

                        <div className="services-tab-content">
                            {services.map((s, i) => (
                                <div
                                    key={s.id}
                                    className={`services-tab-panel ${activeService === i ? 'active' : ''}`}
                                >
                                    <div className="services-tab-image">
                                        <img src={s.image} alt={s.label} />
                                    </div>
                                    <div className="services-tab-info">
                                        <h3>{s.label}</h3>
                                        <p>{s.desc}</p>
                                        <Link to={s.link} className="btn-primary">
                                            En savoir plus <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            ))}
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
                                color: '#E8C8D8',
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
                                color: '#7AA476',
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
                                color: '#5B5EAB',
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
                                <div className="pricing-card-header" style={{ background: `linear-gradient(135deg, ${s.color}22, ${s.color}11)` }}>
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

            {/* Événements */}
            <section className="workshops-section" id="ateliers">
                <div className="container">
                    <div className="services-header">
                        <div>
                            <span className="section-label">Prochains événements</span>
                            <h2 className="section-title">Ateliers & événements</h2>
                        </div>
                        <div className="services-header-right">
                            <Link to="/ateliers-culinaires" className="btn-outline">Tous les événements <ArrowRight size={16} /></Link>
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
                            <Link to="/qui-suis-je" className="btn-primary">À propos de moi</Link>
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
