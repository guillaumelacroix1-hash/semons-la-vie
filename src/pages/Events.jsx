import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin, Clock, Users } from 'lucide-react';
import { formatDate } from '../data/events';
import { useUpcomingEvents } from '../data/useEvents';
import Seo from '../components/Seo';
import './Events.css';

const Events = () => {
    const [filter, setFilter] = useState('Tous');
    const events = useUpcomingEvents();
    const categories = useMemo(() => ['Tous', ...new Set(events.map(e => e.category))], [events]);

    const filtered = filter === 'Tous' ? events : events.filter(e => e.category === filter);

    return (
        <div className="events-page animate-in">
            <Seo
                title="Ateliers & événements bien-être · Semons la Vie"
                description="Les prochains événements de Semons la Vie : ateliers de crusine, journées santé & vitalité, week-ends de jeûne et sophrologie de groupe près de Cognac."
                path="/evenements"
            />
            {/* Hero */}
            <div className="events-hero">
                <div className="events-hero-bg">
                    <img
                        src={`${import.meta.env.BASE_URL}evenements.jpg`}
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
                {/* Aucun événement à venir : message d'attente plutôt qu'une page vide */}
                {events.length === 0 && (
                    <div className="events-empty">
                        <h2>De nouvelles dates arrivent bientôt</h2>
                        <p>
                            Aucun événement n'est programmé pour le moment. Écris-moi pour être prévenue
                            en priorité des prochains ateliers et séjours.
                        </p>
                        <Link to="/contact" className="btn-primary">Me contacter</Link>
                    </div>
                )}

                {/* Filtres */}
                {events.length > 0 && (
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
                )}

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
                                    <span><Calendar size={14} /> {event.dateLabel || formatDate(event.date)}</span>
                                    <span><Clock size={14} /> {event.duration}</span>
                                    <span><MapPin size={14} /> {(event.location || '').split(',')[0]}</span>
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
