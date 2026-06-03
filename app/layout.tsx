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
  title: "Crestmax Pvt Ltd | Indian Spare Parts Exporter for Africa | 2-Wheeler & 3-Wheeler Parts",
  description: "Crestmax Pvt Ltd — Premium 2-wheeler and 3-wheeler spare parts exported from India to Africa. Wholesale B2B supplier for Nigeria, Ghana, Kenya, Tanzania and 12+ African nations.",
  keywords: "India spare parts export Africa, Bajaj RE parts Nigeria, TVS King parts Kenya, Keke Napep parts supplier, 2-wheeler spare parts exporter Africa",
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
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
