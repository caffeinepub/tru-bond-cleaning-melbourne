import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const SITE_URL = "https://trubondcleaningmelbourne.com.au";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Cleaning Melbourne",
  description:
    "Professional bond cleaning in Fitzroy Melbourne. 100% Bond Back Guarantee.",
  url: SITE_URL,
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fitzroy",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: "Fitzroy, Melbourne, Victoria",
  priceRange: "$$",
};

const paragraphs = [
  "Fitzroy is Melbourne's creative inner-north suburb, just north of the CBD. It's the home of Smith Street and Brunswick Street — two of Melbourne's most vibrant strips, packed with independent restaurants, bars, galleries, and boutiques. Fitzroy attracts artists, musicians, hospitality workers, and young professionals. It's one of Melbourne's most colourful and character-filled rental markets.",
  "What makes Fitzroy so special also makes it a unique challenge for bond cleaning. The suburb is full of heritage terrace houses with exposed brick walls, polished timber floors, soaring ceilings, and converted warehouses with industrial finishes. These surfaces require careful, experienced cleaning — the wrong product on exposed brick or timber floors can cause damage and cost you your bond.",
  "Exposed brick is a big deal in Fitzroy. It looks amazing, but it's a dust and cobweb magnet. Brick surfaces, mortar lines, and raw timber elements need special attention during an exit clean. Our team knows exactly how to clean these surfaces properly without causing any damage. We use the right tools and eco-friendly products for every surface type.",
  "Polished timber floors are another common inspection point in Fitzroy rentals. Agents check for scuff marks, dullness, and residue build-up. Our team uses timber-safe cleaning methods that leave floors looking clean and polished — exactly what your property manager expects to see.",
  "Fitzroy's rental market is competitive and sophisticated. Property managers in this suburb have high expectations, and they know what a professionally cleaned property looks like. With our REIV-standard checklist, Tru Bond Cleaning Melbourne covers every room, surface, and fixture — from the bathroom grout to the top of the kitchen rangehood.",
  "Book your Fitzroy bond clean online today. Same-day bookings are available seven days a week. WhatsApp us at 0488 841 883 for a fast, friendly quote. Every Fitzroy bond clean comes with our 100% Bond Back Guarantee — if your agent raises any issues, we'll come back and fix it free within 72 hours.",
];

const highlights = [
  "100% Bond Back Guarantee",
  "Heritage & Warehouse Specialists",
  "Same Day Booking",
  "Eco-Friendly Products",
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
  { name: "Richmond", to: "/suburbs/richmond" },
];

export default function FitzroyPage() {
  return (
    <SuburbPageTemplate
      meta={{
        title:
          "Bond Cleaning Fitzroy Melbourne | End of Lease Cleaning | Tru Bond Cleaning",
        description:
          "Bond cleaning in Fitzroy Melbourne. Specialist in heritage terrace homes, timber floors, and exposed brick apartments. 100% Bond Back Guarantee.",
        keywords:
          "bond cleaning Fitzroy Melbourne, end of lease cleaning Fitzroy, bond clean Fitzroy, exit clean Fitzroy Melbourne",
        canonical: "/suburbs/fitzroy",
        ogImage:
          "/assets/generated/suburb-fitzroy-bond-cleaning.dim_800x500.jpg",
        schema,
      }}
      suburb="Fitzroy"
      tagline="Bond Cleaning Fitzroy"
      image="/assets/generated/suburb-fitzroy-bond-cleaning.dim_800x500.jpg"
      imageAlt="Professional bond cleaning in a Fitzroy Melbourne terrace home — Tru Bond Cleaning Melbourne"
      intro="Moving out of your Fitzroy rental? Tru Bond Cleaning Melbourne specialises in heritage terraces, exposed brick, and polished timber floors. Get your full bond back — guaranteed."
      paragraphs={paragraphs}
      highlights={highlights}
      includes={includes}
      relatedSuburbs={relatedSuburbs}
    />
  );
}
