import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "MECASTRA | Votre Garage de Confiance à Témara",
  description: "Entretien et réparation de véhicules toutes marques. Diagnostics précis, services rapides et expertise professionnelle pour votre sécurité sur la route.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <ClientLayout>
        {children}
      </ClientLayout>
    </LanguageProvider>
  );
}
