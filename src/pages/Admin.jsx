import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Copy, Trash2, Save, LogOut, ArrowLeft, AlertCircle, Check } from 'lucide-react';
import { events as staticEvents } from '../data/events';
import './Admin.css';

const TOKEN_KEY = 'slv-admin-token';

// Un événement vierge, prérempli avec les valeurs les plus courantes.
const blankEvent = () => ({
    id: '',
    title: '',
    category: 'Crusine',
    categoryColor: 'green',
    date: '',
    endDate: '',
    dateLabel: '',
    time: '',
    duration: '',
    location: '',
    price: 65,
    spots: 8,
    spotsLeft: 8,
    image: '',
    shortDesc: '',
    description: '',
    program: [],
    includes: [],
    extras: [],
    forWhomIntro: '',
    forWhomList: [],
    forWhomOutro: '',
    forWhom: '',
    takeaway: [],
    locationNote: '',
    bookingNote: '',
});

const CATEGORIES = [
    { name: 'Crusine', color: 'green' },
    { name: 'Bien-être', color: 'purple' },
    { name: 'Sophrologie', color: 'purple' },
    { name: 'Santé', color: 'sage' },
];

// Transforme un titre en identifiant d'URL (slug).
const slugify = (s) =>
    (s || '')
        .toLowerCase()
        .normalize('NFD').replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 60);

// Les listes sont éditées comme du texte, une ligne par élément.
const linesToArray = (txt) => (txt || '').split('\n').map((l) => l.trim()).filter(Boolean);
const arrayToLines = (arr) => (arr || []).join('\n');

const Admin = () => {
    const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_KEY) || '');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loggingIn, setLoggingIn] = useState(false);

    const [list, setList] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [storageOff, setStorageOff] = useState(false);
    const [saving, setSaving] = useState(false);
    const [status, setStatus] = useState(null); // {type:'ok'|'error', msg}

    // Empêche l'indexation du backoffice par les moteurs.
    useEffect(() => {
        const m = document.createElement('meta');
        m.name = 'robots';
        m.content = 'noindex, nofollow';
        document.head.appendChild(m);
        return () => { document.head.removeChild(m); };
    }, []);

    // Charge la liste courante (backoffice si configuré, sinon liste du site).
    useEffect(() => {
        if (!token) return;
        fetch('/api/events')
            .then((r) => r.json())
            .then((data) => {
                if (data.configured && Array.isArray(data.events)) {
                    setList(data.events);
                } else {
                    setStorageOff(!data.configured);
                    setList(staticEvents);
                }
            })
            .catch(() => setList(staticEvents))
            .finally(() => setLoaded(true));
    }, [token]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoggingIn(true);
        setLoginError('');
        try {
            const r = await fetch('/api/admin-login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });
            const data = await r.json();
            if (!r.ok) throw new Error(data.error || 'Connexion impossible');
            sessionStorage.setItem(TOKEN_KEY, data.token);
            setToken(data.token);
            setPassword('');
        } catch (err) {
            setLoginError(err.message);
        } finally {
            setLoggingIn(false);
        }
    };

    const logout = () => {
        sessionStorage.removeItem(TOKEN_KEY);
        setToken('');
        setList([]);
        setSelectedId(null);
        setLoaded(false);
    };

    const selected = list.find((e) => e.id === selectedId) || null;

    const updateSelected = (patch) => {
        setList((prev) => prev.map((e) => (e.id === selectedId ? { ...e, ...patch } : e)));
        setStatus(null);
    };

    const addEvent = () => {
        const ev = { ...blankEvent(), id: `nouvel-evenement-${Date.now()}`, title: 'Nouvel événement' };
        setList((prev) => [...prev, ev]);
        setSelectedId(ev.id);
        setStatus(null);
    };

    const duplicateEvent = (ev) => {
        const copy = {
            ...structuredClone(ev),
            id: `${ev.id}-copie-${Date.now().toString().slice(-4)}`,
            title: `${ev.title} (copie)`,
        };
        setList((prev) => [...prev, copy]);
        setSelectedId(copy.id);
        setStatus(null);
    };

    const deleteEvent = (ev) => {
        if (!window.confirm(`Supprimer définitivement « ${ev.title} » ?`)) return;
        setList((prev) => prev.filter((e) => e.id !== ev.id));
        if (selectedId === ev.id) setSelectedId(null);
        setStatus(null);
    };

    const save = async () => {
        setSaving(true);
        setStatus(null);
        try {
            const r = await fetch('/api/events', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ events: list }),
            });
            const data = await r.json();
            if (r.status === 401) {
                logout();
                throw new Error('Session expirée, reconnecte-toi.');
            }
            if (!r.ok) throw new Error(data.error || "L'enregistrement a échoué");
            setStatus({ type: 'ok', msg: `Enregistré — ${data.count} événement(s) en ligne.` });
        } catch (err) {
            setStatus({ type: 'error', msg: err.message });
        } finally {
            setSaving(false);
        }
    };

    /* ---------- Écran de connexion ---------- */
    if (!token) {
        return (
            <div className="admin-login-page">
                <form className="admin-login-card" onSubmit={handleLogin}>
                    <h1>Espace de gestion</h1>
                    <p>Connecte-toi pour gérer les événements du site.</p>
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoFocus
                        required
                    />
                    <button type="submit" className="btn-primary" disabled={loggingIn}>
                        {loggingIn ? 'Connexion…' : 'Se connecter'}
                    </button>
                    {loginError && <p className="admin-login-error">{loginError}</p>}
                    <Link to="/" className="admin-back-link"><ArrowLeft size={14} /> Retour au site</Link>
                </form>
            </div>
        );
    }

    /* ---------- Backoffice ---------- */
    return (
        <div className="admin-page">
            <header className="admin-header">
                <div>
                    <h1>Mes événements</h1>
                    <p>Ajoute, modifie ou supprime les événements affichés sur le site.</p>
                </div>
                <div className="admin-header-actions">
                    <button className="admin-btn-ghost" onClick={logout}><LogOut size={15} /> Déconnexion</button>
                    <button className="btn-primary" onClick={save} disabled={saving}>
                        <Save size={15} /> {saving ? 'Enregistrement…' : 'Enregistrer'}
                    </button>
                </div>
            </header>

            {storageOff && (
                <div className="admin-banner admin-banner-warn">
                    <AlertCircle size={18} />
                    <span>
                        Le stockage n'est pas encore activé : tu peux préparer tes événements,
                        mais l'enregistrement échouera tant que la configuration n'est pas terminée.
                    </span>
                </div>
            )}

            {status && (
                <div className={`admin-banner ${status.type === 'ok' ? 'admin-banner-ok' : 'admin-banner-error'}`}>
                    {status.type === 'ok' ? <Check size={18} /> : <AlertCircle size={18} />}
                    <span>{status.msg}</span>
                </div>
            )}

            <div className="admin-layout">
                {/* Liste des événements */}
                <aside className="admin-list">
                    <button className="admin-add-btn" onClick={addEvent}>
                        <Plus size={16} /> Nouvel événement
                    </button>

                    {!loaded && <p className="admin-empty">Chargement…</p>}
                    {loaded && list.length === 0 && <p className="admin-empty">Aucun événement pour le moment.</p>}

                    {list.map((ev) => {
                        const past = new Date(`${ev.endDate || ev.date}T23:59:59`) < new Date();
                        return (
                            <div
                                key={ev.id}
                                className={`admin-list-item ${selectedId === ev.id ? 'active' : ''}`}
                                onClick={() => setSelectedId(ev.id)}
                            >
                                <div className="admin-list-item-main">
                                    <strong>{ev.title || '(sans titre)'}</strong>
                                    <span>
                                        {ev.dateLabel || ev.date || 'date à définir'}
                                        {past && <em className="admin-past-tag">terminé</em>}
                                    </span>
                                </div>
                                <div className="admin-list-item-actions">
                                    <button title="Dupliquer" onClick={(e) => { e.stopPropagation(); duplicateEvent(ev); }}>
                                        <Copy size={14} />
                                    </button>
                                    <button title="Supprimer" onClick={(e) => { e.stopPropagation(); deleteEvent(ev); }}>
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </aside>

                {/* Formulaire d'édition */}
                <section className="admin-editor">
                    {!selected && <p className="admin-empty">Choisis un événement à gauche, ou crée-en un nouveau.</p>}

                    {selected && (
                        <>
                            <div className="admin-field">
                                <label>Titre</label>
                                <input
                                    value={selected.title}
                                    onChange={(e) => {
                                        const title = e.target.value;
                                        // L'identifiant suit le titre tant que l'événement n'est pas publié.
                                        const autoId = selected.id.startsWith('nouvel-evenement-') || selected.id.includes('-copie-');
                                        updateSelected(autoId ? { title, id: slugify(title) || selected.id } : { title });
                                    }}
                                />
                            </div>

                            <div className="admin-field">
                                <label>Adresse de la page <span>(identifiant unique, sans accent ni espace)</span></label>
                                <input value={selected.id} onChange={(e) => updateSelected({ id: slugify(e.target.value) })} />
                                <small>semons-la-vie.fr/evenements/{selected.id || '…'}</small>
                            </div>

                            <div className="admin-row">
                                <div className="admin-field">
                                    <label>Catégorie</label>
                                    <select
                                        value={selected.category}
                                        onChange={(e) => {
                                            const cat = CATEGORIES.find((c) => c.name === e.target.value);
                                            updateSelected({ category: cat.name, categoryColor: cat.color });
                                        }}
                                    >
                                        {CATEGORIES.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
                                    </select>
                                </div>
                                <div className="admin-field">
                                    <label>Prix (€)</label>
                                    <input type="number" value={selected.price} onChange={(e) => updateSelected({ price: Number(e.target.value) })} />
                                </div>
                            </div>

                            <div className="admin-row">
                                <div className="admin-field">
                                    <label>Date de début</label>
                                    <input type="date" value={selected.date} onChange={(e) => updateSelected({ date: e.target.value })} />
                                </div>
                                <div className="admin-field">
                                    <label>Date de fin <span>(séjours uniquement)</span></label>
                                    <input type="date" value={selected.endDate || ''} onChange={(e) => updateSelected({ endDate: e.target.value })} />
                                </div>
                            </div>

                            <div className="admin-field">
                                <label>Dates affichées <span>(laisser vide pour un affichage automatique)</span></label>
                                <input
                                    placeholder="Du vendredi 23 au dimanche 25 octobre 2026"
                                    value={selected.dateLabel || ''}
                                    onChange={(e) => updateSelected({ dateLabel: e.target.value })}
                                />
                            </div>

                            <div className="admin-row">
                                <div className="admin-field">
                                    <label>Horaires</label>
                                    <input placeholder="10h00 – 12h00" value={selected.time} onChange={(e) => updateSelected({ time: e.target.value })} />
                                </div>
                                <div className="admin-field">
                                    <label>Durée</label>
                                    <input placeholder="2h" value={selected.duration} onChange={(e) => updateSelected({ duration: e.target.value })} />
                                </div>
                            </div>

                            <div className="admin-field">
                                <label>Lieu</label>
                                <input value={selected.location} onChange={(e) => updateSelected({ location: e.target.value })} />
                            </div>

                            <div className="admin-row">
                                <div className="admin-field">
                                    <label>Places au total</label>
                                    <input type="number" value={selected.spots} onChange={(e) => updateSelected({ spots: Number(e.target.value) })} />
                                </div>
                                <div className="admin-field">
                                    <label>Places restantes</label>
                                    <input type="number" value={selected.spotsLeft} onChange={(e) => updateSelected({ spotsLeft: Number(e.target.value) })} />
                                </div>
                            </div>

                            <div className="admin-field">
                                <label>Photo <span>(adresse de l'image)</span></label>
                                <input placeholder="/events/mon-atelier.jpg" value={selected.image} onChange={(e) => updateSelected({ image: e.target.value })} />
                                {selected.image && <img className="admin-preview" src={selected.image} alt="" />}
                            </div>

                            <div className="admin-field">
                                <label>Accroche <span>(résumé affiché dans la liste)</span></label>
                                <textarea rows={2} value={selected.shortDesc} onChange={(e) => updateSelected({ shortDesc: e.target.value })} />
                            </div>

                            <div className="admin-field">
                                <label>Description <span>(laisse une ligne vide entre deux paragraphes)</span></label>
                                <textarea rows={8} value={selected.description} onChange={(e) => updateSelected({ description: e.target.value })} />
                            </div>

                            <div className="admin-field">
                                <label>Au programme <span>(une ligne par élément)</span></label>
                                <textarea rows={5} value={arrayToLines(selected.program)} onChange={(e) => updateSelected({ program: linesToArray(e.target.value) })} />
                            </div>

                            <div className="admin-field">
                                <label>Ce qui est inclus <span>(une ligne par élément)</span></label>
                                <textarea rows={5} value={arrayToLines(selected.includes)} onChange={(e) => updateSelected({ includes: linesToArray(e.target.value) })} />
                            </div>

                            <div className="admin-field">
                                <label>En supplément <span>(facultatif, une ligne par élément)</span></label>
                                <textarea rows={3} value={arrayToLines(selected.extras)} onChange={(e) => updateSelected({ extras: linesToArray(e.target.value) })} />
                            </div>

                            <div className="admin-field">
                                <label>Pour qui ? <span>(phrase d'introduction)</span></label>
                                <input value={selected.forWhomIntro || ''} onChange={(e) => updateSelected({ forWhomIntro: e.target.value })} />
                            </div>
                            <div className="admin-field">
                                <label>Pour qui ? <span>(une ligne par élément)</span></label>
                                <textarea rows={4} value={arrayToLines(selected.forWhomList)} onChange={(e) => updateSelected({ forWhomList: linesToArray(e.target.value) })} />
                            </div>
                            <div className="admin-field">
                                <label>Pour qui ? <span>(phrase de fin)</span></label>
                                <textarea rows={2} value={selected.forWhomOutro || ''} onChange={(e) => updateSelected({ forWhomOutro: e.target.value })} />
                            </div>

                            <div className="admin-field">
                                <label>Tu repartiras avec… <span>(une ligne par élément)</span></label>
                                <textarea rows={5} value={arrayToLines(selected.takeaway)} onChange={(e) => updateSelected({ takeaway: linesToArray(e.target.value) })} />
                            </div>

                            <div className="admin-field">
                                <label>Note sur le lieu</label>
                                <textarea rows={2} value={selected.locationNote || ''} onChange={(e) => updateSelected({ locationNote: e.target.value })} />
                            </div>

                            <div className="admin-field">
                                <label>Note sous le bouton de réservation</label>
                                <textarea rows={3} value={selected.bookingNote || ''} onChange={(e) => updateSelected({ bookingNote: e.target.value })} />
                            </div>

                            <div className="admin-editor-footer">
                                <a href={`/evenements/${selected.id}`} target="_blank" rel="noopener noreferrer" className="btn-outline">
                                    Voir la page
                                </a>
                                <button className="btn-primary" onClick={save} disabled={saving}>
                                    <Save size={15} /> {saving ? 'Enregistrement…' : 'Enregistrer'}
                                </button>
                            </div>
                        </>
                    )}
                </section>
            </div>
        </div>
    );
};

export default Admin;
