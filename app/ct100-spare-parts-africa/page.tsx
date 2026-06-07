import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CT100 Spare Parts Exporter to Africa — Wholesale from India | CrestMAX",
  description: "CrestMAX exports CT100 spare parts wholesale from India to Africa. Piston kits, engine parts, clutch, electrical. FOB Mumbai or CIF to any African port. B2B wholesale pricing.",
  alternates: { canonical: "https://crestmax.in/ct100-spare-parts-africa" },
  openGraph: {
    title: "CT100 Spare Parts Exporter to Africa — Wholesale from India | CrestMAX",
    description: "Wholesale CT100 / Bajaj CT100 spare parts from Ludhiana, India to Africa. Engine kits, piston, clutch, electrical. FOB or CIF.",
    url: "https://crestmax.in/ct100-spare-parts-africa",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Bajaj Spare Parts", item: "https://crestmax.in/bajaj-spare-parts" },
    { "@type": "ListItem", position: 3, name: "CT100 Parts — Africa", item: "https://crestmax.in/ct100-spare-parts-africa" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does CrestMAX export CT100 spare parts to Africa?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — CrestMAX exports CT100 (Bajaj CT100) spare parts wholesale from Ludhiana, India to importers across Africa, including Nigeria, Ghana, Tanzania, Zambia, and other markets where the CT100 is widely used. We offer FOB Mumbai and CIF terms to any major African port." },
    },
    {
      "@type": "Question",
      name: "What are the most commonly ordered CT100 spare parts?",
      acceptedAnswer: { "@type": "Answer", text: "The most ordered CT100 parts are: piston kits (standard and oversize), complete engine gasket sets, piston ring sets, clutch plate sets, brake shoes, CDI units, and air filter assemblies. The CT100's 100cc single-cylinder engine is straightforward to maintain — piston and gasket kits are the primary engine maintenance items, typically replaced every 20,000–30,000 km under commercial use." },
    },
    {
      "@type": "Question",
      name: "Are CT100 and Bajaj Boxer parts interchangeable?",
      acceptedAnswer: { "@type": "Answer", text: "Partially. The CT100 uses a smaller 100cc engine (vs the Boxer's 150cc), so engine internals are NOT interchangeable. However, some generic parts such as brake cables, clutch cables, certain bearings, and chain sprocket sets may be compatible. CrestMAX supplies model-specific parts — please specify CT100 when ordering to ensure correct fitment." },
    },
    {
      "@type": "Question",
      name: "What African countries use the CT100 motorcycle?",
      acceptedAnswer: { "@type": "Answer", text: "The CT100 is popular across West Africa (Nigeria, Ghana, Senegal, Côte d'Ivoire), East Africa (Tanzania, Kenya), and Southern Africa (Zambia, Malawi). It is the most affordable Bajaj model — preferred for budget-conscious buyers and rural markets where fuel economy and low maintenance cost are priorities. Its 100cc engine is simpler to service than the Boxer's 150cc unit." },
    },
  ],
};

const ct100Parts = [
  { cat: "Engine & Top End (Most Ordered)", parts: ["Piston Kit — Standard (50mm bore)", "Piston Kit — 0.25mm Oversize", "Piston Kit — 0.50mm Oversize", "Piston Ring Set — Standard", "Complete Cylinder Gasket Sets", "Cylinder Head Gasket", "Engine Oil Seal Kits", "Cylinder Barrels (rebore grade)", "Valve Kits (inlet & exhaust)", "Cam Chains & Tensioner Kits", "Connecting Rods"] },
  { cat: "Clutch & Transmission", parts: ["Clutch Plate Sets (friction & steel)", "Clutch Springs", "Clutch Cables", "Gear Shift Levers", "Kick Starter Assemblies", "Sprocket Sets (front & rear)", "Drive Chains"] },
  { cat: "Brakes & Suspension", parts: ["Brake Shoes (front drum)", "Brake Shoes (rear drum)", "Brake Cables (front & rear)", "Brake Levers", "Fork Seals", "Rear Shock Absorber Bushes", "Swing Arm Bush Kits"] },
  { cat: "Electrical & Ignition", parts: ["CDI Units", "Rectifier / Regulator Units", "Ignition Coils", "Magneto / Stator Coils", "Wiring Harnesses", "Headlight Assemblies", "Indicator Assemblies", "Starter Relays"] },
  { cat: "Filters & Fuel", parts: ["Air Filter Assemblies", "Oil Filters", "Carburettor Kits (complete)", "Carburettor Jets & Needles", "Fuel Taps", "Spark Plugs (A7TC compatible)"] },
  { cat: "Drive & Wheels", parts: ["Chain Sprocket Kits", "Wheel Bearings (front & rear)", "Axle Rods", "Footrest Rubbers", "Rubber Grommets"] },
];

export default function CT100SparePartsAfricaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "174px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Bajaj CT100 · Africa Export</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            CT100 Spare Parts Exporter<br />
            <span style={{ color: "var(--cm-gold)" }}>to Africa — Wholesale from India</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            CrestMAX exports Bajaj CT100 spare parts wholesale from Ludhiana, India to importers across Africa. Piston kits, gasket sets, clutch, electrical, brakes — complete aftermarket coverage for Africa's most affordable Bajaj model. FOB Mumbai or CIF to your port.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Request a Quote
            </Link>
            <Link href="/products/ct100" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              View Full Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* Market context */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: "48px" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Market Context</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "16px" }}>The CT100 in Africa</h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              The Bajaj CT100 is Africa's most affordable Bajaj motorcycle — a 100cc, air-cooled, single-cylinder commuter bike known for exceptional fuel economy (65–80 km/litre under light loads) and extremely low maintenance requirements.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              In West Africa (Nigeria, Ghana, Côte d'Ivoire, Senegal), the CT100 is the motorcycle of choice for budget-conscious personal transport. In East and Southern Africa (Tanzania, Zambia, Malawi), it dominates rural markets where road conditions and fuel costs favour a lighter, simpler machine over the Boxer.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>
              The CT100's 100cc engine — shared in spec with the Bajaj Platina and similar to the Honda CD100 — is one of the most understood and most-serviced motorcycle engines in the world. Ludhiana has produced CT100-compatible aftermarket parts for 30+ years. CrestMAX sources from these specialist manufacturers and exports wholesale to Africa.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>African Markets Served</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>CT100 Markets Across Africa</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { region: "West Africa (Highest Volume)", countries: "Nigeria · Ghana · Côte d'Ivoire · Senegal · Togo" },
                { region: "East Africa", countries: "Tanzania · Kenya · Uganda · Rwanda" },
                { region: "Southern & Central Africa", countries: "Zambia · Malawi · DRC · Angola" },
                { region: "North Africa", countries: "Morocco · Algeria (growing market)" },
              ].map(({ region, countries }) => (
                <div key={region} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "18px 20px" }}>
                  <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "1px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "4px" }}>{region}</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0 }}>{countries}</p>
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
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "34px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px", textAlign: "center" }}>CT100 Spare Parts We Export</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: "48px" }}>Compatible with Bajaj CT100, CT100B, and CT100ES variants</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "20px" }}>
            {ct100Parts.map(({ cat, parts }) => (
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
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>CT100 Spare Parts — Common Questions</h2>
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
              { label: "CT100 Full Catalogue", href: "/products/ct100" },
              { label: "CT100 Engine Parts", href: "/ct100-engine-parts" },
              { label: "CT100 Piston Kits", href: "/ct100-piston-kit" },
              { label: "India vs China Parts", href: "/india-vs-china-spare-parts" },
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
          Order CT100 Parts for Africa
        </h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 36px" }}>
          Send your parts list and destination port. FOB/CIF pricing within 24 hours.
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
