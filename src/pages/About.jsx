import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Feather, Users, HeartHandshake, Ear } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page animate-in">
            <div className="container">

                {/* Hero — 2 colonnes */}
                <section className="about-hero">
                    <div className="about-hero-content">
                        <span className="section-label">Qui suis-je ?</span>
                        <h1>Chloé Wisser</h1>
                        <p className="about-hero-subtitle">Naturopathe et sophrologue</p>
                        <p className="about-hero-intro">
                            Je m'appelle Chloé, passionnée par l'équilibre entre le corps et l'esprit.
                            Dès ma licence de psychologie, j'ai été fascinée par les mystères de la psyché humaine :
                            comprendre comment chacun de nous peut accéder à plus de sérénité, de confiance et de
                            bonheur est devenu mon moteur.
                        </p>
                        <p className="about-hero-intro">
                            Grandir dans un environnement bienveillant m'a très tôt
                            donné le goût du partage et de l'aide à l'autre ; c'est ce même désir d'accompagner qui
                            m'a menée à créer ce site et à t'accueillir dans mon univers.
                        </p>
                    </div>
                    <div className="about-hero-image">
                        <img
                            src={`${import.meta.env.BASE_URL}chloe-2.jpeg`}
                            alt="Chloé Wisser"
                        />
                    </div>
                </section>

                {/* Mon parcours — texte continu avec image flottante */}
                <section className="about-story">
                    <h2>Mon parcours</h2>

                    <div className="about-story-body">
                        <div className="about-aside-image">
                            <img
                                src="https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2025/11/girl-1208307_1920.jpg"
                                alt="Parcours"
                            />
                        </div>

                        <p>
                            Ce chemin, je ne l'ai pas emprunté par hasard. Mon parcours a débuté bien plus tôt que
                            je ne le réalisais : à tout juste un an et demi, une tumeur cancéreuse au niveau de
                            l'abdomen a nécessité son ablation, suivie de plusieurs cures de chimiothérapie, avant
                            de laisser place, après des années de contrôles réguliers, à une vie d'enfant presque
                            ordinaire. À quatorze ans, une occlusion intestinale m'a à nouveau conduite au bloc
                            opératoire, me rappelant que la santé est un trésor qu'il faut sans cesse préserver.
                        </p>

                        <p>
                            Pensant avant tout à mon bien-être, mes parents ont très tôt adopté une alimentation
                            sans viande rouge — uniquement volaille et poisson —, riche en légumes et en fruits,
                            avec un maximum de plats faits maison au quotidien. Ils intégraient également plantes
                            et méthodes douces pour soutenir la santé de toute la famille, m'ouvrant dès le plus
                            jeune âge à une vision globale mêlant accompagnement professionnel et ressources de la nature.
                        </p>

                        <p>
                            Ces expériences m'ont appris deux choses essentielles : la résilience naît de l'alliance
                            entre savoir-faire et bienveillance, et chacun peut devenir acteur de sa santé. C'est
                            cette conviction personnelle qui guide aujourd'hui ma mission : t'offrir un accompagnement
                            global, fondé sur l'expertise et l'écoute, pour que tu trouves, toi aussi, les clés d'un
                            bien-être durable et profondément enraciné dans l'espoir et la confiance.
                        </p>
                    </div>
                </section>

                {/* Formation Naturopathie — image gauche, texte droite */}
                <section className="about-formation-row">
                    <div className="about-formation-image">
                        <img
                            src="https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2025/04/61-about-5.webp"
                            alt="Formation naturopathie"
                        />
                    </div>
                    <div className="about-formation-text">
                        <h2>Naturopathie</h2>
                        <p>
                            Désireuse d'offrir un accompagnement vraiment holistique, j'ai poursuivi mon chemin
                            en naturopathie et ai achevé ma formation à Dargère Univers en 2024. J'y ai approfondi
                            l'art de l'autoguérison par des moyens naturels : nutrition, plantes, hygiène de vie…
                            Chaque notion apprise enrichit ma palette de compétences pour t'aider à retrouver ton
                            pouvoir d'acteur·rice de ta propre santé.
                        </p>
                    </div>
                </section>

                {/* Formation Sophrologie — texte gauche, image droite */}
                <section className="about-formation-row reverse">
                    <div className="about-formation-image">
                        <img
                            src="https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2025/04/61-about-4.webp"
                            alt="Formation sophrologie"
                        />
                    </div>
                    <div className="about-formation-text">
                        <h2>Sophrologie</h2>
                        <p>
                            Pour moi, la sophrologie est une histoire de famille : après une première carrière,
                            mon père s'est reconverti en sophrologue, et c'est tout naturellement qu'il m'a donné
                            envie de découvrir cette méthode de bien-être. Je me suis ainsi formée à l'Institut
                            Catherine Aliotta, où j'ai trouvé un précieux équilibre entre respiration, relaxation
                            et visualisation positive : des outils concrets pour apaiser le stress et renouer avec
                            ses propres ressources.
                        </p>
                        <p>
                            Titulaire du Certificat Professionnel de Sophrologue (RNCP) et
                            membre de la Chambre Syndicale de Sophrologie, je m'engage chaque jour à respecter un
                            code de déontologie qui garantit rigueur et bienveillance.
                        </p>
                    </div>
                </section>

                {/* Crusine + AromaTouch — image gauche, texte droite */}
                <section className="about-formation-row">
                    <div className="about-formation-image">
                        <img
                            src="https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2022/08/semons-la-vie-cuisine-vivante-2.jpg"
                            alt="Cuisine vivante"
                        />
                    </div>
                    <div className="about-formation-text">
                        <h2>Cuisine vivante & AromaTouch®</h2>
                        <p>
                            Pour compléter cet éventail, j'ai suivi une formation en crusine avec Les cRAWquantes,
                            afin de proposer des ateliers gourmands et ludiques qui reconnectent le plaisir de manger
                            à nos besoins physiologiques et à la planète.
                        </p>
                        <p>
                            Plus récemment, j'ai ajouté à mon offre la technique AromaTouch de dōTerra,
                            pour offrir détente profonde et rééquilibrage énergétique par le toucher et
                            les huiles essentielles.
                        </p>
                        <p>
                            Je continue par ailleurs à me former en permanence : lectures spécialisées,
                            partenariats enrichissants et nouvelles formations en cours de préparation me
                            permettent d'élargir sans cesse mes savoirs et mes outils.
                        </p>
                    </div>
                </section>

                {/* Mes valeurs */}
                <section className="about-valeurs">
                    <div className="about-valeurs-header">
                        <img
                            src="https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2025/10/icon-semons-la-vie.svg"
                            alt=""
                            className="about-valeurs-icon-top"
                        />
                        <h2>Mes valeurs</h2>
                    </div>
                    <div className="about-valeurs-grid">
                        <div className="about-valeur-item">
                            <div className="about-valeur-icon" style={{ color: '#ffcf00' }}>
                                <Sparkles size={32} />
                            </div>
                            <h3>Joie & gratitude</h3>
                            <p>Savourer chaque instant et honorer ce qui nous nourrit.</p>
                        </div>
                        <div className="about-valeur-item">
                            <div className="about-valeur-icon" style={{ color: '#bdd7ba' }}>
                                <Feather size={32} />
                            </div>
                            <h3>Douceur & bienveillance</h3>
                            <p>Accueillir, sans jugement envers soi ou les autres.</p>
                        </div>
                        <div className="about-valeur-item">
                            <div className="about-valeur-icon" style={{ color: '#6e70cc' }}>
                                <Users size={32} />
                            </div>
                            <h3>Transmission</h3>
                            <p>Partager mes savoirs pour te rendre autonome.</p>
                        </div>
                        <div className="about-valeur-item">
                            <div className="about-valeur-icon" style={{ color: '#ffcfe7' }}>
                                <HeartHandshake size={32} />
                            </div>
                            <h3>Santé responsable</h3>
                            <p>Bio, local, de saison pour un bien-être durable.</p>
                        </div>
                        <div className="about-valeur-item">
                            <div className="about-valeur-icon" style={{ color: '#403bae' }}>
                                <Ear size={32} />
                            </div>
                            <h3>Écoute & partage</h3>
                            <p>Suivre ton instinct et grandir ensemble.</p>
                        </div>
                    </div>
                </section>

                {/* Mon parcours — certifications */}
                <section className="about-parcours-certif">
                    <div className="about-parcours-certif-bg">
                        <img
                            src="https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2025/04/61-about-5.webp"
                            alt="Parcours"
                        />
                    </div>
                    <div className="about-parcours-certif-card">
                        <h2>Mon parcours</h2>
                        <p className="about-parcours-intro">
                            Mon chemin a commencé par une licence de psychologie, puis s'est enrichi au fil des années :
                        </p>
                        <div className="about-parcours-list">
                            <div className="about-parcours-item">
                                <div className="about-parcours-item-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 12s1.5 2 4 2 4-2 4-2"/><path d="M9 8h.01"/><path d="M15 8h.01"/><path d="M12 2a7 7 0 0 0-7 7c0 1 .5 3 3 5l4 3 4-3c2.5-2 3-4 3-5a7 7 0 0 0-7-7z"/></svg>
                                </div>
                                <h4>Sophrologie</h4>
                                <span className="about-parcours-school">(Institut Aliotta, 2019)</span>
                            </div>
                            <div className="about-parcours-item">
                                <div className="about-parcours-item-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6c-1.5 0-3 .5-3 2s1.5 2 3 2 3 .5 3 2-1.5 2-3 2"/><circle cx="12" cy="12" r="10"/><path d="M7 20.7a5 5 0 0 1 5-4.7 5 5 0 0 1 5 4.7"/><path d="M12 2v2"/><path d="M12 20v2"/></svg>
                                </div>
                                <h4>Crusine vivante</h4>
                                <span className="about-parcours-school">(Les cRAWquantes, 2022)</span>
                            </div>
                            <div className="about-parcours-item">
                                <div className="about-parcours-item-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
                                </div>
                                <h4>Naturopathie</h4>
                                <span className="about-parcours-school">(École Dargère Univers, 2021–2024)</span>
                            </div>
                            <div className="about-parcours-item">
                                <div className="about-parcours-item-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11v4a5 5 0 0 0 10 0v-4"/><path d="M12 11V3"/><path d="M9 7l3-3 3 3"/><path d="M4 15h16"/></svg>
                                </div>
                                <h4>AromaTouch Technique®</h4>
                                <span className="about-parcours-school">(dōTerra, 2025)</span>
                            </div>
                        </div>
                        <p className="about-parcours-closing">
                            Un parcours au croisement du corps, des émotions et de la nature… que je mets
                            aujourd'hui au service de ton bien-être.
                        </p>
                    </div>
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
                                    <img src={`${import.meta.env.BASE_URL}icons/service/${s.icon}.svg`} alt="" />
                                </div>
                                <span>{s.name}</span>
                                <ArrowRight size={14} className="about-pratique-arrow" />
                            </Link>
                        ))}
                    </div>
                </section>


            </div>
        </div>
    );
};

export default About;
