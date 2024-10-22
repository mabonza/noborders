import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/constants/fonts";

export const metadata: Metadata = {
  title: "ETS KIDOGE MAJAGIRA",
  description:
    "ETS KM, spécialisée dans la logistique et la chaîne d'approvisionnement. Elle propose une gamme variée de services d'accompagnement sur l'ensemble de la chaîne logistique globale et fournit aux entreprises de divers secteurs des produits consommables de haute qualité.",
  creator: "Iceberg-investment",
  authors: [
    {
      name: "Mabnet",
      url: "https://github.com/mabonza",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}
