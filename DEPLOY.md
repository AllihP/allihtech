# Déploiement sur Render — allihtech.com

## 1. Déployer via Blueprint

1. Va sur **render.com** → *New* → **Blueprint**
2. Connecte ton dépôt GitHub/GitLab
3. Render détecte automatiquement `render.yaml` et crée :
   - `allihtech-api` (Django)
   - `allihtech-frontend` (React Static)
   - `allihtech-db` (PostgreSQL)
   - `allihtech-redis` (Redis)
4. Clique **Apply**

---

## 2. Variables à définir manuellement (Dashboard → allihtech-api → Environment)

| Variable | Valeur |
|---|---|
| `EMAIL_HOST_USER` | `contact@allihtech.com` |
| `EMAIL_HOST_PASSWORD` | Mot de passe d'application Gmail |
| `CONTACT_EMAIL_RECIPIENT` | `hillaprincebambe@gmail.com` |
| `SENTRY_DSN` | *(optionnel)* DSN de ton projet Sentry |

> **Gmail App Password** : Compte Google → Sécurité → Validation en 2 étapes → Mots de passe d'application

---

## 3. Configurer le domaine allihtech.com

### Frontend (site principal)
Dans **allihtech-frontend** → Settings → Custom Domains :

| Type | Nom | Valeur |
|---|---|---|
| `CNAME` | `www` | `allihtech-frontend.onrender.com` |
| `A` | `@` | IP fournie par Render (voir leur doc) |

### Backend API (optionnel — meilleur SEO)
Dans **allihtech-api** → Settings → Custom Domains :

| Type | Nom | Valeur |
|---|---|---|
| `CNAME` | `api` | `allihtech-api.onrender.com` |

Puis mettre à jour `VITE_API_URL=https://api.allihtech.com/api` dans allihtech-frontend.

> Render génère automatiquement un certificat SSL (Let's Encrypt) une fois le DNS propagé (24–48h).

---

## 4. Vérifier le déploiement

```bash
# Santé du backend
curl https://allihtech-api.onrender.com/api/health/
# → {"status": "ok"}

# Sitemap
curl https://allihtech.com/sitemap.xml

# Robots
curl https://allihtech.com/robots.txt
```

---

## 5. Plan free Render — limites à connaître

| Service | Limite free |
|---|---|
| Web Service | Mise en veille après 15 min d'inactivité (cold start ~30s) |
| PostgreSQL | 1 Go, expire après 90 jours (upgrade recommandé) |
| Redis | 25 Mo |
| Bandwidth | 100 Go/mois |

> Pour un site de production, passer au plan **Starter ($7/mois)** évite la mise en veille.

---

## 6. Déploiement Docker (alternatif)

Si tu préfères déployer avec Docker Compose :

```bash
# Production
cp backend/.env.example backend/.env
# Éditer backend/.env avec les vraies valeurs
docker compose up -d --build
```
