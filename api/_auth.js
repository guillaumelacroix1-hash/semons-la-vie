// Authentification du backoffice : mot de passe unique (variable d'environnement
// ADMIN_PASSWORD) échangé contre un jeton signé HMAC à durée de vie limitée.
// Le mot de passe n'est jamais stocké ni renvoyé au navigateur, seul le jeton circule.

import { createHmac, timingSafeEqual } from 'crypto';

const SESSION_HOURS = 12;

const secret = () => {
    const pwd = process.env.ADMIN_PASSWORD;
    if (!pwd) throw new Error('ADMIN_PASSWORD non configuré');
    // La clé de signature est dérivée du mot de passe : changer le mot de passe
    // invalide automatiquement toutes les sessions en cours.
    return createHmac('sha256', 'semons-la-vie:session').update(pwd).digest();
};

const sign = (payload) => createHmac('sha256', secret()).update(payload).digest('hex');

// Comparaison à temps constant, pour ne pas fuiter d'information via la durée.
const safeEqual = (a, b) => {
    const bufA = Buffer.from(String(a));
    const bufB = Buffer.from(String(b));
    if (bufA.length !== bufB.length) return false;
    return timingSafeEqual(bufA, bufB);
};

export function checkPassword(candidate) {
    const expected = process.env.ADMIN_PASSWORD;
    if (!expected || !candidate) return false;
    return safeEqual(candidate, expected);
}

export function createToken() {
    const expiresAt = Date.now() + SESSION_HOURS * 3600 * 1000;
    return `${expiresAt}.${sign(String(expiresAt))}`;
}

export function verifyToken(token) {
    if (!token) return false;
    const [expiresAt, signature] = String(token).split('.');
    if (!expiresAt || !signature) return false;
    if (Number(expiresAt) < Date.now()) return false;
    try {
        return safeEqual(signature, sign(expiresAt));
    } catch {
        return false;
    }
}

// Garde à placer en tête des routes d'écriture. Renvoie true si la requête est
// authentifiée, sinon répond 401 et renvoie false.
export function requireAuth(req, res) {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : '';
    if (!verifyToken(token)) {
        res.status(401).json({ error: 'Session expirée ou non autorisée' });
        return false;
    }
    return true;
}
