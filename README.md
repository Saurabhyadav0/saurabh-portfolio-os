# Saurabh Portfolio OS

A macOS-style interactive portfolio for **Saurabh Yadav** — Full-Stack Engineer & AI Systems Developer. The whole site is a simulated desktop: a Dock, draggable windows, Spotlight search, a Finder, a Terminal, Safari, Mail, and a handful of retro games, all wired up to real resume data.

## Live Preview

Run it locally with the steps below — there's no hosted deployment configured yet.

## Tech Stack

**Frontend**
- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui (Radix UI primitives)
- Framer Motion for window/animation interactions

**Backend**
- Node.js + Express
- MongoDB (via Mongoose) for the contact form

## Project Structure

```
.
├── frontend/          # Vite + React desktop UI
│   ├── src/
│   │   ├── components/
│   │   │   ├── apps/       # In-app "applications" (About, Terminal, Safari, Mail, games...)
│   │   │   ├── desktop/    # Desktop chrome (dock, boot screen, context menu, notifications)
│   │   │   ├── ios/        # iOS-style home screen variant
│   │   │   └── ui/         # shadcn/ui primitives
│   │   └── data/
│   │       └── resume.ts   # Single source of truth for all resume content
│   └── public/
│       └── Saurabh_Yadav_Resume.pdf
├── backend/           # Express API for the contact form
└── docs/              # Original design/spec notes
```

## Getting Started

### Frontend

```sh
cd frontend
npm install
npm run dev
```

Builds for production with:

```sh
npm run build
```

### Backend

```sh
cd backend
npm install
```

Copy `.env.example` to `.env` and fill in your MongoDB connection string:

```
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
```

Then run:

```sh
npm start        # or: npm run dev (auto-restart on change)
```

The frontend also has a `.env.example` — copy it to `.env` and set `VITE_API_URL` to point at your backend (defaults to `http://localhost:5000` in dev).

## Editing Content

All resume/portfolio data (experience, projects, skills, contact info) lives in one place: [`frontend/src/data/resume.ts`](frontend/src/data/resume.ts). Update it there and the whole UI — About, Finder, Skills, Safari, Terminal, Mail, notifications — stays in sync.

## Credits

Originally scaffolded as a macOS-portfolio template; rebuilt with Saurabh Yadav's own experience, projects, and content.
