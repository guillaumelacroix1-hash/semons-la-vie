import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Clock, Users } from 'lucide-react';
import { events, formatDate } from '../data/events';
import './Events.css';

const categories = ['Tous', ...new Set(events.map(e => e.category))];

const Events = () => {
    const [filter, setFilter] = useState('Tous');

    const filtered = filter === 'Tous' ? events : events.filter(e => e.category === filter);

    return (
        <div className="events-page animate-in">
            {/* Hero */}
            <div className="events-hero">
                <div className="events-hero-bg">
                    <img
                        src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop"
                        alt="Événements"
                    />
                </div>
                <div className="events-hero-content">
                    <span className="section-label" style={{ color: 'white' }}>Événements</span>
                    <h1>Ateliers, stages & journées bien-être</h1>
                    <p>
                        Découvre les prochains événements organisés par Chloé : ateliers de crusine,
                        journées santé, week-ends de jeûne et séances collectives de sophrologie.
                    </p>
                </div>
            </div>

            <div className="container">
                {/* Filtres */}
                <div className="events-filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`events-filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Liste */}
                <div className="events-grid">
                    {filtered.map(event => (
                        <Link to={`/evenements/${event.id}`} key={event.id} className="event-card">
                            <div className="event-card-image">
                                <img src={event.image} alt={event.title} />
                                <span className={`event-card-tag ${event.categoryColor}`}>{event.category}</span>
                                {event.spotsLeft <= 3 && (
                                    <span className="event-card-urgent">Plus que {event.spotsLeft} places</span>
                                )}
                            </div>
                            <div className="event-card-body">
                                <h3>{event.title}</h3>
                                <p className="event-card-desc">{event.shortDesc}</p>
                                <div className="event-card-details">
                                    <span><Calendar size={14} /> {formatDate(event.date)}</span>
                                    <span><Clock size={14} /> {event.duration}</span>
                                    <span><MapPin size={14} /> {event.location.split(',')[0]}</span>
                                    <span><Users size={14} /> {event.spotsLeft} places restantes</span>
                                </div>
                                <div className="event-card-footer">
                                    <span className="event-card-price">{event.price}€</span>
                                    <span className="event-card-link">
                                        Voir le détail <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
