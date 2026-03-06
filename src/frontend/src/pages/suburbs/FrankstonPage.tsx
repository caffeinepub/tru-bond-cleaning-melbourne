import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const SITE_URL = "https://trubondcleaningmelbourne.com.au";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Cleaning Melbourne",
  description:
    "Professional bond cleaning in Frankston Melbourne. 100% Bond Back Guarantee.",
  url: SITE_URL,
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Frankston",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: "Frankston, Melbourne, Victoria",
  priceRange: "$$",
};

const paragraphs = [
  "Frankston is Melbourne's bayside gateway to the Mornington Peninsula. Sitting on the shores of Port Phillip Bay at the end of the Frankston train line, it's a suburb that combines coastal lifestyle with strong community character. Frankston has beautiful Frankston Beach, a busy shopping precinct, and a growing arts and dining scene. It's also one of the most active rental markets in Melbourne's outer south.",
  "Frankston's rental properties range from classic beach houses and family homes on generous blocks to newer townhouses, units, and apartment buildings. The suburb is popular with families, tradies, and Peninsula commuters who want more space for their money while staying within reach of Melbourne's CBD. With a growing population and active development, the local rental market is competitive.",
  "Coastal properties in Frankston have specific cleaning challenges. Salt air from Port Phillip Bay accelerates mould growth in bathrooms and laundries, and it can leave a hazy film on windows. Sand tracked in from Frankston Beach embeds in carpets and floor tracks. Our team at Tru Bond Cleaning Melbourne understands these coastal cleaning challenges and tackles them with the right products and techniques.",
  "Family homes in Frankston typically need carpet steam cleaning as part of the exit clean. Carpeted bedrooms, hallways, and living areas that have had families living in them for years accumulate significant dirt, stains, and odours. Our professional hot water extraction carpet cleaning removes deep-set grime and leaves carpets fresh and clean — exactly what your property manager needs to see.",
  "Our REIV-standard bond clean in Frankston covers every area your property manager will inspect. We clean the kitchen from top to bottom, scrub every bathroom and toilet, clean all windows inside and out, wipe down walls and skirting boards, and make sure every light fitting, door frame, and track is spotless. We bring all our own eco-friendly, professional-grade products.",
  "Book your Frankston bond clean online today. We work seven days a week and offer same-day bookings. WhatsApp us at 0488 841 883 for a fast, friendly quote. Every Frankston bond clean comes with our 100% Bond Back Guarantee — if your real estate agent raises any issues, we'll come back and fix it for free within 72 hours.",
];

const highlights = [
  "100% Bond Back Guarantee",
  "Coastal Property Specialists",
  "Carpet Steam Cleaning",
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
  { name: "St Kilda", to: "/suburbs/st-kilda" },
  { name: "Box Hill", to: "/suburbs/box-hill" },
  { name: "South Yarra", to: "/suburbs/south-yarra" },
];

export default function FrankstonPage() {
  return (
    <SuburbPageTemplate
      meta={{
        title:
          "Bond Cleaning Frankston Melbourne | End of Lease Cleaning | Tru Bond Cleaning",
        description:
          "Bond cleaning in Frankston Melbourne. Bayside homes and apartments cleaned to inspection standard. 100% Bond Back Guarantee. Same day bookings available.",
        keywords:
          "bond cleaning Frankston Melbourne, end of lease cleaning Frankston, bond clean Frankston VIC, exit clean Frankston Melbourne",
        canonical: "/suburbs/frankston",
        ogImage:
          "/assets/generated/suburb-frankston-bond-cleaning.dim_800x500.jpg",
        schema,
      }}
      suburb="Frankston"
      tagline="Bond Cleaning Frankston"
      image="/assets/generated/suburb-frankston-bond-cleaning.dim_800x500.jpg"
      imageAlt="Professional bond cleaning in a Frankston Melbourne coastal home — Tru Bond Cleaning Melbourne"
      intro="Moving out of your Frankston rental? Tru Bond Cleaning Melbourne handles coastal mould, sandy carpets, and beach-facing windows. Get your full bond back — guaranteed."
      paragraphs={paragraphs}
      highlights={highlights}
      includes={includes}
      relatedSuburbs={relatedSuburbs}
    />
  );
}
