import Image from "next/image"
import { Reveal } from "@/components/Reveal"
import { Bubbles } from "@/components/Bubbles"
import { Badge } from "@/components/ui/badge"
import { Beaker, FlaskConical, Dna } from "lucide-react" //Importar iconos necesarios

const experiments = [ // Datos de los experimentos
  {
    id: 1,
    title: "Slime Galáctico",
    description: "Crea tu propia masa viscosa, brillante y de otro planeta. ¡El favorito de todos!",
    badge: "Más Popular",
    badgeColor: "bg-spark text-ink hover:bg-spark/90",
    icon: Beaker,
    panel: "bg-bubble-strong text-white",
    text: "text-white/90",
    tile: "bg-white text-bubble-strong",
    image: "/images/services/galactic-slime.jpg",
  },
  {
    id: 2,
    title: "Pasta de Dientes de Elefante",
    description: "Una reacción química gigante y espumosa que sale disparada hacia el cielo.",
    badge: "Asombroso",
    badgeColor: "bg-bubble-strong text-white hover:bg-bubble-strong/90",
    icon: FlaskConical,
    panel: "bg-spark text-ink",
    text: "text-ink/80",
    tile: "bg-ink text-spark",
    image: "/images/services/elephant-toothpaste.jpg",
  },
  {
    id: 3,
    title: "Extracción de ADN",
    description: "Conviértete en un científico real aislando el código de la vida de las frutas.",
    badge: "Educativo",
    badgeColor: "bg-ink text-white hover:bg-ink/90",
    icon: Dna,
    panel: "bg-lab text-ink",
    text: "text-ink/80",
    tile: "bg-ink text-lab",
    image: "/images/services/dna-extraction.jpg",
  },
]

export function ServicesSection() { // Componente de la sección de servicios
  const [lead, ...others] = experiments

  return (
    <section id="servicios" className="relative overflow-hidden py-20 px-4 bg-blush">
      <Bubbles variant={1} light />
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4 text-balance">
            Nuestros{" "}
            <span className="inline-block -rotate-1 rounded-xl bg-spark px-3">Experimentos</span>
          </h2>
          <p className="text-lg md:text-xl text-ink/75 max-w-2xl mx-auto text-pretty">
            Diversión explosiva y educativa
          </p>
        </div>

        {/* Experimento estrella + dos secundarios */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:grid-rows-2">
          {/* Destacado */}
          <Reveal variant="left" className="lg:col-span-3 lg:row-span-2">
          <article
            className={`group flex h-full flex-col overflow-hidden rounded-2xl shadow-lg shadow-ink/15 transition-shadow duration-300 ${lead.panel}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-80 lg:flex-1">
              <Image
                src={lead.image}
                alt={lead.title}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <Badge className={`${lead.badgeColor} absolute top-4 right-4 border-0 px-3 py-1 font-semibold shadow-md`}>
                {lead.badge}
              </Badge>
            </div>
            <div className="flex items-start gap-4 p-6 md:p-8">
              <span className={`grid size-14 shrink-0 place-items-center rounded-2xl shadow-md shadow-ink/20 ${lead.tile}`}>
                <lead.icon className="size-7" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-3xl font-bold leading-tight text-balance md:text-4xl">{lead.title}</h3>
                <p className={`mt-2 max-w-md text-lg leading-relaxed text-pretty ${lead.text}`}>{lead.description}</p>
              </div>
            </div>
          </article>
          </Reveal>

          {/* Secundarios */}
          {others.map((experiment, i) => {
            const Icon = experiment.icon
            return (
              <Reveal key={experiment.id} variant="right" delay={0.15 + i * 0.15} className="lg:col-span-2">
              <article
                className={`group flex h-full flex-col overflow-hidden rounded-2xl shadow-md shadow-ink/10 transition-shadow duration-300 sm:flex-row ${experiment.panel}`}
              >
                <div className="relative h-48 shrink-0 overflow-hidden sm:h-auto sm:w-2/5">
                  <Image
                    src={experiment.image}
                    alt={experiment.title}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 640px) 40vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-3 p-6">
                  <div className="flex items-center gap-3">
                    <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${experiment.tile}`}>
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <Badge className={`${experiment.badgeColor} border-0 px-3 py-1 font-semibold`}>
                      {experiment.badge}
                    </Badge>
                  </div>
                  <h3 className="font-display text-2xl font-bold leading-tight text-balance">{experiment.title}</h3>
                  <p className={`leading-relaxed text-pretty ${experiment.text}`}>{experiment.description}</p>
                </div>
              </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
