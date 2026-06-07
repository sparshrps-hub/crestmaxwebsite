import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TVS HLX Engine Parts Exporter from India — East Africa | CrestMAX",
  description: "CrestMAX exports TVS HLX 100 and HLX 125 engine parts wholesale from India to East Africa. Piston kits, gasket sets, crankshafts. Boda Boda sector supply. FOB or CIF Mombasa.",
  alternates: { canonical: "https://crestmax.in/tvs-hlx-engine-parts" },
  openGraph: {
    title: "TVS HLX Engine Parts from India — East Africa | CrestMAX",
    description: "TVS HLX 100/125 engine parts wholesale from Ludhiana, India to East Africa. Piston kits, gaskets, crankshafts. CIF Mombasa.",
    url: "https://crestmax.in/tvs-hlx-engine-parts",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "TVS Spare Parts", item: "https://crestmax.in/tvs-spare-parts" },
    { "@type": "ListItem", position: 3, name: "TVS HLX Engine Parts", item: "https://crestmax.in/tvs-hlx-engine-parts" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What TVS HLX engine parts does CrestMAX export?",
      acceptedAnswer: { "@type": "Answer", text: "CrestMAX exports TVS HLX engine parts including: piston kits for HLX 100 (50mm bore) and HLX 125 (52.4mm bore), standard and oversize grades, complete gasket sets, cylinder head gaskets, engine oil seal kits, cylinder barrels, valve kits, cam chains, crankshafts, and connecting rods. All parts are compatible with TVS HLX 100 and HLX 125 variants sold in East Africa." },
    },
    {
      "@type": "Question",
      name: "Is the TVS HLX popular in Kenya and East Africa?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — the TVS HLX 100 and HLX 125 are among the two or three most popular Boda Boda motorcycles in Kenya, Uganda, and Tanzania. TVS has strong brand recognition and dealer networks across East Africa, and the HLX's fuel efficiency and reliability in highland terrain make it well-suited to the Kenyan Boda Boda market. Engine parts are in constant demand from mechanics across Nairobi, Mombasa, Kisumu, and Kampala." },
    },
    {
      "@type": "Question",
      name: "What is the TVS HLX engine specification?",
      acceptedAnswer: { "@type": "Answer", text: "The TVS HLX 100 uses a 99.7cc (100cc), single-cylinder, 4-stroke, air-cooled engine with 50mm bore × 50.6mm stroke. The TVS HLX 125 uses a 124.7cc engine with 52.4mm bore × 57.8mm stroke. Both engines are OHC single-cylinders and the piston kits are NOT interchangeable between the two variants. CrestMAX supplies piston kits for both variants." },
    },
  ],
};

const hlxEngineParts = [
  "Piston Kit — HLX 100 Standard (50mm)",
  "Piston Kit — HLX 125 Standard (52.4mm)",
  "Piston Kit — 0.25mm OS (HLX 100 & 125)",
  "Piston Kit — 0.50mm OS (HLX 100 & 125)",
  "Piston Ring Sets — All variants",
  "Complete Gasket Sets (HLX 100)",
  "Complete Gasket Sets (HLX 125)",
  "Cylinder Head Gaskets",
  "Engine Oil Seal Kits",
  "Cylinder Barrels",
  "Valve Kits (inlet & exhaust)",
  "Valve Springs & Collets",
  "Cam Chains & Tensioners",
  "Crankshafts (HLX 100 & 125)",
  "Connecting Rods",
  "Big End Bearing Kits",
  "Main Bearing Sets",
  "Cylinder Head Assemblies",
  "Rocker Arms & Shafts",
];

export default function TVSHLXEnginePartsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "174px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>TVS HLX 100 / 125 · Engine Parts</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            TVS HLX Engine Parts —<br />
            <span style={{ color: "var(--cm-gold)" }}>Wholesale Exporter from India to East Africa</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            CrestMAX exports TVS HLX 100 and HLX 125 engine parts wholesale from Ludhiana, India to Boda Boda parts distributors and importers across Kenya, Uganda, and Tanzania. CIF Mombasa or FOB Mumbai.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Request a Quote
            </Link>
            <Link href="/products/tvs-hlx" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Full HLX Catalogue
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px", textAlign: "center" }}>TVS HLX Engine Parts We Export</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: "48px" }}>Compatible with TVS HLX 100 and TVS HLX 125 — specify variant when ordering</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px", marginBottom: "40px" }}>
            {hlxEngineParts.map((part) => (
              <div key={part} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "14px 18px", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "var(--cm-gold)", flexShrink: 0, fontSize: "12px" }}>▸</span>
                <span style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{part}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "20px 24px", maxWidth: "700px", margin: "0 auto" }}>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: "1.6" }}>
              <strong style={{ color: "var(--cm-gold)" }}>Important:</strong> TVS HLX 100 and HLX 125 piston kits are NOT interchangeable. HLX 100 bore = 50mm. HLX 125 bore = 52.4mm. Always specify which variant you need when ordering.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>TVS HLX Engine Parts — FAQ</h2>
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
              { label: "All TVS Spare Parts", href: "/tvs-spare-parts" },
              { label: "TVS HLX Catalogue", href: "/products/tvs-hlx" },
              { label: "Bajaj Parts — Kenya", href: "/bajaj-spare-parts-kenya" },
              { label: "Kenya Market Guide", href: "/markets/kenya" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 20px", borderRadius: "2px", textDecoration: "none" }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cm-navy-mid)", borderTop: "1px solid var(--cm-gold-border)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4vw, 40px)", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>Order TVS HLX Engine Parts</h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 36px" }}>Specify HLX 100 or HLX 125. Wholesale pricing within 24 hours.</p>
        <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
          Request a Quote
        </Link>
      </section>
    </>
  );
}
