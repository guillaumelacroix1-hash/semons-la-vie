import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ServiceSidebar from '../components/ServiceSidebar';
import ServiceHeroZoom from '../components/ServiceHeroZoom';
import PageBottom from '../components/PageBottom';
import './ServicePage.css';

const crusineImages = [
    { src: `${import.meta.env.BASE_URL}crusine/WhatsApp%20Image%202026-04-01%20at%2015.16.22.jpeg`, alt: 'Atelier crusine' },
    { src: `${import.meta.env.BASE_URL}crusine/WhatsApp%20Image%202026-04-01%20at%2015.16.23.jpeg`, alt: 'Préparation crusine' },
    { src: `${import.meta.env.BASE_URL}crusine/WhatsApp%20Image%202026-04-01%20at%2015.16.23%20(1).jpeg`, alt: 'Recette crue' },
    { src: `${import.meta.env.BASE_URL}crusine/WhatsApp%20Image%202026-04-01%20at%2015.16.23%20(2).jpeg`, alt: 'Cuisine vivante' },
    { src: `${import.meta.env.BASE_URL}crusine/WhatsApp%20Image%202026-04-01%20at%2015.16.23%20(3).jpeg`, alt: 'Assiette colorée' },
    { src: `${import.meta.env.BASE_URL}crusine/WhatsApp%20Image%202026-04-01%20at%2015.16.23%20(4).jpeg`, alt: 'Atelier en groupe' },
    { src: `${import.meta.env.BASE_URL}crusine/WhatsApp%20Image%202026-04-01%20at%2015.16.23%20(5).jpeg`, alt: 'Ingrédients frais' },
    { src: `${import.meta.env.BASE_URL}crusine/WhatsApp%20Image%202026-04-01%20at%2015.16.24.jpeg`, alt: 'Dessert cru' },
    { src: `${import.meta.env.BASE_URL}crusine/WhatsApp%20Image%202026-04-01%20at%2015.16.24%20(1).jpeg`, alt: 'Salade gourmande' },
    { src: `${import.meta.env.BASE_URL}crusine/WhatsApp%20Image%202026-04-01%20at%2015.16.24%20(2).jpeg`, alt: 'Moment de partage' },
];

const faqData = [
    {
        q: 'Faut-il déjà connaître l\'alimentation crue ?',
        a: 'Non. Les ateliers sont ouverts à tous, débutants comme initiés. L\'objectif est de découvrir, expérimenter et apprendre en toute simplicité.',
    },
    {
        q: 'Est-ce uniquement pour les personnes végétariennes ou véganes ?',
        a: 'Pas du tout. La crusine est une ouverture, une exploration. Elle peut compléter tout type d\'alimentation, sans obligation de changement radical.',
    },
    {
        q: 'Vais-je avoir faim si c\'est cru ?',
        a: 'Les recettes proposées sont nourrissantes, équilibrées et pensées pour soutenir la vitalité. Il ne s\'agit pas de restriction, mais de découverte.',
    },
    {
        q: 'Puis-je reproduire facilement les recettes chez moi ?',
        a: 'Oui. Les préparations sont simples, accessibles et conçues pour être facilement intégrées au quotidien.',
    },
    {
        q: 'Puis-je offrir un atelier en cadeau ?',
        a: 'Oui. Les ateliers peuvent être offerts sous forme de carte cadeau — une belle façon de partager une expérience vivante, gourmande et inspirante.',
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

const Culinary = () => {
    const [lightboxIndex, setLightboxIndex] = useState(null);

    return (
        <>
        <div className="service-page animate-in" style={{ '--service-color': '#7AA476' }}>
            {/* Hero Banner */}
            <div className="service-hero-banner">
                <ServiceHeroZoom src={`${import.meta.env.BASE_URL}crusine/WhatsApp%20Image%202026-04-01%20at%2015.16.23%20(5).jpeg`} alt="Ateliers de Crusine" />
                <div className="service-hero-banner-content">
                    <h1>Ateliers de Crusine</h1>
                    <p className="hero-subtitle">
                        Cultiver la vitalité dans la joie et le partage
                    </p>
                    <p className="hero-desc">
                        Les ateliers de crusine sont des moments conviviaux et sensoriels pour découvrir
                        l'alimentation vivante autrement : avec simplicité, curiosité et plaisir. Un temps pour
                        créer, expérimenter et repartir avec des préparations saines et gourmandes, tout en se
                        reconnectant à ses sens.
                    </p>
                    <div className="service-hero-meta-row">
                        <span className="service-meta-tag">2h</span>
                        <span className="service-meta-tag service-meta-price">65€</span>
                        <span className="service-meta-tag">Présentiel</span>
                    </div>
                </div>
            </div>

            {/* Two-column layout */}
            <div className="service-layout">
                <ServiceSidebar active="Ateliers culinaires" />

                <div className="service-content">
                    {/* La crusine, qu'est-ce que c'est ? */}
                    <div className="service-content-section">
                        <h2>La crusine, qu'est-ce que c'est ?</h2>
                        <p>
                            La crusine est une cuisine majoritairement crue, végétale et biologique, qui met en
                            valeur les aliments dans leur forme la plus vivante possible.
                        </p>
                        <p>
                            Elle préserve la vitalité des aliments, soutient la digestion et permet d'explorer une
                            autre manière de cuisiner : plus intuitive, plus créative, plus sensorielle.
                        </p>
                        <p>
                            Mais au-delà de la nutrition, la crusine est avant tout une expérience de partage et
                            de simplicité.
                        </p>
                    </div>

                    {/* Les différentes façons de participer */}
                    <div className="service-content-section">
                        <h2>Les différentes façons de participer</h2>

                        <h3>Les Rendez-vous Crusine (2h)</h3>
                        <p>
                            Chaque mois, je propose un atelier thématique gourmand et vitalisant. Un moment convivial
                            pour découvrir une nouvelle approche, apprendre des techniques simples et repartir avec
                            tes créations.
                        </p>
                        <p>Idéal pour :</p>
                        <ul>
                            <li>découvrir la crusine,</li>
                            <li>passer un moment joyeux en petit groupe,</li>
                            <li>repartir avec des idées concrètes à intégrer chez soi.</li>
                        </ul>

                        <h3>Crusine chez Toi</h3>
                        <p>
                            Un atelier privé et sur-mesure à domicile, pensé selon tes goûts, tes objectifs ou un
                            thème particulier.
                        </p>
                        <p>Parfait pour :</p>
                        <ul>
                            <li>un moment unique entre amis,</li>
                            <li>une activité originale en famille,</li>
                            <li>un événement particulier.</li>
                        </ul>
                        <p>Un espace intime et personnalisé pour vivre pleinement l'expérience.</p>

                        <h3>Parcours Gourmand (pack 3 ateliers)</h3>
                        <p>
                            Un véritable voyage culinaire pour progresser pas à pas. À travers trois thématiques de
                            ton choix parmi celles proposées au cours de l'année, tu approfondis ta pratique et
                            développes ton autonomie en crusine, dans la joie et la simplicité.
                        </p>
                        <p>Ce format permet :</p>
                        <ul>
                            <li>d'intégrer progressivement les bases,</li>
                            <li>d'expérimenter différentes techniques,</li>
                            <li>de gagner en confiance en cuisine vivante.</li>
                        </ul>
                    </div>

                    {/* Tarifs & Formules */}
                    <div className="service-content-section">
                        <h2>Tarifs & Formules</h2>
                        <p style={{ fontStyle: 'italic', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>100% végétal, cru et bio</p>
                        <div className="service-packs">
                            <div className="service-pack-card">
                                <div className="service-pack-header">
                                    <h4>Les Rendez-vous Crusine</h4>
                                    <span className="service-pack-price">65€</span>
                                </div>
                                <p>Chaque mois, découvre une nouvelle thématique gourmande et vitalisante (2h), pour cuisiner autrement tout en partageant un moment convivial et inspirant.</p>
                            </div>
                            <div className="service-pack-card">
                                <div className="service-pack-header">
                                    <h4>Crusine chez Toi !</h4>
                                    <span className="service-pack-price">Sur devis</span>
                                </div>
                                <p>Un atelier privé et sur-mesure à domicile, pensé selon tes goûts et tes objectifs. Parfait pour un moment unique entre amis ou en famille.</p>
                            </div>
                            <div className="service-pack-card featured">
                                <span className="service-pack-badge">Meilleure offre</span>
                                <div className="service-pack-header">
                                    <h4>Parcours Gourmand</h4>
                                    <span className="service-pack-price"><s>195€</s> 180€</span>
                                </div>
                                <p>Pack 3 ateliers : un vrai voyage culinaire ! Progresse pas à pas, explore trois thématiques différentes et deviens autonome en crusine, dans la joie et la simplicité.</p>
                            </div>
                        </div>
                    </div>

                    {/* Le déroulement des ateliers */}
                    <div className="service-content-section">
                        <h2>Le déroulement des ateliers</h2>
                        <p>Les ateliers durent 2 heures, en petit groupe de 8 personnes maximum.</p>
                        <p>Ils peuvent inclure :</p>
                        <ul>
                            <li>un temps de présentation du thème,</li>
                            <li>la réalisation des recettes,</li>
                            <li>quelques repères nutritionnels ou digestifs selon le sujet.</li>
                        </ul>
                        <p>
                            L'accent est avant tout mis sur la pratique, le geste, le toucher, les odeurs, la
                            créativité. Chaque participant repart avec les préparations réalisées, pour prolonger
                            l'expérience chez soi.
                        </p>
                    </div>

                    {/* Mon intention */}
                    <div className="service-content-section">
                        <h3>Mon intention</h3>
                        <p>
                            À travers les ateliers de crusine, ce que je souhaite avant tout offrir, c'est une
                            expérience de la simplicité et du partage. Revenir au corps grâce à une activité manuelle,
                            se reconnecter à tous ses sens et retrouver la joie de créer avec des aliments vivants.
                        </p>
                        <p>
                            La crusine peut s'intégrer dans une démarche plus globale de rééquilibrage alimentaire
                            ou de naturopathie, pour soutenir la digestion et la vitalité au quotidien.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
                            <Link to="/reequilibrage-alimentaire" className="service-inline-link">
                                Découvrir le rééquilibrage alimentaire <ArrowRight size={16} />
                            </Link>
                            <Link to="/naturopathie" className="service-inline-link">
                                Découvrir l'accompagnement en naturopathie <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* FAQ */}
                    <section className="faq-section">
                        <h2>Questions fréquentes</h2>
                        {faqData.map((item, i) => (
                            <FaqItem key={i} question={item.q} answer={item.a} />
                        ))}
                    </section>

                    {/* Galerie */}
                    <div className="service-content-section">
                        <h2>Galerie</h2>
                        <div className="service-gallery reveal-stagger">
                            {crusineImages.map((img, i) => (
                                <div
                                    key={i}
                                    className="service-gallery-item"
                                    onClick={() => setLightboxIndex(i)}
                                >
                                    <img src={img.src} alt={img.alt} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
                    <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>&times;</button>
                    <button
                        className="lightbox-prev"
                        onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + crusineImages.length) % crusineImages.length); }}
                    >&#8249;</button>
                    <img
                        src={crusineImages[lightboxIndex].src}
                        alt={crusineImages[lightboxIndex].alt}
                        className="lightbox-img"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className="lightbox-next"
                        onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % crusineImages.length); }}
                    >&#8250;</button>
                </div>
            )}
        </div>
        <PageBottom />
        </>
    );
};

export default Culinary;
