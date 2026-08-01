# NEXUS — Agência Digital

Site institucional/portfólio da NEXUS Agência Digital: presença digital que vende todos os dias — sites premium, tráfego pago e estratégia de marca.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- lucide-react

## Comandos

```bash
npm install     # instala as dependências
npm run dev     # servidor de desenvolvimento
npm run build   # build de produção (tsc + vite build)
npm run lint    # verificação com oxlint
npm run preview # pré-visualiza o build de produção
```

## Deploy

- Vercel: `npx vercel --prod`
- GitHub Pages: workflow em `.github/workflows/deploy.yml` (push na branch `main`)
