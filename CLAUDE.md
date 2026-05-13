# CLAUDE.md — Semons la Vie

Site React/Vite pour **Chloé Wisser**, naturopathe & sophrologue.
Déployé en prod sur https://semons-la-vie.vercel.app — repo `guillaumelacroix1-hash/semons-la-vie`.

## ⚠️ À ignorer

- **Le dossier `audit/`** (rapport WordPress↔React, fiches par page) est **obsolète**. La refonte est terminée, le React actuel est la version validée. Ne pas comparer au WordPress, ne pas remonter ces fichiers comme source de vérité.
- **Pas de tracking d'heures Notion** sur ce projet (contrairement à d'autres clients Guizweb). Ignorer session-tracker / `.session-start` ici.

## Stack

React 19 · Vite 5 · React Router 7 · Lucide-react · Swiper · anime.js. Pas de TypeScript. Pas de backend.
Déploiement Vercel auto sur `main` avec `npm install --legacy-peer-deps` (cf. `vercel.json`).

## Identité

- **Cliente** : Chloé Wisser — naturopathe (Dargère Univers, 2024) + sophrologue (Institut Catherine Aliotta, RNCP)
- **Lieu** : Espace Honnebee, 35 rue des Vauzelles, 16100 Châteaubernard
- **Contact** : 06.61.49.35.86 · contact@semons-la-vie.fr
- **Booking** : https://www.sumupbookings.com/semons-la-vie (SumUp Bookings)
- **Socials** : Facebook (`19gMCjSjFE`), Instagram (`semonslavie`)

## Routes (`src/App.jsx`)

```
/                              Home
/qui-suis-je                   About
/naturopathie                  Naturopathy   (service "parent")
  /phytotherapie               Phytotherapy
  /reequilibrage-alimentaire   NutritionalBalance
/sophrologie                   Sophrology
/massage                       Massage
/ateliers-culinaires           Culinary
/contact                       Contact
/evenements                    Events
/evenements/:id                EventDetail
```

## Template des pages service

Toutes les pages service partagent la même structure :
1. `ServiceHeroZoom` — image plein écran, zoom au scroll
2. Meta-row : durée · prix · format (Visio ou présentiel / Présentiel)
3. Layout 2 colonnes : `ServiceSidebar` (booking + nav 6 services, sticky) + contenu
4. Sections `service-content-section`, packs `service-pack-card`
5. FAQ accordéon (state local par page)
6. `PageBottom`

CSS partagé : `src/pages/ServicePage.css`. La couleur du service passe par `--service-color` sur la racine de la page.

## Couleurs services

| Service | Color | Texte foncé |
|---|---|---|
| Naturopathie | `#FFCF00` | `#7A6200` |
| Sophrologie | `#E8C8D8` / `#ffcfe7` | `#8B3A60` |
| Phyto / Rééqui / Crusine | `#7AA476` / `#A8C5A0` / `#bdd7ba` | `#2D5A28` |
| Rituel AromaTouch | `#5B5EAB` / `#6e70cc` | `#3D3F7A` / `#1E1B4B` |

## Tarifs en production (validés — NE PAS retirer sans accord)

- **Naturopathie** : Parcours base 140€ · Harmonie 180€ · Renaissance 230€ · Éclat 290€ · Suivi 60€
- **Sophrologie** : Découverte 80€ (1h30) · Suivi 60€ · Pack Éveil dès 500€
- **Phytothérapie** : 60€ / 1h
- **Rééquilibrage alimentaire** : 60€ / 1h
- **Rituel AromaTouch®** : Équilibre 65€ · Saisons 220€ (4 sessions, barré 260€). **Naming validé : "Rituel" (jamais "Massage") + ® à conserver.** Route reste `/massage` pour ne pas casser les liens.
- **Ateliers Crusine** : RDV 65€ · Parcours Gourmand 180€ (barré 195€) · Chez Toi sur devis

## Composants clés

- **`Navbar.jsx`** : scroll-aware. Dropdown Services → sub-dropdown Naturopathie (Phyto / Rééqui). CTA "Prendre RDV" → SumUp.
- **`Hero.jsx`** (Home) : vidéo de fond (`/hero2.mp4` + poster), scale parallax au scroll
- **`PageBottom.jsx`** : présent partout **sauf Contact**. Ateliers (3 cards hardcoded), carrousel témoignages (10 vrais avis Google), citation Chloé sur vidéo, CTA final SumUp + mailto
- **`ServiceSidebar.jsx`** : widget booking + 6 services (active highlight). Couleur tirée du service actif
- **`ServiceHeroZoom.jsx`** : hero zoom effect
- **`Footer.jsx`** : adresse · horaires · contact · socials

## Données

- **Témoignages** : 10 avis hardcodés dans `PageBottom.jsx` (Amélie L., Titi C., Élodie N., Clémence R., Christine G., Maryline A., Béatrice H., Céline P., Aurélie R., Laetitia)
- **Événements** : 5 entrées dans `src/data/events.js` (dates 2026, prix, places, image Unsplash)
- **FAQ** : hardcodée par page service (4-5 questions)

## Pièges connus

- **PageBottom affiche 3 cards événements en dur** (Petit-déj vitalité, Week-end jeûne, Journée santé) alors que `events.js` contient les 5 vrais événements. Source d'incohérence — si tu modifies un event, sync les deux.
- Les liens "S'inscrire" de ces 3 cards pointent vers `/ateliers-culinaires` ou `/contact`, pas vers `EventDetail`.
- Le formulaire **Contact utilise un `mailto:` handler** (pas de backend). Nécessite un client mail configuré côté visiteur.
- Images d'événements et placeholders ateliers PageBottom = **URLs Unsplash externes**. Risque de 404 si Unsplash change.
- `public/services/texte/*.docx` = textes sources WordPress, plus utilisés. Ignorer.

## Conventions éditoriales

- **Tutoiement** partout (Chloé tutoie ses visiteuses)
- Audience principale : femmes (cf. hero "J'accompagne les femmes…")
- Tone : doux, bienveillant, "respect du rythme", "à ton rythme"
- **Citation signature** à conserver : *"Je fais ma part, j'ouvre mon cœur et je laisse rayonner ma lumière"* — Chloé Wisser
- Pas de packs/prix inventés. Tout passe par Chloé.

## Git

- Branche : `main` (Vercel auto-deploy)
- Email commits : `guillaumelacroix1@gmail.com` (cf. CLAUDE.md global)
- **Push uniquement sur demande explicite** ("push", "déploie", "mets en ligne")
- Pas de `git add -A` — toujours nommer les fichiers explicitement
