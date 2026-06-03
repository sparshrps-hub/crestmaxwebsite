type SectionHeadingProps = {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export default function SectionHeading({ label, title, subtitle, align = "center", dark = true }: SectionHeadingProps) {
  const textAlign = align === "center" ? "center" : "left";
  const textColor = dark ? "#FFFFFF" : "var(--cm-navy)";

  return (
    <div style={{ textAlign, marginBottom: "48px" }}>
      {label && (
        <p style={{
          fontFamily: "IBM Plex Mono, monospace",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "var(--cm-gold)",
          marginBottom: "12px",
        }}>
          {label}
        </p>
      )}
      <h2 style={{
        fontFamily: "Rajdhani, sans-serif",
        fontWeight: 700,
        fontSize: "clamp(32px, 5vw, 52px)",
        letterSpacing: "3px",
        lineHeight: "1.0",
        color: textColor,
        textTransform: "uppercase",
        margin: "0 0 16px 0",
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontFamily: "Nunito Sans, sans-serif",
          fontWeight: 300,
          fontSize: "16px",
          color: dark ? "rgba(255,255,255,0.55)" : "rgba(13,27,42,0.65)",
          lineHeight: "1.7",
          maxWidth: align === "center" ? "600px" : "100%",
          margin: align === "center" ? "0 auto" : "0",
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
