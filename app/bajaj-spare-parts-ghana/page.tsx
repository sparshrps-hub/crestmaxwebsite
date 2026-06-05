import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bajaj Spare Parts Exporter to Ghana — Wholesale from India | CrestMAX",
  description: "CrestMAX exports Bajaj Boxer and CT100 spare parts wholesale from India to Ghanaian importers. CIF Tema Port. Full GRA-compliant documentation. Enquire now.",
  alternates: { canonical: "https://crestmax.in/bajaj-spare-parts-ghana" },
  openGraph: {
    title: "Bajaj Spare Parts Exporter to Ghana — Wholesale from India | CrestMAX",
    description: "Wholesale Bajaj Boxer, CT100 spare parts from India to Ghana. CIF Tema Port. GRA-compliant documentation.",
    url: "https://crestmax.in/bajaj-spare-parts-ghana",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Bajaj Spare Parts", item: "https://crestmax.in/bajaj-spare-parts" },
    { "@type": "ListItem", position: 3, name: "Ghana", item: "https://crestmax.in/bajaj-spare-parts-ghana" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does CrestMAX export Bajaj spare parts to Ghana?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — CrestMAX exports Bajaj Boxer and CT100 spare parts wholesale from Ludhiana, India to Ghanaian importers. We ship CIF to Tema Port (Accra) or FOB Mumbai. All documentation is GRA-compliant: commercial invoice with HS codes, packing list, bill of lading, and certificate of origin." },
    },
    {
      "@type": "Question",
      name: "What Bajaj spare parts sell best in Ghana?",
      acceptedAnswer: { "@type": "Answer", text: "The highest-demand Bajaj parts in Ghana are engine kits for Bajaj Boxer BM150 and CT100 (piston, rings, gaskets), clutch plate sets, brake shoes, CDI units, and electrical parts. Ghana's Okada (motorcycle taxi) sector operates Boxer motorcycles extensively across Accra, Kumasi, and Tamale — generating continuous demand for wear parts." },
    },
    {
      "@type": "Question",
      name: "How long does shipping from India to Ghana take?",
      acceptedAnswer: { "@type": "Answer", text: "Ocean freight from Mumbai (JNPT) to Tema Port (Accra) takes 22–26 days. Tema is one of West Africa's most efficient ports — clearance typically takes 3–7 days. Total India to Accra: approximately 4–5 weeks. CIF Tema is available — CrestMAX arranges freight and insurance to Tema." },
    },
    {
      "@type": "Question",
      name: "What is the import duty on spare parts in Ghana?",
      acceptedAnswer: { "@type": "Answer", text: "Ghana's import duty on motorcycle spare parts is generally 5–20% depending on HS code classification. Most motorcycle parts (HS 8714.10) attract 5% import duty + 12.5% VAT + 2.5% NHIL + 2.5% GETFUND + 1% COVID-19 Health Levy. Your Ghana Revenue Authority (GRA)-licensed clearing agent can confirm current rates and file the import declaration (IDF) on your behalf." },
    },
  ],
};

const partCategories = [
  { cat: "Engine Kits", parts: ["Piston & Ring Sets (Boxer BM150)", "Piston & Ring Sets (CT100 100cc)", "Complete Gasket Sets", "Cylinder Barrels", "Engine Oil Seal Kits", "Valve Kits", "Cam Chains"] },
  { cat: "Clutch & Drive", parts: ["Clutch Plate Sets", "Clutch Cables", "Clutch Springs", "Chain Sprocket Kits", "Wheel Bearings"] },
  { cat: "Brakes & Suspension", parts: ["Brake Shoes (front & rear)", "Brake Drums", "Fork Seals", "Shock Absorber Bushes", "Swing Arm Bush Kits"] },
  { cat: "Electrical & Ignition", parts: ["CDI Units", "Rectifiers", "Ignition Coils", "Magneto / Stator Coils", "Wiring Harnesses", "Headlight Assemblies"] },
  { cat: "Filters & Fuel", parts: ["Air Filter Assemblies", "Oil Filters", "Carburettor Kits", "Fuel Taps", "Spark Plugs"] },
];

export default function BajajSparePartsGhanaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Ghana · West Africa 🇬🇭</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Bajaj Spare Parts Exporter<br />
            <span style={{ color: "var(--cm-gold)" }}>to Ghana — Wholesale from India</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            CrestMAX exports Bajaj Boxer and CT100 spare parts wholesale from Ludhiana, India to importers across Ghana. CIF Tema Port (Accra) or FOB Mumbai. Competitive wholesale pricing with full GRA-compliant documentation.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Request a Quote
            </Link>
            <a href="https://wa.me/917087866759" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "#25D366", color: "#FFFFFF", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ padding: "48px 24px", background: "var(--cm-navy)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          {[
            { label: "Entry Port", value: "Tema Port, Accra" },
            { label: "Transit Time", value: "22–26 days ocean freight" },
            { label: "Top Models", value: "Boxer BM150 · CT100" },
            { label: "Incoterms", value: "CIF Tema or FOB Mumbai" },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "22px 20px" }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "8px" }}>{label}</p>
              <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "1px", color: "var(--cm-gold)", margin: 0 }}>{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ghana market + parts */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: "48px", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Ghana Market</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "16px" }}>Bajaj in Ghana's Motorcycle Sector</h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Bajaj motorcycles — particularly the Boxer BM150 and CT100 — are the most widely used commercial and personal motorcycles in Ghana. The Okada motorcycle taxi sector employs hundreds of thousands of riders across Accra, Kumasi, Tamale, and Kumasi.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Ghana's motorcycle spare parts market is supplied primarily through Tema and Accra traders who import from India or source from Nigerian traders. CrestMAX offers direct India-to-Ghana wholesale supply, removing 1–2 intermediary layers and delivering better margins for Ghanaian importers.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>
              Tema Port is one of West Africa's most efficient container terminals — clearing typically takes 3–7 days for a well-documented shipment. With CrestMAX's CIF Tema service, your only task at the port is engaging your GRA-licensed clearing agent.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Parts We Supply</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>Bajaj Parts for Ghana</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {partCategories.map(({ cat, parts }) => (
                <div key={cat} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "18px 20px" }}>
                  <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "2px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "10px" }}>{cat}</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: "1.6" }}>{parts.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>FAQ</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Importing Bajaj Parts to Ghana</h2>
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

      {/* Internal links */}
      <section style={{ padding: "60px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "24px", textAlign: "center" }}>Related Pages</p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "All Bajaj Spare Parts", href: "/bajaj-spare-parts" },
              { label: "Ghana Market Guide", href: "/markets/ghana" },
              { label: "Import Guide — Ghana", href: "/import-guide/ghana" },
              { label: "Bajaj Boxer Parts Catalogue", href: "/products/bajaj-boxer" },
              { label: "CT100 Parts Catalogue", href: "/products/ct100" },
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
          Order Bajaj Spare Parts for Ghana
        </h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 36px" }}>
          Send us your parts list. We respond with CIF Tema pricing within 24 hours.
        </p>
        <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
          Request a Quote
        </Link>
      </section>
    </>
  );
}
