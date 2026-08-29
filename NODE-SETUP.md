# Actualizar Node (una sola vez)

Astro 7 necesita **Node 22.12 o superior**. Tu Mac tiene la v18.13, hay que
actualizar. Elige una opción.

## Opción A · Instalador oficial (más simple)

1. Entra a **https://nodejs.org**
2. Descarga el botón **LTS** para macOS (archivo `.pkg`)
3. Ábrelo, siguiente, siguiente, pon tu contraseña de Mac cuando la pida
4. Listo. Reemplaza la versión vieja.

Verifica en la terminal:

```
node --version
```

Debe decir `v22.x` o superior.

## Opción B · nvm (si quieres poder cambiar de versión)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Cierra y reabre la terminal, luego:

```bash
cd ~/Documents/elpaywall/site
nvm install    # lee el archivo .nvmrc y usa Node 22
```

## Después de cualquiera de las dos

```bash
cd ~/Documents/elpaywall/site
npm install
npm run dev
```

Abre http://localhost:4321
