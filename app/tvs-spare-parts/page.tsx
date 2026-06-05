import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TVS Spare Parts Exporter from India to Africa — Wholesale Supplier | CrestMAX",
  description: "CrestMAX exports genuine TVS 2-wheeler spare parts wholesale from Ludhiana, India to Africa. TVS HLX, TVS Apache, TVS Star City parts. FOB Mumbai or CIF to your port.",
  alternates: { canonical: "https://crestmax.in/tvs-spare-parts" },
  openGraph: {
    title: "TVS Spare Parts Exporter from India to Africa | CrestMAX",
    description: "Wholesale TVS 2-wheeler spare parts from Ludhiana, India to Africa. TVS HLX 125, Apache, Star City. FOB or CIF.",
    url: "https://crestmax.in/tvs-spare-parts",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "TVS Spare Parts", item: "https://crestmax.in/tvs-spare-parts" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Does CrestMAX export TVS spare parts to Africa?", acceptedAnswer: { "@type": "Answer", text: "Yes — CrestMAX exports wholesale TVS 2-wheeler spare parts from Ludhiana, India to Kenya, Tanzania, Uganda, Nigeria, Ghana and 12+ African nations. We ship FOB Mumbai or CIF to your port." } },
    { "@type": "Question", name: "Which TVS 2-wheeler models do you supply parts for?", acceptedAnswer: { "@type": "Answer", text: "Our strongest TVS 2-wheeler stock is for TVS HLX 125 — the leading Boda Boda motorcycle in East Africa. We also supply parts for TVS Star City, TVS Apache 160/180, and TVS Sport. Enquire for current availability by model." } },
    { "@type": "Question", name: "Are your TVS spare parts genuine OEM quality?", acceptedAnswer: { "@type": "Answer", text: "Yes — all parts are sourced from OEM-approved manufacturers in Ludhiana, India's auto parts capital. We supply to TVS's authorised aftermarket network and wholesale importers. We do not supply Chinese-manufactured TVS copies." } },
    { "@type": "Question", name: "What is the minimum order for TVS spare parts from India?", acceptedAnswer: { "@type": "Answer", text: "We work with wholesale buyers. Minimum is typically one LCL consolidation shipment (1–3 CBM) for mixed TVS parts, or one 20-foot FCL container for bulk single-model orders. Contact us with your requirements." } },
  ],
};

const partCategories = [
  { cat: "Engine & Top End", parts: ["Piston kits & rings", "Cylinder barrels & heads", "Crankshafts & big-end bearings", "Connecting rods", "Cam chains & tensioners", "Complete gasket sets"] },
  { cat: "Transmission & Clutch", parts: ["Multi-disc clutch kits", "Clutch springs & holders", "Gearbox components", "Final drive sprockets", "Heavy-duty chain kits"] },
  { cat: "Brakes & Wheels", parts: ["Front & rear brake shoes", "Brake drums & hubs", "Wheel bearings & seals", "Brake cables & levers", "Rim spoke sets"] },
  { cat: "Suspension", parts: ["Front fork assemblies", "Fork seals & bushings", "Rear shock absorber sets", "Swing arm bearings", "Steering races & cones"] },
  { cat: "Electrical & Ignition", parts: ["CDI units & ignition coils", "Magneto stators", "Self-starter motors", "Regulators & rectifiers", "Complete wiring harnesses", "Indicator & headlamp assemblies"] },
  { cat: "Fuel & Air", parts: ["Carburettors (standard & rebuilt)", "Air filter assemblies", "Fuel tanks & petcocks", "Oil filters", "Throttle cables"] },
];

export default function TVSSparePartsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Brand — TVS</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 5vw, 56px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            TVS Spare Parts —<br />
            <span style={{ color: "var(--cm-gold)" }}>Wholesale Exporter from India to Africa</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            CrestMAX exports genuine TVS 2-wheeler spare parts wholesale from Ludhiana, India to importers and distributors across East and West Africa. TVS HLX 125 — the Boda Boda motorcycle of choice across Kenya, Uganda and Tanzania — is our strongest TVS product line. Shipped FOB Mumbai or CIF to your port.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>Request a Quote</Link>
            <Link href="/products/tvs-hlx" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>View TVS HLX Parts</Link>
          </div>
        </div>
      </section>

      {/* Market + Models */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "48px", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Market Context</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>TVS in Africa — A Dominant Force</h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              TVS Motor Company is India's third-largest two-wheeler manufacturer and one of Africa's most recognised motorcycle brands. The TVS HLX 125 is the preferred Boda Boda motorcycle across Kenya, Uganda and Tanzania — valued for its durability, fuel efficiency, and low cost of maintenance. In West Africa, TVS Apache and Star City have loyal followings in Nigeria and Ghana.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>
              TVS has invested heavily in East Africa — with local assembly plants and an authorised dealer network — which means the demand for genuine, Indian-manufactured TVS spare parts is deep and consistent. CrestMAX supplies wholesale parts to importers who service this fleet demand at scale.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>TVS 2-Wheeler Models</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>Models We Cover</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { name: "TVS HLX 125", href: "/products/tvs-hlx", desc: "East Africa's Boda Boda motorcycle. Comprehensive parts stock — engine to electrical." },
                { name: "TVS King (3-Wheeler)", href: "/tvs-king-parts", desc: "3-wheeler auto-rickshaw. See our dedicated TVS King Parts page." },
                { name: "TVS Apache 160 / 180", href: "/contact", desc: "Performance segment. Popular in Nigeria and South Africa. Enquire for availability." },
                { name: "TVS Star City / Sport", href: "/contact", desc: "Entry commuter segment. West Africa demand. Enquire for current stock." },
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

      {/* Parts Grid */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>Parts Catalogue</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "36px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px", textAlign: "center" }}>TVS 2-Wheeler Parts Categories</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: "48px" }}>Full aftermarket coverage for TVS HLX 125, Apache, Star City and Sport</p>
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

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>FAQ</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>TVS Spare Parts — Common Questions</h2>
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

      {/* Related Links + CTA */}
      <section style={{ padding: "60px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "24px", textAlign: "center" }}>Also Explore</p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "48px" }}>
            {[
              { label: "TVS King 3-Wheeler Parts", href: "/tvs-king-parts" },
              { label: "Bajaj Spare Parts", href: "/bajaj-spare-parts" },
              { label: "Hero Spare Parts", href: "/hero-spare-parts" },
              { label: "Import Guide — Kenya", href: "/import-guide/kenya" },
              { label: "India vs China Parts", href: "/india-vs-china-spare-parts" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 20px", borderRadius: "2px", textDecoration: "none" }}>
                {label} →
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
              Request a TVS Spare Parts Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
