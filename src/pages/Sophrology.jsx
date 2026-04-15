import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ServiceSidebar from '../components/ServiceSidebar';
import ServiceHeroZoom from '../components/ServiceHeroZoom';
import PageBottom from '../components/PageBottom';
import './ServicePage.css';

const faqData = [
    {
        q: 'La sophrologie est-elle une forme d\'hypnose ?',
        a: 'Non. La sophrologie n\'est pas de l\'hypnose. Tu restes pleinement conscient·e et acteur·rice de ce que tu vis pendant la séance.',
    },
    {
        q: 'Est-ce une sophrologie de performance ?',
        a: 'Non. Mon accompagnement ne vise ni la performance, ni l\'optimisation à tout prix, mais l\'écoute de soi, la compréhension des émotions et le mieux-être global.',
    },
    {
        q: 'Faut-il déjà savoir se détendre ou méditer ?',
        a: 'Pas du tout. La sophrologie est accessible à tous, sans prérequis. Les exercices sont simples, progressifs et adaptés à chacun.',
    },
    {
        q: 'Pour qui est faite la sophrologie ?',
        a: 'La sophrologie s\'adresse à toute personne, quel que soit son âge ou sa condition physique, souhaitant mieux vivre avec ses émotions, apaiser le stress, traverser une période de transition ou simplement cultiver un mieux-être au quotidien.',
    },
    {
        q: 'Pour quelles problématiques peut-elle être utile ?',
        a: 'La sophrologie peut accompagner de nombreuses situations : gestion du stress et des émotions, troubles du sommeil, somatisations (digestives, tensions corporelles), manque de confiance en soi, fatigue, changements personnels ou professionnels.',
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

const Sophrology = () => {
    return (
        <>
        <div className="service-page animate-in" style={{ '--service-color': '#E8C8D8', '--service-btn-text': '#8B3A60' }}>
            {/* Hero Banner */}
            <div className="service-hero-banner">
                <ServiceHeroZoom src={`${import.meta.env.BASE_URL}services/Sophrologie.jpg`} alt="Sophrologie" />
                <div className="service-hero-banner-content">
                    <h1>Sophrologie</h1>
                    <p className="hero-subtitle">
                        Mieux comprendre ses émotions pour mieux vivre avec
                    </p>
                    <p className="hero-desc">
                        La sophrologie est une méthode douce et progressive qui permet de se reconnecter à son corps,
                        à sa respiration et à ses ressentis, afin de développer une meilleure compréhension de ses
                        émotions et d'apprendre à vivre avec plus de sérénité et de clarté émotionnelle au quotidien.
                    </p>
                    <div className="service-hero-meta-row">
                        <span className="service-meta-tag">1h30</span>
                        <span className="service-meta-tag service-meta-price">80€</span>
                        <span className="service-meta-tag">Visio ou présentiel</span>
                    </div>
                </div>
            </div>

            {/* Two-column layout */}
            <div className="service-layout">
                <ServiceSidebar active="Sophrologie" />

                <div className="service-content">
                    {/* Une approche psychocorporelle douce */}
                    <div className="service-content-section">
                        <h2>Une approche psychocorporelle douce</h2>
                        <h3>Harmoniser le corps, l'esprit et les émotions</h3>
                        <p>
                            La sophrologie que je pratique est non caycédienne, telle qu'enseignée à l'école de
                            Catherine Aliotta. C'est une approche psychocorporelle qui agit à la fois sur le corps
                            et le mental, en associant respiration consciente, mouvements doux, détente corporelle
                            et visualisation guidée.
                        </p>
                        <p>
                            Elle ne vise ni la performance, ni le dépassement de soi, ni un état modifié de conscience.
                            Il ne s'agit ni d'hypnose, ni de spiritualisation, ni de promesses miracles, mais d'un
                            apprentissage progressif et concret, centré sur l'écoute de soi et la compréhension de
                            ce qui se joue au-delà des ressentis.
                        </p>
                        <p>La sophrologie peut accompagner notamment :</p>
                        <ul>
                            <li>la gestion du stress et des émotions,</li>
                            <li>les troubles psychosomatiques (digestifs, tensions corporelles…),</li>
                            <li>les périodes de transition personnelle ou professionnelle,</li>
                            <li>le renforcement de la confiance en soi,</li>
                            <li>l'amélioration du sommeil et de la vitalité.</li>
                        </ul>
                        <p>
                            Lorsque les déséquilibres émotionnels s'accompagnent de troubles physiques ou d'une
                            fatigue plus globale, la naturopathie peut compléter le travail sophrologique en
                            soutenant le terrain et les fonctions naturelles du corps.
                        </p>
                        <Link to="/naturopathie" className="service-inline-link">
                            Découvrir la naturopathie <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Séance type & déroulement */}
                    <div className="service-content-section">
                        <h2>Séance type & déroulement</h2>
                        <h3>Une thérapie brève, progressive et autonomisante</h3>

                        <h3>Séance découverte & objectif — 1h30</h3>
                        <p>
                            La première séance est un temps d'échange approfondi. Elle permet de comprendre ta
                            demande, ton vécu émotionnel et tes besoins, à l'aide d'un questionnaire qui me sert
                            de base pour construire ton protocole d'accompagnement personnalisé.
                        </p>
                        <p>
                            Cette séance comprend également une initiation à la sophrologie, avec une première
                            pratique mêlant respiration, mouvements doux et relaxation guidée, afin que tu puisses
                            découvrir la méthode et ses effets.
                        </p>

                        <h3>Séances de suivi — 1h</h3>
                        <p>
                            La sophrologie s'inscrit dans une thérapie brève. Après la séance découverte & objectif,
                            l'accompagnement se poursuit généralement sur un cycle de 8 à 12 séances, en fonction
                            de l'objectif défini ensemble et de ton rythme.
                        </p>
                        <p>
                            Les séances de suivi permettent d'ancrer progressivement les pratiques, de renforcer
                            l'autonomie et d'accompagner les évolutions émotionnelles et corporelles dans le temps.
                            Elles combinent :
                        </p>
                        <ul>
                            <li>un temps d'échange,</li>
                            <li>des exercices de respiration,</li>
                            <li>des mouvements doux,</li>
                            <li>des pratiques de relaxation et de visualisation,</li>
                            <li>un temps de partage des ressentis.</li>
                        </ul>
                        <p>
                            Chaque séance s'adapte à ton évolution et à ce que tu traverses. Cette progression
                            permet d'installer des changements durables.
                        </p>

                        <h3>Autonomie et intégration dans le quotidien</h3>
                        <p>Entre les séances, je te transmets :</p>
                        <ul>
                            <li>des exercices à pratiquer chez toi,</li>
                            <li>des audios,</li>
                            <li>des fiches pratiques,</li>
                            <li>ainsi qu'un cahier des sensations, pour t'aider à observer tes ressentis et suivre ton évolution.</li>
                        </ul>
                        <p>
                            La sophrologie est une boîte à outils : l'objectif est que tu puisses t'approprier
                            les pratiques et les utiliser en toute autonomie dans ta vie quotidienne, en fonction
                            de tes besoins.
                        </p>

                        <h3>Séances individuelles & séances de groupe</h3>
                        <p>
                            <strong>Séances individuelles</strong><br />
                            Les séances individuelles s'adressent aux personnes souhaitant travailler sur une
                            problématique précise et personnelle. L'accompagnement est entièrement personnalisé,
                            quel que soit l'âge ou la condition physique.
                        </p>
                        <p>
                            <strong>Séances de groupe</strong><br />
                            Les séances de groupe sont dédiées au bien-être général. Elles permettent d'apprendre
                            à se détendre, à se relaxer et à préserver son équilibre physique, mental et émotionnel.
                        </p>
                        <p>
                            Elles sont ouvertes à tous, débutants comme confirmés, suivent une progression, et il
                            est possible d'intégrer le groupe à tout moment. Elles conviennent également aux personnes
                            ayant terminé un accompagnement individuel et souhaitant continuer à pratiquer la
                            sophrologie dans leur quotidien.
                        </p>
                    </div>

                    {/* Mon intention */}
                    <div className="service-content-section">
                        <h3>Mon intention</h3>
                        <p>
                            En sophrologie, ce que je souhaite avant tout offrir, c'est une meilleure compréhension
                            des émotions et de ce qui se joue au-delà des ressentis, afin de pouvoir mieux vivre avec.
                            L'objectif est de développer une autonomie émotionnelle : savoir reconnaître ses émotions,
                            les accueillir, les vivre et évoluer avec elles. Comprendre ses émotions, c'est déjà
                            reprendre du pouvoir sur sa vie.
                        </p>
                        <p>
                            Selon tes besoins, la naturopathie et la sophrologie peuvent être utilisées séparément
                            ou combinées pour t'accompagner de manière globale, dans le respect de ton rythme et
                            de ton évolution.
                        </p>
                    </div>

                    {/* Tarifs & Packs */}
                    <div className="service-content-section">
                        <h2>Tarifs & Packs</h2>
                        <div className="service-packs">
                            <div className="service-pack-card">
                                <div className="service-pack-header">
                                    <h4>Séance découverte & objectif</h4>
                                    <span className="service-pack-price">80€</span>
                                </div>
                                <p>Anamnèse, définition de ton objectif et séance de découverte (1h30) pour amorcer ton accompagnement en douceur.</p>
                            </div>
                            <div className="service-pack-card">
                                <div className="service-pack-header">
                                    <h4>Séance de suivi</h4>
                                    <span className="service-pack-price">60€</span>
                                </div>
                                <p>Pratiques progressives (1h) pour t'aider à atteindre ton objectif et renforcer ton équilibre intérieur.</p>
                            </div>
                            <div className="service-pack-card featured">
                                <span className="service-pack-badge">Pack complet</span>
                                <div className="service-pack-header">
                                    <h4>Pack Éveil</h4>
                                    <span className="service-pack-price">À partir de 500€</span>
                                </div>
                                <p>Un accompagnement complet et personnalisé pour retrouver sérénité, confiance et harmonie.</p>
                                <ul className="service-pack-features">
                                    <li>1 Séance Découverte & Objectif</li>
                                    <li>8 Séances de suivi</li>
                                    <li>Audio de la pratique à chaque séance</li>
                                    <li>Fiches détaillées des exercices</li>
                                    <li>Bonus : livret "Mon cahier des sensations et des émotions"</li>
                                </ul>
                            </div>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', fontStyle: 'italic', marginTop: '1.5rem' }}>
                            Un accompagnement de sophrologie comprend généralement entre 8 et 12 séances pour une évolution durable et profonde.
                        </p>
                    </div>

                    {/* FAQ */}
                    <section className="faq-section">
                        <h2>Questions fréquentes</h2>
                        {faqData.map((item, i) => (
                            <FaqItem key={i} question={item.q} answer={item.a} />
                        ))}
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', fontStyle: 'italic', marginTop: '1.5rem' }}>
                            <strong>Remarque importante :</strong> La sophrologie ne se substitue ni à un suivi médical,
                            ni à un accompagnement psychologique, mais peut être un complément précieux, dans une
                            démarche globale de mieux-être.
                        </p>
                    </section>

                </div>
            </div>
        </div>
        <PageBottom />
        </>
    );
};

export default Sophrology;
