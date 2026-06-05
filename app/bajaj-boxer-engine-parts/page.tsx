import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bajaj Boxer Engine Parts — Wholesale Exporter from India to Africa | CrestMAX",
  description: "CrestMAX exports Bajaj Boxer BM150 engine parts wholesale from India to Africa. Piston kits, gasket sets, crankshafts, valve kits, cam chains. FOB Mumbai or CIF any port.",
  alternates: { canonical: "https://crestmax.in/bajaj-boxer-engine-parts" },
  openGraph: {
    title: "Bajaj Boxer Engine Parts — Wholesale Exporter from India | CrestMAX",
    description: "Bajaj Boxer BM150 engine parts: piston kits, gaskets, crankshafts, valve kits. Wholesale from Ludhiana, India to Africa.",
    url: "https://crestmax.in/bajaj-boxer-engine-parts",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Bajaj Spare Parts", item: "https://crestmax.in/bajaj-spare-parts" },
    { "@type": "ListItem", position: 3, name: "Bajaj Boxer Engine Parts", item: "https://crestmax.in/bajaj-boxer-engine-parts" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What Bajaj Boxer engine parts does CrestMAX export?",
      acceptedAnswer: { "@type": "Answer", text: "CrestMAX exports a complete range of Bajaj Boxer BM150 engine parts including: piston kits (standard and oversize 0.25/0.50/0.75mm), piston ring sets, complete gasket sets, cylinder head gaskets, engine oil seal kits, cylinder barrels, valve kits (inlet and exhaust), cam chains and tensioner kits, crankshafts, connecting rods, and engine bearings. All sourced from specialist Ludhiana manufacturers." },
    },
    {
      "@type": "Question",
      name: "Why are Boxer engine parts the highest-demand parts in Africa?",
      acceptedAnswer: { "@type": "Answer", text: "The Bajaj Boxer BM150 is used as a commercial motorcycle in Nigeria, Ghana, Kenya, Uganda and across Africa — operating 8–12 hours daily, 6–7 days per week. This high-mileage commercial use leads to engine wear much faster than personal-use motorcycles. Piston rings, gaskets, and valve kits are the first items to wear, typically needing replacement every 20,000–40,000 km. A commercial Boxer in Lagos or Nairobi may reach this mileage within 6–12 months." },
    },
    {
      "@type": "Question",
      name: "Are CrestMAX Bajaj Boxer engine parts genuine or aftermarket?",
      acceptedAnswer: { "@type": "Answer", text: "CrestMAX supplies high-quality Indian aftermarket parts — not Bajaj Auto factory-issued parts. Our parts are manufactured by specialist aftermarket manufacturers in Ludhiana, India who have produced Bajaj-compatible engine parts for 25–35 years. They use correct bore dimensions, proper metallurgical grades for pistons, and proven tooling. These are not cheap Chinese copies — they are the same category of quality parts supplied through India's domestic aftermarket." },
    },
    {
      "@type": "Question",
      name: "What is the Bajaj Boxer BM150 engine specification?",
      acceptedAnswer: { "@type": "Answer", text: "The Bajaj Boxer BM150 uses a 147.5cc (commonly called '150cc'), single-cylinder, 4-stroke, air-cooled OHC engine with a bore of 57mm and a stroke of 57.8mm. It produces approximately 14 BHP at 8,500 RPM. The engine uses a 5-speed gearbox. Standard piston bore is 57mm. Oversize pistons (0.25mm, 0.50mm, 0.75mm) are used after cylinder reboring during engine rebuilds." },
    },
  ],
};

const engineParts = [
  "Piston Kit — Standard (57mm bore)",
  "Piston Kit — 0.25mm Oversize (57.25mm)",
  "Piston Kit — 0.50mm Oversize (57.50mm)",
  "Piston Kit — 0.75mm Oversize (57.75mm)",
  "Piston Ring Sets — Standard & Oversize",
  "Cylinder Barrels (standard & rebore grade)",
  "Complete Cylinder Head Gasket Sets",
  "Cylinder Head Gaskets (individual)",
  "Engine Crankcase Gasket Sets",
  "Engine Oil Seal Kits (complete set)",
  "Valve Kits (inlet valves)",
  "Valve Kits (exhaust valves)",
  "Valve Springs & Retainers",
  "Cam Chains (primary & secondary)",
  "Cam Chain Tensioner Kits",
  "Crankshafts (complete assembly)",
  "Connecting Rods",
  "Big End Bearing Kits",
  "Small End Needle Bearing Kits",
  "Main Bearings (crankshaft support)",
  "Cylinder Head Assemblies",
  "Rocker Arms & Rocker Shafts",
  "Timing Sprockets",
  "Engine Mounting Bolts & Stud Kits",
  "Tappet / Valve Clearance Shim Sets",
];

export default function BajajBoxerEnginePartsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Bajaj Boxer BM150 · Engine Parts</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Bajaj Boxer Engine Parts —<br />
            <span style={{ color: "var(--cm-gold)" }}>Wholesale Exporter from India to Africa</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            CrestMAX exports Bajaj Boxer BM150 engine parts wholesale from Ludhiana, India — piston kits (standard and oversize), gasket sets, crankshafts, valve kits, cam chains, and complete engine rebuild components. FOB Mumbai or CIF to any African port.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Request a Quote
            </Link>
            <Link href="/products/bajaj-boxer" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Full Boxer Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* Engine spec + why demand */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: "48px" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Engine Specification</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "16px" }}>Bajaj Boxer BM150 Engine</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
              {[
                ["Displacement", "147.5cc (marketed as 150cc)"],
                ["Configuration", "Single-cylinder, 4-stroke, OHC, air-cooled"],
                ["Bore × Stroke", "57mm × 57.8mm"],
                ["Standard Piston Bore", "57mm"],
                ["Compression Ratio", "9.5:1"],
                ["Gearbox", "5-speed constant mesh"],
                ["Lubrication", "Wet sump, oil pump"],
              ].map(([spec, value]) => (
                <div key={spec} style={{ display: "flex", justifyContent: "space-between", background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "12px 16px" }}>
                  <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.5px" }}>{spec}</span>
                  <span style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Why Engine Parts Are #1</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "16px" }}>Commercial Use Accelerates Engine Wear</h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              In Africa, the Bajaj Boxer is not a personal commuter — it is a commercial workhorse. Nigerian Okada riders, Kenyan Boda Boda operators, and Ghanaian commercial motorcyclists run their Boxers for 8–12 hours daily, 6–7 days per week, often carrying passengers or heavy loads.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              This commercial intensity means engine parts wear 3–5× faster than personal-use patterns. A piston kit that lasts 5 years on a personal motorcycle may need replacement within 12–18 months on a commercial Boxer. Engine parts are therefore the single highest-volume category for Bajaj Boxer imports across Africa.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>
              CrestMAX's Ludhiana suppliers produce engine kits to correct 57mm bore tolerances with appropriate ring gap specifications for tropical heat conditions — unlike Chinese alternatives which use approximated dimensions leading to early blow-by and oil consumption.
            </p>
          </div>
        </div>
      </section>

      {/* Parts list */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>Engine Parts Catalogue</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "34px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px", textAlign: "center" }}>Bajaj Boxer Engine Parts Available</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: "48px" }}>All parts compatible with Bajaj Boxer BM100 and BM150 variants</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px" }}>
            {engineParts.map((part) => (
              <div key={part} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "14px 18px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "var(--cm-gold)", flexShrink: 0, fontSize: "12px" }}>▸</span>
                <span style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{part}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.4)", textAlign: "center", marginTop: "32px" }}>
            Don&apos;t see a specific part? <Link href="/contact" style={{ color: "var(--cm-gold)" }}>Enquire — we source from the full Ludhiana supply chain →</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>FAQ</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Boxer Engine Parts — Common Questions</h2>
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

      {/* Links */}
      <section style={{ padding: "60px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "24px", textAlign: "center" }}>Also Explore</p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "Boxer Electrical Parts", href: "/bajaj-boxer-electrical-parts" },
              { label: "All Bajaj Spare Parts", href: "/bajaj-spare-parts" },
              { label: "Bajaj Boxer Catalogue", href: "/products/bajaj-boxer" },
              { label: "Bajaj Parts — Nigeria", href: "/bajaj-spare-parts-nigeria" },
              { label: "India vs China Parts", href: "/india-vs-china-spare-parts" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 20px", borderRadius: "2px", textDecoration: "none" }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-mid)", borderTop: "1px solid var(--cm-gold-border)", textAlign: "center" }}>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>Get a Wholesale Quote</p>
        <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4vw, 40px)", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>
          Order Bajaj Boxer Engine Parts
        </h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 36px" }}>
          Send your parts list with quantities. We respond with pricing within 24 hours.
        </p>
        <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
          Request a Quote
        </Link>
      </section>
    </>
  );
}
