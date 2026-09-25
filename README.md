# DevixoAI India — Website (Frontend Only)

Stack: **React (Vite) + Tailwind CSS + Framer Motion**
Theme: Dark background with Saffron (#FF8C1A) accent.

## Setup
```
npm install
npm run dev        # http://localhost:5173
npm run build       # production build
```

## Pages included
Home, Features, Pricing, Blog, Blog Details, Contact (form UI only — no backend yet),
About, Services, Integration, FAQ, Login, Register, and Solution pages (for the Home
dropdown items: AI Automation Suite, CRM Platform, AI Chatbot, Data Analytics, Custom AI
Development).

## Structure
```
src/
  components/   Navbar, Footer, CTAStrip, Reveal (scroll-animation wrapper)
  layouts/       MainLayout
  pages/         All page components
```

## Note on Contact form
The contact form currently only updates local UI state on submit (no network call) —
backend was removed for now. When ready to reconnect a backend, add a submit handler in
`src/pages/Contact.jsx` that calls your API.

## Next steps (not yet built)
- Replace placeholder image blocks with real assets/screenshots
- Login/Register — currently UI-only, no auth
- Reconnect a backend (whichever stack you decide) for the contact form and dynamic data
