import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Keke Napep Spare Parts Supplier — India to Nigeria | CrestMAX",
  description: "CrestMAX exports Keke Napep (Bajaj RE) spare parts wholesale from Ludhiana, India to Nigerian importers. Propeller shaft, differential, engine parts. CIF Lagos available.",
  alternates: { canonical: "https://crestmax.in/keke-napep-parts-nigeria" },
  openGraph: {
    title: "Keke Napep Spare Parts Supplier — India to Nigeria | CrestMAX",
    description: "Wholesale Keke Napep / Bajaj RE spare parts from India to Nigeria. Propeller shaft, differential, clutch, engine parts. FOB or CIF Apapa.",
    url: "https://crestmax.in/keke-napep-parts-nigeria",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Bajaj 3-Wheeler Parts", item: "https://crestmax.in/bajaj-three-wheeler-parts" },
    { "@type": "ListItem", position: 3, name: "Keke Napep Parts — Nigeria", item: "https://crestmax.in/keke-napep-parts-nigeria" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does CrestMAX supply Keke Napep spare parts for export to Nigeria?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — CrestMAX exports a full range of Keke Napep (Bajaj RE) spare parts wholesale from Ludhiana, India to Nigerian importers. We supply propeller shaft assemblies, differential parts, engine kits, clutch components, and brake assemblies. We ship CIF to Apapa Lagos or FOB Mumbai." },
    },
    {
      "@type": "Question",
      name: "What are the most commonly replaced Keke Napep parts in Nigeria?",
      acceptedAnswer: { "@type": "Answer", text: "The highest-wear Keke Napep parts in Nigerian conditions are: propeller shaft assemblies and slider block kits (replaced every 6–12 months from road vibration), piston and ring sets, complete gasket sets, clutch cables and plates, differential housing bearings, rear hub bearing sets, and brake shoes. The propeller shaft and its components are the single most ordered Keke Napep parts we supply to Nigeria." },
    },
    {
      "@type": "Question",
      name: "What is the Bajaj RE model number for the Keke Napep in Nigeria?",
      acceptedAnswer: { "@type": "Answer", text: "The most common Keke Napep variants in Nigeria are the Bajaj RE 4-Stroke (4S), RE Compact, and the Bajaj Maxima. All three share similar propeller shaft and differential specifications, with some variation in engine displacement (200cc vs 205cc vs 225cc). CrestMAX supplies parts compatible with all three variants. Please specify your exact model when enquiring." },
    },
    {
      "@type": "Question",
      name: "Can I import Keke Napep parts alongside Bajaj Boxer parts in one container?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — most Nigerian importers order mixed containers with both Boxer 2-wheeler parts and Keke Napep 3-wheeler parts. We can pack and label by model for easy sorting at your warehouse. A 20-foot container can hold approximately 3–5 tonnes of mixed motorcycle spare parts. Contact us with your full parts list for container utilisation and pricing." },
    },
  ],
};

const keKeNapepParts = [
  { cat: "Drivetrain & Propeller (Highest Demand)", parts: ["Propeller Shaft Assembly (complete)", "Slider Block Kit", "Slider Block (individual)", "Propeller Shaft Pin", "Flange Assembly — Satellite Side", "Flange Assembly — Differential Side", "Flange — Wheel Side", "Rubber Bellow / Axle Boot", "Universal Joint (UJ) Kit"] },
  { cat: "Differential & Rear Axle", parts: ["Differential Housing", "Rear Hub Bearing Set", "Pivot Pin", "Differential Side Gears", "Crown Wheel & Pinion", "Axle Shaft Assembly"] },
  { cat: "Engine & Transmission", parts: ["Piston Kits (200cc / 205cc / 225cc)", "Complete Gasket Sets", "Engine Oil Seal Kits", "Flywheel Ring Gear", "Bendix Drive (Starter Gear)", "Cam Chain & Tensioner", "Valve Kits"] },
  { cat: "Clutch & Brakes", parts: ["Clutch Cable", "Clutch Plate Sets", "Clutch Springs", "Brake Shoes (front & rear)", "Brake Pipe Assemblies", "Brake Lever Sets"] },
  { cat: "Electrical & Body", parts: ["CDI Units", "Rectifiers", "Wiring Harnesses", "Starter Motor", "Horn Assemblies", "Indicator & Light Assemblies", "Windscreen Assemblies"] },
];

export default function KekeNapepPartsNigeriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Nigeria · Keke Napep / Bajaj RE 🇳🇬</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Keke Napep Spare Parts —<br />
            <span style={{ color: "var(--cm-gold)" }}>Wholesale Supplier from India to Nigeria</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            CrestMAX exports Keke Napep (Bajaj RE) spare parts wholesale from Ludhiana, India — the manufacturing source — directly to importers and distributors in Lagos, Kano, Port Harcourt, and across Nigeria. Propeller shaft kits, differential parts, engine kits, clutch, brakes. FOB Mumbai or CIF Apapa Lagos.
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

      {/* Market context */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: "48px" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Why Keke Napep Dominates Nigeria</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "16px" }}>Nigeria's Most Important Last-Mile Vehicle</h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              The Keke Napep (Bajaj RE three-wheeler auto rickshaw) is the dominant short-distance transport vehicle in Nigeria's urban centres. An estimated 2–4 million Keke Napep units are currently operating in Nigeria — in Lagos, Kano, Abuja, Port Harcourt, Ibadan, Owerri, and every other major city.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Each Keke Napep operates commercially for 10–14 hours daily on rough urban roads. The drivetrain — particularly the propeller shaft assembly and differential — absorbs constant vibration and load. Propeller shaft kits are the single most frequently replaced Keke Napep parts in Nigeria, typically needing replacement every 6–12 months under commercial use.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>
              Most Nigerian Keke mechanics source parts from Lagos markets (Ladipo, Aspamda) — which are supplied by Indian and Dubai traders at significant markups. CrestMAX removes the middleman, supplying the same Ludhiana-manufactured parts at wholesale ex-India prices, shipped CIF to Apapa.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Why Source from Ludhiana?</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "16px" }}>Indian Aftermarket Parts vs Chinese Copies</h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              The Keke Napep propeller shaft and drivetrain parts are precision components — tolerances matter. Chinese-manufactured Bajaj RE copies are widely known among Nigerian Keke mechanics to fail within 2–4 months due to incorrect dimensions and inferior steel grades.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Ludhiana manufacturers supplying CrestMAX have produced Bajaj RE-compatible drivetrain parts for 25–35 years — the same factories that supply the Indian domestic aftermarket. Correct dimensions, correct steel grades, proven tooling. Nigerian Keke operators who switch to Indian-sourced parts report significantly longer intervals between drivetrain replacements.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {["25–35 yrs manufacturing experience", "Correct RE dimensions & tolerances", "Propeller shaft specialists", "Full export documentation"].map((f) => (
                <div key={f} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "14px 16px", fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>
                  <span style={{ color: "var(--cm-gold)", marginRight: "8px" }}>✓</span>{f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parts list */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>Parts Catalogue</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "34px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px", textAlign: "center" }}>Keke Napep (Bajaj RE) Parts We Supply</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: "48px" }}>Compatible with Bajaj RE 4S, RE Compact, and Bajaj Maxima variants</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "20px" }}>
            {keKeNapepParts.map(({ cat, parts }) => (
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

      {/* Internal links */}
      <section style={{ padding: "60px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "24px", textAlign: "center" }}>Related Pages</p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "Bajaj 3-Wheeler Parts", href: "/bajaj-three-wheeler-parts" },
              { label: "Bajaj Parts — Nigeria", href: "/bajaj-spare-parts-nigeria" },
              { label: "Keke Napep Parts Catalogue", href: "/products/bajaj-re" },
              { label: "Import Guide — Nigeria", href: "/import-guide/nigeria" },
              { label: "Nigeria Market Guide", href: "/markets/nigeria" },
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
          Order Keke Napep Parts for Nigeria
        </h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 36px" }}>
          Send your parts list. We respond with CIF Apapa pricing within 24 hours.
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
