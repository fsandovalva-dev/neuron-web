"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { Bubbles } from "@/components/Bubbles"
import { Reveal } from "@/components/Reveal"
import { useEffect, useState } from "react"

export function CTASection() {
  // Estado para manejar la animación de resaltado
  const [isHighlighted, setIsHighlighted] = useState(false)

  // Escucha el evento personalizado 'highlight-cta' que dispara el Navbar
  useEffect(() => {
    const handleHighlight = () => {
      setIsHighlighted(true)
      // Desactivamos el resaltado tras 1.5 s (tiempo suficiente para el scroll y el efecto)
      setTimeout(() => setIsHighlighted(false), 1500)
    }

    window.addEventListener("highlight-cta", handleHighlight)
    return () => {
      window.removeEventListener("highlight-cta", handleHighlight)
    }
  }, [])

  return (
    <section id="cta" className="relative overflow-hidden bg-sky px-4 py-20 md:py-28">
      <Bubbles />
      <Reveal variant="pop" className="relative mx-auto max-w-6xl">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-3xl bg-bubble-strong px-6 py-12 shadow-xl shadow-ink/20 md:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:py-16">
          {/* Anillos de burbuja dentro del panel */}
          <div
            className="pointer-events-none absolute -left-16 -top-16 size-56 rounded-full border-2 border-white/25"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-6 left-1/2 size-16 rounded-full bg-white/10"
            aria-hidden="true"
          />

          <div className="relative text-center lg:text-left">
            <h2 className="font-display text-balance text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              ¿Listo para el cumpleaños más científico y divertido?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-white/90 md:text-xl lg:mx-0">
              Escríbenos por WhatsApp, cuéntanos la fecha y te enviamos tu cotización.
            </p>
            <Button
              asChild
              size="lg"
              className={`mt-8 h-auto bg-spark px-8 py-4 text-base font-bold text-ink shadow-lg shadow-ink/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-spark/90 md:text-lg ${
                isHighlighted ? "scale-105 ring-4 ring-white ring-offset-4 ring-offset-bubble-strong" : ""
              }`}
            >
              <a
                href="https://wa.me/56976257106?text=Hola%20Neuron,%20vengo%20de%20la%20web%20y%20quiero%20cotizar%20un%20cumpleaños!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                Cotizar por WhatsApp
              </a>
            </Button>
          </div>

          <div className="relative mx-auto aspect-square w-64 sm:w-80 lg:w-full lg:max-w-sm">
            <div className="absolute inset-0 overflow-hidden rounded-full border-[8px] border-spark shadow-xl shadow-ink/30">
              <Image
                src="/images/gallery/evento-1.JPG"
                alt="Educadora con bata vierte un líquido en un tubo de ensayo mientras niños con la cara pintada extienden sus tubos"
                fill
                sizes="(min-width: 1024px) 24rem, 20rem"
                className="object-cover object-[22%_center]"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
