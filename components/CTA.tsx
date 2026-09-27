"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { Bubbles } from "@/components/Bubbles"
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
    <section id="cta" className="relative overflow-hidden bg-sky px-4 py-20">
      <Bubbles />
      <div className="relative container mx-auto max-w-3xl text-center">
        <h2 className="font-display text-balance text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl">
          ¿Listo para el cumpleaños más científico y divertido?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-ink/75 md:text-xl">
          Escríbenos por WhatsApp, cuéntanos la fecha y te enviamos tu cotización.
        </p>
        <Button
          asChild
          size="lg"
          className={`mt-8 h-auto bg-bubble-strong px-8 py-4 text-base font-bold text-white shadow-lg shadow-bubble-strong/25 transition-all duration-300 hover:bg-bubble-strong/90 md:text-lg ${
            isHighlighted ? "scale-105 ring-4 ring-lab-strong ring-offset-4 ring-offset-sky" : ""
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
    </section>
  )
}
