"use client";

import Link from "next/link";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
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
                href="tel:+919855739773"
                itemProp="telephone"
                style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.2s" }}
                className="nav-link"
              >
                <Phone size={13} color="var(--cm-gold)" />
                +91 98557 39773
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
                href="https://wa.me/919855739773"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp CrestMAX"
                style={{ color: "rgba(255,255,255,0.45)", transition: "color 0.2s" }}
                className="nav-link"
              >
                <MessageCircle size={18} />
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
              { href: "/contact", label: "Contact" },
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
