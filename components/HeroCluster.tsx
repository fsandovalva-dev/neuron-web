"use client"

import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

// Racimo de burbujas fotográficas: cada una sube a distinta velocidad al hacer scroll.
export function HeroCluster() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const ring = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -50])
  const main = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -80])
  const small = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -200])
  const tiny = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -140])

  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm lg:max-w-md">
      <motion.div
        style={{ y: ring }}
        className="absolute left-[8%] top-[12%] aspect-square w-[78%] rounded-full border-2 border-bubble bg-bubble/10"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: main }}
        className="absolute right-0 top-0 aspect-square w-[80%] overflow-hidden rounded-full shadow-xl shadow-ink/20"
      >
        <Image
          src="/images/gallery/evento-2.jpg"
          alt="Niños experimentando con pipetas y tubos de ensayo en una mesa, uno de ellos con expresión de sorpresa"
          fill
          priority
          sizes="(min-width: 1024px) 22rem, (min-width: 640px) 20rem, 80vw"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        style={{ y: small }}
        className="absolute bottom-0 left-0 aspect-square w-[44%] overflow-hidden rounded-full border-[6px] border-spark shadow-lg shadow-ink/20"
      >
        <Image
          src="/images/gallery/evento-4.jpg"
          alt="Equipo de una empresa manipulando slime de colores con guantes durante una actividad corporativa"
          fill
          sizes="(min-width: 1024px) 12rem, 40vw"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        style={{ y: tiny }}
        className="absolute left-0 top-[4%] aspect-square w-[27%] overflow-hidden rounded-full border-[5px] border-bubble-strong shadow-lg shadow-ink/20"
      >
        <Image
          src="/images/gallery/evento-5.jpg"
          alt="Tres científicos con bata blanca posan junto a una mascota de peluche en un evento al aire libre"
          fill
          sizes="(min-width: 1024px) 8rem, 25vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  )
}
