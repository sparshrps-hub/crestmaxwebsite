import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TVS King Three Wheeler Spare Parts Exporter India to Africa | CrestMAX",
  description: "CrestMAX exports wholesale TVS King auto-rickshaw spare parts from Ludhiana, India to Kenya, Tanzania, Uganda, Ethiopia and Africa. Engine, gearbox, body parts. FOB or CIF.",
  alternates: { canonical: "https://crestmax.in/tvs-king-parts" },
  openGraph: {
    title: "TVS King Three Wheeler Spare Parts Exporter India | CrestMAX",
    description: "Wholesale TVS King 3-wheeler spare parts from India to East Africa. Kenya, Tanzania, Uganda, Ethiopia. FOB or CIF.",
    url: "https://crestmax.in/tvs-king-parts",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "TVS King Parts", item: "https://crestmax.in/tvs-king-parts" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Does CrestMAX export TVS King spare parts to Africa?", acceptedAnswer: { "@type": "Answer", text: "Yes — CrestMAX exports wholesale TVS King 3-wheeler spare parts from Ludhiana, India to Kenya, Tanzania, Uganda, Ethiopia, and across East Africa. TVS King is East Africa's leading auto-rickshaw and tuk tuk platform." } },
    { "@type": "Question", name: "Which TVS King models do you cover?", acceptedAnswer: { "@type": "Answer", text: "We supply parts for TVS King Duramax, TVS King Deluxe, and TVS King Electric (mechanical parts for transitional fleets). Our strongest stock is for the TVS King Duramax — the most widely operated variant in East Africa." } },
    { "@type": "Question", name: "Can you ship TVS King parts CIF to Mombasa?", acceptedAnswer: { "@type": "Answer", text: "Yes — we offer CIF Mombasa terms. We arrange ocean freight and marine insurance from Mumbai to Mombasa. You handle Kenya customs clearance with your local agent. We can also ship CIF Dar es Salaam for Tanzania buyers." } },
    { "@type": "Question", name: "How is TVS King different from Bajaj RE for spare parts?", acceptedAnswer: { "@type": "Answer", text: "TVS King and Bajaj RE are both Indian 3-wheelers but with different engine platforms, body panels, and transmission designs — parts are not interchangeable. TVS King uses a different engine series and gearbox configuration. CrestMAX supplies dedicated parts for each model — never mixed." } },
  ],
};

const partCategories = [
  { cat: "Engine & Top End", parts: ["Complete engine kits", "Piston & ring sets", "Cylinder blocks & heads", "Crankshaft assemblies", "Connecting rods", "Timing chains & guides", "Head & base gasket sets"] },
  { cat: "Gearbox & Drive", parts: ["Complete gearbox units", "Gear selector assemblies", "Input & output shafts", "Differential units", "Drive shaft assemblies", "Final drive chain & sprocket kits"] },
  { cat: "Brakes & Axles", parts: ["Front brake shoes & drums", "Rear axle brake kits", "Wheel cylinders", "Brake master cylinders", "Rear axle shafts & hubs", "Wheel bearings & seals"] },
  { cat: "Body & Cabin", parts: ["Cabin roof panels", "Side door frames", "Floor & chassis plates", "Front bumper assemblies", "Passenger seat frames", "Body mounting hardware"] },
  { cat: "Suspension & Steering", parts: ["Front fork & damper sets", "Steering assembly components", "Tie rods & drag links", "King pin kits", "Rear suspension springs", "Shock absorber sets"] },
  { cat: "Electrical & Fuel", parts: ["CDI & ignition coils", "Self-starter assemblies", "Alternator sets", "Full wiring harnesses", "Carburettors", "Fuel tanks & petcocks", "Headlamp & indicator sets"] },
];

export default function TVSKingPartsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>3-Wheeler — TVS King</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4.5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            TVS King Three Wheeler Parts —<br />
            <span style={{ color: "var(--cm-gold)" }}>Wholesale Exporter from India to East Africa</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            TVS King is East Africa&apos;s most trusted auto-rickshaw — dominating tuk tuk fleets in Nairobi, Mombasa, Dar es Salaam, Kampala and Addis Ababa. CrestMAX exports wholesale TVS King spare parts from Ludhiana, India to importers across Kenya, Tanzania, Uganda, Ethiopia and East Africa. Full engine kits to body panels — FOB Mumbai or CIF to your port.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>Request a Quote</Link>
            <Link href="/products/tvs-king" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>View Parts Catalogue</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: "48px" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Market Context</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>TVS King — East Africa's Tuk Tuk</h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              TVS Motor has aggressively targeted East Africa with its King platform — offering a purpose-built 3-wheeler with features tailored for African urban conditions: higher ground clearance, reinforced chassis, and a more powerful engine than the entry-level Bajaj RE. TVS King dominates the tuk tuk market in coastal Kenya (Mombasa), Nairobi outer suburbs, Dar es Salaam, and Addis Ababa.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>
              With hundreds of thousands of TVS King vehicles in operation across East Africa — and operators running 10–14 hours daily — the demand for spare parts is substantial and year-round. Engine overhaul kits, gearbox components, brake assemblies and body panels are the highest-turnover categories. CrestMAX supplies these at wholesale prices directly from India.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Models Covered</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>TVS King Variants</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { name: "TVS King Duramax", desc: "East Africa's most popular TVS King. Heavier payload, reinforced chassis. Full parts stock." },
                { name: "TVS King Deluxe", desc: "Standard variant. Widely operated in Kenya and Tanzania coastal regions." },
                { name: "TVS King (earlier models)", desc: "Pre-Duramax generation. Parts available on enquiry." },
              ].map((m) => (
                <div key={m.name} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "18px 20px" }}>
                  <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "17px", letterSpacing: "1px", color: "var(--cm-gold)", marginBottom: "4px", textTransform: "uppercase" }}>{m.name}</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0 }}>{m.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "20px", background: "rgba(201,168,76,0.06)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "16px 20px" }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "2px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "8px" }}>Also see</p>
              <Link href="/bajaj-three-wheeler-parts" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "#FFFFFF", textDecoration: "none" }}>
                Bajaj RE / Keke Napep Parts → <span style={{ color: "var(--cm-gold)" }}>Nigeria&apos;s dominant 3-wheeler</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>Parts Catalogue</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "36px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px", textAlign: "center" }}>TVS King Parts Categories</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: "48px" }}>Complete coverage for TVS King Duramax and Deluxe — engine to body</p>
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
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>TVS King Parts — Common Questions</h2>
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
            { label: "Bajaj RE / Keke Napep Parts", href: "/bajaj-three-wheeler-parts" },
            { label: "TVS 2-Wheeler Parts", href: "/tvs-spare-parts" },
            { label: "Import Guide — Kenya", href: "/import-guide/kenya" },
            { label: "Kenya Market", href: "/markets/kenya" },
            { label: "Tanzania Market", href: "/markets/tanzania" },
          ].map(({ label, href }) => (
            <Link key={href} href={href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 20px", borderRadius: "2px", textDecoration: "none" }}>
              {label} →
            </Link>
          ))}
        </div>
        <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
          Request a TVS King Parts Quote
        </Link>
      </section>
    </>
  );
}
