import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "HS Codes for Motorcycle & 3-Wheeler Spare Parts — India Export Guide | CrestMAX" },
  description: "Complete HS code reference for motorcycle and 3-wheeler spare parts imported from India to Africa. Chapters 87 and 84, duty rates, country-specific classifications for Nigeria, Kenya, Ghana.",
  alternates: { canonical: "https://crestmax.in/hs-codes-motorcycle-spare-parts" },
  openGraph: {
    title: "HS Codes for Motorcycle & 3-Wheeler Spare Parts — India Export Guide | CrestMAX",
    description: "Complete HS code reference for motorcycle and 3-wheeler spare parts imported from India to Africa. Chapter 87, duty rates, and country notes for Nigeria, Kenya, Ghana.",
    url: "https://crestmax.in/hs-codes-motorcycle-spare-parts",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "HS Codes — Motorcycle Spare Parts", item: "https://crestmax.in/hs-codes-motorcycle-spare-parts" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What HS code is used for motorcycle spare parts from India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Motorcycle parts and accessories are classified under HS Chapter 87, mainly HS 8714.10 (parts and accessories for motorcycles) and HS 8714.99 (other parts). Engine components specifically may also fall under HS 8407.90 (internal combustion engines for motorcycles). Always confirm with your customs broker for country-specific tariff codes.",
      },
    },
    {
      "@type": "Question",
      name: "What is the HS code for Keke Napep (Bajaj RE) spare parts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bajaj RE (Keke Napep) is classified as a motor vehicle under HS Chapter 87 (specifically HS 8703 or 8704 for the vehicle itself). Its spare parts typically fall under HS 8714.10 for motorcycle-type components, or HS 8708 for motor vehicle parts. Propeller shafts and drivetrain components may be classified under HS 8708.50. Check with your Nigerian customs agent for the most current NCS classification.",
      },
    },
    {
      "@type": "Question",
      name: "What import duty rate applies to motorcycle spare parts in Nigeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Nigeria, most motorcycle spare parts under HS 8714 attract 5% import duty + 7.5% VAT + 1% CISS + 0.5% ETLS on the CIF value. Total effective rate is approximately 14% on CIF value. Rates can vary by specific HS subheading — consult a licensed NCS customs agent for precise current rates.",
      },
    },
    {
      "@type": "Question",
      name: "Do Indian exporters include HS codes on their shipping documents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — reputable Indian exporters like CrestMAX include correct HS codes on all commercial invoices and packing lists. This is mandatory for Nigerian Form M compliance and for customs clearance at all African ports. Always request HS codes from your supplier before the shipment departs India.",
      },
    },
  ],
};

const hsCodes = [
  {
    code: "8714.10",
    description: "Parts and accessories for motorcycles (including mopeds)",
    applies: "Engine parts, clutch assemblies, brake components, suspension parts, electrical components, filters — for Bajaj Boxer, TVS HLX, CT100 and similar motorcycles",
    notes: "The primary HS code for most 2-wheeler spare parts from India to Africa. Used in Nigeria, Ghana, Kenya, Tanzania and most African markets.",
  },
  {
    code: "8714.99",
    description: "Other parts and accessories for cycles and similar vehicles",
    applies: "Generic cycle components not specifically classified under 8714.10. Chain sprocket kits, wheel bearings (sometimes), handlebar assemblies",
    notes: "Less common for commercial Indian spare parts exports but may apply to some accessories.",
  },
  {
    code: "8708.30",
    description: "Brake parts for motor vehicles",
    applies: "Brake assemblies for 3-wheelers (Bajaj RE, TVS King) are sometimes classified here rather than 8714.10 depending on the importing country's position on 3-wheeler classification",
    notes: "Nigeria and Kenya customs sometimes apply this to Keke Napep brake components. Confirm with your customs agent.",
  },
  {
    code: "8708.50",
    description: "Drive axles with differential, non-driving axles and their parts",
    applies: "Propeller shaft assemblies, differential components, rear axle parts for Bajaj RE (Keke Napep) and TVS King 3-wheelers",
    notes: "This is a common classification for Keke Napep drivetrain parts in Nigeria — particularly propeller shafts and slider block kits.",
  },
  {
    code: "8407.90",
    description: "Spark-ignition reciprocating piston engines for other vehicles",
    applies: "Complete engine assemblies for motorcycles and 3-wheelers",
    notes: "Rarely used for spare parts (more for complete engines). If importing a bare engine block or complete engine assembly, this may apply.",
  },
  {
    code: "8536.50",
    description: "Switches for electric circuits",
    applies: "CDI units, ignition switches, killswitches",
    notes: "Sometimes used for electrical switching components imported as spare parts.",
  },
  {
    code: "4016.93",
    description: "Gaskets, washers and other seals of vulcanised rubber",
    applies: "Rubber gasket sets, engine oil seal kits, rubber grommets, fork seals",
    notes: "Rubber components in engine gasket sets and seal kits may be classified here rather than 8714.10 in some markets.",
  },
  {
    code: "8482.10",
    description: "Ball bearings",
    applies: "Wheel bearings, engine bearings, crankshaft bearings",
    notes: "Bearings are often classified here rather than as vehicle parts. Check with your customs agent for the preferred classification in your market.",
  },
];

const countryRates = [
  {
    country: "Nigeria",
    flag: "🇳🇬",
    duty: "5% import duty",
    vat: "7.5% VAT",
    other: "1% CISS + 0.5% ETLS",
    total: "~14% on CIF value",
    notes: "Form M required before shipment. HS codes must appear on commercial invoice and B/L. NCS licensed agent required at Apapa.",
    importGuide: "/import-guide/nigeria",
  },
  {
    country: "Ghana",
    flag: "🇬🇭",
    duty: "5% import duty (ECOWAS rate)",
    vat: "15% VAT",
    other: "2% NHIL + 2.5% GETFund",
    total: "~25% on CIF value",
    notes: "ECOWAS Form A certificate of origin from India helps. Ghana Revenue Authority (GRA) manages customs.",
    importGuide: "/import-guide/ghana",
  },
  {
    country: "Kenya",
    flag: "🇰🇪",
    duty: "0–25% depending on subheading",
    vat: "16% VAT",
    other: "2% Railway Development Levy",
    total: "~18–43% on CIF value",
    notes: "KRA Import Declaration Form (IDF) required. EAC common external tariff applies. Most 8714 parts attract 0% duty under EAC. Verify with KRA tariff schedule.",
    importGuide: "/import-guide/kenya",
  },
  {
    country: "Tanzania",
    flag: "🇹🇿",
    duty: "0–25% (EAC common external tariff)",
    vat: "18% VAT",
    other: "1.5% destination inspection fee",
    total: "~20–45% on CIF value",
    notes: "SADC certificate of origin may reduce duties. Tanzania Revenue Authority (TRA) manages customs at Dar es Salaam.",
    importGuide: null,
  },
  {
    country: "Uganda",
    flag: "🇺🇬",
    duty: "0–25% (EAC CET)",
    vat: "18% VAT",
    other: "Transit fees (Mombasa to Kampala corridor)",
    total: "~20–45% on CIF value",
    notes: "Landlocked — goods transit through Mombasa, Kenya. EAC Certificate of Origin helps. Uganda Revenue Authority (URA) manages clearance.",
    importGuide: null,
  },
];

export default function HsCodesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "174px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>
            Trade Reference
          </p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4.5vw, 52px)", letterSpacing: "2px", lineHeight: "1.1", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 24px" }}>
            HS Codes for Motorcycle &amp; 3-Wheeler Spare Parts
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px", maxWidth: "720px" }}>
            A complete reference guide to Harmonised System (HS) codes used when importing motorcycle and 3-wheeler spare parts from India to Africa. Includes Chapter 87 classifications, country-specific duty rates for Nigeria, Ghana, Kenya, Tanzania and Uganda, and practical notes for importers.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "12px 28px", borderRadius: "2px", textDecoration: "none" }}>
              Request a Quote
            </Link>
            <Link href="/import-guide/nigeria" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "12px 28px", borderRadius: "2px", textDecoration: "none" }}>
              Nigeria Import Guide
            </Link>
          </div>
        </div>
      </section>

      {/* What are HS Codes */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Background</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>
            What Are HS Codes and Why They Matter for Your Import
          </h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
            The Harmonised System (HS) is an international classification system maintained by the World Customs Organisation (WCO). Every product traded internationally has an HS code — a 6-digit number that determines how it is classified, taxed, and documented at customs in every country.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
            For African importers of Indian spare parts, HS codes matter for three reasons:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
            {[
              { num: "01", point: "Duty calculation — your import duty rate is determined by the HS code. Misclassification can mean overpaying or underpaying duty — both cause problems." },
              { num: "02", point: "Customs documentation — Nigeria's Form M, Kenya's IDF, and Ghana's TIN-linked declarations all require correct HS codes. Missing or wrong HS codes cause delays and rejections at the port." },
              { num: "03", point: "Trade statistics and permits — some HS categories require import permits or are subject to specific regulations. Knowing your code helps you plan ahead." },
            ].map(({ num, point }) => (
              <div key={num} style={{ display: "flex", gap: "16px", background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "20px 24px" }}>
                <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "13px", fontWeight: 600, color: "var(--cm-gold)", flexShrink: 0 }}>{num}</span>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", margin: 0 }}>{point}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>
            CrestMAX includes correct HS codes on all commercial invoices and packing lists for every shipment. Our export documents are designed to be accepted at Nigerian (NCS), Kenyan (KRA), Ghanaian (GRA), and Tanzanian (TRA) customs without issue.
          </p>
        </div>
      </section>

      {/* HS Code Table */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Classification Reference</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px" }}>
            Key HS Codes for Motorcycle &amp; 3-Wheeler Spare Parts
          </h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.45)", marginBottom: "36px", lineHeight: "1.6" }}>
            Note: HS codes are standardised at 6 digits internationally. Countries may extend to 8–10 digits for their own tariff schedules. The codes below are the international 6-digit standard. Always verify with a licensed customs broker in your country before filing import declarations.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {hsCodes.map((item) => (
              <div key={item.code} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px 32px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", flexWrap: "wrap", marginBottom: "12px" }}>
                  <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "18px", fontWeight: 600, color: "var(--cm-gold)", flexShrink: 0 }}>{item.code}</span>
                  <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "17px", letterSpacing: "1px", color: "#FFFFFF", margin: 0, flex: 1 }}>{item.description}</p>
                </div>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.7", marginBottom: "10px" }}>
                  <strong style={{ color: "rgba(255,255,255,0.5)", fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase" }}>Applies to: </strong>{item.applies}
                </p>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: "1.6", margin: 0, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "10px" }}>
                  <strong style={{ color: "var(--cm-gold)", fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase" }}>Note: </strong>{item.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country Duty Rates */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>By Country</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "36px" }}>
            Import Duty Rates — Motorcycle Spare Parts
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {countryRates.map((c) => (
              <div key={c.country} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px 32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "24px" }}>{c.flag}</span>
                  <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "22px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", margin: 0 }}>{c.country}</h3>
                  <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "12px", color: "var(--cm-gold)", background: "rgba(201,168,76,0.08)", border: "1px solid var(--cm-gold-border)", padding: "4px 12px", borderRadius: "2px", letterSpacing: "1px" }}>Total: {c.total}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginBottom: "16px" }}>
                  {[
                    { label: "Import Duty", value: c.duty },
                    { label: "VAT", value: c.vat },
                    { label: "Other Levies", value: c.other },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "2px", padding: "14px 16px" }}>
                      <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "6px" }}>{label}</p>
                      <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)", margin: 0 }}>{value}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: "1.6", margin: "0 0 12px" }}>{c.notes}</p>
                {c.importGuide && (
                  <Link href={c.importGuide} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", textDecoration: "none", letterSpacing: "0.5px" }}>
                    Full {c.country} Import Guide →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical tips */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Practical Advice</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "32px" }}>
            Working with HS Codes on Your India Import
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { title: "Ask your supplier for HS codes before the shipment", body: "Your Indian supplier must include HS codes on the commercial invoice and packing list. Ask for the HS codes at the proforma invoice stage — not after the goods have shipped. If codes are wrong, amending documents after shipment is difficult and expensive." },
              { title: "Verify with a licensed customs agent in your country", body: "HS codes in this guide are the international 6-digit standards. Your country's tariff schedule may use extended 8 or 10-digit codes with different duty rates. A licensed customs agent knows the local extensions. In Nigeria: NCS licensed agent. In Kenya: CDA licensed agent. In Ghana: GRA registered agent." },
              { title: "For Keke Napep (Bajaj RE) parts — clarify 3-wheeler classification", body: "The Bajaj RE 3-wheeler occupies a grey area in many African tariff schedules — it can be classified as a motorcycle (8714) or as a motor vehicle (8708). Nigerian customs agents have differing views on Keke propeller shaft classification specifically. Confirm the preferred code before your first shipment and be consistent thereafter." },
              { title: "Include HS codes in your Form M (Nigeria) or IDF (Kenya)", body: "Nigeria's Form M and Kenya's Import Declaration Form both require HS codes at the line-item level. Incorrect codes on these pre-import declarations require amendment — which delays your goods. Get the codes right at the application stage." },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderLeft: "4px solid var(--cm-gold)", borderRadius: "2px", padding: "24px 28px" }}>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "17px", letterSpacing: "1px", color: "#FFFFFF", marginBottom: "10px" }}>{title}</p>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: "1.7", margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>FAQ</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>
            Common Questions on HS Codes
          </h2>
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

      {/* Cross-links */}
      <section style={{ padding: "60px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Related Guides</p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
            {[
              { label: "Import Guide — Nigeria", href: "/import-guide/nigeria" },
              { label: "Import Guide — Ghana", href: "/import-guide/ghana" },
              { label: "Import Guide — Kenya", href: "/import-guide/kenya" },
              { label: "FOB vs CIF Explained", href: "/blog/fob-vs-cif-spare-parts-india-africa" },
              { label: "How to Import to Nigeria", href: "/blog/how-to-import-bajaj-spare-parts-from-india-to-nigeria" },
              { label: "Bajaj Spare Parts", href: "/bajaj-spare-parts" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>
                {label} →
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(22px, 3.5vw, 36px)", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>
              Ready to Import from India?
            </h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", marginBottom: "32px" }}>
              CrestMAX provides correct HS codes, full export documentation, and experience with every major African import corridor.
            </p>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
