import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import QuickEnquireSidebar from "@/components/QuickEnquireSidebar";
import { getModelBySlug } from "@/lib/models";
import { partsByModel, type ModelSlug } from "@/lib/products";

type Props = {
  params: Promise<{ model: string }>;
};

export async function generateStaticParams() {
  return ["bajaj-boxer", "tvs-hlx", "ct100", "bajaj-re", "tvs-king"].map((model) => ({ model }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { model } = await params;
  const metaMap: Record<string, { title: string; description: string }> = {
    "bajaj-boxer": {
      title: "Bajaj Boxer Spare Parts Exporter to Africa | Crestmax Pvt Ltd",
      description: "Export-quality Bajaj Boxer spare parts from India to Africa. Wholesale B2B supply — engine, clutch, brakes, electrical, and more.",
    },
    "tvs-hlx": {
      title: "TVS HLX Spare Parts Exporter to Africa | Crestmax Pvt Ltd",
      description: "Export-quality TVS HLX spare parts from India to Africa. Full parts range for East African markets.",
    },
    "ct100": {
      title: "CT100 Compatible Spare Parts Exporter to Africa | Crestmax Pvt Ltd",
      description: "CT100-compatible spare parts exported from India to West Africa. Wholesale B2B supply.",
    },
    "bajaj-re": {
      title: "Bajaj RE / Keke Napep Spare Parts Exporter | Crestmax Pvt Ltd",
      description: "Bajaj RE and Keke Napep spare parts exported from India to Nigeria, Kenya, Ethiopia and across Africa.",
    },
    "tvs-king": {
      title: "TVS King Three Wheeler Spare Parts Exporter to Africa | Crestmax Pvt Ltd",
      description: "TVS King spare parts exported from India to Uganda, Tanzania, Kenya. Wholesale B2B supply.",
    },
  };
  return metaMap[model] ?? { title: "Spare Parts | Crestmax Pvt Ltd" };
}

export default async function ModelPage({ params }: Props) {
  const { model } = await params;
  const vehicleModel = getModelBySlug(model);
  const parts = partsByModel[model as ModelSlug];

  if (!vehicleModel || !parts) notFound();

  const groupByCategory = (pts: typeof parts) => {
    const groups: Record<string, typeof pts> = {};
    for (const p of pts) {
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
        borderBottom: "1px solid var(--cm-gold-border)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Link href="/" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
            <Link href="/products" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Products</Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
            <span style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)" }}>{vehicleModel.name}</span>
          </nav>

          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "12px" }}>
            {vehicleModel.brand} · {vehicleModel.type === "2-wheeler" ? "Two Wheeler" : "Three Wheeler"}
          </p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(40px, 6vw, 68px)", letterSpacing: "4px", lineHeight: "0.95", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 16px" }}>
            {vehicleModel.name}
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "16px" }}>
            {vehicleModel.tagline}
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {vehicleModel.markets.map((m) => (
              <span key={m} style={{
                fontFamily: "IBM Plex Mono, monospace",
                fontSize: "11px",
                letterSpacing: "1px",
                color: "var(--cm-gold)",
                background: "rgba(201,168,76,0.08)",
                border: "1px solid var(--cm-gold-border)",
                padding: "4px 12px",
                borderRadius: "2px",
              }}>
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section style={{ padding: "64px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr min(320px, 100%)", gap: "48px", alignItems: "start" }}>
          {/* Parts List */}
          <div>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.4)", marginBottom: "40px" }}>
              {vehicleModel.description}
            </p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "22px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "32px" }}>
              Parts Available for This Model
            </h2>
            {Object.entries(groupByCategory(parts)).map(([category, catParts]) => (
              <div key={category} style={{ marginBottom: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                  <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "18px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", margin: 0 }}>
                    {category}
                  </h3>
                  <div style={{ flex: 1, height: "1px", background: "var(--cm-gold-border)" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "14px" }}>
                  {catParts.map((p) => <ProductCard key={p.name} {...p} />)}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div>
            <QuickEnquireSidebar modelName={vehicleModel.name} />
          </div>
        </div>
      </section>
    </>
  );
}
