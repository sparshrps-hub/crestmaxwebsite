import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Indian vs Chinese Spare Parts for Africa: A Definitive Comparison | CrestMAX",
  description: "Why African importers and mechanics choose Indian spare parts over Chinese alternatives. Quality standards, counterfeiting risk, after-sales support, road performance data compared.",
  alternates: { canonical: "https://crestmax.in/india-vs-china-spare-parts" },
  openGraph: {
    title: "Indian vs Chinese Spare Parts for Africa: A Definitive Comparison | CrestMAX",
    description: "The evidence-based case for Indian spare parts: quality, counterfeit risk, after-sales support, and long-term cost compared to Chinese alternatives for African operators.",
    url: "https://crestmax.in/india-vs-china-spare-parts",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "India vs China Spare Parts", item: "https://crestmax.in/india-vs-china-spare-parts" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Why are Indian spare parts better than Chinese parts for African motorcycles?", acceptedAnswer: { "@type": "Answer", text: "Indian parts are manufactured specifically for Bajaj, TVS, and Hero models — the same vehicles sold in Africa. They match OEM specifications, dimensions, and metallurgical grades. Chinese generic parts use approximate dimensions and lower-grade materials, leading to fitment failures and early wear. Indian manufacturers also have traceable supply chains with recourse if parts fail — Chinese alternatives typically do not." } },
    { "@type": "Question", name: "Are Chinese spare parts for Bajaj and TVS motorcycles genuine?", acceptedAnswer: { "@type": "Answer", text: "No — Chinese manufacturers do not have licensing agreements with Bajaj, TVS, or Hero to produce genuine parts. Chinese-made 'Bajaj' parts are copies manufactured without access to original engineering drawings or material specifications. Many are counterfeits sold under fake OEM branding. Indian OEM-tier manufacturers source from the same supply chain as the original vehicle manufacturers." } },
    { "@type": "Question", name: "Do Chinese spare parts cost less than Indian parts?", acceptedAnswer: { "@type": "Answer", text: "Chinese parts typically cost 20–40% less at the purchase stage. However, they fail 2–4x faster in African road conditions, meaning the total cost over 12 months is typically higher with Chinese parts. African mechanics and operators increasingly understand this — the African market is shifting away from Chinese parts and back toward Indian-sourced components." } },
    { "@type": "Question", name: "Which Indian spare parts brands are trusted in Africa?", acceptedAnswer: { "@type": "Answer", text: "Parts sourced from Ludhiana, Punjab — India's spare parts manufacturing capital — are the most trusted in Africa. Ludhiana manufacturers supply to Bajaj Auto, TVS Motor, and Hero MotoCorp's own service networks. CrestMAX sources exclusively from verified Ludhiana manufacturers, not grey-market or rebranded Chinese imports." } },
  ],
};

const comparisonRows = [
  { factor: "Manufacturing origin", india: "OEM-tier factories in Ludhiana, Pune, Chennai — same supply chain as vehicle manufacturers", china: "Generic factories with no licensing agreement with Bajaj, TVS, or Hero" },
  { factor: "Dimensional accuracy", india: "Manufactured to original engineering drawings and tolerances — guaranteed fit", china: "Approximate dimensions — fitment issues common, especially in engine and gearbox parts" },
  { factor: "Material quality", india: "Correct metallurgical grades for each component — tested under African road conditions", china: "Lower-grade alloys and polymers — accelerated wear in high-temperature, high-load conditions" },
  { factor: "Counterfeit risk", india: "Traceable supply chain — you can verify manufacturer and origin", china: "Widespread counterfeiting — fake Bajaj and TVS branding on sub-standard components" },
  { factor: "After-sales support", india: "Manufacturer accountability — claims can be escalated through Indian exporter", china: "Typically no recourse — Chinese suppliers are unreachable if parts fail" },
  { factor: "OEM service network compatibility", india: "Accepted by Bajaj, TVS, and Hero authorised service centres across Africa", china: "Rejected by authorised service centres — voids service warranties" },
  { factor: "Average service life", india: "Comparable to OEM factory parts — 12–24 months in commercial use", china: "3–8 months in African commercial conditions — 2–4x faster failure rate" },
  { factor: "Resale value impact", india: "Maintains vehicle resale value — buyers trust Indian-maintained fleets", china: "Reduces resale value — buyers discount Chinese-maintained vehicles" },
  { factor: "Availability in Africa", india: "Consistent supply via direct India–Africa trade corridors — 18–25 day transit", china: "Inconsistent supply — Chinese suppliers frequently change SKUs and stop producing obscure variants" },
  { factor: "Documentation & customs", india: "Full HS codes, certificate of origin, commercial invoice for clean customs clearance", china: "Frequently misdeclared or under-invoiced — creates customs risk for African importers" },
];

export default function IndiaVsChinaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1, textAlign: "center" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Evidence-Based Comparison</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4.5vw, 54px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Indian vs Chinese Spare Parts for Africa:<br />
            <span style={{ color: "var(--cm-gold)" }}>A Definitive Comparison</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "17px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            Every African importer who buys spare parts faces the same choice: Indian parts or Chinese alternatives. The price difference is real. So are the consequences. Here is the evidence-based case — quality, counterfeiting risk, after-sales support, road performance, and total cost — so you can make an informed decision for your business and your customers.
          </p>
          <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
            Source Indian Parts from CrestMAX
          </Link>
        </div>
      </section>

      {/* Executive Summary */}
      <section style={{ padding: "72px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>The Short Answer</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "24px" }}>India Beat China in Africa's 2-Wheeler Market. Here's Why.</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: "1.85", marginBottom: "20px" }}>
            In the early 2000s, Chinese motorcycle manufacturers flooded African markets with cheap machines — and briefly dominated. By the 2010s, that dominance had collapsed. The reason: Chinese vehicles and parts failed too quickly in African road conditions. Mechanics found that dimensions were wrong, materials wore out fast, and counterfeit branding was widespread. African consumers stopped buying Chinese motorcycles because they couldn&apos;t maintain them profitably.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: "1.85", marginBottom: "20px" }}>
            Indian brands — Bajaj, TVS, Hero — rebuilt the market on a different model: purpose-engineered vehicles for African conditions, backed by local dealer and service networks, with a reliable spare parts supply chain traceable back to Indian manufacturers. By 2020, Bajaj and TVS had recaptured the dominant position in Nigeria, Kenya, Ethiopia, Uganda and Tanzania that Chinese brands had briefly held.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.7)", lineHeight: "1.85" }}>
            The spare parts market follows the same logic. Indian-manufactured parts — from OEM-tier factories in Ludhiana, Pune, and Chennai — are made to the same specifications as the original vehicle components. Chinese copies are not. What follows is a detailed breakdown of every factor that matters to African importers, distributors, and fleet operators.
          </p>
        </div>
      </section>

      {/* Section 1 — Quality Standards */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Section 1</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "24px" }}>Quality Standards: The Engineering Gap</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            Genuine Indian spare parts are manufactured by companies that supply Bajaj Auto, TVS Motor, and Hero MotoCorp&apos;s own assembly lines and authorised service networks. These manufacturers hold access to the original engineering drawings, material specifications, and dimensional tolerances for each part. They are audited by the vehicle manufacturers&apos; quality teams.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            Chinese manufacturers producing &quot;Bajaj&quot; or &quot;TVS&quot; spare parts have no licensing agreements with these companies and no access to their technical documentation. They reverse-engineer parts from available examples — a process that introduces dimensional errors and material substitutions. A crankshaft manufactured 0.2mm out of tolerance will wear bearing surfaces far faster than designed. A piston ring in the wrong alloy will lose tension within 5,000–8,000 km. These are not theoretical failures — they are what African mechanics encounter daily with Chinese parts.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85" }}>
            Ludhiana, Punjab — where CrestMAX sources — is home to over 5,000 auto parts manufacturers. Many have been supplying Bajaj and Hero since the 1990s. The institutional knowledge, tooling investment, and quality culture in Ludhiana is decades deep. There is no equivalent Chinese manufacturing cluster for Indian motorcycle parts.
          </p>
        </div>
      </section>

      {/* Section 2 — Counterfeiting */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Section 2</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "24px" }}>The Counterfeit Problem: What Chinese "OEM" Really Means</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            The most dangerous aspect of Chinese spare parts in the African market is not their lower quality — it is their presentation. Chinese parts are frequently sold in packaging that closely imitates genuine Indian brand packaging, with fake holograms, copied part numbers, and counterfeit OEM branding. An importer who believes they are buying genuine Bajaj parts from China is, in most cases, buying a counterfeit product.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            Bajaj Auto, TVS Motor, and Hero MotoCorp have all issued public warnings about counterfeit parts flooding African markets — primarily sourced from Chinese manufacturers. These companies have no manufacturing operations in China for their Indian-market vehicles. Any part labelled &quot;made in China&quot; with Indian OEM branding is a counterfeit product, full stop.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85" }}>
            The consequences for African importers and mechanics are serious: counterfeit parts cause premature engine failure, safety incidents (brake failures, steering failures), and damaged customer relationships. African fleet operators and Boda Boda owners who have been sold counterfeits now specifically ask for &quot;Indian parts&quot; and request proof of Indian origin before purchase. The market has learned.
          </p>
          <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "24px", marginTop: "28px" }}>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "10px" }}>How CrestMAX Protects You</p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", margin: 0 }}>
              CrestMAX sources exclusively from verified manufacturers in Ludhiana and provides a certificate of origin from the Ludhiana Chamber of Commerce with every shipment. Our commercial invoice includes manufacturer name, address, and IEC code. You have full traceability from your door back to the Indian factory.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — After-Sales */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Section 3</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "24px" }}>After-Sales Support: India Invested, China Didn't</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            Bajaj Auto has invested heavily in Africa. It has local assembly plants in Nigeria (Bajaj Auto assembled motorcycles since 2010 through partnerships with Stallion Group), local dealer and service centre networks across Nigeria, Kenya, Ethiopia and Tanzania, and a technical training programme for African mechanics. TVS has similarly built assembly operations in Kenya (TVS Motor Company Kenya Ltd) and runs dealer networks in East Africa.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            This investment has a direct benefit for spare parts buyers: when you order from a legitimate Indian exporter, you are ordering from the same supply chain that feeds these dealer networks. The parts are compatible with the service manuals that Bajaj and TVS-trained mechanics use. Warranty claims, technical issues, and supply questions can be escalated through a structured, accountable supply chain.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85" }}>
            Chinese spare parts suppliers have no comparable investment in Africa and no after-sales infrastructure. When Chinese parts fail, there is no technical support, no claims process, and frequently no way to even contact the original supplier. Many Chinese suppliers operate under shell companies or change trading names regularly. African importers who have experienced this know the risk.
          </p>
        </div>
      </section>

      {/* Section 4 — Road Performance */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Section 4</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "24px" }}>Road Performance: Why Africa's Conditions Change Everything</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            A motorcycle spare part that performs adequately in European or Chinese road conditions may fail quickly in Africa. The reasons are specific and measurable: African road surfaces create significantly higher vibration loads on engine mounts, frame joints, and suspension components. Tropical temperatures mean engine oil reaches 105–115°C in heavy traffic — exceeding the operating range of lower-grade bearing materials. Dust concentration in Sahelian and semi-arid environments is 10–20x higher than European standards, accelerating air filter and engine wear.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            Bajaj and TVS engineers specifically design and test their components for these conditions. The Bajaj Boxer, for example, was re-engineered for African markets with a strengthened rear axle, reinforced swing arm, and higher-rated engine bearings compared to the original Indian-domestic specification. The spare parts manufactured to these African-market specifications — sourced from Indian OEM-tier manufacturers — inherit this engineering.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85" }}>
            Chinese reverse-engineered parts do not incorporate these design upgrades. They are copied from base models without the market-specific adaptations. In high-use African commercial environments — Boda Boda operators covering 200+ km daily, Keke Napep running 14-hour shifts in Lagos traffic — the failure rate difference between genuine Indian parts and Chinese copies is dramatic and measurable by any garage mechanic who tracks it.
          </p>
        </div>
      </section>

      {/* Section 5 — Total Cost */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Section 5</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "24px" }}>The Real Cost Comparison: Purchase Price vs Total Cost</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            Chinese spare parts are typically priced 20–40% lower than genuine Indian OEM-tier parts. This is the number that matters to an importer buying their first container. But it is the wrong number to optimise.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            The correct number is the 12-month total cost of keeping a vehicle operational. Here is the arithmetic that African fleet operators understand: a genuine Indian piston kit costs $18 and lasts 18,000–25,000 km in commercial use. A Chinese copy costs $11 and lasts 6,000–9,000 km. Over 25,000 km, you buy the Indian kit once ($18) or the Chinese kit three times ($33). You also pay for two additional mechanic labour costs, two periods of vehicle downtime, and two more risks of a bad batch causing wider engine damage.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85" }}>
            For African importers selling to mechanics and fleet operators who understand this arithmetic, the shift toward Indian parts is not sentiment — it is rational economic decision-making. The businesses that recognised this early built customer loyalty. Those still selling Chinese parts are increasingly losing customers to importers who source from India.
          </p>
          <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "24px 28px", marginTop: "28px" }}>
            <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "1px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "10px" }}>The Market Has Already Decided</p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.7", margin: 0 }}>
              Bajaj Auto&apos;s Africa sales have grown to over 800,000 units annually. TVS King is the dominant tuk tuk in East Africa. Hero CT100 is expanding in Ethiopia and Nigeria. Chinese motorcycle brands — once thought to be taking over Africa — have retreated to entry-level segments. The spare parts market is following the same trajectory. Indian parts are winning because they work.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>Side-by-Side</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Indian Parts vs Chinese Parts — Full Comparison</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "600px" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "14px 16px", background: "var(--cm-navy-mid)", color: "rgba(255,255,255,0.4)", fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "1px solid var(--cm-gold-border)", width: "30%" }}>Factor</th>
                  <th style={{ textAlign: "left", padding: "14px 16px", background: "rgba(34,197,94,0.08)", color: "#4ade80", fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "2px solid rgba(34,197,94,0.3)", borderLeft: "2px solid rgba(34,197,94,0.3)" }}>🇮🇳 Indian Parts (CrestMAX)</th>
                  <th style={{ textAlign: "left", padding: "14px 16px", background: "rgba(239,68,68,0.08)", color: "#f87171", fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "2px solid rgba(239,68,68,0.3)", borderLeft: "2px solid rgba(239,68,68,0.3)" }}>🇨🇳 Chinese Alternatives</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "var(--cm-navy-mid)" : "transparent" }}>
                    <td style={{ padding: "14px 16px", fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.5px", borderBottom: "1px solid rgba(255,255,255,0.05)", verticalAlign: "top" }}>{row.factor}</td>
                    <td style={{ padding: "14px 16px", fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: "1.6", borderBottom: "1px solid rgba(255,255,255,0.05)", borderLeft: "2px solid rgba(34,197,94,0.2)", verticalAlign: "top" }}>{row.india}</td>
                    <td style={{ padding: "14px 16px", fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: "1.6", borderBottom: "1px solid rgba(255,255,255,0.05)", borderLeft: "2px solid rgba(239,68,68,0.2)", verticalAlign: "top" }}>{row.china}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>FAQ</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Common Questions</h2>
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

      {/* Related links + CTA */}
      <section style={{ padding: "72px 24px", background: "var(--cm-navy-mid)", borderTop: "1px solid var(--cm-gold-border)", textAlign: "center" }}>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "24px" }}>Explore Further</p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "48px" }}>
          {[
            { label: "Bajaj Spare Parts from India", href: "/bajaj-spare-parts" },
            { label: "TVS Spare Parts from India", href: "/tvs-spare-parts" },
            { label: "Import Guide — Nigeria", href: "/import-guide/nigeria" },
            { label: "Import Guide — Kenya", href: "/import-guide/kenya" },
            { label: "Why CrestMAX", href: "/why-crestmax" },
          ].map(({ label, href }) => (
            <Link key={href} href={href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 20px", borderRadius: "2px", textDecoration: "none" }}>
              {label} →
            </Link>
          ))}
        </div>
        <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4vw, 40px)", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>
          Source Indian Parts Directly from Ludhiana
        </h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", marginBottom: "36px", maxWidth: "520px", margin: "0 auto 36px" }}>
          CrestMAX supplies verified Bajaj, TVS and Hero parts from OEM-tier Ludhiana manufacturers — with full certificate of origin, commercial invoice, and export documentation.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
            Request a Wholesale Quote
          </Link>
          <Link href="/products" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
            Browse Parts Catalogue
          </Link>
        </div>
      </section>
    </>
  );
}
