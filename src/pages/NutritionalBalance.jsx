import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ServiceSidebar from '../components/ServiceSidebar';
import ServiceHeroZoom from '../components/ServiceHeroZoom';
import PageBottom from '../components/PageBottom';
import './ServicePage.css';

const faqData = [
    {
        q: 'Le rééquilibrage alimentaire est-il un régime ?',
        a: 'Non. Il ne repose pas sur des restrictions ou des règles strictes, mais sur une adaptation progressive et personnalisée de l\'alimentation.',
    },
    {
        q: 'Est-ce adapté si j\'ai des troubles digestifs ?',
        a: 'Oui. L\'accompagnement prend en compte le fonctionnement digestif et vise justement à apaiser et rééquilibrer le système digestif.',
    },
    {
        q: 'Vais-je devoir supprimer beaucoup d\'aliments ?',
        a: 'Pas nécessairement. L\'objectif est d\'adapter l\'alimentation progressivement, en tenant compte de tes besoins, de tes sensibilités et de ton mode de vie.',
    },
    {
        q: 'Est-ce compatible avec un accompagnement naturopathique ?',
        a: 'Oui. Le rééquilibrage alimentaire est un pilier de la naturopathie et peut s\'intégrer dans un accompagnement global du terrain.',
    },
    {
        q: 'Est-ce adapté si ma relation à l\'alimentation est émotionnelle ?',
        a: 'Oui. L\'alimentation est souvent liée aux émotions. L\'accompagnement prend en compte cette dimension et pourra évoluer vers un travail plus spécifique sur l\'alimentation émotionnelle si nécessaire.',
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

const NutritionalBalance = () => {
    return (
        <>
        <div className="service-page animate-in" style={{ '--service-color': '#7AA476' }}>
            {/* Hero Banner */}
            <div className="service-hero-banner">
                <ServiceHeroZoom src={`${import.meta.env.BASE_URL}services/reequilibrage alimentaire.jpg`} alt="Rééquilibrage alimentaire" />
                <div className="service-hero-banner-content">
                    <h1>Rééquilibrage alimentaire</h1>
                    <p className="hero-subtitle">
                        Retrouver une relation apaisée à l'alimentation et nourrir son corps avec justesse
                    </p>
                    <p className="hero-desc">
                        Le rééquilibrage alimentaire est une approche douce et personnalisée qui permet de mieux
                        comprendre le fonctionnement de ton corps, d'apaiser ton système digestif et de retrouver
                        une alimentation adaptée à tes besoins, sans frustration ni rigidité. Il invite également
                        à développer une relation plus consciente et apaisée à l'alimentation.
                    </p>
                    <div className="service-hero-meta-row">
                        <span className="service-meta-tag">1h</span>
                        <span className="service-meta-tag service-meta-price">60€</span>
                        <span className="service-meta-tag">Visio ou présentiel</span>
                    </div>
                </div>
            </div>

            {/* Two-column layout */}
            <div className="service-layout">
                <ServiceSidebar active="Rééquilibrage alimentaire" />

                <div className="service-content">
                    {/* Comprendre son alimentation autrement */}
                    <div className="service-content-section">
                        <h2>Comprendre son alimentation autrement</h2>
                        <h3>Revisiter ses habitudes pour retrouver l'équilibre</h3>
                        <p>
                            Le rééquilibrage alimentaire ne consiste pas à suivre un régime ou à appliquer des règles
                            strictes. Il s'agit d'une démarche de compréhension et de rééducation alimentaire, qui
                            invite à revisiter ses croyances et ses habitudes pour mieux répondre aux besoins réels
                            du corps. La connaissance permet de sortir des injonctions et de choisir en conscience,
                            en accord avec ses besoins réels.
                        </p>
                        <p>Dans mon accompagnement, nous explorons notamment :</p>
                        <ul>
                            <li>le fonctionnement digestif et son rôle central dans la santé,</li>
                            <li>le terrain humoral et l'accumulation des déchets (colles et cristaux),</li>
                            <li>le rôle des émonctoires dans l'élimination,</li>
                            <li>le lien entre alimentation, encrassement et apparition des déséquilibres.</li>
                        </ul>
                        <p>
                            L'objectif est de permettre au corps de retrouver un fonctionnement plus fluide et de
                            favoriser une assimilation optimale des nutriments, tout en conservant le plaisir de manger.
                        </p>
                    </div>

                    {/* Les principes qui guident mon accompagnement */}
                    <div className="service-content-section">
                        <h2>Les principes qui guident mon accompagnement</h2>
                        <p>
                            Chaque accompagnement est personnalisé, mais certains axes peuvent être proposés selon
                            les besoins et la sensibilité de chacun :
                        </p>
                        <ul>
                            <li>adaptation alimentaire basée sur la digestion et le terrain,</li>
                            <li>dissociation alimentaire,</li>
                            <li>réduction du gluten selon la tolérance individuelle,</li>
                            <li>réintroduction progressive des fibres si nécessaire,</li>
                            <li>importance des crudités et jus de légumes frais,</li>
                            <li>intégration d'aliments fermentés,</li>
                            <li>éviter la consommation de fruits en fin de repas,</li>
                            <li>limitation du soja,</li>
                            <li>consommation raisonnée de produits animaux, avec une préférence pour les viandes blanches, le poisson et les produits laitiers de chèvre ou brebis de qualité…</li>
                        </ul>
                        <p>
                            Dans certains cas, le jeûne intermittent peut également être envisagé, toujours de manière
                            individualisée et progressive.
                        </p>
                    </div>

                    {/* Séance type & accompagnement */}
                    <div className="service-content-section">
                        <h2>Séance type & accompagnement</h2>
                        <h3>Une approche pédagogique et progressive</h3>

                        <h3>Consultation en rééquilibrage alimentaire — 1h</h3>
                        <p>
                            Avant la séance, je te transmets un questionnaire alimentaire afin de mieux comprendre
                            tes habitudes et ton fonctionnement digestif.
                        </p>
                        <p>
                            Lors de la consultation, nous réalisons ensemble un bilan alimentaire complet, qui
                            permet d'identifier :
                        </p>
                        <ul>
                            <li>tes habitudes alimentaires,</li>
                            <li>ton fonctionnement digestif,</li>
                            <li>tes besoins physiologiques,</li>
                            <li>ta relation à l'alimentation.</li>
                        </ul>
                        <p>
                            À l'issue de la séance, je te propose des pistes d'ajustement adaptées à ton quotidien
                            et à ton rythme. Un accompagnement progressif peut être proposé par la suite si tu
                            souhaites être guidé(e) dans la mise en place des changements.
                        </p>
                        <p>
                            Le travail alimentaire peut, chez certaines personnes, s'inscrire naturellement dans un
                            accompagnement plus global du terrain. Le rééquilibrage alimentaire constitue en effet
                            l'un des fondements de la naturopathie, qui permet d'explorer l'équilibre du corps dans
                            sa globalité.
                        </p>
                        <Link to="/naturopathie" className="service-inline-link">
                            Découvrir l'accompagnement en naturopathie <ArrowRight size={16} />
                        </Link>

                        <h3>Une approche globale et vivante de l'alimentation</h3>
                        <p>
                            L'alimentation influence non seulement le corps, mais aussi l'énergie et les émotions.
                            Elle peut devenir un véritable outil de santé lorsqu'elle est adaptée à la personne,
                            à son terrain et à son mode de vie.
                        </p>
                        <p>
                            Dans mon accompagnement, l'objectif est de remettre de la conscience, de la douceur et
                            de la légèreté dans la relation à la nourriture, en respectant l'unicité de chacun.
                        </p>
                    </div>

                    {/* Mon intention */}
                    <div className="service-content-section">
                        <h3>Mon intention</h3>
                        <p>
                            À travers le rééquilibrage alimentaire, ce que je souhaite avant tout offrir, c'est de
                            revenir à l'écoute de son corps et de retrouver confiance en ses sensations. Nous sommes
                            tous uniques et nous n'avons pas les mêmes besoins pour être en santé. Mon intention est
                            de remettre de la légèreté et de la douceur dans l'alimentation, afin qu'elle redevienne
                            une source de vitalité et de plaisir.
                        </p>
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

export default NutritionalBalance;
