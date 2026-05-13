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
                            Je m'appelle Chloé. Si j'accompagne aujourd'hui des femmes sur le chemin de la santé
                            globale, ce n'est pas le fruit du hasard. C'est le résultat d'un parcours qui a commencé
                            bien plus tôt que je ne l'imaginais.
                        </p>
                        <p>
                            Très jeune, mon corps m'a appris que la santé est précieuse. À un an et demi, une tumeur
                            abdominale m'a conduite à l'hôpital. Des traitements lourds, des contrôles réguliers,
                            un univers médical devenu familier. Je n'en garde pas un souvenir dramatique, mais une
                            empreinte profonde : celle d'un corps fragile… et pourtant capable d'une immense résilience.
                        </p>
                        <p>
                            Puis, à quatorze ans, une occlusion intestinale m'a ramenée au bloc opératoire. Cette
                            fois, j'étais consciente. J'ai compris que le corps n'est jamais acquis. Qu'il demande
                            attention, respect, écoute. Et que prendre soin de lui est à la fois une responsabilité
                            et un acte d'amour.
                        </p>
                    </div>
                </section>

                {/* ===== SECTION 2 — texte + images mosaïque ===== */}
                <section className="about-mosaic-section">
                    <div className="about-mosaic-left">
                        <p>
                            Ces expériences ont semé en moi une conviction simple et forte : la santé n'est pas
                            seulement l'absence de maladie. C'est un équilibre vivant. Et nous pouvons apprendre
                            à en devenir actrices.
                        </p>
                        <p>
                            Avec le temps, j'ai aussi compris autre chose. Ce que l'on vit dans son corps peut
                            parfois devenir flou. Confus. On cherche des réponses, on lit, on teste… et malgré
                            tout, on ne se comprend plus vraiment. Je connais cette sensation. Et je sais combien
                            elle peut éroder la confiance.
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
                            J'ai grandi dans un environnement où l'on faisait attention à ce que l'on mettait
                            dans son assiette, où les plantes avaient leur place, où l'on cherchait des solutions
                            naturelles en complément du suivi médical. Très tôt, j'ai compris que le corps, les
                            émotions, le mental et l'énergie ne fonctionnent pas séparément. Tout est lié.
                        </p>
                        <p>
                            Mon parcours en psychologie m'a permis d'explorer la complexité de la psyché humaine.
                            Pourquoi réagissons-nous ainsi ? Pourquoi répétons-nous certains schémas ? Cette quête
                            de compréhension ne m'a jamais quittée.
                        </p>
                        <p>
                            Puis la sophrologie est entrée dans ma vie. Presque naturellement. Comme un pont entre
                            le corps et l'esprit. À l'Institut Catherine Aliotta, j'ai découvert des outils concrets,
                            simples et puissants. Respirer autrement. Relâcher. Visualiser. Revenir à soi. C'est là
                            que j'ai compris combien le mental et le corps dialoguent en permanence — et combien il
                            est possible d'apprendre à les réconcilier.
                        </p>
                    </div>
                </section>

                {/* ===== SECTION 3 — texte gauche + image droite ===== */}
                <section className="about-closing-section">
                    <div className="about-closing-text">
                        <p>
                            Mais je ressentais le besoin d'aller plus loin. De comprendre plus finement le
                            fonctionnement du corps. La naturopathie s'est imposée comme une évidence. Formée
                            chez Dargère Univers, j'y ai approfondi la nutrition, l'hygiène de vie, les plantes,
                            la physiologie… et surtout cette idée essentielle : chaque terrain est unique.
                        </p>
                        <p className="about-closing-emphasis">
                            Il n'existe pas de protocole universel.<br />
                            Il existe des femmes uniques.
                        </p>
                        <p>
                            J'ai également enrichi mon approche avec la crusine (Les cRAWquantes), pour reconnecter
                            le plaisir de manger à la vitalité, et avec la technique AromaTouch de dōTERRA, pour
                            redonner au toucher sa place dans l'équilibre du corps.
                        </p>
                        <p>
                            Mais au-delà des formations, ce qui me guide reste très simple.
                        </p>
                        <p className="about-closing-emphasis">
                            Je ne détiens pas ta vérité.<br />
                            Je t'accompagne à retrouver la tienne.
                        </p>
                        <p>
                            Je continue à apprendre. À lire. À tester sur moi. À ajuster. Parce que la santé n'est
                            pas figée. Elle évolue. Elle se cultive. Elle s'expérimente.
                        </p>
                        <h2 className="about-closing-quote">
                            Et au coeur de tout cela, il y a une chose que je n'oublie jamais : la joie de vivre
                            mérite d'être retrouvée.
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
                            { name: 'Rituel AromaTouch®', icon: 'massage', link: '/massage', color: '#6e70cc' },
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
