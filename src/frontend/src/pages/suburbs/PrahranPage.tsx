import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const SITE_URL = "https://trubondcleaningmelbourne.com.au";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Cleaning Melbourne",
  description:
    "Professional bond cleaning in Prahran Melbourne. 100% Bond Back Guarantee.",
  url: SITE_URL,
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Prahran",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: "Prahran, Melbourne, Victoria",
  priceRange: "$$",
};

const paragraphs = [
  "Prahran is one of Melbourne's most exciting inner-south suburbs. Sitting right next to South Yarra, it's home to Chapel Street's famous shopping and nightlife precinct and Prahran Market — one of Melbourne's best fresh food markets. Prahran is known for its vibrant community, its great cafes, and its mix of young professionals, creatives, and families.",
  "Rental properties in Prahran offer a fantastic variety. You'll find sleek modern apartments, Victorian and Edwardian homes, and converted period buildings side by side. The suburb attracts a strong rental market with tenants who love the Chapel Street lifestyle. When these tenants move out, property managers inspect to a high standard — because the next tenant will expect the property to be in top condition.",
  "Prahran's mix of modern apartments and period homes means our team needs to be versatile. Modern apartments have stainless steel appliances, stone benchtops, and contemporary bathrooms that need careful cleaning without any scratches or marks. Older Victorian and Edwardian homes have character features — timber floors, fireplaces, pressed tin ceilings — that need specialist treatment.",
  "Our REIV-standard bond cleaning service in Prahran covers every item on the property manager's inspection checklist. We clean the kitchen from top to bottom — oven, stovetop, rangehood, cupboards inside and out. We tackle every bathroom and toilet. We clean all windows, walls, skirting boards, light fittings, and door frames. Nothing gets missed.",
  "Prahran is well served by public transport, and our team can get to your property quickly. We work seven days a week and offer same-day bookings when you need us on short notice. Our fully insured, police-checked team brings all the professional-grade, eco-friendly cleaning products we need. Your quote covers everything — no hidden costs.",
  "Book your Prahran bond clean online today. WhatsApp us at 0488 841 883 for a fast, friendly quote. Every Prahran bond clean comes with our 100% Bond Back Guarantee — if your real estate agent raises any issue, we'll come back and fix it free within 72 hours. Get your full bond back with Tru Bond Cleaning Melbourne.",
];

const highlights = [
  "100% Bond Back Guarantee",
  "Period & Modern Home Specialists",
  "Same Day Booking",
  "Fully Insured Team",
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
  { name: "South Yarra", to: "/suburbs/south-yarra" },
  { name: "St Kilda", to: "/suburbs/st-kilda" },
  { name: "Fitzroy", to: "/suburbs/fitzroy" },
];

export default function PrahranPage() {
  return (
    <SuburbPageTemplate
      meta={{
        title:
          "Bond Cleaning Prahran Melbourne | End of Lease Cleaning | Tru Bond Cleaning",
        description:
          "Bond cleaning in Prahran Melbourne near Chapel Street. Apartments and period homes cleaned to REIV standard. 100% Bond Back Guarantee.",
        keywords:
          "bond cleaning Prahran Melbourne, end of lease cleaning Prahran, bond clean Prahran, exit clean Prahran Melbourne",
        canonical: "/suburbs/prahran",
        ogImage:
          "/assets/generated/suburb-prahran-bond-cleaning.dim_800x500.jpg",
        schema,
      }}
      suburb="Prahran"
      tagline="Bond Cleaning Prahran"
      image="/assets/generated/suburb-prahran-bond-cleaning.dim_800x500.jpg"
      imageAlt="Professional bond cleaning in a Prahran Melbourne apartment — Tru Bond Cleaning Melbourne"
      intro="Moving out of your Prahran rental near Chapel Street? Tru Bond Cleaning Melbourne cleans apartments and period homes to the REIV standard. 100% Bond Back Guarantee included."
      paragraphs={paragraphs}
      highlights={highlights}
      includes={includes}
      relatedSuburbs={relatedSuburbs}
    />
  );
}
