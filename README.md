## Bayasakh Survey — Corporate Website (Static)

Modern corporate static website for **“Bayasakh Survey” LLC** (Mongolian geodetic surveying & engineering company, established 2009).

### Tech

- Next.js (static export)
- React
- Tailwind CSS
- Framer Motion (subtle reveal animations)

### Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Build (static export)

```bash
npm run build
```

Static output is generated in `out/`.

### Edit content

All homepage content arrays (MN/EN) are in:

- `src/content/site.ts`

Placeholders you should replace:

- Contact email/phone/address in `src/sections/home-sections.tsx` and `src/components/footer.tsx`

