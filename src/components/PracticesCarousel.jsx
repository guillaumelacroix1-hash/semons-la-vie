import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './PracticesCarousel.css';

const practices = [
    {
        title: 'Ateliers culinaires',
        subtitle: 'Cuisiner vivant, coloré et conscient.',
        desc: 'Les ateliers de crusine sont des moments de partage et d\'apprentissage autour de la cuisine végétale et crue.',
        image: `${import.meta.env.BASE_URL}service-bg-3.webp`,
        icon: `${import.meta.env.BASE_URL}icons/61-service-icon-3.svg`,
        link: '/ateliers-culinaires',
    },
    {
        title: 'Naturopathie',
        subtitle: 'Comprendre le langage du corps et lui offrir les conditions pour retrouver son équilibre naturel.',
        desc: 'La naturopathie soutient les fonctions vitales et aide à identifier les causes profondes des déséquilibres.',
        image: `${import.meta.env.BASE_URL}service-bg-4.webp`,
        icon: `${import.meta.env.BASE_URL}icons/61-service-icon-4.svg`,
        link: '/naturopathie',
    },
    {
        title: 'Phytothérapie',
        subtitle: 'La puissance douce du végétal.',
        desc: 'Soutenir l\'organisme avec intelligence et respect grâce aux plantes et leurs extraits.',
        image: `${import.meta.env.BASE_URL}service-bg-5.webp`,
        icon: `${import.meta.env.BASE_URL}icons/61-service-icon-5.svg`,
        link: '/phytotherapie',
    },
    {
        title: 'Rééquilibrage alimentaire',
        subtitle: 'Retrouver une alimentation vivante.',
        desc: 'Une hygiène alimentaire simple, naturelle et consciente, adaptée à ton corps et à ton rythme.',
        image: `${import.meta.env.BASE_URL}service-bg-6.webp`,
        icon: `${import.meta.env.BASE_URL}icons/61-service-icon-6.svg`,
        link: '/reequilibrage-alimentaire',
    },
    {
        title: 'Sophrologie',
        subtitle: 'Retrouver calme et stabilité.',
        desc: 'Des techniques de respiration et de relaxation pour apprivoiser ton stress et cultiver la sérénité.',
        image: `${import.meta.env.BASE_URL}service-bg-7.webp`,
        icon: `${import.meta.env.BASE_URL}icons/61-service-icon-7.svg`,
        link: '/sophrologie',
    },
    {
        title: 'Massage AromaTouch®',
        subtitle: 'Harmoniser les énergies et revenir à soi.',
        desc: 'Un soin doux et enveloppant réalisé avec des huiles essentielles pour un profond relâchement.',
        image: `${import.meta.env.BASE_URL}service-bg-8.webp`,
        icon: `${import.meta.env.BASE_URL}icons/61-service-icon-8.svg`,
        link: '/massage',
    },
];

const PracticesCarousel = () => {
    return (
        <section className="practices-carousel-section">
            <div className="practices-carousel-bg" />
            <div className="practices-carousel-inner">
                <div className="practices-carousel-header">
                    <h2>Mes pratiques</h2>
                    <p>
                        Explore ton corps, ton souffle et tes émotions pour une transformation en douceur :
                        de la compréhension à l'harmonisation physique, émotionnelle et énergétique.
                    </p>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1.2}
                    centeredSlides={false}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    breakpoints={{
                        480: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3.2 },
                        1400: { slidesPerView: 3.5 },
                    }}
                    className="practices-swiper"
                >
                    {practices.map((p, i) => (
                        <SwiperSlide key={i}>
                            <Link to={p.link} className="practice-slide">
                                <div className="practice-slide-img">
                                    <img src={p.image} alt={p.title} loading="lazy" />
                                </div>
                                <div className="practice-slide-overlay" />
                                <div className="practice-slide-content">
                                    <img
                                        src={p.icon}
                                        alt=""
                                        className="practice-slide-icon"
                                        width="44"
                                        height="44"
                                    />
                                    <h3>{p.title}</h3>
                                    <p className="practice-slide-desc">{p.subtitle} {p.desc}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PracticesCarousel;
