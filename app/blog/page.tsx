import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blogPosts";

export const metadata: Metadata = {
  title: "CrestMAX Blog — India to Africa Spare Parts Import Guides & Resources",
  description: "Practical guides for African importers buying 2-wheeler and 3-wheeler spare parts from India. Bajaj, TVS, CT100 parts. Import process, Incoterms, parts guides, and more.",
  alternates: { canonical: "https://crestmax.in/blog" },
  openGraph: {
    title: "CrestMAX Blog — India to Africa Spare Parts Guides",
    description: "Practical guides for African importers of Bajaj, TVS and CT100 spare parts from India.",
    url: "https://crestmax.in/blog",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://crestmax.in/blog" },
  ],
};

const categoryColors: Record<string, string> = {
  "Import Guide": "#4A90E2",
  "Parts Guide": "#27AE60",
  "Buyer's Guide": "#F39C12",
  "Technical Guide": "#9B59B6",
  "Trade Guide": "#E74C3C",
};

const sortedPosts = [...blogPosts].sort(
  (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
);

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "80px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "5px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Resources</p>
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(30px, 5vw, 52px)", letterSpacing: "3px", lineHeight: "1.05", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            CrestMAX Blog —<br />
            <span style={{ color: "var(--cm-gold)" }}>India to Africa Import Guides</span>
          </h1>
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8" }}>
            Practical guides for African importers, distributors, and dealers buying 2-wheeler and 3-wheeler spare parts directly from India. Import process, parts guides, Incoterms, quality comparisons, and more.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "28px" }}>
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", display: "flex", flexDirection: "column", background: "var(--cm-navy-mid)", border: "1px solid var(--cm-gold-border)", borderRadius: "2px", overflow: "hidden", transition: "border-color 0.2s" }}
              >
                {/* Category bar */}
                <div style={{ height: "3px", background: categoryColors[post.category] ?? "var(--cm-gold)" }} />

                <div style={{ padding: "28px 24px", display: "flex", flexDirection: "column", flex: 1, gap: "12px" }}>
                  {/* Meta */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "2px", color: categoryColors[post.category] ?? "var(--cm-gold)", textTransform: "uppercase" }}>
                      {post.category}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "10px" }}>·</span>
                    <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "1px", color: "rgba(255,255,255,0.3)" }}>
                      {post.readingTime} min read
                    </span>
                  </div>

                  {/* Title */}
                  <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "20px", letterSpacing: "1px", color: "#FFFFFF", textTransform: "uppercase", lineHeight: "1.2", margin: 0 }}>
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: "1.7", margin: 0, flex: 1 }}>
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "auto" }}>
                    <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.5px" }}>
                      {formatDate(post.publishDate)}
                    </span>
                    <span style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "2px", color: "var(--cm-gold)", textTransform: "uppercase" }}>
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)", textAlign: "center" }}>
        <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "16px" }}>Ready to Import?</p>
        <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(24px, 4vw, 40px)", letterSpacing: "3px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "12px" }}>
          Request a Wholesale Quote
        </h2>
        <p style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "480px", margin: "0 auto 36px" }}>
          Send us your parts list. We respond with FOB/CIF pricing within 24 hours.
        </p>
        <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "14px 40px", borderRadius: "2px", textDecoration: "none", display: "inline-block" }}>
          Get a Quote
        </Link>
      </section>
    </>
  );
}
