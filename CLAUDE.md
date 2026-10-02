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
4. **Verificar antes de commitear**: `npm run lint` sin errores (hay warnings previos, no agregar nuevos) y `npm run build` exitoso cuando se toca código. Para cambios visuales, revisar en `npm run dev` en escritorio y en móvil (360 px).
5. **Actualizar el grafo** con `graphify update .` después de modificar código e incluir `graphify-out/` en el commit (el grafo se versiona; los respaldos con fecha y la caché no).
6. **Actualizar TASKS.md** en la misma rama: mover lo terminado a Done con la fecha y el número de PR, y agregar las tareas nuevas que surjan.

### Commits y PRs
- Mensajes con prefijo convencional y descripción en español: `feat: agrega ficha de experimentos en planes`. Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`.
- Commitear solo los archivos de la tarea (nada de `git add -A` con cambios ajenos en el árbol).
- PR hacia `master` con `gh pr create`, en español: resumen, cambios y cómo probarlo.
- No hacer merge a `master` ni push forzado sin que el usuario lo pida.

## Reglas del producto (resumen de PRODUCT.md)

- **No inventar pruebas:** testimonios, cifras, clientes o certificaciones solo si los entrega Neuron. Todo contenido provisorio se marca en el código (`// TODO:` o un campo `placeholder: true`) y queda listado en TASKS.md.
- **Cotizar es un paso:** cualquier sección debe poder llevar a WhatsApp. Hoy el número `56976257106` está repetido en varios componentes; ver la tarea de centralizarlo.
- **Marca fija:** logo en `public/neuron-science-logo-colorful.jpg`; colores rosa, celeste y amarillo. Usar los tokens de `app/globals.css` (`blush`, `sky`, `ink`, `bubble`, `bubble-strong`, `lab`, `lab-strong`, `spark`) en vez de colores nuevos. Tipografías: Bricolage Grotesque (`font-display`) y Figtree (`font-sans`).
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
