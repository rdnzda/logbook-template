import type { Metadata } from "next";
import { Poppins, Merriweather } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/context/language-context";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Logbook d’Anglais — L2 Informatique",
  description: "Journal de bord d’apprentissage: auto‑évaluation, objectifs, programme, sessions et bilan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${merriweather.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}