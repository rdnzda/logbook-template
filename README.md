# English Logbook – L2 Informatique

Ce projet est une application de **logbook d’anglais** réalisée dans le cadre de ma L2 Ingénierie Informatique. Elle me permet de documenter mon niveau actuel, mes objectifs, mon programme de travail et le compte-rendu détaillé de mes 10 heures d’autonomie en anglais.

L’application est construite avec **Next.js (App Router)**, **React**, **Tailwind CSS** et quelques composants UI réutilisables **ShadcnUI**.

---

## Contenu de l’application

L’application est organisée en plusieurs sections accessibles via la navigation :

### 🏠 Accueil

- Présentation générale du logbook.
- CTA pour entrer dans le contenu (introduction, auto‑évaluation, etc.).
- Design moderne avec animations, gradients et illustrations.

### 📜 Introduction

- Contexte personnel par rapport à l’anglais.
- Parcours scolaire et exposition à la langue.
- Pourquoi l’anglais est important pour mon projet professionnel.

Les textes sont chargés depuis des fichiers JSON dédiés pour garder le contenu éditable facilement.

### ✅ Auto‑Évaluation

- Radar chart interactif de mes compétences en anglais (compréhension orale/écrite, expression orale/écrite, vocabulaire, grammaire) basé sur des niveaux CECRL (A1–C2).
- Détails par compétence avec descriptions et **sources de tests** (EF SET, Oxford Online, etc.).
- Séparation claire entre :
  - **Points forts** (compréhension, vocabulaire technique, motivation),
  - **Axes d’amélioration** (expression orale/écrite, grammaire, procrastination).

Tout le contenu de cette section est défini dans `data/auto-evaluation.json`.

### 🎯 Objectifs

- Objectifs définis à partir de l’auto‑évaluation :
  - Expression orale
  - Expression écrite
  - Grammaire
  - Vocabulaire technique (informatique)
- Chaque objectif a :
  - Un titre,
  - Une description,
  - Un badge de couleur,
  - Une icône (Mic, PenSquare, BookText…).

Les données viennent de `data/objectifs.json`, et le composant `components/layout/objectifs.jsx` les lit dynamiquement.

### 📅 Programme

- **Programme de travail divisé en blocs** (10 blocs principaux + 2 bonus) d’environ 1 heure.
- Sessions fun et variées : séries/YouTube en VO, vocabulaire technique, jeux/apps (Wordle, Quizlet, Duolingo) en bonus, expression orale guidée, mini‑projets d’écriture, grammaire ciblée, etc.
- Texte entièrement géré dans `data/programme.json` :
  - `introduction` : explication générale du programme,
  - `iaCard` : comment l’IA m’a aidé à structurer les séances,
  - `sessions` : description détaillée de chaque bloc.

Le composant `components/layout/programme.jsx` consomme ces données.

### 🕒 Sessions

- Carrousel de **10 sessions** correspondant à mes heures d’autonomie.
- Pour chaque session :
  - Titre, date, horaires,
  - Lien vers les ressources utilisées (YouTube, Google Docs…) rendu via HTML (`dangerouslySetInnerHTML`),
  - Description détaillée,
  - Ressentis,
  - Ce que j’ai aimé / moins aimé,
  - Ce qui était facile / difficile,
  - Ce que je veux changer, garder et améliorer,
  - Une ou plusieurs images illustratives (mini‑carrousel par session, avec recadrage full‑frame).
- Les données sont stockées dans `data/sessions.json` et affichées par `components/layout/sessions.jsx`.

### 🧾 Bilan & Feedback

- Section de bilan final du semestre (réflexion globale, progression, limites).
- Formulaire de feedback pour le projet/logbook.
- Informations sur les technologies utilisées et l’organisation du travail.

---

## Stack technique

- **Framework** : [Next.js](https://nextjs.org) (App Router)
- **Langage** : TypeScript / JavaScript (composants `.tsx` et `.jsx`)
- **Styling** : [Tailwind CSS](https://tailwindcss.com)
- **UI Components** :
  - Composants maison et ShadcnUI dans `components/ui` (Card, Badge, Accordion, Carousel, Tabs, Tooltip, etc.)
  - Icônes [lucide-react](https://lucide.dev/)
- **Charts** : [Recharts](https://recharts.org) pour le radar chart d’auto‑évaluation
- **Animations** :
  - Classes utilitaires Tailwind (`transition`, `transform`, `opacity`…)
  - Animations d’apparition au scroll (IntersectionObserver + classes `scroll-animate`, `fade-left`, `fade-right`, `fade-up`)
  - Légères animations de flottement sur les illustrations

---

## Structure principale du projet

```text
app/
  layout.tsx      # Layout global
  page.tsx        # Page principale qui compose les sections
  globals.css     # Styles globaux + animations

components/
  layout/
    [accueil.jsx](http://_vscodecontentref_/1)
    introduction.jsx
    [auto-evaluation.jsx](http://_vscodecontentref_/2)
    objectifs.jsx
    programme.jsx
    [sessions.jsx](http://_vscodecontentref_/3)
    bilan.jsx
    feedback.jsx
    header.jsx
    footer.jsx
    navbar.jsx
  ui/
    card.tsx
    badge.tsx
    accordion.tsx
    carousel.tsx
    chart-radar-legend.tsx
    button.tsx
    input.tsx
    textarea.tsx
    ...

data/
  auto-evaluation.json
  objectifs.json
  programme.json
  sessions.json

public/
  assets/
    svg/
      ... (illustrations utilisées dans les différentes sections)
    img/
      ... (illustrations utilisées dans les différentes sections)