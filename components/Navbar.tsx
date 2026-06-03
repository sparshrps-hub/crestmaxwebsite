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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
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
      <nav style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", height: "70px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" aria-label="Crestmax Home">
          <Logo size="sm" />
        </Link>

        {/* Desktop Nav */}
        <ul style={{ display: "flex", gap: "32px", listStyle: "none", margin: 0, padding: 0 }} className="hidden md:flex">
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
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--cm-gold)"; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = pathname === link.href ? "var(--cm-gold)" : "rgba(255,255,255,0.8)"; }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:block"
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
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--cm-gold)";
            (e.currentTarget as HTMLElement).style.color = "var(--cm-navy-deep)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "var(--cm-gold)";
          }}
        >
          Request a Quote
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", color: "white", padding: "4px" }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--cm-navy-deep)",
            zIndex: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{ position: "absolute", top: "20px", right: "24px", background: "none", border: "none", cursor: "pointer", color: "white" }}
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 700,
                fontSize: "28px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: pathname === link.href ? "var(--cm-gold)" : "white",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              marginTop: "16px",
              fontFamily: "Nunito Sans, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--cm-navy-deep)",
              background: "var(--cm-gold)",
              padding: "12px 32px",
              borderRadius: "2px",
              textDecoration: "none",
            }}
          >
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
