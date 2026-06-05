import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CrestMAX — Indian Spare Parts Exporter to Africa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0D1B2A",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold accent bar top */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "6px", background: "#C9A84C", display: "flex" }} />

        {/* Background grid pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          display: "flex",
        }} />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "0px", marginBottom: "24px" }}>
          <span style={{ fontFamily: "Arial", fontWeight: 900, fontSize: "88px", color: "#FFFFFF", letterSpacing: "6px", lineHeight: 1 }}>CREST</span>
          <span style={{ fontFamily: "Arial", fontWeight: 900, fontSize: "88px", color: "#C9A84C", letterSpacing: "6px", lineHeight: 1 }}>MAX</span>
        </div>

        {/* Tagline */}
        <div style={{ fontFamily: "Arial", fontSize: "22px", color: "rgba(255,255,255,0.55)", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "48px" }}>
          A Venture by RPS Infrastructures
        </div>

        {/* Gold divider */}
        <div style={{ width: "80px", height: "2px", background: "#C9A84C", marginBottom: "48px", display: "flex" }} />

        {/* Value proposition */}
        <div style={{ fontFamily: "Arial", fontWeight: 700, fontSize: "30px", color: "#FFFFFF", textAlign: "center", lineHeight: 1.4, maxWidth: "900px" }}>
          2-Wheeler &amp; 3-Wheeler Spare Parts
        </div>
        <div style={{ fontFamily: "Arial", fontSize: "22px", color: "rgba(201,168,76,0.85)", textAlign: "center", marginTop: "12px", letterSpacing: "1px" }}>
          Wholesale Export from India to Africa
        </div>

        {/* Bottom badges */}
        <div style={{ display: "flex", gap: "32px", marginTop: "52px" }}>
          {["Bajaj", "TVS", "Hero", "CT100"].map((brand) => (
            <div key={brand} style={{
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "4px",
              padding: "8px 20px",
              fontFamily: "Arial",
              fontWeight: 700,
              fontSize: "16px",
              color: "#C9A84C",
              letterSpacing: "2px",
              display: "flex",
            }}>
              {brand}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div style={{ position: "absolute", bottom: "28px", right: "40px", fontFamily: "Arial", fontSize: "16px", color: "rgba(255,255,255,0.3)", letterSpacing: "1px", display: "flex" }}>
          crestmax.in
        </div>

        {/* Gold accent bar bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "4px", background: "linear-gradient(90deg, #C9A84C, #A8882E)", display: "flex" }} />
      </div>
    ),
    { ...size }
  );
}
