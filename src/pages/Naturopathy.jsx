import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ServiceSidebar from '../components/ServiceSidebar';
import ServiceHeroZoom from '../components/ServiceHeroZoom';
import PageBottom from '../components/PageBottom';
import './ServicePage.css';

const faqData = [
    {
        q: 'En quoi la naturopathie est-elle différente d\'un suivi médical ?',
        a: 'La naturopathie ne remplace pas un suivi médical, elle le complète. Elle agit en prévention et en accompagnement, en s\'intéressant au terrain, aux causes des déséquilibres et à l\'hygiène de vie globale.',
    },
    {
        q: 'À qui s\'adresse la naturopathie ?',
        a: 'La naturopathie s\'adresse à toute personne souhaitant améliorer son bien-être : fatigue, troubles digestifs, stress, sommeil, émotions, ou simplement l\'envie de prendre soin de sa santé de manière naturelle.',
    },
    {
        q: 'Faut-il déjà avoir un problème pour consulter ?',
        a: 'Non. On peut consulter en prévention, pour mieux se connaître, optimiser son énergie et mettre en place des habitudes de vie plus respectueuses de son corps.',
    },
    {
        q: 'Combien de séances sont nécessaires ?',
        a: 'Le parcours de base comprend deux séances. Ensuite, les séances de suivi sont proposées selon tes besoins, ton évolution et tes objectifs.',
    },
    {
        q: 'Quels résultats puis-je attendre ?',
        a: 'Chaque personne est unique, mais l\'accompagnement peut permettre de retrouver plus d\'énergie, une digestion plus confortable, un meilleur sommeil, une relation plus apaisée à son corps et une plus grande autonomie dans sa santé.',
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

const Naturopathy = () => {
    return (
        <>
        <div className="service-page animate-in" style={{ '--service-color': '#FFCF00', '--service-btn-text': '#7A6200' }}>
            {/* Hero Banner */}
            <div className="service-hero-banner">
                <ServiceHeroZoom src={`${import.meta.env.BASE_URL}services/Naturopathie2.jpg`} alt="Naturopathie" />
                <div className="service-hero-banner-content">
                    <h1>Naturopathie</h1>
                    <p className="hero-subtitle">
                        Retrouver l'équilibre naturel de ton corps et soutenir ta vitalité
                    </p>
                    <p className="hero-desc">
                        La naturopathie est une approche globale et naturelle qui t'aide à comprendre ton fonctionnement,
                        à soutenir les capacités d'autorégulation de ton organisme et à retrouver un équilibre durable,
                        tout en apprenant à mieux reconnaître les besoins de ton corps, dans le respect de ton rythme
                        et de ta singularité.
                    </p>
                    <div className="service-hero-meta-row">
                        <span className="service-meta-tag">2h30</span>
                        <span className="service-meta-tag service-meta-price">140€</span>
                        <span className="service-meta-tag">Visio ou présentiel</span>
                    </div>
                </div>
            </div>

            {/* Two-column layout */}
            <div className="service-layout">
                <ServiceSidebar active="Naturopathie" />

                <div className="service-content">
                    {/* Une approche globale du vivant */}
                    <div className="service-content-section">
                        <h2>Une approche globale du vivant</h2>
                        <h3>Reconnecter ta force vitale</h3>
                        <p>
                            La naturopathie que je pratique s'inscrit dans la tradition hygiéniste vitaliste, telle
                            qu'enseignée par Pierre-Valentin Marchesseau. Elle considère l'être humain dans sa
                            globalité — corps, émotions, mental et énergie vitale — et s'appuie sur l'idée que le
                            corps possède une intelligence naturelle capable de s'équilibrer lorsque les conditions
                            sont favorables.
                        </p>
                        <p>
                            Plutôt que de chercher à masquer les symptômes, la naturopathie vise à en comprendre
                            la cause profonde : surcharge, carences, stress, fatigue émotionnelle, hygiène de vie
                            inadaptée… Les manifestations du corps deviennent alors des messages à écouter, des
                            signaux invitant à ajuster son mode de vie. Comprendre son fonctionnement, c'est
                            redevenir acteur de sa santé.
                        </p>
                        <p>En séance, je t'accompagne pour :</p>
                        <ul>
                            <li>mieux comprendre ton terrain et ton fonctionnement,</li>
                            <li>soutenir les fonctions naturelles du corps (digestion, élimination, récupération),</li>
                            <li>retrouver de l'énergie, de la clarté et une relation plus apaisée à ton corps.</li>
                        </ul>
                        <p>
                            La naturopathie est avant tout un chemin de conscience et d'autonomie, au service d'un
                            mieux-être durable.
                        </p>
                    </div>

                    {/* Séance type & déroulement */}
                    <div className="service-content-section">
                        <h2>Séance type & déroulement</h2>
                        <h3>Un accompagnement en deux temps, à ton rythme</h3>
                        <p>
                            L'accompagnement en naturopathie commence par un parcours de base en deux séances, pensé
                            comme un temps d'écoute, de compréhension et de mise en action progressive.
                        </p>

                        <h3>1. Bilan global de vitalité — 1h30</h3>
                        <p>
                            La première séance est un temps d'échange approfondi. Elle permet de faire le point sur
                            ton hygiène de vie et sur les différents aspects de ton équilibre : alimentation, digestion,
                            énergie, sommeil, stress, émotions, terrain et antécédents.
                        </p>
                        <p>
                            C'est un espace d'écoute et de compréhension globale, où nous explorons ton motif de
                            consultation et, si nécessaire, certains axes plus spécifiques selon ce qui se présente
                            pour toi. Mon approche est structurée, tout en restant attentive à ce qui se manifeste
                            dans l'échange.
                        </p>
                        <p>
                            En amont de cette première séance, je te demande simplement de réaliser un relevé de ton
                            alimentation et de ton transit sur trois jours. Cet outil d'observation me permet d'affiner
                            la compréhension de ton fonctionnement digestif, tout en laissant une large place à
                            l'échange et à l'écoute en séance.
                        </p>

                        <h3>2. Séance de restitution & conseils personnalisés — 1h</h3>
                        <p>
                            Lors de cette seconde séance, je te présente ton plan d'hygiène de vie personnalisé,
                            élaboré à partir du bilan réalisé ensemble.
                        </p>
                        <p>Selon tes besoins, il peut inclure :</p>
                        <ul>
                            <li>des ajustements alimentaires adaptés à ton terrain,</li>
                            <li>des conseils d'hygiène de vie,</li>
                            <li>des recommandations en plantes, fleurs de Bach ou huiles essentielles,</li>
                            <li>des exercices simples de respiration ou de relaxation.</li>
                        </ul>
                        <p>
                            L'objectif est de te proposer un plan d'action clair, réaliste et évolutif, en accord
                            avec ton rythme et ton quotidien.
                        </p>
                        <p>
                            Parmi les outils utilisés, la phytothérapie occupe une place importante dans
                            l'accompagnement naturopathique. Si tu souhaites approfondir l'utilisation des plantes
                            et découvrir plus en détail leurs bienfaits, je propose également un accompagnement
                            spécifique dédié à la phytothérapie.
                        </p>
                        <Link to="/phytotherapie" className="service-inline-link">
                            Découvrir la phytothérapie <ArrowRight size={16} />
                        </Link>

                        <h3>Les séances de suivi — 1h</h3>
                        <p>
                            Les séances de suivi permettent d'accompagner les changements dans le temps. Elles servent
                            à ajuster le plan, soutenir ton évolution, approfondir certains aspects (digestifs,
                            émotionnels, énergétiques…) et, si besoin, intégrer ponctuellement la sophrologie ou
                            accompagner une phase de rééquilibrage ou de détox en douceur.
                        </p>
                        <p>Chaque séance est unique et s'adapte à ce que tu traverses.</p>
                        <p>
                            Lorsque certaines problématiques touchent davantage au stress, aux émotions ou au rapport
                            au corps, la sophrologie peut venir compléter l'accompagnement naturopathique. Elle permet
                            d'intégrer les changements plus en profondeur et d'apprendre à mieux vivre avec ses
                            ressentis au quotidien.
                        </p>
                        <Link to="/sophrologie" className="service-inline-link">
                            Découvrir la sophrologie <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Mon intention */}
                    <div className="service-content-section">
                        <h3>Mon intention</h3>
                        <p>
                            À travers un accompagnement en naturopathie, mon intention est de t'aider à mieux
                            comprendre ton corps, à écouter ses messages et à lui offrir les conditions justes
                            pour retrouver son équilibre naturel — avec douceur, respect, autonomie et une confiance
                            retrouvée en tes propres capacités.
                        </p>
                        <p>
                            Selon tes besoins, la naturopathie peut s'associer à d'autres approches complémentaires
                            comme la sophrologie ou la phytothérapie, afin de proposer un accompagnement global et
                            personnalisé.
                        </p>
                        <p>
                            Si tu hésites entre ces accompagnements ou si tu ne sais pas encore lequel correspond
                            le mieux à ta situation, je peux t'aider à faire le point et t'orienter vers ce qui te
                            conviendra le mieux.
                        </p>
                    </div>

                    {/* Tarifs & Packs */}
                    <div className="service-content-section">
                        <h2>Tarifs & Packs</h2>
                        <div className="service-packs">
                            <div className="service-pack-card">
                                <div className="service-pack-header">
                                    <h4>Parcours de base</h4>
                                    <span className="service-pack-price">140€</span>
                                </div>
                                <p>Deux rendez-vous pour poser les bases de ton accompagnement : un bilan global de vitalité (1h30) pour analyser tes habitudes de vie et évaluer ta vitalité, puis une séance de restitution & de conseils personnalisés (1h) pour découvrir ton plan d'action naturopathique.</p>
                            </div>
                            <div className="service-pack-card featured">
                                <span className="service-pack-badge">Populaire</span>
                                <div className="service-pack-header">
                                    <h4>Pack Harmonie</h4>
                                    <span className="service-pack-price"><s>200€</s> 180€</span>
                                </div>
                                <p>Parcours de base + 1 séance de suivi. Pour amorcer des changements concrets et retrouver un équilibre qui te correspond.</p>
                            </div>
                            <div className="service-pack-card featured">
                                <span className="service-pack-badge">Recommandé</span>
                                <div className="service-pack-header">
                                    <h4>Pack Renaissance</h4>
                                    <span className="service-pack-price"><s>260€</s> 230€</span>
                                </div>
                                <p>Parcours de base + 2 séances de suivi. Pour ancrer durablement tes nouvelles habitudes et retrouver une énergie stable au quotidien.</p>
                            </div>
                            <div className="service-pack-card featured">
                                <div className="service-pack-header">
                                    <h4>Pack Éclat</h4>
                                    <span className="service-pack-price"><s>320€</s> 290€</span>
                                </div>
                                <p>Parcours de base + 3 séances de suivi + bonus : rituel AromaTouch des mains et échantillon d'une huile essentielle de ton choix. Pour aller plus loin, ancrer les changements en profondeur et t'installer durablement dans un nouvel équilibre.</p>
                            </div>
                            <div className="service-pack-card">
                                <div className="service-pack-header">
                                    <h4>Séance de suivi</h4>
                                    <span className="service-pack-price">60€</span>
                                </div>
                                <p>Point d'étape (1h) pour ajuster ton programme et renforcer tes nouvelles habitudes.</p>
                            </div>
                            <div className="service-pack-card">
                                <div className="service-pack-header">
                                    <h4>Rééquilibrage alimentaire</h4>
                                    <span className="service-pack-price">60€</span>
                                </div>
                                <p>Un accompagnement personnalisé (1h) pour repenser ton alimentation et adopter de nouvelles habitudes favorisant vitalité et bien-être.</p>
                            </div>
                            <div className="service-pack-card">
                                <div className="service-pack-header">
                                    <h4>Phytothérapie</h4>
                                    <span className="service-pack-price">60€</span>
                                </div>
                                <p>Un protocole sur-mesure (1h) à base d'huiles essentielles, bourgeons et fleurs de Bach, pour apaiser les émotions et rétablir l'équilibre intérieur.</p>
                            </div>
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

export default Naturopathy;
