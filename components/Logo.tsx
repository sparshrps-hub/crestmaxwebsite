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
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <span
          style={{
            fontFamily: "Rajdhani, sans-serif",
            fontWeight: 700,
            fontSize: isLg ? "36px" : "26px",
            letterSpacing: "0.5px",
            color: "#FFFFFF",
          }}
        >
          CREST
        </span>
        <span
          style={{
            fontFamily: "Rajdhani, sans-serif",
            fontWeight: 700,
            fontSize: isLg ? "36px" : "26px",
            letterSpacing: "0.5px",
            color: "#C9A84C",
          }}
        >
          MAX
        </span>
      </div>
      <span
        style={{
          fontFamily: "Nunito Sans, sans-serif",
          fontWeight: 400,
          fontSize: isLg ? "10px" : "8px",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "rgba(201,168,76,0.75)",
          marginTop: "2px",
          whiteSpace: "nowrap",
        }}
      >
        A Venture by RPS Infrastructures
      </span>
    </div>
  );
}
