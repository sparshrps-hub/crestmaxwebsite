import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bajaj Spare Parts Exporter from India to Africa — Wholesale Supplier | CrestMAX",
  description: "CrestMAX exports high-quality Bajaj-compatible spare parts wholesale from Ludhiana, India to Nigeria, Ghana, Kenya and Africa. Bajaj Boxer, Bajaj Pulsar, CT100 parts. FOB Mumbai or CIF.",
  alternates: { canonical: "https://crestmax.in/bajaj-spare-parts" },
  openGraph: {
    title: "Bajaj Spare Parts Exporter from India to Africa | CrestMAX",
    description: "Wholesale Bajaj 2-wheeler spare parts exported from Ludhiana, India to Africa. Bajaj Boxer, Pulsar, CT100. FOB Mumbai or CIF to your port.",
    url: "https://crestmax.in/bajaj-spare-parts",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Bajaj Spare Parts", item: "https://crestmax.in/bajaj-spare-parts" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Does CrestMAX export Bajaj spare parts to Africa?", acceptedAnswer: { "@type": "Answer", text: "Yes — CrestMAX exports wholesale Bajaj 2-wheeler spare parts from Ludhiana, India to Nigeria, Ghana, Kenya, Tanzania, Uganda and 12+ African nations. We ship FOB Mumbai or CIF to your port." } },
    { "@type": "Question", name: "Which Bajaj 2-wheeler models do you supply parts for?", acceptedAnswer: { "@type": "Answer", text: "We supply parts for Bajaj Boxer BM100/BM150, Bajaj Pulsar 150/180/200, Bajaj CT100, Bajaj Platina, and Bajaj Discover. Our strongest stock is for Bajaj Boxer and CT100 — the most widely used Bajaj motorcycles across Africa." } },
    { "@type": "Question", name: "Are your Bajaj spare parts high quality?", acceptedAnswer: { "@type": "Answer", text: "Yes — all parts are sourced from specialist aftermarket manufacturers in Ludhiana, India's spare parts manufacturing capital. These manufacturers have 20–35 years of experience producing parts compatible with Bajaj motorcycles. They are not Chinese copies — they are quality Indian aftermarket parts made by experienced specialists." } },
    { "@type": "Question", name: "What is the minimum order for Bajaj spare parts?", acceptedAnswer: { "@type": "Answer", text: "We work with wholesale buyers. Minimum is typically one LCL shipment (1–3 CBM) for mixed Bajaj parts, or one 20-foot container for single-model bulk orders. Contact us with your parts list for pricing." } },
  ],
};

const models = [
  { name: "Bajaj Boxer BM150", href: "/products/bajaj-boxer", desc: "Most popular commercial motorcycle in West Africa. Full engine, suspension, and brake parts available." },
  { name: "Bajaj RE / Keke Napep", href: "/products/bajaj-re", desc: "3-wheeler version — see our dedicated Bajaj 3-Wheeler page for RE parts." },
  { name: "CT100 Motorcycle", href: "/products/ct100", desc: "Light 100cc commuter. High demand across West and East Africa for affordable mobility." },
];

const partCategories = [
  { cat: "Engine & Top End", parts: ["Piston kits & rings", "Cylinder barrels", "Crankshafts", "Connecting rods", "Camshafts & timing chains", "Valve kits", "Gasket sets"] },
  { cat: "Transmission & Clutch", parts: ["Clutch plates (driving & driven)", "Clutch springs", "Gearbox assemblies", "Gear shift forks", "Sprockets & chain sets"] },
  { cat: "Brakes & Wheels", parts: ["Brake shoes & pads", "Brake drums", "Wheel bearings", "Rim sets", "Brake cables & levers"] },
  { cat: "Suspension & Frame", parts: ["Front fork assemblies", "Shock absorbers (rear)", "Swing arm bushes", "Steering ball races", "Frame covers & panels"] },
  { cat: "Electrical & Ignition", parts: ["CDI units", "Magneto coils", "Starter motors", "Rectifiers", "Wiring harnesses", "Bulb sets", "Batteries"] },
  { cat: "Fuel & Filtration", parts: ["Carburettors", "Air filter assemblies", "Fuel taps & pipes", "Oil filters", "Fuel tanks"] },
];

export default function BajajSparePartsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Brand — Bajaj</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 5vw, 56px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Bajaj Spare Parts —<br />
            <span style={{ color: "var(--cm-gold)" }}>Wholesale Exporter from India to Africa</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            CrestMAX exports high-quality Bajaj-compatible spare parts wholesale from Ludhiana, India — the heart of India's spare parts manufacturing belt — to importers, distributors and trading companies across Africa. Bajaj Boxer, CT100, Pulsar, and Platina parts in stock, shipped FOB Mumbai or CIF to any African port.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Request a Quote
            </Link>
            <Link href="/products/bajaj-boxer" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              View Parts Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* Why Bajaj in Africa */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "48px", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Market Context</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>Why Bajaj Dominates Africa's 2-Wheeler Market</h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Bajaj Auto is India's largest motorcycle exporter and Africa's most trusted 2-wheeler brand. With a manufacturing network built specifically for tropical road conditions, high-mileage commercial use, and easily available spare parts, Bajaj motorcycles have become the backbone of commercial transport across Nigeria, Ghana, Kenya, Ethiopia and beyond.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>
              The Bajaj Boxer BM150 is the most widely used commercial motorcycle in West Africa — ridden daily by dispatch riders, Boda Boda operators, and rural transport providers across millions of kilometres. High mileage means high parts consumption: engine kits, brake assemblies, clutch plates, and chain sets are replaced regularly across the continent. CrestMAX sources these parts directly from Ludhiana's OEM-quality manufacturers and ships wholesale to African importers.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Models We Cover</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>Bajaj 2-Wheeler Models</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {models.map((m) => (
                <Link key={m.name} href={m.href} style={{ display: "block", background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "18px 20px", textDecoration: "none" }}>
                  <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "17px", letterSpacing: "1px", color: "var(--cm-gold)", marginBottom: "4px", textTransform: "uppercase" }}>{m.name}</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0 }}>{m.desc}</p>
                </Link>
              ))}
              <div style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "18px 20px" }}>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "17px", letterSpacing: "1px", color: "rgba(255,255,255,0.5)", marginBottom: "4px", textTransform: "uppercase" }}>Bajaj Pulsar 150 / 180 / 200</p>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", margin: 0 }}>Performance segment. Popular in East Africa and South Africa. Enquire for availability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parts Categories */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>What We Supply</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "36px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px", textAlign: "center" }}>Bajaj 2-Wheeler Parts Categories</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: "48px" }}>Complete aftermarket coverage for Bajaj Boxer, CT100, Pulsar, and Platina</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
            {partCategories.map(({ cat, parts }) => (
              <div key={cat} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px 24px" }}>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "2px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>{cat}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {parts.map((p) => (
                    <li key={p} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <span style={{ color: "var(--cm-gold)", marginTop: "2px", flexShrink: 0 }}>—</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets + Sourcing */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "48px" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>African Markets</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "16px" }}>Where Bajaj Parts Are in Demand</h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              <strong style={{ color: "#FFFFFF" }}>Nigeria</strong> — Bajaj Boxer is the dominant commercial motorcycle. Lagos, Kano, Ibadan, Port Harcourt all have large Boxer fleets. High-volume demand for engine kits, brake assemblies, and electrical parts.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              <strong style={{ color: "#FFFFFF" }}>Ghana</strong> — Bajaj Boxer and CT100 are Ghana's most widely used commercial motorcycles. Strong demand from Accra, Kumasi, and Tema importers.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              <strong style={{ color: "#FFFFFF" }}>Kenya / Uganda / Tanzania</strong> — Bajaj Boxer dominates the Boda Boda (motorcycle taxi) sector. Consistent demand across East Africa for engine overhaul kits, clutch plates, and suspension parts.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>
              <strong style={{ color: "#FFFFFF" }}>Ethiopia</strong> — Growing motorcycle market. Bajaj Boxer used for courier and rural transport. Demand for engine and brake parts.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Our Sourcing</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "16px" }}>Why Ludhiana-Sourced Bajaj Parts?</h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Ludhiana, Punjab is India's spare parts manufacturing capital — home to over 5,000 auto parts manufacturers, with decades of experience producing aftermarket parts compatible with Bajaj, TVS, and Hero motorcycles. CrestMAX sources exclusively from these verified Ludhiana manufacturers.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Every part we export is produced by manufacturers who have made Bajaj-compatible parts for 20–35 years — correct dimensions, proper metallurgical grades, and proven tooling. This is not the case with Chinese-manufactured Bajaj copies, which use approximate dimensions and inferior materials, leading to early wear and fitment failures that African mechanics and operators recognise immediately.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {["high-quality aftermarket", "Verified Ludhiana suppliers", "FOB & CIF terms", "Full export docs"].map((f) => (
                <div key={f} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "14px 16px", fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>
                  <span style={{ color: "var(--cm-gold)", marginRight: "8px" }}>✓</span>{f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>FAQ</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Bajaj Spare Parts — Common Questions</h2>
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

      {/* Internal Links */}
      <section style={{ padding: "60px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "24px", textAlign: "center" }}>Also Explore</p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "Bajaj 3-Wheeler / Keke Napep Parts", href: "/bajaj-three-wheeler-parts" },
              { label: "TVS Spare Parts", href: "/tvs-spare-parts" },
              { label: "Hero Spare Parts", href: "/hero-spare-parts" },
              { label: "Import Guide — Nigeria", href: "/import-guide/nigeria" },
              { label: "India vs China Parts", href: "/india-vs-china-spare-parts" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 20px", borderRadius: "2px", textDecoration: "none", letterSpacing: "0.5px" }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-mid)", borderTop: "1px solid var(--cm-gold-border)", textAlign: "center" }}>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>Get a Wholesale Quote</p>
        <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4vw, 40px)", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>Ready to Order Bajaj Spare Parts?</h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", marginBottom: "36px", maxWidth: "500px", margin: "0 auto 36px" }}>Send us your parts list. We respond with pricing and availability within 24 hours.</p>
        <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
          Request a Wholesale Quote
        </Link>
      </section>
    </>
  );
}
