// Connexion au backoffice : échange le mot de passe contre un jeton de session.

import { checkPassword, createToken } from './_auth.js';

// Anti-force brute simple : au-delà de MAX_TRIES échecs par IP, on bloque
// pendant WINDOW_MS. La mémoire d'une lambda étant volatile, c'est une gêne
// pour un robot, pas une garantie absolue : le vrai rempart reste un mot de
// passe long.
const attempts = new Map();
const MAX_TRIES = 8;
const WINDOW_MS = 10 * 60 * 1000;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    if (!process.env.ADMIN_PASSWORD) {
        return res.status(503).json({ error: "Le backoffice n'est pas encore configuré." });
    }

    const ip = req.headers['x-forwarded-for'] || 'inconnue';
    const now = Date.now();
    const record = attempts.get(ip);

    if (record && now - record.first < WINDOW_MS && record.count >= MAX_TRIES) {
        return res.status(429).json({ error: 'Trop de tentatives. Réessaie dans quelques minutes.' });
    }

    const { password } = req.body || {};

    if (!checkPassword(password)) {
        if (!record || now - record.first >= WINDOW_MS) {
            attempts.set(ip, { count: 1, first: now });
        } else {
            record.count += 1;
        }
        return res.status(401).json({ error: 'Mot de passe incorrect' });
    }

    attempts.delete(ip);
    return res.status(200).json({ token: createToken() });
}
