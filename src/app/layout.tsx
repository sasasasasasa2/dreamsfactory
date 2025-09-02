import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DREAMSFACTORY - Agencia de Desarrollo Web y Software de Alto Nivel",
  description: "Transformamos clubes en marcas globales. Elevamos e-commerce de 5 cifras a 7. Creamos software que construye imperios. Agencia boutique especializada en desarrollo web avanzado, software a medida y optimización para grandes marcas.",
  keywords: [
    "desarrollo web",
    "software a medida",
    "agencia tecnológica",
    "Next.js",
    "Shopify",
    "e-commerce",
    "optimización web",
    "CRO",
    "UX/UI",
    "automatizaciones",
    "Al Nassr FC",
    "desarrollo premium"
  ],
  authors: [{ name: "DREAMSFACTORY" }],
  creator: "DREAMSFACTORY",
  publisher: "DREAMSFACTORY",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://dreamsfactory.com",
    siteName: "DREAMSFACTORY",
    title: "DREAMSFACTORY - Agencia de Desarrollo Web y Software de Alto Nivel",
    description: "Transformamos clubes en marcas globales. Elevamos e-commerce de 5 cifras a 7. Creamos software que construye imperios.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DREAMSFACTORY - Agencia Tecnológica Premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DREAMSFACTORY - Agencia de Desarrollo Web y Software de Alto Nivel",
    description: "Transformamos clubes en marcas globales. Elevamos e-commerce de 5 cifras a 7. Creamos software que construye imperios.",
    images: ["/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#00d4ff",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
