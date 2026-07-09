import React from 'react';

const SITE_URL = 'https://www.semons-la-vie.fr';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

// React 19 hoiste automatiquement <title>, <meta> et <link> vers le <head>.
// Ce composant surcharge les valeurs par défaut d'index.html pour chaque page.
const Seo = ({ title, description, path = '/', image = DEFAULT_IMAGE, type = 'website' }) => {
    const url = `${SITE_URL}${path}`;
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </>
    );
};

export default Seo;
