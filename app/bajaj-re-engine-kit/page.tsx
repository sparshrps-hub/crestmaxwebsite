import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Bajaj RE Engine Kit — Keke Napep Engine Parts Wholesale | CrestMAX" },
  description:
    "Wholesale Bajaj RE engine kit supplier from India — piston, rings, gaskets, valve train, and bearings for Bajaj RE 4-stroke 3-wheeler engine. Export to Nigeria, Ghana, Kenya. FOB Ludhiana.",
  alternates: { canonical: "https://crestmax.in/bajaj-re-engine-kit" },
  openGraph: {
    title: "Bajaj RE Engine Kit — Keke Napep Engine Parts Wholesale | CrestMAX",
    description:
      "Wholesale Bajaj RE engine kit from India. Complete engine overhaul parts for Bajaj RE and Keke Napep. FOB Ludhiana, CIF Apapa.",
    url: "https://crestmax.in/bajaj-re-engine-kit",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://crestmax.in/products" },
    { "@type": "ListItem", position: 3, name: "Bajaj RE Engine Kit", item: "https://crestmax.in/bajaj-re-engine-kit" },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Bajaj RE Engine Kit",
  description: "Complete engine overhaul kit for Bajaj RE 3-wheeler (Keke Napep) — piston assembly, full gasket set, valve train components, main bearings, and con-rod bearings.",
  brand: { "@type": "Brand", name: "CrestMAX" },
  manufacturer: { "@type": "Organization", name: "CrestMAX", url: "https://crestmax.in" },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD", description: "FOB Ludhiana, wholesale pricing on inquiry" },
    seller: { "@type": "Organization", name: "CrestMAX", url: "https://crestmax.in" },
    availability: "https://schema.org/InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does the Bajaj RE engine kit include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A complete CrestMAX Bajaj RE engine kit includes: piston and rings set, full engine gasket set (head gasket, cylinder base gasket, rocker cover gasket, all oil seals), inlet and exhaust valves with springs and guides, main crankshaft bearings, connecting rod small and big-end bearings, and a timing chain with tensioner.",
      },
    },
    {
      "@type": "Question",
      name: "Is this compatible with all Bajaj RE variants in Nigeria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The kit is designed for the Bajaj RE 4-stroke single-cylinder engine used across RE Compact, RE 4-stroke, and most Keke Napep variants sold in West Africa. Verify the engine code stamped on the block — most Nigerian Kekes use the DTS-i or 4-stroke variant covered by this kit.",
      },
    },
    {
      "@type": "Question",
      name: "Can I buy individual components instead of the full kit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CrestMAX supplies all components individually — piston kit, gasket set, valve set, and bearings can each be ordered separately. However, most workshops prefer the full kit to avoid return visits for additional parts.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum order for the Bajaj RE engine kit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum order is 5 kits (one box). Nigerian importers typically order 20–50 engine kits per shipment. A full 20ft container can hold 300–400 engine kits depending on packing configuration.",
      },
    },
  ],
};

export default function BajajREEngineKitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "174px", paddingBottom: "80px", textAlign: "center", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>
            Engine Parts · Bajaj RE · Keke Napep
          </p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 5vw, 54px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Bajaj RE<br />
            <span style={{ color: "var(--cm-gold)" }}>Engine Kit</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.55)", lineHeight: "1.75", marginBottom: "32px" }}>
            Complete engine overhaul kit for Bajaj RE 3-wheeler (Keke Napep) — piston assembly, full gasket set, valve train, and bearings. Everything a mechanic needs for a full engine rebuild. Wholesale supply from India.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Request Wholesale Price
            </Link>
            <a href="https://wa.me/2349020636510" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              WhatsApp Nigeria →
            </a>
          </div>
        </div>
      </section>

      {/* Kit contents */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px", textAlign: "center" }}>What&apos;s Included</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "36px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "48px", textAlign: "center" }}>
            Complete Engine Rebuild Kit
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              { group: "Piston Assembly", parts: "Piston (standard bore), compression rings ×2, oil control ring set, gudgeon pin, circlips" },
              { group: "Gasket Set", parts: "Head gasket, cylinder base gasket, rocker cover gasket, exhaust manifold gasket, oil sump gasket, all crankcase oil seals" },
              { group: "Valve Train", parts: "Inlet valve ×1, exhaust valve ×1, valve springs (inner + outer), valve stem seals, rocker arm set with adjusters" },
              { group: "Timing", parts: "Timing chain, tensioner blade, tensioner spring, timing sprockets (cam and crank)" },
              { group: "Bearings", parts: "Main crankshaft bearings (2 sets), connecting rod big-end bearing, small-end bush" },
              { group: "Seals & Misc", parts: "Front and rear crankshaft oil seals, cam chain guide blade, drain plug washer" },
            ].map(({ group, parts }) => (
              <div key={group} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px 24px" }}>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "2px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "10px" }}>{group}</p>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.65" }}>{parts}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why full kit */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Why Import the Full Kit?</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "24px" }}>
            The Economics of a Complete Kit vs. Individual Parts
          </h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            A mechanic who starts a Bajaj RE engine rebuild and discovers mid-job that they need a valve stem seal or a timing chain tensioner that they did not stock will lose a full day and a dissatisfied customer. The Bajaj RE engine has 40+ consumable components that are replaced during a full overhaul — sourcing each individually from different suppliers creates complexity and incomplete stock.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            For Nigerian importers supplying mechanics and workshops, stocking complete kits is a competitive advantage. A distributor who can hand a mechanic a single box containing everything they need for an RE overhaul commands a premium and builds customer loyalty. At Ladipo Market, individual parts are available but complete kits at competitive prices are harder to find.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85" }}>
            CrestMAX&apos;s engine kits are assembled from matched components from the same manufacturer — not mixed from multiple suppliers. This matters because bearing clearances, gasket thicknesses, and ring tolerances are designed to work together. A mismatched gasket set can cause head gasket failure within 10,000 km.
          </p>
        </div>
      </section>

      {/* Specs table */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Ordering Info</p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Nunito Sans, sans-serif", fontSize: "14px" }}>
              <thead>
                <tr>
                  {["Parameter", "Detail"].map((h) => (
                    <th key={h} style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", color: "var(--cm-gold)", background: "var(--cm-navy-deep)", padding: "12px 16px", border: "1px solid var(--cm-gold-border)", textAlign: "left" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Compatible Model", "Bajaj RE (all 4-stroke variants), Keke Napep RE"],
                  ["Engine Type", "4-stroke, single cylinder, air-cooled, 215cc (RE Compact: 145cc)"],
                  ["Bore Options", "Standard + oversize (+0.25, +0.50mm)"],
                  ["HS Code (India Export)", "8714.10 — parts for motorcycles/3-wheelers"],
                  ["Minimum Order", "5 kits (one box)"],
                  ["Units per 20ft Container", "300–400 engine kits (varies with packing)"],
                  ["Shipping Terms", "FOB Ludhiana · CIF Apapa / Tema / Mombasa"],
                  ["Lead Time", "10–18 days from order confirmation"],
                ].map(([param, detail]) => (
                  <tr key={param}>
                    <td style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.8)", padding: "12px 16px", border: "1px solid rgba(255,255,255,0.06)", fontWeight: 600 }}>{param}</td>
                    <td style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", padding: "12px 16px", border: "1px solid rgba(255,255,255,0.06)" }}>{detail}</td>
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
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>Common Questions</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>Frequently Asked</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { q: "What does the Bajaj RE engine kit include?", a: "A complete CrestMAX Bajaj RE engine kit includes: piston and rings set, full engine gasket set (head gasket, cylinder base gasket, rocker cover gasket, all oil seals), inlet and exhaust valves with springs and guides, main crankshaft bearings, connecting rod small and big-end bearings, and a timing chain with tensioner." },
              { q: "Is this compatible with all Bajaj RE variants in Nigeria?", a: "The kit is designed for the Bajaj RE 4-stroke single-cylinder engine used across RE Compact, RE 4-stroke, and most Keke Napep variants sold in West Africa. Verify the engine code stamped on the block — most Nigerian Kekes use the 4-stroke variant covered by this kit." },
              { q: "Can I buy individual components instead of the full kit?", a: "Yes. CrestMAX supplies all components individually — piston kit, gasket set, valve set, and bearings can each be ordered separately. However, most workshops prefer the full kit to avoid return visits for additional parts." },
              { q: "What is the minimum order?", a: "Minimum order is 5 kits. Nigerian importers typically order 20–50 engine kits per shipment. A full 20ft container can hold 300–400 engine kits depending on packing configuration." },
            ].map(({ q, a }, i) => (
              <div key={i} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px" }}>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "17px", letterSpacing: "1px", color: "#FFFFFF", marginBottom: "10px" }}>{q}</p>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: "1.7", margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related + CTA */}
      <section style={{ padding: "60px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Related Products</p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
            <Link href="/keke-napep-parts-nigeria" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>Keke Napep Parts →</Link>
            <Link href="/keke-napep-engine-parts" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>Keke Engine Parts →</Link>
            <Link href="/keke-napep-propeller-shaft" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>Keke Propeller Shaft →</Link>
            <Link href="/bajaj-boxer-piston-kit" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>Bajaj Boxer Piston Kit →</Link>
            <Link href="/import-guide/nigeria" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>Nigeria Import Guide →</Link>
          </div>
          <div style={{ textAlign: "center", background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "40px" }}>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>
              Request a Wholesale Quote
            </h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.55)", marginBottom: "28px" }}>
              Send us your required quantities and bore size preference. We respond within 24 hours.
            </p>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
              Contact CrestMAX
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
