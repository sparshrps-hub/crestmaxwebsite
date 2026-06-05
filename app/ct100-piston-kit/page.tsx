import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CT100 Piston Kit Supplier from India — Standard & Oversize | CrestMAX",
  description: "CrestMAX supplies CT100 piston kits wholesale from India: standard 50mm and 0.25/0.50/0.75mm oversize. Complete kits with piston, rings, pin, clips. FOB or CIF Africa.",
  alternates: { canonical: "https://crestmax.in/ct100-piston-kit" },
  openGraph: {
    title: "CT100 Piston Kit Supplier from India | CrestMAX",
    description: "CT100 piston kits: standard 50mm and 0.25/0.50/0.75mm oversize. Complete kits from Ludhiana, India. Wholesale export to Africa.",
    url: "https://crestmax.in/ct100-piston-kit",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "CT100 Engine Parts", item: "https://crestmax.in/ct100-engine-parts" },
    { "@type": "ListItem", position: 3, name: "CT100 Piston Kit", item: "https://crestmax.in/ct100-piston-kit" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a CT100 piston kit include?",
      acceptedAnswer: { "@type": "Answer", text: "A complete CT100 piston kit from CrestMAX includes: (1) one piston of the specified bore size, (2) piston ring set (top compression ring, second compression ring, oil control ring set), (3) piston pin / gudgeon pin, (4) circlip set (2 clips). The kit is ready to install as a complete unit after cylinder reboring to the matching oversize. Gasket sets are sold separately." },
    },
    {
      "@type": "Question",
      name: "What is the standard CT100 piston bore size?",
      acceptedAnswer: { "@type": "Answer", text: "The Bajaj CT100 standard piston bore is 50.00mm. Oversize grades are: 50.25mm (+0.25mm), 50.50mm (+0.50mm), and 50.75mm (+0.75mm). The oversize is selected based on how much the cylinder needs to be rebored to remove wear scoring. A worn cylinder is measured, sent to a reboring shop, and the piston is ordered to match the rebored diameter. CrestMAX supplies all four sizes." },
    },
    {
      "@type": "Question",
      name: "Why is the CT100 piston kit the most ordered part in Africa?",
      acceptedAnswer: { "@type": "Answer", text: "Piston kits are the most frequently ordered CT100 part because engine rebuilds are the most common major maintenance job on 100cc motorcycles in Africa. Commercial CT100s running daily taxi work need engine rebuilds every 2–3 years. The piston kit is the core of every rebuild — ordered alongside gasket sets and sometimes a cylinder barrel. Because African mechanics price-compare heavily, the piston kit is also the part where quality differences between Indian and Chinese parts are most immediately felt (Chinese pistons wear oval within months from incorrect bore tolerances)." },
    },
    {
      "@type": "Question",
      name: "Can I order CT100 piston kits in bulk?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — bulk ordering is encouraged. CrestMAX is a wholesale exporter. A typical order from African distributors is 50–200 units per size (standard, 0.25mm, 0.50mm OS) per shipment. We can pack and label by size for easy warehouse management. Piston kits are compact and lightweight, making them ideal for maximising value in LCL or FCL shipments alongside other parts." },
    },
  ],
};

export default function CT100PistonKitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Bajaj CT100 · Piston Kit</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            CT100 Piston Kit —<br />
            <span style={{ color: "var(--cm-gold)" }}>Standard & Oversize, Wholesale from India</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            CrestMAX exports CT100 piston kits wholesale from Ludhiana, India — the manufacturing source for quality aftermarket engine parts. Standard 50mm bore and all three oversize grades (0.25mm, 0.50mm, 0.75mm). Complete kits with piston, rings, pin, and clips. Minimum wholesale quantities available.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Request Wholesale Pricing
            </Link>
            <a href="https://wa.me/917087866759" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "#25D366", color: "#FFFFFF", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Kit specifications */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: "48px" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Kit Contents</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>What's in the Kit</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { item: "Piston", detail: "Cast aluminium, flat-top profile, correct bore diameter" },
                { item: "Top Compression Ring", detail: "Chrome-faced, correct tension for 100cc CT100 engine" },
                { item: "Second Compression Ring", detail: "Cast iron, tapered face" },
                { item: "Oil Control Ring Set", detail: "3-piece oil scraper ring with expander spring" },
                { item: "Piston Pin / Gudgeon Pin", detail: "16mm diameter, heat-treated steel" },
                { item: "Circlip Set", detail: "2× wire circlips, one for each piston pin bore end" },
              ].map(({ item, detail }) => (
                <div key={item} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "16px 18px" }}>
                  <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "1px", color: "var(--cm-gold)", marginBottom: "4px" }}>{item}</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0 }}>{detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Available Sizes</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>CT100 Piston Bore Sizes</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
              {[
                { grade: "Standard", bore: "50.00mm", notes: "For unworn or newly honed cylinders. Tightest fit, best compression." },
                { grade: "0.25mm Oversize", bore: "50.25mm", notes: "First rebore. Most common size ordered — covers most rebuilt cylinders." },
                { grade: "0.50mm Oversize", bore: "50.50mm", notes: "Second rebore. For cylinders worn past 0.25mm tolerance." },
                { grade: "0.75mm Oversize", bore: "50.75mm", notes: "Third / maximum rebore. After this, a new barrel is required." },
              ].map(({ grade, bore, notes }) => (
                <div key={grade} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "18px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                    <span style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "1px", color: "#FFFFFF" }}>{grade}</span>
                    <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "13px", color: "var(--cm-gold)", letterSpacing: "1px" }}>{bore}</span>
                  </div>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", margin: 0 }}>{notes}</p>
                </div>
              ))}
            </div>
            <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "16px 18px" }}>
              <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: "1.6" }}>
                <strong style={{ color: "var(--cm-gold)" }}>Ordering tip:</strong> Most African importers order 70% standard + 20% 0.25mm OS + 10% 0.50mm OS. Stock all sizes — mechanics will return for the OS grades when engine wear is identified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>CT100 Piston Kit — FAQ</h2>
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

      <section style={{ padding: "60px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { label: "CT100 Engine Parts", href: "/ct100-engine-parts" },
              { label: "CT100 All Parts", href: "/ct100-spare-parts-africa" },
              { label: "CT100 Catalogue", href: "/products/ct100" },
              { label: "All Bajaj Parts", href: "/bajaj-spare-parts" },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 20px", borderRadius: "2px", textDecoration: "none" }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cm-navy-mid)", borderTop: "1px solid var(--cm-gold-border)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4vw, 40px)", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>Order CT100 Piston Kits</h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "500px", margin: "0 auto 36px" }}>Specify sizes and quantities. Wholesale pricing within 24 hours.</p>
        <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
          Request a Quote
        </Link>
      </section>
    </>
  );
}
