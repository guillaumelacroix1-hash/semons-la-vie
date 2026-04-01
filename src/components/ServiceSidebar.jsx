import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Phone } from 'lucide-react';

const services = [
    { label: 'Naturopathie', link: '/naturopathie', color: '#FFCF00', dark: '#B8960A', textDark: true },
    { label: 'Phytothérapie', link: '/phytotherapie', color: '#7AA476', dark: '#4A7046' },
    { label: 'Rééquilibrage alimentaire', link: '/reequilibrage-alimentaire', color: '#7AA476', dark: '#4A7046' },
    { label: 'Sophrologie', link: '/sophrologie', color: '#E8C8D8', dark: '#8B3A60' },
    { label: 'Massage AromaTouch®', link: '/massage', color: '#5B5EAB', dark: '#3D3F7A' },
    { label: 'Ateliers culinaires', link: '/ateliers-culinaires', color: '#7AA476', dark: '#4A7046' },
];

const ServiceSidebar = ({ active }) => {
    const activeService = services.find(s => s.label === active);
    const activeColor = activeService ? activeService.color : '#5B5EAB';
    const darkColor = activeService ? activeService.dark : '#3D3F7A';
    const isLight = activeService?.textDark;

    return (
        <aside className="service-sidebar" style={{ '--service-color': activeColor }}>
            <div className="sidebar-booking" style={{
                background: isLight ? darkColor : activeColor,
            }}>
                <div className="sidebar-booking-icon">
                    <Calendar size={24} />
                </div>
                <h3>Prendre rendez-vous</h3>
                <p>Réserve ta séance en ligne ou contacte-moi directement.</p>
                <a href="https://www.sumupbookings.com/semons-la-vie" target="_blank" rel="noopener noreferrer" className="btn-primary sidebar-booking-btn" style={{ color: isLight ? darkColor : activeColor }}>Réserver en ligne</a>
                <a href="tel:0661493586" className="sidebar-booking-phone">
                    <Phone size={14} /> 06.61.49.35.86
                </a>
            </div>

            <div className="sidebar-nav">
                <h3>Mes Accompagnements</h3>
                <div className="sidebar-nav-list">
                    {services.map((s) => (
                        <Link
                            to={s.link}
                            key={s.label}
                            className={`sidebar-nav-link ${s.label === active ? 'active' : ''}`}
                            style={s.label === active ? { background: s.color, color: s.color === '#FFCF00' || s.color === '#E8C8D8' ? '#1E1B1B' : 'white' } : {}}
                            onMouseEnter={(e) => {
                                if (s.label !== active) {
                                    e.currentTarget.style.color = s.color;
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (s.label !== active) {
                                    e.currentTarget.style.color = '';
                                }
                            }}
                        >
                            {s.label}
                            <ArrowRight size={14} />
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default ServiceSidebar;
