export const events = [
    {
        id: 'journee-explorer-son-equilibre',
        title: 'Une journée pour explorer son équilibre',
        category: 'Bien-être',
        categoryColor: 'purple',
        date: '2026-06-06',
        time: '9h00 – 18h00',
        duration: 'Journée',
        location: 'Angoulême',
        price: 120,
        spots: 8,
        spotsLeft: 8,
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
        shortDesc: 'Une journée co-animée avec Amandine (Ambellire) pour ralentir, prendre soin de ton corps, accueillir tes émotions et retrouver plus de clarté intérieure.',
        description: `Parfois, l'équilibre ne se trouve pas en faisant plus… mais en s'accordant un temps pour ralentir, ressentir et se reconnecter à soi.

Avec Amandine (Ambellire), créatrice d'expériences sensorielles et d'ateliers intuitifs, nous avons imaginé une journée comme un chemin : un espace pour prendre soin de ton corps, accueillir tes émotions et retrouver plus de clarté intérieure.

Au fil de cette journée, nous alternerons moments d'exploration, temps de partage et expériences sensorielles dans un cadre doux et ressourçant.

Une journée pour ralentir, déposer ce qui pèse et revenir à l'essentiel.`,
        program: [
            'Atelier autour du système nerveux, des émotions et des schémas qui nous influencent',
            'Atelier crusine, puis déjeuner gourmand',
            'Temps créatif et sensoriel dans le jardin',
            'Rituel AromaTouch des mains & expériences de massage bien-être',
            'Sophrologie et relaxation',
        ],
        includes: [
            'Atelier autour du système nerveux et des émotions',
            'Déjeuner vitalisant préparé ensemble sur place',
            'Activités créatives et sensorielles',
            'Rituel AromaTouch des mains ou massage bien-être',
            'Sophrologie et relaxation guidée',
            'Temps d\'échanges en petit groupe',
        ],
        forWhomIntro: 'Cette journée est faite pour toi si :',
        forWhomList: [
            'Tu ressens le besoin de ralentir',
            'Tu traverses une période de fatigue, de stress ou de surcharge mentale',
            'Tu as envie de mieux comprendre ce qui se joue en toi',
            'Tu souhaites simplement t\'offrir une parenthèse pour prendre soin de toi',
        ],
        forWhomOutro: 'Aucune expérience n\'est nécessaire.',
        takeaway: [
            'Une meilleure compréhension de certains mécanismes émotionnels',
            'Des outils simples à intégrer dans ton quotidien',
            'Plus de calme et de clarté intérieure',
            'Un moment profondément ressourçant vécu pour toi',
            'Une sensation d\'avoir pris soin de toi dans toutes tes dimensions',
        ],
        locationNote: 'Le lieu exact et toutes les informations pratiques te seront envoyés après ton inscription.',
    },
    {
        id: 'un-ete-aux-parfums-dorient',
        title: 'Un été aux parfums d\'Orient',
        category: 'Crusine',
        categoryColor: 'green',
        date: '2026-06-20',
        time: '10h00 – 12h00',
        duration: '2h',
        location: 'Bréville',
        price: 65,
        spots: 8,
        spotsLeft: 8,
        image: `${import.meta.env.BASE_URL}events/crusine-orient.jpg`,
        shortDesc: 'Découvre une cuisine vivante inspirée des parfums d\'Orient : gourmande, fraîche et pleine de vitalité.',
        description: `L'été invite aux couleurs, aux épices douces et aux saveurs qui font voyager… Lors de cet atelier, je t'invite à découvrir une cuisine vivante inspirée des parfums d'Orient : gourmande, fraîche et pleine de vitalité.

Ensemble, nous revisiterons plusieurs recettes emblématiques dans une version 100% crue, sans gluten et riche en nutriments, pour explorer une autre façon de cuisiner : plus légère, créative et respectueuse des besoins du corps.

L'objectif n'est pas seulement d'apprendre des recettes, mais aussi de découvrir qu'il est possible d'allier plaisir, gourmandise et vitalité.`,
        program: [
            'Aubergines à la marocaine',
            'Taboulé libanais et ses falafels',
            'Makrouts revisités',
        ],
        includes: [
            'Toutes les recettes en format papier',
            'Les ingrédients bio fournis',
            'Préparation sur place',
            'Conseils et astuces pour refaire les recettes chez toi',
            'Un temps d\'échange convivial en petit groupe',
        ],
        forWhom: 'Ouvert à toutes les personnes curieuses de découvrir une autre manière de cuisiner. Aucune expérience particulière n\'est nécessaire. Adapté aux personnes souhaitant découvrir une alimentation plus vivante, végétale et pleine de saveurs.',
        takeaway: [
            'Les recettes détaillées pour les refaire chez toi',
            'De nouvelles idées d\'associations et d\'épices',
            'Des astuces simples pour intégrer davantage de vitalité dans ton quotidien',
            'Une autre vision de la cuisine : gourmande, créative et accessible',
            'Un joli moment de partage et d\'inspiration',
        ],
        bookingNote: 'Ton inscription sera confirmée après réception du règlement. Les informations pratiques ainsi que l\'adresse exacte te seront envoyées après validation de ton inscription.',
    },
    {
        id: 'weekend-jeune-doux-royan',
        title: 'Un week-end pour te reconnecter à ton corps : jeûne doux & régénération',
        category: 'Bien-être',
        categoryColor: 'purple',
        date: '2026-07-03',
        endDate: '2026-07-05',
        dateLabel: 'Du vendredi 3 au dimanche 5 juillet 2026',
        time: 'Arrivée vendredi 18h – Départ dimanche 18h',
        duration: '3 jours / 2 nuits',
        location: 'Royan, à deux pas de l\'océan',
        price: 250,
        spots: 6,
        spotsLeft: 6,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
        shortDesc: 'Trois jours de jeûne doux et de repos physiologique à deux pas de l\'océan, pour ralentir, récupérer et retrouver ta vitalité.',
        description: `Parfois, notre corps demande simplement une pause. Une pause du rythme quotidien, des sollicitations permanentes, des habitudes qui s'accumulent… pour retrouver plus de légèreté, d'écoute et de vitalité.

Durant ce week-end, je t'invite à vivre une expérience douce autour du jeûne et du repos physiologique, dans un cadre ressourçant à quelques pas de l'océan.

L'objectif n'est pas la performance ni la privation, mais de créer les conditions favorables pour laisser le corps ralentir, récupérer et retrouver son intelligence naturelle.

Un week-end pour ralentir, souffler et revenir à l'essentiel.`,
        program: [
            'Accompagnement autour du jeûne doux',
            'Mouvements et réveils corporels',
            'Sophrologie, relaxation et respirations',
            'Balades au bord de l\'océan',
            'Temps calmes et moments de récupération',
            'Hammam/sauna aux thermes de Saujon',
            'Temps d\'échanges et de partage',
        ],
        includes: [
            'Hébergement durant les 3 jours / 2 nuits',
            'Accompagnement pendant toute la durée du séjour',
            'Sophrologie et temps de relaxation',
            'Activités et temps de partage',
            'Supports pratiques et conseils',
        ],
        extras: [
            'Rituel AromaTouch®',
            'Massage bien-être assis',
        ],
        forWhomIntro: 'Ce week-end est fait pour toi si :',
        forWhomList: [
            'Tu ressens le besoin de faire une pause',
            'Tu te sens fatiguée ou surchargée',
            'Tu souhaites vivre une expérience de reconnexion au corps',
            'Tu veux découvrir le jeûne dans un cadre rassurant et accompagné',
        ],
        forWhomOutro: 'Ce séjour est accessible aux débutantes. Certaines contre-indications au jeûne existent : un échange préalable permettra de vérifier ensemble si ce séjour est adapté à ta situation.',
        takeaway: [
            'Une sensation de légèreté physique et mentale',
            'Des outils simples pour ralentir au quotidien',
            'Une meilleure écoute de ton corps',
            'Une expérience ressourçante vécue pour toi',
            'Plus de clarté, de calme et de vitalité',
        ],
        locationNote: 'Le lieu exact ainsi que toutes les informations pratiques seront envoyés après validation de l\'inscription.',
    },
    {
        id: 'weekend-jeune-doux-royan-octobre',
        title: 'Un week-end pour te reconnecter à ton corps : jeûne doux & régénération',
        category: 'Bien-être',
        categoryColor: 'purple',
        date: '2026-10-23',
        endDate: '2026-10-25',
        dateLabel: 'Du vendredi 23 au dimanche 25 octobre 2026',
        time: 'Arrivée vendredi 18h – Départ dimanche 18h',
        duration: '3 jours / 2 nuits',
        location: 'Royan, à deux pas de l\'océan',
        price: 250,
        spots: 6,
        spotsLeft: 6,
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
        shortDesc: 'Trois jours de jeûne doux et de repos physiologique à deux pas de l\'océan, pour ralentir, récupérer et retrouver ta vitalité.',
        description: `Parfois, notre corps demande simplement une pause. Une pause du rythme quotidien, des sollicitations permanentes, des habitudes qui s'accumulent… pour retrouver plus de légèreté, d'écoute et de vitalité.

Durant ce week-end, je t'invite à vivre une expérience douce autour du jeûne et du repos physiologique, dans un cadre ressourçant à quelques pas de l'océan.

L'objectif n'est pas la performance ni la privation, mais de créer les conditions favorables pour laisser le corps ralentir, récupérer et retrouver son intelligence naturelle.

Un week-end pour ralentir, souffler et revenir à l'essentiel.`,
        program: [
            'Accompagnement autour du jeûne doux',
            'Mouvements et réveils corporels',
            'Sophrologie, relaxation et respirations',
            'Balades au bord de l\'océan',
            'Temps calmes et moments de récupération',
            'Hammam/sauna aux thermes de Saujon',
            'Temps d\'échanges et de partage',
        ],
        includes: [
            'Hébergement durant les 3 jours / 2 nuits',
            'Accompagnement pendant toute la durée du séjour',
            'Sophrologie et temps de relaxation',
            'Activités et temps de partage',
            'Supports pratiques et conseils',
        ],
        extras: [
            'Rituel AromaTouch®',
            'Massage bien-être assis',
        ],
        forWhomIntro: 'Ce week-end est fait pour toi si :',
        forWhomList: [
            'Tu ressens le besoin de faire une pause',
            'Tu te sens fatiguée ou surchargée',
            'Tu souhaites vivre une expérience de reconnexion au corps',
            'Tu veux découvrir le jeûne dans un cadre rassurant et accompagné',
        ],
        forWhomOutro: 'Ce séjour est accessible aux débutantes. Certaines contre-indications au jeûne existent : un échange préalable permettra de vérifier ensemble si ce séjour est adapté à ta situation.',
        takeaway: [
            'Une sensation de légèreté physique et mentale',
            'Des outils simples pour ralentir au quotidien',
            'Une meilleure écoute de ton corps',
            'Une expérience ressourçante vécue pour toi',
            'Plus de clarté, de calme et de vitalité',
        ],
        locationNote: 'Le lieu exact ainsi que toutes les informations pratiques seront envoyés après validation de l\'inscription.',
    },
];

// Les listings n'affichent que les événements à venir : un événement dont la date
// (ou la date de fin, pour un séjour) est passée disparaît automatiquement, sans
// intervention. Les pages de détail restent accessibles par URL directe.
export const filterUpcoming = (list) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return (list || [])
        .filter((e) => new Date(`${e.endDate || e.date}T23:59:59`) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date));
};

export const upcomingEvents = () => filterUpcoming(events);

export const formatDate = (dateStr) => {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
};
