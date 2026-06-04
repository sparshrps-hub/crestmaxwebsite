import type { Metadata } from "next";
import { Shield, Package, Globe, Users, FileText, MessageSquare, Handshake, TrendingUp } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Why Choose CrestMAX | Indian Parts vs Chinese Parts | Africa Export",
  description:
    "OEM-compatible Indian spare parts, full export documentation, reliable supply. Why African wholesale importers choose CrestMAX over Chinese alternatives for Bajaj, TVS and Hero vehicles.",
  alternates: { canonical: "https://crestmax.in/why-crestmax" },
  openGraph: {
    title: "Why Choose CrestMAX | Indian Parts vs Chinese Parts | Africa Export",
    description:
      "OEM-compatible Indian spare parts, full export documentation, reliable supply. Why African wholesale importers choose CrestMAX over Chinese alternatives.",
    url: "https://crestmax.in/why-crestmax",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Why CrestMAX", item: "https://crestmax.in/why-crestmax" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why are Indian spare parts better than Chinese parts for African vehicles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Indian parts are manufactured specifically for Bajaj, TVS, and Hero models — the same bikes sold in Africa. They match OEM specifications and come with a traceable supply chain. Chinese generic parts often use approximate dimensions, leading to fitment problems and early wear.",
      },
    },
    {
      "@type": "Question",
      name: "What quality standards do CrestMAX parts meet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our parts are sourced exclusively from verified Indian manufacturers and checked against original equipment specifications before dispatch. We do not stock grey market or unverified parts.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide export documentation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every CrestMAX shipment includes a commercial invoice, detailed packing list, and certificate of origin (COO). Full documentation for smooth customs clearance at all major African ports.",
      },
    },
    {
      "@type": "Question",
      name: "What shipping terms do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer FOB (Free On Board) from Mumbai where the buyer arranges freight, or CIF (Cost, Insurance, Freight) to any designated African port where CrestMAX arranges freight and insurance.",
      },
    },
  ],
};

const pillars = [
  {
    icon: <Shield size={32} color="var(--cm-gold)" />,
    title: "OEM-Grade Specifications",
    desc: "Every part is manufactured to match or exceed original equipment specifications. No compromises on quality — because your customers depend on it. Our OEM-compatible motorcycle parts from India are sourced only from verified manufacturers.",
  },
  {
    icon: <Package size={32} color="var(--cm-gold)" />,
    title: "Export-Ready Packaging",
    desc: "Parts are packaged for long-haul shipping: moisture-resistant, clearly labeled, available in bulk and retail formats for the African trade. FOB Mumbai or CIF any African port.",
  },
  {
    icon: <Globe size={32} color="var(--cm-gold)" />,
    title: "Curated Africa Catalogue",
    desc: (
      <>
        Unlike general exporters, our entire catalogue is built around vehicles most prevalent in African markets — <Link href="/products/bajaj-boxer" style={{ color: "var(--cm-gold)", textDecoration: "none" }}>Bajaj Boxer</Link>, HLX, <Link href="/products/bajaj-re" style={{ color: "var(--cm-gold)", textDecoration: "none" }}>Bajaj RE</Link>, TVS King. Browse our full <Link href="/products" style={{ color: "var(--cm-gold)", textDecoration: "none" }}>spare parts catalogue</Link>.
      </>
    ),
  },
  {
    icon: <Users size={32} color="var(--cm-gold)" />,
    title: "Direct Trade Relationships",
    desc: "We build direct, transparent relationships with importers and wholesalers. Whether you come to us directly or through a trusted trade partner, you get honest pricing and clear communication — no information gaps, no surprises.",
  },
  {
    icon: <FileText size={32} color="var(--cm-gold)" />,
    title: "FOB / CIF Shipping from India",
    desc: "We ship FOB from Mumbai or CIF to any African port. Full documentation included: commercial invoice, packing list, certificate of origin, and more. Wholesale auto parts from India to Nigeria, Kenya, and beyond.",
  },
  {
    icon: <MessageSquare size={32} color="var(--cm-gold)" />,
    title: "We Understand Your Requirements",
    desc: (
      <>
        Every enquiry gets proper attention. We take time to understand your exact parts needs — quantities, vehicle models, quality grade — and come back with the right offer, not just a generic price list. <Link href="/contact" style={{ color: "var(--cm-gold)", textDecoration: "none" }}>Request a quote</Link>.
      </>
    ),
  },
];

const qualitySteps = [
  { step: "01", title: "Sourcing", desc: "Verified manufacturers only — no grey market stock." },
  { step: "02", title: "Inspection", desc: "Part-by-part quality check against OEM specs." },
  { step: "03", title: "Packaging", desc: "Export-grade moisture-resistant packaging." },
  { step: "04", title: "Documentation", desc: "Full FOB/CIF export docs: invoice, packing list, COO." },
  { step: "05", title: "Dispatch", desc: "FOB departure from Mumbai or CIF to your port." },
  { step: "06", title: "Delivery", desc: "Cargo arrives at your designated African port." },
];

const comparisonRows = [
  { factor: "OEM Compatibility", india: "Engineered for Bajaj, TVS, Hero models used in Africa", china: "Often built to approximate specs; fitment issues common" },
  { factor: "Metallurgy & Durability", india: "ISI / BIS-standard alloys and steel", china: "Variable quality, inconsistent hardness" },
  { factor: "Engine Performance", india: "Maintains original power output and fuel efficiency", china: "Often causes performance drop after 3–6 months" },
  { factor: "Documentation", india: "Full COO, invoice, packing list — no customs issues", china: "Frequent documentation gaps causing port delays" },
  { factor: "Warranty Claim Path", india: "Traceable supply chain back to Indian manufacturer", china: "Often untraceable — no recourse if parts fail" },
  { factor: "Vehicle Lifespan Impact", india: "Maintain vehicle lifespan as designed", china: "Premature wear reported across African markets" },
];

export default function WhyCrestmaxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", textAlign: "center", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Our Promise</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 5vw, 54px)", letterSpacing: "3px", lineHeight: "1.0", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Why African Importers Choose CrestMAX<br />
            <span style={{ color: "var(--cm-gold)" }}>Over Other Spare Parts Suppliers</span>
          </h1>
        </div>
      </section>

      {/* 6 Pillars */}
      <section style={{ padding: "96px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Why Us" title="6 Reasons to Source Spare Parts from CrestMAX" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {pillars.map(({ icon, title, desc }) => (
              <div key={title} className="card-glow" style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "36px 32px" }}>
                <div style={{ marginBottom: "20px" }}>{icon}</div>
                <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "20px", letterSpacing: "1px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>{title}</h3>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: "1.7", margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* India vs China */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Quality Comparison" title="Indian Parts vs Chinese Parts — What African Importers Need to Know" />
          <div style={{ overflowX: "auto", marginBottom: "40px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Nunito Sans, sans-serif", fontSize: "14px" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "14px 16px", background: "var(--cm-navy-mid)", color: "rgba(255,255,255,0.5)", fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "2px solid var(--cm-gold-border)", width: "22%" }}>Factor</th>
                  <th style={{ textAlign: "left", padding: "14px 16px", background: "rgba(34,197,94,0.08)", color: "#4ade80", fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "2px solid rgba(34,197,94,0.3)", borderLeft: "2px solid rgba(34,197,94,0.3)" }}>Indian Parts — CrestMAX</th>
                  <th style={{ textAlign: "left", padding: "14px 16px", background: "rgba(239,68,68,0.06)", color: "#f87171", fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "2px solid rgba(239,68,68,0.2)", borderLeft: "2px solid rgba(239,68,68,0.2)" }}>Chinese Generic Parts</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.factor} style={{ background: i % 2 === 0 ? "var(--cm-navy-mid)" : "rgba(27,45,66,0.4)" }}>
                    <td style={{ padding: "14px 16px", color: "rgba(255,255,255,0.7)", fontWeight: 600, borderBottom: "1px solid var(--cm-border)", verticalAlign: "top" }}>{row.factor}</td>
                    <td style={{ padding: "14px 16px", color: "#86efac", borderBottom: "1px solid rgba(34,197,94,0.1)", borderLeft: "1px solid rgba(34,197,94,0.15)", verticalAlign: "top", lineHeight: "1.6" }}>{row.india}</td>
                    <td style={{ padding: "14px 16px", color: "rgba(255,255,255,0.45)", borderBottom: "1px solid rgba(239,68,68,0.08)", borderLeft: "1px solid rgba(239,68,68,0.12)", verticalAlign: "top", lineHeight: "1.6" }}>{row.china}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderLeft: "4px solid var(--cm-gold)", borderRadius: "2px", padding: "28px 32px" }}>
            <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, fontSize: "20px", color: "#FFFFFF", lineHeight: "1.5", margin: 0, fontStyle: "italic" }}>
              &ldquo;The mechanic in Lagos, the Keke owner in Accra, the fleet operator in Nairobi — they know the difference. Indian parts keep vehicles running longer. That&apos;s why the market keeps coming back to India.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Process" title="From Factory to Your Port" subtitle="Every CrestMAX shipment follows a verified 6-step quality and logistics process." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "0" }}>
            {qualitySteps.map(({ step, title, desc }) => (
              <div key={step} style={{ position: "relative", padding: "0 16px 32px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", marginBottom: "16px" }}>{step}</div>
                <h4 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "1px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px" }}>{title}</h4>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: "1.6", margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Agent / Trade Partner section */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-mid)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>For Trade Representatives</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 44px)", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "24px" }}>
            Are You a Sales Agent or Trade Partner?
          </h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
            We welcome sales agents and trade representatives across African markets. If you work with importers, distributors, or fleet operators who need a reliable Indian parts supplier, we want to hear from you.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "36px" }}>
            We offer clear, structured arrangements for agents who bring us genuine wholesale buyers. Get in touch and let&apos;s discuss how we can work together.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/trade-partner" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
              Become a Trade Partner
            </Link>
            <Link href="/sales-agent" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "3px", textTransform: "uppercase", background: "transparent", color: "var(--cm-gold)", border: "1.5px solid var(--cm-gold)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
              Become a Sales Agent
            </Link>
          </div>
        </div>
      </section>

      {/* Built for Long-Term Partnerships */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Our Approach" title="Built for Long-Term Trade Partnerships" />
          <div style={{ maxWidth: "800px", margin: "0 auto 48px", textAlign: "center" }}>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              We are not interested in one-time transactions. CrestMAX is built for the kind of trade relationship where you know exactly who to call, what to expect, and that your order will arrive as committed — every single time.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>
              Our partners come back to us not because we are the cheapest, but because we are the most consistent. In export trade, reliability is worth more than a small discount on a single shipment.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {[
              { icon: <Handshake size={28} color="var(--cm-gold)" />, title: "Consistent Supply", desc: "Same quality, same specs, same documentation — every order." },
              { icon: <Shield size={28} color="var(--cm-gold)" />, title: "Named Contacts", desc: "You deal with our directors directly. No rotating support staff, no call centres." },
              { icon: <TrendingUp size={28} color="var(--cm-gold)" />, title: "Your Growth = Our Growth", desc: "Long-term partners get priority allocation and advance stock planning." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card-glow" style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "32px" }}>
                <div style={{ marginBottom: "16px" }}>{icon}</div>
                <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "20px", letterSpacing: "1px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "10px" }}>{title}</h3>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: "1.7", margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-mid)", textAlign: "center", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "40px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "16px" }}>Ready to Partner?</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", marginBottom: "32px", lineHeight: "1.7" }}>
            Send us your parts list — we carefully review your requirements and get back to you with accurate pricing and availability.
          </p>
          <Link href="/contact" className="btn-gold-fill" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "16px 48px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
