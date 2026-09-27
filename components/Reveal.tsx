"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"

type RevealVariant = "up" | "left" | "right" | "pop"

const offsets = {
  up: { opacity: 0, y: 32 },
  left: { opacity: 0, x: -56 },
  right: { opacity: 0, x: 56 },
  pop: { opacity: 0, scale: 0.9 },
} as const

// Entrada al hacer scroll. Con movimiento reducido solo se desvanece, sin desplazarse.
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
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : offsets[variant]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
