// Fonction serverless Vercel : envoi des messages du formulaire de contact
// via l'API Resend vers la boîte de Chloé.
// La clé API vit dans la variable d'environnement RESEND_API_KEY (jamais dans le code).

// ⚠️ Prérequis mise en ligne : vérifier le domaine semons-la-vie.fr dans Resend
// (resend.com/domains). En sandbox, Resend n'autorise l'envoi que vers l'adresse
// du compte : surcharger CONTACT_TO en variable d'environnement pour tester.
const CONTACT_TO = process.env.CONTACT_TO || process.env.BOOKING_TO || 'contact@semons-la-vie.fr';
const CONTACT_FROM = process.env.CONTACT_FROM || 'Semons la Vie <contact-site@semons-la-vie.fr>';

const esc = (s = '') =>
    String(s).replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Champs requis manquants' });
    }

    const html = `
        <h2>Nouveau message depuis le site</h2>
        <p><strong>Nom :</strong> ${esc(name)}</p>
        <p><strong>Email :</strong> ${esc(email)}</p>
        <hr />
        <p>${esc(message).replace(/\n/g, '<br />')}</p>
    `;

    try {
        const r = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: CONTACT_FROM,
                to: [CONTACT_TO],
                reply_to: email,
                subject: `Contact site : message de ${name}`,
                html,
            }),
        });

        if (!r.ok) {
            const details = await r.text();
            console.error('Resend error:', details);
            return res.status(502).json({ error: "L'envoi a échoué" });
        }

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error('send-contact error:', err);
        return res.status(500).json({ error: "L'envoi a échoué" });
    }
}
