import { useEffect, useState } from 'react';
import { events as staticEvents, filterUpcoming } from './events';

// Source unique des événements pour tout le site.
//
// Le rendu démarre immédiatement avec la liste statique embarquée dans le bundle
// (aucun écran vide, aucun décalage), puis bascule sur les données du backoffice
// dès que l'API répond. Si le stockage n'est pas configuré ou que l'appel échoue,
// la liste statique reste affichée : le site ne dépend jamais de l'API pour
// fonctionner.

let cache = null;
let inflight = null;

const load = () => {
    if (!inflight) {
        inflight = fetch('/api/events')
            .then((r) => (r.ok ? r.json() : null))
            .then((data) => {
                if (data?.configured && Array.isArray(data.events)) {
                    cache = data.events;
                }
                return cache;
            })
            .catch(() => null);
    }
    return inflight;
};

export function useEvents() {
    const [list, setList] = useState(cache || staticEvents);

    useEffect(() => {
        let cancelled = false;
        if (cache) {
            setList(cache);
            return undefined;
        }
        load().then((fetched) => {
            if (!cancelled && fetched) setList(fetched);
        });
        return () => { cancelled = true; };
    }, []);

    return list;
}

export function useUpcomingEvents() {
    return filterUpcoming(useEvents());
}
