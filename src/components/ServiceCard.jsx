import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';

const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
};

const ServiceCard = ({ title, description, link, icon, image, color }) => {
    const rgb = color ? hexToRgb(color) : '64, 59, 174';
    return (
        <Link to={link} className="service-card-carousel" style={{
            '--card-color': color,
            '--card-color-dark': `rgba(${rgb}, 0.92)`,
            '--card-color-mid': `rgba(${rgb}, 0.65)`,
            '--card-color-light': `rgba(${rgb}, 0.15)`,
        }}>
            <div className="service-card-image">
                <img src={image} alt={title} />
            </div>
            <div className="service-card-overlay" />
            <div className="service-card-content">
                <div className="service-card-icon">
                    {icon}
                </div>
                <h3 className="service-card-title">{title}</h3>
                <p className="service-card-desc">{description}</p>
                <span className="service-card-link">
                    En savoir plus <ArrowRight size={16} />
                </span>
            </div>
        </Link>
    );
};

export default ServiceCard;
