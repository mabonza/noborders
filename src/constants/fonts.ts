import { Inter, Bebas_Neue, Caveat, Carlito } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const beba = Bebas_Neue({ subsets: ["latin"], weight: "400" });
export const dancing = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const carlito = Carlito({ subsets: ["latin"], weight: ["400", "700"] });
