// Contacto por WhatsApp: único lugar donde se definen el número y los mensajes prellenados.
const WHATSAPP_NUMBER = "56976257106"

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URLS = {
  cumpleanos: whatsappUrl("Hola Neuron, vengo de la web y quiero cotizar un cumpleaños!"),
  empresa: whatsappUrl("Hola Neuron, vengo de la web y quiero cotizar una actividad para mi empresa!"),
  duda: whatsappUrl("Hola Neuron, tengo una duda sobre los cumpleaños científicos!"),
}
