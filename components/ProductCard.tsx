import Link from "next/link";

type ProductCardProps = {
  name: string;
  category: string;
  models: string[];
};

export default function ProductCard({ name, category, models }: ProductCardProps) {
  return (
    <div
      className="card-glow"
      style={{
        background: "var(--cm-navy-mid)",
        borderLeft: "3px solid var(--cm-gold)",
        borderRadius: "2px",
        padding: "18px 20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <span style={{
        fontFamily: "IBM Plex Mono, monospace",
        fontSize: "10px",
        fontWeight: 600,
        color: "var(--cm-gold)",
        letterSpacing: "2px",
        textTransform: "uppercase",
      }}>
        {category}
      </span>
      <h3 style={{
        fontFamily: "Rajdhani, sans-serif",
        fontWeight: 600,
        fontSize: "18px",
        color: "#FFFFFF",
        margin: 0,
        letterSpacing: "0.5px",
      }}>
        {name}
      </h3>
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {models.map((m) => (
          <span key={m} style={{
            fontFamily: "IBM Plex Mono, monospace",
            fontSize: "10px",
            color: "rgba(255,255,255,0.5)",
            background: "rgba(255,255,255,0.05)",
            padding: "2px 8px",
            borderRadius: "2px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            {m}
          </span>
        ))}
      </div>
      <Link
        href="/contact"
        className="enquire-link"
        style={{
          fontFamily: "Nunito Sans, sans-serif",
          fontWeight: 600,
          fontSize: "12px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: "var(--cm-gold)",
          textDecoration: "none",
          marginTop: "4px",
          transition: "opacity 0.2s",
        }}
      >
        Enquire →
      </Link>
    </div>
  );
}
