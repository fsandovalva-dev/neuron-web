# Diseño: descarga de material educativo con formulario

Estado: **propuesta de diseño, sin implementar**. Tarea en [TASKS.md](../../TASKS.md).

## Lectura del encargo

Nueva sección en una landing existente (rediseño que preserva la marca). Sirve a dos públicos: familias que quieren seguir haciendo ciencia en casa y docentes o educadores, que también pueden contratar. El objetivo de Neuron es **saber quién descarga** (región y ocupación) sin espantar con un formulario largo. Diales: variación 7, movimiento 3, densidad 4.

## Principios para esta sección

1. **Dos campos y un botón.** No se pide nombre, correo ni teléfono. Que esto se diga en la propia sección es parte de la propuesta de confianza (PRODUCT.md: confianza primero).
2. **Nunca bloquear la descarga por un error nuestro.** Si falla el registro, el archivo se entrega igual.
3. **No compite con WhatsApp.** Es una acción secundaria: va antes del FAQ y el CTA final sigue siendo el cierre de la página.

## Ubicación

Entre **Galería** y **FAQ** en `app/page.tsx`, con `id="material"` para poder enlazarla desde WhatsApp o redes.

Hoy Galería y FAQ son `bg-blush`. Una franja `bg-spark` (amarillo de marca) corta esa continuidad y se distingue de las otras composiciones de la página: no es un split texto + imagen como Empresas y CTA, sino un formulario en una sola línea.

## Composición

Escritorio (≥ 1024 px):

```
                ┌──────────┐
 ───────────────│ portada  │──────────────────────────────────────────── bg-spark
                │ del      │   Ciencia para seguir en casa
                │ material │   [Descripción breve del material, pendiente]
                │  (-3°)   │
                └──────────┘   Región            Ocupación
                               [Elige tu región ▾] [Elige una opción ▾] [ Descargar guía ]
                               Solo pedimos tu región y ocupación. Sin nombre ni correo.
 ────────────────────────────────────────────────────────────────────────────────────────
```

Móvil (< 768 px), una sola columna:

```
 ┌───────────────────────────┐ bg-spark
 │        ┌────────┐         │
 │        │portada │ (-3°)   │
 │        └────────┘         │
 │ Ciencia para seguir en    │
 │ casa                      │
 │ [Descripción pendiente]   │
 │ Región                    │
 │ [Elige tu región      ▾]  │
 │ Ocupación                 │
 │ [Elige una opción     ▾]  │
 │ [     Descargar guía    ] │
 │ Solo pedimos tu región…   │
 └───────────────────────────┘
```

- **Lo memorable es la portada:** la imagen de la portada del material, inclinada `-rotate-3`, `rounded-2xl`, con sombra `shadow-xl shadow-ink/20`. En escritorio sobresale del borde superior de la franja (`lg:-mt-16`), como una hoja apoyada sobre la página. Es lo único llamativo de la sección; todo lo demás es sobrio.
- **Grilla:** `max-w-6xl`, `lg:grid-cols-[14rem_1fr] lg:gap-12`, `py-16 md:py-20`. El texto se alinea a la izquierda en escritorio y al centro en móvil.
- **Título:** `font-display text-3xl md:text-4xl font-bold text-ink`, sin resaltar palabras sueltas.
- **Formulario:** `lg:grid-cols-[1fr_1fr_auto] gap-4 items-end`; en móvil todo apilado y el botón a ancho completo.

## Campos

Se usan `<select>` nativos (en móvil abren el selector del sistema, que es más cómodo que un menú propio), con estilo: `h-12 rounded-xl border-2 border-ink/50 bg-white px-4 text-ink`. El borde va al 50 % porque un campo blanco casi no contrasta con el amarillo; el borde tiene que alcanzar 3:1. La etiqueta va siempre visible arriba (`text-sm font-semibold text-ink`), nunca como placeholder.

**Región** (obligatoria), de norte a sur:
Arica y Parinacota, Tarapacá, Antofagasta, Atacama, Coquimbo, Valparaíso, Metropolitana de Santiago, Libertador General Bernardo O'Higgins, Maule, Ñuble, Biobío, La Araucanía, Los Ríos, Los Lagos, Aysén del General Carlos Ibáñez del Campo, Magallanes y de la Antártica Chilena, **Fuera de Chile**.

**Ocupación** (obligatoria):
- Mamá, papá o apoderado/a
- Docente o educador/a
- Estudiante
- Trabajo en una empresa
- Otra

Las opciones las debe validar Neuron (ver preguntas abiertas). Se guarda un valor estable (`apoderado`, `docente`, `estudiante`, `empresa`, `otra`), no el texto visible, para que cambiar la redacción no rompa los datos.

**Anti-spam:** un campo honeypot oculto (`name="sitio"`, `tabIndex={-1}`, `aria-hidden`). Si viene con contenido, se responde éxito sin guardar.

## Estados

| Estado | Qué se ve |
|---|---|
| Inicial | Selects con "Elige tu región" / "Elige una opción" (opción vacía deshabilitada). Botón "Descargar guía". |
| Inválido | Al enviar, error bajo cada campo vacío: "Elige tu región." / "Elige tu ocupación." Borde `border-bubble-strong`, foco al primer campo con error. Errores con `aria-describedby` y `aria-live="polite"`. |
| Enviando | Botón con `aria-busy="true"` y texto "Preparando descarga…"; los campos no se bloquean. |
| Éxito | Empieza la descarga. Bajo el botón: "Listo, tu descarga empezó." más el enlace "¿No empezó? Descárgala aquí". El botón pasa a "Descargar de nuevo". |
| Error de registro | Se entrega el archivo igual. El mensaje es el mismo que en éxito; el error se registra en el servidor y la persona no ve nada distinto. |

El botón usa `bg-bubble-strong text-white`, el mismo de los planes. El nombre de la acción ("Descargar") se mantiene igual en todo el flujo.

## Flujo técnico

```
[form] ──submit──▶ Server Action registrarDescarga(formData)
                     ├─ valida region y ocupacion contra listas permitidas
                     ├─ honeypot con contenido → éxito sin guardar
                     ├─ guarda { material, region, ocupacion, created_at }
                     └─ devuelve { ok, url }   (si guardar falla: ok igual, se registra el error)
[cliente] ◀────────  dispara la descarga de url
```

- **Mejora progresiva:** sin JavaScript, la Server Action responde con `redirect(url)` y el navegador abre el PDF igual.
- **Archivo:** `public/material/<nombre>.pdf`. Es un filtro suave: quien conozca la URL puede descargarlo sin el formulario. Basta para medir; no sirve para proteger contenido.
- **Privacidad:** no se guarda IP, nombre ni correo. Región y ocupación no identifican a una persona. El texto bajo el formulario dice exactamente qué se pide.

### Dónde guardar las respuestas (decisión pendiente)

| Opción | A favor | En contra |
|---|---|---|
| **Supabase** (recomendada) | Tabla consultable y exportable a CSV, plan gratuito, se inserta desde el servidor con una clave privada | Una cuenta y un servicio más que mantener |
| Google Sheets (API) | Neuron ve las respuestas en una planilla que ya conoce | Configurar una cuenta de servicio; límites de la API |
| Eventos de Vercel Analytics | Sin backend | Exportación limitada según el plan; datos menos flexibles |

## Preguntas abiertas para Neuron

1. ¿Cuál es el material? Nombre, PDF final e imagen de portada (vertical, mínimo 600 × 800 px).
2. ¿Las opciones de ocupación sirven, o necesitan otras (por ejemplo "Directivo/a de colegio")?
3. ¿Dónde quieren ver las respuestas (tabla arriba)?
4. ¿Se agrega un enlace en la barra de navegación? Por defecto no, para no recargarla; la sección queda enlazable con `#material`.

## Plan de implementación

1. Decidir dónde se guardan las respuestas y crear la tabla o planilla. Si es Supabase, cargar la skill `supabase-postgres-best-practices` antes de escribir SQL.
2. `lib/download-options.ts`: regiones y ocupaciones (valor + etiqueta).
3. `app/actions/registrar-descarga.ts`: Server Action con validación, honeypot y guardado.
4. `components/EducationalDownload.tsx` (`"use client"`, `useActionState`) con la sección completa.
5. Insertarla en `app/page.tsx` entre `GallerySection` y `FAQSection`.
6. Verificar: `npm run lint`, `npm run build`, flujo completo en escritorio y móvil, envío sin JS, error de guardado simulado y navegación con teclado.

## Criterios de aceptación

- [ ] No se puede enviar sin región y ocupación; los errores se anuncian y llevan el foco al campo.
- [ ] Con datos válidos, la descarga empieza y la respuesta queda guardada.
- [ ] Si el guardado falla, la descarga ocurre igual.
- [ ] Funciona sin JavaScript (redirige al PDF).
- [ ] Contraste AA en etiquetas, selects, errores y botón sobre `bg-spark`.
- [ ] El texto de privacidad describe exactamente lo que se guarda.
- [ ] El material, la portada y la descripción provisorios están marcados para reemplazo.
