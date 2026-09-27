import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FlaskConical, GraduationCap, MessageCircle, ShieldCheck } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/56976257106?text=Hola%20Neuron,%20vengo%20de%20la%20web%20y%20quiero%20cotizar%20un%20cumpleaños!"

const trust = [
  { icon: ShieldCheck, label: "Experimentos seguros" },
  { icon: GraduationCap, label: "Educadores certificados" },
  { icon: FlaskConical, label: "Cumpleaños y eventos corporativos" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-blush">
      <div className="container mx-auto grid items-center gap-12 px-4 pb-16 pt-28 md:pb-20 md:pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-28 lg:pt-36">
        <div className="text-center lg:text-left">
          <h1 className="font-display text-balance text-5xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Cumpleaños{" "}
            <span className="inline-block -rotate-1 rounded-xl bg-spark px-3 text-ink">Científicos</span>{" "}
            que nadie va a olvidar
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink/75 md:text-xl lg:mx-0">
            Llevamos el laboratorio a tu casa. Experimentos reales, guiados por educadores certificados, para niños
            curiosos y también para equipos de trabajo.
          </p>

          <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-3 text-left sm:flex-row sm:flex-wrap sm:justify-center lg:mx-0 lg:justify-start">
            {trust.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-ink/80 md:text-base">
                <Icon className="h-5 w-5 shrink-0 text-lab-strong" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="h-auto bg-bubble-strong px-8 py-4 text-base font-bold text-white shadow-lg shadow-bubble-strong/25 transition-all hover:-translate-y-0.5 hover:bg-bubble-strong/90 hover:shadow-xl md:text-lg"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                Cotizar por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-auto px-6 py-4 text-base font-bold text-ink underline decoration-bubble-strong decoration-2 underline-offset-8 hover:bg-transparent hover:text-bubble-strong md:text-lg"
            >
              <a href="#precios">Ver planes y precios</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute -bottom-4 -left-4 h-full w-full rotate-3 rounded-3xl bg-lab" aria-hidden="true" />
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl shadow-ink/20">
            <Image
              src="/images/gallery/evento-2.jpg"
              alt="Niño sorprendido sostiene una pipeta durante un experimento en un cumpleaños científico"
              fill
              priority
              sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
