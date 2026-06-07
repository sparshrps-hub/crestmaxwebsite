import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { markets, getMarketBySlug } from "@/lib/markets";

export function generateStaticParams() {
  return markets.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const market = getMarketBySlug(slug);
  if (!market) return {};
  return {
    title: market.metaTitle,
    description: market.metaDescription,
    alternates: { canonical: `https://crestmax.in/markets/${market.slug}` },
    openGraph: {
      title: market.metaTitle,
      description: market.metaDescription,
      url: `https://crestmax.in/markets/${market.slug}`,
      type: "website",
    },
  };
}

export default async function MarketPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const market = getMarketBySlug(slug);
  if (!market) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
      { "@type": "ListItem", position: 2, name: "Markets", item: "https://crestmax.in/markets" },
      { "@type": "ListItem", position: 3, name: market.name, item: `https://crestmax.in/markets/${market.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: market.faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "174px", paddingBottom: "80px", textAlign: "center", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <Link href="/markets" style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "4px", color: "rgba(201,168,76,0.6)", textTransform: "uppercase", textDecoration: "none", display: "inline-block", marginBottom: "20px" }}>
            ← All Markets
          </Link>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>
            {market.region} · {market.flag}
          </p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4.5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            {market.h1}
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.55)", lineHeight: "1.75", marginBottom: "32px" }}>
            {market.intro}
          </p>
          <Link
            href="/contact"
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}
          >
            Request a Wholesale Quote
          </Link>
        </div>
      </section>

      {/* Market Stats */}
      <section style={{ padding: "60px 24px", background: "var(--cm-navy)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
          <div style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px 24px" }}>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "10px" }}>Entry Port</p>
            <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "20px", letterSpacing: "1px", color: "var(--cm-gold)" }}>⚓ {market.port}</p>
          </div>
          <div style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px 24px" }}>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "10px" }}>Market</p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: "1.5" }}>{market.marketSize}</p>
          </div>
          <div style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px 24px" }}>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "10px" }}>Popular Vehicles</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {market.popularVehicles.map((v) => (
                <span key={v} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "1px", color: "var(--cm-gold)", background: "rgba(201,168,76,0.08)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "4px 8px" }}>{v}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Popular + Our Supply */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: "40px" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Why {market.name}</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "16px" }}>Market Overview</h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.75" }}>{market.whyPopular}</p>
          </div>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>What We Supply</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "16px" }}>Our Parts for {market.name}</h2>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.75", marginBottom: "20px" }}>{market.ourSupply}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {market.keyProducts.map((p) => (
                <span key={p} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "2px", padding: "5px 10px" }}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shipping */}
      <section style={{ padding: "60px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>Logistics</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "16px", textAlign: "center" }}>India to {market.name} — Shipping</h2>
          <div style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "32px 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "2px", color: "#FFFFFF" }}>🇮🇳 LUDHIANA → MUMBAI</span>
              <span style={{ color: "var(--cm-gold)", fontSize: "18px" }}>→</span>
              <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "12px", color: "var(--cm-gold)", letterSpacing: "1px" }}>OCEAN FREIGHT</span>
              <span style={{ color: "var(--cm-gold)", fontSize: "18px" }}>→</span>
              <span style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "2px", color: "#FFFFFF" }}>{market.flag} {market.port.toUpperCase()}</span>
            </div>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.75" }}>{market.shippingNote}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>Common Questions</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>
            Shipping Spare Parts to {market.name}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {market.faqItems.map((item, i) => (
              <div key={i} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px 28px" }}>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "17px", letterSpacing: "1px", color: "#FFFFFF", marginBottom: "10px" }}>{item.q}</p>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: "1.7", margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related resources — country-specific cross-links */}
      {(market.slug === "nigeria" || market.slug === "ghana" || market.slug === "kenya") && (
        <section style={{ padding: "60px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Related Guides</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {market.slug === "nigeria" && <>
                <Link href="/import-guide/nigeria" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>🇳🇬 Full Nigeria Import Guide →</Link>
                <Link href="/bajaj-spare-parts-nigeria" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>Bajaj Parts for Nigeria →</Link>
                <Link href="/keke-napep-parts-nigeria" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>Keke Napep Parts →</Link>
                <Link href="/blog/how-to-import-bajaj-spare-parts-from-india-to-nigeria" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>How to Import to Nigeria →</Link>
                <Link href="/hs-codes-motorcycle-spare-parts" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>HS Codes Reference →</Link>
              </>}
              {market.slug === "ghana" && <>
                <Link href="/import-guide/ghana" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>🇬🇭 Full Ghana Import Guide →</Link>
                <Link href="/bajaj-spare-parts-ghana" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>Bajaj Parts for Ghana →</Link>
                <Link href="/hs-codes-motorcycle-spare-parts" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>HS Codes Reference →</Link>
              </>}
              {market.slug === "kenya" && <>
                <Link href="/import-guide/kenya" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>🇰🇪 Full Kenya Import Guide →</Link>
                <Link href="/bajaj-spare-parts-kenya" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>Bajaj Parts for Kenya →</Link>
                <Link href="/hs-codes-motorcycle-spare-parts" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>HS Codes Reference →</Link>
              </>}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-mid)", borderTop: "1px solid var(--cm-gold-border)", textAlign: "center" }}>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>Ready to Order?</p>
        <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4vw, 40px)", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>
          Supply Spare Parts to {market.name}
        </h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", marginBottom: "36px", maxWidth: "500px", margin: "0 auto 36px" }}>
          Send us your parts list and required quantities. We&apos;ll respond with pricing and shipping terms within 24 hours.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/contact"
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}
          >
            Request a Quote
          </Link>
          <Link
            href="/products"
            style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}
          >
            Browse Parts Catalogue
          </Link>
        </div>
      </section>
    </>
  );
}
