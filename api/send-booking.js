// Fonction serverless Vercel : envoi des demandes de réservation d'événement
// via l'API Resend vers la boîte de Chloé.
// La clé API vit dans la variable d'environnement RESEND_API_KEY (jamais dans le code).

// ⚠️ Prérequis mise en ligne : vérifier le domaine semons-la-vie.fr dans Resend
// (resend.com/domains, ajout des enregistrements DNS SPF/DKIM).
// Tant que ce n'est pas fait, Resend (mode sandbox) n'autorise l'envoi que vers
// l'adresse du compte (guillaumelacroix1@gmail.com) : surcharger BOOKING_TO en
// variable d'environnement pour tester.
const BOOKING_TO = process.env.BOOKING_TO || 'contact@semons-la-vie.fr';
const BOOKING_FROM = process.env.BOOKING_FROM || 'Semons la Vie <reservations@semons-la-vie.fr>';

const esc = (s = '') =>
    String(s).replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Méthode non autorisée' });
    }

    const { eventTitle, eventDate, eventTime, eventLocation, name, email, phone, message } = req.body || {};

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
        const r = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: BOOKING_FROM,
                to: [BOOKING_TO],
                reply_to: email,
                subject: `Réservation "${eventTitle}" : ${name}`,
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
        console.error('send-booking error:', err);
        return res.status(500).json({ error: "L'envoi a échoué" });
    }
}
