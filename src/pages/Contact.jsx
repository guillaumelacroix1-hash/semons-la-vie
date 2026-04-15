import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:contact@semons-la-vie.fr?subject=Contact depuis le site&body=${encodeURIComponent(
            `Nom: ${formData.name}\n\n${formData.message}`
        )}`;
    };

    return (
        <div className="contact-page animate-in">
            {/* Hero banner */}
            <div className="contact-hero">
                <div className="contact-hero-bg">
                    <img
                        src={`${import.meta.env.BASE_URL}services/Sophrologie.jpg`}
                        alt="Contact"
                    />
                </div>
                <div className="contact-hero-content">
                    <span className="section-label" style={{ color: 'white' }}>Contact</span>
                    <h1>Envie d'échanger ?</h1>
                    <p>Écris-moi un message ou contacte-moi directement, je te réponds avec plaisir.</p>
                </div>
            </div>

            <div className="container">
                <div className="contact-layout">
                    <div className="contact-photo-side">
                        <img
                            src={`${import.meta.env.BASE_URL}cloclo.png`}
                            alt="Chloé Wisser"
                        />
                        <div className="contact-photo-overlay">
                            <strong>Chloé Wisser</strong>
                            <span>Naturopathe & Sophrologue</span>
                        </div>
                    </div>

                    <div className="contact-form-side">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nom</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Ton nom"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="ton@email.fr"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Dis-moi comment je peux t'aider…"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-primary">
                                Envoyer <ArrowRight size={16} />
                            </button>
                        </form>

                        <div className="contact-details">
                            <a href="tel:0661493586" className="contact-detail-item">
                                <Phone size={16} />
                                <span>06.61.49.35.86</span>
                            </a>
                            <a href="mailto:contact@semons-la-vie.fr" className="contact-detail-item">
                                <Mail size={16} />
                                <span>contact@semons-la-vie.fr</span>
                            </a>
                            <div className="contact-detail-item">
                                <MapPin size={16} />
                                <span>Espace Honnebee, 35 rue des Vauzelles, 16100 Châteaubernard</span>
                            </div>
                            <div className="contact-detail-item">
                                <Clock size={16} />
                                <span>Lun–Ven : 9h–18h · Sam : 9h–12h</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
