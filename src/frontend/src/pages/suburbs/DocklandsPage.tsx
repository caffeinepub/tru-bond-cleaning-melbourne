import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const SITE_URL = "https://trubondcleaningmelbourne.com.au";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Cleaning Melbourne",
  description:
    "Professional bond cleaning in Docklands Melbourne. 100% Bond Back Guarantee.",
  url: SITE_URL,
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Docklands",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: "Docklands, Melbourne, Victoria",
  priceRange: "$$",
};

const paragraphs = [
  "Docklands is Melbourne's modern waterfront precinct, right on the edge of the CBD. Built on reclaimed land along the Yarra River and Victoria Harbour, Docklands is almost entirely made up of contemporary high-rise apartment towers. It's a dynamic, fast-growing suburb popular with corporate professionals, young couples, and interstate and international renters who want to be close to the city action.",
  "Docklands apartments are a unique cleaning challenge. Most are modern high-rises with floor-to-ceiling windows, open-plan living, sleek stainless steel kitchens, stone benchtops, and engineered timber or polished concrete floors. These surfaces look stunning — but they also show every fingerprint, smear, and water mark. Property managers in Docklands are strict, and they know the difference between a professional clean and a DIY attempt.",
  "Floor-to-ceiling windows are the standout feature of most Docklands apartments — and they're one of the hardest things to clean properly. Our team uses professional window cleaning equipment and streak-free solutions to get every pane crystal clear. We cover the glass, frames, tracks, and flyscreens as part of every Docklands bond clean.",
  "Modern stainless steel kitchens, stone benchtops, and integrated appliances need careful, targeted cleaning products. The wrong product can scratch or dull these surfaces. Our team uses purpose-built products for every surface type, and we always test on a small area first to make sure there's no risk of damage. We clean the oven, stovetop, rangehood, dishwasher, fridge, and all cupboard interiors.",
  "Docklands property managers have high expectations — this is a premium suburb with premium rents and premium bonds. Our REIV-standard bond clean covers every item on their inspection checklist. We clean every room, every surface, and every fixture so you can hand back the keys with confidence.",
  "Book your Docklands bond clean online today. We're available seven days a week, including same-day bookings for those last-minute situations. WhatsApp us at 0488 841 883 for a fast, friendly quote. Every Docklands bond clean comes with our 100% Bond Back Guarantee — we'll fix any issues for free within 72 hours.",
];

const highlights = [
  "100% Bond Back Guarantee",
  "High-Rise Apartment Specialists",
  "Floor-to-Ceiling Window Clean",
  "Same Day Booking",
  "Free Re-clean 72 Hrs",
];

const includes = [
  "Kitchen: oven, stovetop, rangehood, cupboards inside/out",
  "All bathrooms: tiles, grout, taps, shower screen",
  "Carpet steam cleaning (add-on available)",
  "Windows inside and out (where accessible)",
  "All walls and skirting boards",
  "Bedrooms and living areas",
  "Light fittings and ceiling fans",
  "Door frames, handles, and tracks",
  "Laundry and utility areas",
  "Garage and outdoor areas (on request)",
];

const relatedSuburbs = [
  { name: "Carlton", to: "/suburbs/carlton" },
  { name: "Brunswick", to: "/suburbs/brunswick" },
  { name: "Box Hill", to: "/suburbs/box-hill" },
];

export default function DocklandsPage() {
  return (
    <SuburbPageTemplate
      meta={{
        title:
          "Bond Cleaning Docklands Melbourne | End of Lease Cleaning | Tru Bond Cleaning",
        description:
          "Specialist bond cleaning for Docklands Melbourne high-rise apartments. Floor-to-ceiling windows, modern kitchens, 100% Bond Back Guarantee.",
        keywords:
          "bond cleaning Docklands Melbourne, end of lease cleaning Docklands, bond clean Docklands, exit clean Docklands Melbourne",
        canonical: "/suburbs/docklands",
        ogImage:
          "/assets/generated/suburb-docklands-bond-cleaning.dim_800x500.jpg",
        schema,
      }}
      suburb="Docklands"
      tagline="Bond Cleaning Docklands"
      image="/assets/generated/suburb-docklands-bond-cleaning.dim_800x500.jpg"
      imageAlt="Professional bond cleaning in a Docklands Melbourne high-rise apartment — Tru Bond Cleaning Melbourne"
      intro="Moving out of your Docklands high-rise? Tru Bond Cleaning Melbourne specialises in modern apartments with floor-to-ceiling windows and premium finishes. 100% Bond Back Guarantee."
      paragraphs={paragraphs}
      highlights={highlights}
      includes={includes}
      relatedSuburbs={relatedSuburbs}
    />
  );
}
