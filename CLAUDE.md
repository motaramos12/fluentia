# Fluentia
App de aprendizagem de inglês com tutor de IA em avatar falante — fala, escrita e escuta, com correção em tempo real e progresso rastreado.

## Vision
Fluentia é uma web app de aprendizagem de inglês com um tutor de IA em forma de avatar falante. O utilizador (Willes, residente no UK, não-nativo) pratica fala, escrita e escuta em conversas reais com um avatar animado que ouve, corrige e responde em tempo real. O objetivo é atingir fluência conversacional até dezembro de 2026, combinando lições estruturadas por nível (A1→B2) com conversação livre ilimitada.

## Commands
- `npm run dev` — Inicia servidor de desenvolvimento
- `npm run build` — Build de produção
- `npm run lint` — Corre o linter
- `npm test` — Corre testes unitários (Vitest)
- `npm run db:push` — Aplica schema à base de dados (Drizzle)
- `npm run db:generate` — Gera tipos a partir do schema

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui
- **Database:** Supabase (Postgres) + Drizzle ORM
- **Auth:** Supabase Auth (email/password)
- **Real-time Conversation:** LiveKit Agents + OpenAI Realtime API (gpt-realtime-mini)
- **Avatar:** Simli (via LiveKit plugin)
- **Writing Feedback:** Claude API (Anthropic)
- **Hosting:** Netlify + LiveKit Cloud
- **Package Manager:** pnpm

## Architecture

### Directory Structure
```
src/
  app/
    (auth)/                    # Public routes: login, signup
    (app)/                     # Protected routes behind auth
      onboarding/page.tsx      # Level placement test
      dashboard/page.tsx       # Progress dashboard
      lessons/                 # Lesson list & detail
      practice/
        speak/page.tsx         # Conversation with avatar
        write/page.tsx         # Writing exercises
      settings/page.tsx        # User settings
      api/                     # API endpoints
    layout.tsx                 # Root layout
    globals.css                # Tailwind + design tokens
  components/
    ui/                        # shadcn/ui primitives
    practice/                  # Conversation components
    writing/                   # Writing exercise components
    dashboard/                 # Dashboard widgets
    shared/                    # Reusable components
  lib/
    supabase/                  # Supabase clients & middleware
    livekit/                   # LiveKit + Simli config
    claude/                    # Claude API integration
    db/                        # Drizzle schema & queries
    types/                     # Shared types
  middleware.ts                # Route protection
public/
  avatar-reference.png         # Avatar base image for Simli
drizzle/
  migrations/                  # Database migrations
```

### Key Patterns
- **Server Components by default** — use `"use client"` only for WebRTC, interactive forms, or local state
- **All DB queries through `lib/db/queries.ts`** — never inline in components
- **Middleware protects `(app)/*`** — redirects to `/login` if session invalid
- **RLS active on all user tables** — `user_id = auth.uid()`

## Data Model (Drizzle)

### Tables
- **profiles** — User data with level, streak, totals (extends auth.users)
- **lessons** — A1→B2 lessons organized by level
- **lesson_progress** — Completion status & scores per user
- **conversation_sessions** — Practice sessions (lesson or free)
- **conversation_turns** — User/tutor exchanges with transcript & error tags
- **writing_submissions** — Writing exercises with feedback
- **vocabulary_log** — Words encountered, usage, mastery
- **error_patterns** — Aggregated errors with frequency

All tables with `user_id` have RLS: `user_id = auth.uid()`.

## Design System

### Colors
| Role | Hex | Usage |
|------|-----|-------|
| Primary | #2DD4BF | Buttons, links, avatar accent |
| Secondary | #FB923C | Streaks, badges |
| Background | #FAFAF9 | Page bg (light) / #0F172A (dark) |
| Surface | #FFFFFF | Cards (light) / #1E293B (dark) |
| Text | #1E293B | Main text (light) / #F1F5F9 (dark) |
| Muted | #94A3B8 | Secondary text, borders |
| Destructive | #EF4444 | Errors |
| Success | #22C55E | Completion |

### Typography
- **Headings:** Sora, 24–40px, 600–700
- **Body:** Inter, 14–16px, 400–500
- **Code:** JetBrains Mono, 13–14px, 400

### Layout
- Base scale: 4px increments
- Border radius: 12px (cards), 8px (buttons), full (avatars)
- Max width: 1120px
- Breakpoints: sm 640px, md 768px, lg 1024px, xl 1280px

## Authentication

### Flow
1. Invite-only signup → email/password or magic link
2. Login → first-time redirected to `/onboarding` (placement test)
3. Success → `/dashboard`

### Protection
- Everything under `(app)/*` requires valid session
- Middleware redirects to `/login` if invalid
- Each user sees only their own data via RLS

## Environment Variables

| Variable | Source |
|----------|--------|
| NEXT_PUBLIC_SUPABASE_URL | supabase.com/dashboard |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | supabase.com/dashboard |
| SUPABASE_SERVICE_ROLE_KEY | supabase.com/dashboard |
| DATABASE_URL | supabase.com/dashboard |
| LIVEKIT_URL | cloud.livekit.io |
| LIVEKIT_API_KEY | cloud.livekit.io |
| LIVEKIT_API_SECRET | cloud.livekit.io |
| OPENAI_API_KEY | platform.openai.com |
| SIMLI_API_KEY | simli.com |
| ANTHROPIC_API_KEY | console.anthropic.com |

## Build Order
1. ✓ **Scaffolding** — Next.js, dependencies
2. **Supabase Setup** — Auth, DB clients
3. **Database Schema** — Drizzle, migrations
4. **Auth Flow** — Login, signup, route protection
5. **LiveKit + OpenAI** — Backend agent
6. **Simli Integration** — Avatar rendering
7. **AvatarRoom Component** — Conversation UI
8. **Turn Registration** — Webhook processing
9. **Session Report** — Error aggregation, streaks
10. **Writing Module** — Claude integration
11. **Lessons** — Content, progression
12. **Onboarding** — Level placement test
13. **Dashboard** — Progress visualization
14. **Polish & Responsive** — Mobile, dark mode
15. **Deploy** — Vercel + LiveKit production

## Code Rules
1. One component per file, max 300 lines
2. Path alias: use `@/` for `src/`
3. No barrel exports — import directly
4. Server Components by default, `"use client"` only when needed
5. TypeScript strict, no `any`
6. Never commit `.env.local`

## Non-Negotiable Rules
1. **TypeScript strict mode** — no `any`
2. **RLS on all user tables** — `user_id = auth.uid()`
3. **Never commit `.env.local`**
4. **One component per file, max 300 lines**
5. **Mobile-first design** — test on small screens
6. **Session limit 20 min** — control costs
7. **Visible error handling** — never fail silently

## Development
1. Install: `npm install` → switch to `pnpm` locally
2. Setup `.env.local` with all service credentials
3. Run migrations: `npm run db:push`
4. Start: `npm run dev`
5. Follow build order incrementally
