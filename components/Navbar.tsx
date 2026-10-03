"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

const menuDots = ["bg-bubble-strong", "bg-lab-strong", "bg-spark"]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#precios", label: "Planes" },
    { href: "#opiniones", label: "Opiniones" },
    { href: "#empresas", label: "Empresas" },
    { href: "#galeria", label: "Galería" },
    { href: "#faqs", label: "FAQs" },
  ]

  // Trigger para resaltar la sección CTA
  const triggerHighlight = () => {
    // Creamos y despachamos un evento personalizado llamado 'highlight-cta'
    window.dispatchEvent(new Event("highlight-cta"))
    // Cerramos el menú móvil si estuviera abierto
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md shadow-ink/10">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-16 h-16 transition-transform group-hover:scale-105">
            <Image src="/images/logo-neuron.png" alt="Neuron Logo" fill sizes="4rem" className="object-contain" priority />
          </div>
          <span className="ml-3 text-2xl font-bold text-ink font-display tracking-tight">Neuron</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-1 font-medium text-ink/80 transition-colors hover:text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-1 after:origin-left after:scale-x-0 after:rounded-full after:bg-spark after:transition-transform after:duration-300 hover:after:scale-x-100 motion-reduce:after:transition-none"
            >
              {link.label}
            </Link>
          ))}
          {/* Listener en botón Cotizar */}
          <Button asChild className="bg-bubble-strong hover:bg-bubble-strong/90 text-white font-semibold" onClick={triggerHighlight}>
            <Link href="#cta">Cotizar</Link>
          </Button>
        </div>

        {/* Mobile: Cotizar siempre a la vista + menú */}
        <div className="flex items-center gap-1 lg:hidden">
          <Button asChild size="sm" className="bg-bubble-strong font-semibold text-white hover:bg-bubble-strong/90" onClick={triggerHighlight}>
            <Link href="#cta">Cotizar</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Abrir menú">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-blush sm:w-[350px]">
              <SheetHeader className="border-b border-ink/10 pb-4 text-left">
                <SheetTitle className="flex items-center gap-2">
                  <div className="relative h-8 w-8">
                    <Image src="/images/logo-neuron.png" alt="Neuron Logo" fill sizes="2rem" className="object-contain" />
                  </div>
                  <span className="font-display text-lg font-bold text-ink">Neuron</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-2 flex flex-col px-4">
                {navigationLinks.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-xl py-3 font-display text-2xl font-bold text-ink transition-colors hover:text-bubble-strong"
                  >
                    <span aria-hidden="true" className={`size-3 shrink-0 rounded-full ${menuDots[i % menuDots.length]}`} />
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  size="lg"
                  className="mt-6 h-auto w-full bg-bubble-strong py-4 text-base font-bold text-white hover:bg-bubble-strong/90"
                  onClick={triggerHighlight}
                >
                  <Link href="#cta">Cotizar</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}