import { MessageCircle } from "lucide-react"
import { WHATSAPP_URLS } from "@/lib/whatsapp"

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URLS.cumpleanos}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  )
}
