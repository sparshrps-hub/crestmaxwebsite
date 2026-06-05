import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CT100 Engine Parts Exporter from India — Wholesale to Africa | CrestMAX",
  description: "CrestMAX exports CT100 engine parts wholesale from India to Africa. Piston kits, gasket sets, crankshafts, valve kits. Standard and oversize. FOB or CIF.",
  alternates: { canonical: "https://crestmax.in/ct100-engine-parts" },
  openGraph: {
    title: "CT100 Engine Parts Exporter from India | CrestMAX",
    description: "CT100 engine parts: piston kits, gasket sets, crankshafts, valve kits. Wholesale from Ludhiana, India to Africa.",
    url: "https://crestmax.in/ct100-engine-parts",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "CT100 Spare Parts", item: "https://crestmax.in/ct100-spare-parts-africa" },
    { "@type": "ListItem", position: 3, name: "CT100 Engine Parts", item: "https://crestmax.in/ct100-engine-parts" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What CT100 engine parts does CrestMAX export?",
      acceptedAnswer: { "@type": "Answer", text: "CrestMAX exports CT100 engine parts including: piston kits (standard 50mm and oversize 0.25/0.50/0.75mm), piston ring sets, complete gasket sets, cylinder head gaskets, engine oil seal kits, cylinder barrels, valve kits, cam chains, crankshafts, connecting rods, and engine bearings. All compatible with Bajaj CT100, CT100B, and CT100ES variants." },
    },
    {
      "@type": "Question",
      name: "What is the CT100 engine bore size?",
      acceptedAnswer: { "@type": "Answer", text: "The Bajaj CT100 uses a 99.27cc (nominally 100cc) single-cylinder engine with a standard bore of 50mm and a stroke of 50.6mm. Standard piston diameter is 50mm. When the cylinder is rebored, oversize pistons are used: 50.25mm (0.25mm OS), 50.50mm (0.50mm OS), 50.75mm (0.75mm OS). CrestMAX supplies all four sizes. The CT100 engine is significantly smaller than the Boxer's 57mm bore — parts are NOT interchangeable." },
    },
    {
      "@type": "Question",
      name: "How often do CT100 engine parts need replacing in African conditions?",
      acceptedAnswer: { "@type": "Answer", text: "Under commercial use in Africa (daily taxi or courier work), CT100 piston rings typically need replacement at 20,000–30,000 km. A complete engine kit (piston, rings, gaskets) is usually required at 40,000–60,000 km. Under personal daily use, the engine can run 60,000–80,000 km before major work is needed. The CT100's 100cc engine is simpler and cheaper to rebuild than the Boxer's 150cc unit — this is one reason it is popular in cost-sensitive markets." },
    },
  ],
};

const ct100EngineParts = [
  "Piston Kit — Standard (50mm bore)",
  "Piston Kit — 0.25mm Oversize (50.25mm)",
  "Piston Kit — 0.50mm Oversize (50.50mm)",
  "Piston Kit — 0.75mm Oversize (50.75mm)",
  "Piston Ring Set — Standard",
  "Piston Ring Set — Oversize grades",
  "Cylinder Barrels (all grades)",
  "Complete Cylinder Gasket Sets",
  "Cylinder Head Gaskets",
  "Crankcase Gasket Sets",
  "Engine Oil Seal Kits (complete)",
  "Valve Kits — Inlet Valves",
  "Valve Kits — Exhaust Valves",
  "Valve Springs & Collets",
  "Cam Chains",
  "Cam Chain Tensioner Kits",
  "Crankshafts (complete assembly)",
  "Connecting Rods",
  "Big End Bearing Kits",
  "Main Bearing Sets",
  "Cylinder Head Assemblies",
  "Rocker Arms & Shaft Kits",
  "Oil Pump Assemblies",
  "Tappet / Valve Clearance Shims",
];

export default function CT100EnginePartsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Bajaj CT100 · Engine Parts</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            CT100 Engine Parts —<br />
            <span style={{ color: "var(--cm-gold)" }}>Wholesale Exporter from India to Africa</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            Complete CT100 engine rebuild parts exported wholesale from Ludhiana, India — piston kits in all bore sizes, gasket sets, crankshafts, valve kits, cam chains, and bearings. Compatible with CT100, CT100B, and CT100ES variants.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Request a Quote
            </Link>
            <Link href="/ct100-piston-kit" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              CT100 Piston Kits
            </Link>
          </div>
        </div>
      </section>

      {/* Spec + parts grid */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: "48px" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Engine Specification</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "26px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "16px" }}>CT100 Engine Specs</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                ["Displacement", "99.27cc (100cc)"],
                ["Configuration", "Single-cylinder, 4-stroke, OHC, air-cooled"],
                ["Bore × Stroke", "50mm × 50.6mm"],
                ["Standard Piston Bore", "50mm"],
                ["Gearbox", "4-speed constant mesh"],
                ["Lubrication", "Wet sump"],
                ["Cooling", "Air-cooled, fin cylinder"],
              ].map(([spec, value]) => (
                <div key={spec} style={{ display: "flex", justifyContent: "space-between", background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "12px 16px" }}>
                  <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{spec}</span>
                  <span style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Piston Sizes Available</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "26px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "16px" }}>Standard & Oversize Pistons</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { size: "Standard — 50.00mm", use: "New cylinder / fresh engine" },
                { size: "0.25mm OS — 50.25mm", use: "After first rebore" },
                { size: "0.50mm OS — 50.50mm", use: "After second rebore" },
                { size: "0.75mm OS — 50.75mm", use: "After third rebore (max)" },
              ].map(({ size, use }) => (
                <div key={size} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "16px 18px" }}>
                  <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "1px", color: "var(--cm-gold)", marginBottom: "4px" }}>{size}</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", margin: 0 }}>{use}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "14px" }}>
              See also: <Link href="/ct100-piston-kit" style={{ color: "var(--cm-gold)" }}>CT100 Piston Kit — Full Specification →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Full parts list */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>CT100 Engine Parts We Export</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px" }}>
            {ct100EngineParts.map((part) => (
              <div key={part} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "14px 18px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "var(--cm-gold)", flexShrink: 0, fontSize: "12px" }}>▸</span>
                <span style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{part}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>CT100 Engine Parts — FAQ</h2>
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

      <section style={{ padding: "60px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "CT100 Piston Kit — Full Spec", href: "/ct100-piston-kit" },
              { label: "All CT100 Parts", href: "/ct100-spare-parts-africa" },
              { label: "CT100 Catalogue", href: "/products/ct100" },
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
        <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4vw, 40px)", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>Order CT100 Engine Parts</h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 36px" }}>Send your parts list. Wholesale pricing within 24 hours.</p>
        <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
          Request a Quote
        </Link>
      </section>
    </>
  );
}
