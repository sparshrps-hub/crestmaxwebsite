import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bajaj Spare Parts Exporter to Nigeria — Wholesale from India | CrestMAX",
  description: "CrestMAX exports Bajaj Boxer, CT100 and Keke Napep spare parts wholesale from Ludhiana, India to Nigerian importers. Apapa/Lagos delivery. FOB or CIF. Form M compliant.",
  alternates: { canonical: "https://crestmax.in/bajaj-spare-parts-nigeria" },
  openGraph: {
    title: "Bajaj Spare Parts Exporter to Nigeria — Wholesale from India | CrestMAX",
    description: "Wholesale Bajaj spare parts from India to Nigeria. Boxer, RE/Keke Napep, CT100. FOB Mumbai or CIF Apapa Lagos.",
    url: "https://crestmax.in/bajaj-spare-parts-nigeria",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Bajaj Spare Parts", item: "https://crestmax.in/bajaj-spare-parts" },
    { "@type": "ListItem", position: 3, name: "Nigeria", item: "https://crestmax.in/bajaj-spare-parts-nigeria" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does CrestMAX export Bajaj spare parts directly to Nigeria?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — CrestMAX exports Bajaj Boxer, CT100, and Keke Napep (Bajaj RE) spare parts wholesale from Ludhiana, India to Nigerian importers. We ship CIF to Apapa Container Port (Lagos) or FOB Mumbai. All documentation includes Form M compliance: commercial invoice, packing list, CCVO certificate of origin, and bill of lading." },
    },
    {
      "@type": "Question",
      name: "What Bajaj spare parts are most in demand in Nigeria?",
      acceptedAnswer: { "@type": "Answer", text: "The highest-demand Bajaj parts in Nigeria are: engine kits (piston, rings, gaskets) for Bajaj Boxer BM150 and Keke Napep (RE 4S); clutch plate sets and clutch cables; brake shoes and brake assemblies; CDI units and rectifiers; propeller shaft assemblies and differential parts for Keke Napep. These reflect the high-mileage commercial use of Boxer motorcycles (Okada dispatch riders) and Keke Napep taxis across Nigerian cities." },
    },
    {
      "@type": "Question",
      name: "What documentation do I need to import Bajaj parts from India to Nigeria?",
      acceptedAnswer: { "@type": "Answer", text: "To import spare parts from India to Nigeria you need: Form M (opened with your CBN-licensed bank before shipment), Commercial Invoice (with Form M number and HS codes), Packing List, Bill of Lading, Combined Certificate of Value and Origin (CCVO), and Pre-Arrival Assessment Report (PAAR) filed by your customs agent at Apapa. CrestMAX provides all export documents including CCVO on every shipment. See our full Nigeria import guide at /import-guide/nigeria." },
    },
    {
      "@type": "Question",
      name: "How long does shipping from India to Nigeria take?",
      acceptedAnswer: { "@type": "Answer", text: "Ocean freight from Mumbai (JNPT) to Apapa Lagos takes 18–22 days. Port clearance at Apapa typically adds 7–14 days depending on customs examination queue and your agent's speed. Total India to Lagos: 4–5 weeks. We work with MSC, Maersk, and CMA-CGM on the India–West Africa corridor." },
    },
    {
      "@type": "Question",
      name: "What is the minimum order for Bajaj spare parts to Nigeria?",
      acceptedAnswer: { "@type": "Answer", text: "Minimum is typically one LCL consolidation (1–3 CBM) for mixed Bajaj spare parts. A 20-foot container is ideal for single-model bulk orders (e.g., all Boxer parts or all Keke Napep parts). Contact us with your parts list and we will provide pricing and container utilisation advice." },
    },
  ],
};

const nigerianDemandParts = [
  { cat: "Engine Kits (Highest Volume)", parts: ["Piston & Ring Sets (Boxer BM150)", "Complete Gasket Sets (Boxer & RE)", "Cylinder Barrels", "Engine Oil Seal Kits", "Valve Kits", "Cam Chain & Tensioners", "Connecting Rods"] },
  { cat: "Clutch & Transmission", parts: ["Clutch Plate Sets", "Clutch Cables (Boxer & RE)", "Clutch Springs", "Gear Shift Forks", "Kick Starter Assemblies"] },
  { cat: "Brakes", parts: ["Brake Shoes (front & rear)", "Brake Drums", "Brake Cables & Levers", "Brake Fluid Reservoirs"] },
  { cat: "Keke Napep (RE) Specific", parts: ["Propeller Shaft Assemblies", "Slider Block Kits", "Differential Housing", "Rear Hub Bearing Sets", "Rubber Bellows / Axle Boots", "Flange Assemblies"] },
  { cat: "Electrical & Ignition", parts: ["CDI Units", "Rectifiers", "Magneto / Stator Coils", "Wiring Harnesses", "Headlight Assemblies"] },
  { cat: "Filters & Fuel", parts: ["Air Filter Assemblies", "Oil Filters", "Carburettor Kits", "Fuel Taps", "Spark Plugs"] },
];

export default function BajajSparePartsNigeriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Nigeria · West Africa 🇳🇬</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Bajaj Spare Parts Exporter<br />
            <span style={{ color: "var(--cm-gold)" }}>to Nigeria — Wholesale from India</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            CrestMAX exports Bajaj Boxer, CT100, and Keke Napep (Bajaj RE) spare parts wholesale from Ludhiana, India to importers across Nigeria. CIF Apapa Lagos or FOB Mumbai. Form M compliant documentation on every shipment.
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

      {/* Key Stats */}
      <section style={{ padding: "48px 24px", background: "var(--cm-navy)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
          {[
            { label: "Entry Port", value: "Apapa Container Port, Lagos" },
            { label: "Transit Time", value: "18–22 days (ocean) + clearance" },
            { label: "Top Models", value: "Boxer BM150 · RE (Keke) · CT100" },
            { label: "Incoterms", value: "CIF Lagos or FOB Mumbai" },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "22px 20px" }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "8px" }}>{label}</p>
              <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "1px", color: "var(--cm-gold)", margin: 0 }}>{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Nigeria */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: "48px", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Market Context</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "30px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>Nigeria: Africa's Largest Motorcycle Market</h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Nigeria is the single largest market for Bajaj spare parts in Africa. With over 1 million motorcycles sold annually and an estimated 5–8 million motorcycles currently in active commercial use, the demand for spare parts is continuous and enormous.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              The Bajaj Boxer BM150 dominates the "Okada" (commercial motorcycle taxi) sector in Southern Nigeria and the "Achaba" courier routes in the North. These motorcycles run 8–12 hours daily, covering 100–150 km per day — engine kits, clutch plates, and brake assemblies are replaced every 6–12 months.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>
              The Keke Napep (Bajaj RE three-wheeler) is the dominant last-mile transport vehicle in every major Nigerian city — Lagos, Kano, Abuja, Port Harcourt, Ibadan, Owerri. An estimated 2–4 million Keke Napep units are in active use in Nigeria, each requiring regular drivetrain and engine maintenance. CrestMAX is one of the few Indian exporters supplying the full range of Bajaj RE propeller shaft, differential, and drivetrain parts that Keke mechanics need most.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Import Process</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "30px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>Importing to Nigeria from India</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { step: "01", title: "Open a Form M", body: "Required pre-import declaration with your CBN-licensed bank before goods ship." },
                { step: "02", title: "Confirm HS Codes", body: "Most motorcycle parts: HS 8714.10 / 8714.99. Brake parts: HS 8708.30." },
                { step: "03", title: "Choose FOB or CIF", body: "CIF Apapa recommended for first-time importers — CrestMAX handles freight and insurance." },
                { step: "04", title: "Receive Documents", body: "We provide: invoice with Form M number, packing list, BL, CCVO certificate of origin." },
                { step: "05", title: "Clear Apapa with Agent", body: "Your licensed customs agent files SGD, generates PAAR, and pays duty on your behalf." },
              ].map(({ step, title, body }) => (
                <div key={step} style={{ display: "flex", gap: "16px", background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "18px 20px" }}>
                  <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "18px", fontWeight: 600, color: "var(--cm-gold)", flexShrink: 0, opacity: 0.6 }}>{step}</span>
                  <div>
                    <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "1px", color: "#FFFFFF", marginBottom: "4px" }}>{title}</p>
                    <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0 }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "14px" }}>
              Full step-by-step guide: <Link href="/import-guide/nigeria" style={{ color: "var(--cm-gold)" }}>How to Import Spare Parts from India to Nigeria →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Parts in Demand */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>What Nigeria Needs Most</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "34px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px", textAlign: "center" }}>Bajaj Parts in Demand Across Nigeria</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: "48px" }}>Based on enquiry volumes from Nigerian importers and common commercial wear patterns</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "20px" }}>
            {nigerianDemandParts.map(({ cat, parts }) => (
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

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>FAQ</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Importing Bajaj Parts to Nigeria</h2>
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
      <section style={{ padding: "60px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "24px", textAlign: "center" }}>Related Pages</p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "All Bajaj Spare Parts", href: "/bajaj-spare-parts" },
              { label: "Keke Napep Parts — Nigeria", href: "/keke-napep-parts-nigeria" },
              { label: "Nigeria Market Guide", href: "/markets/nigeria" },
              { label: "Import Guide — Nigeria", href: "/import-guide/nigeria" },
              { label: "Bajaj Boxer Parts Catalogue", href: "/products/bajaj-boxer" },
              { label: "India vs China Spare Parts", href: "/india-vs-china-spare-parts" },
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
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>Ready to Order?</p>
        <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4vw, 40px)", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>
          Order Bajaj Spare Parts for Nigeria
        </h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 36px" }}>
          Send us your parts list. We respond with FOB/CIF pricing and availability within 24 hours.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none" }}>
            Request a Quote
          </Link>
          <a href="https://wa.me/917087866759" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "#25D366", color: "#FFFFFF", padding: "14px 40px", borderRadius: "2px", textDecoration: "none" }}>
            WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
