# 🧠 Neuron - Cumpleaños Científicos Inolvidables

![Logo de Neuron](/public/images/logo-neuron.png)

> **MVP (Producto Mínimo Viable)** para el sitio web de Neuron, una empresa que lleva la magia de la ciencia y los experimentos a cumpleaños infantiles y eventos de empresa.

[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=neuron-web)](https://neuron-web.vercel.app/)
*Haz clic para ver el despliegue en vivo.*

---

## 📖 Sobre el Proyecto

Este proyecto es el sitio web de presentación y punto de contacto principal para **Neuron**. El objetivo del MVP es validar la propuesta de valor, mostrar los servicios ofrecidos, transmitir confianza a los padres y facilitar el contacto directo para cotizaciones por WhatsApp.

El diseño es vibrante, divertido y profesional, con los colores del logo (rosa, celeste y amarillo) y elementos visuales relacionados con la ciencia. El detalle de público, marca y principios está en [PRODUCT.md](PRODUCT.md).

### ✨ Secciones de la página

* **Hero:** propuesta de valor, llamado a cotizar y un racimo de fotos en burbujas que se mueven al hacer scroll.
* **Experimentos:** el experimento destacado y dos secundarios, con foto y descripción.
* **Opiniones:** testimonios de familias en globos de diálogo.
* **Planes y Precios:** planes Micro (1 hora) y Macro (2 horas) en pestañas. Cada experimento con descripción abre una ficha (al pasar el mouse, al tocarlo o con el teclado) y cada botón "Cotizar" prellena el plan en WhatsApp.
* **Empresas:** propuesta para eventos corporativos.
* **Galería:** fotos reales de eventos pasados con vista ampliada (lightbox).
* **Preguntas Frecuentes:** acordeón con las dudas comunes de los padres.
* **Llamado a la Acción final:** cierre con botón a WhatsApp.

Además:

* **Contacto en todo el sitio:** botón de cotizar en la barra de navegación, botón flotante de WhatsApp y enlaces a WhatsApp con mensajes prellenados según la sección.
* **Diseño responsivo:** adaptado a móvil y escritorio, con menú lateral en móvil.
* **Animaciones con criterio:** entradas al hacer scroll y burbujas decorativas, que respetan la preferencia de movimiento reducido del sistema.
* **Accesibilidad:** enlace para saltar al contenido, foco visible, galería y fichas operables con teclado, contraste AA, movimiento reducido respetado y contenido visible aunque el JavaScript no cargue (Lighthouse 100).
* **SEO y redes:** título, descripción, palabras clave, favicon e imagen para compartir el enlace (Open Graph), liviana para que WhatsApp muestre la vista previa.

---

## 🛠️ Stack Tecnológico

* **Framework:** [Next.js 16 (App Router)](https://nextjs.org/) con [React 19](https://react.dev/).
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/).
* **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/). Los colores de marca y las tipografías se definen como tokens en `app/globals.css` (no hay `tailwind.config.ts`).
* **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/) sobre [Radix UI](https://www.radix-ui.com/).
* **Animaciones:** [Framer Motion](https://motion.dev/) y `tw-animate-css`.
* **Iconos:** [Lucide React](https://lucide.dev/).
* **Tipografías:** Bricolage Grotesque (títulos) y Figtree (texto), vía `next/font`.
* **Despliegue:** [Vercel](https://vercel.com/).

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

### Prerrequisitos

* [Node.js](https://nodejs.org/) 20.9 o superior (requisito de Next.js 16).
* npm (incluido con Node.js).

### Pasos

1.  **Clona el repositorio:**

    ```bash
    git clone https://github.com/fsandovalva-dev/neuron-web.git
    cd neuron-web
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    ```

3.  **Ejecuta el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

4.  **Abre en tu navegador:**

    Visita [http://localhost:3000](http://localhost:3000). El sitio se actualiza automáticamente mientras editas el código.

    Para verlo desde otro equipo o celular de la misma red (o por Tailscale), abre `http://<IP-de-tu-equipo>:3000`.

### Otros comandos

| Comando | Qué hace |
|---|---|
| `npm run build` | Compila la versión de producción |
| `npm run start` | Sirve la versión compilada |
| `npm run lint` | Revisa el código con ESLint |

---

## 📂 Estructura del Proyecto

```
neuron-web/
├── app/
│   ├── layout.tsx          # Layout raíz: tipografías, metadatos, navbar y botón de WhatsApp
│   ├── page.tsx            # Página de inicio con todas las secciones
│   ├── globals.css         # Tailwind y tokens de diseño (colores de marca, tipografías)
│   ├── opengraph-image.tsx # Imagen para compartir el enlace (se genera en el build)
│   └── icon.png            # Favicon
├── components/
│   ├── ui/                 # Componentes base de shadcn/ui
│   ├── Navbar.tsx          # Barra de navegación con menú lateral en móvil
│   ├── Hero.tsx            # Portada
│   ├── HeroCluster.tsx     # Fotos en burbujas del hero, con movimiento al hacer scroll
│   ├── Services.tsx        # Experimentos
│   ├── Testimonials.tsx    # Opiniones
│   ├── Pricing.tsx         # Planes y precios
│   ├── ExperimentChip.tsx  # Experimento de un plan, con su ficha
│   ├── Corporate.tsx       # Eventos para empresas
│   ├── Gallery.tsx         # Galería con lightbox
│   ├── FAQ.tsx             # Preguntas frecuentes
│   ├── CTA.tsx             # Llamado a la acción final
│   ├── WhatsAppButton.tsx  # Botón flotante de contacto
│   ├── Reveal.tsx          # Animación de entrada al hacer scroll
│   └── Bubbles.tsx         # Burbujas decorativas de fondo
├── lib/
│   ├── experiments.ts      # Textos y fotos de las fichas de experimentos
│   ├── whatsapp.ts         # Número y mensajes prellenados de WhatsApp
│   └── utils.ts            # Utilidades (cn)
├── public/images/          # Logo, galería, servicios y fotos de experimentos (experiments/)
├── next.config.ts          # Permite abrir el servidor de desarrollo desde otro equipo de la red
├── docs/design/            # Especificaciones de diseño de features
├── PRODUCT.md              # Público, marca y principios del producto
├── TASKS.md                # Backlog del proyecto
└── CLAUDE.md               # Instrucciones de trabajo para Claude Code
```

---

## 🤝 Contribución y Flujo de Trabajo

Este proyecto sigue un flujo de trabajo de **Feature Branches**:

1.  La rama `master` contiene el código de producción estable.
2.  Cada tarea se desarrolla en su propia rama creada desde `master`: `<tipo>/<descripcion-corta>`, con tipo `feature`, `fix`, `docs`, `style`, `refactor` o `chore`.
3.  Los commits usan un prefijo convencional y descripción en español (por ejemplo `feat: agrega ficha de experimentos`).
4.  Los cambios se integran a `master` mediante **Pull Requests** en GitHub.

Las tareas pendientes están en [TASKS.md](TASKS.md). El flujo completo está en [CLAUDE.md](CLAUDE.md).

---

## 📄 Licencia

Este proyecto es privado y propiedad de Neuron. Todos los derechos reservados.
