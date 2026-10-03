"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { Reveal } from "@/components/Reveal"
import { Bubbles } from "@/components/Bubbles"

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/evento-1.JPG",
    width: 3872,
    height: 2176,
    alt: "Educadora con bata vierte un líquido en un tubo de ensayo mientras niños con la cara pintada extienden sus tubos",
  },
  {
    id: 2,
    src: "/images/gallery/evento-2.jpg",
    width: 1200,
    height: 1600,
    alt: "Niños experimentando con pipetas y tubos de ensayo en una mesa, uno de ellos con expresión de sorpresa",
  },
  {
    id: 3,
    src: "/images/gallery/evento-3.JPG",
    width: 3872,
    height: 2176,
    alt: "Niños con la cara pintada observan sus tubos de ensayo junto a educadoras con bata y un banner de Neuron",
  },
  {
    id: 4,
    src: "/images/gallery/evento-4.jpg",
    // La foto viene rotada por EXIF: estas son sus medidas ya giradas.
    width: 4590,
    height: 8160,
    alt: "Equipo de una empresa manipulando slime de colores con guantes durante una actividad corporativa",
  },
  {
    id: 5,
    src: "/images/gallery/evento-5.jpg",
    width: 960,
    height: 1280,
    alt: "Tres científicos con bata blanca posan junto a una mascota de peluche en un evento al aire libre",
  },
  {
    id: 6,
    src: "/images/gallery/evento-6.JPG",
    width: 3094,
    height: 2176,
    alt: "Educadora con bata vierte un líquido de colores en una probeta entre dos banners de Neuron",
  },
]

export function GallerySection() {
  return (
    <section className="relative w-full overflow-hidden py-20 bg-blush" id="galeria">
      <Bubbles variant={3} light />
      <div className="container relative px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink mb-4 text-balance">
              Galería de Momentos{" "}
              <span className="inline-block rotate-1 rounded-xl bg-lab px-3">Inolvidables</span>
            </h2>
            <p className="text-lg md:text-xl text-ink/75 max-w-2xl mx-auto text-pretty">
              Sonrisas reales, asombro genuino y ciencia en acción en cada una de nuestras fiestas.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {galleryImages.map((image, i) => (
            <Reveal key={image.id} variant="pop" delay={(i % 3) * 0.1}>
            <Dialog>
              <DialogTrigger asChild>
                {/* Miniatura (se mantiene igual con next/image optimizado) */}
                <div className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group shadow-md shadow-ink/10 hover:shadow-xl transition-all">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                </div>
              </DialogTrigger>

              {/* ESTRATEGIA NUEVA PARA EL LIGHTBOX
                1. Quitamos max-w-7xl. Usamos w-auto y h-auto para que el diálogo se ajuste al contenido.
                2. Usamos flex, items-center y justify-center para centrar la imagen en la pantalla.
                3. Agregamos p-4 para un margen de seguridad contra los bordes de la pantalla.
              */}
              <DialogContent className="w-auto h-auto max-w-full max-h-full p-4 bg-transparent border-none shadow-none flex items-center justify-center [&>button]:hidden">
                <DialogTitle className="sr-only">Vista ampliada: {image.alt}</DialogTitle>

                {/* Contenedor relativo que envuelve la imagen y el botón.
                  Su tamaño será exactamente el de la imagen.
                */}
                <div className="relative group/lightbox shrink-0">
                  {/* next/image con las medidas reales: entrega una versión optimizada en vez del
                    original (hasta 8 MB). w-auto/h-auto y los máximos mantienen la proporción
                    sin salirse de la pantalla.
                  */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="90vw"
                    className="block max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg shadow-2xl"
                  />
                  
                  {/* El botón de cerrar ahora sí está posicionado relativo a la imagen visible.
                    Se movió un poco hacia adentro (top-2 right-2) y es más pequeño (p-1.5) para ser sutil.
                  */}
                  <DialogClose className="absolute top-3 right-3 p-2 rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer z-50" aria-label="Cerrar">
                    <X className="w-5 h-5" />
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}