import Image from "next/image"
import { FlaskConical } from "lucide-react"

// Foto que enviará Neuron: guardarla en public/images/experiments/pasta-de-dientes-de-elefante.jpg
// (horizontal, idealmente 4:3) y poner aquí su ruta. Sin foto, el aviso se muestra solo con el texto.
// Diseño: docs/design/aviso-pasta-de-dientes.md
const IMAGE: string | undefined = undefined

const TEXT = "¡Pasta de dientes de elefante incluida en TODOS los cumpleaños!"

export function ToothpasteBanner() {
  if (!IMAGE) {
    return (
      <div className="mb-12 flex items-center justify-center gap-3 rounded-2xl bg-spark p-6 text-center">
        <FlaskConical className="h-7 w-7 shrink-0 text-ink" aria-hidden="true" />
        <p className="font-display text-2xl font-bold text-ink text-balance">{TEXT}</p>
      </div>
    )
  }

  // La foto sobresale de la banda en escritorio, como espuma que no cabe.
  return (
    <div className="mb-12 grid items-center gap-5 rounded-2xl bg-spark p-5 text-center md:mt-16 md:mb-20 md:grid-cols-[auto_1fr] md:gap-10 md:py-6 md:pr-10 md:pl-10 md:text-left">
      <div className="relative aspect-[4/3] w-full -rotate-2 overflow-hidden rounded-2xl border-4 border-white shadow-lg shadow-ink/20 md:-my-14 md:w-56 md:-rotate-3">
        <Image src={IMAGE} alt="" fill sizes="(min-width: 768px) 224px, 100vw" className="object-cover" />
      </div>
      <p className="font-display text-2xl font-bold text-ink text-balance md:text-3xl">{TEXT}</p>
    </div>
  )
}
