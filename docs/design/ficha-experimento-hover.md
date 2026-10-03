# Diseño: ficha de experimento al pasar sobre un experimento

Estado: **implementado** (2026-10-03) en `components/ExperimentChip.tsx` y `lib/experiments.ts`. Las diferencias con la propuesta original están marcadas como *Implementado*.

## Lectura del encargo

Extensión de una landing existente (rediseño que preserva la marca) para padres y madres que comparan planes, con el lenguaje lúdico de Neuron (rosa, celeste, amarillo; Bricolage Grotesque + Figtree). Los diales se mantienen cerca de los del sitio actual: variación 7, movimiento 4, densidad 4.

## Dónde vive

En las tarjetas de **Planes y Precios** (`components/Pricing.tsx`), cada plan lista sus experimentos como "chips" (`<li>` redondeados sobre fondo `bg-blush`). Hoy son solo nombres: un padre no sabe qué es "Repollímetro" o "Burbugrafía". La ficha responde a esa pregunta sin sacar al visitante de la tarjeta ni del camino hacia "Cotizar".

La sección **Experimentos** (`Services.tsx`) ya muestra foto y descripción, así que queda fuera de alcance.

## Comportamiento

| Contexto | Abrir | Cerrar |
|---|---|---|
| Mouse (`hover: hover` y `pointer: fine`) | Pasar el cursor sobre el chip (retardo 100 ms) | Sacar el cursor (100 ms), `Esc` |
| Teclado | `Enter` o `Espacio` sobre el chip | `Esc`, pasar a otro elemento con Tab |
| Táctil | Tocar el chip | Tocar fuera, tocar otro chip, `Esc` |

- Pasar de un chip a otro cambia la ficha de inmediato, sin parpadeo.
- Solo hay una ficha abierta a la vez.
- La ficha no tiene contenido interactivo: no hace falta poder mover el cursor dentro de ella.
- *Implementado:* con teclado se abre con `Enter`/`Espacio` y no al enfocar, porque abrir al enfocar choca con el clic del mouse (el clic enfoca y alterna a la vez). El foco se queda en el chip.
- *Implementado:* con el cursor encima, un clic no cierra la ficha que el hover ya abrió.

**Por qué no un HoverCard puro:** el HoverCard de Radix ignora las pantallas táctiles y los lectores de pantalla, y buena parte del tráfico llega desde el móvil (PRODUCT.md). Se usa **Popover de Radix** (`@radix-ui/react-popover`, vía `npx shadcn@latest add popover`), controlado: se abre con hover/foco en dispositivos con puntero fino y con tap en táctiles.

## Anatomía

```
  chips del plan                         ficha (popover, 15rem)
 ┌──────────────────────────────┐       ┌──────────────────────┐
 │ (Lámpara de lava ⓘ) (Slime ⓘ)│  ──▶  │ ┌──────────────────┐ │
 │ (Fiesta de gases ⓘ)          │       │ │   imagen 15:7    │ │  ← imagen pequeña
 └──────────────────────────────┘       │ └──────────────────┘ │
                                        │ Lámpara de lava      │  ← nombre, font-display bold
                                        │ Burbujas de colores  │  ← texto breve, máx. 80
                                        │ que suben y bajan…   │    caracteres, 2 líneas
                                        └──────────▼───────────┘
                                                (flecha al chip)
```

- **Contenedor:** `w-64` (16rem; *implementado*: algo más ancha porque los textos reales llegan a ~140 caracteres), `max-w-[calc(100vw-2rem)]`, `rounded-2xl`, `p-3`, `bg-ink text-blush`, sombra `shadow-xl shadow-ink/25`, flecha de Radix en `fill-ink`.
  - El fondo `ink` separa la ficha como una capa sobre la tarjeta blanca y repite el color de la sección Empresas, sin introducir colores nuevos.
- **Imagen (opcional; sin foto la ficha muestra solo nombre y texto):** `aspect-[15/7]`, `rounded-xl`, `object-cover`, `next/image` con `sizes="240px"`. Mientras carga muestra `bg-lab/30`, para que el tamaño no salte.
- **Nombre:** `font-display text-lg font-bold leading-tight`, `mt-3`.
- **Texto:** `text-sm text-blush/80 leading-snug`, `mt-1`, sin recorte (*implementado*: los textos reales ocupan hasta 5 líneas).
- **Posición:** `side="top"` por defecto, con `collisionPadding={16}` para que Radix la mueva abajo o a los lados cerca de los bordes de la pantalla. `sideOffset={8}`.

### El chip

- Pasa de `<li>` estático a `<li><button type="button">` (sigue siendo una lista).
- Agrega un ícono `Info` de Lucide (`size-3.5`, `opacity-60`) a la derecha del nombre como pista de que se puede abrir. Lucide ya es la librería de íconos del proyecto.
- Estados: reposo `bg-blush`; hover, foco o abierto `bg-spark/60`. Foco visible con el `outline` global existente (`lab-strong`).
- Área táctil: subir de `py-1.5` a `py-2` (alto ≥ 36 px).
- `aria-expanded` y `aria-controls` los pone Radix. El nombre accesible del botón es solo el nombre del experimento.

## Movimiento

- Apertura: `opacity 0→1` y `scale 0.96→1` desde el chip (`origin` de Radix), 150 ms, `ease-out`. Las clases `animate-in zoom-in-95 fade-in-0` de `tw-animate-css` ya están instaladas.
- Cierre: solo opacidad, 100 ms.
- `prefers-reduced-motion: reduce`: sin escala, solo opacidad.
- Es movimiento que responde a una acción de la persona; no se agregan animaciones automáticas.

## Datos

Hoy cada plan repite los nombres como texto libre, y hay inconsistencias ("Lámpara" / "Lámpara de lava", "Fluido no newtoniano" / "Fluido no newtoneano", "Luciérnagas" / "Luciérnagas electrónicas", "Pasta de dientes experimental"). Se propone un catálogo único:

```ts
// lib/experiments.ts
export type Experiment = {
  slug: string
  name: string
  summary: string        // máx. 80 caracteres
  image: string          // ruta en /public
  placeholder?: true     // marca imagen o texto provisorios, para encontrarlos y reemplazarlos
}
export const experiments: Record<string, Experiment> = { /* ... */ }
```

Los planes pasan a referenciar `slug`s (`experiments: ["lampara-de-lava", "slime", ...]`), y el chip toma nombre, texto e imagen del catálogo.

*Implementado:* mientras Neuron confirma los nuevos planes, `components/Pricing.tsx` no se tocó: los planes siguen con sus textos y `findExperiment(label)` traduce cada nombre (incluidas las variantes) a su ficha con un mapa de alias. Al rehacer los planes conviene pasar a slugs.

### Contenido

Textos entregados por Neuron el 2026-10-03 (solo se corrigió la puntuación). Los experimentos sin texto se muestran como antes, sin ficha: no se publica contenido inventado.

| Experimento | Texto | Foto |
|---|---|---|
| Lámpara de lava | A través de una reacción química, los participantes crearán una pequeña lámpara de lava. | pendiente |
| Slime | ¡Síntesis de slime desde cero! | `services/galactic-slime.jpg` |
| Fluido no newtoniano | ¿Líquido o sólido? Preparamos nuestro propio fluido con propiedades especiales. | pendiente |
| Repollímetro | ¿Ácido, base o neutro? Aprendemos a identificar las propiedades de distintos líquidos gracias a la reacción química del jugo del repollo. | pendiente |
| Burbugrafía | Experiencia recreativa donde coloreas un dibujo utilizando tu lanzador de burbujas casero. | pendiente |
| Luciérnagas electrónicas | A través de un circuito electrónico simple fabricamos nuestra propia luciérnaga. | pendiente |
| Aerodeslizador | Construyamos una nave espacial impulsada por el aire. | pendiente |
| Gelificaciones | Crearás tus propios gusanos de alginato. | pendiente |
| Pelea de robots | Construye tu propio robot a pilas y decóralo como quieras. | pendiente (aún no está en ningún plan) |
| Anillos de humo | Crea anillos de humo con una botella y un globo. | pendiente (aún no está en ningún plan) |

Sin texto todavía: Fiesta de gases, Pasta de dientes (y "Pasta de dientes experimental"), Lancha supersónica, Arcoíris viajero, Colores danzantes y Carrera de autos.

Fotos: se guardan en `public/images/experiments/<slug>.jpg` (slug = clave en `lib/experiments.ts`, p. ej. `lampara-de-lava.jpg`) y se declaran en el campo `image` del catálogo.

## Preguntas abiertas para Neuron

1. Textos de los 6 experimentos que aún no tienen ficha.
2. Fotos de cada experimento (idealmente horizontales, mínimo 480 × 224 px).
3. Nombres oficiales: los planes usan variantes ("Lámpara" / "Lámpara de lava", "Fluido no newtoneano", "Luciérnagas"); hoy se resuelven con un mapa de alias en `lib/experiments.ts`. Conviene unificarlos cuando se confirmen los nuevos planes.

## Plan de implementación

1. `npx shadcn@latest add popover` (instala `@radix-ui/react-popover`).
2. Crear `lib/experiments.ts` con el catálogo y migrar `microPlans` / `macroPlans` a slugs.
3. Crear `components/ExperimentChip.tsx` (`"use client"`): Popover controlado; abre con hover solo si `matchMedia("(hover: hover) and (pointer: fine)")`, y con foco y tap siempre.
4. Usar `ExperimentChip` dentro de `PlanCard`.
5. Verificar: `npm run lint`, `npm run build`, revisión manual en escritorio (mouse y teclado) y en móvil (tap, bordes de pantalla), y con movimiento reducido activado.

## Criterios de aceptación

- [ ] Cada experimento de cada plan abre su ficha con hover (escritorio), foco (teclado) y tap (táctil).
- [ ] `Esc` y tocar fuera cierran la ficha; nunca hay dos abiertas.
- [ ] La ficha nunca se sale de la pantalla en 360 px de ancho.
- [ ] Ningún chip ni texto pierde contraste AA.
- [ ] Todos los textos e imágenes provisorios llevan `placeholder: true`.
- [ ] Sin cambios de layout (CLS) al abrir la ficha.
