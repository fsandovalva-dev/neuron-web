import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Reveal } from "@/components/Reveal"

const testimonials = [ // Datos de las opiniones (mock, reemplazar por textos reales)
  {
    id: 1,
    name: "Nombre Apellido",
    role: "Mamá de Sofía, 8 años",
    quote: "Texto de opinión de prueba. Reemplazar por el testimonio real del cliente.",
    bubble: "bg-bubble/20 shadow-bubble-strong/15",
    tail: "bg-bubble/20",
    avatar: "bg-bubble-strong text-white",
    layout: "md:-rotate-1",
  },
  {
    id: 2,
    name: "Nombre Apellido",
    role: "Papá de Mateo, 6 años",
    quote: "Texto de opinión de prueba. Reemplazar por el testimonio real del cliente.",
    bubble: "bg-spark/40 shadow-ink/10",
    tail: "bg-spark/40",
    avatar: "bg-spark text-ink",
    layout: "md:mt-10 md:rotate-1",
  },
  {
    id: 3,
    name: "Nombre Apellido",
    role: "Profesora de primaria",
    quote: "Texto de opinión de prueba. Reemplazar por el testimonio real del cliente.",
    bubble: "bg-lab/25 shadow-lab-strong/15",
    tail: "bg-lab/25",
    avatar: "bg-lab-strong text-white",
    layout: "md:-rotate-1",
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
            Familias y docentes que ya vivieron la experiencia
          </p>
        </div>

        {/* Globos de diálogo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.id} variant="pop" delay={i * 0.12}>
            <figure
              className={`transition-transform duration-500 ease-out motion-safe:hover:rotate-0 motion-safe:hover:-translate-y-1 ${testimonial.layout}`}
            >
              <Card
                className={`relative gap-0 overflow-visible rounded-2xl border-0 py-0 shadow-lg ${testimonial.bubble}`}
              >
                <CardContent className="px-7 pt-8 pb-9">
                  <blockquote className="font-display text-xl md:text-[1.35rem] font-medium leading-snug text-ink text-pretty">
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
                  {testimonial.name.charAt(0)}
                </span>
                <figcaption>
                  <p className="font-display text-lg font-bold leading-tight text-ink">{testimonial.name}</p>
                  <p className="text-sm text-ink/75">{testimonial.role}</p>
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
