import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPage.css';

const MentionsLegales = () => {
    return (
        <div className="legal-page animate-in">
            <div className="legal-content">
                <h1>Mentions légales</h1>
                <p className="legal-updated">Dernière mise à jour : 9 juillet 2026</p>

                <h2>Édition du site internet</h2>
                <p>
                    Le site <strong>www.semons-la-vie.fr</strong> (ci-après « le Site »), accessible à
                    l'adresse <a href="https://www.semons-la-vie.fr">https://www.semons-la-vie.fr</a>,
                    est édité par :
                </p>
                <p>
                    <strong>Chloé Wisser EI</strong><br />
                    Nom commercial : <strong>SEMONS LA VIE</strong><br />
                    Entreprise Individuelle – Micro-entreprise
                </p>
                <p>
                    Adresse :<br />
                    14 rue du Subiet dite du U<br />
                    16370 Bréville – France
                </p>
                <p>
                    Téléphone : <a href="tel:0661493586">06 61 49 35 86</a><br />
                    Email : <a href="mailto:contact@semons-la-vie.fr">contact@semons-la-vie.fr</a><br />
                    SIRET : 880 780 697 00038
                </p>
                <p>TVA non applicable – article 293 B du Code général des impôts.</p>

                <h2>Assurance professionnelle</h2>
                <p>
                    L'activité de Chloé Wisser EI – Semons la Vie est couverte par une assurance
                    Responsabilité Civile Professionnelle souscrite auprès d'AXA.
                </p>

                <h2>Nature de l'activité</h2>
                <p>Les activités proposées sur le Site relèvent :</p>
                <ul>
                    <li>de la naturopathie</li>
                    <li>de la sophrologie</li>
                    <li>du rééquilibrage alimentaire</li>
                    <li>de la phytothérapie</li>
                    <li>des ateliers culinaires et expériences bien-être</li>
                    <li>des accompagnements personnalisés</li>
                </ul>
                <p>Les activités proposées :</p>
                <ul>
                    <li>ne constituent ni des actes médicaux</li>
                    <li>ni des soins de santé</li>
                    <li>ni des prescriptions médicales</li>
                </ul>
                <p>Elles ne se substituent en aucun cas à un suivi médical.</p>
                <p>
                    Pour toute question relevant du domaine médical, l'utilisateur est invité à
                    consulter un professionnel de santé.
                </p>

                <h2>Hébergeur du site internet</h2>
                <p>Le Site est hébergé par :</p>
                <p>
                    <strong>Vercel Inc.</strong><br />
                    340 S Lemon Ave #4133<br />
                    Walnut, CA 91789<br />
                    États-Unis<br />
                    <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a>
                </p>

                <h2>Crédits graphiques et photographiques</h2>
                <p>
                    Webdesign et développement : Guillaume Lacroix<br />
                    Logo et identité visuelle : Studio Colibri – Sophie Degremont
                </p>
                <p>Photographies :</p>
                <ul>
                    <li>Audrey Sergent</li>
                    <li>Chloé Wisser</li>
                    <li>Envato Elements</li>
                    <li>auteurs respectifs des contenus utilisés</li>
                </ul>

                <h2>Propriété intellectuelle</h2>
                <p>
                    L'ensemble des éléments présents sur le Site (textes, images, photographies, logos,
                    vidéos, graphismes, documents téléchargeables, structure du site, audios, supports
                    pédagogiques, etc.) est protégé par le Code de la propriété intellectuelle.
                </p>
                <p>
                    Ils sont la propriété exclusive de l'Éditeur ou de ses partenaires, sauf mention
                    contraire.
                </p>
                <p>
                    Toute reproduction, représentation, modification, diffusion ou exploitation, totale
                    ou partielle, sans autorisation écrite préalable est strictement interdite et
                    susceptible de constituer une contrefaçon.
                </p>

                <h2>Responsabilité</h2>
                <p>
                    Les informations diffusées sur le Site sont fournies à titre informatif, pédagogique
                    et éducatif.
                </p>
                <p>
                    L'Éditeur s'efforce de fournir des informations fiables et à jour mais ne saurait
                    garantir l'exactitude, l'exhaustivité ou l'actualité des contenus proposés.
                </p>
                <p>
                    L'utilisateur reste seul responsable de l'usage qu'il fait des informations
                    disponibles sur le Site.
                </p>

                <h2>Liens hypertextes</h2>
                <p>Le Site peut contenir des liens hypertextes vers des sites tiers.</p>
                <p>
                    L'Éditeur ne saurait être tenu responsable du contenu de ces sites externes ni des
                    éventuelles modifications ou mises à jour les concernant.
                </p>

                <h2>Données personnelles et cookies</h2>
                <p>Le Site peut collecter certaines données personnelles via :</p>
                <ul>
                    <li>les formulaires de contact</li>
                    <li>les prises de rendez-vous</li>
                    <li>les demandes d'informations</li>
                </ul>
                <p>Le traitement des données est effectué conformément à la réglementation en vigueur.</p>
                <p>
                    La <Link to="/politique-de-confidentialite">politique de confidentialité</Link> est
                    consultable sur la page dédiée du Site.
                </p>
                <p>
                    Le Site peut utiliser des cookies nécessaires à son bon fonctionnement et à
                    l'amélioration de l'expérience utilisateur.
                </p>

                <h2>Médiation de la consommation</h2>
                <p>
                    Conformément aux articles L612-1 et suivants du Code de la consommation, en cas de
                    litige non résolu amiablement, le consommateur peut recourir gratuitement à un
                    médiateur de la consommation.
                </p>
                <p>Médiateur désigné :</p>
                <p>
                    <strong>CNPM MÉDIATION CONSOMMATION</strong><br />
                    27 avenue de la Libération<br />
                    42400 Saint-Chamond<br />
                    <a href="https://www.cnpm-mediation-consommation.eu" target="_blank" rel="noopener noreferrer">
                        CNPM Médiation Consommation
                    </a>
                </p>

                <h2>Droit applicable</h2>
                <p>Les présentes mentions légales sont soumises au droit français.</p>
            </div>
        </div>
    );
};

export default MentionsLegales;
