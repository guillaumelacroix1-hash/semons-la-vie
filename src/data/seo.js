// Titres et descriptions de chaque page. Lus par le composant Seo dans le navigateur
// et par scripts/prerender-seo.mjs au build, qui les écrit dans le HTML servi :
// Google lit ce HTML avant d'exécuter le moindre script.
import { formatDate } from './events.js';

export const SITE_URL = 'https://www.semons-la-vie.fr';
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export const PAGES = {
    '/': {
        title: 'Semons la Vie · Naturopathe & sophrologue près de Cognac',
        description: "Chloé Wisser, naturopathe et sophrologue à Châteaubernard, près de Cognac, t'accompagne vers un équilibre durable et une santé plus sereine, à ton rythme.",
    },
    '/qui-suis-je': {
        title: 'Qui suis-je ? Chloé Wisser, naturopathe & sophrologue',
        description: 'Chloé Wisser, naturopathe (École Dargère Univers) et sophrologue (Institut Catherine Aliotta) à Châteaubernard, près de Cognac. Découvre son parcours.',
    },
    '/naturopathie': {
        title: 'Naturopathie à Châteaubernard (Cognac) · Semons la Vie',
        description: 'Naturopathe à Châteaubernard, près de Cognac : bilan de vitalité, alimentation, plantes et hygiène de vie pour rééquilibrer ton terrain en douceur.',
    },
    '/sophrologie': {
        title: 'Sophrologie à Châteaubernard (Cognac) · Semons la Vie',
        description: 'Sophrologie à Châteaubernard, près de Cognac : séances individuelles ou en groupe pour apaiser le stress et mieux vivre tes émotions. En cabinet ou en visio.',
    },
    '/phytotherapie': {
        title: 'Phytothérapie à Châteaubernard (Cognac) · Semons la Vie',
        description: 'Phytothérapie à Châteaubernard, près de Cognac : des plantes choisies pour toi, pour soutenir digestion, sommeil, stress et vitalité. En cabinet ou en visio.',
    },
    '/reequilibrage-alimentaire': {
        title: 'Rééquilibrage alimentaire près de Cognac · Semons la Vie',
        description: 'Rééquilibrage alimentaire à Châteaubernard, près de Cognac : un bilan complet et des ajustements concrets, sans régime ni frustration. En cabinet ou en visio.',
    },
    '/massage': {
        title: 'Rituel AromaTouch® à Châteaubernard (Cognac) · Semons la Vie',
        description: 'Le Rituel AromaTouch® à Châteaubernard, près de Cognac : un soin enveloppant aux huiles essentielles pour relâcher les tensions et retrouver ton équilibre.',
    },
    '/ateliers-culinaires': {
        title: 'Ateliers de crusine près de Cognac · Semons la Vie',
        description: 'Ateliers de crusine près de Cognac : apprends une cuisine crue, végétale et gourmande en petit groupe, avec des recettes simples à refaire chez toi.',
    },
    '/evenements': {
        title: 'Ateliers & événements près de Cognac · Semons la Vie',
        description: 'Les prochains rendez-vous de Semons la Vie près de Cognac : ateliers de crusine, journées bien-être et week-ends de jeûne doux. Réserve vite ta place.',
    },
    '/contact': {
        title: 'Contact · Semons la Vie à Châteaubernard (Cognac)',
        description: 'Contacte Chloé Wisser, naturopathe et sophrologue : 06 61 49 35 86 ou contact@semons-la-vie.fr. Espace Honnebee, 35 rue des Vauzelles, 16100 Châteaubernard.',
    },
    '/mentions-legales': {
        title: 'Mentions légales · Semons la Vie',
        description: 'Mentions légales du site semons-la-vie.fr : éditeur, hébergeur, propriété intellectuelle et médiation de la consommation.',
    },
    '/cgv': {
        title: 'Conditions Générales de Vente · Semons la Vie',
        description: 'Conditions Générales de Vente des prestations Semons la Vie : consultations, ateliers, séjours, modalités de paiement, annulation et rétractation.',
    },
    '/politique-de-confidentialite': {
        title: 'Politique de confidentialité · Semons la Vie',
        description: 'Politique de confidentialité du site semons-la-vie.fr : données collectées, finalités, durées de conservation et droits RGPD.',
    },
};

const MAX_DESCRIPTION = 160;

const clip = (text) => {
    if (text.length <= MAX_DESCRIPTION) return text;
    const cut = text.slice(0, MAX_DESCRIPTION - 1);
    return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
};

const absolute = (image) => (!image ? DEFAULT_IMAGE : image.startsWith('http') ? image : `${SITE_URL}${image}`);

// Un même séjour revient à plusieurs dates avec le même titre et le même résumé :
// le mois dans le titre et la date en tête de description rendent chaque page unique.
export const eventSeo = (event) => {
    const date = event.dateLabel || formatDate(event.date);
    const when = date.charAt(0).toUpperCase() + date.slice(1);
    const where = (event.location || '').split(',')[0];
    const month = new Date(`${event.date}T00:00:00`).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    return {
        title: `${event.title} · ${month}`,
        description: clip(`${when}${where ? `, ${where}` : ''}. ${event.shortDesc || ''}`.trim()),
        path: `/evenements/${event.id}`,
        image: absolute(event.image),
        type: 'article',
    };
};
