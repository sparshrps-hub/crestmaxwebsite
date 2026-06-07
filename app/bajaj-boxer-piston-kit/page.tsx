import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Bajaj Boxer Piston Kit — Wholesale Supplier India | CrestMAX" },
  description:
    "Wholesale Bajaj Boxer piston kit supplier from India. Complete piston assembly with rings, pin, and clips for Bajaj Boxer 150cc. FOB Ludhiana, CIF Apapa. Nigeria & Africa.",
  alternates: { canonical: "https://crestmax.in/bajaj-boxer-piston-kit" },
  openGraph: {
    title: "Bajaj Boxer Piston Kit — Wholesale Supplier India | CrestMAX",
    description:
      "Wholesale Bajaj Boxer piston kit from India. Complete with rings, pin, clips. FOB Ludhiana, CIF Apapa. Nigeria & Africa.",
    url: "https://crestmax.in/bajaj-boxer-piston-kit",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://crestmax.in/products" },
    { "@type": "ListItem", position: 3, name: "Bajaj Boxer Piston Kit", item: "https://crestmax.in/bajaj-boxer-piston-kit" },
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Bajaj Boxer Piston Kit",
  description: "Complete aftermarket-compatible piston kit for Bajaj Boxer 150cc — piston, piston rings (compression + oil), gudgeon pin, and circlips. Standard bore and oversize options.",
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
      name: "What is included in the Bajaj Boxer piston kit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A complete Bajaj Boxer piston kit from CrestMAX includes: one cast aluminium piston (standard bore 62mm or oversize), a set of piston rings (two compression rings and one oil control ring with expander), one hardened steel gudgeon pin, and two circlips.",
      },
    },
    {
      "@type": "Question",
      name: "What bore sizes are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We supply standard bore (62.0mm) and oversize options at +0.25mm, +0.50mm, and +0.75mm for rebored cylinders. Always measure the bore before ordering to confirm which size is needed.",
      },
    },
    {
      "@type": "Question",
      name: "Is this compatible with Bajaj Boxer AT and CT models?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The piston kit is compatible with Bajaj Boxer BM150, Boxer AT150, and CT100 engines. The CT100 uses a 52.4mm bore — a different size. Please specify your exact model when ordering.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum order from CrestMAX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum order is one carton (10 kits per carton). Most Nigerian importers order 50–200 kits per shipment alongside other Boxer parts to fill a container.",
      },
    },
  ],
};

export default function BajajBoxerPistonKitPage() {
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
            Engine Parts · Bajaj Boxer
          </p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 5vw, 54px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Bajaj Boxer<br />
            <span style={{ color: "var(--cm-gold)" }}>Piston Kit</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.55)", lineHeight: "1.75", marginBottom: "32px" }}>
            Complete piston assembly for Bajaj Boxer 150cc — piston, rings, gudgeon pin, and circlips. Standard and oversize bore options. Wholesale supply from India, FOB Ludhiana or CIF Apapa.
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
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px", textAlign: "center" }}>Kit Contents</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "36px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "48px", textAlign: "center" }}>
            What&apos;s in Every Kit
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { item: "Piston", detail: "Cast aluminium piston, standard bore and oversize options available. Confirm your bore size before ordering." },
              { item: "Compression Rings (×2)", detail: "Top and second compression rings. Chrome-faced top ring for wear resistance." },
              { item: "Oil Control Ring + Expander", detail: "Three-piece oil ring assembly with expander spring." },
              { item: "Gudgeon Pin", detail: "Hardened steel gudgeon pin to match Boxer con-rod specification." },
              { item: "Circlips (×2)", detail: "Full-circle spring steel circlips to retain the gudgeon pin." },
            ].map(({ item, detail }) => (
              <div key={item} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px 24px" }}>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "17px", letterSpacing: "2px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "10px" }}>{item}</p>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.65" }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering info */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Ordering Info</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "24px" }}>
            How to Order
          </h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
            Exact bore dimensions, ring tolerances, and material grades vary by production batch and are confirmed at time of order. Always measure your cylinder bore before ordering — we supply standard bore and oversize options to suit rebored cylinders. Share your Bajaj Boxer model and year when you contact us and we will confirm the correct fitment.
          </p>
          <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "20px 24px" }}>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "2px", color: "var(--cm-gold)", margin: "0 0 6px" }}>NOTE</p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: "1.7", margin: 0 }}>
              Technical specifications (bore diameter, ring dimensions, material grade) are provided on the product data sheet accompanying each shipment. Contact us for a sample data sheet before placing a bulk order.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>Common Questions</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>
            Frequently Asked
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { q: "What is included in the Bajaj Boxer piston kit?", a: "A complete kit from CrestMAX includes: one cast aluminium piston (standard or oversize), a set of piston rings (two compression rings and one oil control ring with expander), one hardened steel gudgeon pin, and two circlips. Exact specifications are confirmed at time of order." },
              { q: "What bore sizes are available?", a: "We supply standard bore and oversize options for rebored cylinders. Always measure your cylinder bore before ordering — then contact us to confirm the correct size for your engine." },
              { q: "Is this compatible with Bajaj Boxer AT and CT models?", a: "The Boxer and CT100 use different bore sizes — they are not interchangeable. Please specify your exact model and year when enquiring so we can confirm the correct fitment." },
              { q: "What is the minimum order from CrestMAX?", a: "Contact us for current minimum order quantities. Most Nigerian importers order alongside other Boxer parts to fill a container efficiently." },
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
      <section style={{ padding: "60px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Related Products</p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
            <Link href="/bajaj-spare-parts-nigeria" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>All Bajaj Parts for Nigeria →</Link>
            <Link href="/bajaj-boxer-engine-parts" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>Bajaj Boxer Engine Parts →</Link>
            <Link href="/bajaj-re-engine-kit" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>Bajaj RE Engine Kit →</Link>
            <Link href="/import-guide/nigeria" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>Nigeria Import Guide →</Link>
          </div>
          <div style={{ textAlign: "center", background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "40px" }}>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>
              Request a Wholesale Quote
            </h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.55)", marginBottom: "28px" }}>
              Tell us your required bore size and quantities. We respond within 24 hours with pricing and availability.
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
