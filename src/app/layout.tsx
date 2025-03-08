import type { Metadata } from "next";
import {
  Lato,
  Merriweather,
  Playfair_Display,
  Montserrat,
} from "next/font/google";
import "./globals.css";

// Primary heading font - elegant serif for main headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
});

// Secondary heading font - clean serif for subheadings
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-merriweather",
  preload: true,
});

// Primary body font - clean sans-serif for readability
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
});

// Secondary body font - modern sans-serif for UI elements
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
  preload: true,
});

export const metadata: Metadata = {
  title: "Ecomotive Motors - Electric Vehicle Solutions",
  description:
    "Ecomotive Motors provides innovative electric vehicle solutions for a sustainable future. Explore our range of electric vehicles and charging solutions.",
  keywords:
    "electric vehicles, EV, Ecomotive Motors, sustainable transportation, electric mobility",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Merriweather:wght@300;400;700;900&family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${playfair.variable} ${merriweather.variable} ${montserrat.variable} ${lato.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
