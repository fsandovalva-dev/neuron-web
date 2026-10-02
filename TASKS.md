# Tasks

## Active

- [ ] **Reemplazar el texto de los testimonios por los reales** - `components/Testimonials.tsx`
  - Bloqueado: faltan los textos de Neuron (ver Waiting On). Por cada uno: nombre, rol (ej. "Mamá de Sofía, 8 años") y cita de máximo 3 líneas
- [ ] **Implementar la ficha de experimento al pasar sobre un experimento** - en las tarjetas de Planes y Precios
  - Diseño: [docs/design/ficha-experimento-hover.md](docs/design/ficha-experimento-hover.md)
  - Se puede implementar ya con textos borrador e imágenes placeholder marcados; las preguntas abiertas están en Waiting On
- [ ] **Implementar la descarga de material educativo con formulario (región y ocupación)**
  - Diseño: [docs/design/descarga-material-educativo.md](docs/design/descarga-material-educativo.md)
  - Antes de implementar: decidir dónde se guardan las respuestas (recomendado: Supabase)
- [ ] **Resolver el borrado pendiente de `.claude/skills/impeccable`** - git lo marca como eliminado sin commitear
  - Según `skills-lock.json`, la skill vive en `.agents/skills/impeccable`; decidir si se commitea el borrado o se restaura
- [ ] **Dejar de versionar `graphify-out/cache/`** - está en `.gitignore` pero se commiteó antes de la regla, así que cada `graphify update` ensucia el árbol
  - `git rm -r --cached graphify-out/cache` en una rama `chore/`
- [ ] **Actualizar README.md** - está desfasado respecto al código
  - Dice Next.js 14 (es 16, con React 19 y Tailwind 4); menciona `tailwind.config.ts`, que ya no existe
  - Faltan en la estructura: Testimonials, Pricing, Corporate, Reveal, Bubbles, HeroCluster
  - La URL de clonado apunta a `Breezlyx/neuron-web`; el remoto actual es `fsandovalva-dev/neuron-web`
- [ ] **Centralizar el enlace de WhatsApp** - el número `56976257106` está repetido en Hero, Pricing, Corporate, CTA y FAQ
  - Pasarlo a una constante compartida (p. ej. en `lib/`) con los distintos mensajes prellenados

## Waiting On

- [ ] **Testimonios reales** - de Neuron, since 2026-10-02; los 3 de `components/Testimonials.tsx` son mock ("Nombre Apellido")
- [ ] **Datos de los experimentos** - de Neuron, since 2026-10-02
  - Nombres oficiales (hay variantes: "Lámpara" / "Lámpara de lava", "Fluido no newtoniano" / "newtoneano", "Luciérnagas" / "Luciérnagas electrónicas")
  - ¿"Pasta de dientes experimental" es la misma que "Pasta de dientes de elefante"?
  - Una foto por experimento y validación de los textos borrador
- [ ] **Material educativo** - de Neuron, since 2026-10-02: nombre, PDF final, imagen de portada y validación de las opciones de ocupación
- [ ] **Precios definitivos** - de Neuron; los planes de `components/Pricing.tsx` usan valores provisorios
- [ ] **Oferta para empresas** - de Neuron; formatos, precios y cobertura (TODO en `components/Corporate.tsx`)
- [ ] **Cobertura geográfica y rango de edades** - de Neuron; pendientes según PRODUCT.md

## Someday

- [ ] **SEO social** - agregar Open Graph / Twitter card con imagen en `app/layout.tsx` (hoy solo hay title y description)
- [ ] **Revisión de accesibilidad mínima** - contraste, navegación por teclado y `prefers-reduced-motion` en las animaciones (Framer Motion, Reveal, Bubbles)

## Done

- [x] ~~Instrucciones de flujo de trabajo en CLAUDE.md y backlog en TASKS.md~~ (2026-10-02, rama `docs/flujo-trabajo-backlog-disenos`)
- [x] ~~Diseño de la ficha de experimento y de la descarga de material educativo~~ (2026-10-02, rama `docs/flujo-trabajo-backlog-disenos`)
- [x] ~~Sincronizar `master` local tras el merge del PR #11~~ (2026-10-02)
- [x] ~~Rediseño de la landing con testimonios y animaciones de scroll (PR #11)~~ (2026-09-27)
- [x] ~~Fix de vulnerabilidades CVE en React Server Components (PR #13)~~ (2026-09-27)
