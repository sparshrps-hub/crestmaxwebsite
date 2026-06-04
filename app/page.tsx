import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Package, Handshake, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import MarketCard from "@/components/MarketCard";
import { markets } from "@/lib/markets";

export const metadata: Metadata = {
  title: "CrestMAX | Indian 2-Wheeler & 3-Wheeler Spare Parts Exporter to Africa",
  description:
    "CrestMAX, a venture by RPS Infrastructures — exporting Bajaj, TVS, Hero spare parts to Nigeria, Ghana, Kenya and 12+ African nations. FOB Mumbai or CIF any African port. B2B wholesale enquiries welcome.",
  alternates: { canonical: "https://crestmaxwebsite.vercel.app/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmaxwebsite.vercel.app" },
  ],
};

const comparisonRows = [
  { factor: "OEM Compatibility", india: "Engineered for Bajaj, TVS, Hero models used in Africa", china: "Often built to approximate specs; fitment issues common" },
  { factor: "Metallurgy & Durability", india: "ISI / BIS-standard alloys and steel", china: "Variable quality, inconsistent hardness" },
  { factor: "Engine Performance", india: "Maintains original power output and fuel efficiency", china: "Often causes performance drop after 3–6 months" },
  { factor: "Brand Recognition in Africa", india: "Bajaj, TVS, Hero are trusted brands — Indian parts carry that trust", china: "No brand association; buyers don't know what they're getting" },
  { factor: "Documentation", india: "Full COO, invoice, packing list — no customs issues", china: "Frequent documentation gaps causing port delays" },
  { factor: "Warranty Claim Path", india: "Traceable supply chain back to Indian manufacturer", china: "Often untraceable — no recourse if parts fail" },
  { factor: "Vehicle Lifespan Impact", india: "Maintain vehicle lifespan as designed", china: "Premature wear reported across African markets" },
];

export default function HomePage() {
  const featuredMarkets = markets.slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section
        style={{
          minHeight: "100vh",
          background: "var(--cm-navy-deep)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          paddingTop: "70px",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.03) 60px, rgba(201,168,76,0.03) 61px)", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "900px", padding: "0 24px", textAlign: "center" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", fontWeight: 600, letterSpacing: "5px", textTransform: "uppercase", color: "var(--cm-gold)", marginBottom: "24px" }}>
            B2B Export · India to Africa
          </p>

          {/* H1 — primary keyword */}
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(32px, 7vw, 72px)", letterSpacing: "3px", lineHeight: "1.0", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 28px 0" }}>
            Indian 2-Wheeler &amp; 3-Wheeler<br />
            <span style={{ color: "var(--cm-gold)" }}>Spare Parts Exporter</span><br />
            to Africa
          </h1>

          <div className="gold-rule" style={{ maxWidth: "320px", margin: "0 auto 24px" }} />

          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(255,255,255,0.6)", lineHeight: "1.75", maxWidth: "640px", margin: "0 auto 40px" }}>
            2-Wheeler &amp; 3-Wheeler spare parts — exported from India to wholesale importers, distributors, and traders across 12+ African nations.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/products" className="btn-gold-fill" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Browse Products
            </Link>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "3px", textTransform: "uppercase", background: "transparent", color: "#FFFFFF", border: "1.5px solid rgba(255,255,255,0.5)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Enquire Now
            </Link>
          </div>
        </div>

        {/* Ticker */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "var(--cm-navy-mid)", borderTop: "1px solid var(--cm-gold-border)", overflow: "hidden", padding: "12px 0" }}>
          <div className="ticker-inner" style={{ display: "flex", whiteSpace: "nowrap" }}>
            {[1, 2].map((i) => (
              <span key={i} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "12px", color: "var(--cm-gold)", letterSpacing: "3px" }}>
                &nbsp;&nbsp;BOXER &nbsp;·&nbsp; HLX &nbsp;·&nbsp; CT100 &nbsp;·&nbsp; BAJAJ RE &nbsp;·&nbsp; TVS KING &nbsp;·&nbsp; KEKE NAPEP &nbsp;·&nbsp; NIGERIA &nbsp;·&nbsp; GHANA &nbsp;·&nbsp; KENYA &nbsp;·&nbsp; TANZANIA &nbsp;·&nbsp; UGANDA &nbsp;·&nbsp; ETHIOPIA &nbsp;·&nbsp; LUDHIANA, INDIA &nbsp;·&nbsp; FOB MUMBAI &nbsp;·&nbsp; CIF AFRICA &nbsp;·&nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "var(--cm-navy-mid)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "32px", textAlign: "center" }}>
          {[
            { stat: "58+", label: "Spare Part Categories" },
            { stat: "12+", label: "African Nations Served" },
            { stat: "FOB/CIF", label: "Mumbai or Any African Port" },
            { stat: "B2B", label: "Wholesale Only" },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "42px", color: "var(--cm-gold)", letterSpacing: "2px", lineHeight: "1", margin: "0 0 6px 0" }}>{stat}</p>
              <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 400, fontSize: "13px", color: "rgba(255,255,255,0.55)", letterSpacing: "1px", textTransform: "uppercase", margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section style={{ padding: "96px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Our Range" title="What We Supply" subtitle="Complete aftermarket spare parts for the most popular vehicles across Africa." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {/* 2-Wheeler */}
            <div className="card-glow" style={{ background: "var(--cm-navy-mid)", borderTop: "3px solid var(--cm-gold)", borderRadius: "2px", padding: "36px 32px" }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "12px" }}>2-Wheeler</p>
              <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "26px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px" }}>Motorcycle Spare Parts</h2>
              <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "24px" }}>For Boxer, HLX, CT100 &amp; Compatible Models</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: "6px" }}>
                {[
                  ["View Bajaj Boxer Parts →", "/products/bajaj-boxer"],
                  ["View TVS HLX Parts →", "/products/tvs-hlx"],
                  ["View CT100 Parts →", "/products/ct100"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "var(--cm-gold)", fontWeight: 700 }}>—</span> {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/products" style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "1px", color: "var(--cm-gold)", textDecoration: "none", textTransform: "uppercase" }}>
                View Full 2-Wheeler Range →
              </Link>
            </div>

            {/* 3-Wheeler */}
            <div className="card-glow" style={{ background: "var(--cm-navy-mid)", borderTop: "3px solid var(--cm-gold)", borderRadius: "2px", padding: "36px 32px" }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "12px" }}>3-Wheeler</p>
              <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "26px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px" }}>Auto Rickshaw Parts</h2>
              <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "24px" }}>For Bajaj RE, Tuk Tuk, Keke Napep, TVS King</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: "6px" }}>
                {[
                  ["View Bajaj RE / Keke Napep Parts →", "/products/bajaj-re"],
                  ["View TVS King Parts →", "/products/tvs-king"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ color: "var(--cm-gold)", fontWeight: 700 }}>—</span> {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/products" style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "1px", color: "var(--cm-gold)", textDecoration: "none", textTransform: "uppercase" }}>
                View Full 3-Wheeler Range →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Brands */}
      <section style={{ background: "var(--cm-navy-mid)", padding: "40px 24px", borderTop: "1px solid var(--cm-border)", borderBottom: "1px solid var(--cm-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", textAlign: "center", marginBottom: "24px" }}>
            Compatible With Leading Brands
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            {["BAJAJ", "HERO MOTOCORP", "HONDA", "TVS", "YAMAHA", "PIAGGIO"].map((brand) => (
              <span key={brand} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "12px", fontWeight: 600, letterSpacing: "2px", color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: "8px 20px", borderRadius: "2px" }}>
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Preview */}
      <section style={{ padding: "96px 24px", background: "var(--cm-navy-deep)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Our Commitment" title="Why CrestMAX" subtitle="Built for Africa's wholesale trade — quality parts, reliable logistics, direct relationships." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { icon: <Shield size={28} color="var(--cm-gold)" />, title: "OEM-Grade Quality", desc: "OEM-compatible motorcycle parts from India, manufactured to original specifications. No compromises." },
              { icon: <Package size={28} color="var(--cm-gold)" />, title: "Export-Ready Packaging", desc: "Bulk and retail pack formats built for long-haul African trade routes. Full documentation included." },
              { icon: <Handshake size={28} color="var(--cm-gold)" />, title: "Direct Relationships", desc: "You deal with our directors directly. Honest pricing and clear communication — no surprises." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card-glow" style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "32px" }}>
                <div style={{ marginBottom: "16px" }}>{icon}</div>
                <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "20px", letterSpacing: "1px", color: "#FFFFFF", marginBottom: "10px", textTransform: "uppercase" }}>{title}</h3>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: "1.7", margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/why-crestmax" style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--cm-gold)", textDecoration: "none", border: "1px solid var(--cm-gold-border)", padding: "10px 28px", borderRadius: "2px", display: "inline-block" }}>
              See All Reasons →
            </Link>
          </div>
        </div>
      </section>

      {/* India vs China Section */}
      <section style={{ padding: "96px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading
            label="Quality Comparison"
            title="Why Indian Spare Parts Outperform Chinese Alternatives in Africa"
            subtitle="The difference shows up on the road. Here's what African importers and mechanics have learned."
          />

          {/* Comparison table */}
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

          {/* Callout */}
          <div style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderLeft: "4px solid var(--cm-gold)", borderRadius: "2px", padding: "28px 32px" }}>
            <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, fontSize: "20px", color: "#FFFFFF", lineHeight: "1.5", margin: 0, fontStyle: "italic" }}>
              &ldquo;The mechanic in Lagos, the Keke owner in Accra, the fleet operator in Nairobi — they know the difference. Indian parts keep vehicles running longer. That&apos;s why the market keeps coming back to India.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Built for Long-Term Partnerships */}
      <section style={{ padding: "96px 24px", background: "var(--cm-navy-deep)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Our Approach" title="Built for Long-Term Trade Partnerships" />
          <div style={{ maxWidth: "800px", margin: "0 auto 56px", textAlign: "center" }}>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              We are not interested in one-time transactions. CrestMAX is built for the kind of trade relationship where you know exactly who to call, what to expect, and that your order will arrive as committed — every single time.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Our partners come back to us not because we are the cheapest, but because we are the most consistent. In export trade, reliability is worth more than a small discount on a single shipment.
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>
              We work with a small, select group of importers and distributors in each market — which means we know your business, your vehicles, and your customers. When you grow, we grow with you.
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

      {/* Markets Preview */}
      <section style={{ padding: "96px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Our Reach" title="Serving Africa's Largest Markets" subtitle="CrestMAX parts reach wholesale importers and distributors across 12+ African nations." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            {featuredMarkets.map((m) => <MarketCard key={m.name} {...m} />)}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/markets" style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--cm-gold)", textDecoration: "none", border: "1px solid var(--cm-gold-border)", padding: "10px 28px", borderRadius: "2px", display: "inline-block" }}>
              See All Markets →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: "linear-gradient(135deg, var(--cm-gold-deep), var(--cm-gold-bright))", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "var(--cm-navy-deep)", textTransform: "uppercase", margin: "0 0 16px 0" }}>
            Ready to Stock Up?<br />Let&apos;s Talk.
          </h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(13,27,42,0.7)", marginBottom: "32px", lineHeight: "1.7" }}>
            Send us your parts list — we carefully review your requirements and get back to you with accurate pricing and availability.
          </p>
          <Link href="/contact" className="btn-gold-fill" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-navy-deep)", color: "#FFFFFF", padding: "16px 48px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Keyword-rich sourcing section */}
      <section style={{ padding: "80px 24px", background: "var(--cm-light)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4vw, 40px)", letterSpacing: "2px", lineHeight: "1.1", color: "var(--cm-navy)", textTransform: "uppercase", margin: "0 0 24px 0" }}>
            Sourced from India&apos;s Manufacturing Belt.<br />Delivered to Africa&apos;s Busiest Ports.
          </h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(13,27,42,0.7)", lineHeight: "1.8", marginBottom: "20px" }}>
            CrestMAX operates from <Link href="/about" style={{ color: "var(--cm-gold-deep)", textDecoration: "underline" }}>Ludhiana, Punjab</Link> — the heart of India&apos;s auto parts manufacturing industry. We source 2-wheeler and 3-wheeler spare parts directly from verified Indian manufacturers and export them FOB from Mumbai or CIF to any African port your business requires.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(13,27,42,0.7)", lineHeight: "1.8", marginBottom: "20px" }}>
            Our catalogue covers the most-used vehicles across West and East Africa: <Link href="/products/bajaj-boxer" style={{ color: "var(--cm-gold-deep)" }}>Bajaj Boxer</Link>, <Link href="/products/tvs-hlx" style={{ color: "var(--cm-gold-deep)" }}>TVS HLX</Link>, <Link href="/products/ct100" style={{ color: "var(--cm-gold-deep)" }}>CT100</Link> motorcycles, and <Link href="/products/bajaj-re" style={{ color: "var(--cm-gold-deep)" }}>Bajaj RE / Keke Napep</Link>, <Link href="/products/tvs-king" style={{ color: "var(--cm-gold-deep)" }}>TVS King</Link> three-wheelers. Whether you are a wholesale importer in Lagos, a distributor in Nairobi, or a trader in Accra — we supply the parts your market needs, with the documentation and reliability your business depends on.
          </p>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(13,27,42,0.7)", lineHeight: "1.8" }}>
            With direct sourcing from India&apos;s spare parts belt and a supply chain built specifically for the African aftermarket, CrestMAX is your trusted long-term export partner. <Link href="/contact" style={{ color: "var(--cm-gold-deep)", fontWeight: 600 }}>Contact us</Link> today.
          </p>
        </div>
      </section>
    </>
  );
}
