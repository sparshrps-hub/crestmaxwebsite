export type ImportGuide = {
  country: string;
  slug: string;
  flag: string;
  port: string;
  customsAuthority: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  hsCode: string;
  importDuty: string;
  documents: { name: string; description: string }[];
  steps: { title: string; body: string }[];
  faqItems: { q: string; a: string }[];
  portTips: string;
  transitTime: string;
};

export const importGuides: ImportGuide[] = [
  {
    country: "Nigeria",
    slug: "nigeria",
    flag: "🇳🇬",
    port: "Lagos — Apapa Container Port",
    customsAuthority: "Nigeria Customs Service (NCS)",
    metaTitle: "How to Import Spare Parts from India to Nigeria: Complete 2026 Guide | CrestMAX",
    metaDescription: "Step-by-step guide to importing Bajaj, TVS and motorcycle spare parts from India to Nigeria. Covers Form M, HS codes, Apapa port, NCS documentation and shipping terms.",
    h1: "How to Import Motorcycle & 3-Wheeler Spare Parts from India to Nigeria",
    intro: "Nigeria is Africa's largest market for 2-wheeler and 3-wheeler spare parts — with over one million motorcycles sold annually and the Keke Napep (Bajaj RE) dominating last-mile transport in every major city. Yet most Nigerian importers still rely on middlemen or Dubai traders, paying 30–50% more than buying direct from India. This guide covers every step of importing spare parts directly from India to Nigeria — from finding a verified supplier to clearing Apapa port.",
    hsCode: "8714.10 (motorcycle parts & accessories) / 8714.99 (other cycle parts) / 8708.30 (brakes & brake parts for motor vehicles)",
    importDuty: "5–20% depending on part category. Most motorcycle spare parts attract 5% import duty + 7.5% VAT + 1% CISS (Comprehensive Import Supervision Scheme) + 0.5% ETLS (ECOWAS Trade Liberalisation Scheme levy). Confirm current rates with your customs agent before shipment.",
    documents: [
      { name: "Form M", description: "Mandatory pre-import declaration filed with CBN-licensed bank before shipment. Your Nigerian bank processes this. The Form M number must appear on all shipping documents." },
      { name: "Commercial Invoice", description: "Issued by CrestMAX. Shows part names, quantities, HS codes, unit prices, total CIF value, and Form M number." },
      { name: "Packing List", description: "Detailed breakdown of carton contents, gross weight, net weight, and packing dimensions per shipment." },
      { name: "Bill of Lading", description: "Issued by the shipping line at origin port (Mumbai/JNPT). Original BL or Telex Release required for cargo collection at Apapa." },
      { name: "Combined Certificate of Value and Origin (CCVO)", description: "Required for NCS clearance. Certifies the goods are of Indian origin and confirms the declared customs value." },
      { name: "SGD (Single Goods Declaration)", description: "Filed by your customs agent at Apapa using NAFDAC/NCS HS codes. Your clearing agent handles this." },
      { name: "Pre-Arrival Assessment Report (PAAR)", description: "Generated after your clearing agent uploads documents to Nigeria Customs' e-customs portal. Required before cargo is examined." },
    ],
    steps: [
      {
        title: "Step 1 — Source from a Verified Indian Exporter",
        body: "Identify an Indian exporter with IEC (Importer Exporter Code), GST registration, and a track record of shipping to Africa. Request samples or references before placing a large order. CrestMAX exports from Ludhiana — India's spare parts manufacturing capital — and can provide all verification documents on request. Confirm the exact part numbers, OEM compatibility, and packaging standards before finalising your order.",
      },
      {
        title: "Step 2 — Identify Parts and Confirm HS Codes",
        body: "Before ordering, confirm the HS codes for your parts. Most 2-wheeler and 3-wheeler spare parts fall under Chapter 87 (HS 8714.10 for motorcycle accessories and parts; HS 8714.99 for other cycle parts). Brake parts may fall under HS 8708.30. Your supplier should provide HS codes on the commercial invoice — incorrect HS codes cause delays at Apapa and potential penalties. CrestMAX provides correct HS codes on all export documentation.",
      },
      {
        title: "Step 3 — Open a Form M with Your Nigerian Bank",
        body: "Form M is Nigeria's mandatory pre-import declaration system. You must open a Form M with a CBN-licensed bank (GTBank, Access, Zenith, UBA etc.) before the goods leave India. Provide your supplier's proforma invoice, your RC number, and TIN to your bank. Your bank will issue a Form M number — this must be included on all shipping documents. Form M processing takes 2–5 business days.",
      },
      {
        title: "Step 4 — Agree on Incoterms and Confirm Payment",
        body: "Decide whether to buy FOB (you arrange freight from Mumbai) or CIF Lagos (your supplier arranges freight and insurance to Apapa). For first-time buyers, CIF is simpler — your supplier delivers to Apapa and you only deal with customs clearance. CrestMAX offers both FOB Mumbai and CIF Apapa terms. Standard payment is 30% advance + 70% against Bill of Lading copy, or 100% advance via T/T wire transfer for smaller orders.",
      },
      {
        title: "Step 5 — Shipping from India to Nigeria",
        body: "Ocean freight from Mumbai (JNPT) to Apapa Lagos takes 18–22 days. We work with shipping lines including MSC, CMA-CGM, and Maersk on this corridor. You can choose FCL (20ft or 40ft container) for larger orders or LCL (groupage/consolidation) for smaller shipments. CrestMAX provides: commercial invoice, packing list, bill of lading, CCVO certificate of origin, and phytosanitary certificate where required. All documents include your Form M number.",
      },
      {
        title: "Step 6 — Customs Clearance at Apapa",
        body: "Engage a licensed customs agent (CAC-registered) at Apapa to handle NCS clearance. Your agent uploads documents to the NCS e-customs portal (NICIS II), generates the PAAR (Pre-Arrival Assessment Report), and files the SGD (Single Goods Declaration). Expect customs examination of first-time shipments. Typical port clearance time at Apapa: 5–14 days depending on examination queue. Your agent pays duty on your behalf and you reimburse. Budget for additional terminal handling charges (THC) at Apapa Terminal.",
      },
    ],
    faqItems: [
      { q: "Do I need a Form M to import spare parts from India to Nigeria?", a: "Yes — Form M is mandatory for all imports into Nigeria above a minimum value. Open it with your CBN-licensed bank before your supplier ships. Your supplier's Form M number must appear on all export documents." },
      { q: "What HS code covers motorcycle spare parts for Nigerian customs?", a: "Most 2-wheeler and 3-wheeler spare parts fall under HS 8714.10 (parts and accessories for motorcycles) or HS 8714.99 (other). Brake parts are HS 8708.30. Confirm with your customs agent — using the wrong HS code causes delays and potential penalties at Apapa." },
      { q: "How long does shipping from India to Nigeria take?", a: "Ocean freight from Mumbai (JNPT) to Lagos Apapa takes 18–22 days. Add 5–14 days for port clearance at Apapa, depending on examination queue and your customs agent's speed. Total door-to-door India to Lagos: 3–5 weeks." },
      { q: "Can CrestMAX ship CIF to Apapa Lagos?", a: "Yes — we offer CIF Apapa terms. We arrange ocean freight and marine insurance from Mumbai to Apapa. You receive the goods at port and handle customs clearance with your Lagos agent." },
      { q: "What is the import duty on spare parts in Nigeria?", a: "Most motorcycle spare parts attract 5% import duty + 7.5% VAT + 1% CISS + 0.5% ETLS, calculated on the CIF value. Final duty depends on HS code and current Nigeria Customs tariff. Always confirm with your customs agent before shipment." },
      { q: "What is the minimum order quantity from India to Nigeria?", a: "We work with wholesale buyers. Minimum is typically one LCL shipment (1–3 CBM) for mixed parts, or one 20-foot container for single-model bulk orders. Contact us with your parts list for a tailored quote." },
    ],
    portTips: "Apapa Port (Lagos) is Nigeria's main container gateway. Congestion is common — factor in 7–14 days for port clearance. Your customs agent should be NCS-licensed with experience at Apapa. Avoid uncertified agents who cannot file electronically. For time-sensitive urgent orders, Tincan Island Port is an alternative container terminal in Lagos. Some importers in Northern Nigeria route via Cotonou (Benin) for faster clearance — your freight forwarder can advise.",
    transitTime: "18–22 days ocean transit (Mumbai to Apapa) + 5–14 days port clearance",
  },
  {
    country: "Ghana",
    slug: "ghana",
    flag: "🇬🇭",
    port: "Tema Container Port",
    customsAuthority: "Ghana Revenue Authority (GRA) — Customs Division",
    metaTitle: "How to Import Spare Parts from India to Ghana: Complete 2026 Guide | CrestMAX",
    metaDescription: "Step-by-step guide to importing Bajaj Boxer, TVS and motorcycle spare parts from India to Ghana. Covers HS codes, Tema port, GRA documentation and shipping terms.",
    h1: "How to Import Motorcycle Spare Parts from India to Ghana",
    intro: "Ghana's motorcycle aftermarket is one of West Africa's fastest-growing, with strong demand for Bajaj Boxer, CT100 and TVS parts from importers in Accra, Kumasi and Tema. Importing directly from India — rather than through Togo or Dubai traders — cuts landed costs by 25–40%. This guide covers the complete process for Ghanaian importers: from choosing a verified Indian supplier to clearing Tema Container Port.",
    hsCode: "8714.10 (motorcycle parts & accessories) / 8714.99 (other cycle/moped parts) / 8708 (motor vehicle parts — for 3-wheelers above 50cc)",
    importDuty: "Ghana uses a composite duty structure: 20% import duty + 12.5% VAT + 2.5% NHIL + 1% GETFund + 0.75% EDAIF levy, all calculated on CIF value. ECOWAS Certificate of Origin from India may qualify for ECOWAS Trade Liberalisation Scheme (ETLS) — confirm with your customs agent.",
    documents: [
      { name: "Commercial Invoice", description: "From CrestMAX. Must show part names, HS codes, unit prices, total CIF value in USD." },
      { name: "Packing List", description: "Detailed carton-by-carton breakdown of contents, weights and dimensions." },
      { name: "Bill of Lading", description: "Issued by shipping line at Mumbai. Original BL or Telex Release for cargo collection at Tema." },
      { name: "ECOWAS Certificate of Origin (Form A)", description: "Certifies Indian origin. May qualify for reduced duty under ECOWAS ETLS. CrestMAX provides this." },
      { name: "Import Declaration Form (IDF)", description: "Filed electronically by your customs agent through Ghana's GCNET/UNIPASS system before arrival." },
      { name: "Pre-Arrival Declaration (PAD)", description: "Filed online before vessel arrival at Tema. Your customs agent handles this." },
    ],
    steps: [
      {
        title: "Step 1 — Find a Verified Indian Supplier",
        body: "Look for an Indian exporter with a valid IEC (Importer Exporter Code), GST registration, and a documented history of shipping to West Africa. Request a proforma invoice and cross-check the exporter on DGFT India's database. CrestMAX is IEC-registered and can provide all verification documents. Confirm part specifications, OEM compatibility, and minimum order quantities before placing your order.",
      },
      {
        title: "Step 2 — Identify Parts and HS Codes",
        body: "Confirm the HS codes for your parts before ordering. Most motorcycle spare parts fall under HS 8714.10 or 8714.99. Your supplier should provide HS codes on the commercial invoice — incorrect codes cause GRA examination delays at Tema and potential fines. CrestMAX provides accurate HS codes on all export documentation.",
      },
      {
        title: "Step 3 — Get a Proforma Invoice and Agree on Incoterms",
        body: "Request a proforma invoice from your Indian supplier. Decide between FOB Mumbai (you arrange freight from India) or CIF Tema (supplier delivers to Tema, you handle customs). For first-time importers, CIF is simpler. CrestMAX offers both FOB Mumbai and CIF Tema terms. Payment: standard is 30% advance, 70% against B/L copy, or 100% advance T/T for smaller orders.",
      },
      {
        title: "Step 4 — Arrange Shipping or Confirm with Supplier",
        body: "If FOB: engage a freight forwarder to book ocean freight from JNPT Mumbai to Tema. If CIF: your supplier handles freight and insurance. Ocean transit Mumbai to Tema is 20–25 days. Shipping lines on this corridor include MSC, Hapag-Lloyd, and PIL. You can ship FCL (full container) or LCL (consolidation) depending on volume.",
      },
      {
        title: "Step 5 — File Pre-Arrival Declaration (PAD)",
        body: "Your customs agent files the PAD through Ghana's GCNET/UNIPASS system before the vessel arrives at Tema. This must include the commercial invoice, packing list, bill of lading, and ECOWAS certificate of origin. File at least 48 hours before vessel arrival. Late filing causes examination delays.",
      },
      {
        title: "Step 6 — Customs Clearance at Tema",
        body: "Your GRA-licensed customs agent handles examination, duty assessment, and final release at Tema Container Port. Ghana uses destination inspection — GRA may physically inspect a sample of cartons. Duty is assessed on CIF value. Typical clearance time at Tema: 3–7 days for pre-cleared shipments. Budget for terminal handling charges (THC) at Meridian Port Services (MPS).",
      },
    ],
    faqItems: [
      { q: "What is the import duty on motorcycle spare parts in Ghana?", a: "Ghana applies 20% import duty + 12.5% VAT + 2.5% NHIL + 1% GETFund + 0.75% EDAIF on CIF value for most auto spare parts. Total effective tax rate is typically 35–40% of CIF value. An ECOWAS certificate of origin from India may qualify for ETLS duty reduction — confirm with your customs agent." },
      { q: "Can I import spare parts from India CIF to Tema?", a: "Yes — CrestMAX offers CIF Tema terms. We arrange ocean freight and marine insurance from Mumbai to Tema Container Port. You handle Ghana customs clearance with your local agent." },
      { q: "How long does shipping from India to Ghana take?", a: "Ocean transit from Mumbai to Tema is 20–25 days. Add 3–7 days for customs clearance at Tema. Total door-to-door: approximately 4 weeks." },
      { q: "Do I need a pre-arrival declaration for Ghana?", a: "Yes — your customs agent must file a Pre-Arrival Declaration (PAD) through GCNET/UNIPASS before the vessel arrives at Tema. File at least 48 hours before arrival to avoid delays." },
      { q: "Does an ECOWAS certificate of origin reduce my duty in Ghana?", a: "Potentially yes — under the ECOWAS Trade Liberalisation Scheme (ETLS), goods of ECOWAS origin may attract reduced or zero duty. India is not an ECOWAS member, but a Form A certificate of origin from India may qualify for other GSP reductions. Confirm the applicable rate with your customs agent before shipment." },
    ],
    portTips: "Tema Container Port (operated by Meridian Port Services, MPS) is Ghana's main import gateway. MPS has relatively efficient processing compared to Apapa. File your PAD early and ensure all documents are consistent (part names, quantities, HS codes, and values must match across invoice, packing list, and BL). Accra-based customs agents are generally faster than Tema-based agents for electronic filing.",
    transitTime: "20–25 days ocean transit (Mumbai to Tema) + 3–7 days port clearance",
  },
  {
    country: "Kenya",
    slug: "kenya",
    flag: "🇰🇪",
    port: "Mombasa Container Port",
    customsAuthority: "Kenya Revenue Authority (KRA) — Customs & Border Control",
    metaTitle: "How to Import Spare Parts from India to Kenya: Complete 2026 Guide | CrestMAX",
    metaDescription: "Step-by-step guide to importing Bajaj, TVS and Boda Boda spare parts from India to Kenya. Covers HS codes, Mombasa port, KRA documentation and shipping terms.",
    h1: "How to Import Boda Boda & Three-Wheeler Spare Parts from India to Kenya",
    intro: "Kenya is East Africa's largest import hub — the gateway for spare parts reaching Uganda, Rwanda, Tanzania and DR Congo. The Boda Boda motorcycle taxi industry and Bajaj RE tuk tuk fleet create massive ongoing demand for Indian parts. Mombasa port is efficient by African standards, and Kenyan importers who buy direct from India save 20–35% versus buying through Nairobi wholesalers. This guide covers the complete import process for Kenyan buyers.",
    hsCode: "8714.10 (motorcycle parts & accessories) / 8714.99 (other cycle parts) / 8708 (motor vehicle parts for 3-wheelers over 50cc)",
    importDuty: "Kenya applies 25% import duty + 16% VAT + 1.5% Import Declaration Fee (IDF) + 3.5% Railway Development Levy (RDL), all on CIF value. EAC Certificate of Origin may qualify for East African Community preferential tariff if Kenya has a bilateral arrangement — confirm with KRA. Total effective rate is typically 45–50% of CIF value.",
    documents: [
      { name: "Commercial Invoice", description: "From CrestMAX. Must show part names, HS codes, quantities, unit prices, total CIF value, and country of origin (India)." },
      { name: "Packing List", description: "Detailed per-carton breakdown of contents, gross/net weights, and dimensions." },
      { name: "Bill of Lading", description: "Issued by shipping line at Mumbai/JNPT. Original or Telex Release for cargo collection at Mombasa." },
      { name: "Certificate of Origin", description: "Issued by exporting country's chamber of commerce (India). CrestMAX provides a certificate of origin stamped by Ludhiana Chamber of Commerce." },
      { name: "Import Declaration Form (IDF)", description: "Filed electronically through KRA's iCMS (Integrated Customs Management System) before goods arrive. Your clearing agent handles this." },
      { name: "Pre-Arrival Declaration", description: "Required by KRA 7 days before vessel arrival at Mombasa for containerised cargo." },
    ],
    steps: [
      {
        title: "Step 1 — Choose a Verified Indian Exporter",
        body: "Verify your Indian supplier has a valid IEC (Importer Exporter Code) and GST registration. Request a company profile, export references, and product samples if possible. CrestMAX is IEC-registered, based in Ludhiana (India's spare parts capital), and has experience shipping to Kenya and East Africa. We provide all verification documents on request.",
      },
      {
        title: "Step 2 — Confirm Parts, HS Codes, and Quantities",
        body: "Most Boda Boda and tuk tuk spare parts fall under HS 8714.10 (motorcycle accessories and parts) or HS 8714.99. Confirm HS codes with your KRA-registered clearing agent before ordering — wrong HS codes cause examination and potential duty uplift at Mombasa. CrestMAX provides correct HS codes on all commercial invoices.",
      },
      {
        title: "Step 3 — Get Proforma Invoice and Agree on Incoterms",
        body: "Request a proforma invoice from your Indian supplier. Choose FOB Mumbai (you arrange freight) or CIF Mombasa (supplier includes freight and insurance to Mombasa). Most Kenyan importers prefer CIF for simplicity. CrestMAX offers both. Payment is typically 30% advance, 70% against BL copy, or 100% advance for smaller orders.",
      },
      {
        title: "Step 4 — File Import Declaration Form (IDF) via KRA iCMS",
        body: "Your clearing agent files the IDF electronically through KRA's iCMS portal before the goods arrive. Required information: supplier details, invoice value, HS codes, gross weight, and BL number. KRA assesses the IDF and assigns a risk profile (green, yellow, or red channel) which determines whether the shipment will be physically examined at Mombasa.",
      },
      {
        title: "Step 5 — Shipping from India to Kenya",
        body: "Ocean transit from Mumbai (JNPT) to Mombasa is 18–22 days. Shipping lines on this corridor include MSC, CMA-CGM, Evergreen, and PIL. Your shipping line or freight forwarder issues the Bill of Lading. CrestMAX provides all export documents: commercial invoice, packing list, BL (telex release), certificate of origin, and packing declaration.",
      },
      {
        title: "Step 6 — Customs Clearance at Mombasa",
        body: "Your KRA-licensed clearing agent handles examination (if triggered), duty payment, and release at Mombasa Container Terminal (KPA). Kenya operates a risk-based examination system: most pre-cleared shipments move quickly. Duty is paid electronically via KRA iTax. Typical clearance time: 2–5 days for green-channel shipments. After clearance, goods can be trucked to Nairobi (8–10 hours) or upcountry.",
      },
    ],
    faqItems: [
      { q: "What is the import duty on spare parts in Kenya?", a: "Kenya applies 25% import duty + 16% VAT + 1.5% IDF + 3.5% RDL on CIF value. Total effective cost is typically 45–50% added to your CIF price. Budget for this when calculating your landed cost." },
      { q: "How long does shipping from India to Kenya take?", a: "Ocean transit from Mumbai to Mombasa is 18–22 days. Add 2–5 days for KRA customs clearance (green channel) or 5–10 days if your shipment is selected for physical examination." },
      { q: "Can Kenyan importers buy for redistribution to Uganda or Tanzania?", a: "Yes — Mombasa is a regional hub. Many of our Kenyan buyers distribute parts to Uganda, Rwanda, and Tanzania. We can structure documentation to support transit cargo. Goods destined for Uganda transit via the Northern Corridor (Mombasa–Malaba–Kampala)." },
      { q: "Does CrestMAX provide a certificate of origin for Kenya?", a: "Yes — we provide a certificate of origin stamped by the Ludhiana Chamber of Commerce. This is accepted by KRA and is required for customs declaration." },
      { q: "What is the minimum order for shipping to Kenya?", a: "We work with wholesale buyers. Minimum is typically one LCL shipment (1–3 CBM) or one 20-foot FCL container for larger orders. Contact us with your parts list for pricing." },
    ],
    portTips: "Mombasa Container Port (KPA) is East Africa's most efficient major port. Pre-arrival declaration filing 7 days before vessel arrival is mandatory. Ensure your clearing agent is KRA-registered and experienced with auto spare parts classifications — misclassification between HS 8714 (motorcycle parts) and HS 8708 (motor vehicle parts) affects duty rates. Cleared goods can be trucked to Nairobi same day or held at port bonded warehouse if you need more time.",
    transitTime: "18–22 days ocean transit (Mumbai to Mombasa) + 2–5 days port clearance",
  },
];

export function getImportGuideBySlug(slug: string): ImportGuide | undefined {
  return importGuides.find((g) => g.slug === slug);
}
