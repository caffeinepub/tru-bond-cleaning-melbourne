import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const SITE_URL = "https://trubondcleaningmelbourne.com.au";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Cleaning Melbourne",
  description:
    "Professional bond cleaning in Box Hill Melbourne. 100% Bond Back Guarantee.",
  url: SITE_URL,
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Box Hill",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: "Box Hill, Melbourne, Victoria",
  priceRange: "$$",
};

const paragraphs = [
  "Box Hill is Melbourne's thriving eastern multicultural hub. Centred around Box Hill Central, Whitehorse Road, and the bustling Box Hill station precinct, it's one of the most dynamic and fastest-growing suburbs in Melbourne's eastern corridor. With a strong Chinese-Australian community and a fantastic range of Asian restaurants, shopping centres, and community facilities, Box Hill is one of Melbourne's most sought-after eastern suburbs.",
  "Rental properties in Box Hill range from spacious family homes on big blocks to modern townhouses and high-rise apartments. Family homes are very common here, and they typically have multiple carpeted bedrooms, large kitchens, double garages, and outdoor entertaining areas. All of these areas need to be thoroughly cleaned at the end of a lease — and carpet steam cleaning is almost always required.",
  "Carpet cleaning is one of the biggest issues in Box Hill bond cleans. Family homes with carpeted bedrooms, hallways, and living areas need professional hot water extraction steam cleaning to remove stains, odours, and embedded dirt. If you skip the carpet clean or try to do it yourself, agents will pick it up immediately. Our carpet steam cleaning service gives you the deep clean that agents expect.",
  "Eastern suburbs property managers in Box Hill are thorough and experienced. They use detailed inspection checklists and compare the property condition to the entry report. Our REIV-standard bond clean covers every area on their list — kitchen, bathrooms, windows, walls, skirting boards, light fittings, and more. We won't let anything slip through.",
  "Our team brings all the professional-grade, eco-friendly cleaning products and equipment we need. We clean the oven until it's spotless, scrub the bathroom tiles until the grout is white, and wipe down every cupboard inside and out. We work systematically through every room to make sure nothing is missed.",
  "Book your Box Hill bond clean online today. We're available seven days a week and offer same-day bookings when available. WhatsApp us at 0488 841 883 for a fast quote. Every Box Hill bond clean comes with our 100% Bond Back Guarantee — if your real estate agent finds any issue, we'll fix it for free within 72 hours.",
];

const highlights = [
  "100% Bond Back Guarantee",
  "Carpet Steam Cleaning Included",
  "Family Home Specialists",
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
  { name: "Richmond", to: "/suburbs/richmond" },
  { name: "Docklands", to: "/suburbs/docklands" },
  { name: "Frankston", to: "/suburbs/frankston" },
];

export default function BoxHillPage() {
  return (
    <SuburbPageTemplate
      meta={{
        title:
          "Bond Cleaning Box Hill Melbourne | End of Lease Cleaning | Tru Bond Cleaning",
        description:
          "Bond cleaning in Box Hill Melbourne for houses and apartments. Multicultural eastern suburb, REIV standard, 100% Bond Back Guarantee. Book online today.",
        keywords:
          "bond cleaning Box Hill Melbourne, end of lease cleaning Box Hill, bond clean Box Hill VIC, exit clean Box Hill Melbourne",
        canonical: "/suburbs/box-hill",
        ogImage:
          "/assets/generated/suburb-box-hill-bond-cleaning.dim_800x500.jpg",
        schema,
      }}
      suburb="Box Hill"
      tagline="Bond Cleaning Box Hill"
      image="/assets/generated/suburb-box-hill-bond-cleaning.dim_800x500.jpg"
      imageAlt="Professional bond cleaning in a Box Hill Melbourne family home — Tru Bond Cleaning Melbourne"
      intro="Moving out of your Box Hill family home or apartment? Tru Bond Cleaning Melbourne covers carpet steam cleaning and full end of lease cleans. 100% Bond Back Guarantee."
      paragraphs={paragraphs}
      highlights={highlights}
      includes={includes}
      relatedSuburbs={relatedSuburbs}
    />
  );
}
