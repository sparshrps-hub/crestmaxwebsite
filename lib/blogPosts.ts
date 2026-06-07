export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishDate: string;
  readingTime: number;
  category: string;
  excerpt: string;
  sections: { heading: string; body: string }[];
  relatedLinks: { label: string; href: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-import-bajaj-spare-parts-from-india-to-nigeria",
    title: "How to Import Bajaj Spare Parts from India to Nigeria — Complete Guide 2026",
    metaTitle: "How to Import Bajaj Spare Parts from India to Nigeria — 2026 Guide | CrestMAX",
    metaDescription: "Step-by-step guide to importing Bajaj Boxer, CT100 and Keke Napep spare parts from India to Nigeria. Form M, Apapa port, HS codes, duties, and supplier tips.",
    publishDate: "2026-05-12",
    readingTime: 8,
    category: "Import Guide",
    excerpt: "Importing Bajaj spare parts directly from India can save Nigerian traders 30–50% compared to sourcing through Dubai middlemen. This guide covers everything — from finding a verified Indian supplier to clearing Apapa port.",
    sections: [
      {
        heading: "Why Import Directly from India?",
        body: `Most Bajaj spare parts sold in Lagos' Ladipo Market and Kano's Sabon Gari spare parts markets originate from one place: Ludhiana, Punjab, India. Whether you're buying from a Lagos trader, a Dubai re-exporter, or a Chinese catalogue, the manufacturing source is almost always the same small belt of factories in northern India.

Every time a part passes through an intermediary — Dubai, Lagos wholesale, Chinese re-exporter — the price increases 20–40%. A piston kit that costs $4 ex-Ludhiana might retail in Lagos for $10–14 after two intermediaries.

Direct India import removes those layers. Nigerian importers with IEC relationships in India regularly buy engine kits for 40–60% less than Ladipo wholesale prices, containerise the shipment, and still turn a strong margin selling to mechanics.

The key barrier is knowledge: most Nigerian traders don't know how to verify an Indian supplier, open a Form M, or navigate Apapa port. This guide removes that barrier.`,
      },
      {
        heading: "Step 1 — Find and Verify an Indian Exporter",
        body: `Not all Indian "exporters" are genuine manufacturers or their direct agents. Many are trading companies who add their own margin on top of factory prices. Here's how to verify:

**Check for IEC registration.** Every Indian exporter must have an IEC (Importer Exporter Code) issued by the DGFT. Ask for the IEC number and verify it at the DGFT website. No IEC = no legitimate exporter.

**Check GST registration.** Genuine manufacturers and trading companies are GST-registered. Ask for the GSTIN.

**Request a sample shipment.** Before placing a container order, request a small sample via air freight (DHL/FedEx). This costs more per unit but lets you check quality, dimensions, and packaging before committing.

**Ask for references.** Legitimate exporters shipping to Africa can provide references from existing customers. A company that has shipped to Nigeria or Ghana before will have shipping records and contacts.

[CrestMAX](/) exports from Ludhiana — India's spare parts capital — and can provide IEC, GST, and customer references on request. Browse our [Bajaj spare parts catalogue](/bajaj-spare-parts) or [Keke Napep parts](/products/bajaj-re) to verify our range.`,
      },
      {
        heading: "Step 2 — Identify Parts and Confirm HS Codes",
        body: `Before ordering, confirm the HS codes for your parts. Nigerian Customs classifies spare parts under Chapter 87:

- **HS 8714.10** — Parts and accessories for motorcycles
- **HS 8714.99** — Other cycle parts
- **HS 8708.30** — Brake parts for motor vehicles (sometimes applied to 3-wheeler parts)

Your Indian supplier must put the correct HS codes on the commercial invoice and packing list. Incorrect HS codes cause delays at Apapa and potential NCS penalties.

For Keke Napep (Bajaj RE) drivetrain parts like propeller shafts and differentials, the classification can be debated between HS 8714 (motorcycle accessories) and HS 8716 (trailer parts) — clarify with your customs agent before shipment.`,
      },
      {
        heading: "Step 3 — Open a Form M with Your Nigerian Bank",
        body: `Form M is Nigeria's mandatory pre-import declaration. It is filed with a CBN-licensed bank before goods leave India. Without a valid Form M, your goods cannot legally enter Nigeria.

**How to open Form M:**
1. Take your supplier's Proforma Invoice to your CBN-licensed bank (GTBank, Access, Zenith, UBA, Stanbic, etc.)
2. Provide: Proforma Invoice, your RC number (CAC registration), TIN, and valid ID
3. Your bank processes the Form M — typically 2–5 business days
4. Your bank issues a Form M number — this must appear on ALL shipping documents from India

The Form M number links every document in the import process. Your Indian supplier must include it on the commercial invoice, packing list, and bill of lading.`,
      },
      {
        heading: "Step 4 — Agree on Incoterms and Make Payment",
        body: `**FOB vs CIF: Which is better for Nigeria?**

**CIF Lagos (Apapa)** — Your Indian supplier arranges ocean freight and marine insurance from Mumbai to Apapa. You receive the goods at Apapa and handle customs clearance. Recommended for first-time importers — you have fewer logistics to manage.

**FOB Mumbai** — You or your freight forwarder arranges the shipping from Mumbai. You have more control over freight costs and carrier choice, but more work.

For most Nigerian first-time direct importers, CIF is the better starting point.

**Payment terms:** Standard for India-Nigeria trade is 30% advance T/T wire transfer to confirm order, 70% balance against Bill of Lading copy. For established relationships, 100% advance or letter of credit (L/C) may be arranged. Avoid 100% payment to unverified suppliers.`,
      },
      {
        heading: "Step 5 — Ocean Freight India to Nigeria",
        body: `**Route:** Ludhiana → Mumbai (JNPT) → Ocean Freight → Apapa Container Port, Lagos

**Transit time:** 18–22 days ocean + 5–14 days Apapa clearance = 4–5 weeks total

**Container options:**
- **LCL (Less than Container Load):** Suitable for first orders or mixed parts under ~5 tonnes. Your cargo shares a container with other shippers. Higher per-CBM cost but lower minimum commitment.
- **20ft FCL (Full Container Load):** ~22–25 CBM capacity, approximately 18–20 tonnes of spare parts. Most cost-effective for bulk orders.
- **40ft FCL:** For very large orders. Most Nigeria spare parts importers start with 20ft.

Carriers operating Mumbai–Lagos: MSC, CMA-CGM, Maersk, COSCO, Hapag-Lloyd.

Your Indian exporter will provide: Commercial Invoice, Packing List, Bill of Lading, Combined Certificate of Value and Origin (CCVO), and any phytosanitary certificates if required.`,
      },
      {
        heading: "Step 6 — Customs Clearance at Apapa",
        body: `Apapa Port (Lagos) is Nigeria's main container gateway. It is also notoriously congested. Here's what to expect:

**Engage a licensed customs agent.** Your agent must be NCS (Nigeria Customs Service) licensed and experienced at Apapa. They will: upload documents to the NCS e-customs portal (NICIS II), file the SGD (Single Goods Declaration), generate your PAAR (Pre-Arrival Assessment Report), and pay duty on your behalf (you reimburse them).

**Duty calculation:** Most motorcycle spare parts attract 5% import duty + 7.5% VAT + 1% CISS + 0.5% ETLS on the CIF value. Example: if your CIF value is $10,000, total duty + taxes ≈ $1,400–1,500 depending on exact HS classification.

**Clearance time:** First-time importers should budget 7–14 days for port clearance. Experienced agents with a good Apapa track record can sometimes clear in 5–7 days. Factor this into your customer delivery promises.

**Demurrage:** Once the ship arrives, you have a free storage window (usually 5–7 days). After that, demurrage charges accrue daily. Make sure your agent is ready to begin the clearance process as soon as the vessel ETA is confirmed.`,
      },
    ],
    relatedLinks: [
      { label: "Import Guide — Nigeria (Full Reference)", href: "/import-guide/nigeria" },
      { label: "Bajaj Spare Parts for Nigeria", href: "/bajaj-spare-parts-nigeria" },
      { label: "Keke Napep Parts for Nigeria", href: "/keke-napep-parts-nigeria" },
      { label: "Nigeria Market Overview", href: "/markets/nigeria" },
      { label: "Request a Quote from CrestMAX", href: "/contact" },
    ],
  },
  {
    slug: "complete-keke-napep-parts-list-nigerian-dealers",
    title: "Complete Keke Napep Parts List — What to Stock for Nigerian Dealers",
    metaTitle: "Complete Keke Napep Parts List for Nigerian Dealers — CrestMAX",
    metaDescription: "The definitive Keke Napep (Bajaj RE) spare parts list for Nigerian importers and dealers. Propeller shaft, differential, engine, clutch, electrical — which to stock and why.",
    publishDate: "2026-05-20",
    readingTime: 7,
    category: "Parts Guide",
    excerpt: "A practical guide for Nigerian Keke Napep parts dealers and importers — which parts to stock, which wear fastest, and how to structure a container order from India.",
    sections: [
      {
        heading: "The Keke Napep Parts Market in Nigeria",
        body: `Nigeria has an estimated 2–4 million [Keke Napep](/products/bajaj-re) (Bajaj RE three-wheeler auto-rickshaws) in active commercial use. In Lagos alone, hundreds of thousands of Keke units operate daily — in Surulere, Oshodi, Ikeja, Agege, and every neighbourhood outside the main Island.

Each Keke Napep requires regular maintenance and parts replacement. The average commercial Keke runs 10–14 hours per day on rough urban roads. The result: a steady, predictable demand for specific parts categories, week after week.

For a spare parts dealer or importer, Keke Napep parts represent one of the most reliable repeating demand categories in the Nigerian automotive aftermarket. This guide breaks down exactly which parts move fastest and how to structure your stock.`,
      },
      {
        heading: "Category 1: Drivetrain & Propeller Shaft (Fastest Moving)",
        body: `The propeller shaft and its associated components are the single highest-wear items on the Keke Napep. The propeller shaft transmits power from the engine to the rear differential across a u-joint arrangement — and it absorbs the constant vibration and load variation of urban Lagos roads.

**What to stock:**
- Propeller Shaft Assembly (complete unit — highest turnover)
- Slider Block Kits (worn slider blocks cause vibration and noise — common complaint)
- Individual Slider Blocks (customers often buy singles to replace just the worn one)
- Propeller Shaft Pins
- Flange Assembly — Satellite Side
- Flange Assembly — Differential Side
- Rubber Bellows / Axle Boots (protect u-joint from dust and moisture)
- Universal Joint (UJ) Kits

**Typical replacement interval:** 6–12 months for slider blocks under commercial use. Complete propeller shaft assembly: 1–2 years. Dealers report that propeller shaft kits are their #1 most reordered Keke item.`,
      },
      {
        heading: "Category 2: Differential & Rear Axle",
        body: `The differential and rear axle components are the second most maintenance-intensive area of the Keke Napep drivetrain:

- Rear Hub Bearing Sets (both sides — wear from road vibration)
- Differential Housing (damaged by overloading or pothole impacts)
- Pivot Pins (worn pins cause rear wheel alignment issues)
- Crown Wheel & Pinion Sets (noisy differentials — common in older Kekes)
- Axle Shaft Assemblies

These parts move slower than propeller shaft components but command higher margins. Stock 5–10 units of hub bearing sets; 2–3 units of crown wheel and pinion.`,
      },
      {
        heading: "Category 3: Engine Parts",
        body: `Engine rebuilds are less frequent than drivetrain work but are high-value orders:

- Piston Kits (200cc / 205cc / 225cc variants — must match the specific RE model)
- Complete Gasket Sets
- Engine Oil Seal Kits
- Flywheel Ring Gears (starter engagement — common failure after 3–4 years)
- Bendix Drive Assemblies (pairs with the ring gear)
- Valve Kits

**Ordering tip:** Stock piston kits in standard and 0.25mm oversize. The 0.50mm oversize is less common. Always confirm which RE variant your customer has before ordering — 200cc and 225cc piston kits are NOT interchangeable.`,
      },
      {
        heading: "Category 4: Clutch & Brakes",
        body: `Clutch and brake components are medium-frequency items that every dealer should have in stock:

- Clutch Cables (high wear from constant urban gear changes)
- Clutch Plate Sets (friction plates wear after 30,000–50,000 km)
- Clutch Springs
- Brake Shoes (front and rear — replaced every 20,000–30,000 km)
- Brake Pipe Assemblies (brake line damage from road debris)
- Brake Lever Sets`,
      },
      {
        heading: "Sample Container Mix for a Keke Napep Dealer",
        body: `For a Nigerian dealer stocking a 20ft container of Keke Napep parts from India, here is a sample mix that experienced importers use:

| Category | Item | Suggested Qty |
|---|---|---|
| Drivetrain | Propeller Shaft Assembly (complete) | 30 sets |
| Drivetrain | Slider Block Kits | 80 sets |
| Drivetrain | Rubber Bellows / Axle Boots | 60 units |
| Differential | Rear Hub Bearing Sets | 40 sets |
| Engine | Piston Kits (200cc standard) | 25 sets |
| Engine | Piston Kits (200cc 0.25mm OS) | 15 sets |
| Engine | Gasket Sets | 30 sets |
| Engine | Flywheel Ring Gears | 20 units |
| Clutch | Clutch Cable | 60 units |
| Clutch | Clutch Plate Sets | 25 sets |
| Brakes | Brake Shoes (pairs) | 50 pairs |
| Electrical | CDI Units | 20 units |

This mix is illustrative. The exact quantities depend on your market size, existing stock, and the specific RE variants most common in your area (Lagos market is different from Kano market). CrestMAX can advise on mix ratios based on your location.`,
      },
    ],
    relatedLinks: [
      { label: "Keke Napep Parts for Nigeria", href: "/keke-napep-parts-nigeria" },
      { label: "Bajaj RE / Keke Napep Catalogue", href: "/products/bajaj-re" },
      { label: "Keke Napep Engine Parts", href: "/keke-napep-engine-parts" },
      { label: "Import Guide — Nigeria", href: "/import-guide/nigeria" },
      { label: "Request a Keke Napep Parts Quote", href: "/contact" },
    ],
  },
  {
    slug: "oem-vs-aftermarket-bajaj-spare-parts-african-importers",
    title: "OEM vs Aftermarket Bajaj Spare Parts: What African Importers Need to Know",
    metaTitle: "OEM vs Aftermarket Bajaj Spare Parts for Africa — What to Know | CrestMAX",
    metaDescription: "Understanding OEM vs aftermarket Bajaj spare parts. What 'genuine' means, why Indian aftermarket parts outperform Chinese copies, and what African importers should buy.",
    publishDate: "2026-05-28",
    readingTime: 6,
    category: "Buyer's Guide",
    excerpt: "African importers are often told they need 'genuine OEM' Bajaj parts — but what does that mean, who actually makes aftermarket parts, and why do Indian parts outperform Chinese ones? A practical breakdown.",
    sections: [
      {
        heading: "What Does 'OEM' Actually Mean?",
        body: `OEM stands for Original Equipment Manufacturer. In the spare parts world, 'OEM parts' means parts made to the same specification as the original factory parts — often by the same or similar manufacturers.

Here is the reality of the Bajaj spare parts supply chain: Bajaj Auto (the motorcycle manufacturer) does not manufacture most spare parts in-house. It sources engine components, electrical parts, and mechanical parts from a network of specialist component manufacturers — many of them based in Pune and Ludhiana.

These same manufacturers also sell their production output into the aftermarket through Indian trading channels. An 'OEM' Bajaj spare part available at a Ludhiana wholesaler may have been made in the same factory as the parts used in Bajaj's assembly line — with no meaningful quality difference.

The phrase 'genuine Bajaj spare parts' specifically refers to parts sold through Bajaj Auto's official distribution network with Bajaj's own packaging and branding. But the underlying manufactured components are often identical or very similar to well-sourced aftermarket alternatives.`,
      },
      {
        heading: "Indian Aftermarket vs Chinese Copies: A Real Difference",
        body: `The most important quality distinction in the spare parts world is not 'OEM vs aftermarket' — it is **Indian aftermarket vs Chinese manufactured copies**.

**Indian aftermarket (Ludhiana origin):**
- Manufactured in factories with 20–35 years of producing Bajaj-compatible parts
- Correct bore dimensions, correct metallurgical grades for pistons and rings
- Correct spring tensions for clutch and valve springs
- Proper coating and heat treatment on wear-critical components
- Consistent quality batch to batch

**Chinese manufactured Bajaj copies:**
- Produced from reverse-engineered measurements, not from tooling shared with OEM supply
- Bore tolerances are often 0.05–0.10mm off — leading to early blow-by and oil consumption in pistons
- Spring rates inconsistent — clutch plates slip prematurely, valves bounce at high RPM
- Electrical components (CDI units, rectifiers) using sub-rated capacitors and components
- Packaging often designed to mimic Indian manufacturers — difficult to distinguish visually

Nigerian, Kenyan, and Ghanaian mechanics who have used both types are clear about the difference. Indian parts last. Chinese copies fail.`,
      },
      {
        heading: "The Ludhiana Manufacturing Ecosystem",
        body: `Ludhiana, Punjab is India's spare parts manufacturing capital — often called "India's Detroit." It is home to over 5,000 auto parts manufacturers ranging from small workshops to significant factories exporting to 40+ countries.

Ludhiana manufacturers have been producing Bajaj-compatible parts since Bajaj introduced the Chetak and later the Boxer in India in the 1970s–1990s. When Bajaj's motorcycles became Africa's dominant commercial motorcycles in the 2000s, Ludhiana expanded its manufacturing specifically to serve the African export market.

Parts produced in Ludhiana for Bajaj Boxer, CT100, Bajaj RE, TVS HLX, and TVS King are:
- Produced on dedicated tooling maintained to manufacturer specifications
- Subject to quality inspection before export packing
- Packaged specifically for export (moisture-resistant packing, correct labelling)
- Backed by manufacturer accountability — if a batch has a defect, the manufacturer can be held responsible

This ecosystem is the reason CrestMAX sources exclusively from Ludhiana rather than sourcing from cheaper Chinese suppliers.`,
      },
      {
        heading: "What to Buy: A Practical Framework",
        body: `For African importers ordering from India, here is a practical quality framework:

**For engine internals (piston, rings, gaskets, valves):** Buy Indian aftermarket exclusively. Incorrect bore tolerances in Chinese pistons cause rapid engine failure — mechanics and operators will notice immediately.

**For electrical parts (CDI, rectifier, stator):** Buy Indian aftermarket exclusively. Chinese CDI units in particular fail within months in African heat. This is the single highest-complaint category when importers switch to Chinese parts.

**For clutch plates:** Indian aftermarket. Friction material composition and spring rate are critical — Chinese plates slip at the wrong load.

**For cables (clutch, brake, accelerator):** Both Indian and Chinese cables of reasonable quality exist. Check the cable housing quality — cheap cable housing cracks in UV exposure.

**For structural/cosmetic parts (chain guards, seat covers, body panels):** Price-quality tradeoffs are more acceptable. These are not safety-critical components.

**The golden rule:** If the part directly affects engine reliability, braking, or rider safety — buy Indian aftermarket. If it is cosmetic or low-stress — you have more flexibility on source.`,
      },
    ],
    relatedLinks: [
      { label: "India vs China Spare Parts — Full Comparison", href: "/india-vs-china-spare-parts" },
      { label: "Bajaj Spare Parts from India", href: "/bajaj-spare-parts" },
      { label: "Bajaj Boxer Engine Parts", href: "/bajaj-boxer-engine-parts" },
      { label: "CT100 Piston Kits", href: "/ct100-piston-kit" },
      { label: "Why CrestMAX", href: "/why-crestmax" },
      { label: "Request a Quote", href: "/contact" },
    ],
  },
  {
    slug: "bajaj-boxer-vs-ct100-parts-compatibility-guide",
    title: "Bajaj Boxer vs CT100: Parts Compatibility Guide for African Markets",
    metaTitle: "Bajaj Boxer vs CT100 Parts Compatibility — Africa Guide | CrestMAX",
    metaDescription: "Are Bajaj Boxer and CT100 parts interchangeable? A practical parts compatibility guide for African mechanics, dealers, and importers.",
    publishDate: "2026-06-02",
    readingTime: 5,
    category: "Technical Guide",
    excerpt: "African mechanics frequently ask whether Bajaj Boxer and CT100 parts are interchangeable. The short answer is: some are, most are not. Here is a clear breakdown by category.",
    sections: [
      {
        heading: "The Two Motorcycles: Key Differences",
        body: `The Bajaj Boxer BM150 and Bajaj CT100 are both popular in Africa but are fundamentally different motorcycles:

**Bajaj Boxer BM150:**
- Engine: 147.5cc (150cc), OHC, single-cylinder
- Bore × Stroke: 57mm × 57.8mm
- Power: ~14 BHP at 8,500 RPM
- Gearbox: 5-speed
- Weight: ~118 kg
- Market use: Heavy commercial (Okada, Boda Boda) — designed for load-carrying

**Bajaj CT100:**
- Engine: 99.27cc (100cc), OHC, single-cylinder
- Bore × Stroke: 50mm × 50.6mm
- Power: ~7.8 BHP at 7,500 RPM
- Gearbox: 4-speed
- Weight: ~106 kg
- Market use: Budget personal commuter — economy and simplicity

The engine size difference (100cc vs 150cc) immediately rules out interchangeability for all engine internal components. But there are categories of parts that do cross over.`,
      },
      {
        heading: "Parts That Are NOT Interchangeable",
        body: `**Engine internals — no crossover:**
- Piston kits: Boxer uses 57mm bore, CT100 uses 50mm bore. Not interchangeable.
- Piston rings: Different bore sizes, different ring gaps. Not interchangeable.
- Cylinder barrels: Different bore, different cylinder height. Not interchangeable.
- Gasket sets: Different engine dimensions throughout. Not interchangeable.
- Crankshafts: Different stroke, different dimensions. Not interchangeable.
- Valve kits: Different valve sizing for different cylinder head. Not interchangeable.

**Gearbox — no crossover:**
- Boxer has 5-speed, CT100 has 4-speed. Gear clusters are not interchangeable.

**Electrical — partial overlap, use with caution:**
- CDI units: Boxer and CT100 use different CDI units (different ignition timing curves). Do not interchange.
- Rectifiers: Some voltage regulators are similar but verify before substituting.`,
      },
      {
        heading: "Parts With Potential Compatibility",
        body: `Some generic or lightly specified components may be compatible between Boxer and CT100 — but always verify dimensions before ordering:

**Potentially compatible:**
- Brake cables: Both use similar manual drum brakes. Cable outer housing lengths differ but the cable construction is generic. Verify length before confirming fitment.
- Clutch cable outer: Generic specification, potentially compatible depending on routing length.
- Chain sprocket kits: Both use 428-pitch chain. The sprocket tooth counts differ (Boxer has more teeth for higher speed). Verify tooth count.
- Wheel bearings: Both use standard 6201/6202 series bearings in some positions. Verify before substituting.
- Spark plugs: Both use A7TC or equivalent NGK CR7HSA. Fully compatible.
- Air filter assemblies: Different carburettor and airbox dimensions. NOT compatible — this is a common mistake.
- Rubber grommets and footrests: May be physically similar on some variants.

**The safe rule:** Never assume compatibility without verifying the part number or measuring the dimension. Engine parts especially must match the specific model.`,
      },
      {
        heading: "Ordering Advice for Mixed-Model Markets",
        body: `In markets where both Boxer and CT100 are common (most of West Africa), importers often carry both. Some ordering advice:

1. **Always label parts by model** in your warehouse. Boxer and CT100 parts stored together lead to wrong-fitment sales and customer complaints.

2. **Piston kits are the highest-risk confusion item.** A 57mm Boxer piston in a CT100 engine is immediately obvious (it won't fit). But a 50mm CT100 piston installed in a Boxer with a rebored cylinder at 50.25mm oversize could go unnoticed until the engine runs — then it will fail quickly from low compression.

3. **Engine gasket sets** have visually similar shapes but different head stud positions. Always confirm the model.

4. **CDI units** are the most common incorrect swap. A CT100 CDI in a Boxer will cause retarded ignition timing — the bike will start but run poorly at high RPM.

CrestMAX supplies model-specific parts for both Boxer and CT100. When placing an order, always specify the model — and for engine parts, the year of manufacture if known.`,
      },
    ],
    relatedLinks: [
      { label: "Bajaj Boxer Engine Parts", href: "/bajaj-boxer-engine-parts" },
      { label: "CT100 Engine Parts", href: "/ct100-engine-parts" },
      { label: "CT100 Piston Kits", href: "/ct100-piston-kit" },
      { label: "Bajaj Boxer Catalogue", href: "/products/bajaj-boxer" },
      { label: "CT100 Catalogue", href: "/products/ct100" },
    ],
  },
  {
    slug: "fob-vs-cif-spare-parts-india-africa",
    title: "FOB vs CIF for Spare Parts from India: Which Incoterm is Better for African Buyers?",
    metaTitle: "FOB vs CIF for Spare Parts from India to Africa — Explained | CrestMAX",
    metaDescription: "Should you buy spare parts from India on FOB or CIF terms? A plain-language explanation for African importers, with practical advice for Nigeria, Kenya, and Ghana.",
    publishDate: "2026-06-05",
    readingTime: 5,
    category: "Trade Guide",
    excerpt: "FOB and CIF are the two most common shipping terms used in India-Africa spare parts trade. Understanding the difference can save you money — or avoid a costly mistake.",
    sections: [
      {
        heading: "What FOB and CIF Mean",
        body: `**FOB (Free On Board)** means the seller's responsibility ends when the goods are loaded onto the vessel at the origin port (Mumbai/JNPT in the case of Indian exports). From that point, you (the buyer) are responsible for:
- Ocean freight charges
- Marine insurance
- All costs and risks from the moment the goods are on the ship

**CIF (Cost, Insurance and Freight)** means the seller arranges and pays for ocean freight and marine insurance to the named destination port (e.g., CIF Lagos Apapa, CIF Mombasa, CIF Tema). You (the buyer) take responsibility from when the goods arrive at the destination port. You are responsible for:
- Port clearance / customs duties
- Port handling at destination
- Inland transport from port to your warehouse

The price difference: CIF quotes are higher than FOB quotes for the same goods — the difference is the freight and insurance cost.`,
      },
      {
        heading: "Which Is Better for African Importers?",
        body: `The honest answer is: **CIF is better for most African importers, especially those new to direct India imports.**

Here is why:

**CIF advantages:**
1. **Simpler logistics.** You don't need to arrange a freight forwarder in India, manage carrier bookings, or deal with freight documentation. Your Indian supplier handles it.
2. **Predictable landed cost.** You know the CIF value before the goods ship — your customs duty calculation is straightforward.
3. **Supplier accountability.** If goods are damaged or lost in transit, the supplier's marine insurance covers it up to the destination port.
4. **Better for customs declaration.** Nigerian Form M requires a declared CIF value. If you buy FOB and arrange your own freight, you must add freight and insurance to arrive at the correct CIF value for Form M.

**FOB advantages:**
1. **Potentially lower cost** if you have an established relationship with a freight forwarder who can negotiate competitive rates on the India–Africa corridor.
2. **More control** over carrier choice, transit time, and consolidation (LCL groupage).
3. **Better for experienced importers** who import regularly and want to optimise total logistics cost.

**Recommendation for first-time direct importers:** Start with CIF. Once you understand the freight costs and can identify where savings are possible, switch specific lanes to FOB if your freight forwarder can beat the CIF rates.`,
      },
      {
        heading: "FOB vs CIF: Practical Example",
        body: `Let's say you are importing a mixed container of [Bajaj spare parts](/bajaj-spare-parts) from [CrestMAX](/), Ludhiana to Lagos Apapa.

**FOB pricing scenario:**
- Ex-Ludhiana parts value: $8,000
- Inland trucking Ludhiana to JNPT Mumbai: $300
- FOB Mumbai price: $8,300
- Your freight forwarder's ocean freight (LCL, 3 CBM): $400
- Marine insurance (0.5% of goods value): $42
- Total CIF equivalent: $8,742
- Nigerian customs duty (5% + VAT + levies on $8,742): ~$1,225

**CIF pricing scenario (same order):**
- CIF Apapa quoted by CrestMAX: $8,800
- This includes goods + freight + insurance
- Nigerian customs duty (5% + VAT + levies on $8,800): ~$1,234

In this example, CIF from CrestMAX is only $58 more than the FOB equivalent with your own freight arrangement. The administrative simplicity of CIF is worth $58.

However, if you were importing a 20ft full container (22+ CBM), the freight cost is larger and your freight forwarder may be able to beat the CIF rate by $200–500 — at that scale, FOB comparison is worthwhile.`,
      },
      {
        heading: "Key Tips for India-Africa Shipments",
        body: `Regardless of whether you use FOB or CIF:

1. **Always get marine insurance.** Even with CIF (where the seller provides it), verify that the insurance coverage amount is at least the CIF value + 10%. Underinsurance is common.

2. **Understand the free time at destination.** Container terminals give you 5–7 free days to clear and collect after vessel arrival. After that, demurrage charges apply daily. Apapa is particularly notorious for demurrage accumulation.

3. **Confirm the documentation checklist before shipment.** For Nigeria: Form M number must be on all documents. For Ghana: Tax Identification Number (TIN) required on the invoice. For Kenya: Import Declaration Form (IDF) filed with KRA.

4. **Get a copy of the Bill of Lading as soon as it is issued.** This document is needed to start customs clearance preparation before the vessel arrives.

5. **Use experienced freight forwarders.** On the India-Africa corridor, experienced forwarders who know Apapa, Mombasa, and Tema clearance can save you days and significant money in avoidable port charges.`,
      },
    ],
    relatedLinks: [
      { label: "Import Guide — Nigeria", href: "/import-guide/nigeria" },
      { label: "Import Guide — Ghana", href: "/import-guide/ghana" },
      { label: "Import Guide — Kenya", href: "/import-guide/kenya" },
      { label: "How to Import Bajaj Parts to Nigeria", href: "/blog/how-to-import-bajaj-spare-parts-from-india-to-nigeria" },
      { label: "Request a CIF Quote", href: "/contact" },
    ],
  },
  {
    slug: "how-to-vet-spare-parts-exporter-india-7-questions",
    title: "How to Vet a Spare Parts Exporter in India: 7 Questions Every African Importer Should Ask",
    metaTitle: "7 Questions to Vet an Indian Spare Parts Exporter — African Importers | CrestMAX",
    metaDescription: "Before buying from an Indian spare parts exporter, ask these 7 questions. Protect yourself from fraud, poor quality, and documentation failures in India-Africa trade.",
    publishDate: "2026-06-05",
    readingTime: 6,
    category: "Buyer's Guide",
    excerpt: "Indian spare parts fraud and quality failures cost African importers millions of dollars annually. These 7 questions will protect you before you wire any money.",
    sections: [
      {
        heading: "Why Vetting Matters",
        body: `The India-Africa spare parts trade is large, growing, and unfortunately, full of bad actors. Scams range from outright fraud (taking advance payment and shipping nothing or sending wrong items) to quality fraud (shipping Chinese-sourced parts as Indian-manufactured) to documentation fraud (forged certificates of origin or fake Form M compliance).

African importers who buy through established local traders in Lagos, Nairobi, or Accra have some protection — the local trader's reputation is at stake. But when you go direct to India to remove middlemen (and save 30–50%), you take on the responsibility of vetting your supplier yourself.

These 7 questions will help you separate genuine exporters from bad actors.`,
      },
      {
        heading: "Question 1: Can you provide your IEC number?",
        body: `Every Indian exporter must have an IEC (Importer Exporter Code) issued by the DGFT (Directorate General of Foreign Trade). Without an IEC, an entity cannot legally export from India.

Ask for the IEC number and verify it at the DGFT online portal (dgft.gov.in — search by company name or IEC number). A legitimate exporter's name, address, and registered date will appear.

If a supplier cannot provide an IEC — or the IEC doesn't match their company details when you verify — do not proceed.`,
      },
      {
        heading: "Question 2: What is your GST number and manufacturing address?",
        body: `GST (Goods and Services Tax) registration is mandatory for all Indian businesses above a revenue threshold. A genuine manufacturer or established trading company is always GST-registered.

Ask for the GSTIN and verify it at the GST portal (gst.gov.in). The registration details will show the company name, address, and business type.

More importantly: ask for the manufacturing address and compare it to the GST registered address. If a supplier claims to be a Ludhiana manufacturer but their GST address is in Delhi or Mumbai, ask why — they may be a trading company, not a manufacturer.

Trading companies are not automatically bad — many legitimate exporters are traders. But knowing whether you're dealing with a manufacturer or trader affects your expectations on price, customisation ability, and quality control.`,
      },
      {
        heading: "Question 3: Can you provide references from African customers?",
        body: `A genuine spare parts exporter who has been shipping to Africa will have customers. Ask for references — specifically: company name, country, contact number, and how long the relationship has been.

Follow up with at least one reference. Ask them: How long have you been buying from this supplier? Have you had quality issues? How were they resolved? Do they deliver on time?

Suppliers who hesitate to provide references — or provide references that cannot be reached or don't verify the relationship — should be treated with caution.

CrestMAX can provide references from existing customers in Nigeria, Ghana, and Kenya. We encourage prospective buyers to contact them.`,
      },
      {
        heading: "Question 4: Can you send a sample before I commit to a full container?",
        body: `Any legitimate exporter will accommodate a sample order — typically sent via DHL or FedEx air freight, with you paying the air freight cost.

A sample order achieves two things: (1) It proves the supplier exists and can actually produce and pack what they claim. (2) It lets you physically inspect the quality before committing $10,000–50,000 to a container order.

For engine parts specifically — pistons, rings, gasket sets — sample inspection is critical. Have an experienced mechanic check bore dimensions, ring gap, and gasket material quality.

If a supplier refuses to send samples, or insists on full container commitment before any sample — this is a significant warning sign.`,
      },
      {
        heading: "Question 5: What export documentation do you provide?",
        body: `For legitimate import to Nigeria, Ghana, Kenya, and most African countries, you need:

1. Commercial Invoice (with HS codes, CIF value, Form M number for Nigeria)
2. Packing List (detailed by carton, with weights and dimensions)
3. Bill of Lading (issued by the shipping line)
4. Combined Certificate of Value and Origin (CCVO) or Certificate of Origin (for Nigerian customs)
5. Phytosanitary certificate if applicable

Ask your supplier: "Do you include all of these in your standard documentation?" A supplier who says "we just send the invoice" is going to cause customs problems.

Also ask: "Can you include my Form M number on the invoice and B/L?" (Nigeria-specific.) A supplier unfamiliar with Form M has probably never shipped to Nigeria — or has shipped with problems.`,
      },
      {
        heading: "Question 6: Where exactly are your parts manufactured?",
        body: `The most common quality fraud in Indian spare parts exports is this: a supplier claims to supply "Ludhiana-manufactured" parts, but actually sources from Chinese manufacturers or from cheaper Indian manufacturers outside Ludhiana's quality cluster.

Ask directly: "Which manufacturers do your parts come from? Are they Ludhiana-based?"

Follow up: "Can you tell me the manufacturer's name for the piston kits you would supply for the Bajaj Boxer BM150?"

A genuine Ludhiana-sourced supplier will be able to name specific manufacturers (there are well-known ones in the trade). A trading company sourcing opportunistically from multiple places will give vague answers.

You can also verify by requesting photos of the parts in manufacturer packaging — Ludhiana-origin parts typically have specific brand names and packaging styles familiar to the trade.`,
      },
      {
        heading: "Question 7: What are your payment terms and what happens if there is a quality problem?",
        body: `Two critical questions:

**Payment terms:** Standard for legitimate India-Africa spare parts trade is 30% advance on confirmed order + 70% balance against Bill of Lading copy (T/T wire transfer). 100% advance before shipment to unknown suppliers is high-risk. L/C (Letter of Credit) is the safest method for large orders but involves bank charges.

Red flag: any supplier requesting 100% advance for a first order from an unknown buyer — or requesting payment through informal channels (cryptocurrency, PayPal, Western Union for commercial quantities).

**Quality issue resolution:** Ask: "If I receive parts that don't match the specification, what is your resolution process?"

A legitimate exporter will have a clear policy: inspection photos, manufacturer investigation, credit or replacement on the next shipment for confirmed defects. A fraudulent operator will go silent or become hostile when quality problems arise.

CrestMAX's policy: if a batch has a documented quality defect (wrong dimensions, wrong parts shipped), we investigate with the manufacturer and provide either a credit note or replacement parts on the next shipment. We have never disappeared on a quality complaint.`,
      },
    ],
    relatedLinks: [
      { label: "About CrestMAX", href: "/about" },
      { label: "Why CrestMAX", href: "/why-crestmax" },
      { label: "India vs China Spare Parts", href: "/india-vs-china-spare-parts" },
      { label: "How to Import from India to Nigeria", href: "/blog/how-to-import-bajaj-spare-parts-from-india-to-nigeria" },
      { label: "Contact CrestMAX", href: "/contact" },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
