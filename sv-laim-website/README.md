# SV Laim - Vereinswebsite

Eine moderne Next.js-Website für den Sportverein Laim mit Supabase-Authentifizierung und TailwindCSS-Styling.

## ✨ Features

- **🏠 Startseite**: Ansprechende Willkommensseite mit Vereinsinfos
- **🔐 Authentifizierung**: Sichere Login-/Registrierungsfunktion mit Supabase
- **📊 Dashboard**: Geschützter Mitgliederbereich mit Vereinsinformationen
- **📱 Responsive Design**: Optimiert für alle Geräte
- **🎨 Modernes Design**: Schönes UI mit TailwindCSS

## 🚀 Installation & Setup

### 1. Repository klonen
```bash
git clone <repository-url>
cd sv-laim-website
```

### 2. Abhängigkeiten installieren
```bash
npm install
```

### 3. Umgebungsvariablen konfigurieren

Erstellen Sie eine `.env.local` Datei im Projektroot und fügen Sie Ihre Supabase-Credentials hinzu:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

**Wichtig**: Ersetzen Sie `your-supabase-url` und `your-supabase-anon-key` mit Ihren echten Supabase-Werten.

### 4. Supabase-Projekt einrichten

1. Erstellen Sie ein neues Projekt auf [supabase.com](https://supabase.com)
2. Gehen Sie zu **Settings** → **API**
3. Kopieren Sie die **Project URL** und den **anon public key**
4. Fügen Sie diese Werte in Ihre `.env.local` Datei ein

### 5. Entwicklungsserver starten
```bash
npm run dev
```

Die Website ist nun unter [http://localhost:3000](http://localhost:3000) verfügbar.

## 📁 Projektstruktur

```
sv-laim-website/
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   └── page.tsx       # Geschütztes Dashboard
│   │   ├── login/
│   │   │   └── page.tsx       # Login-/Registrierungsseite
│   │   ├── layout.tsx         # Root Layout
│   │   └── page.tsx           # Startseite
│   └── lib/
│       ├── supabase.ts        # Supabase Client (Client-Side)
│       └── supabase-server.ts # Supabase Client (Server-Side)
├── middleware.ts              # Route Protection Middleware
├── .env.local                 # Umgebungsvariablen (nicht versioniert)
└── README.md
```

## 🔒 Authentifizierung

Das Projekt nutzt Supabase Auth für:
- **Benutzerregistrierung**: Neue Konten erstellen
- **Benutzeranmeldung**: Sichere Anmeldung
- **Session-Management**: Automatische Session-Verwaltung
- **Route Protection**: Geschützte Bereiche nur für angemeldete Nutzer

### Geschützte Routen
- `/dashboard` - Nur für angemeldete Benutzer zugänglich

## 🎨 Styling

Das Projekt verwendet TailwindCSS für ein modernes und responsives Design:
- **Farbschema**: Grün-basierte Farbpalette passend zum Vereinsthema
- **Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- **Icons**: Heroicons für konsistente Icon-Darstellung

## 📱 Seiten-Übersicht

### Startseite (`/`)
- Willkommensnachricht für SV Laim
- Vereinsinformationen und Features
- Call-to-Action Buttons
- Navigation zur Login-Seite

### Login-Seite (`/login`)
- Email/Passwort Login-Formular
- Registrierungsfunktion für neue Benutzer
- Error-Handling und Feedback
- Automatische Weiterleitung nach erfolgreicher Anmeldung

### Dashboard (`/dashboard`)
- **Mitgliederstatistiken**: Überblick über Mitgliedsdaten
- **Kommende Events**: Vereinsveranstaltungen
- **Schnellzugriff**: Links zu wichtigen Funktionen
- **Vereinsnachrichten**: Aktuelle Informationen
- **Abmelde-Funktion**: Sichere Abmeldung

## 🛠️ Entwicklung

### Verfügbare Scripts
```bash
npm run dev          # Entwicklungsserver starten
npm run build        # Produktions-Build erstellen
npm run start        # Produktionsserver starten
npm run lint         # Code-Linting ausführen
```

### Technologie-Stack
- **Framework**: Next.js 14 (App Router)
- **Sprache**: TypeScript
- **Styling**: TailwindCSS
- **Authentifizierung**: Supabase Auth
- **Deployment**: Vercel-ready

## 🚀 Deployment

Das Projekt ist für Vercel optimiert:

1. Push zu GitHub Repository
2. Verbinde Repository mit Vercel
3. Konfiguriere Umgebungsvariablen in Vercel
4. Deploy!

### Umgebungsvariablen für Production
Stellen Sie sicher, dass diese Variablen in Ihrer Deployment-Umgebung gesetzt sind:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 📞 Support

Bei Fragen oder Problemen:
- **Email**: admin@sv-laim.de
- **GitHub Issues**: Erstellen Sie ein Issue in diesem Repository

## 📄 Lizenz

Dieses Projekt ist für den SV Laim entwickelt worden.

---

**Erstellt mit ❤️ für den SV Laim**
