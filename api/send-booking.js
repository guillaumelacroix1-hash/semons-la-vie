// Fonction serverless Vercel : envoi des demandes de réservation d'événement
// via le SMTP Hostinger vers la boîte de Chloé.

import { createTransport, esc, MAIL_TO, MAIL_FROM } from './_mailer.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { eventTitle, eventDate, eventTime, eventLocation, name, email, phone, message, website } = req.body || {};

    // Honeypot anti-bot : champ masqué en CSS, seuls les robots le remplissent.
    if (website) {
        return res.status(200).json({ ok: true });
    }

    if (!eventTitle || !name || !email) {
        return res.status(400).json({ error: 'Champs requis manquants' });
    }

    const html = `
        <h2>Nouvelle demande de réservation</h2>
        <p><strong>Événement :</strong> ${esc(eventTitle)}</p>
        <p><strong>Date :</strong> ${esc(eventDate)} · ${esc(eventTime)}</p>
        <p><strong>Lieu :</strong> ${esc(eventLocation)}</p>
        <hr />
        <p><strong>Nom :</strong> ${esc(name)}</p>
        <p><strong>Email :</strong> ${esc(email)}</p>
        <p><strong>Téléphone :</strong> ${esc(phone) || 'Non renseigné'}</p>
        <p><strong>Message :</strong><br />${esc(message) || 'Aucun message'}</p>
    `;

    try {
        await createTransport().sendMail({
            from: MAIL_FROM,
            to: MAIL_TO,
            replyTo: email,
            subject: `Réservation "${eventTitle}" : ${name}`,
            html,
        });

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error('send-booking error:', err?.message);
        return res.status(502).json({ error: "L'envoi a échoué" });
    }
}
