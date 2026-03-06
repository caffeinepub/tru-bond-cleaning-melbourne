import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const SITE_URL = "https://trubondcleaningmelbourne.com.au";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Cleaning Melbourne",
  description:
    "Professional bond cleaning in Carlton Melbourne. 100% Bond Back Guarantee.",
  url: SITE_URL,
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Carlton",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: "Carlton, Melbourne, Victoria",
  priceRange: "$$",
};

const paragraphs = [
  "Carlton is Melbourne's university suburb, right next door to the CBD. Home to the University of Melbourne and close to RMIT, Carlton is full of students, academics, and young professionals. Lygon Street — Melbourne's famous Italian restaurant strip — runs right through the heart of the suburb. It's a lively, energetic community with a very high turnover of rental properties.",
  "Because so many renters in Carlton are students or recent graduates, a lot of bond money gets lost at exit inspections. Students often don't know exactly what real estate agents check, and they end up losing hundreds of dollars from their bond for things that a professional clean would have easily covered. That's where Tru Bond Cleaning Melbourne comes in.",
  "Carlton's rental properties range from heritage terrace houses — some of the finest in Melbourne — to compact student apartments. Both types need a thorough professional clean to meet the REIV-standard checklist. Kitchen build-up, bathroom grime, and dusty blinds are the most common issues agents flag in Carlton exit inspections.",
  "Carlton agents are experienced. They've seen it all, and they know exactly what a properly cleaned property looks like. With our REIV-standard bond cleaning service, we make sure your Carlton rental looks exactly the way it did when you moved in. We clean the oven, stovetop, rangehood, all bathrooms, windows, walls, skirting boards, and everything in between.",
  "We use eco-friendly, professional-grade cleaning products that are safe for families, kids, and pets. Our team is fully insured and police-checked, so you can trust us in your home. We bring everything we need — no hidden charges for supplies or equipment.",
  "Book your Carlton bond clean online today. We work seven days a week and offer same-day bookings when available. WhatsApp us at 0488 841 883 for a quick quote. Every Carlton bond clean comes with our 100% Bond Back Guarantee — if your agent finds an issue, we'll fix it free within 72 hours.",
];

const highlights = [
  "100% Bond Back Guarantee",
  "Student Rental Specialists",
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
  { name: "Fitzroy", to: "/suburbs/fitzroy" },
  { name: "Brunswick", to: "/suburbs/brunswick" },
  { name: "Docklands", to: "/suburbs/docklands" },
];

export default function CarltonPage() {
  return (
    <SuburbPageTemplate
      meta={{
        title:
          "Bond Cleaning Carlton Melbourne | End of Lease Cleaning | Tru Bond Cleaning",
        description:
          "Bond cleaning in Carlton Melbourne for students and professionals. 100% Bond Back Guarantee, eco-friendly products. Free quote in minutes — book online today.",
        keywords:
          "bond cleaning Carlton Melbourne, end of lease cleaning Carlton, bond clean Carlton, exit clean Carlton Melbourne",
        canonical: "/suburbs/carlton",
        ogImage:
          "/assets/generated/suburb-carlton-bond-cleaning.dim_800x500.jpg",
        schema,
      }}
      suburb="Carlton"
      tagline="Bond Cleaning Carlton"
      image="/assets/generated/suburb-carlton-bond-cleaning.dim_800x500.jpg"
      imageAlt="Professional bond cleaning in a Carlton Melbourne apartment — Tru Bond Cleaning Melbourne"
      intro="Moving out of your Carlton rental? Don't lose your bond to missed cleaning items. Tru Bond Cleaning Melbourne covers every detail, with a 100% Bond Back Guarantee."
      paragraphs={paragraphs}
      highlights={highlights}
      includes={includes}
      relatedSuburbs={relatedSuburbs}
    />
  );
}
