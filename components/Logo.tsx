import React from "react";

type LogoProps = {
  size?: "sm" | "lg";
};

export default function Logo({ size = "sm" }: LogoProps) {
  const isLg = size === "lg";

  return (
    <div
      style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1 }}
      aria-label="CrestMAX — Indian 2-Wheeler and 3-Wheeler Spare Parts Exporter to Africa"
    >
      {/* CrestMAX wordmark */}
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <span
          style={{
            fontFamily: "Rajdhani, sans-serif",
            fontWeight: 400,
            fontSize: isLg ? "34px" : "24px",
            letterSpacing: "1px",
            color: "#FFFFFF",
          }}
        >
          Crest
        </span>
        <span
          style={{
            fontFamily: "Rajdhani, sans-serif",
            fontWeight: 700,
            fontSize: isLg ? "34px" : "24px",
            letterSpacing: "1px",
            color: "#C9A84C",
          }}
        >
          MAX
        </span>
      </div>
      {/* Venture tagline — increased size for legibility */}
      <span
        style={{
          fontFamily: "Nunito Sans, sans-serif",
          fontWeight: 400,
          fontSize: isLg ? "11px" : "9px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "rgba(201,168,76,0.85)",
          marginTop: isLg ? "3px" : "2px",
          whiteSpace: "nowrap",
        }}
      >
        A Venture by RPS Infrastructures
      </span>
    </div>
  );
}
