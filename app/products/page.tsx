"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { twoWheelerParts, bajajReParts, tvsKingParts } from "@/lib/products";

type TopTab = "2-wheeler" | "3-wheeler";
type SubTab2W = "all" | "bajaj-boxer" | "tvs-hlx" | "ct100";
type SubTab3W = "bajaj-re" | "tvs-king";

const tabBtnStyle = (active: boolean): React.CSSProperties => ({
  fontFamily: "Rajdhani, sans-serif",
  fontWeight: 700,
  fontSize: "15px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  background: "none",
  border: "none",
  borderBottom: active ? "2px solid var(--cm-gold)" : "2px solid transparent",
  color: active ? "var(--cm-gold)" : "rgba(255,255,255,0.45)",
  padding: "12px 20px",
  cursor: "pointer",
  transition: "color 0.2s, border-color 0.2s",
});

export default function ProductsPage() {
  const [topTab, setTopTab] = useState<TopTab>("2-wheeler");
  const [sub2W, setSub2W] = useState<SubTab2W>("all");
  const [sub3W, setSub3W] = useState<SubTab3W>("bajaj-re");
  const [search, setSearch] = useState("");

  const visible2WParts = useMemo(() => {
    let parts = twoWheelerParts;
    if (sub2W === "bajaj-boxer") parts = parts.filter((p) => p.models.includes("Bajaj Boxer"));
    else if (sub2W === "tvs-hlx") parts = parts.filter((p) => p.models.includes("TVS HLX"));
    else if (sub2W === "ct100") parts = parts.filter((p) => p.models.includes("CT100"));
    if (search) parts = parts.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()));
    return parts;
  }, [sub2W, search]);

  const visible3WParts = useMemo(() => {
    let parts = sub3W === "bajaj-re" ? bajajReParts : tvsKingParts;
    if (search) parts = parts.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()));
    return parts;
  }, [sub3W, search]);

  const groupByCategory = (parts: typeof twoWheelerParts) => {
    const groups: Record<string, typeof twoWheelerParts> = {};
    for (const p of parts) {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category].push(p);
    }
    return groups;
  };

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
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>Catalogue</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(36px, 6vw, 60px)", letterSpacing: "4px", lineHeight: "0.95", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 16px" }}>
            Spare Parts Catalogue
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: "1.7" }}>
            2-Wheeler &amp; 3-Wheeler parts for Africa&apos;s most popular vehicles.
          </p>
        </div>
      </section>

      {/* Tabs + Content */}
      <section style={{ padding: "48px 24px 96px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

          {/* Search */}
          <div style={{ marginBottom: "32px", maxWidth: "400px" }}>
            <input
              type="text"
              placeholder="Search parts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                background: "var(--cm-navy-mid)",
                border: "1px solid var(--cm-gold-border)",
                borderRadius: "2px",
                padding: "12px 16px",
                color: "#FFFFFF",
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: "14px",
                outline: "none",
              }}
            />
          </div>

          {/* Top Tabs */}
          <div style={{ display: "flex", gap: "0", borderBottom: "1px solid var(--cm-border)", marginBottom: "28px" }}>
            <button style={tabBtnStyle(topTab === "2-wheeler")} onClick={() => setTopTab("2-wheeler")}>2-Wheeler Parts</button>
            <button style={tabBtnStyle(topTab === "3-wheeler")} onClick={() => setTopTab("3-wheeler")}>3-Wheeler Parts</button>
          </div>

          {/* 2-Wheeler Sub-Tabs */}
          {topTab === "2-wheeler" && (
            <>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "40px" }}>
                {([["all", "All Models"], ["bajaj-boxer", "Bajaj Boxer"], ["tvs-hlx", "TVS HLX"], ["ct100", "CT100"]] as [SubTab2W, string][]).map(([val, label]) => (
                  <button
                    key={val}
                    onClick={() => setSub2W(val)}
                    style={{
                      fontFamily: "IBM Plex Mono, monospace",
                      fontSize: "12px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      background: sub2W === val ? "var(--cm-gold)" : "var(--cm-navy-mid)",
                      color: sub2W === val ? "var(--cm-navy-deep)" : "rgba(255,255,255,0.5)",
                      border: "1px solid " + (sub2W === val ? "var(--cm-gold)" : "rgba(255,255,255,0.1)"),
                      padding: "8px 16px",
                      borderRadius: "2px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {Object.entries(groupByCategory(visible2WParts)).map(([category, parts]) => (
                <div key={category} style={{ marginBottom: "48px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                    <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "20px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", margin: 0 }}>
                      {category}
                    </h3>
                    <div style={{ flex: 1, height: "1px", background: "var(--cm-gold-border)" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
                    {parts.map((p) => <ProductCard key={p.name} {...p} />)}
                  </div>
                </div>
              ))}
              {visible2WParts.length === 0 && (
                <p style={{ fontFamily: "Nunito Sans, sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "16px", textAlign: "center", padding: "48px 0" }}>
                  No parts found matching &ldquo;{search}&rdquo;
                </p>
              )}
            </>
          )}

          {/* 3-Wheeler Sub-Tabs */}
          {topTab === "3-wheeler" && (
            <>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "40px" }}>
                {([["bajaj-re", "Bajaj RE / Tuk Tuk"], ["tvs-king", "TVS King"]] as [SubTab3W, string][]).map(([val, label]) => (
                  <button
                    key={val}
                    onClick={() => setSub3W(val)}
                    style={{
                      fontFamily: "IBM Plex Mono, monospace",
                      fontSize: "12px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      background: sub3W === val ? "var(--cm-gold)" : "var(--cm-navy-mid)",
                      color: sub3W === val ? "var(--cm-navy-deep)" : "rgba(255,255,255,0.5)",
                      border: "1px solid " + (sub3W === val ? "var(--cm-gold)" : "rgba(255,255,255,0.1)"),
                      padding: "8px 16px",
                      borderRadius: "2px",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {Object.entries(groupByCategory(visible3WParts)).map(([category, parts]) => (
                <div key={category} style={{ marginBottom: "48px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                    <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "20px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", margin: 0 }}>
                      {category}
                    </h3>
                    <div style={{ flex: 1, height: "1px", background: "var(--cm-gold-border)" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
                    {parts.map((p) => <ProductCard key={p.name} {...p} />)}
                  </div>
                </div>
              ))}
              {visible3WParts.length === 0 && (
                <p style={{ fontFamily: "Nunito Sans, sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "16px", textAlign: "center", padding: "48px 0" }}>
                  No parts found matching &ldquo;{search}&rdquo;
                </p>
              )}
            </>
          )}

          {/* Bottom CTA */}
          <div style={{
            marginTop: "64px",
            padding: "32px",
            background: "var(--cm-navy-mid)",
            border: "1px solid var(--cm-gold-border)",
            borderRadius: "2px",
            textAlign: "center",
          }}>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.65)", marginBottom: "16px" }}>
              Don&apos;t see what you need? We source custom parts.
            </p>
            <Link href="/contact" style={{
              fontFamily: "Rajdhani, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--cm-navy-deep)",
              background: "var(--cm-gold)",
              padding: "12px 32px",
              borderRadius: "2px",
              textDecoration: "none",
              display: "inline-block",
            }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
