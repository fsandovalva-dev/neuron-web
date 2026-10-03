import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import sharp from "sharp"

// Imagen que se muestra al compartir el sitio (WhatsApp, Facebook, X...). Se genera en el build.
export const alt = "Neuron: cumpleaños científicos que nadie va a olvidar"
export const size = { width: 1200, height: 630 }
export const contentType = "image/jpeg"

// Tokens de app/globals.css en hex: el generador de imágenes no entiende oklch.
const color = {
  blush: "#fff3f8",
  ink: "#2c1930",
  bubble: "#ff53c6",
  bubbleStrong: "#cc0a87",
  spark: "#fbd530",
}

const HEADLINE = "Cumpleaños Científicos que nadie va a olvidar"
const TAGLINE = "Llevamos el laboratorio a tu casa."

// Descarga de Google Fonts solo los caracteres usados. Si falla, se usa la tipografía por defecto.
async function loadGoogleFont(family: string, weight: number, text: string) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`)
    ).text()
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1]
    return url ? await (await fetch(url)).arrayBuffer() : null
  } catch {
    return null
  }
}

const asDataUrl = (file: Buffer, mime: string) => `data:${mime};base64,${file.toString("base64")}`

export default async function OpengraphImage() {
  const [display, body, logo, photo] = await Promise.all([
    loadGoogleFont("Bricolage+Grotesque", 800, `${HEADLINE}Neuron`),
    loadGoogleFont("Figtree", 500, TAGLINE),
    // Rutas literales: así el build incluye solo estos dos archivos y no todo el proyecto.
    readFile(join(process.cwd(), "public/images/logo-neuron.png")),
    readFile(join(process.cwd(), "public/images/gallery/evento-2.jpg")),
  ])

  const fonts = [
    display && { name: "Bricolage", data: display, weight: 800 as const },
    body && { name: "Figtree", data: body, weight: 500 as const },
  ].filter((font) => font !== null)

  const png = new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: color.blush, color: color.ink, padding: "64px 72px" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 640 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asDataUrl(logo, "image/png")} width={88} height={88} alt="" />
            <span style={{ fontFamily: "Bricolage", fontSize: 44, fontWeight: 800 }}>Neuron</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Bricolage", fontSize: 78, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2 }}>
            <span>Cumpleaños</span>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <span style={{ background: color.spark, borderRadius: 18, padding: "0 18px", transform: "rotate(-1deg)" }}>Científicos</span>
              <span>que</span>
            </div>
            <span>nadie va a olvidar</span>
          </div>

          <span style={{ fontFamily: "Figtree", fontSize: 32, fontWeight: 500, opacity: 0.75 }}>{TAGLINE}</span>
        </div>

        <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
          <div style={{ display: "flex", padding: 14, borderRadius: 9999, border: `4px solid ${color.bubble}` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asDataUrl(photo, "image/jpeg")}
              width={392}
              height={392}
              alt=""
              style={{ borderRadius: 9999, objectFit: "cover", border: `10px solid ${color.bubbleStrong}` }}
            />
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  )

  // WhatsApp no muestra la vista previa si la imagen pasa de ~300 KB: en PNG la foto la deja en ~400 KB.
  const jpeg = await sharp(Buffer.from(await png.arrayBuffer())).jpeg({ quality: 82, mozjpeg: true }).toBuffer()
  return new Response(new Uint8Array(jpeg), { headers: { "Content-Type": contentType } })
}
