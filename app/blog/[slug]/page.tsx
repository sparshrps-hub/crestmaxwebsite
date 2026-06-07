import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPostBySlug } from "@/lib/blogPosts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://crestmax.in/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://crestmax.in/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishDate,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Render simple markdown-like bold (**text**) inside paragraphs
function renderBody(body: string) {
  const paras = body.split("\n\n").filter(Boolean);
  return paras.map((para, i) => {
    // Table detection (lines starting with |)
    const lines = para.split("\n");
    if (lines.every((l) => l.trim().startsWith("|"))) {
      const rows = lines.filter((l) => !l.match(/^\|[-| ]+\|$/));
      const [headerRow, ...dataRows] = rows;
      const headers = headerRow.split("|").filter(Boolean).map((h) => h.trim());
      return (
        <div key={i} style={{ overflowX: "auto", marginBottom: "20px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Nunito Sans, sans-serif", fontSize: "13px" }}>
            <thead>
              <tr>
                {headers.map((h) => (
                  <th key={h} style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", color: "var(--cm-gold)", background: "var(--cm-navy-deep)", padding: "10px 14px", border: "1px solid var(--cm-gold-border)", textAlign: "left" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataRows.map((row, ri) => {
                const cells = row.split("|").filter(Boolean).map((c) => c.trim());
                return (
                  <tr key={ri}>
                    {cells.map((cell, ci) => (
                      <td key={ci} style={{ color: "rgba(255,255,255,0.65)", padding: "10px 14px", border: "1px solid rgba(255,255,255,0.06)", verticalAlign: "top" }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }

    // Bold (**text**) and markdown links ([text](url))
    const renderInline = (text: string) => {
      const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
      return parts.map((part, pi) => {
        if (part.startsWith("**") && part.endsWith("**"))
          return <strong key={pi} style={{ color: "#FFFFFF", fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch)
          return <Link key={pi} href={linkMatch[2]} style={{ color: "var(--cm-gold)", textDecoration: "underline", textDecorationColor: "rgba(201,168,76,0.4)" }}>{linkMatch[1]}</Link>;
        return part;
      });
    };

    // Bullet list
    if (lines.every((l) => l.trim().startsWith("-") || l.trim() === "")) {
      return (
        <ul key={i} style={{ margin: "0 0 20px", padding: "0 0 0 0", listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
          {lines.filter((l) => l.trim().startsWith("-")).map((l, li) => (
            <li key={li} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.7", display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--cm-gold)", flexShrink: 0 }}>—</span>
              <span>{renderInline(l.trim().slice(1).trim())}</span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={i} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: "1.85", marginBottom: "20px" }}>
        {renderInline(para)}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    author: { "@type": "Organization", name: "CrestMAX", url: "https://crestmax.in" },
    publisher: { "@type": "Organization", name: "CrestMAX", url: "https://crestmax.in", logo: { "@type": "ImageObject", url: "https://crestmax.in/logo.png" } },
    url: `https://crestmax.in/blog/${post.slug}`,
    mainEntityOfPage: `https://crestmax.in/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://crestmax.in/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://crestmax.in/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--cm-navy-deep)", paddingTop: "140px", paddingBottom: "60px", borderBottom: "1px solid var(--cm-gold-border)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.02) 60px, rgba(201,168,76,0.02) 61px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            <Link href="/" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
            <Link href="/blog" style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Blog</Link>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
            <span style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)" }}>{post.category}</span>
          </nav>

          {/* Category + date */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", letterSpacing: "2px", color: "var(--cm-gold)", textTransform: "uppercase", background: "rgba(201,168,76,0.08)", border: "1px solid var(--cm-gold-border)", padding: "4px 12px", borderRadius: "2px" }}>
              {post.category}
            </span>
            <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.5px" }}>
              {formatDate(post.publishDate)}
            </span>
            <span style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "11px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.5px" }}>
              {post.readingTime} min read
            </span>
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 48px)", letterSpacing: "2px", lineHeight: "1.1", color: "#FFFFFF", textTransform: "uppercase", margin: "0 0 20px" }}>
            {post.title}
          </h1>

          {/* Excerpt */}
          <p style={{ fontFamily: "Nunito Sans, sans-serif", fontWeight: 300, fontSize: "17px", color: "rgba(255,255,255,0.55)", lineHeight: "1.75", margin: 0 }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article body */}
      <section style={{ padding: "64px 24px 80px", background: "var(--cm-navy)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {post.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: "48px" }}>
              <h2 style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "26px", letterSpacing: "2px", color: "#FFFFFF", textTransform: "uppercase", marginBottom: "20px", paddingBottom: "12px", borderBottom: "1px solid var(--cm-gold-border)" }}>
                {section.heading}
              </h2>
              <div>{renderBody(section.body)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Related links */}
      <section style={{ padding: "60px 24px", background: "var(--cm-navy-deep)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "10px", letterSpacing: "4px", color: "var(--cm-gold)", textTransform: "uppercase", marginBottom: "20px" }}>Related Pages</p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {post.relatedLinks.map(({ label, href }) => (
              <Link key={href} href={href} style={{ fontFamily: "Nunito Sans, sans-serif", fontSize: "13px", color: "var(--cm-gold)", border: "1px solid var(--cm-gold-border)", padding: "10px 18px", borderRadius: "2px", textDecoration: "none" }}>
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back to blog + CTA */}
      <section style={{ padding: "60px 24px", background: "var(--cm-navy)", borderTop: "1px solid var(--cm-gold-border)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <Link href="/blog" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
            ← All Articles
          </Link>
          <Link href="/contact" style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", background: "var(--cm-gold)", color: "var(--cm-navy-deep)", padding: "12px 28px", borderRadius: "2px", textDecoration: "none" }}>
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
