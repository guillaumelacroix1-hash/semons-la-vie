import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ServiceSidebar from '../components/ServiceSidebar';
import './ServicePage.css';

const faqData = [
    {
        q: 'La phytothérapie est-elle adaptée à tout le monde ?',
        a: 'La phytothérapie peut accompagner la majorité des personnes, mais elle nécessite toujours une adaptation individuelle. Certaines plantes peuvent être contre-indiquées selon l\'âge, les traitements en cours ou certaines situations spécifiques.',
    },
    {
        q: 'La phytothérapie peut-elle remplacer un traitement médical ?',
        a: 'Non. Elle ne se substitue pas à un traitement médical, mais peut être utilisée en complément, dans une démarche globale de mieux-être.',
    },
    {
        q: 'Combien de temps faut-il pour observer des effets ?',
        a: 'Cela dépend du terrain, de la problématique et de la régularité d\'utilisation. Les plantes agissent souvent de manière progressive, dans le respect du rythme du corps.',
    },
    {
        q: 'Sous quelle forme peut-on utiliser les plantes ?',
        a: 'Les plantes peuvent être utilisées sous différentes formes : tisanes, bourgeons, huiles essentielles, fleurs de Bach, compléments à base de plantes… Le choix dépend de tes besoins et de ta sensibilité.',
    },
    {
        q: 'Peut-on associer la phytothérapie avec d\'autres accompagnements naturels ?',
        a: 'Oui. La phytothérapie s\'intègre très bien dans une approche globale incluant la naturopathie, la sophrologie ou les ajustements alimentaires.',
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

const Phytotherapy = () => {
    return (
        <div className="service-page animate-in">
            {/* Hero Banner */}
            <div className="service-hero-banner">
                <div className="service-hero-banner-bg">
                    <img
                        src="https://whitesmoke-gazelle-148393.hostingersite.com/wp-content/uploads/2025/04/61-open-post-4.webp"
                        alt="Phytothérapie"
                    />
                </div>
                <div className="service-hero-banner-content">
                    <h1>Phytothérapie</h1>
                    <p className="hero-subtitle">
                        Se reconnecter à la sagesse des plantes pour soutenir le corps et les émotions.
                    </p>
                    <p className="hero-desc">
                        La phytothérapie est l'art d'utiliser les plantes et leurs extraits pour accompagner
                        l'équilibre du corps et du mental. Elle permet de soutenir les fonctions physiologiques,
                        d'harmoniser les émotions et d'accompagner le terrain en douceur.
                    </p>
                    <div className="service-hero-meta-row">
                        <span className="service-meta-tag">1h</span>
                        <span className="service-meta-tag service-meta-price">60€</span>
                        <span className="service-meta-tag">Visio ou présentiel</span>
                    </div>
                    <a href="#" className="btn-primary">Prendre RDV</a>
                </div>
            </div>

            {/* Two-column layout */}
            <div className="service-layout">
                <ServiceSidebar active="Phytothérapie" />

                <div className="service-content">
                    {/* La puissance douce du végétal */}
                    <div className="service-content-section">
                        <h2>La puissance douce du végétal</h2>
                        <h3>Soutenir l'organisme avec intelligence et respect</h3>
                        <p>
                            À travers les huiles essentielles, la gemmothérapie et les fleurs de Bach, je t'aide
                            à apaiser le stress, soutenir les organes d'élimination, harmoniser les émotions et
                            renforcer ta vitalité. Les plantes sont de précieuses alliées pour accompagner chaque
                            étape de ton mieux-être.
                        </p>
                        <p>
                            La phytothérapie repose sur l'utilisation des plantes sous différentes formes,
                            sélectionnées en fonction de tes besoins, de ton terrain et de ta sensibilité.
                        </p>
                        <ul>
                            <li>Les plantes sèches (tisanes, infusions, décoctions)</li>
                            <li>Les compléments à base de plantes</li>
                            <li>La gemmothérapie (bourgeons)</li>
                            <li>Les huiles essentielles</li>
                            <li>Les fleurs de Bach</li>
                        </ul>
                        <p>
                            Les plantes agissent à plusieurs niveaux. Elles peuvent soutenir les fonctions
                            physiologiques (digestion, sommeil, immunité, élimination…), mais aussi accompagner
                            les émotions et favoriser un retour à l'équilibre global.
                        </p>
                        <p>
                            Chaque plante possède une richesse unique. Mon rôle est de choisir celles qui
                            correspondent le mieux à ta situation, dans une approche personnalisée et progressive.
                        </p>
                        <p>
                            La phytothérapie constitue l'un des outils majeurs de la naturopathie. Pour les personnes
                            souhaitant travailler sur leur terrain dans sa globalité, elle peut s'intégrer dans un
                            accompagnement naturopathique complet.
                        </p>
                        <Link to="/naturopathie" className="service-inline-link">
                            Découvrir l'accompagnement en naturopathie <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Séance type */}
                    <div className="service-content-section">
                        <h2>Séance type & accompagnement</h2>
                        <h3>Un accompagnement personnalisé et respectueux de ton rythme</h3>
                        <p>
                            La phytothérapie peut être proposée dans le cadre d'un accompagnement naturopathique global,
                            ou lors d'une séance dédiée, pour les personnes souhaitant se concentrer spécifiquement sur
                            l'utilisation des plantes.
                        </p>

                        <h3>Consultation en phytothérapie – 1h</h3>
                        <p>
                            La séance commence par un temps d'échange permettant de comprendre ton motif de consultation,
                            ton terrain et ton mode de vie.
                        </p>
                        <p>À partir de cet échange, je te propose des recommandations adaptées, pouvant inclure :</p>
                        <ul>
                            <li>Des plantes sous différentes formes</li>
                            <li>Des associations personnalisées</li>
                            <li>Des conseils d'utilisation simples et progressifs</li>
                            <li>Des recommandations complémentaires en hygiène de vie si nécessaire</li>
                        </ul>
                        <p>
                            L'objectif est de proposer une approche réaliste, adaptée à ton quotidien et à ce que
                            tu es prêt·e à mettre en place.
                        </p>

                        <h3>Une approche globale du terrain</h3>
                        <p>La phytothérapie peut accompagner de nombreuses situations, notamment :</p>
                        <ul>
                            <li>Soutien digestif et confort intestinal</li>
                            <li>Gestion du stress et accompagnement émotionnel</li>
                            <li>Amélioration du sommeil</li>
                            <li>Soutien des émonctoires et rééquilibrage du terrain</li>
                            <li>Fatigue et vitalité</li>
                            <li>Équilibre hormonal et féminin</li>
                            <li>Soutien cutané et immunitaire</li>
                        </ul>
                        <p>Chaque accompagnement reste unique et s'adapte à la personne, à son histoire et à ses besoins.</p>

                        <h3>Mon intention</h3>
                        <p>
                            À travers la phytothérapie, ce que je souhaite avant tout offrir, c'est une reconnexion
                            avec ce que la Nature a de plus beau à nous offrir. Nous avons déjà tout à disposition
                            autour de nous, et la Nature nous propose d'incroyables ressources, autant sur le plan
                            physique qu'émotionnel.
                        </p>
                    </div>

                    {/* FAQ */}
                    <section className="faq-section">
                        <h2>Questions fréquentes</h2>
                        {faqData.map((item, i) => (
                            <FaqItem key={i} question={item.q} answer={item.a} />
                        ))}
                    </section>

                    {/* Réserver */}
                    <div className="service-reserve">
                        <h2>Réserver une séance</h2>
                        <a href="#" className="btn-primary">Prendre RDV</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Phytotherapy;
