import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TVS King Engine Parts Exporter from India — Wholesale to Africa | CrestMAX",
  description: "CrestMAX exports TVS King three-wheeler engine parts wholesale from India to Africa. Piston kits, gasket sets, crankshafts. FOB Mumbai or CIF to any African port.",
  alternates: { canonical: "https://crestmax.in/tvs-king-engine-parts" },
  openGraph: {
    title: "TVS King Engine Parts from India — Africa | CrestMAX",
    description: "TVS King engine parts: piston kits, gaskets, crankshafts. Wholesale from Ludhiana, India to Africa.",
    url: "https://crestmax.in/tvs-king-engine-parts",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "TVS King Parts", item: "https://crestmax.in/tvs-king-parts" },
    { "@type": "ListItem", position: 3, name: "TVS King Engine Parts", item: "https://crestmax.in/tvs-king-engine-parts" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What TVS King engine parts does CrestMAX export?",
      acceptedAnswer: { "@type": "Answer", text: "CrestMAX exports TVS King engine parts including: piston kits (standard and oversize) for the TVS King's 197.2cc or 226.7cc engine variants, complete gasket sets, cylinder head gaskets, engine oil seal kits, cylinder barrels, valve kits, cam chains, crankshafts, connecting rods, and engine bearings. Specify your TVS King variant when enquiring." },
    },
    {
      "@type": "Question",
      name: "Is the TVS King popular in East Africa?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — the TVS King is widely used across East Africa, particularly in Uganda, Tanzania, and Kenya as an urban auto-rickshaw. It competes directly with the Bajaj RE (Keke Napep) in Nigeria. In Uganda and Tanzania, the TVS King is often the preferred three-wheeler for urban taxi operations due to its build quality and available spare parts network." },
    },
    {
      "@type": "Question",
      name: "What is the TVS King engine specification?",
      acceptedAnswer: { "@type": "Answer", text: "The TVS King uses a 197.2cc (King 200) or 226.7cc (King Deluxe) single-cylinder, 4-stroke, air-cooled engine. The 200cc variant has an approximately 63mm bore. It is a torquey, low-rpm engine designed for the stop-start loads of urban three-wheeler taxi operation. Engine parts are model-specific and should not be substituted with parts from other TVS motorcycles." },
    },
  ],
};

const kingEngineParts = [
  "Piston Kits — TVS King 200 (Standard)",
  "Piston Kits — TVS King Deluxe (Standard)",
  "Piston Kits — 0.25mm Oversize (all variants)",
  "Piston Kits — 0.50mm Oversize (all variants)",
  "Piston Ring Sets",
  "Complete Gasket Sets",
  "Cylinder Head Gaskets",
  "Engine Oil Seal Kits",
  "Cylinder Barrels",
  "Valve Kits (inlet & exhaust)",
  "Valve Springs",
  "Cam Chains & Tensioners",
  "Crankshafts",
  "Connecting Rods",
  "Big End Bearing Kits",
  "Starter Motor Assemblies",
  "Flywheel Ring Gears",
  "Bendix Drive Assemblies",
  "Cylinder Head Assemblies",
  "Rocker Arms & Shaft Kits",
];

export default function TVSKingEnginePartsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>TVS King Three-Wheeler · Engine Parts</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            TVS King Engine Parts —<br />
            <span style={{ color: "var(--cm-gold)" }}>Wholesale Exporter from India to Africa</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            CrestMAX exports TVS King three-wheeler engine parts wholesale from Ludhiana, India — piston kits, gasket sets, crankshafts, and rebuild components for TVS King 200 and King Deluxe variants. FOB Mumbai or CIF to any African port.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Request a Quote
            </Link>
            <Link href="/products/tvs-king" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Full TVS King Catalogue
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px", textAlign: "center" }}>TVS King Engine Parts We Export</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: "48px" }}>Specify TVS King 200 or King Deluxe variant when ordering</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px" }}>
            {kingEngineParts.map((part) => (
              <div key={part} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "14px 18px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "var(--cm-gold)", flexShrink: 0, fontSize: "12px" }}>▸</span>
                <span style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{part}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>TVS King Engine Parts — FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px" }}>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "17px", letterSpacing: "1px", color: "#FFFFFF", marginBottom: "10px" }}>{item.name}</p>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: "1.7", margin: 0 }}>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "All TVS King Parts", href: "/tvs-king-parts" },
              { label: "All TVS Spare Parts", href: "/tvs-spare-parts" },
              { label: "TVS King Catalogue", href: "/products/tvs-king" },
              { label: "Keke Napep Engine Parts", href: "/keke-napep-engine-parts" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 20px", borderRadius: "2px", textDecoration: "none" }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cm-navy-mid)", borderTop: "1px solid var(--cm-gold-border)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4vw, 40px)", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>Order TVS King Engine Parts</h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 36px" }}>Specify King 200 or King Deluxe. Pricing within 24 hours.</p>
        <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
          Request a Quote
        </Link>
      </section>
    </>
  );
}
