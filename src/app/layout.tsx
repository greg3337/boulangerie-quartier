import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Providers from "@/components/Providers";

const schema = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "La Fournée Bordelaise",
  url: "https://boulangeriequartier.vercel.app",
  telephone: "+33 5 56 00 00 00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 rue Sainte-Catherine",
    addressLocality: "Bordeaux",
    postalCode: "33000",
    addressCountry: "FR",
  },
  openingHours: ["Mo-Fr 07:00-19:30", "Sa 07:00-19:30", "Su 07:00-13:00"],
  servesCuisine: "Boulangerie artisanale",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Fournée Bordelaise — Boulangerie Artisanale à Bordeaux",
  description:
    "Boulangerie artisanale au cœur de Bordeaux. Pains au levain, viennoiseries et pâtisseries maison depuis 1987. 12 rue Sainte-Catherine, 33000 Bordeaux.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-sans bg-cream dark:bg-night text-brown dark:text-cream antialiased transition-colors duration-300">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTopButton />
        </Providers>
      </body>
    </html>
  );
}
