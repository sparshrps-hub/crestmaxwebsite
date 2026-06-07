import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import MarketCard from "@/components/MarketCard";
import { markets } from "@/lib/markets";

export const metadata: Metadata = {
  title: { absolute: "African Markets We Serve — Spare Parts Export from India | CrestMAX" },
  description:
    "CrestMAX supplies wholesale spare parts to Nigeria, Ghana, Kenya, Tanzania, Uganda, Ethiopia and 12+ African nations. FOB Mumbai or CIF to any African port.",
  alternates: { canonical: "https://crestmax.in/markets" },
  openGraph: {
    title: "African Markets We Serve — Spare Parts Export from India | CrestMAX",
    description:
      "CrestMAX supplies wholesale spare parts to Nigeria, Ghana, Kenya, Tanzania, Uganda, Ethiopia and 12+ African nations. FOB Mumbai or CIF to any African port.",
    url: "https://crestmax.in/markets",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Markets", item: "https://crestmax.in/markets" },
  ],
};

export default function MarketsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "174px", paddingBottom: "80px", textAlign: "center", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Export Markets</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 5vw, 56px)", letterSpacing: "3px", lineHeight: "1.0", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            African Markets We Serve —<br />
            <span style={{ color: "var(--cm-gold)" }}>Spare Parts Export from India</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.55)", lineHeight: "1.75" }}>
            CrestMAX parts reach wholesale importers and distributors across 12+ African nations — from Lagos to Nairobi. Shipped FOB Mumbai or CIF to your port.
          </p>
        </div>
      </section>

      {/* Markets Grid */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Our Reach" title="12+ Countries Served" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            {markets.map((m) => (
              <div key={m.name}>
                <MarketCard {...m} />
                <Link
                  href={`/markets/${m.slug}`}
                  style={{ display: "block", fontFamily: "Nunito Sans, sans-serif", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", color: "var(--cm-gold)", textDecoration: "none", marginTop: "8px", paddingLeft: "4px", transition: "opacity 0.2s" }}
                >
                  Spare parts for {m.name} importers →
                </Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/contact" style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--cm-gold)", textDecoration: "none", border: "1px solid var(--cm-gold-border)", padding: "10px 28px", borderRadius: "2px", display: "inline-block" }}>
              Request a Wholesale Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* Shipping Route */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Logistics" title="India to Africa — Our Shipping Route" subtitle="FOB from Mumbai or CIF to any African port your business requires." />

          <div style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "48px 40px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
              <div style={{ textAlign: "center", minWidth: "120px" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "var(--cm-gold)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: "24px" }}>🇮🇳</div>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "18px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "4px" }}>India</p>
                <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", color: "var(--cm-gold)", letterSpacing: "1px" }}>Mumbai · Chennai</p>
              </div>
              <div style={{ flex: 1, minWidth: "60px", display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, var(--cm-gold-deep), var(--cm-gold))", position: "relative" }}>
                  <div style={{ position: "absolute", right: 0, top: "-4px", color: "var(--cm-gold)", fontSize: "10px" }}>▶</div>
                </div>
              </div>
              <div style={{ textAlign: "center", minWidth: "120px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(201,168,76,0.1)", border: "1px solid var(--cm-gold-border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", color: "var(--cm-gold)", fontWeight: 600 }}>⚓</div>
                <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "1px" }}>Suez Canal</p>
              </div>
              <div style={{ flex: 1, minWidth: "60px", display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, var(--cm-gold-deep), var(--cm-gold))", position: "relative" }}>
                  <div style={{ position: "absolute", right: 0, top: "-4px", color: "var(--cm-gold)", fontSize: "10px" }}>▶</div>
                </div>
              </div>
              <div style={{ textAlign: "center", minWidth: "120px" }}>
                <div style={{ fontSize: "28px", marginBottom: "12px", display: "flex", gap: "4px", justifyContent: "center" }}>🇳🇬🇬🇭</div>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "1px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "4px" }}>West Africa</p>
                <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", color: "var(--cm-gold)", letterSpacing: "1px" }}>Lagos · Tema</p>
              </div>
              <div style={{ textAlign: "center", minWidth: "120px" }}>
                <div style={{ fontSize: "28px", marginBottom: "12px", display: "flex", gap: "4px", justifyContent: "center" }}>🇰🇪🇹🇿</div>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "1px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "4px" }}>East Africa</p>
                <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", color: "var(--cm-gold)", letterSpacing: "1px" }}>Mombasa · Dar es Salaam</p>
              </div>
            </div>

            <div className="gold-rule" style={{ margin: "40px 0 32px" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px", textAlign: "center" }}>
              {[
                { label: "Shipping Terms", value: "FOB / CIF" },
                { label: "Origin Ports", value: "Mumbai · Chennai" },
                { label: "Transit Time", value: "18–28 Days" },
                { label: "Documentation", value: "Full Export Docs" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "2px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "6px" }}>{label}</p>
                  <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "20px", letterSpacing: "1px", color: "var(--cm-gold)" }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 24px", background: "var(--cm-navy-mid)", textAlign: "center", borderTop: "1px solid var(--cm-gold-border)" }}>
        <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "36px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>
          We Ship to Your Port
        </h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", marginBottom: "32px" }}>
          Let&apos;s discuss terms, pricing, and shipping schedules.
        </p>
        <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
          Contact Us
        </Link>
      </section>
    </>
  );
}
