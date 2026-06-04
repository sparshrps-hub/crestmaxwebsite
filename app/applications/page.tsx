import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Applications & Compatibility | 2-Wheeler & 3-Wheeler Spare Parts | CrestMAX",
  description:
    "Spare parts for Bajaj Boxer, TVS HLX, CT100, Bajaj RE/Keke Napep and TVS King — OEM-compatible Indian parts built for Africa's most popular vehicles.",
  alternates: { canonical: "https://crestmaxwebsite.vercel.app/applications" },
};

const twoWheelers = [
  { slug: "bajaj-boxer", model: "Bajaj Boxer", brand: "Bajaj", prevalence: "Dominant in Nigeria, Ghana, Uganda. High aftermarket demand for Bajaj spare parts wholesale.", categories: ["Engine & Drivetrain", "Clutch & Transmission", "Brakes & Suspension", "Electrical & Ignition", "Filters & Fuel", "Drive & Wheels"] },
  { slug: "tvs-hlx", model: "TVS HLX", brand: "TVS", prevalence: "Popular across East Africa — Kenya, Tanzania, Ethiopia. Key Boda Boda spare parts supplier.", categories: ["Engine & Drivetrain", "Clutch & Transmission", "Brakes & Suspension", "Electrical & Ignition", "Filters & Fuel", "Controls & Cables"] },
  { slug: "ct100", model: "CT100 Compatible", brand: "Honda / TVS", prevalence: "Regional favourite in West Africa — Nigeria, Ghana, Francophone Africa. 2 wheeler spare parts Nigeria.", categories: ["Filters & Fuel", "Electrical & Ignition", "Brakes & Suspension", "Engine & Drivetrain", "Lights & Indicators", "Body & Rubber"] },
];

const threeWheelers = [
  { slug: "bajaj-re", model: "Bajaj RE / Keke Napep", brand: "Bajaj", prevalence: "Backbone of urban transport in Nigeria, Kenya, Ethiopia. Bajaj RE spare parts export from India.", categories: ["Drivetrain & Propeller", "Differential & Rear Axle", "Engine & Transmission", "Clutch & Brakes", "Suspension", "Bearings & Seals"] },
  { slug: "tvs-king", model: "TVS King", brand: "TVS", prevalence: "Dominant 3-wheeler in Uganda, Tanzania, Rwanda. TVS King parts wholesale from India.", categories: ["Drivetrain", "Brakes", "Engine", "Clutch", "Filters & Fuel", "Bearings & Seals"] },
  { slug: "bajaj-re", model: "Tuk Tuk (Generic)", brand: "Multi-brand", prevalence: "Widely used across Central & West Africa. Tuk Tuk spare parts export India. Most Bajaj RE parts are cross-compatible.", categories: ["Drivetrain & Propeller", "Engine & Transmission", "Clutch & Brakes", "Filters & Fuel"] },
];

function VehicleCard({ slug, model, brand, prevalence, categories }: { slug: string; model: string; brand: string; prevalence: string; categories: string[] }) {
  return (
    <div className="card-glow" style={{ background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", padding: "32px" }}>
      <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "3px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "8px" }}>{brand}</p>
      <h3 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "26px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "8px" }}>{model}</h3>
      <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.45)", marginBottom: "20px", lineHeight: "1.6" }}>{prevalence}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
        {categories.map((c) => (
          <span key={c} style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "1px", color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: "4px 10px", borderRadius: "2px", textTransform: "uppercase" }}>{c}</span>
        ))}
      </div>
      <Link href={`/products/${slug}`} style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 600, fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", color: "var(--cm-gold)", textDecoration: "none" }}>
        View Parts →
      </Link>
    </div>
  );
}

export default function ApplicationsPage() {
  return (
    <>
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "64px", textAlign: "center", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Compatibility Guide</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 5vw, 54px)", letterSpacing: "3px", lineHeight: "1.0", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            Parts Built for the<br /><span style={{ color: "var(--cm-gold)" }}>Vehicles Africa Runs On</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.55)", lineHeight: "1.75" }}>
            Our catalogue is curated specifically for the most popular 2-wheelers and 3-wheelers across African markets. OEM-compatible parts sourced from India&apos;s manufacturing belt.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Motorcycles" title="2-Wheeler Vehicles" align="left" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {twoWheelers.map((v) => <VehicleCard key={v.model} {...v} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading label="Auto Rickshaws" title="3-Wheeler Vehicles" align="left" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
            {threeWheelers.map((v) => <VehicleCard key={v.model} {...v} />)}
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 24px", background: "var(--cm-navy-mid)", borderTop: "1px solid var(--cm-gold-border)", borderBottom: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <SectionHeading label="Brands" title="Compatible OEM Brands" />
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginBottom: "28px" }}>
            {["BAJAJ", "TVS", "HONDA", "HERO MOTOCORP", "YAMAHA", "PIAGGIO"].map((brand) => (
              <span key={brand} style={{ fontFamily: "IBM Plex Mono, monospace", fontWeight: 600, fontSize: "13px", letterSpacing: "2px", color: "rgba(255,255,255,0.6)", background: "var(--cm-navy-deep)", border: "1px solid var(--cm-gold-border)", padding: "12px 24px", borderRadius: "2px" }}>
                {brand}
              </span>
            ))}
          </div>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.3)", maxWidth: "600px", margin: "0 auto" }}>
            All CrestMAX parts are aftermarket replacements manufactured to OEM specifications. We are not affiliated with or endorsed by these brands.
          </p>
        </div>
      </section>
    </>
  );
}
