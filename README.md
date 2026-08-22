# Panora Labs — Marketing site + Farm app

Next.js landing page ([new-panora.vercel.app](https://new-panora.vercel.app)) with the **Panora Farm** invest demo embedded at [`/app`](http://localhost:3000/app).

## Development

**Terminal 1 — landing page**

```bash
npm install
npm run dev
```

**Terminal 2 — farm app (for Explore Vaults / Start Investing)**

```bash
npm run dev:farm
```

Open [http://localhost:3000](http://localhost:3000). Use **Explore Vaults** (nav) or **Start Investing** (hero) — both open `/app` with the farm UI.

## Production build

```bash
npm run build
```

`prebuild` builds `farm-app/` and copies output to `public/app/` for static hosting under `/app/*`.

## Structure

| Path | Description |
|------|-------------|
| `src/` | Next.js marketing pages |
| `src/app/app/` | Full-screen wrapper route → farm iframe |
| `farm-app/` | Vite React demo (SEABW hackathon app) |
| `public/app/` | Built farm assets (generated, gitignored) |

## Links

- Farm demo source also published at [panorafarm-SEABW](https://github.com/TioEnth06/panorafarm-SEABW)
