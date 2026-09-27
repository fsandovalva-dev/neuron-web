import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

// TODO: texto provisorio. La oferta para empresas aún no está definida (formatos, precios, cobertura); reemplazar al confirmarla.
const CORPORATE_WHATSAPP_URL =
  "https://wa.me/56976257106?text=Hola%20Neuron,%20vengo%20de%20la%20web%20y%20quiero%20cotizar%20una%20actividad%20para%20mi%20empresa!"

export function CorporateSection() {
  return (
    <section id="empresas" className="bg-ink px-4 py-20 text-blush">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <h2 className="font-display text-balance text-4xl font-bold leading-tight md:text-5xl">
            ¿Un evento para tu equipo? La ciencia también es cosa de{" "}
            <span className="inline-block rotate-1 rounded-xl bg-lab px-3 text-ink">grandes</span>
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-blush/80 md:text-xl">
            Llevamos experimentos guiados por educadores a jornadas de integración, celebraciones y días de la
            familia en tu empresa. Un rato para trabajar en equipo, sorprenderse y volver a jugar.
          </p>
        </div>

        <div className="lg:justify-self-end">
          <p className="mb-4 text-blush/80">Cuéntanos qué tienes en mente y armamos una propuesta a la medida.</p>
          <Button
            asChild
            size="lg"
            className="h-auto w-full bg-spark px-8 py-4 text-base font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-spark/90 sm:w-auto md:text-lg"
          >
            <a href={CORPORATE_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              Cotizar para mi empresa
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
