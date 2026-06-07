import type { Metadata } from "next";
import Link from "next/link";
import { Handshake, Shield, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About CrestMAX | Indian Spare Parts Exporter for African Markets",
  description:
    "CrestMAX exports Bajaj, TVS, Hero spare parts from Ludhiana, India to wholesale importers across Africa. B2B 2-wheeler and 3-wheeler parts, FOB Mumbai or CIF any African port.",
  alternates: { canonical: "https://crestmax.in/about" },
  openGraph: {
    title: "About CrestMAX | Indian Spare Parts Exporter for African Markets",
    description:
      "CrestMAX exports Bajaj, TVS, Hero spare parts from Ludhiana, India to wholesale importers across Africa. B2B 2-wheeler and 3-wheeler parts, FOB Mumbai or CIF any African port.",
    url: "https://crestmax.in/about",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "About CrestMAX", item: "https://crestmax.in/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "174px", paddingBottom: "80px", textAlign: "center", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Our Story</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 6vw, 58px)", letterSpacing: "3px", lineHeight: "1.0", color: "#FFFFFF", textTransform: "uppercase", margin: 0 }}>
            About CrestMAX —<br />
            <span style={{ color: "var(--cm-gold)" }}>Indian Spare Parts Exporter for African Markets</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.55)", lineHeight: "1.75", marginTop: "20px" }}>
            Built for Africa. Rooted in India.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: "96px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "64px", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Who We Are</p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "36px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "24px" }}>Our Journey</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: "1.75" }}>
                CrestMAX was founded with a singular purpose — to bridge the gap between India&apos;s world-class spare parts manufacturing and Africa&apos;s rapidly growing two-wheeler and three-wheeler market. We are a venture by RPS Infrastructures, operating from <strong style={{ color: "rgba(255,255,255,0.85)" }}>Ludhiana, Punjab</strong> — India&apos;s auto parts manufacturing hub.
              </p>
              <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: "1.75" }}>
                We specialise in sourcing, quality-checking, and exporting spare parts for Boxer, HLX, CT100 motorcycles and Bajaj RE / Keke Napep three-wheelers — the vehicles that power daily commerce across West and East Africa. Our <Link href="/products" style={{ color: "var(--cm-gold)", textDecoration: "underline" }}>spare parts catalogue</Link> covers every major category these vehicles require.
              </p>
              <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: "1.75" }}>
                Our trade route — India (FOB Mumbai or CIF any African port) to Lagos, Accra, Nairobi, and beyond — is built on quality verification, reliable timelines, and honest business relationships. <Link href="/why-crestmax" style={{ color: "var(--cm-gold)", textDecoration: "underline" }}>See why we are different →</Link>
              </p>
            </div>
          </div>

          <div style={{ position: "relative", minHeight: "360px" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: "85%", height: "100%", background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px" }} />
            <div style={{ position: "absolute", top: "24px", left: 0, width: "85%", height: "100%", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "2px" }} />
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-40%, -50%)", textAlign: "center" }}>
              <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "72px", color: "var(--cm-gold)", opacity: 0.15, lineHeight: "1", margin: 0 }}>CM</p>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "12px", letterSpacing: "4px", color: "var(--cm-gold)", marginTop: "8px" }}>LUDHIANA, INDIA</p>
              <div className="gold-rule" style={{ margin: "16px auto", maxWidth: "160px" }} />
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "2px" }}>FOB MUMBAI · CIF AFRICA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Our Values" title="What We Stand For" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {[
              { num: "01", title: "Quality First", desc: "Every part is checked against OEM specifications before dispatch. We do not cut corners." },
              { num: "02", title: "Africa-Focused", desc: "Our entire catalogue is curated for the African aftermarket — the vehicles your customers rely on." },
              { num: "03", title: "Relationship-Driven", desc: "We work with long-term partners, not one-time buyers. Your growth is our growth." },
              { num: "04", title: "Export Expertise", desc: "FOB shipping from Mumbai or CIF to any African port, with full documentation — invoice, packing list, COO." },
            ].map(({ num, title, desc }) => (
              <div key={num} className="card-glow" style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "32px" }}>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "42px", color: "rgba(201,168,76,0.2)", letterSpacing: "2px", lineHeight: "1", marginBottom: "12px" }}>{num}</p>
                <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "22px", letterSpacing: "1px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>{title}</h3>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: "1.7", margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Long-Term Partnerships */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Our Approach" title="Built for Long-Term Trade Partnerships" />
          <div style={{ maxWidth: "800px", margin: "0 auto 48px", textAlign: "center" }}>
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

      {/* Vision & Mission */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Direction" title="Vision & Mission" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            <div style={{ background: "var(--cm-navy-mid)", borderLeft: "4px solid var(--cm-gold)", borderRadius: "2px", padding: "40px 36px" }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>Vision</p>
              <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, fontSize: "22px", color: "#FFFFFF", lineHeight: "1.4", margin: 0 }}>
                &ldquo;To become Africa&apos;s most trusted Indian supplier of 2-wheeler and 3-wheeler spare parts.&rdquo;
              </p>
            </div>
            <div style={{ background: "var(--cm-navy-mid)", borderLeft: "4px solid var(--cm-gold)", borderRadius: "2px", padding: "40px 36px" }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>Mission</p>
              <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 600, fontSize: "22px", color: "#FFFFFF", lineHeight: "1.4", margin: 0 }}>
                &ldquo;To deliver high-quality aftermarket parts with reliable export logistics, helping our partners grow their businesses across Africa.&rdquo;
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
