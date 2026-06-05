import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bajaj Three Wheeler Spare Parts Exporter India — Keke Napep Parts | CrestMAX",
  description: "CrestMAX exports wholesale Bajaj RE auto-rickshaw and Keke Napep spare parts from Ludhiana, India to Nigeria, Ghana, Kenya, Ethiopia and Africa. FOB Mumbai or CIF.",
  alternates: { canonical: "https://crestmax.in/bajaj-three-wheeler-parts" },
  openGraph: {
    title: "Bajaj Three Wheeler & Keke Napep Parts Exporter India | CrestMAX",
    description: "Wholesale Bajaj RE auto-rickshaw and Keke Napep spare parts from India to Africa. Nigeria, Kenya, Ethiopia. FOB or CIF.",
    url: "https://crestmax.in/bajaj-three-wheeler-parts",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Bajaj Three Wheeler Parts", item: "https://crestmax.in/bajaj-three-wheeler-parts" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do you supply Keke Napep (Bajaj RE) spare parts from India?", acceptedAnswer: { "@type": "Answer", text: "Yes — Bajaj RE (Keke Napep) spare parts are one of CrestMAX's strongest product lines. We export engine parts, gearboxes, body panels, brake assemblies and electrical components for the Bajaj RE 4-stroke auto-rickshaw wholesale from Ludhiana, India to Nigeria, Ghana, Kenya and across Africa." } },
    { "@type": "Question", name: "Which Bajaj three-wheeler models do you cover?", acceptedAnswer: { "@type": "Answer", text: "We supply parts for Bajaj RE (Bajaj RE 205 / RE 4-stroke), Bajaj Maxima, Bajaj Compact RE, and Bajaj Rear Engine models. The Bajaj RE is the most widely used auto-rickshaw in Nigeria (Keke Napep) and Ethiopia." } },
    { "@type": "Question", name: "Can you ship Bajaj RE parts CIF to Lagos Apapa?", acceptedAnswer: { "@type": "Answer", text: "Yes — we ship CIF Apapa Lagos, CIF Tema Ghana, CIF Mombasa Kenya, and CIF via Djibouti to Ethiopia. We provide all export documentation including commercial invoice, packing list, certificate of origin, and bill of lading." } },
    { "@type": "Question", name: "Are your Bajaj RE parts genuine or Chinese copies?", acceptedAnswer: { "@type": "Answer", text: "All parts are sourced from experienced specialist manufacturers in Ludhiana, India — manufacturers who have been producing Bajaj RE-compatible aftermarket parts for decades. We do not supply Chinese-manufactured Bajaj RE copies, which are known to fail early in African road conditions." } },
  ],
};

const partCategories = [
  { cat: "Engine & Powertrain", parts: ["Complete engine kits", "Piston & ring sets", "Cylinder barrels", "Crankshaft assemblies", "Connecting rods", "Camshaft & timing components", "Full gasket sets"] },
  { cat: "Gearbox & Transmission", parts: ["Complete gearbox assemblies", "Gear sets (all ratios)", "Gear shift forks & selectors", "Differential assemblies", "Prop shafts & couplings", "Chain & sprocket kits"] },
  { cat: "Brakes & Axles", parts: ["Front brake shoes & drums", "Rear axle brake assemblies", "Wheel cylinders", "Brake master cylinders", "Rear axle shafts", "Hub bearings & seals"] },
  { cat: "Body & Chassis", parts: ["Cabin body panels", "Roof frames", "Floor panels", "Passenger seat frames", "Windscreen frames", "Bumpers & guards"] },
  { cat: "Suspension & Steering", parts: ["Front fork assemblies", "Steering box components", "Tie rod ends & drag links", "King pins & bushes", "Spring leaf sets", "Shock absorbers"] },
  { cat: "Electrical & Fuel", parts: ["CDI units", "Magneto assemblies", "Starter motors", "Alternators & rectifiers", "Wiring harnesses", "Carburettors", "Fuel pumps & tanks"] },
];

export default function BajajThreeWheelerPartsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>3-Wheeler — Bajaj RE / Keke Napep</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4.5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Bajaj Three Wheeler Parts —<br />
            <span style={{ color: "var(--cm-gold)" }}>Keke Napep Parts Exporter from India</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            The Bajaj RE auto-rickshaw — known as Keke Napep in Nigeria, Bajaj in Ethiopia, and tuk tuk in East Africa — is Africa's most important urban transport vehicle. CrestMAX exports wholesale Bajaj RE spare parts from Ludhiana, India to importers across Nigeria, Ghana, Kenya, Ethiopia and 12+ African nations. Full engine kits to body panels, FOB Mumbai or CIF to your port.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>Request a Quote</Link>
            <Link href="/products/bajaj-re" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>View Parts Catalogue</Link>
          </div>
        </div>
      </section>

      {/* Keke Napep in Africa */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "48px" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Market Context</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>Keke Napep — Africa's Urban Lifeline</h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Nigeria alone has over 5 million Keke Napep (Bajaj RE auto-rickshaws) in operation — more than any other country outside India. Lagos, Kano, Onitsha, Ibadan, Port Harcourt, Enugu: every major Nigerian city depends on Keke Napep for last-mile transport, and the demand for spare parts is enormous, constant, and growing.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              In Ethiopia, the Bajaj RE serves as the shared taxi of Addis Ababa and dozens of regional cities — locally called simply "Bajaj." In Kenya and Tanzania, RE-type auto-rickshaws operate in coastal towns and smaller cities. Across these markets, the demand for engine parts, gearboxes, brake assemblies and body panels is year-round and high volume.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>
              Operators run these vehicles 12–16 hours a day, covering 150–250 km daily in harsh urban road conditions. Parts consumption is intensive. Nigerian and Ethiopian importers who source directly from India — bypassing Dubai or Lagos middlemen — gain a significant cost advantage over competitors relying on secondary supply chains.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Models Covered</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>Bajaj 3-Wheeler Models</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { name: "Bajaj RE 205 / RE 4-Stroke", desc: "Nigeria's dominant Keke Napep. Comprehensive parts coverage — engine to body." },
                { name: "Bajaj Maxima Z", desc: "Larger payload 3-wheeler. Growing in East Africa commercial sector." },
                { name: "Bajaj Compact RE", desc: "Smaller urban variant. Used in Ethiopia and parts of East Africa." },
                { name: "Bajaj RE Optima", desc: "Enhanced RE variant. Engine and gearbox parts available on enquiry." },
              ].map((m) => (
                <div key={m.name} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "18px 20px" }}>
                  <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "17px", letterSpacing: "1px", color: "var(--cm-gold)", marginBottom: "4px", textTransform: "uppercase" }}>{m.name}</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0 }}>{m.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "20px", background: "rgba(201,168,76,0.06)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "16px 20px" }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "2px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "8px" }}>Also see</p>
              <Link href="/tvs-king-parts" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "#FFFFFF", textDecoration: "none" }}>
                TVS King Three-Wheeler Parts → <span style={{ color: "var(--cm-gold)" }}>East Africa&apos;s leading 3-wheeler</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parts */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>Parts Catalogue</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "36px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px", textAlign: "center" }}>Bajaj RE / Keke Napep Parts Categories</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: "48px" }}>Complete coverage: engine kits, gearboxes, body panels, brakes, electrical, fuel systems</p>
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
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Keke Napep Parts — Common Questions</h2>
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
            { label: "TVS King 3-Wheeler Parts", href: "/tvs-king-parts" },
            { label: "Bajaj 2-Wheeler Parts", href: "/bajaj-spare-parts" },
            { label: "Import Guide — Nigeria", href: "/import-guide/nigeria" },
            { label: "Nigeria Market", href: "/markets/nigeria" },
            { label: "Ethiopia Market", href: "/markets/ethiopia" },
          ].map(({ label, href }) => (
            <Link key={href} href={href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 20px", borderRadius: "2px", textDecoration: "none" }}>
              {label} →
            </Link>
          ))}
        </div>
        <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
          Request a Keke Napep Parts Quote
        </Link>
      </section>
    </>
  );
}
