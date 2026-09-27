// Burbujas que suben lentamente, como efervescencia de un experimento.
// Valores fijos (no aleatorios) para que el render de servidor y cliente coincidan.
const bubbles = [
  { left: "4%", size: 56, color: "bubble", ring: true, dur: 19, delay: -4 },
  { left: "11%", size: 20, color: "spark", ring: false, dur: 14, delay: -9 },
  { left: "19%", size: 34, color: "lab", ring: true, dur: 17, delay: -1 },
  { left: "28%", size: 16, color: "bubble", ring: false, dur: 12, delay: -6 },
  { left: "37%", size: 72, color: "lab", ring: false, dur: 24, delay: -14 },
  { left: "46%", size: 24, color: "spark", ring: true, dur: 15, delay: -3 },
  { left: "55%", size: 40, color: "bubble", ring: false, dur: 20, delay: -11 },
  { left: "63%", size: 18, color: "lab", ring: true, dur: 13, delay: -7 },
  { left: "72%", size: 64, color: "spark", ring: false, dur: 23, delay: -16 },
  { left: "80%", size: 30, color: "bubble", ring: true, dur: 16, delay: -2 },
  { left: "88%", size: 44, color: "lab", ring: false, dur: 21, delay: -12 },
  { left: "95%", size: 22, color: "bubble", ring: false, dur: 13, delay: -8 },
] as const

const fill = {
  bubble: "bg-bubble/20",
  lab: "bg-lab/25",
  spark: "bg-spark/40",
} as const

const ring = {
  bubble: "border-bubble bg-bubble/10",
  lab: "border-lab-strong/60 bg-lab/15",
  spark: "border-spark bg-spark/20",
} as const

export function Bubbles({ variant = 0, light = false }: { variant?: number; light?: boolean }) {
  // Cada sección desplaza posiciones y tiempos para que el patrón no se repita; "light" usa la mitad de las burbujas.
  const list = (light ? bubbles.filter((_, i) => (i + variant) % 2 === 0) : bubbles).map((b) => ({
    ...b,
    left: `${(parseFloat(b.left) + variant * 23) % 100}%`,
    delay: b.delay - variant * 5,
  }))
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden motion-reduce:hidden" aria-hidden="true">
      {list.map((b, i) => (
        <div
          key={i}
          className={`absolute top-full h-full animate-bubble-rise ${b.size >= 56 ? "max-md:hidden" : ""}`}
          style={{ left: b.left, animationDuration: `${b.dur}s`, animationDelay: `${b.delay}s` }}
        >
          <div
            className={`animate-bubble-sway rounded-full ${b.ring ? `border-2 ${ring[b.color]}` : fill[b.color]}`}
            style={{
              width: b.size,
              height: b.size,
              animationDuration: `${b.dur / 3}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        </div>
      ))}
    </div>
  )
}
