# Earth–Moon System — Interactive 3D Visualization

An interactive 3D visualization of the Earth–Moon system built with React Three Fiber. Rendered as a real-time WebGL scene, it shows Earth and the Moon orbiting together with animated organic-gradient shaders, a starfield backdrop, and an adjustable simulation speed control.

## What it does

- Renders a stylized **Earth–Moon orbital system** in 3D (WebGL via Three.js).
- The Moon orbits Earth continuously; both bodies are wrapped in custom GLSL noise shaders that animate over time (organic gradient effect).
- **Simulation speed slider** to speed up / slow down the orbital animation.
- **Wireframe ↔ solid view toggle** for an "x-ray" look at the geometry.
- Free camera: rotate / zoom / pan with OrbitControls.
- Collapsible info panel explaining the scene.

## Features

- Real-time 3D scene: `Canvas`, `OrbitControls`, `Stars` from `@react-three/drei`
- Custom vertex + fragment shaders (simplex noise) driving an animated surface gradient
- Speed control slider for the orbital animation
- Wireframe / solid mesh toggle
- Responsive full-screen layout with dark space aesthetic
- shadcn/ui component set (Slider, Button, Collapsible)

## Tech stack

| Layer        | Technology                                    |
|--------------|-----------------------------------------------|
| Framework    | Next.js 15.2.4 (App Router)                   |
| UI library   | React 19                                      |
| 3D           | Three.js, `@react-three/fiber`, `@react-three/drei` |
| Styling      | Tailwind CSS 3.4, `tailwindcss-animate`       |
| Components   | Radix UI + shadcn/ui                          |
| Fonts        | Geist (via `geist` package)                   |
| Analytics    | `@vercel/analytics`                           |
| Language     | TypeScript                                    |

## Quick start

```bash
npm install --legacy-peer-deps   # peer conflicts from "latest"-pinned 3D deps
npm run dev                      # http://localhost:3000
```

Production build:

```bash
npm run build
npm run start                    # serves the production build
```

## Project structure

```
.
├── app/
│   ├── page.tsx          # entry page — renders the scene component
│   ├── layout.tsx        # root layout (fonts, theme provider)
│   └── globals.css       # global styles
├── earth-moon-system.tsx # the full 3D scene (shaders, orbit, controls, UI)
├── components/
│   ├── theme-provider.tsx
│   └── ui/               # shadcn/ui primitives (slider, button, collapsible…)
├── lib/utils.ts          # cn() helper
├── public/               # static assets / placeholders
├── styles/globals.css    # legacy global styles
├── next.config.mjs       # `output: "export"` + unoptimized images
└── tailwind.config.ts
```

The scene lives almost entirely in `earth-moon-system.tsx`: scene setup, GLSL shaders, orbital animation loop, and the control UI.

## Environment variables

None required.

## Deployment notes

- The app is **fully static** — no API routes, no server actions, no secrets. It can be served from any static host.
- `next.config.mjs` sets `output: "export"` and `images.unoptimized: true`, so `npm run build` emits a static site in `out/`.
- This repo is deployed to GitHub Pages: https://girishlade111.github.io/earth-moon-system/
- Note: `basePath: "/earth-moon-system"` is set so assets resolve correctly under the GitHub Pages subpath. If you deploy this to a custom domain / Vercel at the domain root instead, remove `basePath` from `next.config.mjs`.
- `expo` / `react-native` entries in `package.json` are leftovers from the v0 template and are not used by the web build.

---

Built by Girish Lade · [ladestack.in](https://ladestack.in)
