import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keke Napep Engine Parts Supplier from India — Bajaj RE | CrestMAX",
  description: "CrestMAX exports Keke Napep (Bajaj RE) engine parts wholesale from India. Piston kits, gasket sets, crankshafts for RE 4S, RE Compact, Bajaj Maxima. FOB or CIF Africa.",
  alternates: { canonical: "https://crestmax.in/keke-napep-engine-parts" },
  openGraph: {
    title: "Keke Napep Engine Parts from India — Bajaj RE | CrestMAX",
    description: "Keke Napep / Bajaj RE engine parts: piston kits, gaskets, crankshafts. Wholesale from Ludhiana, India. RE 4S, RE Compact, Maxima compatible.",
    url: "https://crestmax.in/keke-napep-engine-parts",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Bajaj 3-Wheeler Parts", item: "https://crestmax.in/bajaj-three-wheeler-parts" },
    { "@type": "ListItem", position: 3, name: "Keke Napep Engine Parts", item: "https://crestmax.in/keke-napep-engine-parts" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What Keke Napep engine parts does CrestMAX supply?",
      acceptedAnswer: { "@type": "Answer", text: "CrestMAX supplies Keke Napep (Bajaj RE) engine parts including: piston kits for 200cc, 205cc, and 225cc variants, complete gasket sets, oil seal kits, cylinder barrels, valve kits, cam chains, crankshafts, connecting rods, flywheel ring gears, bendix drive assemblies, and engine bearings. We supply parts compatible with Bajaj RE 4S, RE Compact, and Bajaj Maxima." },
    },
    {
      "@type": "Question",
      name: "What engine does the Keke Napep (Bajaj RE) use?",
      acceptedAnswer: { "@type": "Answer", text: "The most common Keke Napep variants in Nigeria use: Bajaj RE 4-Stroke (4S) — 198.9cc, single-cylinder, 4-stroke OHC engine; Bajaj RE Compact — 198.9cc similar engine; Bajaj Maxima — 225.7cc, slightly larger bore. All use air-cooled, single-cylinder 4-stroke engines. The engine is the same basic family as the Bajaj motorcycle engines but tuned for 3-wheeler torque demands. Engine kits are NOT directly interchangeable with Bajaj Boxer or CT100 parts." },
    },
    {
      "@type": "Question",
      name: "Are Keke Napep engine rebuilds common in Nigeria?",
      acceptedAnswer: { "@type": "Answer", text: "Engine rebuilds on Keke Napep are less frequent than drivetrain (propeller shaft) replacements, but still common. A commercial Keke running 12+ hours daily typically needs a piston and gasket kit replacement at 40,000–60,000 km. The flywheel ring gear and bendix drive (starter engagement components) are also common failure items. CrestMAX supplies all these parts to Nigerian importers in wholesale quantities." },
    },
  ],
};

const reEngineParts = [
  "Piston Kit — 198.9cc Standard (RE 4S / RE Compact)",
  "Piston Kit — 225.7cc Standard (Bajaj Maxima)",
  "Piston Kit — 0.25mm Oversize (RE variants)",
  "Piston Kit — 0.50mm Oversize (RE variants)",
  "Piston Ring Sets — Standard & Oversize",
  "Complete Cylinder Gasket Sets (RE 4S)",
  "Complete Cylinder Gasket Sets (Maxima)",
  "Cylinder Head Gaskets",
  "Engine Oil Seal Kits",
  "Cylinder Barrels",
  "Valve Kits — Inlet & Exhaust",
  "Valve Springs",
  "Cam Chains & Tensioners",
  "Crankshafts (complete)",
  "Connecting Rods",
  "Big End Bearing Kits",
  "Flywheel Ring Gears",
  "Bendix Drive Assemblies (starter gear)",
  "Starter Motors",
  "Oil Pump Assemblies",
  "Cylinder Head Assemblies",
];

export default function KekeNapepEnginePartsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Keke Napep / Bajaj RE · Engine Parts</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Keke Napep Engine Parts —<br />
            <span style={{ color: "var(--cm-gold)" }}>Wholesale Supplier from India</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            CrestMAX exports Bajaj RE / Keke Napep engine parts wholesale from Ludhiana, India — piston kits for 200cc and 225cc variants, gasket sets, crankshafts, flywheel ring gears, and engine rebuild components. Compatible with RE 4S, RE Compact, and Bajaj Maxima.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Request a Quote
            </Link>
            <Link href="/products/bajaj-re" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Full RE Catalogue
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px", textAlign: "center" }}>Keke Napep Engine Parts We Export</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: "48px" }}>Compatible with Bajaj RE 4S, RE Compact, and Bajaj Maxima</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px" }}>
            {reEngineParts.map((part) => (
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
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Keke Napep Engine Parts — FAQ</h2>
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
              { label: "All Keke Napep Parts", href: "/bajaj-three-wheeler-parts" },
              { label: "Keke Napep Parts — Nigeria", href: "/keke-napep-parts-nigeria" },
              { label: "Bajaj RE Full Catalogue", href: "/products/bajaj-re" },
              { label: "All Bajaj Spare Parts", href: "/bajaj-spare-parts" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 20px", borderRadius: "2px", textDecoration: "none" }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cm-navy-mid)", borderTop: "1px solid var(--cm-gold-border)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4vw, 40px)", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>Order Keke Napep Engine Parts</h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 36px" }}>Specify RE model variant. Wholesale pricing within 24 hours.</p>
        <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
          Request a Quote
        </Link>
      </section>
    </>
  );
}
