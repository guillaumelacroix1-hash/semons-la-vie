// Fonction serverless Vercel : envoi des messages du formulaire de contact
// via le SMTP Hostinger vers la boîte de Chloé.

import { createTransport, esc, MAIL_TO, MAIL_FROM } from './_mailer.js';

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
        await createTransport().sendMail({
            from: MAIL_FROM,
            to: MAIL_TO,
            replyTo: email,
            subject: `Contact site : message de ${name}`,
            html,
        });

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error('send-contact error:', err?.message);
        return res.status(502).json({ error: "L'envoi a échoué" });
    }
}
