export type VehicleModel = {
  slug: string;
  name: string;
  brand: string;
  type: "2-wheeler" | "3-wheeler";
  tagline: string;
  markets: string[];
  description: string;
  prevalence: string;
};

export const vehicleModels: VehicleModel[] = [
  {
    slug: "bajaj-boxer",
    name: "Bajaj Boxer",
    brand: "Bajaj",
    type: "2-wheeler",
    tagline: "For Boxer BM100 / BM150 & compatible models",
    markets: ["Nigeria", "Ghana", "Uganda", "Kenya"],
    description: "The Bajaj Boxer is the dominant workhorse motorcycle across West and East Africa. Rugged, economical, and widely serviced, it powers both personal transport and commercial use.",
    prevalence: "Dominant in Nigeria, Ghana, Uganda. High aftermarket demand.",
  },
  {
    slug: "tvs-hlx",
    name: "TVS HLX",
    brand: "TVS",
    type: "2-wheeler",
    tagline: "For TVS HLX 100 / 125 & compatible models",
    markets: ["Kenya", "Tanzania", "Ethiopia", "Uganda"],
    description: "The TVS HLX is popular across East Africa, known for fuel efficiency and durability. A common choice for boda boda operators in Kenya and Tanzania.",
    prevalence: "Popular across East Africa — Kenya, Tanzania, Ethiopia.",
  },
  {
    slug: "ct100",
    name: "CT100 Compatible",
    brand: "Honda / TVS",
    type: "2-wheeler",
    tagline: "For CT100 & similar step-through motorcycles",
    markets: ["Nigeria", "Ghana", "Senegal", "Ivory Coast"],
    description: "CT100-style motorcycles are a regional favourite across West Africa. Lightweight, affordable, and easy to maintain, with a wide network of spare parts demand.",
    prevalence: "Regional favourite in West Africa — Nigeria, Ghana, Francophone Africa.",
  },
  {
    slug: "bajaj-re",
    name: "Bajaj RE / Keke Napep",
    brand: "Bajaj",
    type: "3-wheeler",
    tagline: "For Bajaj RE, Keke Napep, and Tuk Tuk variants",
    markets: ["Nigeria", "Kenya", "Ethiopia", "Ghana", "Tanzania"],
    description: "The Bajaj RE is the backbone of urban transport across Africa. Known locally as Keke Napep in Nigeria and Tuk Tuk in East Africa, it carries millions of passengers daily across 12+ countries.",
    prevalence: "Backbone of urban transport across Nigeria, Kenya, Ethiopia.",
  },
  {
    slug: "tvs-king",
    name: "TVS King",
    brand: "TVS",
    type: "3-wheeler",
    tagline: "For TVS King Deluxe / Duramax and compatible models",
    markets: ["Uganda", "Tanzania", "Kenya", "Rwanda"],
    description: "The TVS King is the dominant 3-wheeler across East Africa, particularly Uganda and Tanzania. Known for its durability on rough roads and lower running costs.",
    prevalence: "Dominant 3-wheeler in Uganda, Tanzania, Rwanda, East Africa.",
  },
];

export function getModelBySlug(slug: string): VehicleModel | undefined {
  return vehicleModels.find((m) => m.slug === slug);
}
