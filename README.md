# Magnus Honung

Website for Magnus' small beekeeping business: local honey sold directly to customers and to
school classes that resell it to fund class trips.

**v1 scope:** customers place an _order request_ (no online payment). The API emails Magnus and
sends the customer a confirmation. Magnus confirms and the customer pays with Swish.

## Stack

| Part     | Tech                                                     |
| -------- | -------------------------------------------------------- |
| Frontend | React 19 + TypeScript + Vite (`apps/web`)                |
| Backend  | Node 24+ + Express 5 + TypeScript (`apps/api`)           |
| Shared   | Product catalogue + Zod order schema (`packages/shared`) |
| Mail     | Nodemailer (SMTP); logs to console in development        |
| Quality  | Strict TS, ESLint, Prettier, Vitest, EditorConfig        |

See [docs/architecture.md](docs/architecture.md) for the overview and
[docs/business.md](docs/business.md) for yield, pricing, names and payment options.

## Folder structure

```
magnus-honung/
├── apps/
│   ├── api/                 Express backend
│   │   ├── src/
│   │   │   ├── routes/      HTTP endpoints (orders)
│   │   │   ├── services/    Mailer + order email templates
│   │   │   ├── app.ts       Express app (no listen → testable)
│   │   │   ├── config.ts    Env vars, validated with Zod
│   │   │   └── server.ts    Entry point
│   │   └── test/            Supertest API tests
│   └── web/                 React frontend
│       └── src/
│           ├── api/         fetch client
│           ├── components/  Page sections + order form
│           └── styles/      Global CSS (design tokens as CSS variables)
├── packages/
│   └── shared/              Types, products, validation used by both apps
├── docs/
└── .vscode/                 Format on save + recommended extensions
```

## Getting started

```bash
nvm use            # Node 24+
npm install
cp apps/api/.env.example apps/api/.env
npm run dev        # web on :5173, api on :3001 (Vite proxies /api)
```

Without `SMTP_HOST` set, emails are printed in the terminal instead of sent.

## Scripts

| Command          | What it does                                                  |
| ---------------- | ------------------------------------------------------------- |
| `npm run dev`    | Run web and api with hot reload                               |
| `npm run check`  | Format check + lint + typecheck + tests (CI gate)             |
| `npm run build`  | Build web (`apps/web/dist`) and api (`apps/api/dist`)         |
| `npm start`      | Run the built api (serves the web too if `STATIC_DIR` is set) |
| `npm run format` | Format everything with Prettier                               |

## Deploying

One Node service is enough: build, set `STATIC_DIR=../web/dist` and the SMTP variables, run
`npm start`. Works on e.g. Render, Railway or Fly.io. Point `magnushonung.se` at it.
