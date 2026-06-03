import type { Metadata } from "next";
import { Shield, Package, Globe, Users, FileText, Clock } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Why Choose Crestmax | Indian Spare Parts Exporter to Africa",
  description: "OEM-grade quality, export-ready packaging, direct trade relationships, and 24-hour response. Discover why African importers trust Crestmax.",
};

const pillars = [
  { icon: <Shield size={32} color="var(--cm-gold)" />, title: "OEM-Grade Specifications", desc: "Every part is manufactured to match or exceed original equipment specifications. No compromises on quality — because your customers depend on it." },
  { icon: <Package size={32} color="var(--cm-gold)" />, title: "Export-Ready Packaging", desc: "Parts are packaged for long-haul shipping: moisture-resistant, clearly labeled, available in bulk and retail formats for the African trade." },
  { icon: <Globe size={32} color="var(--cm-gold)" />, title: "Curated Africa Catalogue", desc: "Unlike general exporters, our entire catalogue is built around vehicles most prevalent in African markets — Boxer, HLX, RE, TVS King." },
  { icon: <Users size={32} color="var(--cm-gold)" />, title: "Direct Trade Relationships", desc: "We work directly with importers and wholesalers — no agents, no commission layers, no information asymmetry. Just transparent pricing." },
  { icon: <FileText size={32} color="var(--cm-gold)" />, title: "FOB Shipping from India", desc: "We ship FOB from Mumbai and Chennai. Full documentation included: commercial invoice, packing list, certificate of origin, and more." },
  { icon: <Clock size={32} color="var(--cm-gold)" />, title: "24-Hour Response Commitment", desc: "Send us your enquiry and we respond within one business day with availability and pricing. No waiting weeks for a quote." },
];

const qualitySteps = [
  { step: "01", title: "Sourcing", desc: "Verified manufacturers only — no grey market stock." },
  { step: "02", title: "Inspection", desc: "Part-by-part quality check against OEM specs." },
  { step: "03", title: "Packaging", desc: "Export-grade moisture-resistant packaging." },
  { step: "04", title: "Documentation", desc: "Full FOB export docs: invoice, packing list, COO." },
  { step: "05", title: "Dispatch", desc: "FOB departure from Mumbai or Chennai port." },
  { step: "06", title: "Delivery", desc: "Cargo arrives at your designated African port." },
];

export default function WhyCrestmaxPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", textAlign: "center", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Our Promise</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(36px, 6vw, 64px)", letterSpacing: "4px", lineHeight: "0.95", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Parts That Work.<br /><span style={{ color: "var(--cm-gold)" }}>People You Can Trust.</span>
          </h1>
        </div>
      </section>

      {/* 6 Pillars */}
      <section style={{ padding: "96px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Why Us" title="6 Reasons to Choose Crestmax" />
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

      {/* Quality Process */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Process" title="From Factory to Your Port" subtitle="Every Crestmax shipment follows a verified 6-step quality and logistics process." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "0", position: "relative" }}>
            {qualitySteps.map(({ step, title, desc }) => (
              <div key={step} style={{ position: "relative", padding: "0 16px 32px" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", marginBottom: "16px" }}>
                  {step}
                </div>
                <h4 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "1px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px" }}>{title}</h4>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: "1.6", margin: 0 }}>{desc}</p>
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
            Send us your parts list and we&apos;ll get back to you within 24 hours with availability and pricing.
          </p>
          <Link href="/contact" className="btn-gold-fill" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "16px 48px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
