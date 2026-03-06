import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const SITE_URL = "https://trubondcleaningmelbourne.com.au";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Cleaning Melbourne",
  description:
    "Professional bond cleaning in Richmond Melbourne. 100% Bond Back Guarantee.",
  url: SITE_URL,
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Richmond",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: "Richmond, Melbourne, Victoria",
  priceRange: "$$",
};

const paragraphs = [
  "Richmond is a vibrant inner suburb just east of Melbourne's CBD. It's famous for the MCG and Melbourne Park, Victoria Street's Asian food strip, and Church Street's trendy cafes and boutiques. It's also one of Melbourne's most popular rental suburbs, especially among young professionals and sports fans. If you're moving out of a Richmond rental, you'll know that agents here are experienced and thorough.",
  "Richmond is packed with beautiful Victorian and Edwardian terrace houses. These heritage homes have narrow hallways, original timber floors, ornate fireplaces, and high ceilings with decorative cornices. Each of these features needs special care during a bond clean. Standard cleaning methods just don't cut it for Victorian-era properties — you need a team that understands how to clean these surfaces properly.",
  "Timber floors are one of the most common points of dispute in Richmond bond cleans. Agents check for scuff marks, residue build-up, and dull spots. Our team uses the right products for timber floors so they come up clean and shiny without being damaged. We also pay close attention to the fireplaces — a common missed item that can cost you part of your bond.",
  "Richmond's rental market is competitive, and bond amounts reflect that. Many Richmond properties command bonds of several thousand dollars. Our REIV-standard bond clean at Tru Bond Cleaning Melbourne covers every area your property manager checks at exit inspection — from the oven and stovetop to the skirting boards and light fittings.",
  "We've helped hundreds of Richmond renters get their full bond back. Our team works quickly and thoroughly, and we always bring all the professional-grade, eco-friendly cleaning products and equipment we need. There's no extra cost for bringing supplies — it's all included in your quote.",
  "Book your Richmond end of lease clean online today. Same-day bookings are available seven days a week. You can also reach us on WhatsApp at 0488 841 883 for a fast quote. Every Richmond bond clean comes with our 100% Bond Back Guarantee — if your agent isn't satisfied, we'll come back and fix it free within 72 hours.",
];

const highlights = [
  "100% Bond Back Guarantee",
  "Heritage Home Specialists",
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
  { name: "Fitzroy", to: "/suburbs/fitzroy" },
  { name: "Box Hill", to: "/suburbs/box-hill" },
];

export default function RichmondPage() {
  return (
    <SuburbPageTemplate
      meta={{
        title:
          "Bond Cleaning Richmond Melbourne | End of Lease Cleaning | Tru Bond Cleaning",
        description:
          "Expert bond cleaning in Richmond Melbourne. REIV-standard checklist, 100% Bond Back Guarantee, fully insured team. Book today — same day available.",
        keywords:
          "bond cleaning Richmond Melbourne, end of lease cleaning Richmond, bond clean Richmond VIC, exit clean Richmond",
        canonical: "/suburbs/richmond",
        ogImage:
          "/assets/generated/suburb-richmond-bond-cleaning.dim_800x500.jpg",
        schema,
      }}
      suburb="Richmond"
      tagline="Bond Cleaning Richmond"
      image="/assets/generated/suburb-richmond-bond-cleaning.dim_800x500.jpg"
      imageAlt="Professional bond cleaning in a Richmond Melbourne terrace — Tru Bond Cleaning Melbourne"
      intro="Moving out of your Richmond rental? Tru Bond Cleaning Melbourne specialises in heritage terrace homes. Get your full bond back with our 100% Bond Back Guarantee."
      paragraphs={paragraphs}
      highlights={highlights}
      includes={includes}
      relatedSuburbs={relatedSuburbs}
    />
  );
}
