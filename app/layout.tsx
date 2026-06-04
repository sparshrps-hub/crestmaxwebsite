import type { Metadata } from "next";
import { Rajdhani, Nunito_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const rajdhani = Rajdhani({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rajdhani",
});

const nunitoSans = Nunito_Sans({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "CrestMAX | Indian 2-Wheeler & 3-Wheeler Spare Parts Exporter to Africa",
  description:
    "CrestMAX, a venture by RPS Infrastructures — exporting Bajaj, TVS, Hero spare parts to Nigeria, Ghana, Kenya and 12+ African nations. FOB Mumbai or CIF any African port. B2B wholesale enquiries welcome.",
  keywords:
    "spare parts exporter India Africa, Bajaj spare parts wholesale, Keke Napep parts supplier, 2 wheeler spare parts Nigeria, motorcycle spare parts importer Africa, 3 wheeler spare parts Kenya, Bajaj RE spare parts export, TVS King parts wholesale, Indian spare parts exporter, Ludhiana spare parts exporter",
  metadataBase: new URL("https://crestmax.in"),
};

// Organization JSON-LD — injected site-wide
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CrestMAX",
  alternateName: "Crestmax Pvt Ltd",
  description:
    "Indian exporter of 2-wheeler and 3-wheeler spare parts to wholesale importers across Africa. A venture by RPS Infrastructures.",
  url: "https://crestmax.in",
  logo: "https://crestmax.in/logo.png",
  foundingLocation: "Ludhiana, Punjab, India",
  email: "info@crestmax.in",
  telephone: "+917087866759",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ludhiana",
    addressRegion: "Punjab",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+917087866759",
      contactType: "sales",
      areaServed: ["NG", "GH", "KE", "TZ", "UG", "ET", "CD", "MA", "AO", "ZA", "RW"],
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: "+2349020636510",
      contactType: "sales",
      areaServed: "NG",
      availableLanguage: "English",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rajdhani.variable} ${nunitoSans.variable} ${ibmPlexMono.variable}`}
      style={{ fontFamily: "var(--font-nunito-sans, 'Nunito Sans', sans-serif)" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
