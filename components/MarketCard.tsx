type MarketCardProps = {
  name: string;
  flag: string;
  port: string;
  note: string;
};

export default function MarketCard({ name, flag, port, note }: MarketCardProps) {
  return (
    <div
      className="card-glow"
      style={{
        background: "var(--cm-navy-mid)",
        border: "1px solid var(--cm-gold-border)",
        borderRadius: "2px",
        padding: "28px 24px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
        <span style={{ fontSize: "28px" }}>{flag}</span>
        <h3 style={{
          fontFamily: "Rajdhani, sans-serif",
          fontWeight: 700,
          fontSize: "22px",
          letterSpacing: "2px",
          color: "#FFFFFF",
          margin: 0,
          textTransform: "uppercase",
        }}>
          {name}
        </h3>
      </div>
      <p style={{
        fontFamily: "IBM Plex Mono, monospace",
        fontSize: "11px",
        color: "var(--cm-gold)",
        marginBottom: "10px",
        letterSpacing: "1px",
      }}>
        ⚓ {port}
      </p>
      <p style={{
        fontFamily: "Nunito Sans, sans-serif",
        fontSize: "14px",
        color: "rgba(255,255,255,0.55)",
        lineHeight: "1.6",
        margin: 0,
      }}>
        {note}
      </p>
    </div>
  );
}
