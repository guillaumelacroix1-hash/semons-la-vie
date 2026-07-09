// Transport SMTP partagé (Hostinger) pour les fonctions d'envoi d'email.
// Les identifiants vivent exclusivement dans les variables d'environnement
// (Vercel + .env.local gitignoré) : SMTP_USER / SMTP_PASS.

import nodemailer from 'nodemailer';

export const MAIL_TO = process.env.MAIL_TO || 'contact@semons-la-vie.fr';
export const MAIL_FROM = process.env.SMTP_USER
    ? `"Semons la Vie" <${process.env.SMTP_USER}>`
    : 'Semons la Vie <contact@semons-la-vie.fr>';

export const createTransport = () =>
    nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.hostinger.com',
        port: Number(process.env.SMTP_PORT || 465),
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

export const esc = (s = '') =>
    String(s).replace(/[<>&"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c]));
