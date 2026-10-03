// Catálogo de experimentos para la ficha que se abre en las tarjetas de Planes y Precios.
// Textos entregados por Neuron (2026-10-03); solo se corrigió la puntuación.
// `image` es opcional: sin foto, la ficha muestra solo el texto. Para agregar una, guardarla en
// public/images/experiments/<slug>.jpg y declararla aquí.
export type Experiment = {
  name: string
  summary: string
  image?: string
}

export const experiments = {
  "lampara-de-lava": {
    name: "Lámpara de lava",
    summary: "A través de una reacción química, los participantes crearán una pequeña lámpara de lava.",
  },
  slime: {
    name: "Slime",
    summary: "¡Síntesis de slime desde cero!",
    image: "/images/services/galactic-slime.jpg",
  },
  "fluido-no-newtoniano": {
    name: "Fluido no newtoniano",
    summary: "¿Líquido o sólido? Preparamos nuestro propio fluido con propiedades especiales.",
  },
  repollimetro: {
    name: "Repollímetro",
    summary:
      "¿Ácido, base o neutro? Aprendemos a identificar las propiedades de distintos líquidos gracias a la reacción química del jugo del repollo.",
  },
  burbugrafia: {
    name: "Burbugrafía",
    summary: "Experiencia recreativa donde coloreas un dibujo utilizando tu lanzador de burbujas casero.",
  },
  "luciernagas-electronicas": {
    name: "Luciérnagas electrónicas",
    summary: "A través de un circuito electrónico simple fabricamos nuestra propia luciérnaga.",
  },
  aerodeslizador: {
    name: "Aerodeslizador",
    summary: "Construyamos una nave espacial impulsada por el aire.",
  },
  "pelea-de-robots": {
    name: "Pelea de robots",
    summary: "Construye tu propio robot a pilas y decóralo como quieras.",
  },
  gelificaciones: {
    name: "Gelificaciones",
    summary: "Crearás tus propios gusanos de alginato.",
  },
  "anillos-de-humo": {
    name: "Anillos de humo",
    summary: "Crea anillos de humo con una botella y un globo.",
  },
} satisfies Record<string, Experiment>

// Cómo aparece cada experimento en los planes (hay variantes del mismo nombre) -> ficha del catálogo.
const labels: Record<string, keyof typeof experiments> = {
  "Lámpara de lava": "lampara-de-lava",
  Lámpara: "lampara-de-lava",
  Slime: "slime",
  "Fluido no newtoniano": "fluido-no-newtoniano",
  "Fluido no newtoneano": "fluido-no-newtoniano",
  Repollímetro: "repollimetro",
  Burbugrafía: "burbugrafia",
  "Luciérnagas electrónicas": "luciernagas-electronicas",
  Luciérnagas: "luciernagas-electronicas",
  Aerodeslizador: "aerodeslizador",
  "Pelea de robots": "pelea-de-robots",
  Gelificaciones: "gelificaciones",
  "Anillos de humo": "anillos-de-humo",
}

export function findExperiment(label: string): Experiment | undefined {
  const slug = labels[label]
  return slug ? experiments[slug] : undefined
}
