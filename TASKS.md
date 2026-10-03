# Tasks

## Active

Ordenadas por prioridad: primero lo que deja el repo y el entorno limpios, después el desarrollo.

- [ ] **Conectar las fotos de los experimentos** - siguiente paso (el usuario las deja el 2026-10-04)
  - Van en `public/images/experiments/` (carpeta ya creada en la laptop). Nombres sugeridos = slugs de `lib/experiments.ts` (`lampara-de-lava.jpg`, `repollimetro.jpg`...); si llegan con otro nombre, renombrar
  - Declarar cada una en el campo `image` del catálogo, revisar el encuadre en la ficha (proporción 15:7) y publicar
- [ ] **Implementar la descarga de material educativo con formulario (región y ocupación)**
  - Diseño: [docs/design/descarga-material-educativo.md](docs/design/descarga-material-educativo.md)
  - Destino de las respuestas: evaluado en el diseño; recomendado **Google Sheets** (Neuron ve el reporte en una planilla)
  - Pendiente del usuario: aprobar Google Sheets, crear la planilla en la cuenta de Neuron (Claude entrega el script de Apps Script), decidir si se registra el origen de la visita
  - Bloqueado también por el PDF del material (Waiting On)

## Waiting On

- [ ] **Nuevos precios y contenido de los planes** - de Neuron, since 2026-10-03. Pedido inicial: Micro $170.000 con "los primeros dos" experimentos y Macro $220.000 con "los 3 experimentos de cada uno"
  - Falta confirmar si cambian solo los precios o también qué experimentos y planes muestra cada pestaña. No tocar `components/Pricing.tsx` hasta tener la confirmación
  - Al rehacer los planes: incluir Pelea de robots y Anillos de humo si corresponde (ya tienen ficha) y pasar los experimentos a slugs de `lib/experiments.ts`
- [ ] **Dominio de producción** - since 2026-10-02, aún no se compra. Al tenerlo: corregir el enlace del README (`neuron-web.vercel.app` es la app de otra persona) y reemplazar `metadataBase` en `app/layout.tsx` (hoy usa el dominio de producción de Vercel)
- [ ] **Datos de los experimentos** - de Neuron, since 2026-10-02
  - Fotos: el usuario las trae el 2026-10-04 (ver Active); hoy solo Slime tiene foto
  - Textos que faltan: Fiesta de gases, Pasta de dientes (y "experimental"), Lancha supersónica, Arcoíris viajero, Colores danzantes, Carrera de autos
  - Nombres oficiales para unificar las variantes de los planes al rehacerlos
- [ ] **Material educativo** - de Neuron, since 2026-10-02: nombre, PDF final, imagen de portada y validación de las opciones de ocupación
- [ ] **Oferta para empresas** - de Neuron; formatos, precios y cobertura (TODO en `components/Corporate.tsx`)
- [ ] **Cobertura geográfica y rango de edades** - de Neuron; pendientes según PRODUCT.md

## Someday

- [ ] **Vulnerabilidades restantes en la cadena de ESLint** - 5 altas (`braces`, `micromatch`, `fast-glob`) vía `eslint-config-next`; solo afectan al lint local. Revisar cuando salga un `eslint-config-next` que las corrija. Revisado 2026-10-03: seguimos en la última versión (16.3.8) y `braces` no tiene versión corregida

## Done

- [x] ~~Evaluar dónde guardar las respuestas del formulario de descarga (recomendado Google Sheets)~~ (2026-10-03, PR #29)
- [x] ~~Ficha de experimento en Planes (hover, toque y teclado) con los textos de Neuron para 8 experimentos~~ (2026-10-03, PR #28)
- [x] ~~Revisión de accesibilidad mínima: Lighthouse de 92 a 100 (galería operable con teclado, contraste AA, movimiento reducido en scroll y transiciones CSS)~~ (2026-10-03, PR #27)
- [x] ~~SEO social: Open Graph y tarjeta de X con imagen generada (`app/opengraph-image.tsx`, JPEG de 77 KB para que WhatsApp la muestre)~~ (2026-10-03, PR #26)
- [x] ~~Mensaje de WhatsApp por plan: cada "Cotizar" prellena el plan y su duración~~ (2026-10-03, PR #25)
- [x] ~~Logo con `sizes`, 0 warnings de lint y vista ampliada de la galería optimizada (de hasta 7,8 MB a ~170 KB por foto)~~ (2026-10-03, PR #24)
- [x] ~~Contenido visible aunque el JavaScript no cargue (`Reveal` y tarjetas de Planes visibles desde el servidor)~~ (2026-10-02, PR #23)
- [x] ~~Permitir abrir el servidor de desarrollo desde otro equipo (`allowedDevOrigins` para 192.168.x.x y Tailscale)~~ (2026-10-02, PR #22)
- [x] ~~Actualizar Next.js a 16.3.8 por vulnerabilidades críticas (DoS, postcss, sharp) y alinear eslint-config-next~~ (2026-10-02, PR #21)
- [x] ~~Reemplazar los testimonios mock por los reales (Elisa, Fernando y Victoria)~~ (2026-10-02, PR #20)
- [x] ~~Excluir `.agents/`, `.claude/` y `graphify-out/` de ESLint~~ (2026-10-02, PR #19)
- [x] ~~Centralizar el enlace de WhatsApp en `lib/whatsapp.ts`~~ (2026-10-02, PR #18)
- [x] ~~Actualizar README.md (stack, Node 20.9+, logo, estructura, secciones, URL del repo, flujo de trabajo)~~ (2026-10-02, PR #16 y #17)
- [x] ~~Dejar de versionar archivos que no corresponden (caché y respaldo de graphify, settings.local.json, .bak, SVG de plantilla)~~ (2026-10-02, PR #15)
- [x] ~~Reparar `.claude/skills/impeccable` (symlink roto reemplazado por la copia versionada)~~ (2026-10-02)
- [x] ~~Recibir los textos de los testimonios reales~~ (2026-10-02)
- [x] ~~Instrucciones de flujo de trabajo en CLAUDE.md y backlog en TASKS.md~~ (2026-10-02, PR #14)
- [x] ~~Diseño de la ficha de experimento y de la descarga de material educativo~~ (2026-10-02, PR #14)
- [x] ~~Sincronizar `master` local tras el merge del PR #11~~ (2026-10-02)
- [x] ~~Rediseño de la landing con testimonios y animaciones de scroll (PR #11)~~ (2026-09-27)
- [x] ~~Fix de vulnerabilidades CVE en React Server Components (PR #13)~~ (2026-09-27)
