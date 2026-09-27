import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar"; // Componente Navbar
import { WhatsAppButton } from "@/components/WhatsAppButton"; // Componente Botón de WhatsApp

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Neuron",
    default: "Neuron - Cumpleaños Científicos Inolvidables",
  },
  description:
    "Llevamos el laboratorio a tu casa. Experimentos reales, diversión explosiva y aprendizaje asegurado para cumpleaños infantiles en Chile.",
  keywords: [
    "cumpleaños científicos",
    "fiestas infantiles",
    "experimentos para niños",
    "ciencia divertida",
    "animación cumpleaños",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${figtree.variable} ${bricolage.variable} antialiased bg-blush`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-spark focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
        >
          Saltar al contenido
        </a>
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
