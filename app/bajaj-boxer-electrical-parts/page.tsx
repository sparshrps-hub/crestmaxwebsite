import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bajaj Boxer Electrical Parts — Wholesale Exporter from India | CrestMAX",
  description: "CrestMAX exports Bajaj Boxer BM150 electrical parts: CDI units, rectifiers, magneto coils, wiring harnesses, starter motors. Wholesale from India to Africa. Enquire now.",
  alternates: { canonical: "https://crestmax.in/bajaj-boxer-electrical-parts" },
  openGraph: {
    title: "Bajaj Boxer Electrical Parts — Wholesale from India | CrestMAX",
    description: "Bajaj Boxer electrical parts: CDI units, rectifiers, magneto coils, stators, wiring harnesses. Wholesale exporter from Ludhiana, India to Africa.",
    url: "https://crestmax.in/bajaj-boxer-electrical-parts",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Bajaj Spare Parts", item: "https://crestmax.in/bajaj-spare-parts" },
    { "@type": "ListItem", position: 3, name: "Bajaj Boxer Electrical Parts", item: "https://crestmax.in/bajaj-boxer-electrical-parts" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What Bajaj Boxer electrical parts does CrestMAX supply?",
      acceptedAnswer: { "@type": "Answer", text: "CrestMAX supplies a complete range of Bajaj Boxer BM150 electrical and ignition parts including: CDI units (AC and DC), rectifier/regulator units, magneto/stator coils, ignition coils, starter motors, starter relays, wiring harnesses (complete looms), headlight assemblies, indicator assemblies, tail light assemblies, horn assemblies, battery leads, and switch assemblies." },
    },
    {
      "@type": "Question",
      name: "Why do Boxer electrical parts fail frequently in Africa?",
      acceptedAnswer: { "@type": "Answer", text: "Electrical failures are the second most common maintenance issue for Bajaj Boxer motorcycles in Africa after engine wear. The main causes: (1) Heat — ambient temperatures in West Africa regularly exceed 35–40°C, accelerating CDI unit and rectifier degradation; (2) Voltage irregularity — weak charging systems or jump-starting with car batteries damages rectifiers and CDI units; (3) Moisture and dust infiltration into connectors in wet-season conditions; (4) Low-quality replacement parts (Chinese CDI units especially) failing after 2–6 months." },
    },
    {
      "@type": "Question",
      name: "Are CDI units the most commonly ordered Boxer electrical part?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — CDI (Capacitor Discharge Ignition) units are the most ordered Boxer electrical part from Africa. CDI failures cause complete no-start conditions and are a common misdiagnosis issue (mechanics sometimes replace spark plugs, coils, or carburettors before identifying the CDI as the fault). CrestMAX supplies both AC-CDI and DC-CDI variants compatible with the Boxer BM150. We recommend ordering in quantities of 5–10 units per container as they are fast-moving items." },
    },
  ],
};

const electricalParts = [
  { cat: "Ignition & CDI", parts: ["CDI Units (AC type — standard Boxer)", "CDI Units (DC type — Boxer with battery ignition)", "Ignition Coils (HT coils)", "Spark Plug Caps / HT Leads", "Magneto Rotor / Flywheel Magnets", "Stator Coils (magneto plates)", "Pick-up Coils / Pulse Generators", "Ignition Key Switch Assemblies"] },
  { cat: "Charging & Starting", parts: ["Rectifier / Regulator Units (6V & 12V)", "Starter Motors (electric start models)", "Starter Relays / Solenoids", "Bendix Drive Assemblies", "Alternator Rotor Assemblies", "Battery Leads & Terminal Sets"] },
  { cat: "Lighting & Indicators", parts: ["Headlight Assemblies (complete)", "Headlight Bulbs (35/35W H4)", "Tail Light Assemblies", "Indicator Assemblies (front pair)", "Indicator Assemblies (rear pair)", "Indicator Relay / Flasher Units", "Brake Light Switches (front & rear)"] },
  { cat: "Wiring & Controls", parts: ["Complete Wiring Harnesses", "Left Handlebar Switch Assemblies", "Right Handlebar Switch Assemblies", "Horn Assemblies (12V)", "Speedometer Assemblies", "Speedometer Cables", "Instrument Cluster Bulbs"] },
];

export default function BajajBoxerElectricalPartsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Bajaj Boxer BM150 · Electrical Parts</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Bajaj Boxer Electrical Parts —<br />
            <span style={{ color: "var(--cm-gold)" }}>Wholesale Exporter from India</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            CrestMAX exports Bajaj Boxer BM150 electrical and ignition parts wholesale from Ludhiana, India — CDI units, rectifiers, stator coils, wiring harnesses, starter motors, lighting assemblies. Fast-moving electrical items for African mechanics and distributors.
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

      {/* Parts */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>Electrical Parts Catalogue</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "34px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "48px", textAlign: "center" }}>Bajaj Boxer Electrical Parts</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "20px" }}>
            {electricalParts.map(({ cat, parts }) => (
              <div key={cat} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px 24px" }}>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "2px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>{cat}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {parts.map((p) => (
                    <li key={p} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <span style={{ color: "var(--cm-gold)", flexShrink: 0 }}>—</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why electrical fails */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>Why Electrical Parts Matter</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "30px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "24px", textAlign: "center" }}>Electrical Failures in African Conditions</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
            Electrical failures are the second most common maintenance issue for commercial Boxer motorcycles in Africa. CDI unit failures are particularly prevalent — they account for 30–40% of "won't start" service calls that are not engine-related.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
            African operating conditions are hard on electrical parts: extreme heat degrades capacitors in CDI units, irregular voltage from weak batteries damages rectifiers, and wet-season moisture causes wiring harness corrosion. Chinese CDI units commonly fail within 2–4 months under these conditions.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>
            CrestMAX sources CDI units and rectifiers from Ludhiana manufacturers who have engineered their products specifically for tropical conditions — using capacitors and components rated for sustained high-temperature operation. The failure rate difference between Indian and Chinese Boxer CDI units is immediately apparent to African mechanics who stock both.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>FAQ</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Boxer Electrical Parts — Questions</h2>
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

      {/* Links + CTA */}
      <section style={{ padding: "60px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "24px", textAlign: "center" }}>Also Explore</p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "Boxer Engine Parts", href: "/bajaj-boxer-engine-parts" },
              { label: "All Bajaj Spare Parts", href: "/bajaj-spare-parts" },
              { label: "Bajaj Parts — Nigeria", href: "/bajaj-spare-parts-nigeria" },
              { label: "Full Boxer Catalogue", href: "/products/bajaj-boxer" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 20px", borderRadius: "2px", textDecoration: "none" }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cm-navy-mid)", borderTop: "1px solid var(--cm-gold-border)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4vw, 40px)", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>
          Order Boxer Electrical Parts
        </h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 36px" }}>
          Send your parts list. Wholesale pricing within 24 hours.
        </p>
        <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
          Request a Quote
        </Link>
      </section>
    </>
  );
}
