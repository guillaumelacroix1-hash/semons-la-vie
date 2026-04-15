import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Phone } from 'lucide-react';

const services = [
    { label: 'Naturopathie', link: '/naturopathie', color: '#FFCF00', dark: '#8B6F00', textDark: true },
    { label: 'Phytothérapie', link: '/phytotherapie', color: '#7AA476', dark: '#4A7046' },
    { label: 'Rééquilibrage alimentaire', link: '/reequilibrage-alimentaire', color: '#7AA476', dark: '#4A7046' },
    { label: 'Sophrologie', link: '/sophrologie', color: '#E8C8D8', dark: '#8B3A60', textDark: true },
    { label: 'Massage AromaTouch®', link: '/massage', color: '#5B5EAB', dark: '#3D3F7A' },
    { label: 'Ateliers culinaires', link: '/ateliers-culinaires', color: '#7AA476', dark: '#4A7046' },
];

function lightenHex(hex, amount = 0.88) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const lr = Math.round(r + (255 - r) * amount);
    const lg = Math.round(g + (255 - g) * amount);
    const lb = Math.round(b + (255 - b) * amount);
    return `rgb(${lr}, ${lg}, ${lb})`;
}

const ServiceSidebar = ({ active }) => {
    const activeService = services.find(s => s.label === active);
    const activeColor = activeService ? activeService.color : '#5B5EAB';
    const darkColor = activeService ? activeService.dark : '#3D3F7A';
    const isLight = activeService?.textDark;
    const paleBg = lightenHex(activeColor);

    return (
        <aside className="service-sidebar" style={{ '--service-color': activeColor }}>
            <div className="sidebar-booking" style={{
                background: paleBg,
                color: '#1E1B1B',
            }}>
                <div className="sidebar-booking-icon" style={{ background: activeColor, color: isLight ? '#1E1B1B' : 'white' }}>
                    <Calendar size={24} />
                </div>
                <h3 style={{ color: '#1E1B1B' }}>Prendre rendez-vous</h3>
                <p style={{ color: 'rgba(30,27,27,0.65)' }}>Réserve ta séance en ligne ou contacte-moi directement.</p>
                <a href="https://www.sumupbookings.com/semons-la-vie" target="_blank" rel="noopener noreferrer" className="btn-primary sidebar-booking-btn" style={{ background: 'white', color: darkColor }}>Réserver en ligne</a>
                <a href="tel:0661493586" className="sidebar-booking-phone" style={{ color: '#1E1B1B' }}>
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
                            style={s.label === active ? { background: s.color, color: s.color === '#FFCF00' || s.color === '#E8C8D8' ? '#1E1B1B' : 'white' } : { '--item-color': s.color }}
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
