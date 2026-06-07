import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import QuickEnquireSidebar from "@/components/QuickEnquireSidebar";
import { getModelBySlug } from "@/lib/models";
import { partsByModel, type ModelSlug } from "@/lib/products";

type Props = { params: Promise<{ model: string }> };

export async function generateStaticParams() {
  return ["bajaj-boxer", "tvs-hlx", "ct100", "bajaj-re", "tvs-king"].map((model) => ({ model }));
}

const metaMap: Record<string, { title: string; description: string; canonical: string }> = {
  "bajaj-boxer": {
    title: "Bajaj Boxer Spare Parts — Wholesale Export from India | CrestMAX",
    description: "Export-quality Bajaj Boxer spare parts from India to Africa. Wholesale B2B supply — engine, clutch, brakes, electrical, and more. FOB Mumbai or CIF.",
    canonical: "https://crestmax.in/products/bajaj-boxer",
  },
  "tvs-hlx": {
    title: "TVS HLX Spare Parts — Wholesale Indian Exporter | CrestMAX",
    description: "TVS HLX spare parts exported from India to Kenya, Tanzania, Uganda and East Africa. Wholesale B2B supply. FOB Mumbai or CIF any African port.",
    canonical: "https://crestmax.in/products/tvs-hlx",
  },
  ct100: {
    title: "CT100 Motorcycle Spare Parts — Export from India to Africa | CrestMAX",
    description: "CT100-compatible spare parts exported wholesale from India to West Africa. FOB Mumbai or CIF.",
    canonical: "https://crestmax.in/products/ct100",
  },
  "bajaj-re": {
    title: "Bajaj RE / Keke Napep Parts — India to Africa Export | CrestMAX",
    description: "Bajaj RE and Keke Napep spare parts exported from India to Nigeria, Kenya, Ethiopia and across Africa. Wholesale B2B supply.",
    canonical: "https://crestmax.in/products/bajaj-re",
  },
  "tvs-king": {
    title: "TVS King Three-Wheeler Parts — B2B India Export | CrestMAX",
    description: "TVS King spare parts exported from India to Uganda, Tanzania, Kenya. Wholesale B2B supply. FOB Mumbai or CIF any African port.",
    canonical: "https://crestmax.in/products/tvs-king",
  },
};

const h1Map: Record<string, string> = {
  "bajaj-boxer": "Bajaj Boxer Spare Parts — Wholesale Export from India",
  "tvs-hlx": "TVS HLX Spare Parts — Wholesale Indian Exporter",
  ct100: "CT100 Motorcycle Spare Parts — Export from India to Africa",
  "bajaj-re": "Bajaj RE / Keke Napep Parts — India to Africa Export",
  "tvs-king": "TVS King Three-Wheeler Parts — B2B India Export",
};

const descriptionMap: Record<string, { heading: string; body: string }> = {
  "bajaj-boxer": {
    heading: "About Bajaj Boxer Spare Parts — Export from India",
    body: `The Bajaj Boxer is one of the most widely used motorcycles across West and East Africa, particularly in Nigeria, Ghana, and Uganda. As a wholesale spare parts exporter from India, CrestMAX supplies a complete range of Bajaj Boxer aftermarket parts — engine components, clutch assemblies, brake parts, electrical systems, filters, and drive components.

All Bajaj Boxer parts supplied by CrestMAX are manufactured to vehicle-compatible specifications by verified Indian manufacturers. We do not supply grey market or unverified stock. Each batch is checked for fitment and quality before packing for export.

We ship Bajaj Boxer spare parts FOB from Mumbai or CIF to your designated African port. Full export documentation is included: commercial invoice, packing list, and certificate of origin. Wholesale importers and distributors in Nigeria, Ghana, Uganda, and across Africa — contact us for pricing and availability.`,
  },
  "bajaj-re": {
    heading: "Bajaj RE / Keke Napep Spare Parts — Wholesale India Export",
    body: `The Bajaj RE three-wheeler — known as Keke Napep in Nigeria, Tuk Tuk across East Africa, and Auto Rickshaw across the continent — is the backbone of urban transport in dozens of African cities. CrestMAX is a dedicated wholesale exporter of Bajaj RE spare parts from India.

Our Bajaj RE / Keke Napep parts catalogue covers: drivetrain and propeller shaft components, differential and rear axle parts, engine and transmission assemblies, clutch and brake components, suspension parts, and bearings and seals. Whether you supply mechanics directly or stock a wholesale warehouse, we can fulfil your order requirements.

Sourced from Ludhiana and India's auto parts manufacturing clusters, our Bajaj RE parts are built to match original specifications. We export to importers in Nigeria, Kenya, Ethiopia, Tanzania, Ghana, and across 12+ African nations. Contact us for wholesale pricing and lead times.`,
  },
  "tvs-hlx": {
    heading: "TVS HLX Spare Parts — Wholesale Export to Africa",
    body: `The TVS HLX 100 and HLX 125 are among the most popular motorcycles in East Africa — particularly in Kenya, Tanzania, and Uganda — where they are widely used for Boda Boda motorcycle taxi operations. CrestMAX exports a full range of TVS HLX spare parts from India to wholesale buyers across these markets.

Our TVS HLX parts include engine components, clutch and gearbox parts, brake assemblies, electrical and ignition systems, filters, suspension components, and wheel and drive parts. All parts are aftermarket-compatible and sourced from verified Indian manufacturers.

We export TVS HLX parts FOB Mumbai or CIF to Mombasa, Dar es Salaam, Kampala, and other East African ports. Wholesale pricing available for importers and distributors. Contact us with your requirements.`,
  },
  ct100: {
    heading: "CT100 Motorcycle Spare Parts — Export from India",
    body: `The Bajaj CT100 is a high-volume motorcycle in African markets, known for its fuel efficiency and low maintenance requirements. CrestMAX exports CT100 spare parts wholesale from India to importers and distributors across Africa.

Our CT100 parts catalogue includes engine and drivetrain components, clutch and transmission parts, brake and suspension assemblies, electrical systems, filters, and body parts. Sourced directly from Indian manufacturers and checked against OEM specifications.

Available for export FOB Mumbai/Chennai or CIF any African port. We serve wholesale buyers in Nigeria, Ghana, Kenya, Tanzania, Uganda, and Ethiopia. Send us your parts list for pricing and availability.`,
  },
  "tvs-king": {
    heading: "TVS King Three-Wheeler Spare Parts — India to Africa Export",
    body: `The TVS King is one of the most widely deployed three-wheelers across Africa, competing directly with the Bajaj RE in urban transport markets. CrestMAX exports TVS King spare parts wholesale from India to African importers and distributors.

Our TVS King parts include engine and transmission components, differential and rear axle parts, clutch and brake assemblies, suspension components, electrical parts, and body panels. All sourced from Indian manufacturers with vehicle-compatible specifications.

We ship to all major African ports — Lagos, Mombasa, Dar es Salaam, Kampala, Nairobi, and more. Full documentation provided including commercial invoice, packing list, and certificate of origin. Contact us for wholesale pricing and availability.`,
  },
};

const relatedMap: Record<string, { label: string; href: string }[]> = {
  "bajaj-boxer": [{ label: "Bajaj RE / Keke Napep Parts", href: "/products/bajaj-re" }, { label: "CT100 Parts", href: "/products/ct100" }, { label: "TVS HLX Parts", href: "/products/tvs-hlx" }],
  "tvs-hlx": [{ label: "Bajaj Boxer Parts", href: "/products/bajaj-boxer" }, { label: "CT100 Parts", href: "/products/ct100" }, { label: "TVS King Parts", href: "/products/tvs-king" }],
  ct100: [{ label: "Bajaj Boxer Parts", href: "/products/bajaj-boxer" }, { label: "TVS HLX Parts", href: "/products/tvs-hlx" }, { label: "Bajaj RE Parts", href: "/products/bajaj-re" }],
  "bajaj-re": [{ label: "TVS King Parts", href: "/products/tvs-king" }, { label: "Bajaj Boxer Parts", href: "/products/bajaj-boxer" }, { label: "TVS HLX Parts", href: "/products/tvs-hlx" }],
  "tvs-king": [{ label: "Bajaj RE / Keke Napep Parts", href: "/products/bajaj-re" }, { label: "Bajaj Boxer Parts", href: "/products/bajaj-boxer" }, { label: "CT100 Parts", href: "/products/ct100" }],
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { model } = await params;
  const m = metaMap[model];
  if (!m) return { title: "Spare Parts | CrestMAX" };
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: m.canonical },
    openGraph: {
      title: m.title,
      description: m.description,
      url: m.canonical,
      type: "website",
    },
  };
}

const categoryMap: Record<string, string> = {
  "bajaj-boxer": "2-Wheeler Motorcycle Spare Parts",
  "tvs-hlx": "2-Wheeler Motorcycle Spare Parts",
  ct100: "2-Wheeler Motorcycle Spare Parts",
  "bajaj-re": "3-Wheeler Auto Rickshaw Spare Parts",
  "tvs-king": "3-Wheeler Auto Rickshaw Spare Parts",
};

function buildProductSchema(model: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `https://crestmax.in/products/${model}#product`,
    name: `${name} — Wholesale Export from India`,
    description,
    url: `https://crestmax.in/products/${model}`,
    category: categoryMap[model] ?? "Spare Parts",
    brand: { "@type": "Brand", name: "CrestMAX" },
    manufacturer: {
      "@type": "Organization",
      "@id": "https://crestmax.in/#organization",
      name: "CrestMAX",
      url: "https://crestmax.in",
    },
    offers: {
      "@type": "Offer",
      "@id": `https://crestmax.in/products/${model}#offer`,
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        description: "Wholesale FOB/CIF pricing. Contact for quote.",
      },
      availability: "https://schema.org/InStock",
      url: `https://crestmax.in/products/${model}`,
      seller: {
        "@type": "Organization",
        "@id": "https://crestmax.in/#organization",
        name: "CrestMAX",
      },
      areaServed: { "@type": "Place", name: "Africa" },
    },
  };
}

function buildBreadcrumbSchema(model: string, modelName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://crestmax.in/products" },
      { "@type": "ListItem", position: 3, name: modelName, item: `https://crestmax.in/products/${model}` },
    ],
  };
}

export default async function ModelPage({ params }: Props) {
  const { model } = await params;
  const vehicleModel = getModelBySlug(model);
  const parts = partsByModel[model as ModelSlug];
  if (!vehicleModel || !parts) notFound();

  const desc = descriptionMap[model];
  const related = relatedMap[model] || [];
  const h1 = h1Map[model] || vehicleModel.name;

  const groupByCategory = (pts: typeof parts) => {
    const groups: Record<string, typeof pts> = {};
    for (const p of pts) {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category].push(p);
    }
    return groups;
  };

  const productSchema = buildProductSchema(model, vehicleModel.name, desc?.body.slice(0, 250) || "");
  const breadcrumbSchema = buildBreadcrumbSchema(model, vehicleModel.name);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "174px", paddingBottom: "60px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
            <Link href="/" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
            <Link href="/products" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Products</Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
            <span style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)" }}>{vehicleModel.name}</span>
          </nav>

          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "12px" }}>
            {vehicleModel.brand} · {vehicleModel.type === "2-wheeler" ? "Two Wheeler" : "Three Wheeler"}
          </p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 5vw, 56px)", letterSpacing: "3px", lineHeight: "1.0", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 16px" }}>
            {h1}
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.5)", marginBottom: "16px" }}>{vehicleModel.tagline}</p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {vehicleModel.markets.map((m) => (
              <span key={m} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "1px", color: "var(--cm-gold)", background: "rgba(201,168,76,0.08)", border: "1px solid var(--cm-gold-border)", padding: "4px 12px", borderRadius: "2px" }}>
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Main content + sidebar */}
      <section style={{ padding: "64px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr min(320px, 100%)", gap: "48px", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.5)", marginBottom: "40px", lineHeight: "1.7" }}>
              {vehicleModel.description}
            </p>
            <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "22px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "32px" }}>
              Parts Available for This Model
            </h2>
            {Object.entries(groupByCategory(parts)).map(([category, catParts]) => (
              <div key={category} style={{ marginBottom: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                  <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "18px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", margin: 0 }}>{category}</h3>
                  <div style={{ flex: 1, height: "1px", background: "var(--cm-gold-border)" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "14px" }}>
                  {catParts.map((p) => <ProductCard key={p.name} {...p} />)}
                </div>
              </div>
            ))}

            {/* SEO description block */}
            {desc && (
              <div style={{ marginTop: "56px", padding: "36px", background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px" }}>
                <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "24px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px" }}>
                  {desc.heading}
                </h2>
                {desc.body.split("\n\n").map((para, i) => (
                  <p key={i} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "16px" }}>
                    {para}
                  </p>
                ))}
                <Link href="/contact" style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase", color: "var(--cm-gold)", textDecoration: "none" }}>
                  Enquire about this product →
                </Link>
              </div>
            )}

            {/* Related Products */}
            {related.length > 0 && (
              <div style={{ marginTop: "40px", padding: "24px", background: "var(--cm-navy-deep)", border: "1px solid var(--cm-border)", borderRadius: "2px" }}>
                <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "12px" }}>Also Export</p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  {related.map((r) => (
                    <Link key={r.href} href={r.href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.6)", textDecoration: "none", borderBottom: "1px dashed rgba(255,255,255,0.2)", paddingBottom: "2px", transition: "color 0.2s" }}>
                      {r.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div><QuickEnquireSidebar modelName={vehicleModel.name} /></div>
        </div>
      </section>

      {/* Don't See Your Part */}
      <section style={{ padding: "48px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "28px", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>
            Don&apos;t See the Part You Need?
          </h2>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: "1.8", marginBottom: "24px", maxWidth: "600px", margin: "0 auto 24px" }}>
            Our listed catalogue covers our core range — but we source a far wider selection from India&apos;s manufacturing belt. Tell us what you need and we will procure it.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "12px 28px", borderRadius: "2px", textDecoration: "none" }}>
              Tell Us What You Need →
            </Link>
            <a href="https://wa.me/917087866759" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", background: "#25D366", color: "#FFFFFF", padding: "12px 28px", borderRadius: "2px", textDecoration: "none" }}>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
