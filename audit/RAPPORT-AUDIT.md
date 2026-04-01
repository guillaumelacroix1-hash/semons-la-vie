# RAPPORT D'AUDIT — WordPress vs React
Date : 2026-04-01

## Résumé
Le site React actuel couvre environ **60% du site WordPress original**. Plusieurs pages complètes manquent, du contenu a été inventé (prix, packs), et la structure de navigation diffère.

---

## 1. PAGES MANQUANTES (à créer)

| Page | URL WordPress | Priorité |
|------|--------------|----------|
| **Qui suis-je ?** | /qui-suis-je/ | 🔴 CRITIQUE — page très riche avec histoire, formations, parcours complet |
| **Phytothérapie** | /phytotherapie/ | 🔴 CRITIQUE — sous-page Naturopathie avec tarif (60€/1h), FAQ, séance type |
| **Rééquilibrage alimentaire** | /reequilibrage-alimentaire/ | 🔴 CRITIQUE — sous-page Naturopathie |
| **Me contacter** | /contacts/ | 🟡 IMPORTANT — formulaire de contact |
| **Ateliers** (événements) | /ateliers/ | 🟡 IMPORTANT — calendrier des événements/ateliers |

---

## 2. NAVIGATION — Différences

### WordPress (correct)
```
Accueil | Mes Services ▼ | Qui suis-je ? | Ateliers | Me contacter
                         ├─ Naturopathie ▼
                         │  ├─ Phytothérapie
                         │  └─ Rééquilibrage alimentaire
                         ├─ Sophrologie
                         ├─ Massage AromaTouch®
                         └─ Ateliers culinaires
```

### React actuel (incorrect)
```
Accueil | Services (pas de sous-menu) | À propos | Contact
→ 4 pages services : Naturopathie, Sophrologie, Massage, Ateliers culinaires
```

### À corriger :
- Renommer "Services" → "Mes Services" avec dropdown
- Ajouter sous-menu Naturopathie → Phytothérapie / Rééquilibrage alimentaire
- Renommer "À propos" → "Qui suis-je ?"
- Ajouter page "Ateliers" (événements)
- Renommer "Contact" → "Me contacter"
- CTA navbar : "Prendre RDV"

---

## 3. CONTENU INVENTÉ DANS LE REACT (à supprimer/corriger)

### Prix inventés
Le site WordPress n'affiche **AUCUN tarif** sur les pages services principales, sauf :
- **Phytothérapie : 60€/1h** (seul prix affiché sur tout le site)

Le React affiche des prix **totalement inventés** :
- ❌ Naturopathie : 140€-290€, Packs "Harmonie/Renaissance/Éclat"
- ❌ Sophrologie : 80€ découverte, 60€ suivi, Pack "Éveil" 500€
- ❌ Ateliers culinaires : 65€/session, Pack "Parcours Gourmand" 180€
- ❌ Massage : 65€, Pack "4 Saisons" 220€

→ **Tous ces prix et packs doivent être retirés** ou validés avec Chloé

### Section "À propos" sur la Home
Le React a un résumé court. Le WordPress a un texte d'introduction différent :
- "Formation en psychologie, passion pour équilibre corps-esprit, partage et aide à l'autre"
- Lien vers "En savoir plus" → page Qui suis-je

### Section Services sur la Home
- **WordPress** : Le corps / L'esprit / Les émotions (3 piliers)
- **React** : 4 cartes services directes
→ La structure en 3 piliers est plus fidèle à l'approche holistique

---

## 4. CONTENU CORRECT DANS LE REACT (à garder)

### Pages services — descriptions principales
Les descriptions récupérées correspondent :
- ✅ Naturopathie : description conforme
- ✅ Massage AromaTouch® : description conforme
- ✅ Ateliers culinaires : description conforme (terme "crusine" ok)
- ⚠️ Sophrologie : à vérifier (fetch incomplet)

### Éléments communs
- ✅ Citation : "Je fais ma part, j'ouvre mon cœur et je laisse rayonner ma lumière"
- ✅ Format "Visio ou présentiel" sur toutes les pages
- ✅ Logo Semons la Vie

---

## 5. STRUCTURE DES PAGES SERVICES (template WordPress)

Chaque page service WordPress suit ce template :
1. **Hero** : Titre + sous-titre + description
2. **Détails** : Format (Visio/présentiel) + CTA "Prendre RDV"
3. **Mes Accompagnements** : Liste des 6 services avec liens croisés
4. **"Tu hésites ?"** : Texte d'aide + CTA "Me contacter"
5. **Réserver une séance** : Formulaire Fluent Booking intégré
6. **Prochains Ateliers** : Événements à venir
7. **Témoignages** : (placeholder anglais)
8. **Mes pratiques** : Texte commun
9. **Citation** : Chloé Wisser
10. **Footer**

La page **Phytothérapie** est plus riche avec :
- Section détaillée "La puissance douce du végétal"
- Séance type & accompagnement
- FAQ (5 questions)
- Tarif affiché (60€/1h)

---

## 6. PAGE "QUI SUIS-JE ?" — Contenu manquant complet

C'est la page la plus riche du site. Elle contient :

### Mon histoire
Texte complet sur la passion de Chloé, licence de psychologie, désir d'accompagner

### Parcours de santé
Histoire personnelle : tumeur à 1 an et demi, chimiothérapie, occlusion intestinale à 14 ans

### Influences familiales
Alimentation sans viande rouge, plantes et méthodes douces en famille

### Philosophie
Résilience, bienveillance, devenir acteur de sa santé

### Formations détaillées
- **Naturopathie** : Dargère Univers, achevée 2024
- **Crusine** : Formation avec Les cRAWquantes
- **Massage AromaTouch®** : Technique dōTerra
- **Sophrologie** : Institut Catherine Aliotta, Certificat Professionnel RNCP, membre Chambre Syndicale
- **Formation continue** : en permanence

---

## 7. IMAGES — Inventaire

### Images WordPress à récupérer localement
| Image | URL relative | Utilisée dans |
|-------|-------------|---------------|
| Logo principal | /wp-content/uploads/2025/11/logo-semons-la-vie.svg | Toutes les pages |
| Logo footer | /wp-content/uploads/2025/10/logo-footer.svg | Footer |
| Portrait Chloé | /wp-content/uploads/2025/11/VirginieDumoulinChaphotographie-2025-Violettesaintes-561_2-1-scaled.jpg | Qui suis-je, Home |
| Photo profil ronde | /wp-content/uploads/2025/11/VirginieDumoulinChaphotographie-2025-Violettesaintes-561_2-scaled-e1763649617452.jpg | Phytothérapie |
| Enfance | /wp-content/uploads/2025/11/girl-1208307_1920.jpg | Qui suis-je |
| Cuisine vivante | /wp-content/uploads/2022/08/semons-la-vie-cuisine-vivante-2.jpg | Ateliers, Qui suis-je |
| Cuisine vivante 2 | /wp-content/uploads/2022/08/semons-la-vie-cuisine-vivante.jpg | Rééquilibrage |
| Naturopathie fond | /wp-content/uploads/2022/03/AdobeStock_285278270-scaled.jpeg | Naturopathie |
| Plumes violettes | /wp-content/uploads/2025/11/semons-la-vie.jpeg | Citations |
| Ombre plantes | /wp-content/uploads/2025/11/white-wall-with-shadows-from-tropical-plants... | Déco |
| Icon SVG | /wp-content/uploads/2025/10/icon-semons-la-vie.svg | Hero |
| About 4 | /wp-content/uploads/2025/04/61-about-4.webp | Qui suis-je |
| About 5 | /wp-content/uploads/2025/04/61-about-5.webp | Qui suis-je |
| Open post 4 | /wp-content/uploads/2025/04/61-open-post-4.webp | Phytothérapie |
| Open service | /wp-content/uploads/2025/04/61-open-service-placeholder.webp | Mes pratiques |
| Feuilles vertes | /wp-content/uploads/2025/11/blurred-green-palm-leaves... | Massage |

---

## 8. CONTENU PLACEHOLDER WORDPRESS (à ignorer)

Ces éléments sont des placeholders du thème WordPress, PAS du vrai contenu :
- ❌ Adresse Portland, OR
- ❌ Téléphone +1 800-123-1234
- ❌ Email spa@example.com
- ❌ Témoignages en anglais (Alina M., James T.)
- ❌ Événements en anglais (Full Moon, Sunday Slowdown)
- ❌ "Trusted by 50,000+ patients"
- ❌ "More than 250 five-star reviews on Google"
- ❌ "This is a sample website - cmsmasters"

---

## 9. PLAN D'ACTION PRIORISÉ

### Phase 1 — Structure & Navigation
1. Refaire la navbar avec le bon menu et sous-menus
2. Créer la page "Qui suis-je ?" avec tout le contenu
3. Créer les pages Phytothérapie et Rééquilibrage alimentaire

### Phase 2 — Correction du contenu existant
4. Supprimer tous les prix/packs inventés des pages services
5. Aligner les descriptions et la structure des pages services sur le template WordPress
6. Ajouter la section "Mes Accompagnements" (liens croisés) sur chaque page service
7. Ajouter la section "Tu hésites ?" sur chaque page service

### Phase 3 — Page d'accueil
8. Restructurer la section services en 3 piliers (Corps/Esprit/Émotions)
9. Corriger la section À propos pour matcher le WordPress
10. Remplacer les témoignages placeholder par de vrais témoignages (ou les retirer)

### Phase 4 — Assets & Finition
11. Télécharger toutes les images en local
12. Créer la page Contact avec formulaire
13. Ajouter le SEO (meta tags, structured data)
14. Connecter le système de réservation (Fluent Booking ou alternative)
