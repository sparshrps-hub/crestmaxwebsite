import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Request Export Quote | CrestMAX — Indian Spare Parts to Africa",
  description:
    "Request a wholesale spare parts export quote from CrestMAX. Send your parts list and we respond with pricing and availability. Email info@crestmax.in or call +91 70878 66759.",
  alternates: { canonical: "https://crestmax.in/contact" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact CrestMAX — Spare Parts Export Enquiry",
  description: "Request a wholesale spare parts export quote from CrestMAX. B2B export from India to Africa.",
  url: "https://crestmax.in/contact",
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "130px", paddingBottom: "60px", textAlign: "center", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>Request a Quote</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 5vw, 52px)", letterSpacing: "3px", lineHeight: "1.0", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 16px" }}>
            Request Export<br />
            <span style={{ color: "var(--cm-gold)" }}>Quotation</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: "1.7" }}>
            Send us your parts list — we review every enquiry and respond with accurate wholesale pricing and availability.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "72px 24px", background: "var(--cm-navy)" }}>
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)", gap: "56px", alignItems: "start" }}
          className="contact-grid"
        >
          {/* Form */}
          <div id="enquiry-form">
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "26px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "32px" }}>
              Export Quotation Form
            </h2>
            <EnquiryForm />
          </div>

          {/* Contact sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Sales Team — primary */}
            <div style={{ background: "rgba(201,168,76,0.08)", border: "1.5px solid var(--cm-gold)", borderRadius: "2px", padding: "20px 24px" }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "6px" }}>Sales Team</p>
              <a href="tel:+917087866759" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "24px", letterSpacing: "1px", color: "#FFFFFF", textDecoration: "none", display: "block", marginBottom: "14px" }}>
                +91 70878 66759
              </a>
              <a
                href="https://wa.me/917087866759"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "white", fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Now
              </a>
            </div>

            {/* Director contacts */}
            <div style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "28px" }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Directors</p>

              <div style={{ marginBottom: "24px", paddingBottom: "24px", borderBottom: "1px solid var(--cm-border)" }}>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "18px", letterSpacing: "1px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "4px" }}>Rahul Khullar</p>
                <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "2px", color: "var(--cm-gold)", marginBottom: "12px" }}>DIRECTOR</p>
                <a href="tel:+2349020636510" style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", textDecoration: "none", marginBottom: "8px" }}>
                  <Phone size={14} color="var(--cm-gold)" />
                  +234 902 063 6510
                  <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", color: "rgba(255,255,255,0.35)", letterSpacing: "1px" }}>NIGERIA</span>
                </a>
                <a href="tel:+919855739773" style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                  <Phone size={14} color="var(--cm-gold)" />
                  +91 98557 39773
                  <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", color: "rgba(255,255,255,0.35)", letterSpacing: "1px" }}>INDIA</span>
                </a>
              </div>

              <div>
                <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "18px", letterSpacing: "1px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "4px" }}>Sparsh Khullar</p>
                <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "2px", color: "var(--cm-gold)", marginBottom: "12px" }}>DIRECTOR</p>
                <a href="tel:+918847258146" style={{ display: "flex", alignItems: "center", gap: "10px", fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                  <Phone size={14} color="var(--cm-gold)" />
                  +91 88472 58146
                </a>
              </div>
            </div>

            {/* Contact details */}
            <div style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <a href="mailto:info@crestmax.in" style={{ display: "flex", gap: "12px", alignItems: "flex-start", textDecoration: "none" }}>
                <Mail size={16} color="var(--cm-gold)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "2px" }}>Email</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "#FFFFFF" }}>info@crestmax.in</p>
                </div>
              </a>
              <div style={{ height: "1px", background: "var(--cm-border)" }} />
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <MapPin size={16} color="var(--cm-gold)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "2px" }}>Location</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "#FFFFFF" }}>Ludhiana, Punjab, India</p>
                </div>
              </div>
              <div style={{ height: "1px", background: "var(--cm-border)" }} />
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <MapPin size={16} color="var(--cm-gold)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "2px" }}>Export From</p>
                  <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "13px", color: "var(--cm-gold)" }}>FOB Mumbai | CIF Any African Port</p>
                </div>
              </div>
              <div style={{ height: "1px", background: "var(--cm-border)" }} />
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <Clock size={16} color="var(--cm-gold)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "2px" }}>Business Hours</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "#FFFFFF" }}>Mon–Sat, 9:00 AM – 6:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work with us section */}
      <section style={{ padding: "56px 24px", background: "var(--cm-navy-mid)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>Want to Work With Us?</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(22px, 4vw, 34px)", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>
            Partner or Agent Programmes
          </h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: "1.8", marginBottom: "32px", maxWidth: "580px", margin: "0 auto 32px" }}>
            We offer separate programmes for wholesale importers / distributors and for sales agents who bring us buyers. Each has its own dedicated application.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            <Link
              href="/trade-partner"
              style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 28px", borderRadius: "2px", textDecoration: "none" }}
            >
              Become a Trade Partner
            </Link>
            <Link
              href="/sales-agent"
              style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", background: "transparent", color: "var(--cm-gold)", border: "1.5px solid var(--cm-gold)", padding: "14px 28px", borderRadius: "2px", textDecoration: "none" }}
            >
              Become a Sales Agent
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
