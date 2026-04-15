import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageBottom from '../components/PageBottom';
import './About.css';

const About = () => {
    const B = import.meta.env.BASE_URL;
    return (
        <>
        <div className="about-page animate-in">

            {/* ===== HERO — même style que la page événements ===== */}
            <section className="about-banner">
                <div className="about-banner-bg">
                    <img src={`${B}qsn/qsn-banner.jpg`} alt="" />
                </div>
                <div className="about-banner-content">
                    <span className="section-label" style={{ color: 'white' }}>À propos de moi</span>
                    <h1>Chloé Wisser</h1>
                    <p className="about-hero-subtitle">Naturopathe et sophrologue</p>
                </div>
            </section>

            <div className="container">

                {/* ===== MON HISTOIRE — photo gauche, texte droite ===== */}
                <section className="about-story-section">
                    <div className="about-story-photo">
                        <img src={`${B}chloe-home.jpeg`} alt="Chloé Wisser" />
                    </div>
                    <div className="about-story-text">
                        <h2>Mon histoire</h2>
                        <p>
                            Je m'appelle Chloé, passionnée par l'équilibre entre le corps et l'esprit.
                            Dès ma licence de psychologie, j'ai été fascinée par les mystères de la psyché humaine :
                            comprendre comment chacun de nous peut accéder à plus de sérénité, de confiance et de
                            bonheur est devenu mon moteur. Grandir dans un environnement bienveillant m'a très tôt
                            donné le goût du partage et de l'aide à l'autre ; c'est ce même désir d'accompagner qui
                            m'a menée à créer ce site et à t'accueillir dans mon univers.
                        </p>
                        <p>
                            Ce chemin, je ne l'ai pas emprunté par hasard.
                            Mon parcours a débuté bien plus tôt que je ne le réalisais : à tout juste un an et demi,
                            une tumeur cancéreuse au niveau de l'abdomen a nécessité son ablation, suivie de plusieurs
                            cures de chimiothérapie, avant de laisser place, après des années de contrôles réguliers,
                            à une vie d'enfant presque ordinaire. À quatorze ans, une occlusion intestinale m'a à
                            nouveau conduite au bloc opératoire, me rappelant que la santé est un trésor qu'il faut
                            sans cesse préserver.
                        </p>
                        <p>
                            Pensant avant tout à mon bien-être, mes parents ont très tôt adopté une alimentation
                            sans viande rouge — uniquement volaille et poisson —, riche en légumes et en fruits,
                            avec un maximum de plats faits maison au quotidien. Ils intégraient également plantes
                            et méthodes douces pour soutenir la santé de toute la famille, m'ouvrant dès le plus
                            jeune âge à une vision globale mêlant accompagnement professionnel et ressources de la nature.
                        </p>
                    </div>
                </section>

                {/* ===== SECTION 2 — texte + images mosaïque ===== */}
                <section className="about-mosaic-section">
                    <div className="about-mosaic-left">
                        <p>
                            Ces expériences m'ont appris deux choses essentielles : la résilience naît de l'alliance
                            entre savoir-faire et bienveillance, et chacun peut devenir acteur de sa santé. C'est
                            cette conviction personnelle qui guide aujourd'hui ma mission : t'offrir un accompagnement
                            global, fondé sur l'expertise et l'écoute, pour que tu trouves, toi aussi, les clés d'un
                            bien-être durable et profondément enraciné dans l'espoir et la confiance.
                        </p>
                        <div className="about-mosaic-img-large">
                            <img src={`${B}qsn/qsn3.jpg`} alt="" />
                        </div>
                    </div>
                    <div className="about-mosaic-right">
                        <div className="about-mosaic-thumbs">
                            <img src={`${B}qsn/qsn3.webp`} alt="" />
                            <img src={`${B}qsn/qsn.webp`} alt="" />
                        </div>
                        <p>
                            Pour moi, la sophrologie est une histoire de famille : après une première carrière,
                            mon père s'est reconverti en sophrologue, et c'est tout naturellement qu'il m'a donné
                            envie de découvrir cette méthode de bien-être. Je me suis ainsi formée à l'Institut
                            Catherine Aliotta, où j'ai trouvé un précieux équilibre entre respiration, relaxation
                            et visualisation positive : des outils concrets pour apaiser le stress et renouer avec
                            ses propres ressources. Titulaire du Certificat Professionnel de Sophrologue (RNCP) et
                            membre de la Chambre Syndicale de Sophrologie, je m'engage chaque jour à respecter un
                            code de déontologie qui garantit rigueur et bienveillance.
                        </p>
                    </div>
                </section>

                {/* ===== SECTION 3 — texte gauche + image droite ===== */}
                <section className="about-closing-section">
                    <div className="about-closing-text">
                        <p>
                            Désireuse d'offrir un accompagnement vraiment holistique, j'ai poursuivi mon chemin
                            en naturopathie et ai achevé ma formation à Dargère Univers en 2024. J'y ai approfondi
                            l'art de l'autoguérison par des moyens naturels : nutrition, plantes, hygiène de vie…
                            Chaque notion apprise enrichit ma palette de compétences pour t'aider à retrouver ton
                            pouvoir d'acteur·rice de ta propre santé.
                        </p>
                        <p>
                            Pour compléter cet éventail, j'ai suivi une formation en crusine avec Les cRAWquantes,
                            afin de proposer des ateliers gourmands et ludiques qui reconnectent le plaisir de manger
                            à nos besoins physiologiques et à la planète. Plus récemment, j'ai ajouté à mon offre
                            la technique AromaTouch de dōTerra, pour offrir détente profonde et rééquilibrage
                            énergétique par le toucher et les huiles essentielles.
                        </p>
                        <p>
                            Je continue par ailleurs à me former en permanence : lectures spécialisées,
                            partenariats enrichissants et nouvelles formations en cours de préparation me
                            permettent d'élargir sans cesse mes savoirs et mes outils.
                        </p>
                        <h2 className="about-closing-quote">
                            Bienvenue ! J'ai hâte de te rencontrer et de partager avec toi ce chemin vers un bien-être durable et harmonieux.
                        </h2>
                    </div>
                    <div className="about-closing-image">
                        <img src={`${B}qsn/qsn.jpg`} alt="" />
                    </div>
                </section>

                {/* Mes valeurs */}
                <section className="about-valeurs">
                    <div className="about-valeurs-header text-center">
                        <span className="section-label">Ce qui me guide</span>
                        <h2 className="section-title">Mes valeurs</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Des principes profondément ancrés qui orientent chacun de mes accompagnements.
                        </p>
                    </div>
                    <div className="about-valeurs-grid">
                        {[
                            { file: 'joie-gratitude', title: 'Joie & gratitude', text: 'Savourer chaque instant et honorer ce qui nous nourrit.' },
                            { file: 'douceur-bienveillance', title: 'Douceur & bienveillance', text: 'Accueillir, sans jugement envers soi ou les autres.' },
                            { file: 'transmission', title: 'Transmission', text: 'Partager mes savoirs pour te rendre autonome.' },
                            { file: 'sante-responsable', title: 'Santé responsable', text: 'Bio, local, de saison pour un bien-être durable.' },
                            { file: 'ecoute-partage', title: 'Écoute & partage', text: 'Suivre ton instinct et grandir ensemble.' },
                        ].map((v, i) => (
                            <div className="about-valeur-item" key={i}>
                                <div className="about-valeur-icon">
                                    <img src={`${B}icons/icone-qsn/${v.file}.png`} alt={v.title} />
                                </div>
                                <h3>{v.title}</h3>
                                <p>{v.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mon parcours — certifications */}
                <section className="about-parcours">
                    <div className="text-center">
                        <span className="section-label">Formations & certifications</span>
                        <h2 className="section-title">Mon parcours</h2>
                        <p className="section-subtitle" style={{ margin: '0 auto' }}>
                            Mon chemin a commencé par une licence de psychologie, puis s'est enrichi au fil des années.
                        </p>
                    </div>

                    <div className="parcours-timeline">
                        {[
                            { year: '2019', name: 'Sophrologie', school: 'Institut Catherine Aliotta', icon: 'sophrologie', color: '#ffcfe7', textColor: '#8B3A60' },
                            { year: '2022', name: 'Crusine vivante', school: 'Les cRAWquantes', icon: 'crusine', color: '#bdd7ba', textColor: '#2D5A28' },
                            { year: '2021–2024', name: 'Naturopathie', school: 'École Dargère Univers', icon: 'naturopathie', color: '#ffcf00', textColor: '#7A6200' },
                            { year: '2025', name: 'AromaTouch®', school: 'dōTerra', icon: 'aromatouch', color: '#6e70cc', textColor: '#fff' },
                        ].map((item, i) => (
                            <div className="parcours-card" key={i}>
                                <div className="parcours-card-accent" style={{ background: item.color }} />
                                <span className="parcours-year" style={{ background: item.color, color: item.textColor }}>{item.year}</span>
                                <div className="parcours-icon" style={{ color: item.textColor, background: `${item.color}30` }}>
                                    <img src={`${B}icons/service/${item.icon}.svg`} alt="" />
                                </div>
                                <h4 className="parcours-name">{item.name}</h4>
                                <span className="parcours-school">{item.school}</span>
                            </div>
                        ))}
                    </div>

                    <p className="parcours-closing">
                        Un parcours au croisement du corps, des émotions et de la nature… que je mets
                        aujourd'hui au service de ton bien-être.
                    </p>
                </section>

                {/* Mes pratiques — avec icônes SVG custom */}
                <section className="about-pratiques">
                    <h2>Mes pratiques</h2>
                    <p>
                        Explore ton corps, ton souffle et tes émotions pour une transformation en douceur :
                        de la compréhension à l'harmonisation physique, émotionnelle et énergétique.
                    </p>
                    <div className="about-pratiques-grid reveal-stagger">
                        {[
                            { name: 'Naturopathie', icon: 'naturopathie', link: '/naturopathie', color: '#ffcf00' },
                            { name: 'Sophrologie', icon: 'sophrologie', link: '/sophrologie', color: '#E8C8D8' },
                            { name: 'Phytothérapie', icon: 'phytotherapie', link: '/phytotherapie', color: '#7AA476' },
                            { name: 'Rééquilibrage alimentaire', icon: 'reequilibrage', link: '/reequilibrage-alimentaire', color: '#A8C5A0' },
                            { name: 'Massage AromaTouch®', icon: 'massage', link: '/massage', color: '#6e70cc' },
                            { name: 'Ateliers de crusine', icon: 'crusine', link: '/ateliers-culinaires', color: '#bdd7ba' },
                        ].map((s) => (
                            <Link to={s.link} key={s.name} className="about-pratique-card">
                                <div className="about-pratique-icon" style={{ background: `${s.color}20`, color: s.color }}>
                                    <img src={`${B}icons/service/${s.icon}.svg`} alt="" />
                                </div>
                                <span>{s.name}</span>
                                <ArrowRight size={14} className="about-pratique-arrow" />
                            </Link>
                        ))}
                    </div>
                </section>


            </div>
        </div>
        <PageBottom />
        </>
    );
};

export default About;
