import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bajaj Spare Parts Exporter to Kenya — Wholesale from India | CrestMAX",
  description: "CrestMAX exports Bajaj Boxer and TVS HLX spare parts wholesale from India to Kenyan importers. CIF Mombasa. Boda Boda sector supply. Enquire for wholesale pricing.",
  alternates: { canonical: "https://crestmax.in/bajaj-spare-parts-kenya" },
  openGraph: {
    title: "Bajaj Spare Parts Exporter to Kenya — Wholesale from India | CrestMAX",
    description: "Wholesale Bajaj Boxer and TVS HLX spare parts from India to Kenya. CIF Mombasa. Boda Boda sector supply.",
    url: "https://crestmax.in/bajaj-spare-parts-kenya",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Bajaj Spare Parts", item: "https://crestmax.in/bajaj-spare-parts" },
    { "@type": "ListItem", position: 3, name: "Kenya", item: "https://crestmax.in/bajaj-spare-parts-kenya" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does CrestMAX export Bajaj spare parts to Kenya?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — CrestMAX exports Bajaj Boxer and Bajaj RE (Tuk Tuk) spare parts from Ludhiana, India to Kenyan importers. We ship CIF to Mombasa Port or FOB Mumbai. Kenya is also an East Africa distribution hub — many of our Kenyan customers re-export to Uganda, Tanzania, and Rwanda." },
    },
    {
      "@type": "Question",
      name: "What motorcycle spare parts are most in demand in Kenya?",
      acceptedAnswer: { "@type": "Answer", text: "Kenya's Boda Boda (motorcycle taxi) sector operates approximately 1.5 million motorcycles, predominantly Bajaj Boxer and TVS HLX 100/125. The highest-demand parts are engine kits (piston, rings, gaskets), clutch plates, brake shoes, suspension parts (fork seals, shock absorbers — critical due to rough upcountry roads), and electrical parts. Suspension components wear faster in Kenya than in flat West African markets due to uneven highland terrain." },
    },
    {
      "@type": "Question",
      name: "Does CrestMAX also supply TVS HLX parts for Kenya?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — TVS HLX 100 and HLX 125 are among the most popular motorcycles in Kenya's Boda Boda sector. CrestMAX supplies a full range of TVS HLX parts alongside Bajaj Boxer parts. Many Kenyan importers order mixed containers with both Bajaj and TVS parts for one-stop supply." },
    },
    {
      "@type": "Question",
      name: "How long does shipping from India to Kenya take?",
      acceptedAnswer: { "@type": "Answer", text: "Ocean freight from Mumbai (JNPT) to Mombasa takes 16–20 days — making Kenya one of the fastest India-Africa routes. Mombasa port clearance typically takes 3–7 days. Total India to Mombasa: approximately 3–4 weeks. CrestMAX offers CIF Mombasa terms — we arrange ocean freight and marine insurance." },
    },
  ],
};

export default function BajajSparePartsKenyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Kenya · East Africa Hub 🇰🇪</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Bajaj Spare Parts Exporter<br />
            <span style={{ color: "var(--cm-gold)" }}>to Kenya — Wholesale from India</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            CrestMAX exports Bajaj Boxer, TVS HLX and Bajaj RE (Tuk Tuk) spare parts wholesale from Ludhiana, India to importers across Kenya. CIF Mombasa or FOB Mumbai. Kenya is East Africa's distribution hub — we serve both Kenyan end-users and regional re-exporters.
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

      {/* Stats */}
      <section style={{ padding: "48px 24px", background: "var(--cm-navy)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          {[
            { label: "Entry Port", value: "Port of Mombasa" },
            { label: "Transit Time", value: "16–20 days ocean freight" },
            { label: "Top Models", value: "Boxer BM150 · TVS HLX · RE Tuk Tuk" },
            { label: "Regional Hub", value: "Uganda · Tanzania · Rwanda via Mombasa" },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "22px 20px" }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "8px" }}>{label}</p>
              <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "1px", color: "var(--cm-gold)", margin: 0 }}>{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: "48px" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Kenya Market</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "16px" }}>Kenya's Boda Boda Economy</h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Kenya has one of Africa's largest and most organised Boda Boda (motorcycle taxi) sectors — with approximately 1.5 million registered motorcycle taxi operators, providing employment for over 2 million people when including maintenance workers, traders, and associated businesses.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Bajaj Boxer and TVS HLX 100/125 are the two most popular Boda Boda models across Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret. These motorcycles operate in demanding conditions — highland terrain, rain-season roads, and high altitude — which accelerates suspension and brake wear compared to flat West African markets.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>
              Mombasa Port is East Africa's primary container gateway, serving Kenya, Uganda, Tanzania, South Sudan, Rwanda, and the DRC. Many of our Kenyan customers are regional distributors who re-export to Uganda and Tanzania from Nairobi warehouses. CrestMAX ships CIF Mombasa — your agent handles onward logistics from the port.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Parts We Supply</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>Bajaj & TVS Parts for Kenya</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { model: "Bajaj Boxer BM150", parts: "Engine kits · Clutch plates · Brake shoes · Fork seals · Shock absorber bushes · CDI units · Wiring harnesses" },
                { model: "TVS HLX 100 / HLX 125", parts: "Piston kits · Gasket sets · Clutch cables · Brake assemblies · Electrical kits · Air filters · Carburettor kits" },
                { model: "Bajaj RE (Tuk Tuk)", parts: "Propeller shaft assemblies · Differential parts · Engine kits · Clutch components" },
              ].map(({ model, parts }) => (
                <div key={model} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "20px" }}>
                  <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "1px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "8px" }}>{model}</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: "1.6" }}>{parts}</p>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "16px" }}>
              Full TVS HLX catalogue: <Link href="/products/tvs-hlx" style={{ color: "var(--cm-gold)" }}>TVS HLX Parts →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>FAQ</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Importing Bajaj Parts to Kenya</h2>
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
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "24px", textAlign: "center" }}>Related Pages</p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "All Bajaj Spare Parts", href: "/bajaj-spare-parts" },
              { label: "TVS Spare Parts", href: "/tvs-spare-parts" },
              { label: "Kenya Market Guide", href: "/markets/kenya" },
              { label: "Import Guide — Kenya", href: "/import-guide/kenya" },
              { label: "TVS HLX Parts Catalogue", href: "/products/tvs-hlx" },
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
          Order Spare Parts for Kenya
        </h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 36px" }}>
          Send your parts list. CIF Mombasa pricing within 24 hours.
        </p>
        <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
          Request a Quote
        </Link>
      </section>
    </>
  );
}
