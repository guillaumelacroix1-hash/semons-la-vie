import { useEffect } from 'react';
import { PAGES, SITE_URL, DEFAULT_IMAGE } from '../data/seo';

// Le HTML servi porte déjà les balises de la page demandée (scripts/prerender-seo.mjs).
// On les met à jour sur place lors de la navigation, sans jamais en ajouter de doublon.
const setTag = (tag, keyAttr, key, valueAttr, value) => {
    let el = document.head.querySelector(`${tag}[${keyAttr}="${key}"]`);
    if (!el) {
        el = document.createElement(tag);
        el.setAttribute(keyAttr, key);
        document.head.appendChild(el);
    }
    el.setAttribute(valueAttr, value);
};

const Seo = ({ path = '/', title, description, image = DEFAULT_IMAGE, type = 'website' }) => {
    const page = PAGES[path] || {};
    const finalTitle = title || page.title;
    const finalDescription = description || page.description;

    useEffect(() => {
        const url = `${SITE_URL}${path}`;
        document.title = finalTitle;
        setTag('meta', 'name', 'description', 'content', finalDescription);
        setTag('link', 'rel', 'canonical', 'href', url);
        setTag('meta', 'property', 'og:title', 'content', finalTitle);
        setTag('meta', 'property', 'og:description', 'content', finalDescription);
        setTag('meta', 'property', 'og:url', 'content', url);
        setTag('meta', 'property', 'og:image', 'content', image);
        setTag('meta', 'property', 'og:type', 'content', type);
        setTag('meta', 'name', 'twitter:title', 'content', finalTitle);
        setTag('meta', 'name', 'twitter:description', 'content', finalDescription);
        setTag('meta', 'name', 'twitter:image', 'content', image);
    }, [path, finalTitle, finalDescription, image, type]);

    return null;
};

export default Seo;
