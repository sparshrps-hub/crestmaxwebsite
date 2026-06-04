import type { Metadata } from "next";
import Link from "next/link";
import SalesAgentForm from "@/components/SalesAgentForm";

export const metadata: Metadata = {
  title: "Become a Sales Agent | CrestMAX — Indian Spare Parts Export to Africa",
  description:
    "Represent CrestMAX across Africa and earn commission on every wholesale order. We work with sales agents who have strong buyer networks among importers, distributors and fleet operators.",
  alternates: { canonical: "https://crestmax.in/sales-agent" },
  openGraph: {
    title: "Become a Sales Agent | CrestMAX — Indian Spare Parts Export to Africa",
    description:
      "Represent CrestMAX across Africa and earn commission on every wholesale order. We work with agents who have strong buyer networks in African markets.",
    url: "https://crestmax.in/sales-agent",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Become a Sales Agent", item: "https://crestmax.in/sales-agent" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a CrestMAX Sales Agent do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Sales Agent identifies wholesale buyers — importers, distributors, fleet operators — in their territory and introduces them to CrestMAX. Agents earn a commission on every successful wholesale order they bring in.",
      },
    },
    {
      "@type": "Question",
      name: "Do Sales Agents need experience in spare parts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Experience in the automotive or spare parts industry is a strong advantage, but we primarily look for people with strong buyer networks among importers and distributors in African markets.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Sales Agent role paid a salary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sales Agent roles are commission-based. You earn on every wholesale order you successfully introduce to CrestMAX. There is no fixed salary.",
      },
    },
  ],
};

const highlights = [
  { title: "Earn on Every Shipment", body: "Structured commission on every order you bring in. We handle production, shipping and documentation — you focus on selling." },
  { title: "Strong Product Portfolio", body: "76+ catalogued parts for Bajaj Boxer, TVS HLX, CT100, Keke Napep and TVS King — the most popular bikes in Africa." },
  { title: "Indian Quality, African Prices", body: "OEM-compatible Indian parts at competitive wholesale prices — easy to sell against Chinese alternatives in your market." },
  { title: "Named Director Contacts", body: "You get direct access to Rahul Khullar and the team — not a ticketing system. Real relationships, fast turnarounds." },
];

export default function SalesAgentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "130px", paddingBottom: "60px", textAlign: "center", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>
            For Trade Representatives
          </p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 5vw, 52px)", letterSpacing: "2px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Become a <span style={{ color: "var(--cm-gold)" }}>Sales Agent</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", lineHeight: "1.75" }}>
            Do you have strong connections with spare parts buyers, importers or fleet operators in Africa? Represent CrestMAX and earn commission on every wholesale order you bring in.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section style={{ padding: "64px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>
            Why Represent CrestMAX
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", marginBottom: "64px" }}>
            {highlights.map((h) => (
              <div key={h.title} style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px" }}>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "18px", letterSpacing: "1px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "10px" }}>{h.title}</p>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: "1.7" }}>{h.body}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "26px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "32px" }}>
              Sales Agent Application
            </h2>
            <SalesAgentForm />
          </div>
        </div>
      </section>

      {/* WhatsApp fallback */}
      <section style={{ padding: "48px 24px", background: "var(--cm-navy-mid)", borderTop: "1px solid var(--cm-gold-border)", textAlign: "center" }}>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.55)", marginBottom: "16px" }}>
          Want to have a quick conversation first? Message us directly.
        </p>
        <a
          href="https://wa.me/917087866759"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#25D366", color: "#FFFFFF", fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "2px", textTransform: "uppercase", padding: "14px 28px", borderRadius: "2px", textDecoration: "none" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp Our Sales Team
        </a>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.3)", marginTop: "12px" }}>
          Looking to buy parts instead? <Link href="/trade-partner" style={{ color: "var(--cm-gold)", textDecoration: "none" }}>Become a Trade Partner →</Link>
        </p>
      </section>
    </>
  );
}
