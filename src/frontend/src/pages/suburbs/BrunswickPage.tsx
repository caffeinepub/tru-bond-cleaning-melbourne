import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const SITE_URL = "https://trubondcleaningmelbourne.com.au";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Cleaning Melbourne",
  description:
    "Professional bond cleaning in Brunswick Melbourne. 100% Bond Back Guarantee.",
  url: SITE_URL,
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brunswick",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: "Brunswick, Melbourne, Victoria",
  priceRange: "$$",
};

const paragraphs = [
  "Brunswick is one of Melbourne's most diverse and community-driven inner-north suburbs. Running along Sydney Road — Melbourne's longest shopping street — Brunswick is a melting pot of cultures, cuisines, and communities. It's home to artists, young families, students, and professionals who love its eclectic, unpretentious character. The rental market here is very active, with a high density of share houses and terrace homes.",
  "Share houses are very common in Brunswick, and they bring their own special bond cleaning challenges. Communal kitchens and bathrooms get heavy use, often from multiple people over many years. Grease build-up in the kitchen, soap scum on bathroom tiles, and years of accumulated grime in shared spaces are all things our team at Tru Bond Cleaning Melbourne deals with every day.",
  "Brunswick's heritage terrace homes are some of the most characterful rentals in Melbourne. They often feature original timber floors, high ceilings, ornate fireplaces, and older-style bathrooms and kitchens that require careful cleaning. Our experienced team knows how to clean these older surfaces without causing any damage — and without missing the spots that agents check.",
  "Whether you're the last person out of a share house or a family moving out of a Brunswick terrace, our REIV-standard bond clean covers everything your property manager will inspect. We bring all our own professional-grade, eco-friendly cleaning products and equipment. There are no hidden charges — your quote includes everything.",
  "Brunswick property managers have seen a lot of exit cleans, and they know exactly what a properly cleaned property looks like. Don't risk losing part of your bond because of a rushed or incomplete clean. Our team works methodically through every room, every surface, and every fixture to make sure nothing is missed.",
  "Book your Brunswick end of lease clean online today. We're available seven days a week, including same-day bookings. WhatsApp us at 0488 841 883 for a fast, friendly quote. Every Brunswick bond clean comes with our 100% Bond Back Guarantee — if your agent raises any issues, we'll come back and fix it free within 72 hours.",
];

const highlights = [
  "100% Bond Back Guarantee",
  "Share House Specialists",
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
  { name: "Fitzroy", to: "/suburbs/fitzroy" },
  { name: "Carlton", to: "/suburbs/carlton" },
  { name: "Docklands", to: "/suburbs/docklands" },
];

export default function BrunswickPage() {
  return (
    <SuburbPageTemplate
      meta={{
        title:
          "Bond Cleaning Brunswick Melbourne | End of Lease Cleaning | Tru Bond Cleaning",
        description:
          "Professional bond cleaning in Brunswick Melbourne. We specialise in share houses and terrace homes. 100% Bond Back Guarantee. Book online today.",
        keywords:
          "bond cleaning Brunswick Melbourne, end of lease cleaning Brunswick, bond clean Brunswick VIC, exit clean Brunswick Melbourne",
        canonical: "/suburbs/brunswick",
        ogImage:
          "/assets/generated/suburb-brunswick-bond-cleaning.dim_800x500.jpg",
        schema,
      }}
      suburb="Brunswick"
      tagline="Bond Cleaning Brunswick"
      image="/assets/generated/suburb-brunswick-bond-cleaning.dim_800x500.jpg"
      imageAlt="Professional bond cleaning in a Brunswick Melbourne share house — Tru Bond Cleaning Melbourne"
      intro="Moving out of your Brunswick share house or terrace? Tru Bond Cleaning Melbourne handles heavy-use shared spaces and heritage homes. Get your full bond back — guaranteed."
      paragraphs={paragraphs}
      highlights={highlights}
      includes={includes}
      relatedSuburbs={relatedSuburbs}
    />
  );
}
