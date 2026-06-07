import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { importGuides, getImportGuideBySlug } from "@/lib/importGuides";

export function generateStaticParams() {
  return importGuides.map((g) => ({ country: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const guide = getImportGuideBySlug(country);
  if (!guide) return {};
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `https://crestmax.in/import-guide/${guide.slug}` },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `https://crestmax.in/import-guide/${guide.slug}`,
      type: "website",
    },
  };
}

export default async function ImportGuidePage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const guide = getImportGuideBySlug(country);
  if (!guide) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
      { "@type": "ListItem", position: 2, name: "Import Guides", item: "https://crestmax.in/import-guide" },
      { "@type": "ListItem", position: 3, name: `Import Guide — ${guide.country}`, item: `https://crestmax.in/import-guide/${guide.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: guide.h1,
    description: guide.metaDescription,
    step: guide.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "174px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>
            {guide.flag} Import Guide — {guide.country}
          </p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(22px, 4vw, 48px)", letterSpacing: "2px", lineHeight: "1.1", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            {guide.h1}
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "32px" }}>
            {guide.intro}
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              Get a Quote from CrestMAX
            </Link>
            <Link href={`/markets/${guide.slug}`} style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "14px 36px", borderRadius: "2px", textDecoration: "none" }}>
              {guide.country} Market Page
            </Link>
          </div>
        </div>
      </section>

      {/* Key Info Bar */}
      <section style={{ padding: "40px 24px", background: "var(--cm-navy)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
          {[
            { label: "Entry Port", value: guide.port },
            { label: "Customs Authority", value: guide.customsAuthority },
            { label: "HS Codes", value: guide.hsCode.split(" / ")[0] + " +" },
            { label: "Transit Time", value: guide.transitTime.split(" + ")[0] },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "20px 20px" }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "8px" }}>{label}</p>
              <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.8)", margin: 0, lineHeight: "1.4" }}>{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Step-by-Step */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>Step-by-Step Process</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "48px", textAlign: "center" }}>
            How to Import from India to {guide.country}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {guide.steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: "24px", marginBottom: "0", paddingBottom: "40px", borderLeft: i < guide.steps.length - 1 ? "2px solid rgba(201,168,76,0.2)" : "2px solid transparent", marginLeft: "20px", paddingLeft: "32px", position: "relative" }}>
                <div style={{ position: "absolute", left: "-14px", top: "0", width: "26px", height: "26px", borderRadius: "50%", background: "var(--cm-gold)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", fontWeight: 600, color: "var(--cm-navy-deep)", flexShrink: 0 }}>{i + 1}</div>
                <div style={{ paddingTop: "2px" }}>
                  <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "18px", letterSpacing: "1px", color: "#FFFFFF", marginBottom: "10px", textTransform: "uppercase" }}>{step.title.replace(/^Step \d+ — /, "")}</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Checklist */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>Documents Checklist</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "32px", textAlign: "center" }}>
            Required Documents for {guide.country}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {guide.documents.map((doc, i) => (
              <div key={i} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "20px 24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--cm-gold)", fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", marginTop: "3px", flexShrink: 0 }}>✓</span>
                <div>
                  <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "1px", color: "#FFFFFF", marginBottom: "4px" }}>{doc.name}</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: "1.6" }}>{doc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HS Codes + Duty */}
      <section style={{ padding: "60px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "24px" }}>
          <div style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px" }}>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "12px" }}>HS Codes</p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: "1.8" }}>{guide.hsCode}</p>
          </div>
          <div style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px" }}>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "12px" }}>Import Duty Structure</p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: "1.8" }}>{guide.importDuty}</p>
          </div>
        </div>
      </section>

      {/* Port Tips */}
      <section style={{ padding: "60px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px" }}>Port Tips</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "24px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "16px" }}>{guide.port} — What to Know</h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8" }}>{guide.portTips}</p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "14px", textAlign: "center" }}>FAQ</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "32px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>
            Importing Spare Parts to {guide.country} — Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {guide.faqItems.map((item, i) => (
              <div key={i} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px" }}>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "17px", letterSpacing: "1px", color: "#FFFFFF", marginBottom: "10px" }}>{item.q}</p>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: "1.7", margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links + CTA */}
      <section style={{ padding: "60px 24px", background: "var(--cm-navy-mid)", borderTop: "1px solid var(--cm-gold-border)", textAlign: "center" }}>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "24px" }}>Also Read</p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px" }}>
          {importGuides.filter((g) => g.slug !== guide.slug).map((g) => (
            <Link key={g.slug} href={`/import-guide/${g.slug}`} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 20px", borderRadius: "2px", textDecoration: "none" }}>
              {g.flag} Import Guide — {g.country} →
            </Link>
          ))}
          <Link href="/india-vs-china-spare-parts" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 20px", borderRadius: "2px", textDecoration: "none" }}>
            India vs China Spare Parts →
          </Link>
        </div>
        <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(22px, 3.5vw, 36px)", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>
          Ready to Source from India?
        </h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", marginBottom: "32px" }}>
          CrestMAX handles the India side — you handle {guide.country} customs. Send us your parts list and we&apos;ll respond within 24 hours.
        </p>
        <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
          Request a Quote
        </Link>
      </section>
    </>
  );
}
