// Stockage des événements dans Upstash Redis (REST API, aucune dépendance npm).
//
// Tant que les variables UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN ne sont
// pas configurées, isConfigured() renvoie false : le site public retombe alors sur
// la liste statique de src/data/events.js et reste parfaitement fonctionnel.

const URL_BASE = process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const KEY = 'semons-la-vie:events';

export const isConfigured = () => Boolean(URL_BASE && TOKEN);

export async function readEvents() {
    if (!isConfigured()) return null;

    const r = await fetch(`${URL_BASE}/get/${KEY}`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
        cache: 'no-store',
    });
    if (!r.ok) throw new Error(`Upstash GET ${r.status}`);

    const data = await r.json();
    if (!data.result) return null;

    try {
        const parsed = JSON.parse(data.result);
        return Array.isArray(parsed) ? parsed : null;
    } catch {
        return null;
    }
}

export async function writeEvents(events) {
    if (!isConfigured()) throw new Error('Stockage non configuré');

    const r = await fetch(`${URL_BASE}/set/${KEY}`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${TOKEN}` },
        body: JSON.stringify(events),
    });
    if (!r.ok) throw new Error(`Upstash SET ${r.status}`);

    return true;
}
