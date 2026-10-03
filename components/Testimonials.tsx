import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Reveal } from "@/components/Reveal"

const testimonials = [ // Opiniones reales de familias (entregadas por Neuron; solo se corrigió la puntuación)
  {
    id: 1,
    author: "Mamá de Elisa",
    child: "Elisa, 6 años",
    quote:
      "Los niños estaban muy contentos, interesados, nunca se aburrieron, así que ¡felicitaciones por el excelente servicio! Muy bonitas las actividades (lámpara de lava y repollímetro).",
    bubble: "bg-bubble/20 shadow-bubble-strong/15",
    tail: "bg-bubble/20",
    avatar: "bg-bubble-strong text-white",
    layout: "lg:-rotate-1",
  },
  {
    id: 2,
    author: "Papá de Fernando",
    child: "Fernando, 8 años",
    quote:
      "Hermosa la presentación, muy didáctica y la carita de asombro de los peques lo dice todo. Luciérnagas, repollímetro y fluido no newtoniano fueron las estrellas.",
    bubble: "bg-spark/40 shadow-ink/10",
    tail: "bg-spark/40",
    avatar: "bg-spark text-ink",
    layout: "lg:mt-10 lg:rotate-1",
  },
  {
    id: 3,
    author: "Mamá de Victoria",
    child: "Victoria, 7 años",
    quote:
      "Muy interesante, entretenido y didáctico. Los niños quedaron muy contentos y una experiencia para repetir. Excelente iniciativa. Felicitaciones.",
    bubble: "bg-lab/25 shadow-lab-strong/15",
    tail: "bg-lab/25",
    avatar: "bg-lab-strong text-white",
    layout: "lg:-rotate-1",
  },
]

export function TestimonialsSection() { // Componente de la sección de opiniones
  return (
    <section id="opiniones" className="py-20 px-4 bg-sky">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4 text-balance">
            Lo que{" "}
            <span className="inline-block -rotate-1 rounded-xl bg-spark px-3">Dicen</span>{" "}
            de Nosotros
          </h2>
          <p className="text-lg md:text-xl text-ink/75 max-w-2xl mx-auto text-pretty">
            Familias que ya vivieron la experiencia
          </p>
        </div>

        {/* Globos de diálogo */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.id} variant="pop" delay={i * 0.12}>
            <figure
              className={`transition-transform duration-500 ease-out motion-safe:hover:rotate-0 motion-safe:hover:-translate-y-1 ${testimonial.layout}`}
            >
              <Card
                className={`relative gap-0 overflow-visible rounded-2xl border-0 py-0 shadow-lg ${testimonial.bubble}`}
              >
                <CardContent className="px-7 pt-8 pb-9">
                  <blockquote className="font-display text-lg md:text-xl font-medium leading-snug text-ink text-pretty">
                    “{testimonial.quote}”
                  </blockquote>
                </CardContent>
                {/* Cola del globo */}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-5 left-10 size-5 [clip-path:polygon(0_0,100%_0,0_100%)] ${testimonial.tail}`}
                />
              </Card>

              <CardFooter className="mt-5 gap-3 px-2">
                <span
                  aria-hidden="true"
                  className={`grid size-12 shrink-0 place-items-center rounded-full font-display text-lg font-bold shadow-md shadow-ink/15 ${testimonial.avatar}`}
                >
                  {testimonial.child.charAt(0)}
                </span>
                <figcaption>
                  <p className="font-display text-lg font-bold leading-tight text-ink">{testimonial.author}</p>
                  <p className="text-sm text-ink/75">{testimonial.child}</p>
                </figcaption>
              </CardFooter>
            </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
