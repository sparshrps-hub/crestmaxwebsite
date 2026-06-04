"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/why-crestmax", label: "Why Us" },
  { href: "/markets", label: "Markets" },
  { href: "/contact", label: "Contact" },
];

const partnerLinks = [
  { href: "/trade-partner", label: "Become a Trade Partner" },
  { href: "/sales-agent", label: "Become a Sales Agent" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Auto-close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      {/* Responsive nav utilities — inline to guarantee they work independent of Tailwind */}
      <style>{`
        .cm-nav-desktop { display: none !important; }
        .cm-nav-hamburger { display: flex !important; }
        @media (min-width: 768px) {
          .cm-nav-desktop { display: flex !important; }
          .cm-nav-hamburger { display: none !important; }
        }
        .cm-nav-cta-desktop { display: none !important; }
        @media (min-width: 768px) {
          .cm-nav-cta-desktop { display: inline-block !important; }
        }
      `}</style>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "background 0.3s, box-shadow 0.3s",
          background: scrolled ? "#1B2D42" : "rgba(10,21,32,0.95)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.5)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.25)" : "none",
        }}
      >
        <nav
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 20px",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          {/* Logo */}
          <Link href="/" aria-label="CrestMAX Home" style={{ textDecoration: "none", flexShrink: 0 }}>
            <Logo size="sm" />
          </Link>

          {/* Desktop nav links */}
          <ul
            className="cm-nav-desktop"
            style={{
              gap: "24px",
              listStyle: "none",
              margin: 0,
              padding: 0,
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "Nunito Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "13px",
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                    color: pathname === link.href ? "#C9A84C" : "rgba(255,255,255,0.78)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="cm-nav-cta-desktop"
            style={{
              fontFamily: "Nunito Sans, sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#C9A84C",
              border: "1.5px solid #C9A84C",
              padding: "8px 18px",
              borderRadius: "2px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
              transition: "background 0.2s, color 0.2s",
            }}
          >
            Request a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            className="cm-nav-hamburger"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "4px",
              cursor: "pointer",
              color: "white",
              padding: "10px",
              minWidth: "44px",
              minHeight: "44px",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0" width="20" height="2" rx="1" fill="white"/>
              <rect y="7" width="20" height="2" rx="1" fill="white"/>
              <rect y="14" width="20" height="2" rx="1" fill="white"/>
            </svg>
          </button>
        </nav>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.65)",
          zIndex: 1001,
          backdropFilter: "blur(3px)",
          opacity: drawerOpen ? 1 : 0,
          pointerEvents: drawerOpen ? "auto" : "none",
          transition: "opacity 0.3s",
        }}
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(300px, 88vw)",
          background: "#0A1520",
          borderLeft: "1px solid rgba(201,168,76,0.3)",
          zIndex: 1002,
          display: "flex",
          flexDirection: "column",
          transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Drawer header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 20px",
            borderBottom: "1px solid rgba(201,168,76,0.2)",
            flexShrink: 0,
          }}
        >
          <Logo size="sm" />
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close navigation menu"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "4px",
              cursor: "pointer",
              color: "white",
              padding: "8px",
              minWidth: "40px",
              minHeight: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1" y1="1" x2="15" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="15" y1="1" x2="1" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Main nav links */}
        <nav style={{ padding: "8px 0 0", flexShrink: 0 }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "flex",
                alignItems: "center",
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 700,
                fontSize: "18px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: pathname === link.href ? "#C9A84C" : "rgba(255,255,255,0.85)",
                textDecoration: "none",
                padding: "14px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                minHeight: "52px",
                background: pathname === link.href ? "rgba(201,168,76,0.06)" : "transparent",
                transition: "background 0.15s",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(201,168,76,0.25)", margin: "16px 20px" }} />

        {/* Partner / Agent CTAs */}
        <div style={{ padding: "0 20px", display: "flex", flexDirection: "column", gap: "10px", flexShrink: 0 }}>
          <p style={{
            fontFamily: "IBM Plex Mono, monospace",
            fontSize: "10px",
            letterSpacing: "2px",
            color: "rgba(255,255,255,0.35)",
            textTransform: "uppercase",
            marginBottom: "4px",
          }}>
            Work With Us
          </p>
          {partnerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#0A1520",
                background: "#C9A84C",
                textDecoration: "none",
                padding: "13px 16px",
                borderRadius: "3px",
                minHeight: "48px",
                textAlign: "center",
                transition: "background 0.15s",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ padding: "20px", marginTop: "auto", flexShrink: 0 }}>
          <Link
            href="/contact"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#C9A84C",
              border: "1.5px solid #C9A84C",
              background: "transparent",
              textDecoration: "none",
              padding: "14px 20px",
              borderRadius: "3px",
              minHeight: "48px",
              textAlign: "center",
            }}
          >
            Request Export Quote
          </Link>
        </div>
      </div>
    </>
  );
}
