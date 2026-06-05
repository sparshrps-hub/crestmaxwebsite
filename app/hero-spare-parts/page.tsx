import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hero Spare Parts Exporter from India to Africa — Wholesale Supplier | CrestMAX",
  description: "CrestMAX exports high-quality Hero-compatible spare parts wholesale from Ludhiana, India to Africa. Hero HF Deluxe, CT100, Splendor, Passion parts. FOB Mumbai or CIF.",
  alternates: { canonical: "https://crestmax.in/hero-spare-parts" },
  openGraph: {
    title: "Hero Spare Parts Exporter from India to Africa | CrestMAX",
    description: "Wholesale Hero motorcycle spare parts from Ludhiana, India. Hero HF Deluxe, CT100, Splendor. FOB or CIF to Africa.",
    url: "https://crestmax.in/hero-spare-parts",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Hero Spare Parts", item: "https://crestmax.in/hero-spare-parts" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Does CrestMAX export Hero motorcycle spare parts to Africa?", acceptedAnswer: { "@type": "Answer", text: "Yes — CrestMAX exports wholesale Hero motorcycle spare parts from Ludhiana, India to Nigeria, Ghana, Kenya, Ethiopia and across Africa. Hero MotoCorp is the world's largest motorcycle manufacturer, and its CT100, HF Deluxe, and Splendor models are widely used across Africa." } },
    { "@type": "Question", name: "Which Hero models do you supply parts for?", acceptedAnswer: { "@type": "Answer", text: "Our primary Hero stock covers CT100 (the CT100 is one of the most popular 100cc motorcycles in Africa), Hero HF Deluxe, Hero Splendor+, and Hero Passion Pro. The CT100 is especially strong in West Africa." } },
    { "@type": "Question", name: "Are your Hero spare parts genuine OEM quality?", acceptedAnswer: { "@type": "Answer", text: "Yes. Hero MotoCorp sources components from Ludhiana and nearby Punjab manufacturers — the same region where CrestMAX operates. Our Hero parts are sourced from specialist aftermarket manufacturers who supply Hero's own service network." } },
    { "@type": "Question", name: "What is the minimum order for Hero spare parts?", acceptedAnswer: { "@type": "Answer", text: "We work with wholesale buyers — minimum is typically one LCL shipment. Contact us with your parts list for pricing and availability." } },
  ],
};

const partCategories = [
  { cat: "Engine & Top End", parts: ["Piston kits (standard & oversize)", "Cylinder barrels", "Crankshafts & bearings", "Connecting rod kits", "Valve & rocker arm sets", "Full gasket kits"] },
  { cat: "Clutch & Transmission", parts: ["Clutch plate sets", "Clutch springs", "Gear selector forks", "Final drive sprockets", "O-ring chain kits"] },
  { cat: "Brakes & Wheels", parts: ["Brake shoe sets", "Brake drums", "Front & rear wheel bearings", "Brake cables", "Speedometer cables"] },
  { cat: "Suspension", parts: ["Front fork legs & seals", "Rear shock absorbers", "Swing arm pivot bearings", "Steering cone races"] },
  { cat: "Electrical", parts: ["CDI ignition modules", "Magneto assemblies", "Self-starter motors", "Voltage regulators", "Horn & switch assemblies", "Indicator lamp sets"] },
  { cat: "Body & Fuel", parts: ["Carburettors & jets", "Air filter elements", "Fuel tanks", "Side panels & mudguards", "Seat assemblies", "Handlebar grips & mirrors"] },
];

export default function HeroSparePartsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Brand — Hero</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 5vw, 56px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Hero Spare Parts —<br />
            <span style={{ color: "var(--cm-gold)" }}>Wholesale Exporter from India to Africa</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            Hero MotoCorp is the world&apos;s largest motorcycle manufacturer — and its CT100, HF Deluxe and Splendor models are trusted daily workhorses across West and East Africa. CrestMAX exports wholesale Hero spare parts from Ludhiana, India, to importers and distributors across Nigeria, Ghana, Ethiopia, Kenya and beyond.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>Request a Quote</Link>
            <Link href="/products/ct100" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>View CT100 Parts</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "48px", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Why Hero in Africa</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>World's Largest Manufacturer — Africa's Everyday Motorcycle</h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Hero MotoCorp sells over 5 million motorcycles annually and exports to 40+ countries, including Nigeria, Ethiopia, Kenya, Tanzania, Bangladesh and Sri Lanka. Its 100cc and 125cc models — particularly the CT100 and HF Deluxe — are positioned as affordable, fuel-efficient, low-maintenance motorcycles ideal for Africa's long-distance rural routes and urban delivery work.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>
              Ludhiana is where Hero's supply base is concentrated — and it is where CrestMAX operates. This means we source Hero-compatible aftermarket parts from manufacturers who have been making these specific parts for decades, with no middleman margin added. This depth of experience is what Chinese copycat manufacturers simply cannot match.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Hero Models We Cover</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>2-Wheeler Models</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { name: "Hero CT100", href: "/products/ct100", desc: "Most affordable Hero. 100cc, fuel-efficient. High demand in West Africa and Ethiopia." },
                { name: "Hero HF Deluxe", href: "/contact", desc: "125cc commuter. Growing popularity in East Africa and Nigeria. Enquire for availability." },
                { name: "Hero Splendor+", href: "/contact", desc: "India's best-selling motorcycle. Emerging African market. Enquire for availability." },
                { name: "Hero Passion Pro", href: "/contact", desc: "Style-segment commuter. Available on enquiry." },
              ].map((m) => (
                <Link key={m.name} href={m.href} style={{ display: "block", background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "18px 20px", textDecoration: "none" }}>
                  <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "17px", letterSpacing: "1px", color: "var(--cm-gold)", marginBottom: "4px", textTransform: "uppercase" }}>{m.name}</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0 }}>{m.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>Parts Catalogue</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "36px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px", textAlign: "center" }}>Hero Motorcycle Parts Categories</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: "48px" }}>Complete aftermarket coverage for Hero CT100, HF Deluxe, Splendor, and Passion</p>
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

      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>FAQ</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Hero Spare Parts — Common Questions</h2>
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

      <section style={{ padding: "60px 24px", background: "var(--cm-navy-mid)", borderTop: "1px solid var(--cm-gold-border)", textAlign: "center" }}>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px" }}>
          {[
            { label: "Bajaj Spare Parts", href: "/bajaj-spare-parts" },
            { label: "TVS Spare Parts", href: "/tvs-spare-parts" },
            { label: "Import Guide — Nigeria", href: "/import-guide/nigeria" },
            { label: "India vs China Parts", href: "/india-vs-china-spare-parts" },
          ].map(({ label, href }) => (
            <Link key={href} href={href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 20px", borderRadius: "2px", textDecoration: "none" }}>
              {label} →
            </Link>
          ))}
        </div>
        <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
          Request a Hero Spare Parts Quote
        </Link>
      </section>
    </>
  );
}
