# El Paywall

Blog informativo sobre la economía de la cuenta privada: cómo se construye el contenido por el que la gente paga. Nicho: creadoras de contenido +18 en México.

## Estructura del workspace

```
elpaywall/
├── site/          Proyecto Astro. Esto es lo que se publica en elpaywall.com
├── estrategia/    Keyword map, plan editorial, ICP, calendario
├── marca/         Decisiones de identidad, naming, guía de voz, assets
├── borradores/    Artículos en proceso antes de pasarlos a site/src/content/blog/
└── recursos/      Investigación, referencias, capturas
```

Solo `site/` se despliega. El resto es material de trabajo que vive en el mismo repo para tener todo versionado en un lugar.

## Stack

- **Astro** (sitio estático) + Markdown para los artículos
- **Cloudflare Pages** para hosting (plan gratuito)
- Dominio: **elpaywall.com** (registrar: Cloudflare)

## Trabajar en el sitio

```bash
cd site
npm install
npm run dev        # http://localhost:4321
npm run build      # genera site/dist/
npm run preview    # revisa el build antes de publicar
```

## Publicar un artículo

1. Escribe el `.md` en `borradores/`
2. Cuando esté listo, muévelo a `site/src/content/blog/` con el frontmatter completo (ver `site/src/content/blog/_plantilla.md`)
3. `git add . && git commit -m "post: <título>" && git push`
4. Cloudflare Pages publica solo en ~30 segundos

## Configuración global

Todo lo editable (nombre, descripción, URL, redes, autor) está en `site/src/consts.ts`.
