# Next GitHub Users

Aplicación Next.js para explorar usuarios de GitHub con scroll infinito y búsqueda.

## Requisitos

- Node.js >= 18.x
- npm >= 9.x

## Instalación

1. **Clona el repositorio:**

   ```sh
   git clone https://github.com/tu-usuario/next-github-users.git
   cd next-github-users
   ```

2. **Clona el repositorio:**

```sh
npm install
```

3. **Configura el token de GitHub (opcional, recomendado para evitar límites de rate): Crea un archivo .env.local en la raíz del proyecto y agrega:**

```sh
NEXT_PUBLIC_GITHUB_TOKEN=tu_token_personal_de_github
```

4. **Inicia la aplicación:**

```sh
npm run dev
```

5. **Abre http://localhost:3000 en tu navegador.**

## Deploy

La aplicación está desplegada en: https://next-github-users-six.vercel.app/

## Dependencias principales

- next: Framework React para SSR y SSG.
- typescript: Tipado estático para JavaScript.
- css + postcss: Librería principal de UI, se utiliza plugin de postcss según gustos personales de nesting tipo SASS.
- usehooks-ts: Hooks útiles para React y TypeScript (debouncing y media queries).
- react-infinite-scroller: Scroll infinito para cargar más usuarios.
- eslint, prettier: Herramientas de linting y formateo.
- Tanstack query: Libreria de fetching de datos.
- Istanbul: UI web para reporte de coverage.

## Scripts útiles

- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Compila la app para producción.
- `npm run start` — Inicia la app en modo producción.
- `npm run lint` — Linting del código.
- `npm test` — Ejecuta los tests.
- `npm run test:watch` — Ejecuta los tests en modo watch.
- `npm run test:coverage` — Muestra el reporte de cobertura de tests.
