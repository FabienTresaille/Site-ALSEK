# 🎬 Alsek — Site Marketing Digital

Site Next.js 14 pour l'agence Alsek — Production photo/vidéo, création web et campagnes pub.

---

## 🏗️ Stack technique

| Composant | Technologie | Pourquoi |
|-----------|-------------|----------|
| Framework | **Next.js 14** (App Router) | SSR/SSG, performances, SEO |
| Styles | **Tailwind CSS** | Utilitaires CSS, build optimisé |
| Typo | **Cormorant Garamond** + **Outfit** | Élégance éditoriale |
| Deploy | **Docker** + **Traefik** | Votre infra existante |
| Email | **Resend** (ou Nodemailer) | Formulaire de contact |

---

## 🚀 Déploiement sur VPS (Debian + Traefik existant)

### Prérequis
- Docker + Docker Compose installés
- Traefik en place avec réseau externe `audit-app_web`
- DNS `alsek.fr` et `www.alsek.fr` pointant vers votre VPS

### 1. Cloner et configurer

```bash
# Cloner le projet sur le VPS
git clone <votre-repo> /opt/alsek-website
cd /opt/alsek-website

# Créer le fichier d'environnement
cp .env.example .env
nano .env   # Remplir RESEND_API_KEY, CONTACT_EMAIL_TO
```

### 2. Vérifier que le réseau Traefik existe

```bash
docker network ls | grep audit-app_web
# Si absent :
docker network create audit-app_web
```

### 3. Build et lancement

```bash
# Build de l'image + démarrage
docker compose up -d --build

# Vérifier les logs
docker compose logs -f alsek-web

# Vérifier le statut
docker compose ps
```

### 4. Vérification Traefik

```bash
# Voir les routes détectées par Traefik
docker exec <traefik-container> traefik version

# Logs Traefik
docker logs <nom-du-container-traefik> -f
```

---

## 🔄 Mise à jour du site

```bash
cd /opt/alsek-website
git pull
docker compose up -d --build
# Zéro downtime grâce au healthcheck
```

---

## 📧 Configurer l'envoi d'email (formulaire de contact)

### Option A — Resend (recommandé, gratuit jusqu'à 3000 emails/mois)

```bash
# 1. Créer un compte sur https://resend.com
# 2. Vérifier votre domaine alsek.fr
# 3. Créer une API Key
# 4. Installer resend
npm install resend

# 5. Dans .env
RESEND_API_KEY=re_xxxxxxxxxxxx
CONTACT_EMAIL_TO=contact@alsek.fr
```

Puis décommenter le bloc Resend dans `src/app/api/contact/route.js`.

### Option B — SMTP (OVH, Gmail, etc.)

```bash
npm install nodemailer
```

Puis décommenter le bloc Nodemailer dans `src/app/api/contact/route.js` et remplir les variables SMTP dans `.env`.

---

## 🎨 Personnalisation

### Modifier les textes
Tous les textes sont directement dans les composants `src/components/`.

| Fichier | Section |
|---------|---------|
| `Hero.jsx` | Titre, sous-titre, stats |
| `ZoneGenie.jsx` | Zone de génie photo/vidéo |
| `Services.jsx` | 3 services |
| `Process.jsx` | 4 étapes de processus |
| `Testimonials.jsx` | Témoignages + résultats clients |
| `About.jsx` | Histoire, photo Fabien, certification HubSpot |
| `ContactForm.jsx` | Formulaire d'audit |

### Ajouter la photo de Fabien
Placer `public/fabien.jpg` puis dans `About.jsx` remplacer le placeholder SVG par :
```jsx
<Image src="/fabien.jpg" alt="Fabien — Alsek" fill className="object-cover" />
```

### Modifier les couleurs
Dans `src/app/globals.css` → section `:root` :
```css
:root {
  --gold: #C8973A;        /* Couleur accent principale */
  --dark: #080808;         /* Fond principal */
  --cream: #F2EDE4;        /* Texte principal */
}
```

### Ajouter le logo HubSpot officiel
Télécharger le badge de certification sur academy.hubspot.com et le placer dans `public/hubspot-cert.png`.

---

## 🛡️ Sécurité & Performance

- ✅ HTTPS automatique via Let's Encrypt (Traefik)
- ✅ Redirect HTTP→HTTPS + www→apex
- ✅ Security headers (HSTS, XSS, nosniff)
- ✅ Image Next.js optimisée (lazy loading, WebP)
- ✅ Build standalone → image Docker minimale (~150MB)
- ✅ Healthcheck Docker intégré

---

## 📊 Analytics (optionnel)

### Plausible (privacy-first, recommandé)
Ajouter dans `src/app/layout.js` :
```jsx
<script defer data-domain="alsek.fr" src="https://plausible.io/js/script.js" />
```

### Google Analytics
Ajouter dans `.env` :
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 📁 Structure du projet

```
alsek-website/
├── Dockerfile                  # Multi-stage build
├── docker-compose.yml          # Traefik + réseau audit-app_web
├── .env.example                # Variables d'environnement
├── next.config.mjs
├── tailwind.config.js
└── src/
    ├── app/
    │   ├── globals.css          # Design system complet
    │   ├── layout.js            # Metadata + fonts
    │   ├── page.js              # Page principale
    │   └── api/
    │       └── contact/
    │           └── route.js     # API formulaire de contact
    └── components/
        ├── Navbar.jsx           # Navigation sticky
        ├── Hero.jsx             # Section héro cinématique
        ├── ClientLogos.jsx      # Marquee clients
        ├── ZoneGenie.jsx        # ★ Zone de génie Photo/Vidéo
        ├── Services.jsx         # 3 services (Site + Pub)
        ├── Process.jsx          # 4 étapes méthodologie
        ├── Testimonials.jsx     # Témoignages + résultats
        ├── About.jsx            # Histoire + HubSpot cert
        ├── ContactForm.jsx      # Formulaire audit gratuit
        └── Footer.jsx           # Pied de page
```

---

## 🆘 Commandes utiles

```bash
# Développement local
npm install
npm run dev
# → http://localhost:3000

# Build production local
npm run build
npm start

# Docker — rebuild après modifs
docker compose up -d --build --force-recreate

# Voir les logs en direct
docker compose logs -f

# Arrêter
docker compose down

# Supprimer et rebuild complet
docker compose down --rmi local && docker compose up -d --build
```
