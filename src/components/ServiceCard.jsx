import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, link, icon, image }) => {
    return (
        <Link to={link} className="service-card-carousel">
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
