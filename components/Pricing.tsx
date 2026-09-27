"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FlaskConical } from "lucide-react";
import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Bubbles } from "@/components/Bubbles";

const microPlans = [
  {
    name: "Explosivo",
    price: "$200.000",
    tagline: "¿Científico/a loco/a? ¡Claro que sí!",
    experiments: ["Lámpara de lava", "Fiesta de gases", "Pasta de dientes"],
  },
  {
    name: "Kinésico",
    price: "$200.000",
    tagline: "Lleva lo sensorial a otro nivel ¡Con-Ciencia!",
    experiments: ["Slime", "Luciérnagas electrónicas", "Pasta de dientes"],
  },
  {
    name: "NeurOn",
    price: "$200.000",
    tagline: "Selección de los preferidos de nuestros científicos.",
    experiments: ["Lámpara de lava", "Slime", "Pasta de dientes"],
  },
  {
    name: "Ingeniero",
    price: "$205.000",
    tagline: "¿Te gustan los desafíos? ¡Este es tu tipo!",
    experiments: ["Lancha supersónica", "Aerodeslizador", "Pasta de dientes"],
  },
];

const macroPlans = [
  {
    name: "Cientístico",
    price: "$225.000",
    tagline: "¿Arte y Ciencia? ¡Claro que sí!",
    experiments: [
      "Burbugrafía",
      "Arcoíris viajero",
      "Repollímetro",
      "Colores danzantes",
      "Pasta de dientes",
    ],
  },
  {
    name: "Kinésico",
    price: "$225.000",
    tagline:
      "Lleva lo sensorial a otro nivel ¡Con-Ciencia! (versión extendida).",
    experiments: [
      "Slime",
      "Luciérnagas electrónicas",
      "Fluido no newtoniano",
      "Gelificaciones",
      "Pasta de dientes experimental",
    ],
  },
  {
    name: "NeurOn",
    price: "$225.000",
    tagline: "Los favoritos de Neuron en versión extendida.",
    experiments: [
      "Lámpara",
      "Slime",
      "Fluido no newtoneano",
      "Luciérnagas",
      "Pasta de dientes",
    ],
  },
  {
    name: "Ingeniero",
    price: "$230.000",
    tagline: "Para los amantes de los desafíos y la ingeniería.",
    experiments: [
      "Carrera de autos",
      "Lancha supersónica",
      "Luciérnagas",
      "Aerodeslizador",
      "Pasta de dientes",
    ],
  },
];

// Animación de aparición con framer-motion
const fadeInUpAnimation = {
  initial: { opacity: 0, y: 20 }, // Empieza invisible y 20px más abajo
  animate: { opacity: 1, y: 0 }, // Termina visible y en su posición original
  transition: { duration: 0.4, ease: "easeOut" }, // Duración y suavizado
};

// Componente de la sección de precios
function AnimatedTabTrigger({
  value,
  label,
  activeTab,
}: {
  value: string;
  label: string;
  activeTab: string;
}) {
  const isActive = value === activeTab;
  return (
    <TabsTrigger
      value={value}
      className={cn(
        "relative w-full text-lg z-10 transition-colors duration-200",
        // Quitamos el fondo por defecto de shadcn cuando está activo para usar el nuestro
        isActive
          ? "data-[state=active]:bg-transparent data-[state=active]:text-ink data-[state=active]:shadow-none"
          : "text-ink/60 hover:text-ink"
      )}
    >
      {label}
      {/* La magia: si esta pestaña es la activa, renderizamos el motion.div detrás */}
      {isActive && (
        <motion.div
          layoutId="active-tab-indicator" // El ID compartido que hace la magia
          className="absolute inset-0 bg-white rounded-md shadow-sm z-[-1]"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} // Animación tipo resorte
        />
      )}
    </TabsTrigger>
  );
}

type Plan = { name: string; price: string; tagline: string; experiments: string[] };

// Cada plan conserva su color en micro y macro para que se reconozca al cambiar de pestaña.
const planTones: Record<string, { header: string; text: string }> = {
  Explosivo: { header: "bg-spark text-ink", text: "text-ink/80" },
  Cientístico: { header: "bg-spark text-ink", text: "text-ink/80" },
  Kinésico: { header: "bg-lab text-ink", text: "text-ink/80" },
  NeurOn: { header: "bg-bubble-strong text-white", text: "text-white/90" },
  Ingeniero: { header: "bg-lab-strong text-white", text: "text-white/90" },
};

function PlanCard({ plan, whatsappUrl }: { plan: Plan; whatsappUrl: string }) {
  const tone = planTones[plan.name] ?? planTones.NeurOn;
  return (
    <Card className="gap-0 overflow-hidden rounded-2xl border-0 py-0 shadow-md shadow-ink/10 transition-shadow duration-300 hover:shadow-xl">
      <div className={`px-6 pt-6 pb-7 ${tone.header}`}>
        <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
        <p className="mt-3 font-display text-4xl font-extrabold tracking-tight">{plan.price}</p>
        <p className={`mt-3 text-sm text-balance ${tone.text}`}>{plan.tagline}</p>
      </div>
      <div className="flex flex-1 flex-col gap-6 p-6">
        <ul className="flex flex-wrap gap-2">
          {plan.experiments.map((experiment, index) => (
            <li key={index} className="rounded-full bg-blush px-3 py-1.5 text-sm font-medium text-ink">
              {experiment}
            </li>
          ))}
        </ul>
        <Button asChild className="mt-auto w-full bg-bubble-strong hover:bg-bubble-strong/90 text-white" size="lg">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Cotizar {plan.name}
          </a>
        </Button>
      </div>
    </Card>
  );
}

export function PricingSection() {
  // Estado para la pestaña activa y el menú móvil
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("micro");
  const triggerHighlight = () => {
    // Creamos y despachamos un evento personalizado llamado 'highlight-cta'
    window.dispatchEvent(new Event("highlight-cta"));
    // Cerramos el menú móvil si estuviera abierto
    setIsOpen(false);
  };
  const whatsappUrl =
    "https://wa.me/56976257106?text=Hola%20Neuron,%20vengo%20de%20la%20web%20y%20quiero%20cotizar%20un%20cumpleaños!";

  return (
    <MotionConfig reducedMotion="user">
    <section
      id="precios"
      className="relative overflow-hidden py-20 px-4 bg-blush"
    >
      <Bubbles variant={2} light />
      <div className="container relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4 text-balance">
            Nuestros{" "}
            <span className="inline-block -rotate-1 rounded-xl bg-spark px-3">Planes y Precios</span>
          </h2>
          <p className="text-xl text-ink/75 text-balance">
            Elige la duración y la temática perfecta para tu científico/a.
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          defaultValue="micro"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8 p-1 bg-white rounded-lg">
            {/* CAMBIO 3: Usamos nuestro componente AnimatedTabTrigger */}
            <AnimatedTabTrigger
              value="micro"
              label="Micro (1 Hora)"
              activeTab={activeTab}
            />
            <AnimatedTabTrigger
              value="macro"
              label="Macro (2 Horas)"
              activeTab={activeTab}
            />
          </TabsList>

          {/* Elephant Toothpaste Banner */}
          <div className="mb-12 flex items-center justify-center gap-3 rounded-2xl bg-spark p-6 text-center">
            <FlaskConical className="h-7 w-7 shrink-0 text-ink" aria-hidden="true" />
            <p className="font-display text-2xl font-bold text-ink text-balance">
              ¡Pasta de dientes de elefante incluida en TODOS los cumpleaños!
            </p>
          </div>

          {/* Micro Tab Content */}
          <TabsContent value="micro">
            <motion.div
            key={activeTab}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="initial"
              animate="animate"
              variants={fadeInUpAnimation}
            >
              {microPlans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} whatsappUrl={whatsappUrl} />
              ))}
            </motion.div>
          </TabsContent>

          {/* Macro Tab Content */}
          <TabsContent value="macro">
            <motion.div
            key={activeTab + "macro"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="initial"
              animate="animate"
              variants={fadeInUpAnimation}
            >
              {macroPlans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} whatsappUrl={whatsappUrl} />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Personalized Section */}
        <Card className="mt-16 border-0 bg-sky shadow-none">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="font-display text-3xl font-bold text-ink mb-4">
              ¿Quieres algo único?
            </h3>
            <p className="text-lg text-ink/80 mb-6 text-balance max-w-2xl mx-auto">
              Arma tu propio mix de experimentos. Contáctanos para diseñar una
              propuesta a medida.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-bubble-strong hover:bg-bubble-strong/90 text-white"
              onClick={triggerHighlight}
            >
              <a href="#cta">Hablemos</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
    </MotionConfig>
  );
}
