// API des événements.
//   GET    : lecture publique (site + backoffice)
//   PUT    : remplace la liste complète (backoffice, authentifié)
//
// Si le stockage Upstash n'est pas configuré, le GET renvoie configured:false et
// le site retombe sur la liste statique embarquée dans le bundle.

import { readEvents, writeEvents, isConfigured } from './_store.js';
import { requireAuth } from './_auth.js';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        if (!isConfigured()) {
            return res.status(200).json({ configured: false, events: null });
        }
        try {
            const events = await readEvents();
            // Cache court : les visiteurs profitent du CDN, une modification dans
            // le backoffice est visible en moins d'une minute.
            res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
            return res.status(200).json({ configured: true, events });
        } catch (err) {
            console.error('events GET:', err?.message);
            return res.status(200).json({ configured: false, events: null });
        }
    }

    if (req.method === 'PUT') {
        if (!requireAuth(req, res)) return;

        if (!isConfigured()) {
            return res.status(503).json({ error: 'Stockage non configuré (Upstash).' });
        }

        const { events } = req.body || {};
        if (!Array.isArray(events)) {
            return res.status(400).json({ error: 'Format invalide' });
        }

        // Garde-fous : un identifiant et un titre sont indispensables au site.
        for (const e of events) {
            if (!e.id || !e.title || !e.date) {
                return res.status(400).json({ error: 'Chaque événement doit avoir un identifiant, un titre et une date.' });
            }
        }
        const ids = events.map((e) => e.id);
        if (new Set(ids).size !== ids.length) {
            return res.status(400).json({ error: 'Deux événements ont le même identifiant.' });
        }

        try {
            await writeEvents(events);
            return res.status(200).json({ ok: true, count: events.length });
        } catch (err) {
            console.error('events PUT:', err?.message);
            return res.status(502).json({ error: "L'enregistrement a échoué" });
        }
    }

    return res.status(405).json({ error: 'Méthode non autorisée' });
}
