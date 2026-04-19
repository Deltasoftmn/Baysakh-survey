import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/language-provider";

const ibm = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

const ibmCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-condensed",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Bayasakh Survey LLC | Геодезийн хэмжилт, зураглал",
  description:
    "Баясах Survey ХХК — 2009 оноос хойш барилга, авто/төмөр зам, уул уурхай, инженерийн шугам сүлжээ, дроны зураглалын төслүүдэд геодезийн хэмжилт, зураглалын мэргэжлийн үйлчилгээ үзүүлнэ.",
  icons: [{ rel: "icon", url: "/favicon.svg" }]
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn" className={`${ibm.variable} ${ibmCondensed.variable}`}>
      <body className="font-[var(--font-sans)]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

