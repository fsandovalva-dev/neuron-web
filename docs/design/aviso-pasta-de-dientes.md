# Aviso de la pasta de dientes de elefante con imagen

Estado: implementado sin imagen (2026-10-03). Falta la foto de Neuron.

## Lectura del encargo

Aviso dentro de **Planes y Precios** (`components/ToothpasteBanner.tsx`, entre las pestañas Micro/Macro y las tarjetas) para padres que comparan planes. Los planes nuevos ya no listan la pasta de dientes como experimento, así que el aviso es el único lugar que dice que viene en todos los cumpleaños. Neuron enviará una imagen para acompañarlo.

## Idea

La pasta de dientes de elefante es el gran final de la fiesta: una erupción de espuma. La foto es lo memorable del aviso, todo lo demás se queda quieto:

- Foto con borde blanco grueso (como una foto revelada), inclinada -3°, con sombra teñida de `ink`. En escritorio sobresale de la banda por arriba y por abajo, como si la espuma no cupiera.
- El texto no cambia: "¡Pasta de dientes de elefante incluida en TODOS los cumpleaños!" en `font-display`. Con foto se alinea a la izquierda, junto a ella; sin foto queda centrado con el ícono del matraz, como hoy.
- Sin animaciones nuevas: la banda ya aparece con la sección.

## Layout

Escritorio (md+), con foto:

```
            ┌───────────┐
┌───────────│           │──────────────────────────────────────┐
│  spark    │   foto    │  ¡Pasta de dientes de elefante       │
│           │  (-3°)    │  incluida en TODOS los cumpleaños!   │
└───────────│           │──────────────────────────────────────┘
            └───────────┘
```

Móvil (360 px), con foto: la foto arriba, a todo el ancho de la banda y sin sobresalir (en una columna estrecha el desborde choca con las pestañas); el texto centrado debajo.

```
┌─────────────────────┐
│ ┌─────────────────┐ │
│ │      foto       │ │
│ └─────────────────┘ │
│  ¡Pasta de dientes  │
│  de elefante ...!   │
└─────────────────────┘
```

Sin foto: igual que hoy (ícono + texto centrados).

## Detalles

- Colores: banda `bg-spark`, texto `text-ink`, borde de la foto `border-white`, sombra `shadow-ink/20`. Nada nuevo fuera de los tokens.
- Foto: `next/image`, proporción 4:3 con `object-cover`, ancho `w-56` en escritorio. El margen superior de la banda crece en escritorio para que la foto no tape las pestañas.
- Accesibilidad: la foto es decorativa respecto del texto (`alt=""`), porque el texto ya dice lo que muestra. La inclinación no se anima, así que no depende de `prefers-reduced-motion`.

## Para conectar la imagen

Guardarla como `public/images/experiments/pasta-de-dientes-de-elefante.jpg` (horizontal, idealmente 4:3 y mínimo 640 × 480 px) y declarar la ruta en `IMAGE` de `components/ToothpasteBanner.tsx`.

## Pregunta abierta

¿Neuron quiere sumar una frase que explique qué es el experimento? Si llega, va en una línea `text-ink/75` bajo el título, solo cuando hay foto.
