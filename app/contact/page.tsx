import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Crestmax | Request a Parts Quote | B2B Export Enquiry",
  description: "Contact Crestmax Pvt Ltd for spare parts quotes, wholesale pricing, and export logistics. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "var(--cm-navy-deep)",
        paddingTop: "140px",
        paddingBottom: "60px",
        textAlign: "center",
        borderBottom: "1px solid var(--cm-gold-border)",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>
            Get in Touch
          </p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(36px, 6vw, 60px)", letterSpacing: "4px", lineHeight: "0.95", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 16px" }}>
            Request a Quote
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: "1.7" }}>
            Send us your parts list — we&apos;ll respond within 24 hours with pricing and availability.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "72px 24px", background: "var(--cm-navy)" }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: "56px",
          alignItems: "start",
        }}
          className="contact-grid"
        >
          {/* Form */}
          <div>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "26px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "32px" }}>
              Enquiry Form
            </h2>
            <EnquiryForm />
          </div>

          {/* Contact Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* WhatsApp */}
            <div style={{
              background: "var(--cm-navy-mid)",
              border: "1px solid var(--cm-gold-border)",
              borderRadius: "2px",
              padding: "28px",
            }}>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  textDecoration: "none",
                  background: "#25D366",
                  borderRadius: "2px",
                  padding: "16px 20px",
                  marginBottom: "20px",
                  transition: "opacity 0.2s",
                }}
                className="wa-link"
              >
                <MessageCircle size={24} color="white" fill="white" />
                <span style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "18px", letterSpacing: "2px", color: "white", textTransform: "uppercase" }}>
                  Chat on WhatsApp
                </span>
              </a>
              <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
                Fastest way to reach us. Send your parts list directly on WhatsApp.
              </p>
            </div>

            {/* Contact details */}
            <div style={{
              background: "var(--cm-navy-mid)",
              border: "1px solid var(--cm-gold-border)",
              borderRadius: "2px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <Mail size={18} color="var(--cm-gold)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "13px", color: "rgba(255,255,255,0.5)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>Email</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "#FFFFFF" }}>info@crestmaxpvtltd.com</p>
                </div>
              </div>

              <div style={{ height: "1px", background: "var(--cm-border)" }} />

              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <MapPin size={18} color="var(--cm-gold)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "13px", color: "rgba(255,255,255,0.5)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>Location</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "#FFFFFF" }}>Ludhiana, Punjab, India</p>
                </div>
              </div>

              <div style={{ height: "1px", background: "var(--cm-border)" }} />

              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <MapPin size={18} color="var(--cm-gold)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "13px", color: "rgba(255,255,255,0.5)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>Export From</p>
                  <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "14px", color: "var(--cm-gold)" }}>Mumbai Port · Chennai Port (FOB)</p>
                </div>
              </div>

              <div style={{ height: "1px", background: "var(--cm-border)" }} />

              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <Clock size={18} color="var(--cm-gold)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "13px", color: "rgba(255,255,255,0.5)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>Business Hours</p>
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "#FFFFFF" }}>Mon–Sat, 9:00 AM – 6:00 PM IST</p>
                </div>
              </div>
            </div>

            {/* Response promise */}
            <div style={{
              background: "rgba(201,168,76,0.06)",
              border: "1px solid var(--cm-gold-border)",
              borderRadius: "2px",
              padding: "20px",
              textAlign: "center",
            }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "8px" }}>
                Our Promise
              </p>
              <p style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "26px", letterSpacing: "1px", color: "#FFFFFF", margin: "0 0 4px" }}>
                24-Hour Response
              </p>
              <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
                We reply to every enquiry within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
