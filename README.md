# AgentForge Labs

AgentForge Labs is Shah Faisal's full-stack development and automation agency website. It presents real systems for clinics, real estate teams, gyms, agencies, local service businesses, and small tech founders. Built with **Next.js 15**, **React 19**, and **Tailwind CSS 4**.

## Features Highlighted

- **100+ Workflows Built** — Real n8n automation experience across multiple industries
- **WhatsApp and MCP Agents** — Multimodal WhatsApp assistants connected to tools, memory, and knowledge bases
- **RAG Systems** — Google Drive to Pinecone and Supabase vector search pipelines
- **Voice AI Systems** — VAPI-style outbound calling, call status tracking, and phone assistants
- **Client-Facing Case Studies** — High-level project cards for Upwork, Fiverr, and job applications

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind + custom animations
│   ├── layout.tsx       # Root layout with DM Sans font
│   └── page.tsx         # Landing page
└── components/
    ├── Header.tsx       # Navigation with mobile menu
    ├── Hero.tsx         # Hero with live chat mockup
    ├── Stats.tsx        # Key metrics bar
    ├── Features.tsx     # Feature cards
    ├── HowItWorks.tsx   # 3-step onboarding
    ├── Testimonials.tsx # Social proof
    ├── Pricing.tsx      # Pricing tiers
    ├── CTA.tsx          # Bottom call-to-action
    └── Footer.tsx       # Site footer
```

## Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |
