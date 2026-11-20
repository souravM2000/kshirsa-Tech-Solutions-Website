# Kshirsa Technology Solutions Website

Production-ready corporate website for **Kshirsa Technology Solutions**, built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

> **Tagline:** Simplifying Technology. Empowering Businesses.  
> **Headquarters:** Kolkata, West Bengal, India  
> **Contact:** [contact.kshirsatech@gmail.com](mailto:contact.kshirsatech@gmail.com)

---

## 🚀 Tech Stack

- **Framework:** React 18 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS (Custom emerald corporate palette)
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Email Service:** Resend integration (with mailto fallback)

---

## 📂 Project Structure

```
├── public/
│   └── kshirsa-logo.jpg           # Static company logo asset
├── src/
│   ├── assets/
│   │   ├── kshirsa-logo.jpg       # Brand logo
│   │   └── TermsAndCondition.txt  # 27-clause legal documentation
│   ├── components/                # Modular UI components
│   │   ├── Button.tsx             # Reusable button with variants
│   │   ├── Clients.tsx            # Trust & industry verticals
│   │   ├── Contact.tsx            # Validated contact form
│   │   ├── Footer.tsx             # Dark emerald footer & privacy modal
│   │   ├── Hero.tsx               # Hero banner with emerald tagline
│   │   ├── LotusBrand.tsx         # Brand logo & hero visual
│   │   ├── Navbar.tsx             # Sticky responsive navigation
│   │   ├── Services.tsx           # 6 core service cards
│   │   ├── Stats.tsx              # Highlights & metrics banner
│   │   ├── TechLaptopGraphic.tsx  # 3D laptop with neon cloud
│   │   ├── TechLogos.tsx          # Real SVG icons for tech stack
│   │   ├── Technologies.tsx       # Tech strip & categorized filters
│   │   └── WhyChooseUs.tsx        # Value proposition & differentiators
│   ├── data/
│   │   ├── services.ts            # Typed services data
│   │   └── technologies.ts        # Categorized tech stack data
│   ├── pages/
│   │   └── TermsPage.tsx          # Terms & Conditions (/terms)
│   ├── services/
│   │   └── emailService.ts        # Resend email dispatch service
│   ├── types/
│   │   └── index.ts               # TypeScript data models
│   ├── App.tsx                    # Route definitions & scroll handling
│   ├── index.css                  # Tailwind styles & animations
│   ├── main.tsx                   # React DOM entry point
│   └── vite-env.d.ts              # Vite environment declarations
├── index.html                     # HTML5 entry with fonts & SEO
├── tailwind.config.js             # Brand color extensions
└── vite.config.ts                 # Bundler configuration
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment (Optional - for Resend Email)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Add your [Resend](https://resend.com) API key:
```env
VITE_RESEND_API_KEY=re_your_api_key_here
VITE_RESEND_FROM_EMAIL=Kshirsa Inquiries <onboarding@resend.dev>
VITE_CONTACT_RECEIVER_EMAIL=contact.kshirsatech@gmail.com
```
*Note: If no API key is set, the contact form automatically falls back to a pre-filled email client dispatch.*

### 3. Run Development Server
```bash
npm run dev
```
Site runs at `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
```
Generates optimized static assets in `dist/`.

---

## 📄 Key Routes

- `/` — Single-page corporate landing page with active scroll tracking.
- `/terms` — Interactive Terms & Conditions with search, table of contents, and print functionality.
