import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Indian vs Chinese Spare Parts for Africa: A Definitive Comparison | CrestMAX" },
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
    { "@type": "Question", name: "Why are Indian aftermarket spare parts better than Chinese parts for African motorcycles?", acceptedAnswer: { "@type": "Answer", text: "Indian aftermarket parts are manufactured by specialists with decades of experience making parts specifically compatible with Bajaj, TVS, and Hero models. Indian manufacturers use correct dimensions, proper metallurgical grades, and consistent quality processes. Chinese aftermarket parts use approximate dimensions and lower-grade materials, leading to fitment failures and early wear. Indian manufacturers also provide traceable supply chains with recourse if parts fail — Chinese suppliers typically do not." } },
    { "@type": "Question", name: "Are Indian aftermarket spare parts the same as genuine factory parts?", acceptedAnswer: { "@type": "Answer", text: "Indian aftermarket parts are not factory-original parts — they are high-quality aftermarket alternatives manufactured by experienced Indian specialists to be compatible with Bajaj, TVS, and Hero motorcycles. The key distinction from Chinese copies is that Indian aftermarket manufacturers have decades of experience, use correct specifications, and produce consistently reliable parts. Chinese copies are typically lower quality with approximate dimensions and inferior materials." } },
    { "@type": "Question", name: "Do Chinese spare parts cost less than Indian aftermarket parts?", acceptedAnswer: { "@type": "Answer", text: "Chinese parts typically cost 20–40% less at purchase. However, they fail 2–4x faster in African road conditions, meaning total cost over 12 months is typically higher with Chinese parts. African mechanics and operators increasingly understand this — the market is shifting away from Chinese parts and back to Indian-sourced components." } },
    { "@type": "Question", name: "Why are Ludhiana-sourced spare parts trusted in Africa?", acceptedAnswer: { "@type": "Answer", text: "Ludhiana, Punjab is India's spare parts manufacturing capital — home to over 5,000 manufacturers with decades of experience producing parts specifically compatible with Bajaj, TVS, and Hero motorcycles. This long experience means correct dimensions, proper materials, and consistent quality. CrestMAX sources exclusively from verified Ludhiana manufacturers, not grey-market or rebranded Chinese imports." } },
  ],
};

const comparisonRows = [
  { factor: "Manufacturing origin", india: "Specialist aftermarket factories in Ludhiana — 30+ years producing parts compatible with Bajaj, TVS, Hero", china: "Generic low-cost factories with little model-specific experience" },
  { factor: "Dimensional accuracy", india: "Correct dimensions from decades of model-specific manufacturing — consistent fit", china: "Approximate dimensions — fitment issues common, especially in engine and gearbox parts" },
  { factor: "Material quality", india: "Correct metallurgical grades for each component — tested under African road conditions", china: "Lower-grade alloys and polymers — accelerated wear in high-temperature, high-load conditions" },
  { factor: "Counterfeit / mislabelling risk", india: "Clearly labelled as aftermarket / compatible parts — transparent supply chain", china: "Widespread fake branding — sold under counterfeit Bajaj and TVS packaging, misleading buyers" },
  { factor: "After-sales support", india: "Manufacturer accountability — claims can be escalated through Indian exporter", china: "Typically no recourse — Chinese suppliers are unreachable if parts fail" },
  { factor: "Experience with African models", india: "Ludhiana manufacturers have supplied parts for Africa-bound Bajaj and TVS models for decades", china: "Newer entrants copying parts without model-specific experience or tooling investment" },
  { factor: "Average service life", india: "12–24 months in commercial use — consistent quality from experienced manufacturers", china: "3–8 months in African commercial conditions — 2–4x faster failure rate" },
  { factor: "Resale value impact", india: "Maintains vehicle resale value — buyers trust Indian-sourced aftermarket fleets", china: "Reduces resale value — buyers discount Chinese-parts-maintained vehicles" },
  { factor: "Availability in Africa", india: "Consistent supply via direct India–Africa trade corridors — 18–25 day transit", china: "Inconsistent supply — Chinese suppliers frequently change SKUs and discontinue models" },
  { factor: "Documentation & customs", india: "Full HS codes, certificate of origin, commercial invoice for clean customs clearance", china: "Frequently misdeclared or under-invoiced — creates customs risk for African importers" },
];

export default function IndiaVsChinaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "174px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
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
            The spare parts market follows the same logic. Indian aftermarket parts — manufactured in Ludhiana by specialists with 30+ years of experience producing parts compatible with Bajaj, TVS, and Hero motorcycles — are a completely different product from Chinese low-quality copies. What follows is a detailed breakdown of every factor that matters to African importers, distributors, and fleet operators.
          </p>
        </div>
      </section>

      {/* Section 1 — Quality Standards */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Section 1</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "24px" }}>Quality Standards: Experience vs Imitation</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            Indian aftermarket parts for Bajaj, TVS, and Hero motorcycles are manufactured by specialists who have been producing these specific parts for 20–35 years. Ludhiana&apos;s manufacturers developed their tooling, processes, and quality standards alongside the growth of India&apos;s motorcycle industry. They know exactly what dimensions, tolerances, and materials each part requires — because they have been making the same parts, for the same models, for decades.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            Chinese manufacturers copying these parts are recent entrants with no equivalent experience. They reverse-engineer from available samples — a process that introduces dimensional errors and material substitutions. A crankshaft manufactured 0.2mm out of tolerance will wear bearing surfaces far faster than designed. A piston ring in the wrong alloy will lose tension within 5,000–8,000 km. These are not theoretical failures — they are what African mechanics encounter every day with Chinese aftermarket parts.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85" }}>
            Ludhiana, Punjab — where CrestMAX sources — is home to over 5,000 auto parts manufacturers. Many have been making Bajaj and Hero-compatible parts since the 1990s. The accumulated knowledge, tooling investment, and quality culture in Ludhiana is decades deep. There is no equivalent Chinese manufacturing cluster for Indian motorcycle-compatible parts.
          </p>
        </div>
      </section>

      {/* Section 2 — Counterfeiting */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Section 2</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "24px" }}>The Mislabelling Problem: Chinese Parts Sold Under Fake Indian Branding</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            The most dangerous aspect of Chinese spare parts in the African market is not just their lower quality — it is their presentation. Chinese parts are frequently packaged to imitate Indian brand packaging, with copied part numbers and fake branding. An importer who believes they are buying quality Indian-made aftermarket parts is, in many cases, receiving mislabelled Chinese copies of far inferior quality.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            Bajaj Auto, TVS Motor, and Hero MotoCorp have all publicly warned about counterfeit and mislabelled parts flooding African markets. African importers who have received such parts now specifically request proof of Indian origin — a certificate of origin from an Indian chamber of commerce and an invoice clearly showing the Indian manufacturer&apos;s address and IEC code.
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
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "24px" }}>Accountability: Indian Suppliers Stand Behind Their Parts</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            Bajaj Auto has invested heavily in Africa — with local assembly plants in Nigeria (through partnerships with Stallion Group since 2010), dealer and service centre networks across Nigeria, Kenya, Ethiopia and Tanzania, and a technical training programme for African mechanics. TVS has similarly built assembly operations in Kenya and runs East African dealer networks. This means African mechanics are trained and equipped to service these vehicles — and aftermarket parts need to be compatible with those service standards.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            When you order from a legitimate Indian aftermarket exporter like CrestMAX, you have a real supply chain to trace. You know the manufacturer, the city, the IEC code. If there is a quality issue, there is a conversation to be had and a problem to be solved. Indian suppliers have reputations to maintain and long-term trade relationships that depend on consistent quality.
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
            Bajaj and TVS have specifically re-engineered models for African markets — the Bajaj Boxer for Africa has a strengthened rear axle, reinforced swing arm, and higher-rated engine bearings compared to the Indian-domestic specification. Indian aftermarket manufacturers who have been supplying parts for Africa-bound models for years have adapted their products accordingly — they know which specifications matter for African operating conditions.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85" }}>
            Chinese aftermarket copies are made without this Africa-specific experience. They are produced from base-model samples without the accumulated knowledge of what specifications matter for African operating conditions. In high-use African commercial environments — Boda Boda operators covering 200+ km daily, Keke Napep running 14-hour shifts in Lagos traffic — the failure rate difference between quality Indian aftermarket parts and Chinese copies is dramatic and measurable by any garage mechanic who tracks it.
          </p>
        </div>
      </section>

      {/* Section 5 — Total Cost */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Section 5</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "24px" }}>The Real Cost Comparison: Purchase Price vs Total Cost</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            Chinese spare parts are typically priced 20–40% lower than quality Indian aftermarket parts. This is the number that matters to an importer buying their first container. But it is the wrong number to optimise.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            The correct number is the 12-month total cost of keeping a vehicle operational. Here is the arithmetic that African fleet operators understand: a quality Indian aftermarket piston kit costs $18 and lasts 18,000–25,000 km in commercial use. A Chinese copy costs $11 and lasts 6,000–9,000 km. Over 25,000 km, you buy the Indian kit once ($18) or the Chinese kit three times ($33). You also pay for two additional mechanic labour costs, two periods of vehicle downtime, and two more risks of a bad batch causing wider engine damage.
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
          CrestMAX supplies high-quality aftermarket parts compatible with Bajaj, TVS and Hero motorcycles — sourced from experienced Ludhiana manufacturers, with full certificate of origin, commercial invoice, and export documentation.
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
