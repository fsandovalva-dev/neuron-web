"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { motion, useAnimationControls, useInView, useReducedMotion } from "framer-motion"

type RevealVariant = "up" | "left" | "right" | "pop"

const offsets = {
  up: { opacity: 0, y: 32 },
  left: { opacity: 0, x: -56 },
  right: { opacity: 0, x: 56 },
  pop: { opacity: 0, scale: 0.9 },
} as const

const shown = { opacity: 1, x: 0, y: 0, scale: 1 }

// Entrada al hacer scroll. Con movimiento reducido solo se desvanece, sin desplazarse.
// El servidor lo renderiza visible: si el JavaScript tarda o falla, el contenido se ve igual.
// Al hidratar, solo se oculta lo que aún está bajo la pantalla, para animarlo cuando llegue.
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className,
}: {
  children: ReactNode
  variant?: RevealVariant
  delay?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" })
  const armed = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || el.getBoundingClientRect().top <= window.innerHeight) return
    controls.set(reduce ? { opacity: 0 } : offsets[variant])
    armed.current = true
    // Solo al montar: lo que ya se vio no se vuelve a ocultar.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (inView && armed.current) controls.start(shown)
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={controls}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
