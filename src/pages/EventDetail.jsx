import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowLeft, Check, ArrowRight } from 'lucide-react';
import { events, formatDate } from '../data/events';
import './Events.css';

const EventDetail = () => {
    const { id } = useParams();
    const event = events.find(e => e.id === id);
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    if (!event) {
        return (
            <div className="events-page animate-in">
                <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
                    <h2>Événement non trouvé</h2>
                    <Link to="/evenements" className="btn-primary" style={{ marginTop: '2rem' }}>
                        Voir tous les événements
                    </Link>
                </div>
            </div>
        );
    }

    const otherEvents = events.filter(e => e.id !== id).slice(0, 3);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="events-page animate-in">
            {/* Hero */}
            <div className="event-detail-hero">
                <div className="event-detail-hero-bg">
                    <img src={event.image} alt={event.title} />
                </div>
                <div className="event-detail-hero-content">
                    <Link to="/evenements" className="event-back-link">
                        <ArrowLeft size={16} /> Tous les événements
                    </Link>
                    <span className={`event-card-tag ${event.categoryColor}`}>{event.category}</span>
                    <h1>{event.title}</h1>
                    <div className="event-detail-meta">
                        <span><Calendar size={16} /> {formatDate(event.date)}</span>
                        <span><Clock size={16} /> {event.time}</span>
                        <span><MapPin size={16} /> {event.location}</span>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="event-detail-layout">
                    {/* Contenu principal */}
                    <div className="event-detail-main">
                        <section className="event-detail-section">
                            <h2>À propos de cet événement</h2>
                            {event.description.split('\n\n').map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </section>

                        <section className="event-detail-section">
                            <h2>Ce qui est inclus</h2>
                            <ul className="event-includes-list">
                                {event.includes.map((item, i) => (
                                    <li key={i}>
                                        <Check size={16} className="event-check-icon" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="event-detail-section">
                            <h2>Pour qui ?</h2>
                            <p>{event.forWhom}</p>
                        </section>

                        <section className="event-detail-section">
                            <h2>Lieu</h2>
                            <div className="event-location-card">
                                <MapPin size={20} />
                                <div>
                                    <strong>{event.location}</strong>
                                    <p>Les indications détaillées te seront envoyées après inscription.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar — Réservation */}
                    <aside className="event-detail-sidebar">
                        <div className="event-booking-card">
                            <div className="event-booking-price">
                                <span className="event-price-amount">{event.price}€</span>
                                <span className="event-price-label">par personne</span>
                            </div>

                            <div className="event-booking-info">
                                <div className="event-booking-row">
                                    <Calendar size={16} />
                                    <span>{formatDate(event.date)}</span>
                                </div>
                                <div className="event-booking-row">
                                    <Clock size={16} />
                                    <span>{event.time} ({event.duration})</span>
                                </div>
                                <div className="event-booking-row">
                                    <Users size={16} />
                                    <span>{event.spotsLeft} places restantes sur {event.spots}</span>
                                </div>
                            </div>

                            <div className="event-spots-bar">
                                <div
                                    className="event-spots-fill"
                                    style={{ width: `${((event.spots - event.spotsLeft) / event.spots) * 100}%` }}
                                />
                            </div>

                            {!submitted ? (
                                <form className="event-booking-form" onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Ton nom complet"
                                        required
                                        value={form.name}
                                        onChange={e => setForm({ ...form, name: e.target.value })}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Ton adresse email"
                                        required
                                        value={form.email}
                                        onChange={e => setForm({ ...form, email: e.target.value })}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Ton numéro de téléphone"
                                        value={form.phone}
                                        onChange={e => setForm({ ...form, phone: e.target.value })}
                                    />
                                    <textarea
                                        placeholder="Un message ou une question ? (facultatif)"
                                        rows={3}
                                        value={form.message}
                                        onChange={e => setForm({ ...form, message: e.target.value })}
                                    />
                                    <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                                        Je réserve ma place
                                    </button>
                                </form>
                            ) : (
                                <div className="event-booking-success">
                                    <Check size={32} />
                                    <h4>Demande envoyée !</h4>
                                    <p>Chloé te recontactera très vite pour confirmer ta réservation.</p>
                                </div>
                            )}

                            <p className="event-booking-note">
                                Le paiement se fait sur place ou par virement. Chloé te contactera pour confirmer ta participation.
                            </p>
                        </div>
                    </aside>
                </div>

                {/* Autres événements */}
                {otherEvents.length > 0 && (
                    <section className="event-other-section">
                        <h2>Autres événements à venir</h2>
                        <div className="events-grid events-grid-small">
                            {otherEvents.map(ev => (
                                <Link to={`/evenements/${ev.id}`} key={ev.id} className="event-card">
                                    <div className="event-card-image">
                                        <img src={ev.image} alt={ev.title} />
                                        <span className={`event-card-tag ${ev.categoryColor}`}>{ev.category}</span>
                                    </div>
                                    <div className="event-card-body">
                                        <h3>{ev.title}</h3>
                                        <p className="event-card-desc">{ev.shortDesc}</p>
                                        <div className="event-card-footer">
                                            <span className="event-card-price">{ev.price}€</span>
                                            <span className="event-card-link">Voir <ArrowRight size={14} /></span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default EventDetail;
