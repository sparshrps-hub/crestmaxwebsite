"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.3s, box-shadow 0.3s",
          background: scrolled ? "var(--cm-navy-mid)" : "transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.4)" : "none",
          borderBottom: scrolled ? "1px solid var(--cm-gold-border)" : "none",
        }}
      >
        <nav
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo — always visible */}
          <Link href="/" aria-label="CrestMAX Home" style={{ textDecoration: "none" }}>
            <Logo size="sm" />
          </Link>

          {/* Desktop Nav links */}
          <ul
            style={{
              display: "flex",
              gap: "28px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "Nunito Sans, sans-serif",
                    fontWeight: 600,
                    fontSize: "13px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: pathname === link.href ? "var(--cm-gold)" : "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:block btn-gold-outline"
            style={{
              fontFamily: "Nunito Sans, sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "var(--cm-gold)",
              border: "1.5px solid var(--cm-gold)",
              padding: "8px 20px",
              borderRadius: "2px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Request a Quote
          </Link>

          {/* Mobile hamburger — min 44×44px tap target */}
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "white",
              padding: "10px",
              marginRight: "-10px",
              minWidth: "44px",
              minHeight: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer overlay */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 98,
            backdropFilter: "blur(2px)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer — slides in from RIGHT */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(320px, 90vw)",
          background: "var(--cm-navy-deep)",
          borderLeft: "1px solid var(--cm-gold-border)",
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
          padding: "0",
          transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          overflowY: "auto",
        }}
      >
        {/* Drawer header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 24px",
            borderBottom: "1px solid var(--cm-gold-border)",
          }}
        >
          <Logo size="sm" />
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close navigation menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "white",
              padding: "10px",
              marginRight: "-10px",
              minWidth: "44px",
              minHeight: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, padding: "32px 24px 24px" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "Rajdhani, sans-serif",
                    fontWeight: 700,
                    fontSize: "22px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: pathname === link.href ? "var(--cm-gold)" : "rgba(255,255,255,0.85)",
                    textDecoration: "none",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    minHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom CTA */}
        <div style={{ padding: "24px" }}>
          <Link
            href="/contact"
            style={{
              width: "100%",
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              background: "var(--cm-gold)",
              color: "var(--cm-navy-deep)",
              padding: "16px 24px",
              borderRadius: "2px",
              textDecoration: "none",
              minHeight: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
