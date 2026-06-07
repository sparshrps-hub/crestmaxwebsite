import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Keke Napep Propeller Shaft — India Supplier | CrestMAX" },
  description:
    "Wholesale Keke Napep propeller shaft (drive shaft) supplier from India. Compatible with Bajaj RE, TVS King, and Piaggio Ape tricycles. FOB Ludhiana, CIF Apapa.",
  alternates: { canonical: "https://crestmax.in/keke-napep-propeller-shaft" },
  openGraph: {
    title: "Keke Napep Propeller Shaft — India Supplier | CrestMAX",
    description:
      "Wholesale Keke Napep propeller shaft supplier from India. Bajaj RE and TVS King compatible. FOB Ludhiana, CIF Apapa.",
    url: "https://crestmax.in/keke-napep-propeller-shaft",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://crestmax.in/products" },
    { "@type": "ListItem", position: 3, name: "Keke Napep Propeller Shaft", item: "https://crestmax.in/keke-napep-propeller-shaft" },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Keke Napep Propeller Shaft",
  description: "Aftermarket-compatible propeller shaft (drive shaft) for Keke Napep 3-wheelers — Bajaj RE, TVS King, and Piaggio Ape variants. Forged steel, balanced for vibration-free performance.",
  brand: { "@type": "Brand", name: "CrestMAX" },
  manufacturer: { "@type": "Organization", name: "CrestMAX", url: "https://crestmax.in" },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD", description: "FOB Ludhiana, wholesale pricing on inquiry" },
    seller: { "@type": "Organization", name: "CrestMAX", url: "https://crestmax.in" },
    availability: "https://schema.org/InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the propeller shaft on a Keke Napep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The propeller shaft (also called the drive shaft or cardan shaft) transfers rotational power from the gearbox to the rear differential on Keke Napep 3-wheelers like the Bajaj RE and TVS King. Unlike motorcycles that use a chain drive, most Keke Napep models use a shaft drive system, making the propeller shaft a critical drivetrain component.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know when the propeller shaft needs replacing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common signs: vibration or shuddering during acceleration, clunking noise when engaging the throttle from a standstill, unusual vibration at cruising speed, or visible wear or play in the universal joints at either end of the shaft.",
      },
    },
    {
      "@type": "Question",
      name: "Does CrestMAX supply propeller shafts for both Bajaj RE and TVS King?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We supply propeller shafts compatible with Bajaj RE (all variants), TVS King, and Piaggio Ape. Each has slightly different dimensions — please specify the exact model and year when placing your inquiry so we supply the correct fitment.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum order quantity for Keke Napep propeller shafts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our minimum order is one carton (typically 4–6 units depending on packaging). For export shipments to Nigeria and other African markets, most customers order 20–50 units per shipment alongside other parts to fill a container.",
      },
    },
  ],
};

export default function KeKeNapepPropellerShaftPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "174px", paddingBottom: "80px", textAlign: "center", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>
            Drivetrain · Keke Napep
          </p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 5vw, 54px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Keke Napep<br />
            <span style={{ color: "var(--cm-gold)" }}>Propeller Shaft</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.55)", lineHeight: "1.75", marginBottom: "32px" }}>
            Wholesale propeller shaft (drive shaft) supply from India — compatible with Bajaj RE, TVS King, and Piaggio Ape 3-wheelers. Forged steel, dynamically balanced. Shipped FOB Ludhiana or CIF to Apapa.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Request Wholesale Price
            </Link>
            <a href="https://wa.me/2349020636510" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              WhatsApp Nigeria →
            </a>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px", textAlign: "center" }}>Technical Specifications</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "36px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "48px", textAlign: "center" }}>
            What We Supply
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {[
              {
                label: "Compatible Models",
                value: "Bajaj RE (all variants), TVS King, Piaggio Ape TD",
              },
              {
                label: "Material",
                value: "Forged alloy steel shaft, greaseable universal joints at both ends",
              },
              {
                label: "Balancing",
                value: "Dynamically balanced to minimise vibration — critical for high-cycle commercial use",
              },
              {
                label: "Fitment",
                value: "Direct OEM-compatible replacement — no modification required",
              },
              {
                label: "HS Code (India Export)",
                value: "8708.99 — parts and accessories of motor vehicles",
              },
              {
                label: "Packaging",
                value: "Individual foam-lined cartons, 4–6 units per master carton",
              },
            ].map(({ label, value }) => (
              <div key={label} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px 24px" }}>
                <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "10px" }}>{label}</p>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: "1.6" }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Why Quality Matters</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "24px" }}>
            The Propeller Shaft is the Most Stress-Loaded Part on a Keke
          </h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            Unlike chain-driven motorcycles, the Keke Napep&apos;s shaft drive transmits 100% of engine torque through a single rotating assembly. The propeller shaft runs at engine speed and must absorb road-induced vibration while transmitting power cleanly to the rear differential. In Nigerian road conditions — potholes, unpaved roads, heavy passenger loads — the shaft faces extreme cyclic stress.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            Low-quality propeller shafts from unknown suppliers often fail in two ways: universal joint seizure (causing sudden loss of drive) or shaft imbalance (causing progressive vibration that destroys gearbox and differential bearings over time). Keke operators lose income for every day their vehicle is off the road.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85" }}>
            CrestMAX sources propeller shafts from manufacturers supplying the same factories that make parts for Bajaj&apos;s Indian production line. Each shaft is dynamically balanced before dispatch — not a paper specification but an actual measurement. This is why our shafts are a wholesale staple for Nigerian distributors who serve commercial Keke fleets where reliability is non-negotiable.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>Questions</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>
            Frequently Asked
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { q: "What is the propeller shaft on a Keke Napep?", a: "The propeller shaft (also called the drive shaft or cardan shaft) transfers rotational power from the gearbox to the rear differential on Keke Napep 3-wheelers like the Bajaj RE and TVS King. Unlike motorcycles that use a chain drive, most Keke Napep models use a shaft drive system, making the propeller shaft a critical drivetrain component." },
              { q: "How do I know when the propeller shaft needs replacing?", a: "Common signs: vibration or shuddering during acceleration, clunking noise when engaging the throttle from a standstill, unusual vibration at cruising speed, or visible wear or play in the universal joints at either end of the shaft." },
              { q: "Does CrestMAX supply shafts for both Bajaj RE and TVS King?", a: "Yes. We supply propeller shafts compatible with Bajaj RE (all variants), TVS King, and Piaggio Ape. Each has slightly different dimensions — please specify the exact model and year when placing your inquiry." },
              { q: "What is the minimum order quantity?", a: "Our minimum order is one carton (typically 4–6 units depending on packaging). For export shipments, most customers order 20–50 units per shipment alongside other parts to fill a container efficiently." },
            ].map(({ q, a }, i) => (
              <div key={i} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px" }}>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "17px", letterSpacing: "1px", color: "#FFFFFF", marginBottom: "10px" }}>{q}</p>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: "1.7", margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related + CTA */}
      <section style={{ padding: "60px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Related Products & Guides</p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
            <Link href="/keke-napep-parts-nigeria" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>All Keke Napep Parts →</Link>
            <Link href="/keke-napep-engine-parts" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>Keke Napep Engine Parts →</Link>
            <Link href="/import-guide/nigeria" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>Nigeria Import Guide →</Link>
            <Link href="/hs-codes-motorcycle-spare-parts" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>HS Codes Reference →</Link>
          </div>
          <div style={{ textAlign: "center", background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "40px" }}>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>
              Ready to Order?
            </h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.55)", marginBottom: "28px" }}>
              Send us your required quantities. We respond with wholesale pricing and shipping terms within 24 hours.
            </p>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
