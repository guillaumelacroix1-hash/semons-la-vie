import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
    { label: 'Naturopathie', link: '/naturopathie' },
    { label: 'Phytothérapie', link: '/phytotherapie' },
    { label: 'Rééquilibrage alimentaire', link: '/reequilibrage-alimentaire' },
    { label: 'Sophrologie', link: '/sophrologie' },
    { label: 'Massage AromaTouch®', link: '/massage' },
    { label: 'Ateliers culinaires', link: '/ateliers-culinaires' },
];

const ServiceSidebar = ({ active }) => {
    return (
        <aside className="service-sidebar">
            <div className="sidebar-nav">
                <h3>Mes Accompagnements</h3>
                <div className="sidebar-nav-list">
                    {services.map((s) => (
                        <Link
                            to={s.link}
                            key={s.label}
                            className={`sidebar-nav-link ${s.label === active ? 'active' : ''}`}
                        >
                            {s.label}
                            <ArrowRight size={14} />
                        </Link>
                    ))}
                </div>
            </div>

            <div className="sidebar-help">
                <h3>Tu hésites entre ces accompagnements ?</h3>
                <p>
                    Si tu ne sais pas encore quelle approche correspond le mieux à ta situation,
                    je peux t'aider à faire le point et t'orienter vers l'accompagnement le plus adapté.
                </p>
                <Link to="/contact" className="btn-outline">Me contacter</Link>
            </div>
        </aside>
    );
};

export default ServiceSidebar;
