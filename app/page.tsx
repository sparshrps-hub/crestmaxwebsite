import Link from "next/link";
import { Shield, Package, Handshake } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import MarketCard from "@/components/MarketCard";
import { markets } from "@/lib/markets";

export default function HomePage() {
  const featuredMarkets = markets.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        background: "var(--cm-navy-deep)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "70px",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.03) 60px, rgba(201,168,76,0.03) 61px)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "900px", padding: "0 24px", textAlign: "center" }}>
          <p style={{
            fontFamily: "IBM Plex Mono, monospace",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "var(--cm-gold)",
            marginBottom: "24px",
          }}>
            B2B Export · India to Africa
          </p>

          <h1 style={{
            fontFamily: "Rajdhani, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(48px, 9vw, 88px)",
            letterSpacing: "4px",
            lineHeight: "0.95",
            color: "#FFFFFF",
            textTransform: "uppercase",
            margin: "0 0 32px 0",
          }}>
            India&apos;s Trusted<br />
            <span style={{ color: "var(--cm-gold)" }}>Spare Parts</span><br />
            Partner for Africa
          </h1>

          <div className="gold-rule" style={{ maxWidth: "320px", margin: "0 auto 28px" }} />

          <p style={{
            fontFamily: "Nunito Sans, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,0.6)",
            lineHeight: "1.75",
            maxWidth: "640px",
            margin: "0 auto 40px",
          }}>
            Premium 2-Wheeler &amp; 3-Wheeler spare parts — exported from India to wholesale importers, distributors, and traders across 12+ African nations.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/products"
              className="btn-gold-fill"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                background: "var(--cm-gold)",
                color: "var(--cm-navy-deep)",
                padding: "14px 36px",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              Browse Products
            </Link>
            <Link
              href="/contact"
              style={{
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                background: "transparent",
                color: "#FFFFFF",
                border: "1.5px solid rgba(255,255,255,0.5)",
                padding: "14px 36px",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              Enquire Now
            </Link>
          </div>
        </div>

        {/* Ticker */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "var(--cm-navy-mid)",
          borderTop: "1px solid var(--cm-gold-border)",
          overflow: "hidden",
          padding: "12px 0",
        }}>
          <div className="ticker-inner" style={{ display: "flex", whiteSpace: "nowrap" }}>
            {[1, 2].map((i) => (
              <span key={i} style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "12px",
                color: "var(--cm-gold)",
                letterSpacing: "3px",
              }}>
                &nbsp;&nbsp;BOXER &nbsp;·&nbsp; HLX &nbsp;·&nbsp; CT100 &nbsp;·&nbsp; BAJAJ RE &nbsp;·&nbsp; TUK TUK &nbsp;·&nbsp; KEKE NAPEP &nbsp;·&nbsp; NIGERIA &nbsp;·&nbsp; GHANA &nbsp;·&nbsp; KENYA &nbsp;·&nbsp; TANZANIA &nbsp;·&nbsp; UGANDA &nbsp;·&nbsp; ETHIOPIA &nbsp;·&nbsp; FOB MUMBAI &nbsp;·&nbsp; FOB CHENNAI &nbsp;·&nbsp; B2B WHOLESALE &nbsp;·&nbsp;
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "var(--cm-navy-mid)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "40px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "32px",
          textAlign: "center",
        }}>
          {[
            { stat: "58+", label: "Spare Part Categories" },
            { stat: "12+", label: "African Nations Served" },
            { stat: "FOB", label: "Mumbai / Chennai" },
            { stat: "B2B", label: "Wholesale Only" },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <p style={{
                fontFamily: "Rajdhani, sans-serif",
                fontWeight: 700,
                fontSize: "42px",
                color: "var(--cm-gold)",
                letterSpacing: "2px",
                lineHeight: "1",
                margin: "0 0 6px 0",
              }}>{stat}</p>
              <p style={{
                fontFamily: "Nunito Sans, sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                margin: 0,
              }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section style={{ padding: "96px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading
            label="Our Range"
            title="What We Supply"
            subtitle="Complete aftermarket spare parts for the most popular vehicles across Africa."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            <div className="card-glow" style={{
              background: "var(--cm-navy-mid)",
              borderTop: "3px solid var(--cm-gold)",
              borderRadius: "2px",
              padding: "36px 32px",
            }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "12px" }}>2-Wheeler</p>
              <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px" }}>
                Motorcycle Parts
              </h3>
              <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "24px" }}>
                For Boxer, HLX, CT100 &amp; Compatible Models
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {["Engine & Drivetrain", "Clutch & Transmission", "Brakes & Suspension", "Filters & Fuel", "Electrical & Ignition", "Drive & Wheels"].map((item) => (
                  <li key={item} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.65)", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "var(--cm-gold)", fontWeight: 700 }}>—</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/products" style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "1px", color: "var(--cm-gold)", textDecoration: "none", textTransform: "uppercase" }}>
                View Full Range →
              </Link>
            </div>

            <div className="card-glow" style={{
              background: "var(--cm-navy-mid)",
              borderTop: "3px solid var(--cm-gold)",
              borderRadius: "2px",
              padding: "36px 32px",
            }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "12px" }}>3-Wheeler</p>
              <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px" }}>
                Auto Rickshaw Parts
              </h3>
              <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.5)", marginBottom: "24px" }}>
                For Bajaj RE, Tuk Tuk, Keke Napep, TVS King
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {["Drivetrain & Propeller", "Differential & Rear Axle", "Engine & Transmission", "Clutch & Brakes", "Suspension", "Bearings & Seals"].map((item) => (
                  <li key={item} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.65)", display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ color: "var(--cm-gold)", fontWeight: 700 }}>—</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/products" style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "1px", color: "var(--cm-gold)", textDecoration: "none", textTransform: "uppercase" }}>
                View Full Range →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Brands Strip */}
      <section style={{ background: "var(--cm-navy-mid)", padding: "40px 24px", borderTop: "1px solid var(--cm-border)", borderBottom: "1px solid var(--cm-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", textAlign: "center", marginBottom: "24px" }}>
            Compatible With Leading Brands
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            {["BAJAJ", "HERO MOTOCORP", "HONDA", "TVS", "YAMAHA", "PIAGGIO"].map((brand) => (
              <span key={brand} style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "2px",
                color: "rgba(255,255,255,0.5)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "8px 20px",
                borderRadius: "2px",
              }}>
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Preview */}
      <section style={{ padding: "96px 24px", background: "var(--cm-navy-deep)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Our Commitment" title="Why Crestmax" subtitle="Built for Africa's wholesale trade — quality parts, reliable logistics, direct relationships." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { icon: <Shield size={28} color="var(--cm-gold)" />, title: "OEM-Grade Quality", desc: "Precision-manufactured to match original specifications. No compromises." },
              { icon: <Package size={28} color="var(--cm-gold)" />, title: "Export-Ready Packaging", desc: "Bulk and retail pack formats built for long-haul African trade routes." },
              { icon: <Handshake size={28} color="var(--cm-gold)" />, title: "Relationship-First Trade", desc: "Direct communication with our team — no middlemen, transparent pricing." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card-glow" style={{
                background: "var(--cm-navy-mid)",
                border: "1px solid var(--cm-gold-border)",
                borderRadius: "2px",
                padding: "32px",
              }}>
                <div style={{ marginBottom: "16px" }}>{icon}</div>
                <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "20px", letterSpacing: "1px", color: "#FFFFFF", marginBottom: "10px", textTransform: "uppercase" }}>
                  {title}
                </h3>
                <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: "1.7", margin: 0 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/why-crestmax" style={{
              fontFamily: "Nunito Sans, sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--cm-gold)",
              textDecoration: "none",
              border: "1px solid var(--cm-gold-border)",
              padding: "10px 28px",
              borderRadius: "2px",
              display: "inline-block",
            }}>
              See All Reasons →
            </Link>
          </div>
        </div>
      </section>

      {/* Markets Preview */}
      <section style={{ padding: "96px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Our Reach" title="Serving Africa's Largest Markets" subtitle="Crestmax parts reach wholesale importers and distributors across 12+ African nations." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px", marginBottom: "40px" }}>
            {featuredMarkets.map((m) => <MarketCard key={m.name} {...m} />)}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/markets" style={{
              fontFamily: "Nunito Sans, sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--cm-gold)",
              textDecoration: "none",
              border: "1px solid var(--cm-gold-border)",
              padding: "10px 28px",
              borderRadius: "2px",
              display: "inline-block",
            }}>
              See All Markets →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: "linear-gradient(135deg, var(--cm-gold-deep), var(--cm-gold-bright))", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "Rajdhani, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(32px, 5vw, 52px)",
            letterSpacing: "3px",
            lineHeight: "1.05",
            color: "var(--cm-navy-deep)",
            textTransform: "uppercase",
            margin: "0 0 16px 0",
          }}>
            Ready to Stock Up?<br />Let&apos;s Talk.
          </h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(13,27,42,0.7)", marginBottom: "32px", lineHeight: "1.7" }}>
            Send us your parts list — we&apos;ll respond within 24 hours with pricing and availability.
          </p>
          <Link href="/contact" className="btn-gold-fill" style={{
            fontFamily: "Rajdhani, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            background: "var(--cm-navy-deep)",
            color: "#FFFFFF",
            padding: "16px 48px",
            borderRadius: "2px",
            textDecoration: "none",
            display: "inline-block",
          }}>
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
