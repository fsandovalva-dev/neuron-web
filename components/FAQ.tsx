import { Bubbles } from "@/components/Bubbles"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { WHATSAPP_URLS } from "@/lib/whatsapp"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Qué pasa si un niño no encuentra entretenida la actividad o no participa activamente?",
    answer:
      "✨ ¡No te preocupes! Sabemos que no todos los niños tienen los mismos intereses o ritmos. Nuestro equipo está preparado para motivar y redirigir su atención de manera amigable, buscando que se sientan incluidos y disfruten la experiencia. Y si de plano prefieren observar, también está bien. ¡Aquí todos son bienvenidos! 🧠💫",
  },
  {
    question: "¿Qué medidas de seguridad tienen para evitar accidentes durante las actividades?",
    answer:
      "🔬 La seguridad es nuestra prioridad. Usamos materiales no tóxicos y diseñamos las actividades pensando en los más pequeños. Además, nuestros científicos están atentos todo el tiempo para que los niños experimenten de manera divertida y segura. ¡Ciencia sin preocupaciones! ⚗️💪",
  },
  {
    question: "¿Qué sucede si un niño accidentalmente se come alguno de los materiales con los que trabajan?",
    answer:
      "😅 ¡Es un caso raro, pero podría pasar! Usamos materiales aptos para niños y evitamos cualquier cosa peligrosa o tóxica. Aun así, siempre estamos supervisando a los niños y damos instrucciones claras para prevenir estas situaciones. Si ocurre, nos encargamos de actuar rápido y, claro, ¡nos pondremos en contacto contigo enseguida! 🛟🍭",
  },
  {
    question: "¿Los experimentos son adecuados para todas las edades o hay un rango específico?",
    answer:
      "👩‍🔬 Adaptamos cada experiencia según la edad del grupo. Los más pequeñitos se divertirán con actividades simples y coloridas, mientras que los más grandes podrán explorar conceptos un poco más complejos. ¡Ciencia para todos! 👦👧🚀",
  },
  {
    question: "¿Qué pasa si algún niño tiene alergias o sensibilidad a ciertos materiales?",
    answer:
      "🌟 Nos preocupamos por cada detalle. Antes del evento, preguntamos por alergias o sensibilidades y, si es necesario, ajustamos los materiales para garantizar un ambiente seguro y cómodo para todos. ¡Cuidamos a cada astronauta científico! 🌍❤️",
  },
  {
    question: "¿Las actividades se adaptan si algún niño tiene necesidades especiales?",
    answer:
      "🙌 ¡Por supuesto! En NeurOn creemos en la inclusión. Estamos preparados para adaptar el ritmo o el formato de las actividades para que todos puedan participar y disfrutar de la ciencia. Si nos avisas con tiempo, ¡lo planeamos aún mejor! 🧩🌈",
  },
  {
    question: "¿Hasta qué comuna llegan?",
    answer:
      "🙌 Hasta cualquier comuna, ¡Incluso llegamos a regiones! (El costo de traslado se incluirá en el valor final de la cotización).",
  },
]

// Cada pregunta lleva su color de marca; al abrirse, la tarjeta se tiñe de ese color.
const tones = [
  { dot: "bg-bubble-strong", open: "data-[state=open]:bg-[color-mix(in_oklab,var(--color-bubble)_18%,white)]" },
  { dot: "bg-lab-strong", open: "data-[state=open]:bg-[color-mix(in_oklab,var(--color-lab)_30%,white)]" },
  { dot: "bg-spark", open: "data-[state=open]:bg-[color-mix(in_oklab,var(--color-spark)_45%,white)]" },
]

export function FAQSection() {
  return (
    <section id="faqs" className="relative overflow-hidden py-20 px-4 bg-blush">
      <Bubbles variant={0} light />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Encabezado fijo mientras se recorren las preguntas */}
        <div className="text-center lg:sticky lg:top-28 lg:self-start lg:text-left">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4 text-balance">
            Preguntas{" "}
            <span className="inline-block -rotate-1 rounded-xl bg-bubble px-3 text-white">Frecuentes</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg md:text-xl text-ink/75 text-pretty lg:mx-0">
            Todo lo que necesitas saber para un cumpleaños científico perfecto.
          </p>

          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-sky p-6 text-left shadow-md shadow-ink/10 lg:mx-0">
            <p className="font-display text-xl font-bold text-ink">¿Tienes otra duda?</p>
            <p className="mt-1 text-ink/75">Escríbenos y te respondemos directamente.</p>
            <Button
              asChild
              className="mt-4 h-auto w-full bg-bubble-strong px-6 py-3 font-bold text-white hover:bg-bubble-strong/90 sm:w-auto"
            >
              <a href={WHATSAPP_URLS.duda} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                Preguntar por WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => {
            const tone = tones[index % tones.length]
            return (
              <Reveal key={index} variant="up" delay={index * 0.05}>
                <AccordionItem
                  value={`item-${index}`}
                  className={`rounded-2xl border-0 bg-white px-6 shadow-md shadow-ink/10 transition-colors duration-300 ${tone.open}`}
                >
                  <AccordionTrigger className="py-5 text-left text-lg font-semibold text-ink hover:text-bubble-strong hover:no-underline">
                    <span className="flex items-start gap-3">
                      <span aria-hidden="true" className={`mt-2 size-3 shrink-0 rounded-full ${tone.dot}`} />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-6 text-ink/80 leading-relaxed pb-5">{faq.answer}</AccordionContent>
                </AccordionItem>
              </Reveal>
            )
          })}
        </Accordion>
      </div>
    </section>
  )
}
