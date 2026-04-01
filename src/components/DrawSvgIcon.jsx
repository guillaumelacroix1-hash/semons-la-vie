import React, { useRef, useEffect, useState } from 'react';

const DrawSvgIcon = ({ children, color, size = 60, delay = 0 }) => {
    const svgRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [drawDone, setDrawDone] = useState(false);

    useEffect(() => {
        if (!svgRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
        );
        observer.observe(svgRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        const timer = setTimeout(() => setDrawDone(true), 3500 + delay);
        return () => clearTimeout(timer);
    }, [isVisible, delay]);

    return (
        <div
            ref={svgRef}
            className="draw-svg-icon"
            style={{
                width: size,
                height: size,
                '--draw-delay': `${delay}ms`,
                '--draw-color': color,
            }}
        >
            <div className={`draw-svg-wrap ${isVisible ? 'animate' : ''} ${drawDone ? 'filled' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default DrawSvgIcon;
