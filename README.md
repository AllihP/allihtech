# AllihTech V2

Stack React 18 + Vite + Tailwind CSS + Django 5 REST API

## Architecture

```
allihtechV2/
├── backend/     Django REST API (Python 3.11)
├── frontend/    React 18 + Vite + Tailwind CSS
├── nginx/       Reverse proxy config
├── docker/      Dockerfiles + entrypoint
├── docker-compose.yml       Production
└── docker-compose.dev.yml   Development
```

## Lancement rapide (développement)

```bash
# 1. Copier les variables d'environnement
cp backend/.env.example backend/.env

# 2. Démarrer en mode développement
docker compose -f docker-compose.dev.yml up

# Frontend: http://localhost:5173
# Backend:  http://localhost:8000
# Admin:    http://localhost:8000/admin
```

## Production

```bash
cp backend/.env.example backend/.env
# Éditer backend/.env avec vos vraies valeurs

docker compose up -d --build
# Site: http://localhost
```

## Frontend seul (sans Docker)

```bash
cd frontend
npm install
npm run dev
```

## Backend seul (sans Docker)

```bash
cd backend
python -m venv venv
venv\Scripts\activate      # Windows
pip install -r requirements/development.txt
python manage.py migrate
python manage.py runserver
```

## Pages

| Route             | Description                        |
|-------------------|------------------------------------|
| `/`               | Accueil + Équipe (unique)          |
| `/services`       | Catalogue des services             |
| `/public`         | Institution Publique               |
| `/private`        | Institution Privée + Tarifs        |
| `/formations`     | Catalogue des formations           |
| `/blog`           | Articles & insights                |
| `/actualites`     | Actualités AllihTech               |
| `/contact`        | Formulaire de contact              |
| `/partenaires`    | Écosystème partenaires             |
| `/confidentialite`| Politique de confidentialité       |
| `/conditions`     | CGU                                |
| `/localisation`   | Localisation N'Djamena             |

## SEO

- React Helmet Async (meta, og, twitter:card, JSON-LD)
- hreflang fr/en/ar
- Sitemap.xml généré par Django (`/sitemap.xml`)
- Canonical URLs

## i18n

- Français (défaut), English, العربية (RTL auto)
- Fichiers de traduction : `frontend/public/locales/{fr,en,ar}/translation.json`

## Sécurité

- CSRF protection (Django)
- JWT ready (djangorestframework-simplejwt)
- Rate limiting contacts (5/heure)
- CSP Headers (django-csp)
- HSTS en production
- Sanitisation XSS (bleach)
- Pas de @csrf_exempt
