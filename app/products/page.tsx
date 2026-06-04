import type { Metadata } from "next";
import ProductsClientUI from "@/components/ProductsClientUI";

export const metadata: Metadata = {
  title: "2-Wheeler & 3-Wheeler Spare Parts — Wholesale Export India to Africa | CrestMAX",
  description:
    "Browse CrestMAX's wholesale spare parts catalogue for Bajaj, TVS, Hero motorcycles and auto rickshaws. OEM-compatible parts exported from India to Nigeria, Ghana, Kenya and 12+ African nations.",
  alternates: { canonical: "https://crestmax.in/products" },
  openGraph: {
    title: "2-Wheeler & 3-Wheeler Spare Parts — Wholesale Export India to Africa | CrestMAX",
    description:
      "Browse CrestMAX's wholesale spare parts catalogue for Bajaj, TVS, Hero motorcycles and auto rickshaws. OEM-compatible parts exported from India to Nigeria, Ghana, Kenya and 12+ African nations.",
    url: "https://crestmax.in/products",
    type: "website",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "2-Wheeler and 3-Wheeler Spare Parts — Wholesale Export India to Africa",
  description: "Wholesale spare parts exported from India for Bajaj, TVS, Hero motorcycles and auto rickshaws across African markets",
  url: "https://crestmax.in/products",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Bajaj Boxer Spare Parts", url: "https://crestmax.in/products/bajaj-boxer" },
    { "@type": "ListItem", position: 2, name: "TVS HLX Spare Parts", url: "https://crestmax.in/products/tvs-hlx" },
    { "@type": "ListItem", position: 3, name: "CT100 Spare Parts", url: "https://crestmax.in/products/ct100" },
    { "@type": "ListItem", position: 4, name: "Bajaj RE / Keke Napep Parts", url: "https://crestmax.in/products/bajaj-re" },
    { "@type": "ListItem", position: 5, name: "TVS King Three-Wheeler Parts", url: "https://crestmax.in/products/tvs-king" },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://crestmax.in" },
    { "@type": "ListItem", position: 2, name: "Products", item: "https://crestmax.in/products" },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProductsClientUI />
    </>
  );
}
