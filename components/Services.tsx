import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Beaker, FlaskConical, Dna } from "lucide-react" //Importar iconos necesarios

const experiments = [ // Datos de los experimentos
  {
    id: 1,
    title: "Slime Galáctico",
    description: "Crea tu propia masa viscosa, brillante y de otro planeta. ¡El favorito de todos!",
    badge: "Más Popular",
    badgeColor: "bg-bubble-strong text-white hover:bg-bubble-strong/90",
    icon: Beaker,
    iconColor: "text-bubble-strong",
    image: "/images/services/galactic-slime.jpg",
  },
  {
    id: 2,
    title: "Pasta de Dientes de Elefante",
    description: "Una reacción química gigante y espumosa que sale disparada hacia el cielo.",
    badge: "Asombroso",
    badgeColor: "bg-spark text-ink hover:bg-spark/90",
    icon: FlaskConical,
    iconColor: "text-ink",
    image: "/images/services/elephant-toothpaste.jpg",
  },
  {
    id: 3,
    title: "Extracción de ADN",
    description: "Conviértete en un científico real aislando el código de la vida de las frutas.",
    badge: "Educativo",
    badgeColor: "bg-lab text-ink hover:bg-lab/90",
    icon: Dna,
    iconColor: "text-lab-strong",
    image: "/images/services/dna-extraction.jpg",
  },
]

export function ServicesSection() { // Componente de la sección de servicios
  return (
    <section id="servicios" className="py-20 px-4 bg-blush">
      <div className="max-w-7xl mx-auto">
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

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiments.map((experiment) => {
            const Icon = experiment.icon
            return (
              <Card
                key={experiment.id}
                className="group overflow-hidden rounded-2xl border-0 bg-white py-0 shadow-md shadow-ink/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image Container with Icon Overlay */}
                <div className="relative h-48 overflow-hidden bg-sky">
                  <Image
                    src={experiment.image}
                    alt={experiment.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4 rounded-full bg-white p-3 shadow-md">
                    <Icon className={`w-6 h-6 ${experiment.iconColor}`} aria-hidden="true" />
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={`${experiment.badgeColor} border-0 shadow-md px-3 py-1 font-semibold`}>
                      {experiment.badge}
                    </Badge>
                  </div>
                </div>

                {/* Card Content */}
                <CardHeader className="pt-6">
                  <CardTitle className="font-display text-2xl font-bold text-ink">
                    {experiment.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-base text-ink/75 leading-relaxed">
                    {experiment.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
