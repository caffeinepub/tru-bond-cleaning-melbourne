import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const SITE_URL = "https://trubondcleaningmelbourne.com.au";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Cleaning Melbourne",
  description:
    "Professional bond cleaning in South Yarra Melbourne. 100% Bond Back Guarantee.",
  url: SITE_URL,
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "South Yarra",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: "South Yarra, Melbourne, Victoria",
  priceRange: "$$",
};

const paragraphs = [
  "South Yarra is one of Melbourne's most sought-after inner suburbs. It sits right on the banks of the Yarra River, close to the CBD, and it's home to Chapel Street — one of Melbourne's most famous shopping and dining strips. If you're moving out of a South Yarra rental, you're in one of Melbourne's most competitive rental markets. Real estate agents here inspect properties to a very high standard.",
  "Rental properties in South Yarra range from sleek modern apartments with city views to beautiful heritage homes and Art Deco buildings. Many properties feature polished timber floors, ornate cornices, and premium kitchen finishes. These surfaces need careful, specialist cleaning to pass a thorough exit inspection without any scratches, streaks, or missed spots.",
  "The average rent in South Yarra is among the highest in Melbourne, which means your bond is likely a substantial amount. Getting that bond back matters. Our team at Tru Bond Cleaning Melbourne knows exactly what South Yarra real estate agents check at exit inspections — from the inside of the oven to the grout lines in the bathroom tiles.",
  "We've completed hundreds of bond cleans in South Yarra and the surrounding inner-south suburbs. Our experienced cleaners arrive with all the equipment and eco-friendly products needed to tackle every surface, corner, and fixture in your home. We work to the REIV-standard checklist, which is the same standard your property manager uses.",
  "When you book Tru Bond Cleaning Melbourne for your South Yarra end of lease clean, you get our 100% Bond Back Guarantee. If your real estate agent finds any issue with the clean, we'll come back and fix it for free within 72 hours. No arguments, no extra charges. We stand behind every job we do.",
  "Book your South Yarra bond clean online today. Same-day bookings are available, and we can usually fit you in on short notice. Call us on WhatsApp at 0488 841 883 for a fast, friendly quote. Let us handle the clean so you can focus on your move.",
];

const highlights = [
  "100% Bond Back Guarantee",
  "REIV-Standard Clean",
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
  { name: "Richmond", to: "/suburbs/richmond" },
  { name: "Prahran", to: "/suburbs/prahran" },
  { name: "St Kilda", to: "/suburbs/st-kilda" },
];

export default function SouthYarraPage() {
  return (
    <SuburbPageTemplate
      meta={{
        title:
          "Bond Cleaning South Yarra | End of Lease Clean | Tru Bond Cleaning Melbourne",
        description:
          "Need bond cleaning in South Yarra? Tru Bond Cleaning Melbourne offers a 100% Bond Back Guarantee. Fully insured, same-day bookings available.",
        keywords:
          "bond cleaning South Yarra, end of lease cleaning South Yarra Melbourne, bond clean South Yarra, exit clean South Yarra",
        canonical: "/suburbs/south-yarra",
        ogImage:
          "/assets/generated/suburb-south-yarra-bond-cleaning.dim_800x500.jpg",
        schema,
      }}
      suburb="South Yarra"
      tagline="Bond Cleaning South Yarra"
      image="/assets/generated/suburb-south-yarra-bond-cleaning.dim_800x500.jpg"
      imageAlt="Professional bond cleaning in a South Yarra Melbourne apartment — Tru Bond Cleaning Melbourne"
      intro="Moving out of South Yarra? Get your full bond back with Tru Bond Cleaning Melbourne. We clean to the high standard South Yarra agents expect — 100% Bond Back Guarantee included."
      paragraphs={paragraphs}
      highlights={highlights}
      includes={includes}
      relatedSuburbs={relatedSuburbs}
    />
  );
}
