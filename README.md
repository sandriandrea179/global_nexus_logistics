# GlobalNexus Logistics S.A. — Portale Interno

Sito web statico per il portale operativo interno di **GlobalNexus Logistics S.A.**, multinazionale fittizia di logistica e trasporti con sede alle Isole Cayman.

## 🚀 Deploy su GitHub Pages

1. Crea un repository su GitHub e carica l'intero contenuto del progetto
2. Vai su **Settings → Pages**
3. Imposta il branch `main` (o `master`) come sorgente, cartella root `/`
4. Il sito sarà disponibile all'indirizzo `https://<username>.github.io/<repository>/`

> `index.html` nella root reindirizza automaticamente a `pages/login.html`

## 🔑 Credenziali di Accesso

| Campo    | Valore   |
|----------|----------|
| Username | `admin`  |
| Password | `GNL2024!` |

## 📁 Struttura Progetto

```
├── index.html              ← Entry point (redirect automatico)
├── pages/
│   ├── login.html          ← Pagina di accesso
│   ├── dashboard.html      ← Landing (Chi siamo, Obiettivi, Dove operiamo, Contatti)
│   ├── users.html          ← Area Utenti
│   ├── orders.html         ← Area Ordini
│   ├── vehicles.html       ← Area Mezzi
│   ├── warehouses.html     ← Area Depositi
│   ├── containers.html     ← Area Container
│   ├── departures.html     ← Area Partenze
│   └── destinations.html   ← Area Destinazioni
├── css/
│   ├── main.css            ← Design system principale
│   ├── login.css           ← Stili pagina login
│   └── dashboard.css       ← Stili dashboard
├── js/
│   ├── auth.js             ← Autenticazione (sessionStorage)
│   ├── nav.js              ← Navigazione sidebar
│   └── tables.js           ← Caricamento tabelle da JSON
└── data/
    ├── users.json
    ├── orders.json
    ├── vehicles.json
    ├── warehouses.json
    ├── containers.json
    ├── departures.json
    └── destinations.json
```

## ⚙️ Tecnologie

- HTML5 + Vanilla CSS3
- JavaScript ES5 + **jQuery 3.7.1** (CDN)
- Google Fonts — Inter
- Dati statici JSON caricati via `$.getJSON()`
- Autenticazione simulata con `sessionStorage`
