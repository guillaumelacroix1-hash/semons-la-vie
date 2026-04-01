import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
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
            <div className="container">
                <div className="contact-header">
                    <h1>Me contacter</h1>
                    <p>Contactez-moi facilement en ligne, par téléphone ou en personne.</p>
                </div>

                <div className="contact-grid">
                    {/* Formulaire */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nom</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
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
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn-primary">Envoyer</button>
                    </form>

                    {/* Infos */}
                    <div className="contact-info">
                        <div className="contact-info-card">
                            <MapPin size={20} />
                            <div>
                                <h3>Adresse</h3>
                                <p>Espace Honnebee<br />35, rue des Vauzelles<br />16100 Châteaubernard</p>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <Phone size={20} />
                            <div>
                                <h3>Téléphone</h3>
                                <p><a href="tel:0661493586">06.61.49.35.86</a></p>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <Mail size={20} />
                            <div>
                                <h3>E-mail</h3>
                                <p><a href="mailto:contact@semons-la-vie.fr">contact@semons-la-vie.fr</a></p>
                            </div>
                        </div>

                        <div className="contact-info-card">
                            <div style={{ width: 20 }}></div>
                            <div>
                                <h3>Horaires</h3>
                                <p>Lundi – Vendredi : 9h – 18h<br />Samedi : 9h – 12h</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Citation */}
                <div className="contact-quote">
                    <blockquote>
                        «&nbsp;Je fais ma part, j'ouvre mon cœur et je laisse rayonner ma lumière&nbsp;»
                    </blockquote>
                    <p>— Chloé Wisser</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
