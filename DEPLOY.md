# Despliegue — El Paywall en Cloudflare Pages

## Una sola vez: subir el repo a GitHub

```bash
cd ~/Documents/elpaywall
git add .
git commit -m "init: estructura del blog"
```

Crea un repo vacío en github.com (sin README), llamado `elpaywall`, y luego:

```bash
git remote add origin https://github.com/TU_USUARIO/elpaywall.git
git branch -M main
git push -u origin main
```

## Una sola vez: conectar Cloudflare Pages

1. dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Autoriza GitHub y elige el repo `elpaywall`
3. Configuración de build:
   - **Framework preset:** Astro
   - **Root directory:** `site`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** variable de entorno `NODE_VERSION` = `22`
4. **Save and Deploy**

En ~2 minutos tienes una URL `elpaywall.pages.dev` funcionando.

## Una sola vez: conectar el dominio

1. Registra `elpaywall.com` en Cloudflare (Registrar) o transfiérelo si lo compraste en otro lado
2. En el proyecto de Pages → **Custom domains** → **Set up a domain** → `elpaywall.com`
3. Cloudflare crea los registros DNS solo. Agrega también `www` como redirección.

## El flujo normal a partir de ahí

```bash
# escribes o mueves un artículo a site/src/content/blog/
git add .
git commit -m "post: título del artículo"
git push
```

Cloudflare detecta el push y publica solo. No hay más pasos.

## Antes de cada push, opcional pero recomendado

```bash
cd site
npm run build && npm run preview
```

Revisa que compile y que se vea bien en http://localhost:4321
