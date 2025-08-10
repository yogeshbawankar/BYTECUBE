# BYTECUBE - AI-Powered Financial Solutions

## About BYTECUBE

BYTECUBE delivers cutting-edge AI solutions that empower financial institutions to optimize operations, manage risk, and drive growth. Our platform provides intelligent financial analysis, predictive modeling, and automated decision-making tools.

## Tech Stack

This is a modern web application built with:
- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- shadcn/ui for beautiful components
- React Router for navigation

## Project Structure

```text
BYTECUBE/
├─ public/
│  ├─ favicon.ico
│  ├─ foundation.html
│  ├─ placeholder.svg
│  └─ robots.txt
├─ src/
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ index.css
│  ├─ assets/
│  ├─ components/
│  ├─ constants/
│  ├─ data/
│  ├─ hooks/
│  ├─ layouts/
│  ├─ lib/
│  ├─ pages/
│  ├─ sections/
│  └─ vite-env.d.ts
├─ index.html
├─ vite.config.ts
├─ tailwind.config.ts
├─ tsconfig.json
└─ package.json
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <YOUR_REPOSITORY_URL>
cd BYTECUBE
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080` (configured in `vite.config.ts`; Vite's default is `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Navigation**: Seamless routing between pages
- **About Page**: Comprehensive company information and team details
- **Contact Form**: Easy way for potential clients to get in touch

## Deployment

This is a Single-Page Application (SPA) built with Vite. You can deploy the production build in the `dist` folder to any static host. Follow the provider-specific steps below and ensure SPA fallback routing is configured so deep links work.

### 1) Build

```bash
npm run build
# output: dist/
```

### 2) SPA routing (Vite) – important

- **Why**: SPAs serve `index.html` for all routes; your host must rewrite unknown paths to `/index.html`.
- **Provider-specific fallback**:
  - **Vercel**: Add a rewrite from `/(.*)` to `/index.html` (see below).
  - **Netlify**: Add a `/* -> /index.html 200` rule (see below).
  - **GitHub Pages**: Add a `404.html` that falls back to `index.html` (see below).
  - **AWS S3/CloudFront**: Set the error document to `index.html` (and CloudFront custom error responses).

### 3) Subpath deployments (Vite `base`)

If deploying under a subpath (e.g., GitHub Pages at `https://username.github.io/your-repo/`), set Vite’s `base` so asset paths resolve correctly.

```ts
// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  base: "/your-repo/", // change to your subpath, e.g. "/bytecube/"
});
```

---

### Vercel

You can deploy via the Vercel Dashboard or CLI.

- **Dashboard**:
  - Import your Git repository.
  - Build Command: `npm run build`
  - Output Directory: `dist`
  - Add a rewrite to enable SPA routing:
    - Project Settings → Redirects/Rewrites → Add Rewrite
    - Source: `/(.*)` → Destination: `/index.html`

- **CLI**:
  ```bash
  npm i -g vercel
  npm install
  npm run build
  vercel --prod
  ```
  Optional `vercel.json` (committed at the project root) to ensure SPA fallback:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```

---

### Netlify

- Add `netlify.toml` to the project root:
  ```toml
  [build]
  command = "npm run build"
  publish = "dist"

  [[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  ```

- Deploy via Dashboard (connect repo) or CLI:
  ```bash
  npm i -g netlify-cli
  npm install
  netlify init   # once per project; picks site and sets defaults
  netlify deploy --build --prod --dir=dist
  ```

---

### GitHub Pages

1) If deploying to a repository subpath, set Vite `base` (see above).

2) Add SPA fallback by providing a `404.html` in the published output. One simple approach is to copy `index.html` to `404.html` after build:
```json
// package.json (scripts)
{
  "scripts": {
    "build": "vite build",
    "postbuild": "node -e \"require('fs').copyFileSync('dist/index.html','dist/404.html')\"",
    "deploy": "gh-pages -d dist"
  }
}
```

3) Deploy using the `gh-pages` package:
```bash
npm install -D gh-pages
npm run build
npm run deploy
```

4) Alternatively, use GitHub Actions to build and push `dist` to the `gh-pages` branch, and enable Pages in repo settings.

5) Alternative routing approach: HashRouter or BrowserRouter `basename`

- Using `HashRouter` avoids base path and rewrite complexities on GitHub Pages because routes are in the URL fragment after `#`, so Pages always serves `index.html`. If deploying under a subpath, still set Vite `base` for asset URLs.
- Using `BrowserRouter` with a `basename` (e.g., `/your-repo`) keeps clean URLs, but you must keep the `404.html` fallback described above.

Concise `HashRouter` example in the render call:

```tsx
// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
```

`BrowserRouter` with `basename`:

```tsx
import { BrowserRouter } from "react-router-dom";
// ...
<BrowserRouter basename="/your-repo">
  <App />
</BrowserRouter>
```

---

### AWS S3 (optional CloudFront)

1) Build the site:
```bash
npm run build
```

2) Create an S3 bucket and enable Static website hosting:
- Index document: `index.html`
- Error document: `index.html` (SPA fallback)

3) Upload the build:
```bash
aws s3 sync dist s3://YOUR_BUCKET_NAME --delete
```

4) Optional (CloudFront):
- Point a CloudFront distribution to the S3 bucket (Origin Access recommended).
- Create Custom Error Responses for 403 and 404:
  - Response page path: `/index.html`
  - HTTP Response Code: `200`

---

If you encounter blank pages or 404s on direct links, double-check:
- **SPA fallback** is configured to serve `index.html` for unknown routes.
- **Vite `base`** is set correctly when deploying under a subpath.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

Copyright (c) 2025 BYTECUBE. All rights reserved.

This software is proprietary and confidential. Use of this software is governed by the BYTECUBE Proprietary Software License. See the `LICENSE` file for full terms. If you have a separately executed commercial license agreement with BYTECUBE, the terms of that agreement govern your use of the software to the extent of any conflict.

> **Note:** If you are using React Router's `BrowserRouter`, you must also set the [`basename`](https://reactrouter.com/en/main/routers/browser-router#basename) prop to the same subpath as Vite's `base`. This ensures that all routes and links work correctly when your app is deployed under a subpath (otherwise, navigation and deep links may break).
>
> For example, if your Vite `base` is `/your-repo/`, update your `src/main.tsx` like this:
>
> ```tsx
> import { createRoot } from 'react-dom/client';
> import { BrowserRouter } from 'react-router-dom';
> import App from './App';
> import './index.css';
>
> createRoot(document.getElementById('root')!).render(
>   <BrowserRouter basename="/your-repo/"> {/* match Vite base! */}
>     <App />
>   </BrowserRouter>
> );
> ```
> Replace `/your-repo/` with your actual subpath (e.g. `/bytecube/`).