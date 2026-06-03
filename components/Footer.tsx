"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={{ background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px 0" }}>
        <div className="gold-rule" style={{ marginBottom: "56px" }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", marginBottom: "48px" }}>
          {/* Col 1 */}
          <div>
            <Logo size="sm" />
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: "1.7", marginTop: "16px", maxWidth: "240px" }}>
              Premium 2-wheeler & 3-wheeler spare parts exported from India to Africa&apos;s wholesale importers and distributors.
            </p>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", color: "var(--cm-gold)", marginTop: "16px", letterSpacing: "1px" }}>
              LUDHIANA, PUNJAB, INDIA
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
              <a href="#" aria-label="LinkedIn" style={{ color: "rgba(255,255,255,0.45)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cm-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://wa.me/91XXXXXXXXXX" aria-label="WhatsApp" style={{ color: "rgba(255,255,255,0.45)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
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
              { href: "/why-crestmax", label: "Why Crestmax" },
              { href: "/markets", label: "Export Markets" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ display: "block", fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: "10px", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cm-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
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
              <Link key={l.href} href={l.href} style={{ display: "block", fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: "10px", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cm-gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 4 */}
          <div>
            <h4 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>
              Contact
            </h4>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", marginBottom: "8px" }}>
              info@crestmaxpvtltd.com
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", marginBottom: "8px" }}>
              +91-XXXXXXXXXX
            </p>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", marginBottom: "8px" }}>
              Mon–Sat, 9:00 AM – 6:00 PM IST
            </p>
            <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "12px", color: "var(--cm-gold-deep)", marginTop: "12px" }}>
              FOB: Mumbai / Chennai
            </p>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--cm-border)", padding: "20px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
            © 2025 Crestmax Pvt Ltd · All Rights Reserved
          </p>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "12px", color: "var(--cm-gold-deep)", letterSpacing: "1px" }}>
            Made in India, Trusted in Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
