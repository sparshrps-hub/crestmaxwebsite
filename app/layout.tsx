import type { Metadata } from "next";
import { Rajdhani, Nunito_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  metadataBase: new URL("https://crestmax.in"),
  title: {
    default: "CrestMAX | Indian 2-Wheeler & 3-Wheeler Spare Parts Exporter to Africa",
    template: "%s | CrestMAX",
  },
  description:
    "CrestMAX exports Bajaj, TVS, Hero spare parts wholesale from Ludhiana, India to Nigeria, Ghana, Kenya and 12+ African nations. FOB Mumbai or CIF any port. B2B enquiries welcome.",
  keywords:
    "spare parts exporter India Africa, Bajaj spare parts wholesale, Keke Napep parts supplier, 2 wheeler spare parts Nigeria, motorcycle spare parts importer Africa, 3 wheeler spare parts Kenya, Bajaj RE spare parts export, TVS King parts wholesale, Indian spare parts exporter, Ludhiana spare parts exporter",
  openGraph: {
    type: "website",
    siteName: "CrestMAX",
    locale: "en_US",
    title: "CrestMAX | Indian 2-Wheeler & 3-Wheeler Spare Parts Exporter to Africa",
    description:
      "CrestMAX exports Bajaj, TVS, Hero spare parts wholesale from Ludhiana, India to Nigeria, Ghana, Kenya and 12+ African nations. FOB Mumbai or CIF any port.",
    url: "https://crestmax.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrestMAX | Indian Spare Parts Exporter to Africa",
    description:
      "Wholesale 2-wheeler and 3-wheeler spare parts exported from India to 12+ African nations. Bajaj, TVS, Hero. FOB Mumbai or CIF.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://crestmax.in/#organization",
  name: "CrestMAX",
  alternateName: ["Crestmax Pvt Ltd", "CrestMAX India"],
  description:
    "Indian exporter of 2-wheeler and 3-wheeler spare parts to wholesale importers across Africa. A venture by RPS Infrastructures.",
  url: "https://crestmax.in",
  logo: "https://crestmax.in/logo.png",
  foundingDate: "2024",
  foundingLocation: "Ludhiana, Punjab, India",
  email: "info@crestmax.in",
  telephone: "+917087866759",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ludhiana",
    addressRegion: "Punjab",
    addressCountry: "IN",
    postalCode: "141001",
  },
  areaServed: [
    { "@type": "Country", name: "Nigeria" },
    { "@type": "Country", name: "Ghana" },
    { "@type": "Country", name: "Kenya" },
    { "@type": "Country", name: "Tanzania" },
    { "@type": "Country", name: "Uganda" },
    { "@type": "Country", name: "Ethiopia" },
    { "@type": "Country", name: "Democratic Republic of the Congo" },
    { "@type": "Country", name: "Morocco" },
    { "@type": "Country", name: "Angola" },
    { "@type": "Country", name: "South Africa" },
    { "@type": "Country", name: "Rwanda" },
    { "@type": "Country", name: "Algeria" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+917087866759",
      contactType: "sales",
      areaServed: "AF",
      availableLanguage: "English",
      contactOption: "https://schema.org/TollFree",
    },
    {
      "@type": "ContactPoint",
      telephone: "+2349020636510",
      contactType: "sales",
      areaServed: "NG",
      availableLanguage: "English",
    },
  ],
  sameAs: [
    "https://share.google/5eRgqSVV46VCD5zOu",
  ],
  knowsAbout: [
    "Bajaj Boxer spare parts export",
    "TVS HLX spare parts",
    "Bajaj RE Keke Napep parts",
    "TVS King three-wheeler parts",
    "India to Africa spare parts trade",
    "FOB Mumbai CIF Africa shipping",
  ],
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
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
