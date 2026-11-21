# Kshirsa Technology Solutions

<div align="center">

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Firebase](https://img.shields.io/badge/Firebase_Hosting-Live-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)

<p align="center">
  <strong>Simplifying Technology. Empowering Businesses.</strong>
</p>
<p align="center">
  A high-performance, modern corporate web application for <strong>Kshirsa Technology Solutions</strong> — a premier IT consultancy and software engineering partner specializing in Cloud, AI/GenAI, and modern enterprise software.
</p>

[Explore Services](#-core-services) • [Architecture](#-project-structure) • [Quick Start](#-quick-start) • [Deployment](#-deployment) • [Contact](#-contact--support)

</div>

---

## 🌟 Highlights & Key Features

- **Fluid Momentum Scrolling:** Powered by [Lenis](https://lenis.darkroom.engineering/) with native smooth momentum physics and full `prefers-reduced-motion` accessibility support.
- **Cinematic Scroll Animations:** Built with [Framer Motion](https://www.framer.com/motion/) featuring staggered entry transitions, directional reveals (`Reveal.tsx`), and responsive micro-interactions.
- **Interactive Metric Counters:** Dynamic animated statistics powered by [React CountUp](https://github.com/glennreyes/react-countup) that trigger upon entering the viewport.
- **9-Section Landing Page:**
  1. **Hero:** High-impact value proposition with 3D isometric laptop illustration (`TechLaptopGraphic`), ambient glow orbs, and quick action CTAs.
  2. **Technologies Stream:** Interactive categorized filter tabs and a scrolling logo strip with authentic vector badges (React, TypeScript, Node.js, Python, AWS, Azure, GCP, Docker, Kubernetes, etc.).
  3. **Core Services:** 6 strategic enterprise service offerings detailing capabilities, architectures, and client deliverables.
  4. **Key Metrics Band:** High-contrast emerald statistics showcase.
  5. **How We Work:** 4-step delivery roadmap (*Discover &rarr; Design &rarr; Build &rarr; Scale*) featuring milestones and deliverables.
  6. **Why Choose Us:** Strategic business differentiators, SLA commitments, and engineering standards.
  7. **Industry Verticals:** Domain expertise across FinTech, HealthTech, Retail/E-Commerce, and Logistics.
  8. **Call-To-Action Banner:** High-converting emerald gradient banner guiding prospective clients directly to consultations.
  9. **Interactive Contact Form:** Real-time form validation with enterprise inquiry dispatch via a secure Cloudflare Worker proxy and pre-filled mail client fallback.
- **Interactive Terms & Conditions (`/terms`):** 27-clause legal documentation page with real-time text search, sticky table of contents, print styling, and quick clause navigation.
- **Code-Split Routing:** Fast initial page loads with route-level code splitting (`React.lazy` + `Suspense`) for secondary routes like `/terms`.
- **Corporate Visual Identity:** Custom brand palette incorporating rich emeralds (`#00B887`, `#004D3B`, `#003628`), obsidian navy accents (`#092D3A`), and clean mint backdrops (`#F8FDFB`).
- **Typography:** Tailored font stack featuring **Sora** for modern display headings, **Plus Jakarta Sans** for accents, and **Inter** for readable body typography.
- **SEO & Social Metadata:** Pre-configured Open Graph, Twitter Cards, canonical tags, and mobile web app manifests in `index.html`.

---

## 🛠️ Tech Stack & Libraries

| Category | Technology / Library | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 18.3](https://react.dev/) + [TypeScript 5.6](https://www.typescriptlang.org/) | Robust, type-safe component architecture |
| **Build Tool & Bundler** | [Vite 6.4](https://vitejs.dev/) | Ultra-fast HMR and optimized production bundling |
| **Styling & Design** | [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS | Utility-first custom corporate design system |
| **Routing** | [React Router DOM 7](https://reactrouter.com/) | Client-side routing with hash anchor navigation |
| **Smooth Scrolling** | [Lenis 1.3](https://github.com/darkroomengineering/lenis) | Hardware-accelerated smooth momentum scroll engine |
| **Animations** | [Framer Motion 11.11](https://www.framer.com/motion/) | Production-grade physics, gestures, and scroll animations |
| **Data Visualization** | [React CountUp 6.5](https://github.com/glennreyes/react-countup) | Viewport-triggered animated metric counters |
| **Iconography** | [Lucide React 0.460](https://lucide.dev/) | Clean, accessible SVG iconography |
| **Serverless Email** | [Cloudflare Worker Proxy](https://workers.cloudflare.com/) | Secure, CORS-enabled serverless email dispatch proxy |
| **Hosting & CDN** | [Firebase Hosting](https://firebase.google.com/docs/hosting) | Global SSL CDN deployment with single-page application rewrites |

---

## 📂 Project Structure

```text
├── public/
│   └── kshirsa-logo.jpg              # Static brand mark and favicon asset
├── src/
│   ├── assets/
│   │   ├── kshirsa-logo.jpg          # Corporate logo image
│   │   └── TermsAndCondition.txt     # Complete 27-clause legal source
│   ├── components/                   # Modular UI components
│   │   ├── Button.tsx                # Polymorphic button (primary, outline, glow variants)
│   │   ├── Clients.tsx               # Industry vertical domains & client verticals
│   │   ├── Contact.tsx               # Validated contact form with proxy integration
│   │   ├── CtaBanner.tsx             # Full-width high-converting emerald CTA banner
│   │   ├── Footer.tsx                # Obsidian emerald corporate footer & quick links
│   │   ├── Hero.tsx                  # Hero section with headline, CTAs, and 3D visual
│   │   ├── HowWeWork.tsx             # 4-stage engineering lifecycle (Discover to Scale)
│   │   ├── LotusBrand.tsx            # Brand logo symbol with gradient badge
│   │   ├── Navbar.tsx                # Sticky blur navbar with scrollspy & mobile menu
│   │   ├── Reveal.tsx                # Reusable Framer Motion scroll-reveal component
│   │   ├── Services.tsx              # 6 enterprise service cards with hover effects
│   │   ├── Stats.tsx                 # Animated impact metrics with React CountUp
│   │   ├── TechLaptopGraphic.tsx     # 3D isometric laptop with animated tech floating badges
│   │   ├── TechLogos.tsx             # Authentic SVG vectors for tech ecosystem
│   │   ├── Technologies.tsx          # Categorized filterable tech stack & marquee stream
│   │   └── WhyChooseUs.tsx           # Differentiators, enterprise SLAs & value props
│   ├── data/
│   │   ├── services.ts               # Typed service offerings and deliverables
│   │   └── technologies.ts           # Categorized technology stack data
│   ├── hooks/
│   │   └── useReducedMotion.ts       # Hook for OS accessibility motion preference
│   ├── pages/
│   │   └── TermsPage.tsx             # Dedicated interactive /terms route
│   ├── services/
│   │   └── emailService.ts           # Cloudflare Worker proxy API client & mailto fallback
│   ├── types/
│   │   └── index.ts                  # Shared TypeScript interfaces & types
│   ├── App.tsx                       # Main application routing & Lenis scroll management
│   ├── index.css                     # Tailwind directives, custom utilities & animations
│   ├── main.tsx                      # Application mounting point
│   └── vite-env.d.ts                 # Vite environment type declarations
├── .env.example                      # Environment variables reference template
├── firebase.json                     # Firebase Hosting SPA configuration
├── index.html                        # HTML5 document with SEO, fonts & meta tags
├── package.json                      # Dependencies and build scripts
├── tailwind.config.js                # Custom palette, shadows, keyframes & fonts
├── tsconfig.json                     # TypeScript compiler configuration
└── vite.config.ts                    # Vite build configuration
```

---

## ⚡ Quick Start

### 1. Prerequisites
Ensure you have the following installed locally:
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher (or `pnpm` / `yarn`)

### 2. Clone and Install
```bash
git clone https://github.com/your-org/kshirsa-tech-website.git
cd kshirsa-tech-website
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory from `.env.example`:

```bash
cp .env.example .env
```

Configure your contact form proxy URL:
```env
# Cloudflare Worker Proxy Endpoint (Recommended & Secure)
VITE_CONTACT_PROXY_URL=https://kshirsa-contact-worker.YOUR_SUBDOMAIN.workers.dev
```

> **Note:** If `VITE_CONTACT_PROXY_URL` is omitted or unconfigured during local development, the contact form intelligently falls back to launching the user's default email client (`mailto:`) with all form fields pre-populated.

### 4. Start Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:5173` (or the port specified in your Vite config).

### 5. Production Build & Preview
To verify the production build locally:
```bash
npm run build
npm run preview
```
Compiled output will be placed in the `dist/` directory.

---

## 📬 Contact Form Architecture

The website uses a secure serverless backend proxy pattern for contact inquiries:

```
[User Browser]
      │
      ▼  (POST JSON payload)
[Cloudflare Worker Proxy]  <-- Protects API tokens & validates CORS
      │
      ▼  (Authorized HTTPS Request)
[Resend API / Mail Provider]
      │
      ▼
[contact.kshirsatech@gmail.com]
```

### Benefits:
1. **Zero Secret Leakage:** No email provider API keys are bundled into the client-side JavaScript bundle.
2. **CORS Security:** The Cloudflare Worker can be locked down to allow only production and staging origins.
3. **Resilience:** If the network request fails, the UI offers a 1-click fallback to send the message directly via the client's email application.

---

## 🚀 Deployment

### Firebase Hosting

The project is configured for seamless deployment to **Firebase Hosting** via `firebase.json`:

1. Ensure the Firebase CLI is installed and authenticated:
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. Select your Firebase project:
   ```bash
   firebase use <your-project-id>
   ```

3. Build and deploy:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

### SPA Rewrites
`firebase.json` contains rewrites that ensure React Router handles all sub-paths (including `/terms`):
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

---

## 🌐 Routes Overview

- **`/` — Main Landing Page:** Comprehensive single-page experience with smooth section scrolling (`#home`, `#services`, `#technologies`, `#process`, `#why-us`, `#clients`, `#contact`).
- **`/terms` — Terms & Conditions:** Full 27-clause legal terms including live keyword search, clause highlighting, table of contents, and print-ready stylesheet.

---

## 💼 Company & Contact Information

**Kshirsa Technology Solutions**  
*Simplifying Technology. Empowering Businesses.*

- 📍 **Headquarters:** Kolkata, West Bengal, India
- ✉️ **Inquiries:** [contact.kshirsatech@gmail.com](mailto:contact.kshirsatech@gmail.com)
- 🌐 **Website:** [kshirsatech.com](https://kshirsatech.com/)

---

## 📄 License

&copy; 2026 **Kshirsa Technology Solutions**. All rights reserved. Proprietary software.
