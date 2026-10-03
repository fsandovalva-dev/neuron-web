"use client"

import { useEffect, useId, useRef, useState, type PointerEvent } from "react"
import Image from "next/image"
import { Info } from "lucide-react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { findExperiment } from "@/lib/experiments"

const chip = "inline-flex items-center gap-1.5 rounded-full bg-blush px-3 py-2 text-sm font-medium text-ink"

// Experimento dentro de una tarjeta de plan. Si tiene ficha en lib/experiments.ts, se abre al pasar
// el cursor (mouse), al tocarlo (pantallas táctiles) o con Enter/Espacio (teclado); Escape la cierra.
// Diseño: docs/design/ficha-experimento-hover.md
export function ExperimentChip({ label }: { label: string }) {
  const experiment = findExperiment(label)
  const [open, setOpen] = useState(false)
  const hovering = useRef(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const titleId = useId()

  useEffect(() => () => clearTimeout(timer.current), [])

  if (!experiment) return <li className={chip}>{label}</li>

  // Solo el mouse abre por hover; en pantallas táctiles el toque lo maneja el propio Popover.
  const hoverTo = (next: boolean) => (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return
    hovering.current = next
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setOpen(next), 100)
  }

  // Con el cursor encima, un clic no cierra la ficha que el hover ya abrió.
  const changeOpen = (next: boolean) => {
    if (!next && hovering.current) return
    setOpen(next)
  }

  return (
    <li>
      <Popover open={open} onOpenChange={changeOpen}>
        <PopoverTrigger
          className={`${chip} cursor-pointer transition-colors hover:bg-spark/60 data-[state=open]:bg-spark/60`}
          onPointerEnter={hoverTo(true)}
          onPointerLeave={hoverTo(false)}
        >
          {label}
          <Info className="size-3.5 opacity-60" aria-hidden="true" />
        </PopoverTrigger>
        <PopoverContent
          side="top"
          sideOffset={8}
          collisionPadding={16}
          aria-labelledby={titleId}
          // El foco se queda en el chip: la ficha no tiene nada que se pueda activar.
          onOpenAutoFocus={(event) => event.preventDefault()}
          onEscapeKeyDown={() => {
            hovering.current = false
            setOpen(false)
          }}
          className="w-64 max-w-[calc(100vw-2rem)] rounded-2xl border-0 bg-ink p-3 text-blush shadow-xl shadow-ink/25"
        >
          {experiment.image && (
            <div className="relative mb-3 aspect-[15/7] overflow-hidden rounded-xl bg-lab/30">
              <Image src={experiment.image} alt="" fill sizes="256px" className="object-cover" />
            </div>
          )}
          <p id={titleId} className="font-display text-lg font-bold leading-tight">
            {experiment.name}
          </p>
          <p className="mt-1 text-sm leading-snug text-blush/80">{experiment.summary}</p>
          <PopoverPrimitive.Arrow className="fill-ink" width={14} height={7} />
        </PopoverContent>
      </Popover>
    </li>
  )
}
