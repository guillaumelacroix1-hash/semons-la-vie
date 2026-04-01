import { useEffect, useRef } from 'react';

const ServiceHeroZoom = ({ src, alt }) => {
    const imgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imgRef.current) return;
            const scrollY = window.scrollY;
            const scale = 1 + scrollY * 0.0004;
            imgRef.current.style.transform = `scale(${Math.min(scale, 1.2)})`;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="service-hero-banner-bg">
            <img ref={imgRef} src={src} alt={alt} />
        </div>
    );
};

export default ServiceHeroZoom;
