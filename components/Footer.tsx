"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={{ background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px 0" }}>
        <div className="gold-rule" style={{ marginBottom: "56px" }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", marginBottom: "48px" }}>
          {/* Col 1 — Brand + NAP */}
          <div>
            <Logo size="sm" />
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: "1.7", marginTop: "16px", maxWidth: "240px" }}>
              Wholesale 2-wheeler &amp; 3-wheeler spare parts exported from India to Africa&apos;s importers and distributors.
            </p>

            {/* NAP block — schema-friendly plain text */}
            <address
              itemScope
              itemType="https://schema.org/Organization"
              style={{ fontStyle: "normal", marginTop: "20px", display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <span itemProp="name" style={{ display: "none" }}>CrestMAX</span>
              <a
                href="tel:+917087866759"
                itemProp="telephone"
                style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                className="nav-link"
              >
                <Phone size={13} color="var(--cm-gold)" />
                +91 70878 66759
              </a>
              <a
                href="mailto:info@crestmax.in"
                itemProp="email"
                style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                className="nav-link"
              >
                <Mail size={13} color="var(--cm-gold)" />
                info@crestmax.in
              </a>
              <span
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
                style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.45)" }}
              >
                <MapPin size={13} color="var(--cm-gold)" />
                <span>
                  <span itemProp="addressLocality">Ludhiana</span>,{" "}
                  <span itemProp="addressRegion">Punjab</span>,{" "}
                  <span itemProp="addressCountry">India</span>
                </span>
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>
                <Clock size={13} color="var(--cm-gold)" />
                Mon–Sat, 9:00 AM – 6:00 PM IST
              </span>
            </address>

            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", color: "var(--cm-gold)", marginTop: "14px", letterSpacing: "1px" }}>
              FOB Mumbai | CIF Any African Port
            </p>

            {/* Social */}
            <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
              <a
                href="https://wa.me/917087866759"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp CrestMAX Sales Team"
                style={{ color: "#25D366", transition: "opacity 0.2s" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>
              Quick Links
            </h4>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/why-crestmax", label: "Why CrestMAX" },
              { href: "/markets", label: "Export Markets" },
              { href: "/contact", label: "Request a Quote" },
              { href: "/trade-partner", label: "Become a Trade Partner" },
              { href: "/sales-agent", label: "Become a Sales Agent" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ display: "block", fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: "10px", transition: "color 0.2s" }}
                className="nav-link"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 3 */}
          <div>
            <h4 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>
              Products
            </h4>
            {[
              { href: "/products/bajaj-boxer", label: "Bajaj Boxer Parts" },
              { href: "/products/tvs-hlx", label: "TVS HLX Parts" },
              { href: "/products/ct100", label: "CT100 Parts" },
              { href: "/products/bajaj-re", label: "Bajaj RE / Keke Napep" },
              { href: "/products/tvs-king", label: "TVS King Parts" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ display: "block", fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: "10px", transition: "color 0.2s" }}
                className="nav-link"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 4 — Directors */}
          <div>
            <h4 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>
              Contact Us
            </h4>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "13px", color: "rgba(255,255,255,0.7)", marginBottom: "4px" }}>Rahul Khullar — Director</p>
            <a href="tel:+2349020636510" style={{ display: "block", fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: "2px" }} className="nav-link">
              +234 902 063 6510 (Nigeria)
            </a>
            <a href="tel:+919855739773" style={{ display: "block", fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: "14px" }} className="nav-link">
              +91 98557 39773 (India)
            </a>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "13px", color: "rgba(255,255,255,0.7)", marginBottom: "4px" }}>Sparsh Khullar — Director</p>
            <a href="tel:+918847258146" style={{ display: "block", fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none", marginBottom: "14px" }} className="nav-link">
              +91 88472 58146
            </a>
            <a href="mailto:info@crestmax.in" style={{ display: "block", fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", textDecoration: "none" }} className="nav-link">
              info@crestmax.in
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--cm-border)", padding: "20px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
            © 2025 CrestMAX (A Venture by RPS Infrastructures) · All Rights Reserved
          </p>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "12px", color: "var(--cm-gold-deep)", letterSpacing: "1px" }}>
            Made in India, Trusted in Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
