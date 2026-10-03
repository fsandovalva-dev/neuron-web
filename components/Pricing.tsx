"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Bubbles } from "@/components/Bubbles";
import { ExperimentChip } from "@/components/ExperimentChip";
import { ToothpasteBanner } from "@/components/ToothpasteBanner";
import { whatsappUrl } from "@/lib/whatsapp";
import { experiments, type ExperimentSlug } from "@/lib/experiments";

const durations = {
  micro: { label: "Micro (1 hora)", price: "$170.000" },
  macro: { label: "Macro (2 horas)", price: "$220.000" },
} as const;

type Duration = keyof typeof durations;

type Plan = {
  name: string;
  tagline: string;
  experiments: ExperimentSlug[];
  // Experimento que solo entra en la versión Macro del plan.
  macroOnly: ExperimentSlug;
};

// Micro y Macro ofrecen los mismos planes (confirmado por Neuron el 2026-10-03). Cada plan suma
// en Macro un experimento exclusivo; los precios son iguales para todos los planes de una duración.
const plans: Plan[] = [
  {
    name: "NeurOn",
    tagline: "Selección de los preferidos de nuestros científicos.",
    experiments: ["lampara-de-lava", "slime", "fluido-no-newtoniano"],
    macroOnly: "fluido-no-newtoniano",
  },
  {
    name: "Cientístico",
    tagline: "¿Arte y Ciencia? ¡Claro que sí!",
    experiments: ["repollimetro", "burbugrafia", "luciernagas-electronicas"],
    macroOnly: "luciernagas-electronicas",
  },
  {
    name: "Ingenioso",
    tagline: "¿Te gustan los desafíos? ¡Este es tu tipo!",
    experiments: ["aerodeslizador", "pelea-de-robots", "luciernagas-electronicas"],
    macroOnly: "pelea-de-robots",
  },
  {
    name: "Cósmico",
    tagline: "Naves espaciales y mucho más: ¡ciencia de otro planeta!",
    experiments: ["aerodeslizador", "gelificaciones", "anillos-de-humo"],
    macroOnly: "anillos-de-humo",
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
          : "text-ink/70 hover:text-ink"
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

// Cada plan conserva su color en micro y macro para que se reconozca al cambiar de pestaña.
const planTones: Record<string, { header: string; text: string }> = {
  NeurOn: { header: "bg-bubble-strong text-white", text: "text-white" },
  Cientístico: { header: "bg-spark text-ink", text: "text-ink/80" },
  Ingenioso: { header: "bg-lab-strong text-white", text: "text-white" },
  Cósmico: { header: "bg-lab text-ink", text: "text-ink/80" },
};

function PlanCard({ plan, duration }: { plan: Plan; duration: Duration }) {
  const tone = planTones[plan.name] ?? planTones.NeurOn;
  const { label, price } = durations[duration];
  const included = duration === "micro" ? plan.experiments.filter((slug) => slug !== plan.macroOnly) : plan.experiments;
  return (
    <Card className="gap-0 overflow-hidden rounded-2xl border-0 py-0 shadow-md shadow-ink/10 transition-shadow duration-300 hover:shadow-xl">
      <div className={`px-6 pt-6 pb-7 ${tone.header}`}>
        <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
        <p className="mt-3 font-display text-4xl font-extrabold tracking-tight">{price}</p>
        <p className={`mt-3 text-sm text-balance ${tone.text}`}>{plan.tagline}</p>
      </div>
      <div className="flex flex-1 flex-col gap-6 p-6">
        <div>
          <ul className="flex flex-wrap gap-2">
            {included.map((slug) => (
              <ExperimentChip key={slug} slug={slug} />
            ))}
          </ul>
          {duration === "micro" && (
            <p className="mt-3 text-sm text-ink/70">Solo en Macro: {experiments[plan.macroOnly].name}.</p>
          )}
        </div>
        <Button asChild className="mt-auto w-full bg-bubble-strong hover:bg-bubble-strong/90 text-white" size="lg">
          <a
            href={whatsappUrl(`Hola Neuron, vengo de la web y quiero cotizar el plan ${plan.name} ${label}!`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotizar {plan.name}
          </a>
        </Button>
      </div>
    </Card>
  );
}

export function PricingSection() {
  // Estado para la pestaña activa
  const [activeTab, setActiveTab] = useState("micro");
  // La primera carga se muestra sin animar (visible aunque el JS tarde); la entrada solo se anima al cambiar de pestaña.
  const [hasSwitchedTab, setHasSwitchedTab] = useState(false);
  const changeTab = (value: string) => {
    setActiveTab(value);
    setHasSwitchedTab(true);
  };
  const triggerHighlight = () => {
    // Creamos y despachamos un evento personalizado llamado 'highlight-cta'
    window.dispatchEvent(new Event("highlight-cta"));
  };

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
          onValueChange={changeTab}
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

          <ToothpasteBanner />

          {/* Micro Tab Content */}
          <TabsContent value="micro">
            <motion.div
            key={activeTab}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={hasSwitchedTab ? "initial" : false}
              animate="animate"
              variants={fadeInUpAnimation}
            >
              {plans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} duration="micro" />
              ))}
            </motion.div>
          </TabsContent>

          {/* Macro Tab Content */}
          <TabsContent value="macro">
            <motion.div
            key={activeTab + "macro"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={hasSwitchedTab ? "initial" : false}
              animate="animate"
              variants={fadeInUpAnimation}
            >
              {plans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} duration="macro" />
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
