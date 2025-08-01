# SV Laim - Vereinswebseite

Eine moderne Next.js-Webseite für den SV Laim mit Supabase-Authentifizierung.

## Features

- 🏠 **Startseite**: Willkommensseite mit Vereinsinformationen
- 🔐 **Authentifizierung**: Sichere Anmeldung mit E-Mail/Passwort über Supabase
- 📊 **Dashboard**: Geschützter Bereich nur für angemeldete Mitglieder
- 🎨 **Modernes Design**: Responsive Layout mit TailwindCSS
- ⚡ **Performance**: Optimiert mit Next.js 14 und App Router

## Technologie-Stack

- **Framework**: Next.js 14 mit App Router
- **Styling**: TailwindCSS
- **Authentifizierung**: Supabase Auth
- **Database**: Supabase
- **TypeScript**: Vollständige Typisierung
- **Deployment**: Vercel-ready

## Installation

1. Repository klonen:
```bash
git clone <repository-url>
cd sv-laim-website
```

2. Abhängigkeiten installieren:
```bash
npm install
```

3. Umgebungsvariablen konfigurieren:
```bash
cp .env.local.example .env.local
```

4. `.env.local` mit Ihren Supabase-Daten befüllen:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

5. Entwicklungsserver starten:
```bash
npm run dev
```

Die Anwendung ist dann unter http://localhost:3000 verfügbar.

## Supabase Setup

### 1. Projekt erstellen
1. Gehen Sie zu [supabase.com](https://supabase.com)
2. Erstellen Sie ein neues Projekt
3. Notieren Sie sich die Projekt-URL und den anon key

### 2. Authentication aktivieren
1. Gehen Sie zu Authentication > Settings
2. Aktivieren Sie "Enable email confirmations" (optional)
3. Konfigurieren Sie die Redirect URLs für Ihre Domain

### 3. Benutzer erstellen
Da dies eine private Vereinswebseite ist, müssen Benutzer manuell über das Supabase Dashboard erstellt werden:

1. Gehen Sie zu Authentication > Users
2. Klicken Sie auf "Invite a user"
3. Geben Sie die E-Mail-Adresse des Mitglieds ein
4. Das Mitglied erhält eine E-Mail mit einem Link zum Setzen des Passworts

## Projektstruktur

```
sv-laim-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── dashboard/          # Geschützter Dashboard-Bereich
│   │   ├── login/              # Anmeldeseite
│   │   ├── layout.tsx          # Root Layout mit AuthProvider
│   │   └── page.tsx            # Startseite
│   ├── components/             # Wiederverwendbare Komponenten
│   │   ├── Navigation.tsx      # Hauptnavigation
│   │   └── ProtectedRoute.tsx  # Route-Schutz für authentifizierte Bereiche
│   ├── contexts/               # React Contexts
│   │   └── AuthContext.tsx     # Authentifizierungs-Context
│   └── lib/                    # Utility-Bibliotheken
│       ├── supabase.ts         # Client-side Supabase Client
│       └── supabase-server.ts  # Server-side Supabase Client
├── .env.local.example          # Beispiel für Umgebungsvariablen
└── README.md
```

## Seiten

### Startseite (/)
- Öffentlich zugänglich
- Willkommensnachricht
- Vereinsinformationen
- Call-to-Action zur Anmeldung

### Login (/login)
- E-Mail/Passwort-Authentifizierung
- Automatische Weiterleitung zum Dashboard nach erfolgreicher Anmeldung
- Umleitung zur Startseite, wenn bereits angemeldet

### Dashboard (/dashboard)
- Nur für authentifizierte Benutzer
- Mitgliedschaftsinformationen
- Termine und Neuigkeiten
- Beitragsinformationen
- Gruppenzugehörigkeiten

## Deployment

### Vercel (empfohlen)
1. Repository zu GitHub pushen
2. Projekt mit Vercel verbinden
3. Umgebungsvariablen in Vercel konfigurieren
4. Automatisches Deployment bei Git-Push

### Andere Plattformen
Das Projekt ist kompatibel mit allen Next.js-kompatiblen Hosting-Plattformen:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Entwicklung

### Befehle
```bash
npm run dev          # Entwicklungsserver starten
npm run build        # Produktions-Build erstellen
npm run start        # Produktionsserver starten
npm run lint         # Code-Linting
```

### Code-Struktur
- **TypeScript**: Vollständige Typisierung für bessere Entwicklererfahrung
- **ESLint**: Code-Qualität und Konsistenz
- **TailwindCSS**: Utility-first CSS-Framework
- **App Router**: Moderne Next.js-Architektur mit Server Components

## Sicherheit

- Alle geschützten Routen sind durch `ProtectedRoute`-Komponente gesichert
- Server-side Session-Validierung
- Sichere Cookie-Handhabung durch Supabase SSR
- Environment Variables für sensible Daten

## Anpassungen

### Design anpassen
- Farben in `tailwind.config.js` ändern
- Komponenten in `src/components/` bearbeiten
- Layout in `src/app/layout.tsx` anpassen

### Funktionen erweitern
- Neue Seiten in `src/app/` hinzufügen
- Dashboard-Widgets in `src/app/dashboard/page.tsx` erweitern
- Zusätzliche Supabase-Features integrieren

## Support

Bei Fragen oder Problemen:
1. Prüfen Sie die Supabase-Logs im Dashboard
2. Überprüfen Sie die Browser-Konsole auf Fehler
3. Stellen Sie sicher, dass alle Umgebungsvariablen korrekt gesetzt sind

## Lizenz

Dieses Projekt wurde speziell für den SV Laim entwickelt.
