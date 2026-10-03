# Neuron web

Landing MVP de Neuron (cumpleaños y eventos con experimentos de ciencia), en español, desplegada en Vercel. La conversión ocurre por WhatsApp.

Fuentes de verdad, por tema:
- **PRODUCT.md**: público, propósito, marca, principios y reglas de contenido. Manda sobre cualquier decisión de diseño o copy.
- **TASKS.md**: backlog. Qué está en curso, qué espera información de Neuron y qué viene después.
- **docs/design/**: especificaciones de diseño aprobadas o propuestas, una por feature.
- **README.md**: instalación y estructura para personas.

## Flujo de trabajo

### Al empezar una sesión
1. Leer TASKS.md y `git status`. Si hay cambios sin commitear que no son de la tarea, no tocarlos y avisar.
2. Actualizar `master` (`git checkout master && git pull --ff-only`) antes de crear una rama nueva.

### Por cada tarea
1. **Una rama por tarea**, creada desde `master` actualizado: `<tipo>/<descripcion-corta>` con tipo `feature`, `fix`, `docs`, `style`, `refactor` o `chore` (por ejemplo `feature/ficha-experimento-hover`).
2. **Diseño antes que código** en features visuales: usar las skills `frontend-design` y `design-taste-frontend`, dejar la especificación en `docs/design/<feature>.md` y enlazarla desde TASKS.md. Implementar siguiendo esa especificación.
3. **Orientarse con graphify** (sección de abajo) antes de leer o buscar en el código.
4. **Verificar antes de commitear**: `npm run lint` sin errores ni warnings y `npm run build` exitoso cuando se toca código. Para cambios visuales, revisar en `npm run dev` en escritorio y en móvil (360 px).
5. **Actualizar el grafo** con `graphify update .` después de modificar código e incluir `graphify-out/` en el commit (el grafo se versiona; los respaldos con fecha y la caché no).
6. **Actualizar TASKS.md** en la misma rama: mover lo terminado a Done con la fecha y el número de PR, y agregar las tareas nuevas que surjan.

### Commits y PRs
- Mensajes con prefijo convencional y descripción en español: `feat: agrega ficha de experimentos en planes`. Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`.
- Commitear solo los archivos de la tarea (nada de `git add -A` con cambios ajenos en el árbol).
- PR hacia `master` con `gh pr create`, en español: resumen, cambios y cómo probarlo.
- Un PR a la vez: todos editan TASKS.md y los PRs apilados terminan mergeados en ramas muertas. Esperar el merge antes de empezar la tarea siguiente.
- **Merge autorizado** (desde 2026-10-02): mergear el propio PR con `gh pr merge --merge` cuando lint y build pasan y los checks de Vercel están en verde. Después confirmar que el cambio está en `master` y borrar la rama local y remota.
- Merge a `master` = deploy a producción en Vercel. Si el PR muestra a los visitantes contenido no validado por Neuron (borradores, placeholders), consultar antes de mergear.
- Nunca push forzado.

### Dónde vive el contenido editable
- Experimentos de la ficha (textos, fotos, variantes de nombre): `lib/experiments.ts`.
- Número y mensajes de WhatsApp: `lib/whatsapp.ts`.
- Planes y precios: `components/Pricing.tsx` (cada plan con su precio Micro y Macro, y sus experimentos por slug de `lib/experiments.ts`).
- Aviso de la pasta de dientes de elefante y su foto: `components/ToothpasteBanner.tsx`.
- Testimonios: `components/Testimonials.tsx`. Imagen para compartir: `app/opengraph-image.tsx`.

### Lecciones del entorno (Windows)
- `next dev` bloquea binarios dentro de `node_modules` (SWC, lightningcss): `npm install`/`npm ci` fallan con EPERM y dejan la instalación a medias. Detener el servidor de desarrollo antes de tocar dependencias y avisar al usuario para que lo reinicie.
- Procesos lanzados con `npx` en segundo plano dejan el hijo vivo al detener la tarea: lanzar `node node_modules/next/dist/bin/next ...` y confirmar con la lista de procesos que no quedó nada corriendo.
- El CLI de shadcn puede agregar paquetes que sobran (`cn`, `radix-ui`) y actualizar todo Radix: ajustar los imports a `@/lib/utils` y `@radix-ui/react-*`, e instalar la versión del primitivo que coincida con los demás para que el diff del lockfile sea mínimo.

### Verificación visual sin falsos positivos
- Edge headless controlado por DevTools (scripts en el scratchpad, no se versionan) sobre el build de producción (`next start`), no sobre `next dev`.
- Esperar a que React hidrate (clave `__reactFiber` en el elemento) antes de interactuar, y hacer scroll con `behavior: "instant"`: el `<html>` tiene scroll suave.
- Los popovers y diálogos de Radix siguen en el DOM durante su animación de salida: comprobar `data-state`, no solo si el nodo existe.

## Reglas del producto (resumen de PRODUCT.md)

- **No inventar pruebas:** testimonios, cifras, clientes o certificaciones solo si los entrega Neuron. Todo contenido provisorio se marca en el código (`// TODO:` o un campo `placeholder: true`) y queda listado en TASKS.md.
- **Cotizar es un paso:** cualquier sección debe poder llevar a WhatsApp. Hoy el número `56976257106` está repetido en varios componentes; ver la tarea de centralizarlo.
- **Marca fija:** logo en `public/images/logo-neuron.png`; colores rosa, celeste y amarillo. Usar los tokens de `app/globals.css` (`blush`, `sky`, `ink`, `bubble`, `bubble-strong`, `lab`, `lab-strong`, `spark`) en vez de colores nuevos. Tipografías: Bricolage Grotesque (`font-display`) y Figtree (`font-sans`).
- **Tono:** lúdico, en español de Chile, dirigido a padres e hijos; creíble para quien paga.
- **Mínimo de accesibilidad:** contraste AA, foco visible, navegación por teclado, `prefers-reduced-motion` respetado y layouts que funcionen desde 360 px.
- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind 4, shadcn/ui (Radix), Framer Motion, Lucide. Revisar `package.json` antes de importar algo nuevo.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
