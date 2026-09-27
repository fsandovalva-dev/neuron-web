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

export function FAQSection() {
  return (
    <section id="faqs" className="py-20 px-4 bg-blush">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas saber para un cumpleaños científico perfecto.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-cyan-600 py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pb-5">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
