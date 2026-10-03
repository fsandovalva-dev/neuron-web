# Tasks

## Active

Ordenadas por prioridad: primero lo que deja el repo y el entorno limpios, después el desarrollo.

- [ ] **Actualizar README.md** - está desfasado respecto al código
  - Dice Next.js 14 (es 16, con React 19 y Tailwind 4); menciona `tailwind.config.ts`, que ya no existe
  - El banner apunta a `public/neuron-science-logo-colorful.jpg`, que no existe; el logo es `public/images/logo-neuron.png`
  - Faltan en la estructura: Testimonials, Pricing, Corporate, Reveal, Bubbles, HeroCluster
  - La URL de clonado apunta a `Breezlyx/neuron-web`; el remoto actual es `fsandovalva-dev/neuron-web`
- [ ] **Centralizar el enlace de WhatsApp** - el número `56976257106` está repetido en Hero, Pricing, Corporate, CTA y FAQ
  - Pasarlo a una constante compartida (p. ej. en `lib/`) con los distintos mensajes prellenados
- [ ] **Reemplazar los testimonios mock por los reales** - `components/Testimonials.tsx`, hardcodeados en el componente
  - Textos entregados el 2026-10-02 (se puede corregir solo la puntuación, no las palabras):
    - "Los niños estaban muy contentos, interesados, nunca se aburrieron, así que felicitaciones por el excelente servicio! Muy bonitas las actividades (lámpara de lava y repollímetro)." - Mamá de Elisa, 6 años
    - "Hermosa la presentación, muy didáctica y la carita de asombro de los peques lo dice todo. Luciérnagas, repollímetro y fluido no newtoniano fueron las estrellas." - Papá de Fernando, 8 años
    - "Muy interesante, entretenido y didáctico. Los niños quedaron muy contentos y una experiencia para repetir. Excelente iniciativa Felicitaciones." - Mamá de Victoria, 7 años
  - Las tres son de familias: ajustar el subtítulo "Familias y docentes que ya vivieron la experiencia"
  - Las citas son más largas que las mock; revisar el tamaño de letra de los globos
- [ ] **Implementar la ficha de experimento al pasar sobre un experimento** - en las tarjetas de Planes y Precios
  - Diseño: [docs/design/ficha-experimento-hover.md](docs/design/ficha-experimento-hover.md)
  - Se puede implementar ya con textos borrador e imágenes placeholder marcados; las preguntas abiertas están en Waiting On
- [ ] **Implementar la descarga de material educativo con formulario (región y ocupación)**
  - Diseño: [docs/design/descarga-material-educativo.md](docs/design/descarga-material-educativo.md)
  - Antes de implementar: decidir dónde se guardan las respuestas (recomendado: Supabase)

## Waiting On

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

- [x] ~~Dejar de versionar archivos que no corresponden (caché y respaldo de graphify, settings.local.json, .bak, SVG de plantilla)~~ (2026-10-02, rama `chore/limpieza-archivos-versionados`)
- [x] ~~Reparar `.claude/skills/impeccable` (symlink roto reemplazado por la copia versionada)~~ (2026-10-02)
- [x] ~~Recibir los textos de los testimonios reales~~ (2026-10-02)
- [x] ~~Instrucciones de flujo de trabajo en CLAUDE.md y backlog en TASKS.md~~ (2026-10-02, PR #14)
- [x] ~~Diseño de la ficha de experimento y de la descarga de material educativo~~ (2026-10-02, PR #14)
- [x] ~~Sincronizar `master` local tras el merge del PR #11~~ (2026-10-02)
- [x] ~~Rediseño de la landing con testimonios y animaciones de scroll (PR #11)~~ (2026-09-27)
- [x] ~~Fix de vulnerabilidades CVE en React Server Components (PR #13)~~ (2026-09-27)
