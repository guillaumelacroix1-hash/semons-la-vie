import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
                            src="https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2025/11/VirginieDumoulinChaphotographie-2025-Violettesaintes-561_2-1-scaled.jpg"
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

                {/* Mes pratiques */}
                <section className="about-pratiques">
                    <h2>Mes pratiques</h2>
                    <p>
                        Explore ton corps, ton souffle et tes émotions pour une transformation en douceur :
                        de la compréhension à l'harmonisation physique, émotionnelle et énergétique.
                    </p>
                    <div className="about-pratiques-links">
                        <Link to="/naturopathie" className="btn-outline">
                            Naturopathie <ArrowRight size={16} />
                        </Link>
                        <Link to="/sophrologie" className="btn-outline">
                            Sophrologie <ArrowRight size={16} />
                        </Link>
                        <Link to="/massage" className="btn-outline">
                            Massage AromaTouch® <ArrowRight size={16} />
                        </Link>
                        <Link to="/ateliers-culinaires" className="btn-outline">
                            Ateliers culinaires <ArrowRight size={16} />
                        </Link>
                    </div>
                </section>

                {/* Citation */}
                <section className="about-quote">
                    <blockquote>
                        «&nbsp;Je fais ma part, j'ouvre mon cœur et je laisse rayonner ma lumière&nbsp;»
                    </blockquote>
                    <p className="about-quote-author">— Chloé Wisser</p>
                </section>

                {/* CTA */}
                <section className="reserve-section">
                    <h2>Réserver une séance</h2>
                    <a href="#" className="btn-primary">Prendre RDV</a>
                </section>
            </div>
        </div>
    );
};

export default About;
