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

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "2-Wheeler and 3-Wheeler Spare Parts for Africa",
  description:
    "Wholesale spare parts exported from India for Bajaj, TVS, Hero motorcycles and auto rickshaws across African markets",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Bajaj Boxer Spare Parts", url: "https://crestmax.in/products/bajaj-boxer" },
    { "@type": "ListItem", position: 2, name: "TVS HLX Spare Parts", url: "https://crestmax.in/products/tvs-hlx" },
    { "@type": "ListItem", position: 3, name: "CT100 Spare Parts", url: "https://crestmax.in/products/ct100" },
    { "@type": "ListItem", position: 4, name: "Bajaj RE Auto Rickshaw Parts", url: "https://crestmax.in/products/bajaj-re" },
    { "@type": "ListItem", position: 5, name: "TVS King Three Wheeler Parts", url: "https://crestmax.in/products/tvs-king" },
  ],
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "60px", textAlign: "center", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>Catalogue</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 5vw, 54px)", letterSpacing: "3px", lineHeight: "1.0", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 16px" }}>
            2-Wheeler &amp; 3-Wheeler Spare Parts —<br />
            <span style={{ color: "var(--cm-gold)" }}>Wholesale Export from India to Africa</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: "1.7" }}>
            OEM-compatible spare parts for Africa&apos;s most popular vehicles. Sourced from Ludhiana, India. Exported FOB Mumbai or CIF to any African port.
          </p>
        </div>
      </section>

      {/* Tabs + Content */}
      <section style={{ padding: "48px 24px 80px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

          {/* Search */}
          <div style={{ marginBottom: "32px", maxWidth: "400px" }}>
            <input
              type="text"
              placeholder="Search parts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "100%", background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "12px 16px", color: "#FFFFFF", fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", outline: "none" }}
            />
          </div>

          {/* Top Tabs */}
          <div style={{ display: "flex", gap: "0", borderBottom: "1px solid var(--cm-border)", marginBottom: "28px" }}>
            <button style={tabBtnStyle(topTab === "2-wheeler")} onClick={() => setTopTab("2-wheeler")}>
              Motorcycle Spare Parts
            </button>
            <button style={tabBtnStyle(topTab === "3-wheeler")} onClick={() => setTopTab("3-wheeler")}>
              Auto Rickshaw Parts
            </button>
          </div>

          {/* 2-Wheeler */}
          {topTab === "2-wheeler" && (
            <>
              <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "22px", letterSpacing: "2px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", marginBottom: "20px" }}>
                Motorcycle Spare Parts for African Markets
              </h2>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "40px" }}>
                {([["all", "All Models"], ["bajaj-boxer", "Bajaj Boxer"], ["tvs-hlx", "TVS HLX"], ["ct100", "CT100"]] as [SubTab2W, string][]).map(([val, label]) => (
                  <button key={val} onClick={() => setSub2W(val)} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", background: sub2W === val ? "var(--cm-gold)" : "var(--cm-navy-mid)", color: sub2W === val ? "var(--cm-navy-deep)" : "rgba(255,255,255,0.5)", border: "1px solid " + (sub2W === val ? "var(--cm-gold)" : "rgba(255,255,255,0.1)"), padding: "8px 16px", borderRadius: "2px", cursor: "pointer", transition: "all 0.2s" }}>
                    {label}
                  </button>
                ))}
              </div>
              {Object.entries(groupByCategory(visible2WParts)).map(([category, parts]) => (
                <div key={category} style={{ marginBottom: "48px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                    <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "18px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", margin: 0 }}>{category}</h3>
                    <div style={{ flex: 1, height: "1px", background: "var(--cm-gold-border)" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
                    {parts.map((p) => <ProductCard key={p.name} {...p} />)}
                  </div>
                </div>
              ))}
              {visible2WParts.length === 0 && <p style={{ fontFamily: "Nunito Sans, sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "16px", textAlign: "center", padding: "48px 0" }}>No parts found matching &ldquo;{search}&rdquo;</p>}
            </>
          )}

          {/* 3-Wheeler */}
          {topTab === "3-wheeler" && (
            <>
              <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "22px", letterSpacing: "2px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", marginBottom: "20px" }}>
                Auto Rickshaw &amp; Three-Wheeler Spare Parts
              </h2>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "40px" }}>
                {([["bajaj-re", "Bajaj RE / Tuk Tuk / Keke Napep"], ["tvs-king", "TVS King"]] as [SubTab3W, string][]).map(([val, label]) => (
                  <button key={val} onClick={() => setSub3W(val)} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", background: sub3W === val ? "var(--cm-gold)" : "var(--cm-navy-mid)", color: sub3W === val ? "var(--cm-navy-deep)" : "rgba(255,255,255,0.5)", border: "1px solid " + (sub3W === val ? "var(--cm-gold)" : "rgba(255,255,255,0.1)"), padding: "8px 16px", borderRadius: "2px", cursor: "pointer", transition: "all 0.2s" }}>
                    {label}
                  </button>
                ))}
              </div>
              {Object.entries(groupByCategory(visible3WParts)).map(([category, parts]) => (
                <div key={category} style={{ marginBottom: "48px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                    <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "18px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", margin: 0 }}>{category}</h3>
                    <div style={{ flex: 1, height: "1px", background: "var(--cm-gold-border)" }} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
                    {parts.map((p) => <ProductCard key={p.name} {...p} />)}
                  </div>
                </div>
              ))}
              {visible3WParts.length === 0 && <p style={{ fontFamily: "Nunito Sans, sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "16px", textAlign: "center", padding: "48px 0" }}>No parts found matching &ldquo;{search}&rdquo;</p>}
            </>
          )}
        </div>
      </section>

      {/* Don't See Your Part banner */}
      <section style={{ padding: "64px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>Custom Sourcing</p>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 4vw, 44px)", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>
            Don&apos;t See the Part You Need?
          </h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.65)", lineHeight: "1.8", marginBottom: "36px", maxWidth: "680px", margin: "0 auto 36px" }}>
            Our listed catalogue covers our core range — but we can source and export a far wider selection of 2-wheeler and 3-wheeler spare parts from India&apos;s manufacturing belt. If you need a part that isn&apos;t listed, tell us. We will procure it for you.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold-fill" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 32px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
              Tell Us What You Need →
            </Link>
            <a href="https://wa.me/917087866759" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", background: "#25D366", color: "#FFFFFF", padding: "14px 32px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
              WhatsApp Us Directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
