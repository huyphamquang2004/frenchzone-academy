# Frenchzone Academy

Standalone temporary recruitment site for Frenchzone Academy classes.

This is not connected to the existing Frenchzone production app, VM, database,
auth system, dashboard, or payment flow.

## Getting Started

Install dependencies and run the local server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Required environment variables

Copy `.env.example` to `.env.local` for local testing.

```bash
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
LEAD_WEBHOOK_URL=
NEXT_PUBLIC_ZALO_URL=
NEXT_PUBLIC_SITE_URL=
```

Lead delivery priority:

1. Telegram, if `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are set.
2. Generic webhook, if `LEAD_WEBHOOK_URL` is set.
3. Otherwise `/api/leads` returns `Lead delivery is not configured.`

The app never stores leads on Vercel's filesystem.

## Build

```bash
npm run build
```

## Deploy on Vercel

If Vercel CLI is installed and logged in:

```bash
vercel
vercel --prod
```

If Vercel CLI is not installed:

```bash
npm i -g vercel
vercel login
vercel --prod
```

After creating the Vercel project, add these Project Settings environment
variables and redeploy production:

```bash
TELEGRAM_BOT_TOKEN
TELEGRAM_CHAT_ID
# or LEAD_WEBHOOK_URL
NEXT_PUBLIC_ZALO_URL
NEXT_PUBLIC_SITE_URL
```

## Copy and pricing edits

Most class copy, pricing, FAQ, and teacher/support text live in
`src/lib/content.ts`. Form behavior lives in `src/components/RegistrationForm.tsx`
and server delivery lives in `src/app/api/leads/route.ts`.
