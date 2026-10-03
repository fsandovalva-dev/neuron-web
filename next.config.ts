import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Solo afecta a `next dev`: permite abrir el servidor de desarrollo desde otro equipo
  // por la IP de la red local (192.168.x.x) o de Tailscale (100.x.x.x). Sin esto, Next
  // bloquea los recursos de desarrollo pedidos desde esos orígenes y la página no se hidrata.
  allowedDevOrigins: ["192.168.*.*", "100.*.*.*"],
};

export default nextConfig;
