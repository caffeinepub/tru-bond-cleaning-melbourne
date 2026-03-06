import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const SITE_URL = "https://trubondcleaningmelbourne.com.au";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Cleaning Melbourne",
  description:
    "Professional bond cleaning in St Kilda Melbourne. 100% Bond Back Guarantee.",
  url: SITE_URL,
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "St Kilda",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: "St Kilda, Melbourne, Victoria",
  priceRange: "$$",
};

const paragraphs = [
  "St Kilda is Melbourne's famous beachside suburb. Sitting on the shore of Port Phillip Bay, it's one of Melbourne's most iconic neighbourhoods. With Luna Park on the foreshore, Acland Street's cake shops, and a buzzing nightlife scene, St Kilda attracts a huge mix of renters — from international students to young professionals and families. It's one of Melbourne's most active rental markets.",
  "The property mix in St Kilda is wonderfully diverse. You'll find beautiful Art Deco apartment blocks, grand Victorian mansions converted into flats, classic Californian bungalows, and sleek modern units. Each property type brings its own cleaning challenges, and our team at Tru Bond Cleaning Melbourne has experience cleaning all of them to the standard St Kilda agents require.",
  "Living near the beach is fantastic, but it creates a specific problem for renters: salt air and coastal moisture can cause mould to build up in bathrooms, laundries, and behind furniture. Agents in St Kilda are especially alert to mould — and finding it at an exit inspection can cost you a significant portion of your bond. Our team tackles mould with professional-grade, eco-friendly products that remove it completely.",
  "St Kilda windows are another key inspection point. Beach apartments with ocean views have windows that cop a lot of salt spray. Streak-free, crystal-clear windows are one of the things agents love to check. Our window cleaning service covers every pane, inside and out, including frames, tracks, and flyscreens.",
  "Our St Kilda bond cleaning service follows the REIV-standard checklist, which is the same checklist your property manager uses. We cover every room, every surface, and every fixture — from the oven and rangehood to the skirting boards and ceiling fans. Every St Kilda bond clean comes with our 100% Bond Back Guarantee.",
  "Book your St Kilda end of lease clean online today. We're available seven days a week and can often do same-day bookings. WhatsApp us at 0488 841 883 for a fast, friendly quote. Let Tru Bond Cleaning Melbourne take the stress out of your move.",
];

const highlights = [
  "100% Bond Back Guarantee",
  "Mould Removal Specialists",
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
  { name: "Prahran", to: "/suburbs/prahran" },
  { name: "Frankston", to: "/suburbs/frankston" },
];

export default function StKildaPage() {
  return (
    <SuburbPageTemplate
      meta={{
        title:
          "Bond Cleaning St Kilda Melbourne | End of Lease Cleaning | Tru Bond Cleaning",
        description:
          "Professional bond cleaning in St Kilda Melbourne. 100% Bond Back Guarantee. We clean beachside apartments and heritage homes to agent inspection standard.",
        keywords:
          "bond cleaning St Kilda Melbourne, end of lease cleaning St Kilda, bond clean St Kilda, exit clean St Kilda Melbourne",
        canonical: "/suburbs/st-kilda",
        ogImage:
          "/assets/generated/suburb-st-kilda-bond-cleaning.dim_800x500.jpg",
        schema,
      }}
      suburb="St Kilda"
      tagline="Bond Cleaning St Kilda"
      image="/assets/generated/suburb-st-kilda-bond-cleaning.dim_800x500.jpg"
      imageAlt="Professional bond cleaning in a St Kilda Melbourne beachside apartment — Tru Bond Cleaning Melbourne"
      intro="Moving out of your St Kilda rental? Tru Bond Cleaning Melbourne handles beachside mould, salt-spray windows, and Art Deco apartments. Get your full bond back — guaranteed."
      paragraphs={paragraphs}
      highlights={highlights}
      includes={includes}
      relatedSuburbs={relatedSuburbs}
    />
  );
}
