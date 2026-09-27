# Reprendre ce projet sur une autre machine

> Écrit le 27 septembre 2026, quand le portable a été mis de côté au profit du poste de bureau.
> **À lire en entier avant de toucher au projet.** Ce fichier contient ce qu'une session perd en changeant de machine : ce qui n'est pas dans le code.

---

## Où regarder en premier

| | |
|---|---|
| Ta fiche projet | **Cockpit Clients** — https://claude.ai/artifact/RCnVtCAkQduq4Ct5TQ2AuK |
| À qui tu réponds | **Tour de contrôle Clients** — avec `SendMessage`, ce nom exact |
| En ligne | https://semons-la-vie.vercel.app |
| Ta mémoire de projet | `~/.claude/projects/D--Antigravity-Projects-Semons-la-vie/memory/` sur le portable, restaurée par `bascule.ps1` sous `G--…` |

La fiche du cockpit porte l'état à jour dans `now`, la suite dans `next`, et ce qu'on attend de Guillaume dans `you`. Les questions ouvertes et le suivi sont dans les collections `questions` et `traite`.

**Première chose à faire** : écrire ton propre lien de session dans le champ `session` de ta fiche. `mcp__ccd_session_mgmt__get_session` avec `session_id: "self"` renvoie le `link`. Sans ça, la tour ne peut pas te parler et Guillaume ne peut pas ouvrir ta conversation depuis le cockpit.

---

## Ce qu'est ce projet

Le site vitrine de Chloé Wisser, naturopathe et sophrologue près de Cognac. Les visiteuses y découvrent ses accompagnements (naturopathie, sophrologie, rituel aux huiles essentielles, ateliers de cuisine crue), ses tarifs et ses ateliers à venir, et prennent rendez-vous en ligne.

---

## Où il en était à la bascule

Le site est en ligne et à jour. Les retours de Chloé sont appliqués. Deux décisions attendent au cockpit, la seconde illustrée.

**Prochaine étape prévue** : Reprise depuis le bureau : un simple clone du dépôt suffit, tout y est — y compris les textes d'origine de Chloé (6 fichiers Word) et le logo au format Photoshop. Rien à récupérer sur le portable avant de le ranger. Ensuite : appliquer les deux décisions ci-dessous, et si Chloé envoie ses photos d'atelier, remplacer les deux images de banque.

---

## Les secrets — aucun n'est dans le dépôt, et c'est voulu

**Ce projet n'en a aucun.** Vérifié à la bascule : pas de `.env`, pas de clé, rien à recréer. Tu peux cloner et lancer.

---

## Les pièges déjà payés

Chacun a coûté du temps à quelqu'un. Les relire évite de les repayer.

**Tout est dans le dépôt**, vérifié fichier par fichier : les 6 textes source de Chloé, le logo au format Photoshop, les 35 Mo de photos et vidéos. 219 fichiers suivis. Seul `dist/` est ignoré, et il se régénère.

**Un fichier `SETUP-CLAUDE-CODE.md` traînait dans ce dossier par erreur** : c'est le guide de configuration de Guillaume, il nomme ses autres clients. Il n'a pas été commité, et pour cause. Ne pas l'y remettre.

---

## Ce qui ne voyage jamais d'une machine à l'autre

Trois choses, et aucune n'est du code.

**La conversation.** Elle est perdue. Ce fichier, ta mémoire de projet et ta fiche de cockpit sont là pour la remplacer.

**Les fichiers de secrets.** Exclus du dépôt par construction. D'où la liste ci-dessus.

**Ce qui n'est ni dans le dépôt ni en ligne.** C'est le vrai danger, et ce ne sont jamais les fichiers auxquels on pense. Avant de ranger une machine, la bonne question n'est pas « as-tu poussé ? » mais **« qu'est-ce qui, ici, n'existe nulle part ailleurs ? »**

---

*Si tu découvres un piège de plus, ajoute-le ici. Ce fichier n'a de valeur que s'il reste vrai.*
